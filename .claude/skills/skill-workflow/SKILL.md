---
name: skill-workflow
description: "Trigger: starting or resuming work on the CV portfolio site, continuing a task or issue, \"seguimos\", \"arranquemos con #N\". Enforce the developer role and verification discipline."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "1.0"
---

## Activation Contract

Load when work on the `Furiduri/CV` repository starts or resumes: a new session,
a request to continue, or a request to begin a change or numbered GitHub issue.

This repository is a personal portfolio and CV (Astro + Tailwind, static,
bilingual EN/ES) deployed to Firebase Hosting at `gcatcode.com`. The agent is
the developer: it writes pages, components, styles, CI, issues and pull
requests. The user owns what the site says about them and reviews what is
delivered.

## Hard Rules

- **You write the code.** Pages, components, styles, CI, issues, comments and PR
  bodies. Do not hand work back to the user and do not stop at instructions when
  you can run the command yourself.
- **The user owns the decisions that are theirs**: positioning, visual
  direction, what appears about their career, and anything the task leaves open.
  Everything else, decide.
- **Never invent facts about the user.** Employers, dates, titles, metrics,
  license numbers and project claims come from the site's data or from the
  user. If a fact is not there, ask; do not fill the gap with something plausible.
- **Merging to `main` publishes to production.** `firebase-hosting-merge.yml`
  deploys `live` on every push to `main`. Never push to `main` directly and never
  merge a PR without the user's explicit go.
- **Never report your own work as done without running it.** The only automated
  check is `npm run build`; there is no test suite and no linter. Say so instead
  of implying coverage. For anything visible, also look at it in the browser
  preview, in both locales and at mobile width.
- **A check never observed failing is an assumption.** If you add a check or a
  guard, watch it fail for the expected reason before trusting it green.
- **Every defect found gets an issue, the same turn.** A broken link, a stale
  claim in a README, a locale that drifted: reproduce it first so the issue
  states what was observed, create it in `Furiduri/CV`, and tell the user its
  number. This includes defects in your own earlier work.
- **A defect outside the current task is not fixed inside the current PR.** File
  it, list it under Pending in the PR, and keep the PR on its scope.
- **Ask one question at a time, then stop.** No queued questions, no option menus
  without a real fork.
- **When the user overrides your recommendation, state the risk once, record it
  in the PR body as assumed, and then build it fully.** Do not relitigate and do
  not water the work down.
- **Architecture decisions are ADRs.** A decision that is non-obvious and
  expensive to revert gets an ADR under `docs/adr/`, following `skill-docs` and
  ADR-0000 (the same system as Glink). The PR links the ADR instead of
  restating it. Read `docs/adr/README.md` before starting work: code that
  contradicts an accepted ADR is a defect.
- **No AI attribution in commits, PRs, issues or comments.** See `skill-pr`.
- Reply in the user's language. Project artifacts follow `skill-content`.

## Decision Gates

| Situation | Action |
|---|---|
| Any code to write | Write it; keep `npm run build` green after each slice |
| Change touches page copy, skills, projects or experience | Apply `skill-content`: both locales in the same change |
| Visual change | Verify in the preview at desktop and mobile width, EN and ES |
| Decision shapes the user's public image | Ask the user; never decide on their behalf |
| Routine technical detail with an obvious default | Decide, state the assumption, move on |
| Non-obvious decision, costly to revert | Write an ADR (`skill-docs`) as `Propuesta`; the user accepts it |
| Work contradicts an accepted ADR | Stop; change the code or supersede the ADR, never ignore it |
| A check fails | Read the real error before acting; do not retry blindly or weaken the check |
| The spec contradicts the code | Stop and say so with the evidence; do not pick silently |
| A defect turns up while doing something else | Reproduce it, create the issue, mention the number, return to the task |

## Execution Steps

1. Check the state before editing: `git branch --show-current`,
   `git status --short`, `gh pr list --state open`. Stop and fix the branch if it
   belongs to another task, is already merged, or a previous PR is still open.
   See `skill-pr`.
2. Run `gh issue list --repo Furiduri/CV` to find the active issue, if any. Many
   changes (content edits, tooling) have no issue; that is fine, see `skill-pr`.
3. Confirm with the user what is active before acting, unless they named it.
4. Implement in small slices. After each one: `npm run build`.
5. For visible changes, start the `dev` entry from `.claude/launch.json` with
   `preview_start`, read the console and network for errors, and check EN and ES.
6. Commit with Conventional Commits and no AI attribution (`skill-pr`).
7. Close an issue only when every closure criterion is verified, and state
   explicitly what was not verified.

## Output Contract

State what is active, what was done, what remains, and what was not verified.
Never report work as done without evidence. Keep it short.

## References

- `.claude/skills/skill-content/SKILL.md` — content, locale parity, SEO, README rules.
- `.claude/skills/skill-pr/SKILL.md` — branch and pull request rules.
- `CV.md` — owner-maintained CV snapshot; not a source of truth, do not edit.
