# One-task integration · task-complaints-01

**Current version: r2-audited, public-context copy. Synthetic material; understanding-only.** Open `index.html`
locally. Copy this whole folder for handoff; there are no remote assets or runtime
dependencies. This is one task-specific implementation, not a universal renderer.

## Recipient quick start and transfer boundary

**Viewer:** retain this entire folder: `index.html`, `task.js`, `render.js`,
`style.css`, `source-packet.md`, `source-revision.md`, `task-context.md`, and `handoff.md`, plus any
later source revision named by task.js. Open index.html in a JavaScript-enabled
browser. No server, build, account or network service is needed for this example.
The first four files render the page; the source files and this note preserve its
meaning and maintenance context. Keep copies of earlier revisions before editing.

**Editing/reviewing agent:** also needs an accessible find-your-point Skill
folder: SKILL.md and the referenced Gate guidance, `scripts/validate_gate0.py`,
`references/gate0.schema.json`, and `requirements.txt`. Use the relevant guidance,
not private evals or the original conversation. Current task, delegated assumptions,
source authority, exclusions and framing dependencies are in task.js. The public task setup is retained in task-context.md; it is a synthetic reproduction
brief, not a customer transcript or permission to change a new user's goals.
If the recipient cannot access a source, preserve its locator, disclose the missing
verification and narrow or pause affected conclusions. Never invent a replacement.

Content and decisions live in `task.js`: `gate0` owns evidence/claims/intent;
`handoff` owns selection, Scene/States and audience framing. Styles are in style.css;
render.js consumes this task-specific structure. All audience headings as well as
paragraphs require semantic review: not every heading has an individual premise ID.
Search dependent `premise_ids` and `premiseIds` recursively, then State `claimIds`,
`returns`, adopted/qualified/excluded lists, titles, summary and visible wording.
Do not rely on the renderer to detect a changed meaning under an unchanged ID.

### Executable revision procedure

These commands are for a POSIX shell with Python 3. Work in the **copied Artifact
folder**, not the baseline. Set SKILL_ROOT to the recipient's actual Skill location;
the relative sibling below is an example, not a required directory layout.

```sh
export SKILL_ROOT="../find-your-point"
python3 -m venv .review-env
.review-env/bin/python -m pip install -r "$SKILL_ROOT/requirements.txt"
mkdir -p .review
.review-env/bin/python - <<'PYCODE'
import json
from pathlib import Path
s = Path('task.js').read_text()
task = json.loads(s[s.index('{'):s.rindex(';')])
Path('.review/before.json').write_text(json.dumps(task['gate0'], ensure_ascii=False, indent=2))
PYCODE
```

This example stores a JSON literal after window.TASK; the extraction recipe applies
to that format, not arbitrary JavaScript. Preserve it when saving. Do not execute
unknown source text to extract data.

1. Add the authorized source correction as a retained file (label synthetic tests).
   Add its source/evidence record, revision identifier and exact excerpt. A changed
   assertion gets a new claim ID; preserve prior claim text, scope and premises.
   Retire/exclude superseded claims and resolve any material authority conflict.
2. Reconcile active direction and adoption/qualification/exclusion. Recursively
   review dependent interpretations and framing, including untagged titles. Replace
   or withdraw stale wording, State references and returns. Do not change the task
   goal to preserve an attractive conclusion. Record the review in handoff.
3. Perform the six semantic audits recorded under gate0.audits using the completion
   contract: requirements, evidence, unsupported claims, authority, internal coherence
   and completion. Only after actual review, update their notes/results and readiness.
   A fingerprint is an identity check, not an audit. The following command refreshes
   fingerprints after your review and extracts the revised state for validation.

```sh
.review-env/bin/python - <<'PYCODE'
import importlib.util, json, os
from pathlib import Path
p = Path('task.js'); s = p.read_text()
task = json.loads(s[s.index('{'):s.rindex(';')])
spec = importlib.util.spec_from_file_location('gate0_validator', Path(os.environ['SKILL_ROOT']) / 'scripts/validate_gate0.py')
v = importlib.util.module_from_spec(spec); spec.loader.exec_module(v)
state = task['gate0']
for audit in state['audits'].values():
    audit['state_fingerprint'] = v.fingerprint(state)
p.write_text('window.TASK = ' + json.dumps(task, ensure_ascii=False, indent=2) + ';\n')
Path('.review/after.json').write_text(json.dumps(state, ensure_ascii=False, indent=2))
PYCODE
.review-env/bin/python "$SKILL_ROOT/scripts/validate_gate0.py" .review/after.json --require-pass --previous-state .review/before.json
```

Fix failures before claiming PASS. This validator checks the embedded Gate 0 state
and preserved history, **not** whether your new summary is justified. Pure style edits
do not need Gate 0 revalidation; changed evidence/intent does. Meaning-changing prose
always needs premise review and affected rendered inspection, even with unchanged state.

4. Save task.js and the source correction; reload index.html or reopen it in a new
   browser tab. Inspect each affected State and Return/Synthesis, exclusions and
   essential uncertainty; use browser error reporting to check runtime failures.
5. Update this handoff with the current revision, changed premises, framing decision
   and actual checks/limits. Preserve the revised full folder for continued use.
   `.review` and `.review-env` are local scratch/dependencies, not delivery files;
   the next editing agent recreates them with the companion Skill. Viewing remains
   independent of those tools. Do not claim a complete standalone Evidence Mode.

## Input, authority and current direction

`source-packet.md` preserves the original authorized Trial B excerpt, including its
unprocessed supervisor assertion and historical task framing. It was read before
constructing task content. The original `content.js` and HTML were not source inputs.
`source-revision.md` is an explicitly synthetic counting-basis correction introduced
after the initial Artifact was rendered, not a fact from the original source packet.

The current user delegated controlled context selection and allowed an understanding-only
endpoint. The executing agent set the audience to regional management, marked that
setup as an assumption, and did not invent user acceptance or a frozen business choice.
The task explains complaint records and attribution limits; it does not select remedies.
Source-role authority applies within scope: a supervisor's opinion is not causal proof;
the later statistics correction supersedes the old total definition only.

## One decision lineage, actually consumed

`task.js` contains the existing Gate 0 state under `gate0` and a small task-specific
working handoff under `handoff`. The latter is not a new schema. The renderer resolves
eligibility and premises against the original claim records. Audience prose under
`handoff.audience` is separately identified as Presenter Framing, not a second factual
ledger. It requires manual semantic review after premise changes; it is not an
automatically synchronized paraphrase. Source classifications remain inspectable in
`task.js`, while the audience reads authored analysis without per-claim status badges.

- **Gate 0:** operative intent, evidence, source revisions and claim dispositions.
  Existing schema/validator and semantic audits were applied before downstream work.
- **Gate 1:** useful category changes remain; total growth was withdrawn after the
  correction. No activity-to-capability or causal-outcome promotion.
- **Gates 2–4:** one understanding path, three States with explicit cognitive jobs,
  supported/unsupported meaning and required return context in the same handoff.
- **Gates 5–6:** local editable Artifact, selected claim IDs and internal evidence status,
  static navigation, direct scope/gap co-presence in Synthesis. After editorial repair,
  evidence classifications stay internal; natural wording carries necessary limits.
- **Gate 7:** No Signature Needed. The ordinary summary has recorded premises and
  review responsibility; no motion or additional Signature preview is required.

`adoptedIds` selects source records; `qualifiedIds` selects interpretations without
changing their type or granting factual certainty. `excludedIds` and reasons retain
the supervisor attribution, out-of-scope training activity and unsupported historical
joint-cause goal. Revision r2 also excludes the obsolete total/growth/basis claims.
These task selections are not user acceptance decisions. The renderer requires current
operative eligibility and rejects inactive premises. It cannot judge semantic truth.

## Editing and derived framing responsibility

1. Edit inspected source/evidence and the corresponding current records in `task.js`.
   Preserve historical assertions and locators; a changed assertion receives a new ID.
2. Review affected claim selection, authority, scope and downstream State references.
3. The executing/editing agent follows framing `premiseIds` and reviews the actual
   wording before presenting the revised Artifact. Update or withdraw stale framing.
   The original heading remains only as `superseded` history, not rendered content.
4. Recheck the changed foundation using the existing Gate 0 validator: extract
   `window.TASK.gate0` as JSON into working storage, perform semantic audits and
   refresh their fingerprints with the existing validator helper. No new validator
   is required. The validator does not assess narrative or title entailment.
5. Save and reload, then inspect the affected path. Source edits do not automatically
   update the retained evidence snapshot, independent framing or audit assertions.

The controlled r2 update showed why this matters: 82/113/119 no longer described
comparable complaint populations. `summary-r1` depended on `growth-r1`; the executing
agent withdrew that headline and reviewed `summary-r2` before presenting r2. A temporary
stale-framing check was blocked by its excluded premise. Same-ID semantic edits are
not automatically detected: manual review remains essential and travels with this folder.

## Assurance boundary

During the original integration step, existing Gate 0 validation and history preservation passed. One local desktop Chrome
path checked all three States, selected/excluded claims, displayed types, references,
back/forward settled state and saved r2 reload. Rendered inspection checked the initial
and corrected Synthesis. A local return-context adjustment kept scoped evidence available.
No obvious decision drift remained. No screenshots or test-output archive is required.

The r2-editorial repair retained the underlying evidence decisions and reviewed separately
identified audience framing against its premises. Targeted rendered inspection covered
all three States, natural local qualifications, eligible premise references, absence of
per-claim status badges and excluded assertions, and stable back/forward navigation.
No runtime errors were observed. This was an authored-expression and semantic-risk
inspection, not a human comprehension study or full regression.

This establishes execution for one task, not universal reliability, automatic source
tracking, full editorial tooling, human comprehension or Gate 9 delivery. The later
bounded Gate 8 Audit is recorded below. No additional independent Gate 1–7 Trial was run.

## Bounded Gate 8 Audit · 2026-10-09

The current task was traced from authorized understanding-only intent through source
authority, adopted/qualified/excluded claims, spine, State handoff and rendered prose.
No excluded supervisor attribution, training benefit or historical joint-cause goal
returned. Ordinary static expression and No Signature Needed remain appropriate.

**Repaired blockers:** category comparability depended on E1-r2 but was not explicit
in all affected framing premises; audience prose did not clearly distinguish the two
tables and used an unestablished same-period cue. The repair names the complaint-only
denominator, removes that cue, retains unspecified endpoint months, and links affected
framing to category-basis. State claim lists now include their actual presented premises.

Numerators are the named complaint categories; the denominator is complaints in the
separate classification table, not mixed inquiry/complaint totals. E1-r2 explicitly
asserts consistent definitions/population basis. This supports reported comparable
category structure within that table, not category counts, exact monthly trajectories,
or population-wide service quality. Raw category rows and endpoint months are absent;
comparability is source-attested rather than independently recomputed.

Targeted desktop Chrome rendering inspected all three States after the local repair;
State/presented-premise alignment and back/forward settled state passed without runtime
errors. Earlier unchanged editing/portability checks were reused. No full regression
or human comprehension study was performed.

**Deferrable:** manual semantic review of derived framing; source-file editing rather
than a full Evidence/Editor UI; no cross-task reliability or raw-data reconciliation.
**Premature:** advanced craft, motion, release hardening and broad device QA.
**Decision:** no unresolved blocker for this task; Gate 8 Working Freeze recommended
and recorded for the bounded scope. Gate 9 is ready to be scoped but has not started.

## Controlled handoff procedure check

The recipient procedure above was exercised in a separate synthetic working copy.
An E3 correction withdrew receipt-time fluctuation and triggered replacement of
dependent claims/framing, followed by the existing Gate 0/history validator and
affected rendered save/reopen checks. The baseline evidence and page were not
changed. This was a same-context restricted walkthrough, not independent-context
validation. Commands assume the current directory is the copied Artifact folder.
