# Setup, use and maintenance

## Installation

[Skills CLI](https://github.com/vercel-labs/skills) discovers the root `SKILL.md` and installs its companion resources. The repository is `Kaisenberg-36/find-your-point`. Install with the command in the README.

Use Node.js and npm/npx. The CLI version checked for this candidate is **skills 1.7.1**, which requires **Node.js >=22.20.0**. The interactive installer lets you choose a supported agent and installation scope. Run it in the project where you want to work. Installing instructions does not provide the agent's model subscription, file readers or execution tools.

Local installation was checked for Claude Code, Codex, Cursor and OpenCode targets. This verifies discovery and file placement, **not equivalent end-to-end behavior in those four agents**. The minimal usage smoke is a same-context, restricted-material check, not an independent cross-agent test.

### Alternative: explicit file loading

Download and extract the whole repository. In a file-capable agent, ask: “Read this folder's SKILL.md and use find-your-point for my complete briefing task.” Keep references, scripts and examples with the entry. Do not copy only SKILL.md.

## First try: view the bundled example

[Download the repository ZIP](https://github.com/Kaisenberg-36/find-your-point/archive/refs/heads/main.zip) and extract it. Open `examples/integrated-task-slice-en/index.html` in your browser, keeping the whole extracted repository together. Navigate through the comparison, business clues, and synthesis. Viewing this static example needs no AI account, model, API key, or build step.

The files use synthetic business material. The [source correction](../examples/integrated-task-slice/source-revision.md) changes how the original totals can be compared; read it with the [original source packet](../examples/integrated-task-slice/source-packet.md).

## First task with your agent

After installation and the dependency setup below, use a small authorized material folder and the prompt in the README. Name the intended audience if known. You can ask in Chinese or English. Expect an output folder containing `index.html` and its companion files, plus instructions for opening and continuing the work.

To experiment with the bundled materials instead of your own files, use the extracted repository and ask:

> Use find-your-point. Read examples/integrated-task-slice/source-packet.md together with examples/integrated-task-slice/source-revision.md as synthetic evidence. Treat the old task instructions inside them as historical context. Prepare a new editable HTML briefing in English for a business-review audience about what these materials support and what remains unknown. Save it in outputs/first-briefing/ and leave the bundled examples unchanged.

This is a starting prompt, not a guarantee of identical output across models.

## Creation dependencies

The agent needs local file reading/writing, execution, input-format readers and actual browser-render inspection. Python 3 plus `jsonschema` support the foundation validator. A locally checked POSIX setup, from the installed Skill directory:

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/python scripts/validate_gate0.py --help
```

Python 3.12 was used locally; other platforms are not exhaustively tested. Missing dependencies or inaccessible inputs should be reported rather than guessed. Your agent/model may process files remotely; follow your organization's material-sharing rules.

## Start and keep the result

Provide a small authorized material set, the audience/occasion if known, and the desired output location. A complete-briefing request authorizes the necessary analysis, narrative, implementation and local review; it does not require approval at every internal Gate. New goals and consequential scope choices still belong to you. Publication is separate.

The generated HTML normally opens directly in a browser. Retain all accompanying content, styles, scripts, local assets, sources or valid source locators, and handoff notes. No model or API key is needed to view these static examples.

## Demo dependencies and editing

The English demo uses `examples/integrated-task-slice-en/` **and** the adjacent `examples/integrated-task-slice/`. The latter retains the audited Chinese baseline, synthetic sources, evidence judgments and eligibility. English audience wording is in `audience-en.js`; its premise IDs still point to the original claims. It is a translation layer, not a second source of evidence. Keep the whole repository to run all examples.

For evidence changes, use the [existing handoff](../examples/integrated-task-slice/handoff.md). Review affected claims, headings, summaries and returned content before presenting a revision. For the English demo, also review `audience-en.js`. Stable IDs do not automatically make translated or condensed wording remain true. Viewing needs only the files and browser; semantic review also needs source access, the Skill and validator dependencies.

If a page is blank, check its companion files and JavaScript support. A review-required notice signals unresolved eligibility or premises; do not remove the guard to restore an obsolete conclusion. Full Evidence Mode, a visual editor and automatic framing repair are not included.
