---
name: gcatcode-content
description: "Trigger: editing site copy, skills, projects or experience, either README, SEO meta tags, or adding a page in the CV portfolio. Apply the content, bilingual parity and styling rules."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "1.1"
---

## Activation Contract

Load when changing anything the visitor reads or a search engine indexes: page
copy, the skills / projects / experience data, `README.md`,
`README_ES.md`, `Layout.astro` meta tags, or when adding a page, section or
component.

## Hard Rules

- **One template per route; copy lives in dictionaries.** Each route has a
  single template under `src/pages/[...lang]/` (`index.astro` for the GCatcode
  landing, `terminos/`, `privacidad/`, `cv/`, `cv/projects/`) whose
  `getStaticPaths` emits one page per configured locale. Route slugs are not
  translated. The default locale is Spanish (`es`, unprefixed: `/`, `/cv/`);
  English lives under `/en/` (`/en/`, `/en/cv/`). Visible copy lives in
  `src/i18n/locales/<locale>.ts`, typed by `src/i18n/types.ts`.
  Locale-independent data (companies, years, links, tech names, business
  contact and prices in `src/data/business.ts`) lives once in `src/data/*.ts`
  and is joined with the dictionary by `id` or injected via `{placeholders}`. Never hard-code copy in a template or component, and never duplicate a
  page per locale.
- **Copy changes edit every dictionary in the same commit.** Adding, removing or
  renaming a key, or changing an array's length, in one dictionary without the
  others breaks the build: `src/i18n/utils.ts` asserts key and array-length
  parity against the default locale at module load. Do not weaken the guard to
  get a green build.
- **Adding a language = add a dictionary + register the locale.** Add
  `src/i18n/locales/<code>.ts` (typed `satisfies Dictionary`) and the
  `<code>: "<hreflang>"` entry in `src/i18n/config.ts`. Routes, `<html lang>`,
  hreflang links, the sitemap and the language switcher derive from that config.
  The default locale is also a config change there, not a rewrite.
- **A new page is one template**: `src/pages/[...lang]/<route>/index.astro`
  using `getLocaleStaticPaths()` and `useTranslations(lang)`; build its links
  with `getLocalizedUrl` (wraps `astro:i18n`), never with string prefixes.
- **Modular by default (ADR-0001).** A page template only composes: it resolves
  the locale, formats the dictionary placeholders, computes page data (URLs,
  WhatsApp links) and passes it down. Every section is a presentational
  component in `src/components/<feature>/` (`landing/`, `case-study/`, `cv/`)
  that receives copy and data through typed props and never reads the
  dictionary, `Astro.currentLocale` or `src/data/` itself. Repeated UI elements
  (buttons, section headings, frames, eyebrows) are components in
  `src/components/ui/` with their styles inside. A section used by more than
  one page lives in its feature folder, not in the first page's folder. Only
  the site shell (`Layout`, `Header`, `Footer`, `LanguageSwitcher`) may read
  the locale itself. Never write section markup inline in a page.
- **Facts come from the user and the site's data.** The site's facts live in
  `src/data/*.ts` and the dictionaries; new facts come only from the user. Never
  invent or "improve" employers, dates, titles, metrics or license numbers.
- **`CV.md` and the PDF belong to the owner.** The owner updates them with each
  CV version they publish; they are not a source of truth for the site. Do not
  edit them, and do not treat a difference with the site as a defect.
- **README and README_ES stay in parity**, and every claim in them must match
  the real stack. Verify against `package.json` before keeping or writing a
  claim (the stack is Astro 6 + Tailwind 4).
- **Compute, do not hardcode, what ages.** Years of experience are derived from
  `careerStartYear` in `src/data/profile.ts` and injected into dictionary strings
  through the `{years}` placeholder; keep it that way.
- **Language of copy**: English and Spanish only. Spanish is neutral and
  professional: no regional slang and no voseo, and never the assistant's persona
  voice. Code, identifiers and comments stay English.
- **Use the design tokens.** Colors and fonts live in the `@theme` block of
  `src/styles/global.css` (`brand-base`, `brand-neon`, `font-sans`,
  `font-heading`). Tailwind 4 is configured in CSS; there is no
  `tailwind.config`. Do not hardcode brand hex values in components.
- **SEO is owned by `src/layouts/Layout.astro`.** Every page passes `title` and
  `description`; canonical, Open Graph and Twitter tags derive from them, and the
  locale and hreflang alternates (plus `x-default`) derive from
  `Astro.currentLocale` and `src/i18n/config.ts`. Do not duplicate meta tags in
  pages. The sitemap comes from `@astrojs/sitemap` with `site` and its `i18n`
  option set in `astro.config.mjs` from the same config.
- **State the scope.** Say what the change does not cover, especially when only
  one of the two READMEs was touched on purpose.

## Decision Gates

| Situation | Action |
|---|---|
| Copy changes | Edit every file in `src/i18n/locales/` in the same commit; same keys, same array lengths |
| Skills, projects or experience data changes | Shared facts in `src/data/*.ts`; translated text in every dictionary, by `id` |
| New page or route | One template under `src/pages/[...lang]/`; reuse `Layout`, `Header`, `Footer` |
| New section or repeated UI element | Component in `src/components/<feature>/` or `ui/`, data via props (ADR-0001) |
| Section already exists on another page | Reuse the component; move it to its feature folder if it sits in a page's folder |
| New language | Add `src/i18n/locales/<code>.ts` and register it in `src/i18n/config.ts` |
| Build fails with `[i18n] Dictionaries are out of parity` | Add the named path to that dictionary; never delete the key from the default locale to silence it |
| New color, font or spacing need | Add a token in `@theme`; do not hardcode |
| README claim about the stack | Check `package.json` and the config first |
| Fact missing from the site's data | Ask the user; do not fill the gap |
| A string intentionally stays untranslated | Keep the key in every dictionary with the same value; say so in the PR |

## Execution Steps

1. Read the route template and **every dictionary** in `src/i18n/locales/`
   before editing copy; read `src/data/*.ts` before editing facts.
2. Make the change in every dictionary (and the shared data, if a fact changed);
   keep keys and array lengths identical.
3. `npm run build` (it fails on dictionary drift); then check every locale of the
   route in the preview (`/cv/` and `/en/cv/`, `/cv/projects/` and
   `/en/cv/projects/`), desktop
   and mobile width.
4. If a README changed, check parity and every claim against the repo.

## Output Contract

Return the files changed grouped by locale (dictionaries) and by shared data or
template, what was checked in each locale, and what remains unverified or intentionally left in only one
language.

## References

- `src/layouts/Layout.astro` — SEO, `<html lang>` and hreflang alternates.
- `src/i18n/config.ts` — locales, default locale and hreflang map.
- `src/i18n/utils.ts` — parity guard, `useTranslations`, URL helpers.
- `src/i18n/locales/*.ts` — per-locale dictionaries; `src/data/*.ts` — shared facts.
- `src/styles/global.css` — design tokens and base styles.
- `docs/adr/0001-arquitectura-modular-de-componentes.md` — modular pages and components.
- `astro.config.mjs` — `site`, i18n routing and sitemap (fed by `src/i18n/config.ts`).
- `.claude/skills/gcatcode-workflow/SKILL.md` — role split and verification discipline.
- `.claude/skills/gcatcode-pr/SKILL.md` — issue, branch, commit and pull request rules.
