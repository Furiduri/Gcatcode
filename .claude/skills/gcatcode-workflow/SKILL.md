---
name: gcatcode-workflow
description: "Trigger: starting or resuming work on GCatCode, gcatcode.com, CV site, continue, seguimos, arranquemos con #N, fix a bug. Enforce sync-with-main, issue-first work and verification discipline."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "2.0"
---

## Activation Contract

Load when a session starts or resumes work on this repo: a new task, "continue", a numbered issue, or a bug report.

## Hard Rules

- Never assume state from memory: read git, the issue and the ADRs (`docs/adr/README.md`) before acting.
- You write the code, issues and PR bodies; the owner decides positioning, visual direction, what appears about their career and business, prices and terms.
- Never edit files on `main` or on a branch that belongs to another issue.
- Ask one question at a time, then stop.
- Verify before asserting. `npm run build` (with the dictionary parity guard) is the only automated check; never imply more coverage.
- Every commit, push, PR and merge needs explicit confirmation. The agent never merges: a merge to `main` deploys to production.
- A failing `All files viewed` check is expected until the maintainer reviews; never work around it.

## Decision Gates

| Situation | Action |
|---|---|
| Local `main` behind `origin/main` | `git switch main && git pull --ff-only` before branching |
| Work branch behind `origin/main` | `git merge origin/main` (never rebase a pushed branch) |
| No issue for the task | Create it with `gcatcode-pr` (the request authorizes it) |
| Previous issue has open PR or unpushed commits | Finish it or get it parked by the maintainer first |
| Defect found outside the active issue | Reproduce it, create its issue the same turn, tell the user the number, return to the task |
| Change touches copy, dictionaries, data, SEO or styles | Apply `gcatcode-content`: every locale in the same change |
| Visible change | Verify in the preview at desktop and mobile width, in ES and EN |
| Decision shapes the owner's public image, prices or terms | Ask the user |
| Non-obvious decision, costly to revert | ADR as `Propuesta` with `gcatcode-docs` |
| Work contradicts an accepted ADR | Stop; change the code or supersede the ADR |
| Spec contradicts the code | Stop and show the evidence; never pick silently |

## Execution Steps

1. Sync: `git fetch origin --prune`, `git status -sb`, `git branch --show-current`, `gh pr list --state open`. Check `git rev-list --count HEAD..origin/main` is `0`; if not, apply the gate above.
2. Find the issue: `gh issue list --search "<keywords>"`, then `gh issue view <N> --comments`. If missing, create it (`gcatcode-pr`).
3. Branch from updated `main`: `git switch -c <type>/<N>-<short-desc>`.
4. Work task by task from the issue's closing criteria. After each task: `npm run build` (skip only for docs/skills-only changes and say so); for visible changes run `.claude/launch.json` with `preview_start`, check console, network and both locales. Then commit that task alone (`gcatcode-pr`).
5. When every task is done: sync with `origin/main` again, then open the PR (`gcatcode-pr`).
6. Tell the user the PR is waiting for their file-by-file review (`Viewed`) and merge.

## Output Contract

Report: issue and branch, commits made, commands run with results, what was NOT verified, and the next action waiting on the user.

## References

- `AGENTS.md` — rules, verification commands, enforced checks.
- `.claude/skills/gcatcode-content/SKILL.md` — content, locale parity, SEO and README rules.
- `CV.md` — owner-maintained CV snapshot; not a source of truth, do not edit.
