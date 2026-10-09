# find-your-point

**Stop making slides. Start making your point.**

### You bring the materials. Not the answers.

You shouldn't have to analyze, summarize, and organize everything yourself just to get AI to create a useful presentation.

**find-your-point does the heavy thinking first.** It guides your agent to read your materials, discover what matters, and build a clear story around what your audience needs to understand — without making you figure out the structure first.

The agent handles the analysis and organization, asking for your input when a decision genuinely needs you.

*Experimental Alpha · Agent-assisted analysis → local, editable HTML briefings.*

## You did the work. Let AI find the story.

Project updates, spreadsheets, meeting notes, feedback. A template-first workflow might organize them into **Background → Progress → Achievements → Next Steps**. But a tidy outline can still miss the point.

- **Find what matters.** Discover meaningful changes, relationships, and potential value across your materials.
- **Think beyond templates.** Shape the narrative around your audience, not predefined chapters.
- **Keep claims grounded.** Connect important findings to sources; separate evidence from assumptions.
- **Own the result.** Keep the HTML and editable source files, and refine them with your agent.

## Scattered inputs → important findings → audience-first briefing

**Synthetic demonstration — not a customer result.** Complaint statistics, carrier-change notes, product-launch records, and a confident supervisor opinion initially suggest a simple story: complaints rose, and two operational changes caused it.

Reading the records together reveals a different point: **the totals use different counting bases; category shares changed, but the causes remain unresolved.**

### 1. Find the comparison that actually holds

![English briefing: mixed ticket totals versus comparable complaint-category shares](docs/assets/demo-observed.png)

The briefing separates non-comparable ticket totals from the complaint-only category table.

<details>
<summary>2. Examine the business clues separately</summary>

![English briefing: logistics and product-use clues](docs/assets/demo-clues.png)

Delivery records and product-use records describe different issues, with different evidence gaps.

</details>

<details>
<summary>3. Bring the findings together without inventing a cause</summary>

![English briefing: synthesis of the findings and remaining gaps](docs/assets/demo-synthesis.png)

The synthesis keeps the valid category changes visible while preserving the unresolved count trend and attribution.

</details>

[Explore the synthetic inputs](examples/integrated-task-slice/source-packet.md) and [source correction](examples/integrated-task-slice/source-revision.md). To run the English demo, download the whole repository and open `examples/integrated-task-slice-en/index.html`. No build step is needed.

## Install & try

Works with supported **Agent Skills-compatible AI agents**. Installation uses [Skills CLI](https://github.com/vercel-labs/skills), which lets you select your agent.

```sh
npx skills add Kaisenberg-36/find-your-point
```

Then tell your agent:

> Use find-your-point. Read the materials in [my folder], find what really matters, and create a clear, editable briefing for [my audience]. Don't just summarize — help me make the point. Save the result in outputs/first-briefing/.

Bring authorized files and whatever you already know about the audience. You do not need to pre-summarize them. Your agent needs file access, editing and execution tools, readers for your formats, and a way to inspect rendered HTML. [Setup and dependencies](docs/USAGE.md).

## What you own

Open `outputs/first-briefing/index.html` and keep its **whole folder**: HTML, editable content, styles, scripts, and handoff notes. Ask your agent to revise it; evidence changes require reviewing the conclusions they support.

**Available:** material-first reasoning, adaptive narrative guidance, evidence records and checks, editable local HTML. **Experimental:** quality across new tasks and agents. **Planned:** full Evidence Mode, richer editing, print/PDF, and deeper visual and motion craft. Source tracing does not independently verify source truth.

Found a useful insight—or a missed one? [Share a small, non-confidential reproduction](CONTRIBUTING.md).

[MIT License](LICENSE) · Copyright (c) 2026 Kaisenberg-36. [Alpha scope](docs/PUBLICATION_POLICY.md).
