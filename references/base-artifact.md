# Gate 5 · Base Artifact

**Runtime scope:** apply the continuation rule in [SKILL.md](../SKILL.md#runtime-authorization-and-continuation).
A full-briefing request authorizes necessary downstream stages. Stage-local stop/Trial
instructions below bound single-stage development requests; they do not require
fresh user approval during an already authorized briefing.

**Status: WORKING FREEZE.** Implementation must preserve semantic intent. Enter only when
authorized. Stop after the requested slice; no Gate 6 motion, Gate 7 Signature
Expression, full briefing, editor platform or release hardening is implied.

## Phase A: minimum contract

Consume the current Gate 0 objective, Gate 1 claims and evidence boundaries, Gate 2
Cognitive Spine, Gate 3 viewing path and Gate 4 Expression Plan. Do not infer content
from a component's available slots. In particular, preserve Supported Meaning,
Unsupported Reading constraints, attention roles, Semantic Co-presence and uncertainty.

Keep a small separation, not a general framework:

- **Content:** stable claim and object keys; editable wording/values; source locators,
  provenance category, claim status, scope and meaningful uncertainty.
- **Narrative:** stable Scene and State IDs, cognitive jobs, order/dependencies,
  references to content objects, Return Anchors and expression constraints.
- **Presentation:** HTML/DOM, CSS and rendering that consume those references.

A State is an attention state, not a mandatory screen or page. A single stable frame
can host multiple States; static coexistence is valid when Gate 4 needs no interaction.
Scene IDs identify cognitive containers, not generic section styling. Preserve object
identity across returns without duplicating editable claims. Later continuity should
be able to identify the same object; no animation engine is needed now.

Evidence metadata remains inspectable in source. Audience Mode retains the uncertainty
needed to understand a claim, without developer/provenance panels. Do not hide a
necessary qualification behind an optional interaction. A source link does not prove
entailment. Edits to claims or evidence require checking affected meaning and
Unsupported Reading constraints, not merely successful rendering.

Audience Mode must be an authored briefing, not an Evidence Ledger visualization.
Internal status does not require a visible badge on every claim. Follow
[Editorial Ownership & Guardrail Separation](expression-architecture.md#editorial-ownership--guardrail-separation):
use natural analysis and economical, well-placed qualifications. Preserve source
types, identities and eligibility internally. If presentation wording differs from
the underlying claim, retain its framing-to-premise connection and review entailment;
do not relabel the paraphrase as a new Source Fact. Source-level inspection is a valid
minimal inspection route; it does not establish a complete Evidence Mode interface.

**Ownability strategy:** choose stable content keys and separate editable values;
keep local source files inspectable and transferable. Explain how edits persist and
which files must travel together. A folder that opens offline can be a valid first
artifact; single-file export, in-browser authoring and storage are separate choices.
Do not copy historical Save HTML/localStorage implementations without a current need.

If ambiguity affects meaning, authorization or costly downstream dependencies, stop
with the concrete decision needed. Otherwise proceed autonomously to Phase B.

## Phase B: representative slice

The one-slice budget below applies to a bounded development Trial. For an authorized
complete briefing, use the minimum sufficient Scenes/States for its full cognitive
job; do not stop after an arbitrary first slice.

Choose a small Scene or related States that exercises consequential assumptions,
not merely the easiest markup. Give it enough base quality for readable semantic
inspection, without pursuing final style. Use static expression when sufficient.

Compare Intended Meaning with Implemented Signal: DOM order, grouping, scale,
position, emphasis and visibility can all introduce Unsupported Reading. Repair drift
before polishing. Diagnose implementation versus representation, State/Scene structure,
Spine or evidence problems; return only the necessary issue upstream.

## Current executable example

[The synthetic comparison slice](../examples/base-artifact-slice/index.html) is one
Scene with two static attention States: establish evidence status, then compare
arrangements. It consumes the Gate 4 Trial C meaning boundaries; it is not a universal
template or a public golden example. All business content is synthetic.

- `content.js`: editable content, embedded source excerpts and semantic/narrative
  metadata. Uses a plain script assignment so local opening needs no fetch/server.
- `render.js`: small example-specific renderer; outputs text with `textContent`,
  stable `data-claim-id`, `data-object-id`, `data-scene-id` and `data-state-id` hooks.
- `style.css`: restrained readable base presentation.
- `index.html`: local entrypoint. Copy all four files together; edit content.js and
  reload to persist changes. No build tools, remote services, fonts or dependencies.

The embedded excerpts keep this example understandable if private trial inputs are
absent; original source identifiers remain as provenance, not runtime dependencies.
Changing wording does not require changing rendering. Adding a new representation
may require renderer work: this example is deliberately not a component framework.

## Second topology: parallel evidence and Return

[The synthetic parallel-evidence slice](../examples/parallel-evidence-slice/index.html)
reuses the four-file organization and content/claim/evidence/narrative separation.
One Scene contains a stable frame with four attention States: observed phenomenon,
logistics clue, product clue and synthesis. Only previous/next switching is added;
there is no transition animation or recommendation endpoint.

Claim text and status are defined once. Objects reference claim IDs; States reference
objects. Focus, local Return and Synthesis read the same objects and claims, including
visible uncertainty. Reading order is separate from evidence dependency: both clue
States depend on the observed phenomenon, not on each other. Synthesis depends on
all three. This is not a causal graph or a new general schema.

The renderer is deliberately example-specific. It reuses the local plain-script,
textContent and stable data-ID approach, not the first slice's comparison markup.
The Scene frame is retained during switching; child DOM is recreated with stable
logical identities. Retaining child DOM nodes for future motion is not validated or
required here. Add representation abstractions only when a further real need warrants
one; two examples do not establish a universal renderer.

Edit `examples/parallel-evidence-slice/content.js`, save and reload. Copy that entire
four-file folder for transfer. Embedded synthetic evidence supports offline inspection.
The source packet's asserted multiple-factor explanation is narrowed to candidate
explanations: missing causal evidence must not become a fact through synthesis.

## Minimal validation and stopping

Check the slice actually opens, key content and evidence-status distinctions survive,
co-presence is possible, content edits reach every referenced occurrence, and identities
are stable. Inspect the highest semantic-risk rendered region directly; DOM checks
alone cannot establish perceptual fidelity. A relevant narrow-viewport check is useful
when comparison availability might otherwise break. Do not create a screenshot archive.

Record unresolved issues as Blocker, Material but Deferrable, Minor or Premature.
No broad regressions or new baseline by default. Stop after contract and one slice.
Gate 6 receives stable identities, States, anchors and semantic constraints; it must
not change them merely to enable motion. Evidence Mode, richer editing/export and
production reliability remain deferred unless the current authorized task needs them.

## Authorized Gate 6 handoff

When Gate 6 is explicitly requested, provide the existing logical IDs, State path,
return anchors, evidence boundaries and renderer behavior to
[Continuity & Motion Architecture](continuity-motion.md). Persistent child DOM is
not a prerequisite. Source-key reuse does not automatically update independently
worded interpretations, and runtime identity does not prove audience recognition.


## Gate 9 · Delivery scope and readiness

**WORKING FREEZE — bounded agent-assisted controlled-use contract, not a release promise.** This
section owns delivery scope for the current architecture. It does not authorize
packaging, installation, publication or implementation of the next step.

### Two deliverables, different dependencies

The Skill is agent-executed reasoning guidance with a Gate 0 validator and bounded
implementation examples. Gates 0–7 are documented; selected forms are demonstrated;
one synthetic task has integrated execution and a bounded Gate 8 audit. Fresh-context independent
use and cross-task reliability are not established by that result.

Recommend **agent-assisted controlled use** before public distribution. This keeps
the HTML Executive Briefing product goal and its quality ambitions intact, while
making current editing and review responsibilities explicit. A turnkey general
briefing generator or nontechnical visual editor would materially enlarge this
stage and requires an owner scope decision.

| Delivery layer | Current minimum | Dependency / limit |
|---|---|---|
| Agent-side Skill | SKILL.md, referenced runtime guidance, Gate 0 schema, validator and requirements; selected examples when implementation needs them | An agent with authorized file-reading/writing and browser inspection tools; Python 3 and jsonschema from requirements.txt for Gate 0 validation. Actual format extraction depends on available tools; arbitrary file support is not promised. Exact distributable file closure is not yet packaged or tested. |
| Audience Artifact | Local index.html plus its content/narrative data, renderer, styles and used assets | Current examples open with JavaScript in a browser, without server, build step or external assets. This does not imply all future renderers have those properties. |
| Ownership handoff | Relevant source excerpts/locators, claim decisions, framing premises and a short edit/review instruction with the output | Preserve access restrictions and disclose unavailable sources. The recipient needs more than index.html to inspect or edit meaning. Private evals are never a runtime dependency. |

### Intended use and decision boundary

Today a controlled task can explicitly direct the agent to read this repository's
SKILL.md and use specified authorized materials. Host installation/discovery and a
fresh-user invocation have not been validated; naming the Skill alone is not proof
that the host loaded it. A proposed request is: "Use this Skill with these materials
for this audience and occasion; help them understand or decide X; continue through
a local editable HTML briefing within this scope." It is a request example, not an
executed acceptance test. Preserve existing Gate stops where continuation has not
been authorized; do not make the user approve every implementation step.

Users supply available materials and whatever audience, occasion, goal or constraints
they already know. The agent reads first, infers recoverable context with labeled
assumptions, and asks only material unresolved questions. It applies the existing
Gate guidance, records operative intent and claim adoption/exclusion, and carries
those decisions into expression. The integrated example illustrates that responsibility;
it is not a universal renderer or a source of the new user's business facts.

User intervention is needed for scope-expanding goals, formal adoption of a Value
Hypothesis, material unresolved direction/authority conflicts, and choices that
change delivery scale. Routine content organization, expression and local repairs
remain agent work. User approval cannot turn an unsupported claim into a fact.

### Output and ownership acceptance

For the recommended controlled scope, deliver a task-sized local HTML Executive
Briefing and its editable source folder, with a short opening/editing/handoff note.
One Scene is the demonstrated integration scope, not a mandatory product template
or proof of longer briefing quality. Preserve the authorized understanding/judgment/
action endpoint. Static continuity and No Signature Needed remain valid outcomes.

Audience Mode uses accountable presenter language and necessary local uncertainty;
it must not display an internal ledger by default. Internal provenance, exclusions,
statistical scope and framing premises remain inspectable. Do not claim a complete
Evidence Mode merely because these records exist in source files.

The owner can open index.html, preserve the whole folder, edit text/data with a text
editor or an agent, save, reload and transfer that folder. In-page navigation does
not save edits; there is no in-browser authoring or save/export service. Original
inputs that cannot travel must retain useful locators and an explicit access limit.
For nontechnical owners, agent-assisted editing is the current practical route.

After a source/meaning change, the editing agent must reconcile evidence and claim
eligibility, review all dependent framing (including headings), update or withdraw
stale wording, and inspect the affected rendered path. Stable IDs do not perform this
review. Gate 0 state changes also need its existing validator and refreshed semantic
audits. Those tools belong to the agent-side Skill, not the browser runtime; without
them, the recipient may view/edit files but cannot claim that workflow was revalidated.
A delivery must explain how that review can be resumed without the original chat.

### Readiness and the next minimum step

**Controlled-use readiness:** the recipient procedure in the existing
[integrated handoff](../examples/integrated-task-slice/handoff.md#recipient-quick-start-and-transfer-boundary)
now specifies files, companion dependencies, state extraction, historical validation
and manual framing review. One copied-folder synthetic evidence correction was
executed through open, edit, impact review, framing revision, validation and saved
reload. The original baseline remained unchanged.

This was a same-context restricted recipient-perspective walkthrough, not a fresh
agent or general independent-use validation. No unresolved blocker was found for
this controlled scope. Viewing needs only the Artifact folder/browser; reviewed
meaning changes still require the companion Skill and semantic judgment. Gate 9
Working Freeze is limited to that boundary. Stop here; neither public release nor
a new reliability trial follows automatically.

**Deferred, not removed:** full Evidence Mode with correction support, improved editing,
print/PDF and other exports (browser printing is not validated delivery), advanced
layout/chart craft, smooth purposeful motion, and context-appropriate expression
refinement drawing on authorized references. No current evidence establishes these
as complete. Add them when scoped; they remain product requirements or enhancement
opportunities, not reasons to start visual research during delivery Discovery.

Public release is separately gated by [Publication Policy](../docs/PUBLICATION_POLICY.md):
file selection/privacy/rights and license decisions, public/private eval separation
and candidate-version checks remain outstanding. A working local Artifact cannot
satisfy those conditions. Do not distribute the entire workspace as a Skill package.
