# Gate 6 · Continuity & Motion Architecture

**Runtime scope:** apply the continuation rule in [SKILL.md](../SKILL.md#runtime-authorization-and-continuation).
A full-briefing request authorizes necessary downstream stages. Stage-local stop/Trial
instructions below bound single-stage development requests; they do not require
fresh user approval during an already authorized briefing.

**Status: WORKING FREEZE.** Read when Gate 6 is explicitly authorized. Establish how
meaning, object identity and audience understanding remain continuous across cognitive
States. This reference guides a later Trial; it does not implement animation or
start Gate 7. Reuse the Base Artifact instead of redesigning it for motion.

**Continuity is the requirement. Motion is a conditional instrument.**

## Three connected dimensions

| Dimension | Question | Boundary |
|---|---|---|
| Semantic Continuity | Do concept, evidence, definition, scope, relationships and certainty retain their intended meaning across States? | Same wording or ID is insufficient if context changes its implication. A hypothesis must not return as an established fact. |
| Perceptual Continuity | Can the viewer recognize the returning object and its role without excessive relearning or matching? | A hidden stable key does not demonstrate recognition; stable labels, context and explicit returns may suffice without motion. |
| Temporal Orchestration | When should attention focus, context be retained, detail exit, evidence return and objects become jointly available? | Reading order is not business chronology, causal order or mandatory animation timing. |

These are reasoning dimensions, not an exhaustive taxonomy. Temporal orchestration
must preserve semantics and support recognition, rather than making a transition
smooth at their expense. An understanding-only endpoint stays understanding-only.

## Identity: three different commitments

- **Logical identity:** stable IDs for the content, object, Scene or State. They let
  the artifact retrieve and relate the intended records.
- **Rendered node identity:** whether the same DOM node instance survives a change.
  This is an implementation choice, not the definition of continuity.
- **Perceived object identity:** whether the audience understands that what returns
  is the same evidence, option or concept, with its meaning and limits intact.

A recreated node can present the same recognizable object; a persistent node can
silently change its text, scope or status and mislead. Neither implementation alone
proves perceptual continuity. Preserve necessary semantic and recognition anchors;
choose node persistence only if an actual implementation need warrants it.

Reusing a claim key propagates that stored value, not every paraphrase or downstream
interpretation. If content or source evidence changes, review affected meaning. Do
not maintain an obsolete status for the sake of continuity, or disguise an actual
revision as merely another view of unchanged evidence.

## Inputs and boundaries

- **Gate 3:** cognitive dependencies and viewing-path structure, including branches,
  comparisons and synthesis. Do not rewrite the path merely to fit an effect.
- **Gate 4:** Supported Meaning, Unsupported Reading, attention roles, co-presence
  requirements, evidence limits and interaction need.
- **Gate 5:** stable logical IDs, inspectable content and evidence links, renderable
  States and actual switching constraints. No persistent child DOM contract is assumed.
- **Gate 6:** continuity requirements, retention/exit/return choices over time, and
  whether a specific motion intervention earns its place.
- **Gate 7:** Meaningful Signature Expression; importance alone does not authorize an
  effect, and discovery readiness does not authorize advancing to this Gate.

The current two slices satisfy the input structure without code changes. Their prior
checks establish local rendering and reuse behavior, not audience recognition or
motion quality. Do not rerun them merely to enter Gate 6.

## Minimal continuity reasoning

For an important transition or short path, retain a compact note, not a schema:

1. **Cognitive handoff:** what was established, what is needed next, and which
   dependency or question links the States? Distinguish a reading link from a causal one.
2. **Identity and meaning anchors:** identify returning object/claim keys plus the
   labels, definitions, scope, units, evidence status and context needed to recognize
   them. Not all appearance must remain fixed; essential meaning must remain legible.
3. **Retention / Exit / Return:** what must remain available now, what may leave
   attention, and at which later point must it return? An exit means outside current
   focus, not disproven or deleted. Retention need not mean keeping everything on screen.
4. **Co-presence moment:** which objects and qualifications must be jointly available
   for comparison or synthesis? Return the basis needed now rather than asking viewers
   to reconstruct it from earlier States.
5. **Motion decision:** name the concrete recognition or inference burden, the best
   motion-free approach and what motion would additionally contribute. If there is
   no defensible benefit, use no motion. Record material Unsupported Readings.
6. **Stable endpoint:** the destination must remain readable with its evidence limits
   when paused. Meaning must not depend on catching a fleeting intermediate frame.

State count and transition duration are not prescribed. A coherent cut, repeated
label, explicit return, stable question or static comparison can provide continuity.
Focus, Retention, Exit, Return and Synthesis are not mandatory stages for every path.

## When Motion can earn a role

Start with motion-free continuity as a sufficient candidate, not a design failure.
Consider motion only for an identified cognitive job that simpler static structure
cannot adequately serve: for example, tracing the same object to a new comparison
role when otherwise difficult to match, or making a supported relation discoverable
without losing its reference context. Treat the predicted benefit as a hypothesis
until examined in a relevant Trial. Movement itself is never evidence of that benefit.

Prefer static switching when the same labels, returned context and direct co-presence
already make the relationship clear, when motion introduces stronger meaning than the
evidence, or when it makes reading compete with tracking. Do not animate merely because
a State changed, a point is important, or objects will eventually be synthesized.

If motion is later used, preserve a motion-free path to the same understanding and
honor reduced-motion needs. Backward navigation or an interrupted transition must
return to a coherent settled State, not leave claims and qualifiers separated.
These are future implementation constraints, not an engine or timing design now.

## Motion is Semantic Encoding

Every meaningful visual encoding is also a claim, including its intermediate motion.
Inspect the natural reading of the transition, not only the destination wording:

| Tempting transition | Unsupported Reading to avoid |
|---|---|
| Show A and then B | A caused B or occurred earlier in business time merely because it was read first. |
| Move or morph an object | A real business change, measured improvement or scope change occurred. |
| Converge candidate explanations into a result | Joint causation, combined contribution or completeness is established. |
| Intensify or promote an item | Evidence became more certain or an option became recommended. |
| Transform a Proposal into a result-shaped object | Approval, execution or validation occurred without supporting evidence. |
| Smoothly rescale or regroup evidence | Values, populations, categories or comparison bases remained equivalent when they did not. |

If the primary motion communicates an unsupported relationship, change or omit it.
A disclaimer cannot rescue a contradictory motion language. Qualification must travel
with the claim whenever needed for interpretation; an intermediate unqualified claim
can mislead even if the final State restores its caveat.

## Focus → Return → Synthesis without a fixed layout

Separate understanding can precede eventual co-presence. Specify what information is
available at each cognitive moment, not a mandatory screen arrangement or convergence.

For the three-chart concept example, the viewer may first understand each object's
pattern and later compare them in a shared context. Preserve object labels, measurement
definitions and a valid comparison basis. If scales differ, reconcile or explicitly
explain them before comparison; do not use smooth rescaling to imply measured change.
Return the relevant pattern and its qualification, not necessarily every original
mark. Static reconstruction may suffice. Do not require three focus screens, a
shared-axis animation or physical movement into one overview.

For parallel hypotheses, returning both alongside the phenomenon expresses a field
of possible explanations. Keep missing links visible; do not merge them into a new
composite cause. Logical convergence of a reading path is not causal convergence.

## What the Gate 5 slices establish

**Comparison slice:** claims and status labels recur in a static document. It supplies
an existing motion-free continuity candidate and direct comparison context. There is
no demonstrated need to animate options or privilege a recommended one.

**Parallel evidence slice:** the Scene frame remains while child nodes are recreated.
Object and claim IDs, wording and status recur in Focus, Return and Synthesis. This
establishes logical reuse despite node replacement. Whether a viewer can readily
recognize the returning evidence is still an empirical question. Reading logistics
before product clues creates no dependency between those explanations.

Neither slice requires an immediate rendering rewrite. Persistent nodes may later
help a chosen implementation, but they are not an architecture prerequisite inferred
from these examples.

## Local feedback and next Trial

If continuity is difficult, locate the failure before adding effects: implementation
identity/rendering; expression/recognition anchors; State or Scene granularity; or
upstream meaning/evidence/goal. Use the Expression Feasibility Feedback Loop to repair
only the affected layer. Never substitute motion for a missing evidential relationship.

Highest-information next hypothesis: in one Focus-to-Synthesis return from the existing
parallel-evidence slice, stable labels plus returned category/status context may be
sufficient for recognition without motion, despite child-node recreation. A bounded
Trial should look for relearning/matching burden and causal misreading; runtime IDs
alone cannot answer that question. Only if a material recognition problem remains
should a minimal motion alternative be considered. Do not prebuild that alternative.

Candidate concern: returning too much unchanged context may overwhelm synthesis;
returning too little may lose identity or caveats. Adjust only if the Trial exposes
that issue. No new taxonomy, engine, transition schema or formal benchmark is needed.

## Discovery completion

Minimal sanity only: continuity and motion are distinct; semantic/evidence boundaries
survive; motion-free continuity is supported; co-presence is availability over time;
reading order cannot promote causality; Gate 5 contracts remain compatible.

This model establishes a direction for Trial, not perceptual reliability, optimal
timing or a tested motion benefit. Stop after the model and direct consistency check.
Do not run the Trial or enter Gate 7 without a subsequent authorized task.

## Bounded Trial outcome · 2026-10-08

One rendered recognition-risk inspection followed logistics Focus through the product
State to Synthesis in the existing parallel-evidence slice. Visible labels, complaint
category, scope and uncertainty supported identifying the returned logistics clue;
no backward navigation was needed to retrieve its necessary context. The longer
Synthesis requires ordinary scrolling. Both explanations remained separate and
qualified; backward/forward navigation returned the same settled Synthesis.

No explicit recognition burden requiring repair was found. No code change, motion
candidate or persistent-node mechanism was introduced. This supports Working Freeze
for the current continuity architecture, not tested human comprehension, broad
perceptual reliability or motion benefits. Gate 7 remains separately authorized.
