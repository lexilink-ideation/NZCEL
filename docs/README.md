# Documentation index

All curriculum and assessment documents are derived from the NZQA *NZCEL Supporting
Document* (2026). The machine-readable registry of all 13 NZCEL qualifications (GPOs,
CEFR/IELTS reference points, text and task lengths, mandatory unit standards) is
`data/qualifications.js`.

## By qualification

| Level | Context | Ref | Status | Alignment document |
|---|---|---|---|---|
| 1 | Foundation | 1879 | Planned | — |
| 1 | — | 1880 | Planned | — |
| 2 | — | 1881 | Planned | — |
| 3 | General | 1882 | Planned | — |
| 3 | Applied | 3667 | Planned | — |
| 3 | Academic | 4998 | Planned | — |
| 4 | General | 3669 | Planned | — |
| 4 | Employment | 3668 | Planned | — |
| 4 | **Academic** | **1883** | **Active** | [nzqa-level4-alignment.md](nzqa-level4-alignment.md) |
| 5 | General | 5001 | Planned | — |
| 5 | Employment | 5000 | Planned | — |
| 5 | **Academic** | **1884** | **Active** | [nzqa-level5-alignment.md](nzqa-level5-alignment.md) |
| 6 | Advanced | 4999 | Planned | — |

## Shared documents

| Document | Covers |
|---|---|
| [assessment-blueprint.md](assessment-blueprint.md) | Modes, mock evidence sets, topic bank, time limits (currently L4/L5 Academic) |
| [marking-rubrics.md](marking-rubrics.md) | Practice rubrics and marking keys (currently L4/L5 Academic) |
| [repository-audit.md](repository-audit.md) | Audit result and checklist for imported content |
| [level4-practice-set.md](level4-practice-set.md) | Teacher's edition of Level 4 Practice Set 1: all texts, scripts, keys and teacher notes (generated) |

## Adding a level

1. Create `docs/nzqa-level{N}[-{context}]-alignment.md`, for example
   `nzqa-level3-academic-alignment.md` or `nzqa-level2-alignment.md`, following the
   structure of the Level 4 and Level 5 documents:
   qualification position → verbatim GPOs → glossary terms → focus descriptors →
   Section 5 text types → Section 6 sufficiency (Must / Recommended) → task matrix →
   item record → VERIFY items.
2. Add the level's evidence-set slots, topics and time limits to `assessment-blueprint.md`,
   and its rubrics to `marking-rubrics.md`.
3. In `data/qualifications.js`, set `status: "active"` and list the docs.
4. Add the level to the prototype's level switcher.

The existing Level 4 and Level 5 files cover the **Academic** context only. Their names
are kept as originally requested.

## Practice sets

Practice content lives in `data/sets/` (one file per skill group). After editing it, run:

```
node tools/validate-sets.js --doc
```

This checks lengths, topics, focus IDs, answer keys and paragraph references against the alignment
rules, and regenerates the teacher's edition.
