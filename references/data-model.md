# State and Evidence Ledger

`gate0.schema.json` is the portable JSON Schema (draft 2020-12). Use one state per
communication task. It deliberately separates sources, evidence, claims, and user
decisions: authority, factual support, and permission answer different questions.

## Entities

| Entity | Purpose / key fields |
|---|---|
| State | `schema_version`, `project_id`, `gate`, `readiness`, `intent`, linked collections, `audits` |
| Source | Stable ID, title, URI/path/message ID, inspected revision, format, access/coverage status, relevance, authority and rationale |
| Evidence | Source ID + revision, precise locator, short excerpt or faithful summary, representation type |
| Claim | Stable ID, text, type, importance, disposition, scope, evidence links, premise links, assumption, limitations |
| Decision | Exact user-choice evidence, target claim IDs, accept/reject/retire, superseded decision ID |
| Conflict | Competing claims, consequence, material impact, resolution method and basis, retained claims |
| Unknown | Tier, question, consequence, state, assumption/answer claim IDs, classification rationale |
| Question round | Ordered `questions` containing immutable ask-time snapshots; maximum two per round |
| Audit | Six semantic checks, result and concise internal note, fingerprint of checked state |

`intent` uses claim-ID arrays instead of duplicated free text. Its fields cover
reporting task (owner/occasion/constraints), audience (role/decision power), audience
concerns, user-stated goal, inferred communication goal, desired audience shift,
and value hypotheses. `active_direction` is the formal adopted subset;
`frozen_decisions` references only current explicit user decisions. An unselected
proposal can remain visible in the brief without entering `active_direction`.
All intent fields describe the current briefing view. Historical directions remain
in `claims` and `decisions`, not in these current-view arrays. `user_stated_goal`
reflects the user's current explicit goal; the original goal remains traceable.

### Operative direction contract (schema 0.3.0)

`retired` is an inactive claim disposition for a previously valid direction that a
new user decision makes non-operative. Decision `action: retire` records that change
with exact user evidence. It does not reject historical truth or promote the new
direction to fact. `rejected` and `excluded` keep their existing uses.

`supersedes` replaces one complete prior decision, whose record stays unchanged.
Current decisions are those not superseded. Every target of a superseded decision
must be covered by a current action. For a mixed old acceptance, retire incompatible
targets and re-record compatible acceptances with their original evidence. Then
accept new targets with the new evidence. Multiple records can use the same user
quote; records are scoped actions, not additional user confirmations.

A current acceptance may not target an inactive claim. A retired claim requires
current retirement authority and cannot appear in any current intent array.
Frozen decisions are current explicit acceptances, stable until the user changes
them. Never treat frozen as irrevocable. Check the meaning of every operative
constraint; IDs and disposition fields cannot prove semantic compatibility.

Migration from 0.2.0 requires reviewing current versus historical direction,
recording actual supersession evidence where needed, and rerunning audits; no
automatic inference that the newest claim replaces all older claims. Set version
to 0.3.0 only after this review. Do not modify historical baseline files.

Use empty arrays for unknown/deferred fields in a draft; document consequential
gaps under `unknowns`. Do not fill a field just to satisfy shape validation.
At PASS, task, audience, concerns, stated goal, and desired shift must each have
usable claims. Concerns and shift may be labeled, supported assumptions within the
stated scope. No inferred goal or Value Hypothesis is mandatory when unsupported.

## Claim types and permitted use

### Question history contract (introduced in schema 0.2.0)

`unknown.tier` and `unknown.status` describe current necessity. Each
`question_rounds[].questions[]` stores `unknown_id`, `question_at_ask`, `tier_at_ask`,
`status_at_ask`, `reason_at_ask`, and `evidence_ids_at_ask` for historical legitimacy.
Only A/open snapshots are legitimate. New evidence can resolve or reclassify the
current unknown without invalidating a legitimate earlier question. Snapshots are
append-only descriptions of actual questions, not an event-sourcing system.

Schema 0.1.0 rounds containing only `unknown_ids` are rejected rather than silently
backfilled from current tiers. To migrate a saved state, reconstruct each snapshot
from the actual question turn and then-known evidence, update `schema_version` to
the current version after also reviewing operative direction, and rerun audits.
Do not invent missing historical context; retain an
unmigratable legacy state privately for review and do not claim a migrated PASS.
Old behavioral scenarios remain valid; the persisted state shape has changed.

### Claim categories

| Type | Meaning | Support / use |
|---|---|---|
| SOURCE FACT | What an inspected source reports | At least one current evidence link; wording must not exceed that source's scope or certainty |
| USER ASSERTION | What the user reports, including their stated needs | User-message evidence; keep attribution for unverified consequential business facts |
| DERIVED INTERPRETATION | Reasoning from facts or attributed assertions | Premise IDs, derivation, limitations; causal claims need causal support, not co-occurrence |
| VALUE HYPOTHESIS | Tentative explanation of why the work matters | Premise IDs, reasoning, limitation/alternative; always explicitly labeled; acceptance required for formal adoption |
| PRESENTER FRAMING | Non-factual communicative wording | Cannot introduce numbers, outcomes, causality, or disguised factual claims; link any underlying claims |

`disposition`: `supported` for sourced facts/assertions, `proposed` or `accepted`
for interpretations/hypotheses, and `rejected`/`excluded`/`retired` for retained inactive
claims. Acceptance is a direction choice, not an evidence grade. Machine checks
require premise/evidence chains even for excluded claims; if evidence never existed,
do not fabricate a fact record. Record the gap as an unknown, or a grounded
tentative interpretation. A completely groundless statement should be omitted.

All claims have `scope`: subject, metric/definition (including units/denominator
where relevant), period, population, and actual/forecast/not-applicable status.
Use `null` where genuinely not applicable; use an explicit uncertainty note where
unknown. This keeps conflicts from mixing unlike measurements.

Track key numbers, dates, results, business facts, comparisons, decisions, quotations,
causal judgments, and facts future narrative work would repeatedly rely on. Mark
them `important`. Do not turn every connective sentence into a claim.

## Evidence links

A locator must let someone find the basis again: file + page/section, spreadsheet
sheet + cells + header/period, slide + object, transcript timestamp + speaker, web
URL + heading + retrieval/version information, or message ID + relevant excerpt.
For formats without stable coordinates, keep a heading plus a unique excerpt and
describe the limitation. Never invent precise locations unavailable to the reader.

`excerpt` is a minimal support-bearing quote or faithful summary; `representation`
distinguishes them. Quoted claims must link to exact quotes. For calculated claims,
record the formula, inputs, units, and premise IDs in `reasoning`; preserve original
values. Evidence supports only the linked wording, not all possible conclusions.
Do not copy whole source documents or sensitive data unnecessarily into the ledger.

`SOURCE FACT` means traceably reported, not independently established universal
truth. If evidence is missing, narrow to an attributed user assertion when available,
downgrade to a supported hypothesis, ask if material, or omit. Merely having an
evidence ID does not establish entailment; semantic review is mandatory.

## Future editing and ownership

Future artifacts may link displayed claims to these IDs in optional Evidence Mode.
Audience Mode will hide evidence UI markers, while retaining necessary
verbal uncertainty and attribution. Hiding markers must never hide uncertainty.
No mode or HTML is implemented here. On later edits, keep IDs for the same assertion;
new assertions receive new IDs and evidence, and invalidate affected audits.

## Validation and audits

Install `requirements.txt`, then run:

```sh
python3 scripts/validate_gate0.py /path/to/state.json
python3 scripts/validate_gate0.py /path/to/state.json --fingerprint
python3 scripts/validate_gate0.py /path/to/state.json --require-pass
python3 scripts/validate_gate0.py /path/to/state.json --previous-state /path/to/prior.json
```

Default validation accepts incomplete drafts with intact structure/provenance.
`PASS` (or `--require-pass`) additionally enforces completion invariants and audit
freshness. The fingerprint omits `readiness` and `audits`; update semantic audit
records after inspecting the final state and before declaring PASS. A fingerprint
detects changed state, not changed external files; source revisions must be checked
when resumed. It proves neither the audit was performed nor its conclusion is right.

The optional transition check requires both states to satisfy the current contract.
It detects removed historical claims/decisions/evidence, rewritten decision records,
changed claim assertions, changed evidence excerpts/revisions, and altered question
history. It permits disposition changes and archival source remapping. It cannot
prove that a newly introduced supersession is authorized or that two differently
worded directions are compatible; compare them with the actual user turns.
