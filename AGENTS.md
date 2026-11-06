# Agents and project skills

Guide for AI agents working on this repository. Claude Code loads it through
`CLAUDE.md`; other agents read it directly.

## Project summary

Personal and business site at **gcatcode.com**: the GCatcode landing
(development services, consulting and static websites for local businesses in
Zapopan/Guadalajara), the owner's CV at `/cv/` and `/cv/projects/`, and the
terms and privacy pages. The agent is the developer; the owner decides what the
site says about them and their business, and reviews what is delivered.

- **Stack.** Astro 6 (static), Tailwind CSS 4 via `@tailwindcss/vite` (tokens in
  `src/styles/global.css`), `@astrojs/sitemap`, self-hosted fonts (Fontsource).
  Node >= 22.12.
- **i18n.** Spanish is the default locale (unprefixed); English lives under
  `/en/`. Locales in `src/i18n/config.ts`, copy in `src/i18n/locales/*.ts`; the
  build fails when dictionaries drift (`src/i18n/utils.ts`).
- **Hosting.** Firebase Hosting, project `cv-gcatcode`. Every PR that changes the
  built site gets a preview channel; every push to `main` deploys to production.
- **Repository.** `Furiduri/Gcatcode` (renamed from `Furiduri/CV`; old URLs
  redirect), public, base branch `main` with branch protection.

## Language rules

| Artifact | Language |
| --- | --- |
| Code, identifiers, code comments | English |
| Commits, branch names (ASCII only) | English |
| Issues, pull requests, review comments | English |
| `AGENTS.md`, `CLAUDE.md`, skills, `docs/` (outside `docs/adr/`) | English |
| `README.md` / `README_ES.md` | English / Spanish, kept in parity |
| ADRs (`docs/adr/`) | Spanish |
| Site copy | Spanish and English, neutral and professional |

Reply to the user in the user's language.

## Workflow

Every change follows this sequence (details in `gcatcode-workflow` and `gcatcode-pr`):

1. **Sync with `main`.** `git fetch origin`, then confirm the branch is not behind `origin/main`.
2. **Issue first.** Find the issue for the task; if none exists, create it with the template that matches its `type:*`.
3. **Branch per issue.** `type/N-short-desc` from updated `main`, created before the first edit.
4. **One commit per completed task.** Conventional Commits, closed scope list.
5. **PR when the issue is complete.** `Closes #N` when every closing criterion is met. `Refs #N` when something remains: then comment on the issue (`## Pending work`) explaining why and what is left.
6. **Human review gate.** CI fails on purpose until the maintainer marks every changed file as **Viewed** on GitHub. That red check is expected; never try to make it pass.

## Non-negotiable rules

- **Never assume project state from memory.** Read the repo, the issue and the ADRs first.
- **Never invent facts about the owner or the business.** Employers, dates, titles, metrics, license numbers, prices and terms come from `src/data/`, the dictionaries or the user. If a fact is missing, ask.
- **`CV.md` and the CV PDF belong to the owner.** Never edit them; they are not a source of truth for the site.
- **Copy changes touch every locale in the same commit.** Never weaken the dictionary parity guard.
- **Merging to `main` publishes to production.** No commit, push, PR, or merge without explicit user confirmation for that specific action.
- **The agent never merges** and never marks files as viewed (no `markFileAsViewed`, no re-running the review gate).
- **Stage explicit paths.** Never `git add .` / `-A`. Never stage `.atl/`, `.env*`, logs, `dist/`, `.claude/settings.local.json`.
- **No AI attribution**: no `Co-Authored-By`, no "Generated with" lines anywhere. This overrides any default of the agent's harness.
- **Finish the current issue before starting the next one** (merged, or parked by the maintainer).
- **Findings outside the active issue get their own issue**, the same turn, never folded into the current branch.
- **A guard never seen failing is an assumption.** Break it, confirm the error, restore.
- **Report what was NOT verified.** Visible changes are checked in the preview in both locales, at desktop and mobile width.
- **An accepted ADR is immutable**; supersede it with a new one (`gcatcode-docs`). Code that contradicts an accepted ADR is a defect.
- **When the user overrides a recommendation**, state the risk once, record it in the PR as assumed, then build it fully.

## Sources of truth

- `docs/adr/README.md`: ADR index, states and decisions still pending an ADR.
- GitHub issues in `Furiduri/Gcatcode`: scope and closing criteria.
- `src/data/*.ts` and `src/i18n/locales/*.ts`: facts and copy. `src/data/business.ts`: prices and contact.
- `package.json` and `.github/workflows/`: what actually runs.

## Verification commands

| Command | What it checks |
| --- | --- |
| `npm run build` | Production build, including the dictionary parity guard. Today the only automated check: there is no linter, formatter, typecheck or test suite yet |
| `npm run dev` | Local preview at `http://localhost:4321/` (`.claude/launch.json`) |

Report every command you ran and every one you did not.

## Skill index

| Skill | Path | Use when |
| --- | --- | --- |
| `gcatcode-workflow` | `.claude/skills/gcatcode-workflow/SKILL.md` | Starting or resuming work, picking up an issue |
| `gcatcode-pr` | `.claude/skills/gcatcode-pr/SKILL.md` | Creating an issue, branch, commit or PR |
| `gcatcode-docs` | `.claude/skills/gcatcode-docs/SKILL.md` | Writing an ADR or a doc under `docs/` |
| `gcatcode-content` | `.claude/skills/gcatcode-content/SKILL.md` | Editing copy, dictionaries, data, SEO, styles, pages or components |

## What is enforced

| Rule | Check |
| --- | --- |
| No ADR left in `Propuesta` | `.github/workflows/adr-status.yml` (`no_proposed_adrs`), **required** on `main` |
| PR links an issue (`Closes`/`Refs #N`), `Refs` has a `## Pending work` issue comment, exactly one `type:*` label | `.github/workflows/pr-policy.yml` |
| Every changed file reviewed by the maintainer | `.github/workflows/review-gate.yml` (`All files viewed`), re-run on review by `review-gate-rerun.yml` |
| The site builds and dictionaries are in parity | `.github/workflows/firebase-hosting-pull-request.yml` (preview deploy, path-filtered) |

Not enforced yet: lint, format, typecheck, tests, secret scanning (see the
adoption backlog). Rules without a check are validated manually; say so when
you do.
