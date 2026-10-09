# Gate 1 · Evidence & Transformation Extraction

**Runtime scope:** apply the continuation rule in [SKILL.md](../SKILL.md#runtime-authorization-and-continuation).
A full-briefing request authorizes necessary downstream stages. Stage-local stop/Trial
instructions below bound single-stage development requests; they do not require
fresh user approval during an already authorized briefing.

**Status: WORKING FREEZE.** This is a reasoning model to develop through use, not
a frozen schema, a maturity ladder, or a validated general-purpose extraction engine.
Read it when Gate 1 is explicitly requested. Stop before Pattern Diagnosis,
Cognitive Spine, narrative sequencing, or artifact generation.

## Question and unit of work

**What truly changed?** Extract a supported difference in how work operates, who
can do it, or what results it produces. Categorizing activities is useful indexing,
but is not itself transformation discovery.

The working unit is a **Transformation Candidate**: a bounded change proposition
plus the evidence relation that supports or challenges it. Start with a concrete
contrast, not an impressive category: “Previously X; now Y, within scope Z.”
If the earlier condition is unknown, say so. A documented current practice or outcome
can be worth reporting without proving that it is new, better, or transformational.

Improvement is not assumed. Deterioration, displaced effort, unresolved dependencies,
and mixed results are legitimate findings. Delivery itself can be valuable; do not
invent organizational evolution to make it interesting.

## Entry and authority

Use Gate 0's **current operative intent** to decide which changes matter to this
audience. Keep historical claims and decisions available as provenance, not current
instructions. An accepted Value Hypothesis authorizes a communication direction;
it does not verify an explanation or a capability claim.

Read the relevant source passages, with existing claim/evidence IDs where available.
Do not rerun Gate 0 merely to begin extraction. If one missing link is needed for a
candidate, inspect or link that evidence locally. A defect that does not affect the
chosen candidates can remain deferred. A material contradiction in adopted intent
or a necessary source must be resolved before relying on it.

New discoveries outside the chosen scope remain suggestions. Revisit only the
affected Gate 0 decision if the user chooses a different direction. Business
decisions found in material are different from user decisions authorizing this briefing.

## Extraction spine: questions, not mandatory stages

Events → Decisions → Changes → Role Shifts → Mechanisms → Capabilities → Outcomes
→ Future Implications is a set of related inquiry lenses. It is neither a causal
chain nor eight required fields. An outcome may precede a mechanism; a mechanism
may exist without a beneficial outcome. Use only lenses that help explain evidence.

| Lens | What to look for | Boundary against overclaiming |
|---|---|---|
| Event / Activity | A dated occurrence or work performed: launch, meeting, migration, training | An occurrence alone does not establish a changed way of working or an effect. |
| Decision | A choice, who made it, its scope, and any documented rationale or tradeoff | An implementation is not proof of a formally approved choice. Preserve implicit choice as interpretation; do not invent rejected alternatives. |
| Change | A comparable difference in process, behavior, access, responsibility, constraints, or results | Identify the reference condition, current condition and boundary. “More work” may be scale, not a changed mechanism. Unknown baseline means change is not yet established. |
| Role Shift | Changed responsibilities, discretion, dependency or decision rights, with evidence of actual enactment | A new title or one helpful act is insufficient. Separate assigned authority from exercised authority; do not turn coordination into a personality or leadership evaluation. |
| Mechanism | A repeatable arrangement: trigger, participants/owner, rule or handoff, and relevant feedback or exception handling | A checklist or policy is a designed mechanism candidate. Use in practice supports operation; one rescue does not establish routine operation or persistence. Not every mechanism needs every component. |
| Capability | A bounded ability to perform under stated conditions, supported by execution, resources and operating arrangements | Distinguish a successful instance from repeatable ability. Look for repetition, another operator, changed conditions, and failure limits as relevant; no magic sample count. Mechanism existence alone does not prove capability. |
| Outcome | A produced output or observed effect, with scope, timing and attribution | Completed delivery is an output; adoption, reduced waiting or a recipient benefit are different effects. Do not demote all outputs to “mere activity,” or infer an effect from activity volume. |
| Future Implication | A conditional possibility or next question grounded in a supported change | State dependencies and what would disconfirm it. A possibility is neither a forecast nor an authorized strategy, scaling plan, or resource request. |

## Minimal working model

Use short notes or a compact table. These field names are provisional; do not create
a new schema or force them into the Gate 0 state document.

| Field | What must be understandable |
|---|---|
| `candidate_id` / `change_statement` | A stable local handle and one concrete proposition about what changed; lenses are optional labels. |
| `contrast_and_scope` | Earlier/reference condition, current condition, relevant time/population/definition, and what remains unknown. |
| `evidence_links` | Claim/evidence IDs and locators, each with its role: baseline, current observation, choice, enactment, result, counterevidence or context. |
| `reasoning_and_limits` | Why these observations jointly support the proposition; comparability, dependencies, alternatives, causal limits and missing support. |
| `assessment` | `supported_within_scope`, `hypothesis`, `not_established`, or `contradicted`; apply to the exact proposition, not the entire project. |
| `audience_relevance` / `next_use` | Why this matters to the current audience; usable finding, optional angle, defer, or one consequential clarification. |

Keep supported observations separate from their explanation. If the process change
is supported but its claimed effect is uncertain, split them into two propositions
rather than assigning one confidence label to both. These assessments do not replace
Gate 0 claim types or user acceptance; a hypothesis remains visibly tentative even
when selected for the briefing.

## How evidence becomes transformation

1. **Find a contrast worth investigating.** Use changed routines, dependencies,
   exceptions, responsibility boundaries or recipient results as starting points.
   Retain event-only findings when that is all the material supports.
2. **Join evidence by a specific proposition.** A decision memo may show intended
   change; an operating record may show enactment; a later observation may show an
   outcome. Explain each link. Three copies of one report are not three independent
   observations, and chronological order is not causal proof.
3. **Challenge the difference.** Check whether definitions, populations, workload
   or measurement changed. Seek counterexamples already in the authorized material.
   Distinguish deliberate redesign from temporary workaround and assigned role from
   actual practice. Keep causal explanations as hypotheses without adequate support.
4. **Choose the narrowest useful conclusion.** Preserve the useful change without
   overclaiming its scale, durability or cause. Split competing explanations when
   necessary. Do not fill missing before-state evidence with an imagined history.
5. **Connect to the audience without designing the story.** Explain the practical
   consequence for their existing question. Do not choose a Narrative Pattern,
   argument sequence or new strategic objective. Ask only if the answer changes a
   consequential conclusion; otherwise narrow, label or defer it.

Reuse the Evidence Ledger rather than copying sources into another evidence store.
Every important assertion in a candidate needs a complete route to its support,
including facts introduced inside interpretations. On source or intent updates,
revisit affected candidates and preserve prior assertions; do not treat all history
as simultaneously operative. No new event-sourcing system is required.

## Three synthetic worked contrasts

These are explanatory examples, not real customer evidence or executed model evals.

**1 · Activity and current output, unknown earlier state.** A release note says
“four services migrated this month”; an operating guide describes automated alerts,
but no earlier operating record is provided. The migration output and the documented
alert design are reportable. “Moved from reactive to proactive operations” is
`not_established`: neither the prior condition nor actual alert use is shown. Do not
infer efficiency gains or a new capability from the word “automated.”

**2 · Multiple sources support a bounded change, not all of its effects.** An earlier
procedure requires every exception to be approved by a central reviewer. A dated
decision delegates routine exceptions to shift leads and reserves high-risk cases
for the reviewer. Subsequent logs show different leads resolving routine exceptions,
including a shift when the reviewer was absent; the high-risk route remains in use.
These sources jointly support a change in decision rights and enacted work routing.
They support a scoped mechanism and evidence of operation beyond one individual.
They do not by themselves prove faster resolution, savings, or organization-wide
independence. If routine resolution becomes slower in the same comparable logs,
report that adverse outcome too; role change does not guarantee improvement.

**3 · Outcome signal with a confounded explanation.** Comparable records show fewer
failed deliveries after new handoff instructions, but routing was also simplified.
The observed outcome change can be `supported_within_scope`; the instructions'
contribution remains `hypothesis`. If only one experienced operator handled the new
route, a team-wide capability is `not_established`. A useful future implication is
conditional: operation by another operator under the stated conditions could test
transferability. It is not a recommendation to expand the program or fund a rollout.

## Output and stopping point

Offer a concise **Transformation Findings** summary: the most relevant supported
changes, valuable current outcomes where change is unproven, hypotheses with their
limits, and only consequential missing evidence. Keep detailed joins internal but
inspectable; do not give the user an eight-section worksheet or ledger audit task.

For this discovery step, stop when the model distinguishes activity from change,
explains how evidence supports the selected propositions, and gives a usable next
extraction step without a material blocker. No exhaustive coverage, independent
scoring, new baseline, Gate 1 production completion claim, or Gate 2 work is implied.

Still flexible: unit granularity, assessment labels, optional lens labels, persistence
format and later handoff representation. Next, try a small authorized real-material
slice and revise only where it reveals a meaningful modeling problem.

## Authorized Gate 2 handoff

When the user authorizes continuation, pass relevant evidence-grounded findings,
including results, problems, risks, decisions, proposals and constraints without
requiring a transformation. Preserve all source links, scope and uncertainty.
[Narrative Logic Diagnosis](narrative-logic-diagnosis.md) organizes these units; it
cannot complete missing causal, outcome or capability claims.
