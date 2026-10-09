#!/usr/bin/env python3
"""Validate portable Gate 0 state; semantic evidence review remains agent work."""
import argparse
import hashlib
import json
from pathlib import Path
import sys

from jsonschema import Draft202012Validator

SCHEMA = Path(__file__).resolve().parents[1] / 'references/gate0.schema.json'
AUDITS = {'requirement', 'evidence_consistency', 'unsupported_claim',
          'authority_conflict', 'internal_consistency', 'completion'}
FACTS = {'SOURCE FACT', 'USER ASSERTION'}
INFERENCES = {'DERIVED INTERPRETATION', 'VALUE HYPOTHESIS'}
INACTIVE = {'rejected', 'excluded', 'retired'}


def fingerprint(state):
    payload = {k: v for k, v in state.items() if k not in {'audits', 'readiness'}}
    return hashlib.sha256(json.dumps(payload, sort_keys=True, ensure_ascii=False,
                                    separators=(',', ':')).encode()).hexdigest()


def validate(state, require_pass=False):
    schema = json.loads(SCHEMA.read_text())
    errors = [f"schema:{'/'.join(map(str, e.absolute_path))}: {e.message}"
              for e in Draft202012Validator(schema).iter_errors(state)]
    if errors:
        return errors

    def check(condition, message):
        if not condition:
            errors.append(message)

    all_ids = set()
    tables = {}
    for collection in ('sources', 'evidence', 'claims', 'decisions', 'conflicts', 'unknowns'):
        tables[collection] = {x['id']: x for x in state[collection]}
        for item in state[collection]:
            check(item['id'] not in all_ids, f"duplicate ID: {item['id']}")
            all_ids.add(item['id'])
    sources, evidence, claims, decisions, conflicts, unknowns = (
        tables[k] for k in ('sources', 'evidence', 'claims', 'decisions', 'conflicts', 'unknowns'))

    def refs(values, table, owner):
        for value in values:
            check(value in table, f'{owner}: dangling reference {value}')

    for e in evidence.values():
        refs([e['source_id']], sources, e['id'])
    for c in claims.values():
        refs(c['evidence_ids'], evidence, c['id'])
        refs(c['premise_ids'], claims, c['id'])
    for d in decisions.values():
        refs([d['evidence_id']], evidence, d['id'])
        refs(d['target_claim_ids'], claims, d['id'])
        if d['supersedes']:
            refs([d['supersedes']], decisions, d['id'])
    for c in conflicts.values():
        refs(c['claim_ids'], claims, c['id'])
        if c['resolution']:
            refs(c['resolution']['basis_ids'], sources.keys() | evidence.keys() |
                 claims.keys() | decisions.keys(), c['id'])
            refs(c['resolution']['retained_claim_ids'], claims, c['id'])
    for u in unknowns.values():
        refs(u['claim_ids'], claims, u['id'])
    for r in state['question_rounds']:
        refs([q['unknown_id'] for q in r['questions']], unknowns, 'question round')
        for q in r['questions']:
            refs(q['evidence_ids_at_ask'], evidence, 'ask-time evidence')
    for field, values in state['intent'].items():
        refs(values, decisions if field == 'frozen_decisions' else claims, field)
    if errors:
        return errors

    for src in sources.values():
        if src['authority'] == 'explicit_user_decision':
            check(src['kind'] == 'user_message', f"{src['id']}: decision authority requires user message")
    for e in evidence.values():
        src = sources[e['source_id']]
        check(src['status'] in {'inspected', 'partial'}, f"{e['id']}: evidence from unread/unavailable source")
        check(e['source_revision'] == src['revision'], f"{e['id']}: stale source revision")
        check(src['authority'] != 'AI_derived_interpretation', f"{e['id']}: AI interpretation is not primary evidence")

    def acyclic(table, edges, label):
        visiting, done = set(), set()

        def visit(key):
            if key in visiting:
                check(False, f'{label}: cycle at {key}')
                return
            if key in done:
                return
            visiting.add(key)
            for child in edges(table[key]):
                visit(child)
            visiting.remove(key)
            done.add(key)

        for key in table:
            visit(key)

    acyclic(claims, lambda c: c['premise_ids'], 'premise graph')
    acyclic(decisions, lambda d: [d['supersedes']] if d['supersedes'] else [], 'decision graph')

    superseded = {d['supersedes'] for d in decisions.values() if d['supersedes']}
    superseders = {}
    for d in decisions.values():
        src = sources[evidence[d['evidence_id']]['source_id']]
        check(src['kind'] == 'user_message' and src['authority'] == 'explicit_user_decision',
              f"{d['id']}: user decision needs explicit user evidence")
        check(evidence[d['evidence_id']]['representation'] == 'quote',
              f"{d['id']}: decision needs exact user wording")
        if d['supersedes']:
            check(d['supersedes'] not in superseders, f"{d['id']}: branching decision supersession")
            superseders[d['supersedes']] = d['id']
    current = {k: d for k, d in decisions.items() if k not in superseded}
    actions = {}
    for d in current.values():
        for cid in d['target_claim_ids']:
            actions.setdefault(cid, set()).add(d['action'])
    for cid, acts in actions.items():
        check(len(acts) == 1, f'{cid}: contradictory current user decisions')
        if acts == {'reject'}:
            check(claims[cid]['disposition'] in INACTIVE, f'{cid}: user rejection not applied')
        if acts == {'retire'}:
            check(claims[cid]['disposition'] == 'retired', f'{cid}: user retirement not applied')
        if acts == {'accept'}:
            check(claims[cid]['disposition'] not in INACTIVE, f'{cid}: current acceptance targets inactive claim')
        if acts == {'accept'} and claims[cid]['type'] in INFERENCES:
            check(claims[cid]['disposition'] == 'accepted', f'{cid}: user acceptance not applied')
    for did in superseded:
        for cid in decisions[did]['target_claim_ids']:
            check(cid in actions, f'{did}: supersession leaves prior target unaccounted for: {cid}')
    for cid, c in claims.items():
        if c['disposition'] == 'retired':
            check(actions.get(cid) == {'retire'}, f'{cid}: retired direction lacks current user retirement')

    for cid, c in claims.items():
        if c['type'] in FACTS:
            check(bool(c['evidence_ids']), f'{cid}: fact/assertion lacks evidence')
            check(c['disposition'] in {'supported', *INACTIVE}, f'{cid}: factual promotion via acceptance')
            for eid in c['evidence_ids']:
                kind = sources[evidence[eid]['source_id']]['kind']
                check(kind == ('user_message' if c['type'] == 'USER ASSERTION' else 'material'),
                      f'{cid}: claim type does not match source kind')
        if c['type'] in INFERENCES:
            check(bool(c['premise_ids']) and bool(c['reasoning'].strip()) and bool(c['limitations'].strip()),
                  f'{cid}: inference needs premises, reasoning, and limitations')
            check(c['disposition'] in {'proposed', 'accepted', *INACTIVE}, f'{cid}: inference promoted to fact')
            if c['disposition'] == 'proposed':
                check(c['assumption'], f'{cid}: proposed inference must be labeled as assumption')
        if c['type'] == 'VALUE HYPOTHESIS':
            check(c['requires_user_acceptance'], f'{cid}: value hypothesis must require user acceptance')
        if c['disposition'] == 'accepted':
            check(actions.get(cid) == {'accept'}, f'{cid}: accepted without current user decision')
        if c['is_quotation']:
            check(bool(c['evidence_ids']) and all(evidence[e]['representation'] == 'quote' for e in c['evidence_ids']),
                  f'{cid}: quotation lacks exact-quote evidence')
        if c['disposition'] not in INACTIVE:
            for premise in c['premise_ids']:
                check(claims[premise]['disposition'] not in INACTIVE,
                      f'{cid}: depends on inactive premise {premise}')
                check(claims[premise]['type'] != 'PRESENTER FRAMING',
                      f'{cid}: framing cannot serve as evidential premise')

    intent = state['intent']
    active = set(intent['active_direction'])
    for field, cids in intent.items():
        if field != 'frozen_decisions':
            check(all(claims[c]['disposition'] != 'retired' for c in cids),
                  f'{field}: retired claim remains in current intent')
    # Adoption propagates through the premise chain; an unaccepted goal cannot be
    # smuggled into the direction through a differently named interpretation.
    closure = set()
    pending = list(active)
    while pending:
        cid = pending.pop()
        if cid not in closure:
            closure.add(cid)
            pending.extend(claims[cid]['premise_ids'])
    for cid in closure:
        c = claims[cid]
        check(c['disposition'] not in INACTIVE, f'{cid}: inactive claim in active direction')
        if c['requires_user_acceptance']:
            check(actions.get(cid) == {'accept'}, f'{cid}: unaccepted expansion in active direction')
    for did in intent['frozen_decisions']:
        check(did in current and decisions[did]['action'] == 'accept', f'{did}: frozen decision is not current acceptance')
        check(set(decisions[did]['target_claim_ids']) <= active, f'{did}: frozen decision not reflected in active direction')
    for cid in intent['value_hypotheses']:
        check(claims[cid]['type'] == 'VALUE HYPOTHESIS', f'{cid}: value field requires hypothesis type')
    for cid in intent['inferred_communication_goal']:
        check(claims[cid]['type'] in INFERENCES, f'{cid}: inferred goal requires inference type')
    for cid in intent['user_stated_goal']:
        check(claims[cid]['type'] == 'USER ASSERTION', f'{cid}: stated goal requires user assertion')

    for conflict in conflicts.values():
        r = conflict['resolution']
        if conflict['status'] == 'open':
            check(r is None, f"{conflict['id']}: open conflict has resolution")
            continue
        check(r is not None, f"{conflict['id']}: missing resolution")
        if not r:
            continue
        retained = set(r['retained_claim_ids'])
        check(retained <= set(conflict['claim_ids']), f"{conflict['id']}: retained claim outside conflict")
        if r['method'] == 'user_direction':
            check(not any(claims[c]['type'] == 'SOURCE FACT' for c in conflict['claim_ids']),
                  f"{conflict['id']}: user direction cannot adjudicate source facts")
            check(any(x in current for x in r['basis_ids']), f"{conflict['id']}: no current decision basis")
        if conflict['status'] == 'excluded':
            check(r['method'] == 'exclude' and not retained, f"{conflict['id']}: inconsistent exclusion")
        for cid in set(conflict['claim_ids']) - retained:
            check(claims[cid]['disposition'] in INACTIVE, f'{cid}: losing conflict claim still usable')
        for cid in retained:
            check(claims[cid]['disposition'] not in INACTIVE, f'{cid}: retained conflict claim inactive')

    for u in unknowns.values():
        if u['status'] == 'inferred':
            check(u['tier'] == 'B' and bool(u['claim_ids']) and all(claims[c]['assumption'] for c in u['claim_ids']),
                  f"{u['id']}: inferred unknown needs Tier B assumption")
        if u['status'] == 'answered':
            check(bool(u['claim_ids']) and all(claims[c]['disposition'] in {'supported', 'accepted'} for c in u['claim_ids']),
                  f"{u['id']}: answered unknown lacks supported answer")
        check(u['tier'] != 'A' or u['status'] in {'open', 'answered'}, f"{u['id']}: blocking unknown silently deferred")
    for r in state['question_rounds']:
        ids = [q['unknown_id'] for q in r['questions']]
        check(len(ids) == len(set(ids)), 'question round: duplicate unknown')
        for q in r['questions']:
            check(q['tier_at_ask'] == 'A', 'question round: asks non-blocking unknown at ask time')
            check(q['status_at_ask'] == 'open', 'question round: asks already resolved/deferred unknown at ask time')
            check(bool(q['reason_at_ask'].strip()), 'question round: missing ask-time rationale')

    if require_pass:
        check(state['readiness'] == 'PASS', 'readiness is not PASS')
    if state['readiness'] == 'PASS' or require_pass:
        required = ('communication_context', 'audience_model', 'audience_concerns',
                    'user_stated_goal', 'desired_audience_shift')
        for field in required:
            check(bool(intent[field]) and bool(set(intent[field]) & active), f'PASS: missing active {field}')
        for field, cids in intent.items():
            if field not in {'frozen_decisions', 'value_hypotheses', 'inferred_communication_goal'}:
                check(all(claims[c]['disposition'] not in INACTIVE for c in cids), f'PASS: inactive claim in {field}')
        check(not any(s['relevant'] and (s['blocking_gap'] or s['status'] == 'unread') for s in sources.values()),
              'PASS: blocking material coverage gap')
        check(not any(u['tier'] == 'A' and u['status'] != 'answered' for u in unknowns.values()), 'PASS: unresolved Tier A')
        check(not any(u['tier'] == 'B' and u['status'] not in {'inferred', 'answered'} for u in unknowns.values()),
              'PASS: unresolved Tier B')
        check(not any(c['material'] and c['status'] == 'open' for c in conflicts.values()), 'PASS: unresolved material conflict')
        for c in conflicts.values():
            if c['status'] == 'open':
                check(all(claims[x]['disposition'] in INACTIVE for x in c['claim_ids']),
                      f"{c['id']}: unresolved conflict claims must be withheld")
        check(set(state['audits']) == AUDITS, 'PASS: missing semantic audits')
        for name, audit in state['audits'].items():
            check(audit['result'] == 'pass', f'PASS: failed {name} audit')
            check(audit['state_fingerprint'] == fingerprint(state), f'PASS: stale {name} audit')
    return errors


def validate_transition(previous, state):
    """Check preserved records; semantic compatibility still requires review."""
    errors = []
    if previous['project_id'] != state['project_id']:
        errors.append('history: different project')
    for collection, fields in (
        ('decisions', None),
        ('claims', ('text', 'type', 'scope', 'evidence_ids', 'premise_ids')),
        ('evidence', ('excerpt', 'representation', 'source_revision')),
    ):
        current = {x['id']: x for x in state[collection]}
        for old in previous[collection]:
            new = current.get(old['id'])
            if new is None:
                errors.append(f"history: deleted {collection} record {old['id']}")
            elif (new != old if fields is None else any(new[k] != old[k] for k in fields)):
                errors.append(f"history: rewritten {collection} record {old['id']}")
    rounds = previous['question_rounds']
    if state['question_rounds'][:len(rounds)] != rounds:
        errors.append('history: ask-time snapshots rewritten')
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('state', type=Path)
    parser.add_argument('--require-pass', action='store_true')
    parser.add_argument('--fingerprint', action='store_true')
    parser.add_argument('--previous-state', type=Path,
                        help='Also check preservation against a previous state from this task')
    args = parser.parse_args()
    try:
        state = json.loads(args.state.read_text())
        if not isinstance(state, dict):
            raise ValueError('State must be a JSON object')
        errors = validate(state, args.require_pass)
        if args.previous_state:
            previous = json.loads(args.previous_state.read_text())
            prior_errors = validate(previous)
            errors.extend('previous state: ' + e for e in prior_errors)
            if not errors:
                errors.extend(validate_transition(previous, state))
        if args.fingerprint:
            # Fingerprints are identifiers, not validation results or approvals.
            print(fingerprint(state))
            return 0
        if errors:
            print('\n'.join(errors), file=sys.stderr)
            return 1
        print(f"VALID ({state['readiness']}); semantic audit assertions are not independently verified")
        return 0
    except (OSError, ValueError) as exc:
        print(f'Cannot validate: {exc}', file=sys.stderr)
        return 2


if __name__ == '__main__':
    sys.exit(main())
