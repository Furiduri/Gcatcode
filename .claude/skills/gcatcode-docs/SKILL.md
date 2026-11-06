---
name: gcatcode-docs
description: "Trigger: ADR, architecture decision, decisión, document, docs/, README, open questions on GCatCode. Write ADRs and repo docs in the project format."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "2.0"
---

## Activation Contract

Load before writing or changing an ADR, a file under `docs/`, or a README, or when a change makes a decision whose reason is not evident from the code and whose reversal is costly. The ADR system is the same one used in CanapesFR and Glink.

## Hard Rules

- ADRs in Spanish, neutral and professional; other docs in English; `README.md` (EN) and `README_ES.md` (ES) stay in parity.
- ADR file: `docs/adr/NNNN-titulo-en-kebab-case.md`, next consecutive number, never reused. Read `docs/adr/0000-proceso-de-adr.md` first.
- One decision per ADR. Sections in order: Contexto, Decisión, Alternativas consideradas, Consecuencias; add Verificación, Verificación pendiente, Alcance, Decisión diferida when they apply.
- Consequences include the negative ones. Each alternative carries its own reason. Deferred decisions need a verifiable reopening criterion.
- The owner accepts: a new ADR is `Propuesta` until the user approves it, and switches to `Aceptada` before its PR merges. `no_proposed_adrs` is a required check on `main` and fails while any ADR file or index row is `Propuesta`.
- An accepted ADR is immutable. Allowed edits: the `Estado` line, the bidirectional link to the superseding ADR, typos and broken links.
- New ADRs hold technical/architectural decisions only. New business rules (prices, deadlines, terms) go to `src/data/business.ts` plus the terms page; existing business ADRs stay as they are and are superseded only when the rule changes.
- Update `docs/adr/README.md` (index and "Pendientes") in the same commit as the ADR.

## Decision Gates

| Content | Destination |
|---|---|
| Motive not evident from code and expensive to revert | New ADR |
| Change to an accepted decision | New ADR that supersedes it; old one gets `Superada por ADR-NNNN` |
| Verification result of a pending item | Comment on the issue where the work happened; never edit the ADR |
| Scope change on planned work | Issue comment "Se decidió X debido a Y" |
| Convention for agents | `AGENTS.md` or the relevant skill |

## Execution Steps

1. Read `docs/adr/README.md` and the ADRs the change touches; supersede instead of editing.
2. Write the ADR or doc.
3. Update the ADR index and any superseded ADR's `Estado` line.
4. Commit with scope `adr` or `docs` via `gcatcode-pr`.

## Output Contract

Return the files written, the ADR number and state, superseded ADRs, issues where a consequence was propagated, and what remains unverified.

## References

- `docs/adr/0000-proceso-de-adr.md` — ADR process, states, supersession.
- `docs/adr/README.md` — index and decisions still pending an ADR.
