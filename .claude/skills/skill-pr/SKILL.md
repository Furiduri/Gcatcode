---
name: skill-pr
description: "Trigger: opening or preparing a pull request in the CV repo, \"levantá el PR\", branching for a task or issue, splitting mixed work. Apply the project PR rules."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "1.0"
---

## Activation Contract

Load when preparing, opening, or fixing a pull request in `Furiduri/CV`, and
when creating the branch for a change or issue.

## Hard Rules

- **You write the PR body and you open the PR.** The user is the reviewer, not
  the author of the description. Never ask them to write it.
- **One PR is one concern.** A PR is a review unit: a closed question a reviewer
  answers yes or no. Mixed work cannot be reviewed or reverted cleanly.
- **Finish the previous PR before starting the next.** It must be merged or
  explicitly parked by the user. A branch with commits and no PR is work nobody
  can see.
- **Create the new branch before touching a single file.** Branch from an updated
  `main`, never from a merged branch and never from another task's branch.
- **Merging publishes.** A push to `main` deploys to production at
  `gcatcode.com`. Open the PR; do not merge it without the user's explicit go.
- **Issue link, or say there is none.** If an issue exists for the work, the body
  links exactly one: `Closes #N` only when the PR completes every closure
  criterion, otherwise `Refs #N` and list what remains. If no issue applies
  (content tweak, tooling, skills), state that in the body.
- Branch name: `<type>/<short-kebab-description>`, with the issue number as a
  prefix when there is one (`fix/12-es-header-link`). Type from
  `feat|fix|chore|docs|refactor|perf|test|build|ci|revert`.
- Conventional commits.
- **No AI attribution anywhere.** Commits, PR titles and bodies, issues and
  comments (on PRs, issues and reviews) carry no `Co-Authored-By` trailer, no
  "Generated with …" line and no mention of an AI tool as author. This
  overrides any attribution the agent's harness adds by default. If one slips
  in, remove it: amend an unpushed commit, edit the PR, issue or comment.
- Labels: the repo only has GitHub's defaults. Use at most one of `bug`,
  `enhancement`, `documentation`, mirroring the issue's own label. Do not invent
  labels and do not create new ones without asking.
- **The Verification section states what was NOT verified.** A PR claiming only
  successes is incomplete.
- Write the PR body and the commit subjects in English, matching the
  repository's history. Code, identifiers and comments stay English.
- Never open a PR whose branch mixes concerns: split first (see below).
- **`.atl/` is local runtime state and never enters a PR.** `gentle-ai` writes it
  and its `skill-registry.md` is a derived index. If it shows up in
  `git status`, leave it out.

## Decision Gates

| Situation | Action |
|---|---|
| Starting a task | `git fetch`, branch from `origin/main`, then edit. Never the reverse |
| Previous branch has commits but no PR | Open (and have merged) that PR first; do not start the next task |
| Current branch is already merged | It is dead. Move uncommitted work to a fresh branch off `origin/main` |
| Branch holds two concerns, commits not interleaved | `git branch <new>` at HEAD, then `git reset --hard <last commit of the first concern>` — secure before releasing |
| Branch holds two concerns, commits interleaved | Ask the user; do not rewrite history unprompted |
| Second PR depends on the first | Merge the first, rebase onto `main`, then open the second |
| Any change under `src/`, `public/`, or config | `npm run build` must pass and be reported |
| Visible change | Also verified in the preview, EN and ES, desktop and mobile; say which |
| Only docs, skills or `.claude/` changed | No build required; say so explicitly. The Firebase preview workflow only runs for paths that change the built site, so no preview URL is posted |
| Any PR | `no_proposed_adrs` (`ADR status`) is a required check on `main`: every ADR accepted or rejected before merge. Branch protection also applies to admins, so a red check blocks the merge |
| Anything under `.atl/` appears in `git status` | Leave it out |

## Execution Steps

1. Confirm the branch holds one concern: `git log --oneline origin/main..HEAD`.
2. Run the checks the gates require; never report a check that was not run.
   There is no test suite or linter, so `npm run build` is the whole automated
   set, the same one CI runs.
3. Push: `git push -u origin <branch>`.
4. `gh pr create --base main --title "<conventional title>" --body-file <file>`.
5. Body sections in order: issue link (or "No linked issue: <reason>"), Summary,
   Changes (table of file to change), Verification — including what was **not**
   verified — and Pending.
6. `gh pr edit <n> --add-label "<label>"` if a label applies.
7. When the PR changes the built site (`src/`, `public/`, build or Firebase
   config), CI posts a Firebase preview URL. Check it with `gh pr checks <n>`
   and report the URL. Until that check finishes, the preview is unverified; say
   so.

## Output Contract

Return the PR URL, the issue it links (or that none applies), the label applied,
the checks that ran with their results, the preview status, and everything listed
under Pending.

## References

- `.claude/skills/skill-workflow/SKILL.md` — role split and verification discipline.
- `.claude/skills/skill-content/SKILL.md` — content and locale rules.
- `.github/workflows/` — what CI runs and what a merge deploys.
