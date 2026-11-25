/*
 * NZCEL (Academic) Level 4 — full-length practice set: WRITING and SPEAKING
 * Source pack documents are original and fictional (the neighbourhood, data and authors are invented
 * for teaching) and are labelled as such.
 */
window.NZCEL_SETS = window.NZCEL_SETS || {};
window.NZCEL_SETS["4"] = window.NZCEL_SETS["4"] || { listening: [], reading: [], writing: [], speaking: [] };

/* ---------------- WRITING ---------------- */
window.NZCEL_SETS["4"].writing.push({
  id: "L4-W1-T402",
  slot: "L4-W1",
  name: "Timed essay: Class start times and student sleep",
  task: "L4-14 · modelled on EAP 22749 (preparation only)",
  topic: "T402 Sleep, memory and study habits",
  textType: "structured essay",
  min: 500, minType: "must", mins: 75, test: true, crit: "4W",
  prompt: "Many universities schedule lectures and examinations early in the morning. Some people argue that start times should be later, because many young adults do not get enough sleep and tired students learn less effectively. Others believe that early starts help students develop good habits that will prepare them for working life. Discuss both views and give your own opinion, supported by reasons and examples.",
  tips: ["Plan for about 10 minutes before you write: introduction with a clear position, two or three body paragraphs, conclusion.", "Develop each main idea with explanation and an example.", "Leave 5–10 minutes to check your grammar and vocabulary."],
  teacher: "Exit-level writing practice under test conditions. Links to the listening sample on sleep and memory (T402) for students who have done it, but the essay must not rely on it. Rate with W4.1–W4.5."
});

window.NZCEL_SETS["4"].writing.push({
  id: "L4-W2-T401",
  slot: "L4-W2",
  name: "Report using sources: Cooling a city neighbourhood",
  task: "L4-15 · modelled on EAP 22750 (preparation only)",
  topic: "T401 Urban green space and city heat",
  textType: "report (crafted, using researched material)",
  min: 800, minType: "must", mins: null, test: false, crit: "4WS",
  prompt: "Riverside Flats is an inner-city neighbourhood that becomes very hot in summer. The local council is asking for advice on how to reduce heat in the area. Using the three sources in the source pack, write a report of at least 800 words for the council that (1) explains the main causes of the heat problem in Riverside Flats, (2) evaluates TWO possible strategies, including their advantages and limitations, and (3) recommends what the council should do first, with reasons. Use the sources to support your points, paraphrase them in your own words, and acknowledge each source when you use it, for example (Source A) or (Martin, 2026).",
  tips: ["Use report headings, for example: Introduction, Causes, Strategy 1, Strategy 2, Recommendation, Conclusion.", "Do not copy sentences from the sources. Paraphrase, and acknowledge the source.", "You may draft, revise and use a dictionary. Your final report must be your own work: no AI tools."],
  sources: [
    { label: "Source A", cite: "Introductory urban geography text (adapted)", title: "Why are cities hotter than the countryside?",
      text: "Many cities are noticeably warmer than the rural areas around them, especially at night. This is known as the urban heat island effect. There are three main causes. First, materials such as asphalt, concrete and brick absorb heat from the sun during the day and release it slowly after dark. Second, cities have fewer plants. In rural areas, trees and grass release water vapour through their leaves, a process called evapotranspiration, which cools the surrounding air. Third, buildings, vehicles and air-conditioning units produce waste heat.\n\nUrban planners have proposed several responses. The most common is to increase green space: planting street trees, creating parks and building green roofs. Trees also provide shade, which lowers the temperature of surfaces such as roads and walls. A second approach is to use lighter-coloured materials for roofs and pavements, because light surfaces reflect more sunlight than dark ones.\n\nHowever, these solutions are not equally effective everywhere. In dry climates, plants need irrigation, and water may be scarce. New parks can also increase property values nearby, which may push lower-income residents out of the neighbourhoods the parks were meant to help." },
    { label: "Source B", cite: "Riverside Flats Neighbourhood Profile (fictional council document, 2026)", title: "Riverside Flats: Neighbourhood Profile (fictional data for this task)",
      text: "Area: approximately 40 hectares of mainly terraced houses and low-rise apartments, with a busy main road and two large car parks.\n\nTree cover: very low compared with surrounding suburbs. Most streets have no street trees. There is one small park of about one hectare.\n\nRoofs: most buildings have dark metal or bitumen roofs.\n\nResidents: a high proportion are renters, and the area has more residents aged over 70 and more families with young children than the city average. Many homes are older and poorly insulated, and few have air-conditioning.\n\nCommunity concerns (from a resident survey): homes that are too hot to sleep in during summer nights; no shaded places for children to play; concern that improvements could lead to higher rents.\n\nCouncil budget: limited. The council can fund one major project in the next three years." },
    { label: "Source C", cite: "Martin, J. (2026). Cool roofs before parks? Opinion piece in a fictional city newspaper", title: "Cool roofs before parks? (opinion, fictional author)",
      text: "Everyone loves trees, and I am not against planting them. But if we want results quickly and cheaply, we should start with roofs. Painting a dark roof with a light, reflective coating can be done in a day, and it reduces the heat that enters the building below. For residents who cannot afford air-conditioning, this could make the difference between a sleepless night and a bearable one.\n\nTrees, by contrast, take many years to grow large enough to provide real shade, and they need space, water and maintenance. In a crowded neighbourhood, finding space for new trees can mean removing parking, which is often unpopular.\n\nOf course, cool roofs mainly help the people inside the buildings. They do little for people walking in the street, and they do not provide the other benefits of green space, such as places to relax and play. A sensible plan would probably include both. But the first step should be the one that helps the most vulnerable people soonest." }
  ],
  teacher: "Crafted, source-based task. Check paraphrasing and acknowledgement (W4.6). Strong reports connect Source B's details (dark roofs, older residents, renters, limited budget) to the strategies in Sources A and C, and address the rent concern. All sources are fictional or adapted for teaching."
});

window.NZCEL_SETS["4"].writing.push({
  id: "L4-W3-T405",
  slot: "L4-W3",
  name: "Summary of a research article",
  task: "L4-13 · summarising academic articles",
  topic: "T405 Attention and online learning",
  textType: "summary of an academic article",
  min: 400, minType: "rec", mins: null, test: false, crit: "4W",
  prompt: "Write a summary of at least 400 words of the research article 'Does Switching Tabs Reduce Learning from Online Lectures? A Hypothetical Study' (Reading practice: Research article). Your summary should explain the aim of the study, the method, the main findings and the writers' conclusions and limitations. Write in your own words, and do not include your own opinion.",
  sourceRef: "L4-R2-T405",
  tips: ["Start with one sentence that gives the topic and aim of the study.", "Follow the order of the article: aim, method, findings, discussion, limitations.", "Use reporting verbs: the study found…, the writers suggest…, they acknowledge…"],
  teacher: "Summary task. A strong summary covers aim, method (two groups, browser extension, 20-question test), the recall vs understanding finding, the self-assessment finding, the explanation, the recommendations and at least two limitations, in the student's own words."
});

/* ---------------- SPEAKING ---------------- */
window.NZCEL_SETS["4"].speaking.push({
  key: "pres", interaction: false,
  id: "L4-S1-T404",
  slot: "L4-S1",
  name: "Academic presentation with questions",
  task: "L4-17 · modelled on EAP 22891 (preparation only)",
  topic: "T404 Freshwater ecosystems and invasive species",
  minS: 480, maxS: null, minLabel: "at least 8 minutes", minType: "must", crit: "4SP",
  brief: "Give an academic presentation of at least 8 minutes on this question: 'How can introduced species harm freshwater ecosystems, and what is the most effective way to manage them?' Explain how introduced species spread, give at least two examples of the harm they cause, and argue for one management approach. Finish by answering questions from your audience. You may use cue cards with key words only, and slides with very little text.",
  prep: ["Introduction (about 1 minute): your question, why it matters, and an outline of your talk.", "How species spread (about 2 minutes): two or three pathways, with examples.", "Harm to ecosystems (about 2–3 minutes): at least two types of impact, each explained with an example.", "Management (about 2 minutes): compare approaches and argue for one.", "Conclusion (about 1 minute): summarise and restate your position. Then invite questions."],
  teacherQs: ["Why do some introduced species become invasive while others do not?", "Which pathway do you think is hardest to control, and why?", "You argued for prevention. What can be done once a species has already spread?", "Who should pay for managing invasive species?", "Can you give an example of a habitat change caused by an invader?"],
  teacher: "Exit-level presentation practice. Students who have done the listening lecture (L4-L1) have useful background, but must use their own words and structure. Ask 2–3 questions from the bank after the talk. Rate with S4P.1–S4P.6."
});

window.NZCEL_SETS["4"].speaking.push({
  key: "int", interaction: true,
  id: "L4-S2-T406",
  slot: "L4-S2",
  name: "Seminar discussion: Reducing food waste",
  task: "L4-18 · seminar discussion (interaction)",
  topic: "T406 Food waste in supply chains",
  minS: 360, maxS: 600, minLabel: "6–10 minutes", minType: "rec", crit: "4SI",
  brief: "In a group of three or four, discuss this question for 6–10 minutes: 'Where should efforts to reduce food waste be focused: on farms, in supermarkets, or in households?' Each person takes a role card with a starting position. Give reasons and examples for your position, respond to other people's ideas, and try to reach a group recommendation by the end. No scripts: you may only look at your role card.",
  roles: [
    { name: "Farmer's representative", position: "Focus on supermarkets: their cosmetic standards and pricing cause waste on farms." },
    { name: "Supermarket manager", position: "Focus on households: that is where most waste happens in wealthy countries, and shops already reduce their own waste." },
    { name: "Community educator", position: "Focus on households, through practical skills such as meal planning, storage and understanding date labels." },
    { name: "Researcher", position: "Focus on a combination: the stages are connected, so changes at one stage affect the others." }
  ],
  teacherQs: ["Can anyone give an example to support that point?", "Do you agree with what [name] just said? Why or why not?", "What would be the first practical step?", "Has the group reached agreement? What is your recommendation?"],
  teacher: "Interaction practice. Use the prompts only if the discussion stalls. Watch for turn-taking, building on others and responding to counter-points. Rate with S4I.1–S4I.5."
});
