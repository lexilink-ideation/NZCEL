# Assessment Blueprint — NZCEL (Academic) Level 4 [1883] and Level 5 [1884] Preparation Platform

> **Status:** DRAFT for review. No practice content will be added until this blueprint and
> the two alignment documents are approved.
>
> Read with: `nzqa-level4-alignment.md`, `nzqa-level5-alignment.md`, `marking-rubrics.md`,
> `repository-audit.md`. "SD p.N" = page N of the NZQA *NZCEL Supporting Document*.

---

## 1. Claims policy (applies to all UI text, marketing and reports)

| The platform **may** say | The platform **must not** say |
|---|---|
| "Practice aligned to the NZCEL (Academic) Level 4/5 Graduate Profile Outcomes as described in the NZQA Supporting Document" | "NZQA-approved", "accredited", "official", "certified" |
| "Task modelled on the conditions stated for EAP unit standard 22749" | "Pass this to achieve 22749" or any credit claim |
| "Practice coverage: you have attempted tasks matching the evidence shape the SD describes for listening" | "You are ready for / have achieved NZCEL Level 4" |
| "Items answered correctly: 14 of 20" | "Pass", "Fail", "Merit", or any band, percentage cut-off or IELTS/CEFR equivalent |
| "Teacher/peer/self-rating against platform rubric descriptors" | That a rubric rating reflects an NZQA or provider judgement |

Required footer on every mock and rubric report:

> *This is a practice result from a preparation platform. It is not an NZQA assessment
> and is not evidence towards an NZCEL qualification. NZCEL qualifications are awarded
> through assessment on approved programmes delivered by tertiary providers.*

**No official passing thresholds exist in the source document.** A search of the full SD
found no pass marks, cut scores, percentage thresholds or grade boundaries for NZCEL.
The only "Graded" labels are on some Level 3 General EL unit standards (SD pp.52–58), which
are outside this project's scope. The platform therefore reports raw counts and
descriptor-level feedback only.

---

## 2. The three modes

| Feature | A. Formative exercises | B. Timed mock examinations | C. Rubric-based speaking & writing |
|---|---|---|---|
| Purpose | Learning and feedback on specific focus descriptors | Practise under conditions resembling those the SD states | Produce extended spoken/written performances and get criterion-referenced feedback |
| Skills | All four | Listening, reading, writing under test conditions | Writing and speaking |
| Text/task length | Any; shorter texts allowed (SD: other tasks "can be relatively simpler", e.g. SD p.40) | **Must** meet SD length/duration for the level and task type | **Must** state SD minimum length/duration |
| Timing | Untimed | Timed (platform-set, configurable; see §5) | Writing: timed for test-condition tasks, otherwise deadline; speaking: recorded within duration window |
| Audio plays | Unlimited, with transcript after the attempt | **Exactly two** plays: first play + one repeat (SD "repeated once only"; see VERIFY-05) | n/a |
| Dictionary | Allowed | Allowed: monolingual or bilingual, dictionary function only (SD p.21) | Allowed |
| Hints / scaffolds | Yes | None | None during performance; planning templates allowed before crafted writing only |
| AI tools during attempt | Optional learning aids | **Disabled** | **Disabled** (SD p.21: GenAI use in assessment needs to be restricted) |
| Feedback timing | Immediate, per item | After submission: score by focus ID + answer review | After rating: descriptor feedback per criterion |
| Retake | Unlimited | A new mock form with **different texts/topics**; the same form is not re-sat (mirrors SD p.23 "further assessment opportunity") | Revision is allowed for crafted tasks in practice. Test-condition tasks (22749-style, L5 timed essay) cannot be resubmitted; the learner takes a new prompt (SD p.24) |
| Output | Item correctness, explanations | Raw counts per focus ID; sufficiency-slot coverage | Criterion descriptors; condition checks (length, duration, notes use) |

---

## 3. Content architecture: integrated topic units

The SD recommends an integrated approach in which several skills are assessed on one topic
(SD p.20). Content is therefore organised into **topic units**. Each unit contains
formative work and at least one mock or rubric task **in each of the four skills**.

### 3.1 Proposed topic bank (for review)

Topics are chosen so they differ clearly from one another (sufficiency requires different
topics within each skill) and so they match each level's GPO wording.

**Level 4: moderately complex academic topics, accessible across fields** (SD p.27: e.g.
basic economy, biology)

| ID | Topic | Field |
|---|---|---|
| T401 | Urban green space and city heat | Environmental science |
| T402 | Sleep, memory and study habits | Psychology / health |
| T403 | Small loans and small businesses (microfinance basics) | Economics |
| T404 | Freshwater ecosystems and invasive species | Biology |
| T405 | Attention and online learning | Education |
| T406 | Food waste in supply chains | Business / logistics |

**Level 5: complex academic topics with concrete, abstract and technical content** (L5 GPOs)

| ID | Topic | Concrete / abstract / technical emphasis |
|---|---|---|
| T501 | Antimicrobial resistance | Technical (health science) |
| T502 | Algorithmic decision-making and fairness | Abstract + technical |
| T503 | Behavioural economics and "nudge" policy | Abstract |
| T504 | Coastal hazards and managed retreat | Concrete + technical (planning) |
| T505 | Heritage language maintenance in migrant families | Abstract (sociolinguistics) |
| T506 | Measuring carbon: accounting methods and their limits | Technical |

⚠️ Topics touching Aotearoa New Zealand contexts (e.g. T504, T505) should be reviewed by
an appropriate cultural adviser, consistent with the SD's expectation that providers honour
Te Tiriti o Waitangi (SD p.3). Te reo Māori revitalisation is **not** used as a topic
without that review.

### 3.2 Unit template (each level)

```
Topic unit Txxx
├── Formative: vocabulary in context, skill drills tagged to focus IDs (all four skills)
├── Listening task (formative + mock form)
├── Reading task (formative + mock form)
├── Writing task (rubric; test-condition or crafted, per the evidence-set plan)
└── Speaking task (rubric; presentation or interaction, per the evidence-set plan)
```

---

## 4. Mock evidence sets: matching the SD's sufficiency structure

A **mock evidence set** is the smallest group of mock and rubric tasks whose *shape*
matches the SD's sufficiency guidance for one level. It is a practice structure. Completing
it shows **practice coverage**, not achievement.

"Separate occasions" is implemented as separate platform sittings. Each sitting is
timestamped and the platform recommends a different day; it cannot guarantee independent
occasions the way a provider would.

### 4.1 Level 4 Academic evidence set (SD p.40)

| Slot | Skill | Task (matrix row) | Minimum | Topic rule | Conditions |
|---|---|---|---|---|---|
| L4-L1 | Listening | L4-02, modelled on EAP 22892 | audio **≥ 8 min** | Topic A | 2 plays; no resubmission; answers may be amended from own notes only |
| L4-L2 | Listening | L4-01/03/04 | audio 6–8 min (rec.) | Topic B ≠ A | 2 plays |
| L4-R1 | Reading | L4-09, modelled on EAP 22751 | text **≥ 1500 words** | Topic C | timed; dictionary |
| L4-R2 | Reading | L4-06/07/08/10 | text ≥ 800 words (rec.) | Topic D ≠ C | timed; dictionary |
| L4-W1 | Writing | L4-14, modelled on EAP 22749 | **≥ 500 words**, **test conditions** | Topic E | locked editor; dictionary only; no resubmission |
| L4-W2 | Writing | L4-15, modelled on EAP 22750 | **≥ 800 words**, researched material | Topic F | source pack provided; drafting allowed |
| L4-W3 | Writing | L4-13/16 | ≥ 400 words (rec.) | at least 2 different topics across W1–W3 | — |
| L4-S1 | Speaking | L4-17, modelled on EAP 22891 | presentation **≥ 8 min** | Topic G | cue cards only; Q&A |
| L4-S2 | Speaking | L4-18/19 (**interaction**) | 6–10 min (rec.) | Topic H ≠ G | no scripts; partner = peer, teacher, or recorded-prompt simulation (see §6) |

Minimum sittings: 9 (one per slot). Within each skill, the slots use different topics.

### 4.2 Level 5 Academic evidence set (SD p.43)

| Slot | Skill | Task | Minimum | Topic rule | Conditions |
|---|---|---|---|---|---|
| L5-L1 | Listening | L5-01/02/03/04 (exit) | 8–10 min (rec.) | Topic A | 2 plays |
| L5-L2 | Listening | another L5 listening row | 8–10 min (rec.) | Topic B ≠ A | 2 plays |
| L5-R1 | Reading | L5-05/06/07/08 (exit) | ≥ 1500 words (rec.) | Topic C | timed; dictionary |
| L5-R2 | Reading | another L5 reading row | ≥ 1500 words (rec.) | Topic D ≠ C | timed; dictionary |
| L5-W1 | Writing | L5-11 or L5-13 (exit) | **≥ 1000 words** (rec.) | Topic E | crafted; sources provided |
| L5-W2 | Writing | L5-10 timed persuasive essay | ≥ 600 words (rec.); **test conditions** | Topic F ≠ E | locked editor; no resubmission |
| L5-S1 | Speaking | L5-15 research **presentation** | 10–12 min (rec.) | Topic G | cue cards; Q&A |
| L5-S2 | Speaking | L5-16/17 **interaction** | 10–12 min (rec.) | Topic H ≠ G | no scripts |

Minimum sittings: 8. No unit standard labels appear at Level 5 (see L5 alignment §1).

### 4.3 Coverage tracker (learner dashboard)

The tracker shows each slot as *Not attempted / Attempted / Attempted, condition not met*
(e.g. under word count). It never shows "achieved", "passed" or "qualified". Its heading
reads **"Practice coverage against the SD's evidence structure"**.

---

## 5. Mock timing (platform decisions, clearly labelled)

The SD gives text lengths and durations but **no time limits** for completing tasks. The
values below are platform defaults, editable in configuration, and must be labelled in the UI
as "Platform time limit".

| Task | Default time | Rationale |
|---|---|---|
| L4 listening (6–8 min audio) | Two plays + 10 min to finalise answers | Allows note-based completion |
| L4 listening 22892-style (≥ 8 min) | Two plays + 15 min | Longer text, note-processing focus |
| L4 reading ≥ 800 words | 45 min | Platform default |
| L4 reading 22751-style ≥ 1500 words | 75 min | Platform default |
| L4 writing 22749-style ≥ 500 words | 75 min | Platform default |
| L5 listening 8–10 min | Two plays + 15 min | Platform default |
| L5 reading ≥ 1500 words | 75 min | Platform default |
| L5 timed writing ≥ 600 words | 90 min | Platform default |

**VERIFY-06:** check against the unit standard documents and assessment support material
for any stated conditions.

---

## 6. Speaking interaction delivery

Interactions require at least one other participant. Options, in order of validity:
1. Live interaction with a teacher or peer, recorded on the platform (preferred).
2. Scheduled peer pairing with role cards (no scripts; SD p.40/43 limits on written support).
3. Recorded-prompt simulation, in which pre-recorded interlocutor turns respond to cues.
   **Formative only.** It cannot sustain genuine turn-taking, so it does not fill slot L4-S2
   or L5-S2 in the coverage tracker.

---

## 7. Scoring and reporting

| Mode | What is reported | What is never reported |
|---|---|---|
| Formative | Correct/incorrect, explanation, focus-ID tags | Totals as "levels" |
| Mock (listening/reading) | Raw counts per focus ID, e.g. "Supporting details: 6/9"; review of each item | Pass/fail; percentage cut-offs; band or CEFR conversions |
| Rubric (writing/speaking) | Descriptor reached for each criterion; condition checks; rater type (self/peer/teacher/automated) | Overall pass/fail; aggregate numeric grade presented as a result |

Automated or AI-generated feedback on writing and speaking is labelled **"Automated
formative feedback"** and is never the only rating shown for a rubric task.

---

## 8. Content quality requirements (apply before any item is published)

1. **Originality.** All texts, audio scripts and prompts are original. No reproduction of
   published articles, lectures or exam materials.
2. **No fabricated real-world facts.** Original "research articles" and "data" either
   (a) use clearly fictional studies, labelled in the text (e.g. "a hypothetical study of 400
   students"), or (b) use verifiable public data with a citation, checked by a reviewer.
   No invented citations to real journals or real researchers.
3. **Level calibration.** Each text is profiled with tools the SD lists (SD p.19: Text Inspector,
   English Vocabulary Profile, NAWL, NGSL). The profile is recorded in item metadata.
4. **Length conformance.** Word counts and audio durations are measured automatically, not
   estimated, and checked by CI against the alignment rules.
5. **Listening audio.** Natural academic speech features (signposting, hesitation, asides,
   questions from an audience in seminars and panels). Visuals contain minimal text (SD p.40/43).
   Transcript stored but hidden during mock attempts.
6. **Answer keys.** Each listening/reading item has an explicit key, acceptable variants, and the
   transcript or text line reference that justifies it.
7. **Review.** Two reviews before `approved`: (i) language and level review, (ii) alignment review
   against this blueprint. Topic units with Aotearoa NZ content also need cultural review.
8. **Quantity rule.** Fewer, validated units take priority over many unreviewed items.

---

## 9. Delivery phases (proposed)

| Phase | Scope | Gate |
|---|---|---|
| 0 | These docs + data schema + CI validation rules | **Your review: current step** |
| 1 | Pilot: 2 topic units per level, enough for one complete mock evidence set per level | Review of pilot items and rubrics against VERIFY items |
| 2 | Expand to 6 topic units per level; second mock form per slot | Learner/teacher trial feedback |
| 3 | Exemplar library for rubrics (rated samples), rater calibration | Teacher moderation |

---

## 10. Open decisions for the reviewer

1. Approve or amend the topic bank (§3.1).
2. Confirm that the 600-word Level 5 text is the test-conditions task (§4.2; VERIFY-L5-04).
3. Confirm the platform time limits (§5).
4. Decide who rates rubric tasks in practice: teachers, peers, self, automated, or a combination (§7).
5. Confirm "exactly two plays" for listening (VERIFY-05).
