/*
 * NZCEL qualification registry — single source of truth for every level and context.
 *
 * Source: NZQA "NZCEL Supporting Document" (SD), 2026.
 *   - Qualification list and refs ........ SD p.6
 *   - CEFR / IELTS approximate exit ...... SD p.8 (approximate; never shown as a learner result)
 *   - GPO wording (verbatim) ............. SD Section 3, pp.10–13
 *   - Text and task lengths .............. SD Section 6 summary table, p.30
 *   - Mandatory EAP unit standards ....... SD Section 6 (pp.37, 40) and Section 8
 *
 * lengthsPlain (optional): student-facing wording without unit standard codes; shown on the front page.
 *
 * status:
 *   "active"   – alignment docs + content in this repo
 *   "planned"  – registered, no docs or content yet
 *
 * To add a level: write docs/nzqa-level{N}[-{context}]-alignment.md following the Level 4/5
 * docs, then set status to "active" and fill `docs`. Exact GPO wording should still be checked
 * against the qualification specification on the NZQA website (VERIFY-01).
 *
 * Loaded as a plain script (window.NZCEL_REGISTRY) so pages work from file:// and GitHub Pages.
 */
window.NZCEL_REGISTRY = {
  source: "NZQA NZCEL Supporting Document (2026)",
  contexts: ["Foundation", "General", "Applied", "Academic", "Employment", "Advanced"],
  qualifications: [
    {
      id: "L1-foundation", level: 1, context: "Foundation", ref: "1879",
      title: "New Zealand Certificate in English Language (Foundation) (Level 1)",
      cefr: "A1", ielts: null, status: "planned", docs: [],
      gpo: {
        listening: "Understand familiar spoken words and very basic phrases for the most common everyday situations.",
        speaking: "Participate in simple spoken discourse with familiar people on familiar and personal topics in areas of most immediate need.",
        reading: "Understand familiar written words and phrases for the most common everyday situations.",
        writing: "Write simple isolated phrases and sentences giving personal information."
      },
      lengths: { listening: "Not stated", reading: "50–150 words", writing: "Minimum 20 words", speaking: "At least 3 turns or 6 statements" },
      mandatoryUS: []
    },
    {
      id: "L1", level: 1, context: null, ref: "1880",
      title: "New Zealand Certificate in English Language (Level 1)",
      cefr: "A2", ielts: null, status: "planned", docs: [],
      gpo: {
        listening: "Understand frequently used spoken expressions and simple spoken discourse on areas of immediate personal relevance in familiar everyday situations.",
        speaking: "Participate in short spoken discourse of immediate personal relevance for social and transactional purposes in familiar everyday situations.",
        reading: "Understand specific familiar information in simple everyday written texts.",
        writing: "Write short simple texts relating to personal and everyday topics."
      },
      lengths: { listening: "1–2 minutes", reading: "100–250 words", writing: "Minimum 75 words", speaking: "45 seconds to 2 minutes" },
      mandatoryUS: []
    },
    {
      id: "L2", level: 2, context: null, ref: "1881",
      title: "New Zealand Certificate in English Language (Level 2)",
      cefr: "mid B1", ielts: "4.5", status: "planned", docs: [],
      gpo: {
        listening: "Understand the gist and key points in straightforward spoken discourse, oral texts, and exchanges on familiar everyday topics.",
        speaking: "Participate in a straightforward spoken discourse on familiar everyday topics.",
        reading: "Understand the gist and key points in straightforward written texts on familiar everyday topics.",
        writing: "Write simple, connected texts on familiar everyday topics."
      },
      lengths: { listening: "1–2 minutes", reading: "250–450 words", writing: "Minimum 120 words", speaking: "2 to 4 minutes" },
      mandatoryUS: []
    },
    {
      id: "L3-general", level: 3, context: "General", ref: "1882",
      title: "New Zealand Certificate in English Language (General) (Level 3)",
      cefr: "high B1", ielts: "5.0", status: "planned", docs: [],
      gpo: {
        listening: "Understand main ideas and some specific details of oral texts on reasonably familiar topics.",
        speaking: "Participate with reasonable fluency in spoken discourse on most familiar topics.",
        reading: "Understand main ideas and some specific details of written texts on reasonably familiar topics.",
        writing: "Write connected texts on reasonably familiar topics."
      },
      lengths: { listening: "3–5 minutes", reading: "350–600 words", writing: "Minimum 200 words", speaking: "3 to 5 minutes" },
      mandatoryUS: []
    },
    {
      id: "L3-applied", level: 3, context: "Applied", ref: "3667",
      title: "New Zealand Certificate in English Language (Applied) (Level 3)",
      note: "Two strands: Employment and Community (SD p.8).",
      cefr: "low B2", ielts: "5.5", status: "planned", docs: [],
      gpo: {
        listening: "Understand main ideas and some specific details of moderately complex oral texts on reasonably familiar topics relevant to the applied context.",
        speaking: "Participate with increasing independence and fluency in sustained spoken discourse on reasonably familiar topics relevant to the applied context.",
        reading: "Understand main ideas and some specific details of moderately complex written texts on reasonably familiar topics relevant to the applied context.",
        writing: "Write clear connected texts on reasonably familiar topics relevant to the applied context."
      },
      lengths: { listening: "4–5 minutes", reading: "450–800 words", writing: "Minimum 300 words at the exit level", speaking: "4 to 6 minutes" },
      mandatoryUS: []
    },
    {
      id: "L3-academic", level: 3, context: "Academic", ref: "4998",
      title: "New Zealand Certificate in English Language (Academic) (Level 3)",
      cefr: "low B2", ielts: "5.5", status: "planned", docs: [],
      gpo: {
        listening: "Understand main ideas and some specific details of moderately complex oral texts on reasonably familiar topics relevant to the academic context.",
        speaking: "Participate with increasing independence and fluency in sustained spoken discourse on reasonably familiar topics relevant to the academic context.",
        reading: "Understand main ideas and some specific details of moderately complex written texts on reasonably familiar topics relevant to the academic context.",
        writing: "Write clear connected texts on reasonably familiar topics relevant to the academic context."
      },
      lengthsPlain: { listening: "4–5 minutes (one task at least 5)", reading: "450–800 words", writing: "300–500 words, depending on the task", speaking: "4 to 6 minutes (presentation at least 5)" },
      lengths: { listening: "4–5 minutes (EAP 30509: minimum 5)", reading: "450–800 words (EAP 30511: at least 800 in total)", writing: "Minimum 300 words (EAP 30508: 500)", speaking: "4 to 6 minutes (EAP 30510: at least 5)" },
      mandatoryUS: [
        { us: "30509", skill: "listening", title: "Listen to and process information about a familiar topic in a short spoken text in English for an academic purpose", rule: "Text minimum 5 minutes" },
        { us: "30511", skill: "reading", title: "Read and process information on a familiar topic in English for academic purposes", rule: "Texts at least 800 words in total" },
        { us: "30507", skill: "writing", title: "Write a short text under test conditions in English for an academic purpose", rule: "Minimum 300 words; test conditions" },
        { us: "30508", skill: "writing", title: "Write a short crafted text using resource material in English for an academic purpose", rule: "Minimum 500 words" },
        { us: "30510", skill: "speaking", title: "Deliver a short oral presentation in English for an academic purpose", rule: "Monologue at least 5 minutes" }
      ]
    },
    {
      id: "L4-general", level: 4, context: "General", ref: "3669",
      title: "New Zealand Certificate in English Language (General) (Level 4)",
      cefr: "mid B2", ielts: "6.0", status: "planned", docs: [],
      gpo: {
        listening: "Understand main ideas and supporting details of moderately complex oral texts for social and transactional purposes.",
        speaking: "Participate effectively in sustained spoken discourse for social and transactional purposes.",
        reading: "Understand main ideas and supporting details of moderately complex written texts of a general nature.",
        writing: "Write detailed, developed, moderately complex texts of a general nature."
      },
      lengths: { listening: "6–8 minutes", reading: "Minimum 800 words", writing: "Minimum 400 words at the exit level", speaking: "6 to 10 minutes" },
      mandatoryUS: []
    },
    {
      id: "L4-employment", level: 4, context: "Employment", ref: "3668",
      title: "New Zealand Certificate in English Language (Employment) (Level 4)",
      note: "Writing GPO reads 'moderately complex' in Section 3 (p.13) but 'complex' in Section 8 (p.55). VERIFY-01.",
      cefr: "mid B2", ielts: "6.0", status: "planned", docs: [],
      gpo: {
        listening: "Understand main ideas and supporting details of complex oral texts in employment contexts.",
        speaking: "Participate effectively in sustained spoken discourse in employment contexts.",
        reading: "Understand main ideas and supporting details of complex written texts in employment contexts.",
        writing: "Write detailed, developed, moderately complex texts in employment contexts."
      },
      lengths: { listening: "6–8 minutes", reading: "Minimum 800 words", writing: "Minimum 400 words at the exit level", speaking: "6 to 10 minutes" },
      mandatoryUS: []
    },
    {
      id: "L4-academic", level: 4, context: "Academic", ref: "1883",
      title: "New Zealand Certificate in English Language (Academic) (Level 4)",
      cefr: "mid B2", ielts: "6.0", status: "active",
      docs: ["docs/nzqa-level4-alignment.md", "docs/assessment-blueprint.md", "docs/marking-rubrics.md"],
      gpo: {
        listening: "Understand main ideas and supporting details of moderately complex oral academic texts.",
        speaking: "Participate effectively in sustained spoken discourse in academic contexts.",
        reading: "Understand main ideas and supporting details of moderately complex written academic texts.",
        writing: "Write detailed, developed, moderately complex academic texts."
      },
      lengthsPlain: { listening: "6–8 minutes (one task at least 8)", reading: "800–1500 words", writing: "400–800 words, depending on the task", speaking: "6 to 10 minutes (presentation at least 8)" },
      lengths: { listening: "6–8 minutes (EAP 22892: minimum 8)", reading: "Minimum 800 words (EAP 22751: 1500)", writing: "Minimum 400 for one text; EAP 22749 minimum 500; EAP 22750 minimum 800", speaking: "6 to 10 minutes (EAP 22891: at least 8)" },
      mandatoryUS: [
        { us: "22892", skill: "listening", title: "Listen to and process information from a spoken text in English for an academic purpose", rule: "Text minimum 8 minutes" },
        { us: "22751", skill: "reading", title: "Read and process information in English for academic purposes", rule: "Text at least 1500 words" },
        { us: "22749", skill: "writing", title: "Write a text under test conditions in English for an academic purpose", rule: "Minimum 500 words; test conditions" },
        { us: "22750", skill: "writing", title: "Write a crafted text using researched material in English for an academic purpose", rule: "At least 800 words" },
        { us: "22891", skill: "speaking", title: "Deliver an oral presentation in English for an academic purpose", rule: "Presentation at least 8 minutes" }
      ]
    },
    {
      id: "L5-general", level: 5, context: "General", ref: "5001",
      title: "New Zealand Certificate in English Language (General) (Level 5)",
      cefr: "high B2", ielts: "6.5", status: "planned", docs: [],
      gpo: {
        listening: "Understand extended, complex oral texts on a wide range of topics in general contexts.",
        speaking: "Participate flexibly and effectively in extended spoken discourse on a wide range of topics in general contexts.",
        reading: "Understand and analyse extended, complex written texts on a wide range of topics in general contexts.",
        writing: "Write well-structured, complex extended texts on a wide range of topics in general contexts."
      },
      lengths: { listening: "8–10 minutes", reading: "Minimum 1500 words", writing: "Minimum 600 words", speaking: "10 to 12 minutes" },
      mandatoryUS: []
    },
    {
      id: "L5-employment", level: 5, context: "Employment", ref: "5000",
      title: "New Zealand Certificate in English Language (Employment) (Level 5)",
      cefr: "high B2", ielts: "6.5", status: "planned", docs: [],
      gpo: {
        listening: "Understand extended, complex oral texts on a wide range of topics in employment contexts.",
        speaking: "Participate flexibly and effectively in extended spoken discourse on a wide range of topics in employment contexts.",
        reading: "Understand extended, complex written texts on a wide range of topics in employment contexts.",
        writing: "Write well-structured, complex extended texts on a wide range of topics in employment contexts."
      },
      lengths: { listening: "8–10 minutes", reading: "Minimum 1500 words", writing: "Minimum 600 words", speaking: "10 to 12 minutes" },
      mandatoryUS: []
    },
    {
      id: "L5-academic", level: 5, context: "Academic", ref: "1884",
      title: "New Zealand Certificate in English Language (Academic) (Level 5)",
      note: "No unit standards are mapped to Level 5 in the SD. VERIFY-L5-01.",
      cefr: "high B2", ielts: "6.5", status: "active",
      docs: ["docs/nzqa-level5-alignment.md", "docs/assessment-blueprint.md", "docs/marking-rubrics.md"],
      gpo: {
        listening: "Understand extended complex oral academic texts on a range of concrete, abstract and technical topics.",
        speaking: "Participate flexibly and effectively in extended spoken discourse on complex academic topics.",
        reading: "Understand, analyse, and evaluate complex written academic texts on a range of topics.",
        writing: "Write well-structured, accurate, evidence-based, extended academic texts on complex and technical topics."
      },
      lengths: { listening: "8–10 minutes", reading: "Minimum 1500 words", writing: "Minimum 600 words for one text; minimum 1000 words at the exit level", speaking: "10 to 12 minutes" },
      mandatoryUS: []
    },
    {
      id: "L6-advanced", level: 6, context: "Advanced", ref: "4999",
      title: "New Zealand Certificate in English Language (Advanced) (Level 6)",
      cefr: "C1", ielts: "7.0", status: "planned", docs: [],
      gpo: {
        listening: "Understand and critically evaluate complex extended oral texts on a range of topics.",
        speaking: "Participate fluently, spontaneously and effectively in extended spoken discourse on a range of complex topics.",
        reading: "Understand and critically evaluate complex authentic written texts on a range of topics.",
        writing: "Write well-structured, extended, accurate written texts on a range of topics, with synthesis and critique of relevant sources."
      },
      lengths: { listening: "10 minutes", reading: "Minimum 1500 words", writing: "Minimum 800 words at the exit level", speaking: "10 to 12 minutes" },
      mandatoryUS: []
    }
  ]
};
