# NZCEL Academic Preparation Platform

Preparation and practice materials for:

- New Zealand Certificate in English Language (Academic) (Level 4) [Ref: 1883]
- New Zealand Certificate in English Language (Academic) (Level 5) [Ref: 1884]

> This is a preparation tool. It is **not** an NZQA-approved programme, does not award
> credits, and no result on it is evidence towards an NZCEL qualification. NZCEL
> qualifications are awarded through assessment on approved programmes delivered by
> tertiary providers.

Primary curriculum reference: NZQA *NZCEL Supporting Document* (2026).

## Contents

| Path | Purpose |
|---|---|
| `index.html` | Front page: the full NZCEL suite (Levels 1–6), status of each qualification, GPO comparison across levels |
| `data/qualifications.js` | Registry of all 13 NZCEL qualifications: verbatim GPOs, CEFR/IELTS reference, text/task lengths, mandatory unit standards |
| `docs/README.md` | Documentation index and how to add a level |
| `docs/nzqa-level4-alignment.md` | Level 4 GPOs (verbatim), focus areas, text types, sufficiency rules, task matrix |
| `docs/nzqa-level5-alignment.md` | Level 5 equivalents, plus Level 4 → 5 differentiation |
| `docs/assessment-blueprint.md` | Formative / timed mock / rubric modes, mock evidence sets, topic bank, time limits |
| `docs/marking-rubrics.md` | Platform practice rubrics for writing and speaking; listening/reading marking keys |
| `docs/repository-audit.md` | Audit result and checklist for any imported content |
| `practice/index.html` | **Student view**: practice exercises, mock exam, writing & speaking (no review tools) |
| `prototype/index.html` | Teacher / review view: adds alignment matrix, assessment blueprint and verification log |
| `data/sets/` | Practice content: Level 4 and Level 5 Practice Set 1 (listening, reading, writing, speaking); teacher-only schedules in `data/sets/teacher/` |
| `tools/validate-sets.js` | Checks practice sets against the alignment rules; `--doc` regenerates the teacher's edition |
| `app/app.js`, `app/app.css` | Shared code for both views (`window.NZCEL_AUDIENCE` selects student or teacher) |

## Status

Draft for review. Open items needing verification against current NZQA sources are
listed in each alignment document and in the prototype's Verification log.
