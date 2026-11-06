---
name: gcatcode-pr
description: "Trigger: create issue, branch, commit, pull request, PR, levantá el PR, Closes/Refs, follow-up issue on GCatCode. Apply issue, commit and PR conventions."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "2.0"
---

## Activation Contract

Load before creating an issue, a branch, a commit, or a pull request in `Furiduri/Gcatcode`.

## Hard Rules

- Everything here is written in English. You write issue and PR bodies; never ask the user to.
- Issues use the section headings of the matching form in `.github/ISSUE_TEMPLATE/` and exactly one `type:*` label. Never use GitHub's default labels (`bug`, `enhancement`...).
- Branch: `<type>/<N>-<short-desc>`, lowercase ASCII, `type` from `feat fix docs refactor test chore ci perf`.
- Commit header: `<type>(<scope>): <imperative summary>`, max 72 chars. Scopes: `landing`, `cv`, `legal`, `ui`, `content`, `i18n`, `data`, `seo`, `layout`, `styles`, `assets`, `adr`, `agents`, `ci`, `deps`, `repo`. One commit per completed task.
- Stage explicit paths only; `.atl/` and `.claude/settings.local.json` never enter a commit. No AI attribution, no `Co-Authored-By`; remove any that slips in.
- One PR per issue and one concern per PR. The body follows `.github/PULL_REQUEST_TEMPLATE.md`; the title uses the commit header format.
- `Closes #N` only when every closing criterion is met; otherwise `Refs #N` plus the `## Pending work` issue comment.
- Never mark files as viewed, never re-run `Review Gate`, never merge.
- Ask confirmation before each commit, push and PR.

## Decision Gates

| Case | Issue form | Label |
|---|---|---|
| New capability or visible improvement | `feature.yml` | `type:feat` |
| Broken behavior | `bug.yml` | `type:fix` |
| Docs, refactor, tests, tooling, CI, perf | `task.yml` | `type:docs` / `refactor` / `test` / `chore` / `ci` / `perf` |

| PR state | Body | Extra |
|---|---|---|
| All closing criteria met | `Closes #N` | — |
| Something left for a later PR | `Refs #N` | Before opening the PR, comment on #N starting with `## Pending work`: why it stops here, what remains (checklist), follow-up plan. `pr-policy.yml` checks it |

| Change | Verification |
|---|---|
| `src/`, `public/`, build or Firebase config | `npm run build`; CI posts a Firebase preview URL, report it once `gh pr checks` shows it |
| Visible change | Preview in ES and EN, desktop and mobile; say which |
| Only docs, skills or `.claude/` | No build; say so. No preview URL is posted (path filter) |
| ADR in the PR | `no_proposed_adrs` is required on `main`: the ADR must be `Aceptada` or `Rechazada` before merge |
| Branch mixes two concerns | Split before the PR; ask if commits are interleaved |

## Execution Steps

1. Issue: `gh issue create --title "<type>(<scope>): <summary>" --label type:<t> --body-file <file>` with the form's sections (Context, Closing criteria as checkboxes, Dependencies).
2. Branch: from updated `main` (`gcatcode-workflow`).
3. Commit per task: `git add <paths>`, `git commit -m "<header>"`; read `git show --stat HEAD` after.
4. Before the PR: `git log --oneline origin/main..HEAD` shows one concern; `git fetch origin && git merge origin/main` if behind; `git push -u origin HEAD`.
5. If `Refs #N`: first `gh issue comment <N> --body-file <file>` with the `## Pending work` comment.
6. PR: `gh pr create --base main --title "<header>" --label type:<t> --body-file <file>`. Fill Verification with commands run and the "Not verified" list.
7. Read the PR back (`gh pr view --json body,labels`) and tell the user it awaits their `Viewed` review; `All files viewed` stays red until then.

## Output Contract

Return the issue/PR URLs, branch, commits (hash + header), checks run, preview status, and anything left pending with its issue.

## References

- `.github/PULL_REQUEST_TEMPLATE.md`, `.github/ISSUE_TEMPLATE/` — body formats.
- `.github/workflows/` — what CI runs and what a merge deploys.
