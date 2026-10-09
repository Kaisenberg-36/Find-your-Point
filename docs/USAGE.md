# Setup, use and maintenance

## Installation

[Skills CLI](https://github.com/vercel-labs/skills) discovers the root `SKILL.md` and installs its companion resources. The repository is `Kaisenberg-36/find-your-point`. Install with the command in the README.

Use Node.js and npm/npx. The CLI version checked for this candidate is **skills 1.7.1**, which requires **Node.js >=22.20.0**. The interactive installer lets you choose a supported agent and installation scope. Run it in the project where you want to work. Installing instructions does not provide the agent's model subscription, file readers or execution tools.

Local installation was checked for Claude Code, Codex, Cursor and OpenCode targets. This verifies discovery and file placement, **not equivalent end-to-end behavior in those four agents**. The minimal usage smoke is a same-context, restricted-material check, not an independent cross-agent test.

### Alternative: explicit file loading

Download and extract the whole repository. In a file-capable agent, ask: “Read this folder's SKILL.md and use find-your-point for my complete briefing task.” Keep references, scripts and examples with the entry. Do not copy only SKILL.md.

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
