/*
 * NZCEL (Academic) Level 5 — full-length practice set: WRITING and SPEAKING
 * All organisations, regions, people and data in the source packs are fictional, invented for teaching.
 * Level 5 writing is evidence-based: students use and acknowledge evidence. They are not required to
 * synthesise and critique multiple sources (Level 6).
 */
window.NZCEL_SETS = window.NZCEL_SETS || {};
window.NZCEL_SETS["5"] = window.NZCEL_SETS["5"] || { listening: [], reading: [], writing: [], speaking: [] };

/* ---------------- WRITING ---------------- */
window.NZCEL_SETS["5"].writing.push({
  id: "L5-W1-T506",
  slot: "L5-W1",
  name: "Case-study report: Northbridge Institute's carbon footprint",
  task: "L5-11 · formal academic report on a case study (exit level)",
  topic: "T506 Measuring carbon: accounting methods and their limits",
  textType: "formal academic report on a case study",
  min: 1000, minType: "rec", mins: null, test: false, crit: "5W",
  prompt: "Northbridge Institute of Technology (a fictional tertiary institution) has announced that it has 'cut its emissions by more than half since 2024'. Its Council has asked for an independent report before deciding how to spend its sustainability budget. Using the three sources in the source pack, write a formal report of at least 1,000 words that (1) explains what Northbridge's carbon footprint consists of and assesses the accuracy of the 'more than half' claim, (2) evaluates the TWO proposals in Source B, using the data to support your points, and (3) recommends which proposal Council should fund first, and how Northbridge should report its emissions in future. Use evidence from the sources, report figures accurately, and acknowledge each source, for example (Source A) or (Northbridge Students' Association, 2026).",
  tips: ["Use a report structure: Title, Introduction (purpose), Findings, Evaluation of proposals, Recommendations, Conclusion.", "Explain technical terms (scope 1, 2 and 3; location-based and market-based) in your own words.", "Use figures from Source A to support every major point, and check your calculations.", "Write in a formal, impersonal register. Draft, revise and proofread: accuracy matters at Level 5."],
  sources: [
    { label: "Source A", cite: "Northbridge Institute of Technology, Facilities Office (fictional). Annual emissions data, 2026", title: "Northbridge Institute: greenhouse gas emissions, year to June 2026 (fictional data, tonnes of CO₂-equivalent)",
      table: [
        ["Category", "Scope", "Emissions (t CO₂e)", "Note"],
        ["Gas boilers (heating)", "1", "420", "Direct"],
        ["Institute vehicles", "1", "60", "Direct"],
        ["Electricity, location-based", "2", "900", "Regional grid average"],
        ["Electricity, market-based", "2", "150", "Renewable electricity contract signed in 2025"],
        ["Staff and student commuting", "3", "2,600", "Estimated from travel survey"],
        ["Business travel (mainly flights)", "3", "1,100", "From booking records"],
        ["Purchased goods and services", "3", "1,900", "Estimated from spending data"],
        ["Waste", "3", "80", "From waste contractor"]
      ],
      text: "In 2024, before the renewable electricity contract, Northbridge reported scope 1 and 2 emissions of 1,380 t CO₂e (location-based). Its 2026 report gives scope 1 and 2 emissions of 630 t CO₂e using the market-based method. Scope 3 emissions are not included in the Institute's public report." },
    { label: "Source B", cite: "Facilities Manager, Northbridge Institute (fictional). Memo to Council, 2026", title: "Memo: two options for the 2027–2029 sustainability budget (fictional)",
      text: "Council has asked for two costed options. Only one can be funded in full in the next three years.\n\nOption 1: Replace gas boilers with electric heat pumps. One-off cost: $2.4 million. Expected effect: removes about 400 t of scope 1 emissions a year. Electricity use will rise, adding about 120 t a year under the location-based method, or about 20 t under the market-based method. Heat pumps are expected to last 20 years and to reduce heating costs slightly.\n\nOption 2: Sustainable travel plan. Cost: about $350,000 a year. Includes subsidised public transport passes for staff and students, improved bike facilities, and a rule that staff must use video conferencing instead of flying for meetings of less than one day. Expected effect: a 15% reduction in commuting emissions and a 30% reduction in business travel emissions within three years. These estimates are based on similar schemes elsewhere and are less certain than the estimate for Option 1." },
    { label: "Source C", cite: "Northbridge Students' Association (fictional). Statement to Council, 2026", title: "Statement: 'Tell the whole story' (fictional)",
      text: "We welcome the Institute's renewable electricity contract. However, the claim that Northbridge has 'cut its emissions by more than half' is misleading. The fall in reported emissions comes almost entirely from changing the way electricity is counted, not from using less energy. Meanwhile, the Institute's largest sources of emissions, such as commuting and flights, are not reported at all.\n\nWe ask Council to report all three scopes, and to prioritise action on travel. Many of our members cannot afford public transport and currently drive to campus because buses are infrequent and expensive. A travel plan would reduce emissions and help students with the cost of living." }
  ],
  teacher: "Exit-level crafted report (≥ 1,000 words recommended). Strong answers explain the scopes accurately; show that the 'more than half' figure compares a location-based 2024 figure with a market-based 2026 figure (1,380 → 630) and excludes scope 3 (5,680 t, about 90% of the market-based total of 6,310 t); calculate each option's net effect (Option 1: about 280 t location-based or 380 t market-based a year; Option 2: about 390 + 330 = 720 t a year); weigh cost, certainty and co-benefits; and recommend clearly. Rate with W5.1–W5.6. Students should use and acknowledge evidence; synthesis and critique of sources is not required at Level 5. All data are fictional."
});

window.NZCEL_SETS["5"].writing.push({
  id: "L5-W2-T503",
  slot: "L5-W2",
  replacesSample: true,
  name: "Timed persuasive essay: Nudges or regulation?",
  task: "L5-10 · timed persuasive essay (test conditions)",
  topic: "T503 Behavioural economics and nudge policy",
  textType: "persuasive essay",
  min: 600, minType: "rec", mins: 90, test: true, crit: "5W",
  prompt: "'Governments should rely on behavioural nudges, rather than regulation, to change public behaviour.' To what extent do you agree? Support your position with evidence and reasoning, and address at least one opposing argument.",
  tips: ["Take a clear position in your introduction and keep to it.", "Support each main point with an example or evidence you know (for example, default settings, health warnings, taxes or bans).", "Include at least one paragraph that presents an opposing argument fairly and then responds to it.", "Leave 10 minutes to check accuracy: grammar, vocabulary and punctuation are assessed at Level 5."],
  teacher: "Second Level 5 writing text, under test conditions (platform choice for which text is timed; see VERIFY-L5-04). Different topic from the exit report. Rate with W5.1–W5.6, with attention to W5.2 (accuracy) and W5.3 (evidence-based)."
});

/* ---------------- SPEAKING ---------------- */
window.NZCEL_SETS["5"].speaking.push({
  key: "pres", interaction: false,
  id: "L5-S1-T501",
  slot: "L5-S1",
  name: "Research presentation: Antibiotic prescribing in two regions",
  task: "L5-15 · presentation on research, explaining data, with Q&A",
  topic: "T501 Antimicrobial resistance",
  minS: 600, maxS: 720, minLabel: "10–12 minutes", minType: "rec", crit: "5S",
  brief: "Present the data below as if it were research findings for an audience of health-science students. Explain the research question, what the data show and what they do not show, and argue for one policy response supported by the evidence. Then take questions. Speak for 10–12 minutes. Cue cards only; any slides should show data, not paragraphs of text.",
  data: [
    ["Indicator (fictional data)", "North 2023", "North 2025", "South 2023", "South 2025"],
    ["Antibiotic prescriptions per 1,000 people per year", "820", "790", "840", "650"],
    ["Share of prescriptions for respiratory infections that are usually viral", "38%", "37%", "40%", "24%"],
    ["Resistance of a common urinary-tract bacterium to the first-line antibiotic", "31%", "33%", "30%", "29%"],
    ["Note", "No new programme", "", "From 2024: stewardship advice for GPs and rapid diagnostic tests in clinics", ""]
  ],
  prep: ["Introduction (about 1 minute): the research question and why it matters.", "Background (about 2 minutes): what antimicrobial resistance is and why prescribing matters. Explain technical terms simply.", "Findings (about 3–4 minutes): walk through the data. Compare the regions and the two years. Use precise language for change (fell from… to…, a drop of… percentage points).", "Interpretation (about 2 minutes): what the data suggest, and their limits: two years only, correlation is not causation, other differences between regions.", "Recommendation and conclusion (about 2 minutes): argue for one policy response and summarise. Then invite questions, adjusting to a more conversational register."],
  teacherQs: ["Can we be sure the South's programme caused the fall in prescribing?", "Why did resistance change much less than prescribing in the South?", "What other differences between the regions might explain the results?", "If you could collect one more piece of data, what would it be and why?", "How would you explain your recommendation to a group of GPs rather than to students?"],
  teacher: "Exit-level presentation explaining data. Students who have done the AMR webinar (L5-L1) have useful background, but must interpret this data themselves. Look for accurate description of change (e.g. 'fell by 16 percentage points'), appropriate caution about causation, and a register shift between presentation and Q&A (S5.1). Rate with S5.1–S5.8. All data are fictional."
});

window.NZCEL_SETS["5"].speaking.push({
  key: "int", interaction: true,
  id: "L5-S2-T502",
  slot: "L5-S2",
  name: "Academic debate: Automated decisions in public agencies",
  task: "L5-16 · academic debate (interaction)",
  topic: "T502 Algorithmic decision-making and fairness",
  minS: 600, maxS: 720, minLabel: "10–12 minutes", minType: "rec", crit: "5S",
  brief: "Two teams of two or three debate the motion: 'Public agencies should not use automated systems to make decisions about individuals.' Each speaker gives a short formal opening statement, followed by an open floor in which teams respond directly to each other, and closing statements. The whole debate should last 10–12 minutes. Adjust your register: formal for statements, more conversational but still academic in the open floor. No scripts: notes with key words only.",
  roles: [
    { name: "Proposition 1", position: "Opens: automated decisions about individuals are risky (bias from historical data, proxies, scale) and should not be made by public agencies." },
    { name: "Proposition 2", position: "Accountability: people often cannot see or challenge automated decisions; public agencies have special duties of fairness and transparency." },
    { name: "Opposition 1", position: "Opens: humans are also biased and inconsistent; well-designed, audited systems can be fairer and faster for the public." },
    { name: "Opposition 2", position: "Proposes safeguards instead of a ban: transparency, explanation, human review and regular auditing." }
  ],
  teacherQs: ["(To Proposition) Would you ban systems that only help a human decide, or only fully automated decisions?", "(To Opposition) Who is responsible when an audited system still produces unfair outcomes?", "Can both teams agree on any safeguards?", "How did your language change between your opening statement and the open floor?"],
  teacher: "Interaction practice. Students who have heard the podcast (L5-L2) have background ideas, but should build their own arguments. Watch for extended, linked turns (S5.2), direct rebuttal and concession (S5.5) and register shift between formal statements and open floor (S5.1). Rate with S5.1–S5.8."
});
