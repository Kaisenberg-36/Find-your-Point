# User output and Gate 0 completion

## Intent Brief

Use the user's language. Keep the brief to roughly one screen where practical;
length is a usability target, never a reason to conceal a material conflict.
Merge adjacent fields naturally. Do not dump the ledger or internal reasoning.

- **Communication task:** Who is communicating, on what occasion, using which
  materials, and for what purpose.
- **Core audience and concerns:** Decision role and known concerns; label inferred concerns as assumptions.
- **User Stated Goal:** What the user currently explicitly asks to achieve; distinguish
  a changed goal from the original request only when useful to understanding.
- **Inferred Communication Goal:** A potentially more useful goal; identify it as
  suggested, accepted, or still unknown. Never silently adopt a scope expansion.
- **Desired Audience Shift:** The intended change in understanding, judgment, or
  action. If the starting belief is unknown, say so or label the assumption.
- **Current materials:** What is available, inspected, and missing. Unread is not reviewed.
- **Value Hypothesis:** Tentative value, a short basis and limitation, or no conclusion yet.
- **Key assumptions / conflicts:** Only those affecting understanding and choices.
- **Confirmation needed:** At most two actual blockers, or no blockers with an
  invitation to correct the stated assumptions. Translate these labels into the user's language.

The brief's consequential statements must resolve to ledger claims internally.
Keep optional proposals clearly separate from adopted direction. Do not ask the
user to validate every inference or the full ledger. Use an attributed or qualified
statement when provenance requires it; unmarked factual promotion is prohibited.

## Project Map

Present a short status block, for example:

> **Current position:** Gate 0 · Intent & Material Understanding — NEEDS_INPUT / PASS
> **Completed:** Understanding and evidence work actually completed.
> **Frozen decisions:** Explicit user choices, or none; never list assumptions as frozen.
> **Active problem:** The key blocker, or awaiting Gate 0 review.
> **Next step:** Resolve a blocking question, or continue the authorized workflow; an intake-only request stops here.
> **Why this step:** Establish intent and factual support before building.

## PASS criteria

All conditions must hold:

1. Communication task, primary audience, audience concerns, stated goal, and desired
   audience shift are represented, with support or explicitly labeled in-scope
   assumptions. Explicit task constraints and exclusions are respected.
2. Available relevant material is inspected or has a disclosed, non-blocking access
   limitation. Inventory distinguishes current, older, reference-only, and user input.
3. No unresolved Tier A unknowns and no unresolved material conflicts. Non-material
   omissions are explained. Passing with an unsupported foundational claim excluded
   is allowed only if the remaining direction is independently supportable.
   Determine blocking status from current unknowns, not past question snapshots.
   Check that each question was A/open when asked, its then-known basis is preserved,
   and evidence-resolved issues were not needlessly asked again.
4. All important facts have current, findable evidence; interpretations have valid
   premises and visible uncertainty. No evidence-free factual promotion, borrowed
   case achievements, invented quotes, or unjustified causal/comparative claims.
5. Active direction contains no rejected/excluded/retired claims. Any scope-expanding
   inference or adopted Value Hypothesis has clear, current user acceptance.
   Unaccepted suggestions can remain outside the active direction without blocking
   PASS. An unsupported “strong” value story is not a completion requirement.
   No materially incompatible old direction remains operative after a user change.
   Check every current intent field, accepted hypothesis, frozen decision, and brief
   for stale scope, priorities, audience, or shift. Preserve old provenance separately.
6. Six audits pass against the current state, and the validator passes. Intent Brief
   and Project Map faithfully reflect the state without leaking the internal ledger.
7. The foundation state retains `gate: 0`; downstream working notes remain separate.
   Assess this checkpoint before downstream generation. Previously completed authorized
   stages do not invalidate a revised Gate 0 foundation.

`DRAFT`: analysis incomplete. `NEEDS_INPUT`: a user answer/access is blocking.
`PASS`: foundation ready; not user approval of proposals or a new build grant.
Continue if the user already authorized a complete briefing; otherwise stop at the
requested endpoint. Use the Runtime authorization rule in [SKILL.md](../SKILL.md).
If tools fail, retain a draft and explain the specific limitation; do not report
validation success or PASS without the required checks.

## Internal audits (no separate reports)

Store only a result and concise useful note for each check in working state:

| Audit key | Check |
|---|---|
| requirement | All requested Gate 0 dimensions and explicit exclusions respected |
| evidence_consistency | Locators, revisions, units, dates, definitions, calculations, quotations, and claim wording agree with inspected sources |
| unsupported_claim | Each consequential brief claim has sufficient support; no interpretation, correlation, or framing promoted to fact |
| authority_conflict | Scoped hierarchy applied correctly; significant disagreements identified and resolved without aesthetic selection |
| internal_consistency | Current intent, operative direction, accepted hypotheses, current/frozen decisions, brief, and map agree in meaning; incompatible old constraints retired, compatible choices preserved, historical provenance intact |
| completion | All PASS criteria satisfied, including no material contradiction in operative state; no missing A information or later-gate work; a structural pass cannot replace semantic review |

Perform semantic checks yourself. The machine validator supplements them by checking
structure, links, stale evidence, adoption permissions, question limits, and PASS
preconditions. A structurally valid but misleading claim still fails Gate 0.
