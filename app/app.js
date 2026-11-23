/* ================= DATA (from docs/*.md, sourced from the NZQA NZCEL Supporting Document) ================= */
const STU=window.NZCEL_AUDIENCE==="student";
const VIEWS=STU?[["home","Home"],["formative","Practice exercises"],["mock","Mock exam"],["rubric","Writing & speaking"]]:[["home","Overview"],["alignment","Alignment matrix"],["blueprint","Assessment blueprint"],["formative","A · Formative"],["mock","B · Timed mock"],["rubric","C · Rubric tasks"],["verify","Verification log"]];

const GPO={
 "4":[
  {id:"L4A-LIS",skill:"Listening",text:"Understand main ideas and supporting details of moderately complex oral academic texts.",ref:"SD p.10; p.59"},
  {id:"L4A-SPK",skill:"Speaking",text:"Participate effectively in sustained spoken discourse in academic contexts.",ref:"SD p.11; p.57"},
  {id:"L4A-RDG",skill:"Reading",text:"Understand main ideas and supporting details of moderately complex written academic texts.",ref:"SD p.12; p.53"},
  {id:"L4A-WRI",skill:"Writing",text:"Write detailed, developed, moderately complex academic texts.",ref:"SD p.13; p.55"}],
 "5":[
  {id:"L5A-LIS",skill:"Listening",text:"Understand extended complex oral academic texts on a range of concrete, abstract and technical topics.",ref:"SD p.10"},
  {id:"L5A-SPK",skill:"Speaking",text:"Participate flexibly and effectively in extended spoken discourse on complex academic topics.",ref:"SD p.11"},
  {id:"L5A-RDG",skill:"Reading",text:"Understand, analyse, and evaluate complex written academic texts on a range of topics.",ref:"SD p.12; p.18"},
  {id:"L5A-WRI",skill:"Writing",text:"Write well-structured, accurate, evidence-based, extended academic texts on complex and technical topics.",ref:"SD p.13"}]
};
const META={
 "4":{title:"NZCEL (Academic) Level 4",ref:"1883",cefr:"mid B2",ielts:"6.0",path:"Most undergraduate degrees",us:"Mandatory EAP unit standards: 22892, 22751, 22749, 22750, 22891"},
 "5":{title:"NZCEL (Academic) Level 5",ref:"1884",cefr:"high B2",ielts:"6.5",path:"Degrees requiring higher entry; most postgraduate qualifications",us:"No unit standards mapped to Level 5 in the Supporting Document (VERIFY-L5-01)"}
};
const GLOSS={
 "4":[["Main ideas","The central thought of a text or a larger section of a text.","SD p.50"],["Supporting details","Information that explains, develops or illustrates the main idea, e.g. reasons, causes, examples.","SD p.50"],["Moderately complex","A mix of straightforward and more complex elements.","SD p.49"],["Detailed, developed, moderately complex academic texts","Academic texts with inter-related facts/ideas developed through the text, using complex sentence structures.","SD p.49"],["Participate effectively","Clearly presenting ideas and arguments and appropriately employing interactive strategies.","SD p.50"],["Sustained spoken discourse","Interactions maintained for an extended time with appropriate turn-taking; monologues developed and well sequenced.","SD p.49"]],
 "5":[["Complex texts","Inter-related facts/ideas developed through the text, using complex sentence structures.","SD p.49"],["Extended spoken discourse","Topics sustained and linked across longer turns; monologues well developed, extended, coherent.","SD p.49"],["Participate flexibly","Adjusting speech and expressions to situation and recipient; appropriate formality.","SD p.50"],["Complex academic topics","Need some knowledge of an academic field and relevant academic vocabulary.","SD p.48"],["Complex and technical topics","As above, plus specialised vocabulary.","SD p.48"],["Not defined in the SD","analyse, evaluate, evidence-based, well-structured, accurate. Platform working definitions apply (VERIFY-L5-03).","—"]]
};
const FOCUS={
 "4":{Listening:[["MI","Identify the central idea of a whole oral text or a section"],["SD","Identify reasons, causes, examples and explanations"],["REL","Relate supporting details to the correct main idea; follow signposting"],["NOTE","Take usable notes and answer from them"]],
      Reading:[["MI","Identify main ideas of a text and its sections"],["SD","Identify reasons, causes, examples, evidence"],["ORG","Follow organisation (problem–solution, cause–effect) and how ideas relate"],["FIND","Identify aim, method outline and findings of a simplified research article"]],
      Writing:[["DEV","Develop ideas with explanation, examples, evidence"],["ORG","Organise with paragraphing and cohesion"],["LANG","Complex sentence structures and academic vocabulary"],["SRC","Integrate and acknowledge researched material (22750-style)"],["SUM","Summarise an academic article in own words"]],
      Speaking:[["PRES","Developed, well-sequenced presentation with Q&A"],["INT","Sustained discussion: turn-taking, building on others"],["ARG","State and defend a position with reasons"]]},
 "5":{Listening:[["EXT","Follow an 8–10 min talk; track links across sections"],["ARG","Follow lines of argument, concessions, counter-arguments"],["CON","Understand concrete phenomena, processes, data"],["ABS","Understand abstract concepts and positions"],["TECH","Understand field-specific terms in context"],["STANCE","Identify stance and certainty (understanding only; evaluation is Level 6)"]],
      Reading:[["U","Understand main ideas, detail and implications"],["AN","Analyse structure, argument, claim–evidence links, stance"],["EV","Judge how far evidence supports claims; compare viewpoints"],["RNG","Read across disciplines"]],
      Writing:[["STR","Coherent extended structure suited to genre"],["ACC","Accuracy across an extended text"],["EVID","Support claims with acknowledged evidence"],["EXT","Sustain analysis to ≥ 1000 words"],["TECH","Handle technical content and specialised vocabulary"]],
      Speaking:[["FLEX","Adjust register and formality to audience/situation"],["EXT","Sustain and link longer turns"],["EVID","Present research/data; support arguments with evidence"],["DEB","Argue, rebut, respond in academic debate"]]}
};
const TEXTTYPES={
 "4":{Reading:{inh:"simple academic textbook texts; infographics with supporting text; article summaries; web-based materials; news articles on academic topics",add:"short academic texts explaining concepts or processes; short simple case studies; short research articles (simplified / abstracts); textbook sections across fields"},
      Listening:{inh:"academic lectures; academic discussions; talks/presentations; interviews",add:"panel discussions; documentaries; interviews with experts"},
      Speaking:{inh:"small group work; oral presentations; interactions/negotiations in academic settings; describing visuals",add:"debates / defending an opinion; longer presentations followed by Q&A"},
      Writing:{inh:"short paragraphs and essays; reports; summaries; reflective journals; note-taking",add:"structured essays; summarising academic articles"}},
 "5":{Reading:{inh:"all Level 3 and 4 academic types at Level 5 level and length",add:"academic journal articles; research papers/reports; textbook chapters; critical reviews"},
      Listening:{inh:"all Level 3 and 4 academic types at Level 5 level and length",add:"seminars/webinars; podcasts; panel debates"},
      Speaking:{inh:"all Level 3 and 4 academic activities at Level 5 level and length",add:"academic debates; presentation on research, explaining data and supporting arguments with evidence"},
      Writing:{inh:"all Level 3 and 4 academic activities at Level 5 level and length",add:"persuasive essays; research summaries; formal academic reports on case studies; critical reviews"}}
};
const SUFF={
 "4":{Listening:[["Minimum two oral texts, incl. the unit standard(s)","must"],["At least two different topics, academic context","must"],["Separate occasions","must"],["EAP US 22892 is one of the texts (exit-level evidence)","must"],["22892 text minimum 8 minutes","must"],["Other texts approx. 6–8 minutes","rec"],["Texts repeated once only","must"],["No resubmission for 22892; no extra listening","must"]],
      Reading:[["Minimum two texts incl. unit standard(s), two topics, separate occasions","must"],["EAP US 22751 is one of the texts","must"],["22751 text at least 1500 words","must"],["Other texts minimum 800 words","rec"],["Responses written, oral or non-verbal; visuals permitted","perm"]],
      Writing:[["Minimum three texts incl. unit standards, two topics, separate occasions","must"],["EAP US 22749 and 22750 are two of the texts","must"],["22749: minimum 500 words, under test conditions","must"],["22750: at least 800 words (researched material)","must"],["Remaining text minimum 400 words","rec"],["No resubmission for 22749","must"]],
      Speaking:[["Minimum two tasks incl. unit standard(s), two topics, separate occasions","must"],["EAP US 22891 is one (exit-level evidence)","must"],["22891 presentation at least 8 minutes","must"],["Other monologues / interactions 6–10 minutes","rec"],["At least one task must be an interaction","must"],["Minimal written support; cue cards only for presentations","must"]]},
 "5":{Listening:[["Minimum two oral texts, two topics, academic context, separate occasions","must"],["One task at exit level; others may be simpler","must"],["Each text approx. 8–10 minutes","rec"],["Texts repeated once only","must"]],
      Reading:[["Minimum two texts, two topics, academic context, separate occasions","must"],["One task at exit level; others may be simpler","must"],["Texts minimum 1500 words","rec"]],
      Writing:[["Minimum two texts, two topics, academic context, separate occasions","must"],["Exit-level text minimum 1000 words; other text(s) minimum 600","rec"],["One text assessed under test conditions","must"]],
      Speaking:[["Minimum two tasks, two topics, academic context, separate occasions","must"],["Interactions and monologues 10–12 minutes","rec"],["At least one interaction and one presentation","must"],["Minimal written support; cue cards only for presentations","must"]]}
};
const MATRIX={
 "4":[
 ["L4-01","Lecture: main idea per section","FM","Listening","MI","academic lecture","M: 6–8 min",""],
 ["L4-02","Lecture: complete notes / outline","FM","Listening","SD, REL, NOTE","academic lecture","M: ≥ 8 min","EAP 22892"],
 ["L4-03","Panel discussion: speakers, positions, reasons","FM","Listening","MI, SD","panel discussion","M: 6–8 min",""],
 ["L4-04","Expert interview: claims and examples","FM","Listening","MI, SD","interview with experts","M: 6–8 min",""],
 ["L4-05","Documentary: cause–effect chains","F","Listening","SD, REL","documentary","any",""],
 ["L4-06","Section main ideas / headings","FM","Reading","MI","textbook section","M: ≥ 800 words",""],
 ["L4-07","Supporting details: short answer, table","FM","Reading","SD, ORG","short academic text (process)","M: ≥ 800 words",""],
 ["L4-08","Research article: aim / method / findings","FM","Reading","FIND, MI","short research article","M: ≥ 800 words",""],
 ["L4-09","Extended reading: process information","M","Reading","MI, SD, ORG","textbook section / research article","≥ 1500 words","EAP 22751"],
 ["L4-10","Case study: problem, causes, solutions","FM","Reading","MI, SD, ORG","short simple case study","M: ≥ 800 words",""],
 ["L4-11","Infographic + text interpretation","F","Reading","SD","infographic with supporting text","any",""],
 ["L4-12","Paragraph development / cohesion","F","Writing","DEV, ORG, LANG","short paragraphs","—",""],
 ["L4-13","Summary of an academic article","FR","Writing","SUM, LANG","summarising academic articles","≥ 400 words (rec.)",""],
 ["L4-14","Timed structured essay, test conditions","MR","Writing","DEV, ORG, LANG","structured essay","≥ 500 words","EAP 22749"],
 ["L4-15","Crafted researched essay/report","R","Writing","DEV, ORG, LANG, SRC","structured essay / report","≥ 800 words","EAP 22750"],
 ["L4-16","Third writing text (report/evaluation)","R","Writing","DEV, ORG, LANG","report","≥ 400 words (rec.)","31040 optional"],
 ["L4-17","Academic presentation + Q&A","R","Speaking","PRES, ARG","longer presentation + Q&A","≥ 8 min","EAP 22891"],
 ["L4-18","Seminar / tutorial discussion","R","Speaking","INT, ARG","academic discussion","6–10 min (rec.)","31017 listed"],
 ["L4-19","Debate / defending an opinion","R","Speaking","INT, ARG","debate","6–10 min (rec.)",""],
 ["L4-20","Describing visuals; tutor negotiation","F","Speaking","PRES, INT","describing visuals","any",""]],
 "5":[
 ["L5-01","Seminar: argument mapping","FM","Listening","EXT, ARG","seminar/webinar","M: 8–10 min",""],
 ["L5-02","Technical lecture: definitions, process notes","FM","Listening","TECH, CON","academic lecture","M: 8–10 min",""],
 ["L5-03","Panel debate: positions, certainty, disagreement","FM","Listening","ABS, STANCE, ARG","panel debate","M: 8–10 min",""],
 ["L5-04","Academic podcast: abstract concepts","FM","Listening","ABS, EXT","podcast","M: 8–10 min",""],
 ["L5-05","Journal article: structure, claim–evidence","FM","Reading","U, AN","academic journal article","M: ≥ 1500 words",""],
 ["L5-06","Research report: findings vs conclusions","FM","Reading","AN, EV","research paper/report","M: ≥ 1500 words",""],
 ["L5-07","Critical review: stance, criteria, evidence","FM","Reading","AN, EV","critical review","M: ≥ 1500 words",""],
 ["L5-08","Textbook chapter: complex concepts","FM","Reading","U, RNG","textbook chapter","M: ≥ 1500 words",""],
 ["L5-09","Paired texts: compare viewpoints","F","Reading","EV, AN","article + review","any",""],
 ["L5-10","Timed persuasive essay, test conditions","MR","Writing","STR, ACC, EVID","persuasive essay","≥ 600 words",""],
 ["L5-11","Formal report on a case study (exit)","R","Writing","STR, ACC, EVID, EXT, TECH","formal academic report","≥ 1000 words",""],
 ["L5-12","Research summary","FR","Writing","ACC, EVID, TECH","research summary","≥ 600 words",""],
 ["L5-13","Critical review (writing)","R","Writing","STR, EVID, EXT","critical review","≥ 1000 words if exit",""],
 ["L5-14","Accuracy and cohesion workshop","F","Writing","ACC, STR","—","—",""],
 ["L5-15","Research presentation explaining data + Q&A","R","Speaking","EVID, EXT, FLEX","presentation on research","10–12 min",""],
 ["L5-16","Academic debate","R","Speaking","DEB, FLEX, EXT","academic debate","10–12 min",""],
 ["L5-17","Register-shift role play","FR","Speaking","FLEX","interactions in academic settings","R: 10–12 min",""]]
};
const SLOTS={
 "4":[["L4-L1","Listening","L4-02 · modelled on EAP 22892","audio ≥ 8 min","must"],["L4-L2","Listening","L4-01/03/04","audio 6–8 min","rec"],["L4-R1","Reading","L4-09 · modelled on EAP 22751","≥ 1500 words","must"],["L4-R2","Reading","L4-06/07/08/10","≥ 800 words","rec"],["L4-W1","Writing","L4-14 · modelled on EAP 22749 · test conditions","≥ 500 words","must"],["L4-W2","Writing","L4-15 · modelled on EAP 22750","≥ 800 words","must"],["L4-W3","Writing","L4-13/16","≥ 400 words","rec"],["L4-S1","Speaking","L4-17 · modelled on EAP 22891 · presentation","≥ 8 min","must"],["L4-S2","Speaking","L4-18/19 · interaction","6–10 min","rec"]],
 "5":[["L5-L1","Listening","L5-01–04 (exit)","8–10 min","rec"],["L5-L2","Listening","another L5 listening row","8–10 min","rec"],["L5-R1","Reading","L5-05–08 (exit)","≥ 1500 words","rec"],["L5-R2","Reading","another L5 reading row","≥ 1500 words","rec"],["L5-W1","Writing","L5-11 / L5-13 (exit, crafted)","≥ 1000 words","rec"],["L5-W2","Writing","L5-10 · test conditions","≥ 600 words","must"],["L5-S1","Speaking","L5-15 · presentation","10–12 min","rec"],["L5-S2","Speaking","L5-16/17 · interaction","10–12 min","rec"]]
};
const TOPICS={
 "4":[["T401","Urban green space and city heat","Environmental science"],["T402","Sleep, memory and study habits","Psychology / health"],["T403","Small loans and small businesses","Economics"],["T404","Freshwater ecosystems and invasive species","Biology"],["T405","Attention and online learning","Education"],["T406","Food waste in supply chains","Business / logistics"]],
 "5":[["T501","Antimicrobial resistance","Technical · health science"],["T502","Algorithmic decision-making and fairness","Abstract + technical"],["T503","Behavioural economics and nudge policy","Abstract"],["T504","Coastal hazards and managed retreat","Concrete + technical · cultural review needed"],["T505","Heritage language maintenance in migrant families","Abstract · cultural review needed"],["T506","Measuring carbon: accounting methods","Technical"]]
};
const TIMES={"4":[["Listening 6–8 min audio","2 plays + 10 min"],["Listening 22892-style ≥ 8 min","2 plays + 15 min"],["Reading ≥ 800 words","45 min"],["Reading 22751-style ≥ 1500 words","75 min"],["Writing 22749-style ≥ 500 words","75 min"]],
 "5":[["Listening 8–10 min","2 plays + 15 min"],["Reading ≥ 1500 words","75 min"],["Timed writing ≥ 600 words","90 min"]]};
const MODES=[["Purpose","Learning and feedback on specific focus areas","Practise under conditions resembling the SD","Extended performances with criterion feedback"],
["Text length","Any; shorter allowed","Must meet SD length for level and task","States SD minimum length/duration"],
["Timing","Untimed","Timed (platform limit)","Timed for test-condition tasks"],
["Audio plays","Unlimited + transcript after","Exactly two","n/a"],
["Dictionary","Allowed","Allowed (dictionary function only)","Allowed"],
["Hints","Yes","None","None during performance"],
["AI tools","Optional aids","Disabled","Disabled"],
["Feedback","Immediate, per item","After submission, by focus area","Descriptor per criterion"],
["Retake","Unlimited","New form, new topic","Crafted: revise; test-condition: new prompt"],
["Never shown","Levels from totals","Pass/fail, %, bands, CEFR/IELTS","Overall pass/fail or total"]];
const VERIFY=[
["VERIFY-01","Both","Exact GPO wording for 1883 and 1884 against the current qualification specifications","The SD's Section 3 and Section 8 disagree for another qualification (L4 Employment writing)"],
["VERIFY-02","L4","Performance criteria of EAP 22749, 22750, 22751, 22891, 22892","Not in the SD; needed to finalise rubrics for tasks modelled on these standards"],
["VERIFY-03","L4","Current version, status, credits and expiry of all listed unit standards","SD lists credits but no version numbers"],
["VERIFY-04","L4","Credit arithmetic (e.g. reading 30998 + 31009 + 22751 = 16 vs 15 per GPO)","Platform awards no credits, so it won't state credit totals"],
["VERIFY-05","Both","'Repeated once only' read as exactly two plays","Implemented as first play + one repeat"],
["VERIFY-06","Both","Any stated time limits for test-condition tasks","SD gives none; platform time limits are labelled as platform choices"],
["VERIFY-L5-01","L5","No mandatory unit standards for 1884","Section 8 maps Levels 1–4 only"],
["VERIFY-L5-03","L5","Working definitions of analyse, evaluate, evidence-based, well-structured, accurate","Not defined in the SD glossary"],
["VERIFY-L5-04","L5","Which L5 writing text is under test conditions","Platform choice: the 600-word text"]];

/* ---------- Rubrics (docs/marking-rubrics.md) ---------- */
const BANDS=STU?["Not yet","Developing","Nearly there","Matches the outcome in this task"]:["Not yet evident","Developing","Approaching the GPO description","Consistent with the GPO description in this task"];
const SHORT={MI:"Main ideas",SD:"Supporting details",REL:"Linking ideas",NOTE:"Note-taking",ORG:"Text organisation",FIND:"Research findings",EXT:"Following long talks",ARG:"Following arguments",CON:"Concrete topics",ABS:"Abstract ideas",TECH:"Technical vocabulary",STANCE:"Speaker's stance",U:"Understanding",AN:"Analysis",EV:"Evaluation",RNG:"Range of topics"};
const SLOT_STU={"L4-L1":"Long lecture (at least 8 minutes)","L4-L2":"Lecture, panel or interview (6–8 minutes)","L4-R1":"Long academic text (at least 1500 words)","L4-R2":"Academic text (at least 800 words)","L4-W1":"Timed essay (at least 500 words)","L4-W2":"Essay or report using sources (at least 800 words)","L4-W3":"Summary or report (at least 400 words)","L4-S1":"Presentation with questions (at least 8 minutes)","L4-S2":"Group discussion or debate (6–10 minutes)",
"L5-L1":"Seminar, lecture or podcast (8–10 minutes)","L5-L2":"A second talk on a different topic (8–10 minutes)","L5-R1":"Journal article or research report (at least 1500 words)","L5-R2":"A second text on a different topic (at least 1500 words)","L5-W1":"Report or critical review (at least 1000 words)","L5-W2":"Timed essay (at least 600 words)","L5-S1":"Research presentation with questions (10–12 minutes)","L5-S2":"Academic debate (10–12 minutes)"};
const critName=c=>STU?c.replace(/^[A-Z0-9.]+\s+/,""):c;
const topicName=t=>STU?t.replace(/^T\d+\s+/,""):t;
const RUB={
 "4W":[["W4.1 Task and academic purpose",["Does not answer the task or genre","Partly answers the task; genre unclear","Answers the task; genre mostly appropriate","Fully answers the task in an appropriate academic genre"]],
  ["W4.2 Detail and development",["Ideas listed or asserted, not developed","Some ideas developed; support thin or general","Most ideas developed with explanation and examples","Main ideas consistently developed with explanation, examples and/or evidence"]],
  ["W4.3 Inter-related ideas and organisation",["No clear structure; ideas unconnected","Paragraphing present; links often unclear","Clear structure; ideas mostly linked; some cohesion errors","Logical structure; ideas linked within and between paragraphs"]],
  ["W4.4 Complex sentence structures",["Mainly simple sentences","Some complex sentences, often obscuring meaning","Range of complex sentences, generally controlled","Complex sentences used purposefully and with control"]],
  ["W4.5 Academic vocabulary",["Mostly general vocabulary; frequent misuse","Some academic vocabulary; noticeable misuse","Appropriate academic vocabulary; occasional misuse","Precise, appropriate academic vocabulary"]]],
 "5W":[["W5.1 Well-structured",["Structure does not suit the genre","Basic structure; uneven, poorly signposted","Effective overall; some sections less controlled","Structure suits genre; clear signposting throughout"]],
  ["W5.2 Accurate",["Frequent errors impede meaning","Noticeable errors sometimes impede","Generally accurate; minor errors","Consistently accurate across an extended text"]],
  ["W5.3 Evidence-based",["Claims unsupported","Some evidence, descriptive or unlinked","Claims mostly supported and acknowledged","Claims consistently supported, accurately reported, acknowledged and linked"]],
  ["W5.4 Extended",["Ideas not sustained","Length through repetition","Argument mostly sustained","Argument sustained and developed throughout"]],
  ["W5.5 Complex and technical content",["Avoids or misrepresents technical content","Superficial handling","Mostly accurate, with specialised vocabulary","Accurate explanation; precise specialised vocabulary"]],
  ["W5.6 Task fulfilment",["Does not address the task","Partly addresses the task","All parts, uneven depth","All parts fully addressed"]]],
 "4SP":[["S4P.1 Developed and well-sequenced content",["Points listed; no clear sequence","Some development; sequence unclear in places","Developed; mostly clear sequence and signposting","Developed throughout; logical sequence; effective signposting"]],
  ["S4P.2 Clear ideas and arguments",["Main message unclear","Identifiable; under-supported","Clear, mostly supported","Clear and well supported with reasons and examples"]],
  ["S4P.3 Sustaining the monologue",["Cannot sustain; long breakdowns","Frequent breakdowns or reading aloud","Sustains with occasional disruptions","Sustains with smooth flow, few unnatural pauses"]],
  ["S4P.4 Responding to questions",["Cannot respond","Brief or partial responses","Relevant to most questions","Relevant and developed answers"]],
  ["S4P.5 Language range and control",["Limited; errors often impede","Some range; errors sometimes impede","Adequate academic range; rarely impede","Good academic range with control"]],
  ["S4P.6 Intelligibility",["Often difficult to understand","Understandable with effort","Generally understandable","Consistently understandable"]]],
 "4SI":[["S4I.1 Turn-taking strategies",["Rarely takes or yields turns","Mistimed or prompted","Appropriate most of the time","Effective: initiates, interrupts politely, invites others"]],
  ["S4I.2 Sustaining the interaction",["Isolated contributions; breaks down","Maintained mostly by others","Contributes to maintaining it","Helps sustain it, building on others"]],
  ["S4I.3 Presenting and defending ideas",["Opinions not stated or unsupported","Stated with limited support","Stated, supported; some responses to challenges","States, supports and defends; responds to counter-points"]],
  ["S4I.4 Responding to others",["Ignores or misunderstands","Sometimes responds","Relevant to most contributions","Agrees, disagrees, clarifies appropriately"]],
  ["S4I.5 Language, control, intelligibility",["Often impede","Sometimes impede","Rarely impede","Controlled, appropriate, consistently understandable"]]],
 "5S":[["S5.1 Flexibility (register, formality)",["One register regardless of context","Some adjustment; inappropriate at times","Adjusts for most situations","Adjusts consistently to situation and listener"]],
  ["S5.2 Extended discourse",["Short, unlinked turns","Longer turns, poorly linked","Longer, mostly linked and coherent","Sustained, linked across longer turns; coherent"]],
  ["S5.3 Complex academic content",["General, non-academic level","Some academic content; terms misused","Mostly appropriate terminology","Accurate, with appropriate academic vocabulary"]],
  ["S5.4 Data and evidence (presentation) / Debate and rebuttal (interaction)",["Absent or misreported / no engagement","Described, not used / acknowledged only","Used for most arguments / responds to most","Used consistently / direct reasoned rebuttal and concession"]],
  ["S5.6 Interactive strategies",["Rarely appropriate","With prompting","Appropriate in most exchanges","Effective turn management, clarification, handling questions"]],
  ["S5.7 Fluency",["Frequent unnatural pauses","Noticeable pauses","Generally smooth","Smooth flow, few unnatural pauses"]],
  ["S5.8 Language range, control, intelligibility",["Often impedes","Sometimes impedes","Rarely impedes","Wide range, controlled, understandable"]]]
};

/* ---------- Demo content (original; shortened on purpose; hypothetical framing, no real statistics) ---------- */
const READ={
 "4":{topic:"T401 Urban green space and city heat",task:"L4-07 / L4-08 style",textType:"short academic text explaining concepts or processes",title:"Why are cities hotter than the countryside?",
  paras:["Many cities are noticeably warmer than the rural areas around them, especially at night. Researchers call this the urban heat island effect. There are three main causes. First, materials such as asphalt, concrete and brick absorb heat from the sun during the day and release it slowly after dark. Second, cities have fewer plants. In rural areas, trees and grass release water vapour through their leaves, a process called evapotranspiration, which cools the surrounding air. Third, buildings, vehicles and air-conditioning units produce waste heat.",
  "Urban planners have proposed several responses. The most common is to increase green space: planting street trees, creating parks and building green roofs covered in vegetation. Trees also provide shade, which reduces the temperature of surfaces such as roads and walls. A second approach is to use lighter-coloured materials for roofs and pavements, because light surfaces reflect more sunlight than dark ones.",
  "However, these solutions are not equally effective everywhere. In dry climates, plants need irrigation, and water may be scarce. In addition, new parks can increase property values nearby, which may push lower-income residents out of the neighbourhoods the parks were meant to help. For this reason, some researchers argue that cooling strategies should be planned together with housing policy.",
  "In a hypothetical example described in one textbook, two streets with similar buildings are compared on a summer afternoon. The street lined with mature trees has noticeably cooler pavement surfaces than the street without trees. The textbook uses this example to show that shade, not air temperature alone, affects how hot a street feels to pedestrians."],
  min:800, minType:"rec",
  qs:[{f:"MI",q:"What is the main idea of paragraph 1?",o:["Cities are always hotter than rural areas during the day.","The urban heat island effect has several identifiable causes.","Asphalt is the most important cause of urban heat.","Air-conditioning is the main source of waste heat."],a:1,e:"Paragraph 1 introduces the effect and then lists three causes. The other options are details or distortions (the text says especially at night, not always during the day)."},
   {f:"SD",q:"According to the text, how do plants cool the air?",o:["By absorbing heat during the day","By reflecting sunlight","By releasing water vapour through their leaves","By reducing waste heat from vehicles"],a:2,e:"Supporting detail: evapotranspiration, the release of water vapour through leaves, cools the surrounding air."},
   {f:"ORG",q:"How does paragraph 3 relate to paragraph 2?",o:["It gives further examples of the same solutions.","It describes the limitations of the solutions in paragraph 2.","It explains the causes of urban heat.","It summarises the whole text."],a:1,e:"'However' signals a contrast: paragraph 3 explains why the responses in paragraph 2 are not equally effective everywhere."},
   {f:"SD",q:"Why might a new park disadvantage some residents?",o:["It may need irrigation.","It may raise nearby property values and push lower-income residents out.","It may make the street hotter.","It may reduce shade."],a:1,e:"Reason given in paragraph 3: higher property values can displace lower-income residents."},
   {f:"FIND",q:"What does the textbook example show?",o:["Air temperature is the only factor in heat.","Shade affects how hot a street feels to pedestrians.","Light-coloured roofs are better than trees.","Rural streets are cooler than city streets."],a:1,e:"The example's stated purpose: shade, not air temperature alone, affects how hot a street feels."}]},
 "5":{topic:"T503 Behavioural economics and nudge policy",task:"L5-05 / L5-07 style",textType:"academic journal article (excerpt)",title:"Nudges: effective policy or overstated promise?",
  paras:["Behavioural economists use the term nudge to describe a change in how choices are presented that predictably alters behaviour without removing options or significantly changing financial incentives. A frequently discussed example is the default setting. When employees are automatically enrolled in a retirement savings scheme but may opt out, participation tends to be much higher than when they must actively opt in. Proponents interpret this as evidence that small, low-cost interventions can produce large social benefits.",
  "Critics raise two kinds of objection. The first is empirical. Several large-scale replication efforts have reported effects considerably smaller than those found in the original, often small, studies. Some analysts attribute this to publication bias: studies that find dramatic effects are more likely to be published than those that find none. If this is the case, the evidence base may systematically overstate what nudges can achieve.",
  "The second objection is ethical. Because nudges work partly by exploiting predictable patterns in decision-making, such as inertia, some philosophers argue that they bypass people's capacity for reflection. Defenders reply that every choice must be presented in some way; there is no neutral design, so the question is not whether to influence choices but how to do so transparently.",
  "A balanced reading of the literature suggests that defaults are among the more robust interventions, whereas messages that rely on social comparison show more variable results. Policymakers may therefore be best advised to treat nudges as one tool among several, to be combined with, rather than substituted for, structural measures such as regulation and taxation."],
  min:1500, minType:"rec",
  qs:[{f:"U",q:"Which feature is part of the definition of a nudge given in the text?",o:["It removes some options.","It significantly changes financial incentives.","It changes how choices are presented without removing options.","It requires active opt-in."],a:2,e:"Paragraph 1 defines a nudge as a change in presentation that alters behaviour without removing options or significantly changing incentives."},
   {f:"AN",q:"What is the function of paragraph 3 in the writer's argument?",o:["It provides new empirical evidence for nudges.","It presents an ethical objection and a response from defenders.","It concludes the argument.","It defines publication bias."],a:1,e:"Analysis of structure: paragraph 3 sets out the ethical objection, then gives the defenders' reply (no neutral design)."},
   {f:"EV",q:"If publication bias exists, what does the writer suggest follows?",o:["Nudges have no effect.","The published evidence may overstate the effects of nudges.","Replication studies are unreliable.","Defaults should be abandoned."],a:1,e:"Evaluation of evidence: publication bias would mean the evidence base systematically overstates effects."},
   {f:"EV",q:"How does the writer compare defaults with social-comparison messages?",o:["Both are equally robust.","Defaults appear more robust; social-comparison results are more variable.","Social-comparison messages are more robust.","Neither has any supporting evidence."],a:1,e:"Paragraph 4 judges defaults among the more robust interventions and social-comparison messages as more variable."},
   {f:"AN",q:"Which best describes the writer's own stance?",o:["Strongly in favour of replacing regulation with nudges","Opposed to all use of nudges","Cautious: nudges are useful but should complement structural measures","Neutral, with no conclusion"],a:2,e:"Stance analysis: the final sentence recommends nudges as one tool combined with, not substituted for, regulation and taxation."}]}
};
const LISTEN={
 "4":{topic:"T402 Sleep, memory and study habits",task:"L4-01 style (lecture)",textType:"academic lecture",min:360,minLabel:"6–8 min (rec.)",
  script:"Good morning, everyone. Today I want to look at the relationship between sleep and memory, and in particular why sleep matters for students. I'll cover three points: first, what happens to memories during sleep; second, the effect of losing sleep; and third, some practical implications for study.\n\nSo, first point. When we learn something new, the memory is initially quite fragile. During sleep, especially deep sleep, the brain appears to replay recent experiences. This process, which researchers call consolidation, helps to strengthen the memory and connect it with what we already know. In other words, sleep is not simply rest. It's an active part of learning.\n\nMoving on to my second point: what happens when we don't get enough sleep. A common finding is that people who stay awake all night before a test often perform worse than those who sleep, even though they have spent more time studying. A tired brain finds it harder to focus attention, and attention is needed to take in new information in the first place. So there are really two problems: new learning is harder, and earlier learning is not consolidated properly.\n\nFinally, what does this mean for you as students? The main implication is that it's better to spread study over several days, with sleep in between, than to cram everything into one long session. A second implication concerns timing. Reviewing material in the evening, and then sleeping, may help consolidation. Of course, individual needs differ, and I'm not suggesting there's one perfect timetable. But the general principle is clear: sleep should be part of your study plan, not something you sacrifice for it.\n\nRight, let's stop there and take some questions.",
  qs:[{f:"MI",q:"What is the main purpose of the lecture?",o:["To describe different stages of sleep","To explain why sleep matters for learning and study","To compare students' study timetables","To report a single experiment"],a:1,e:"The lecturer states the focus at the start: the relationship between sleep and memory, and why sleep matters for students."},
   {f:"SD",q:"What does the lecturer say consolidation does?",o:["It makes memories more fragile.","It strengthens memories and connects them to existing knowledge.","It replaces deep sleep.","It improves attention during the day."],a:1,e:"Supporting detail in the first section: replaying experiences during sleep strengthens memory and connects it to what we already know."},
   {f:"SD",q:"Which two problems result from lack of sleep?",o:["New learning is harder, and earlier learning is not consolidated.","Tests become longer, and attention improves.","Students study less, and forget faster.","Sleep becomes deeper, and memory weaker."],a:0,e:"The lecturer summarises: 'two problems: new learning is harder, and earlier learning is not consolidated properly.'"},
   {f:"REL",q:"The advice to spread study over several days supports which main idea?",o:["Individual needs differ.","Sleep between study sessions helps learning.","Evening review is always best.","Cramming saves time."],a:1,e:"Relating detail to main idea: spacing study with sleep in between applies the idea that sleep consolidates learning."}]},
 "5":{topic:"T504 Coastal hazards and managed retreat",task:"L5-01 style (seminar)",textType:"seminar",min:480,minLabel:"8–10 min (rec.)",
  script:"Thanks, everyone. In today's seminar I'm going to examine managed retreat, which planners define as the deliberate, coordinated relocation of people and assets away from areas exposed to coastal hazards. I'll argue that, although retreat is often presented as a last resort, it should be considered much earlier in planning.\n\nLet me start with the technical background. Coastal hazards include erosion, storm surge and inundation, and all three are intensified by sea-level rise. Engineers distinguish between hard protection, such as seawalls, and soft approaches, such as dune restoration. Hard protection can be effective locally, but it often accelerates erosion further along the coast, a side effect sometimes called the end effect, or outflanking.\n\nNow, the conventional view is that communities should defend first and retreat only when defence fails. Supporters of this view point out, quite reasonably, that relocation is expensive and socially disruptive, and that people have strong attachments to place. I don't dismiss those concerns. However, I'd suggest that the defend-first approach has a hidden cost. Every new investment in protection makes future retreat more difficult, because it encourages further development behind the defences. Planners describe this as path dependency.\n\nSo what's the alternative? One approach is adaptive pathways planning. Instead of choosing a single solution, a community agrees on trigger points, for instance a certain frequency of flooding, at which it will move from one option to the next. This doesn't remove uncertainty, but it makes decisions transparent before a crisis occurs.\n\nTo conclude, I'm not claiming that retreat is always the right answer. What I am claiming is that it needs to be on the table from the start.",
  qs:[{f:"ARG",q:"What is the speaker's central claim?",o:["Managed retreat is always the best option.","Retreat should be considered much earlier in planning.","Seawalls should be banned.","Sea-level rise is overstated."],a:1,e:"Stated at the start and restated in the conclusion: retreat should be on the table from the start."},
   {f:"TECH",q:"What is the 'end effect' or outflanking?",o:["Erosion further along the coast caused by hard protection","The final stage of managed retreat","Dune restoration failing in storms","Flooding behind a seawall"],a:0,e:"Technical term defined in context: hard protection often accelerates erosion further along the coast."},
   {f:"ARG",q:"Which concession does the speaker make?",o:["That seawalls never work","That relocation is costly, disruptive, and people are attached to place","That adaptive pathways remove uncertainty","That planners agree with her"],a:1,e:"Concession: she says supporters of defend-first 'quite reasonably' point to cost, disruption and attachment to place."},
   {f:"CON",q:"Why does protection create 'path dependency'?",o:["It encourages more development behind defences, making retreat harder later.","It is cheaper than retreat.","It reduces storm surge permanently.","It requires trigger points."],a:0,e:"Explanation given: each investment encourages further development, making future retreat more difficult."},
   {f:"STANCE",q:"How certain is the speaker about retreat?",o:["Certain it is always right","Uncertain whether coastal hazards exist","Firm that it should be considered from the start, while not claiming it is always right","Opposed to it"],a:2,e:"Stance and certainty: 'I'm not claiming that retreat is always the right answer… it needs to be on the table from the start.'"}]}
};
const WRITE={
 "4":{slot:"L4-W1",task:"L4-14 · modelled on EAP 22749 (preparation only)",topic:"T405 Attention and online learning",min:500,minType:"must",mins:75,test:true,crit:"4W",
  prompt:"Some universities require first-year students to attend all lectures in person, while others allow students to watch recorded lectures online instead. Discuss the advantages and disadvantages of each approach for first-year students, and give your own view with reasons and examples."},
 "5":{slot:"L5-W2",task:"L5-10 · timed persuasive essay (test conditions)",topic:"T503 Behavioural economics and nudge policy",min:600,minType:"rec",mins:90,test:true,crit:"5W",
  prompt:"'Governments should rely on behavioural nudges, rather than regulation, to change public behaviour.' To what extent do you agree? Support your position with evidence and reasoning, and address at least one opposing argument."}
};
const SPEAK={
 "4":[{key:"pres",slot:"L4-S1",name:"Academic presentation with Q&A",task:"L4-17 · modelled on EAP 22891 (preparation only)",topic:"T404 Freshwater ecosystems and invasive species",minS:480,maxS:null,minLabel:"at least 8 minutes",minType:"must",crit:"4SP",interaction:false,
   brief:"Prepare a presentation explaining how an introduced species can affect a freshwater ecosystem, the main ways such species spread, and one management approach. Finish by taking questions. You may use cue cards (key words only) and visuals with minimal text."},
  {key:"int",slot:"L4-S2",name:"Seminar discussion (interaction)",task:"L4-18",topic:"T406 Food waste in supply chains",minS:360,maxS:600,minLabel:"6–10 minutes",minType:"rec",crit:"4SI",interaction:true,
   brief:"In a group of 3–4, discuss: 'Where in the food supply chain should efforts to reduce waste be focused: farms, retailers, or households?' Your teacher may give each person a role card with a starting position. No scripts."}],
 "5":[{key:"pres",slot:"L5-S1",name:"Research presentation explaining data, with Q&A",task:"L5-15",topic:"T501 Antimicrobial resistance",minS:600,maxS:720,minLabel:"10–12 minutes",minType:"rec",crit:"5S",interaction:false,
   brief:"Using data or research findings on antibiotic prescribing provided by your teacher, present the research question, explain what the data show, and argue for one policy response supported by the evidence. Then take questions. Cue cards only."},
  {key:"int",slot:"L5-S2",name:"Academic debate (interaction)",task:"L5-16",topic:"T502 Algorithmic decision-making and fairness",minS:600,maxS:720,minLabel:"10–12 minutes",minType:"rec",crit:"5S",interaction:true,
   brief:"Two teams debate: 'Public agencies should not use automated systems to make decisions about individuals.' Rebut the other team's points and adjust your register between formal statements and open discussion."}]
};

/* ================= STATE ================= */
const store={get(k,d){try{const v=localStorage.getItem("nzcel."+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem("nzcel."+k,JSON.stringify(v))}catch(e){}}};
let LV=store.get("lv","4");
const COVK=STU?"cov-stu":"cov";
let coverage=store.get(COVK,{});
let verifyState=store.get("ver",{});
let timers=[];
function clearTimers(){timers.forEach(clearInterval);timers=[];try{speechSynthesis.cancel()}catch(e){}}
function setCov(slot,status,note){coverage[slot]={status,note,at:new Date().toLocaleString("en-NZ")};store.set(COVK,coverage)}

/* ================= HELPERS ================= */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const wc=s=>(s.trim().match(/\S+/g)||[]).length;
const mmss=s=>{s=Math.max(0,Math.round(s));return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")};
const badge=t=>t==="must"?'<span class="pill must">Must</span>':t==="rec"?'<span class="pill rec">Recommended</span>':'<span class="pill perm">Permitted</span>';
const modeTags=m=>[...m].map(x=>`<span class="modetag m${x}" title="${{F:"Formative",M:"Timed mock",R:"Rubric"}[x]}">${x}</span>`).join(" ");
const gpoOf=sk=>GPO[LV].find(g=>g.skill===sk);
function lengthCheck(measured,min,type,unit){
  const ok=measured>=min;
  return `<div class="meter">${ok?'<span class="pill ok">Meets minimum</span>':'<span class="pill warn">Below SD minimum</span>'}
  <span>Measured: <b>${unit==="s"?mmss(measured):measured+" words"}</b> · SD ${type==="must"?"requires":"recommends"}: <b>${unit==="s"?"≥ "+mmss(min):"≥ "+min+" words"}</b> ${badge(type)}</span></div>`;
}
function learnerCheck(measured,min,unit,what){
  if(!STU)return lengthCheck(measured,min,"rec",unit);
  const ok=measured>=min;
  return `<div class="meter">${ok?'<span class="pill ok">Length reached</span>':'<span class="pill warn">Not long enough yet</span>'}<span>${what}: <b>${unit==="s"?mmss(measured):measured+" words"}</b> · Aim: <b>at least ${unit==="s"?mmss(min):min+" words"}</b></span></div>`;
}
const SAMPLE='<span class="pill rec">Sample task · short version</span>';
function scriptHTML(t){const out=t.split(/\n\n/).map(x=>x.trim()).filter(Boolean);
  return `<article class="passage">${out.map(x=>`<p>${esc(x)}</p>`).join("")}</article>`;}
const FOOT=STU?'<p class="footer-note">This is a practice result for learning only. It does not count towards an NZCEL qualification.</p>':'<p class="footer-note">This is a practice result from a preparation platform. It is not an NZQA assessment and is not evidence towards an NZCEL qualification. NZCEL qualifications are awarded through assessment on approved programmes delivered by tertiary providers.</p>';

/* ================= VIEWS ================= */
function vHomeStu(){
  const m=META[LV];
  return `
  <section class="grid" style="gap:8px"><h1>${m.title}</h1>
  <p class="lede">About ${m.cefr} on the CEFR scale. This level is often used for entry to ${m.path.charAt(0).toLowerCase()+m.path.slice(1)}.</p></section>
  <section class="grid" style="gap:10px"><h2>What you need to be able to do</h2>
  <div class="grid g4">${GPO[LV].map(g=>`<div class="card gpo"><h3>${g.skill}</h3><q>${esc(g.text)}</q></div>`).join("")}</div></section>
  <section class="grid" style="gap:10px"><h2>How to practise</h2><div class="grid g3">
   <a class="card modecard" href="#formative" style="text-decoration:none;color:inherit"><h3><span class="modetag mF">1</span>Practice exercises</h3><p class="muted">No time limit. You see the answer and an explanation straight away, so you can learn as you go.</p><span>Start →</span></a>
   <a class="card modecard" href="#mock" style="text-decoration:none;color:inherit"><h3><span class="modetag mM">2</span>Mock exam</h3><p class="muted">Timed, like a real test. Listening audio plays twice only. You see your results after you submit.</p><span>Start →</span></a>
   <a class="card modecard" href="#rubric" style="text-decoration:none;color:inherit"><h3><span class="modetag mR">3</span>Writing &amp; speaking</h3><p class="muted">Write a timed essay or time a presentation or discussion, then check your work against a clear checklist.</p><span>Start →</span></a>
  </div></section>
  <section class="card">
   <div class="row spread"><h2>Your mock exam checklist</h2><button class="btn secondary" id="resetCov">Clear checklist</button></div>
   <p class="muted">For a full set of practice, do each of these tasks. Use a different topic for each task in the same skill, on different days.</p>
   <div>${SLOTS[LV].map(s=>{const c=coverage[s[0]];const st=!c?'<span class="pill none">Not started</span>':c.status==="cnm"?'<span class="pill warn">Done · check length</span>':'<span class="pill ok">Done</span>';
     return `<div class="slot"><span class="muted">${s[1]}</span><div>${esc(SLOT_STU[s[0]]||s[2])}${c?`<div class="muted" style="font-size:12.5px">${esc(c.note)} · ${esc(c.at)}</div>`:""}</div>${st}</div>`}).join("")}</div>
  </section>`;
}
function vHome(){
  if(STU)return vHomeStu();
  const m=META[LV];
  const slots=SLOTS[LV];
  const open=VERIFY.filter(v=>(verifyState[v[0]]||"Open")==="Open").length;
  return `
  <section class="grid" style="gap:8px"><h1>${m.title} <span class="muted" style="font-weight:500">· Ref ${m.ref}</span></h1>
  <p class="lede">Approx. exit level ${m.cefr} (CEFR); IELTS ${m.ielts} is given in the SD only as an additional frame of reference (SD p.8). Pathway: ${m.path}. ${m.us}.</p></section>
  <section class="grid g4">${GPO[LV].map(g=>`<div class="card gpo"><div class="row spread"><h3>${g.skill}</h3><span class="mono muted">${g.id}</span></div><q>${esc(g.text)}</q><span class="mono muted">${g.ref}</span></div>`).join("")}</section>
  <section class="grid g3">
   <a class="card modecard" href="#formative" style="text-decoration:none;color:inherit"><h3><span class="modetag mF">A</span>Formative exercises</h3><p class="muted">Untimed, hints, immediate feedback tagged to focus areas. Shorter texts allowed.</p><span>Open demo →</span></a>
   <a class="card modecard" href="#mock" style="text-decoration:none;color:inherit"><h3><span class="modetag mM">B</span>Timed mock examinations</h3><p class="muted">Platform time limit, audio played exactly twice, no hints or AI, results by focus area with no pass/fail.</p><span>Open demo →</span></a>
   <a class="card modecard" href="#rubric" style="text-decoration:none;color:inherit"><h3><span class="modetag mR">C</span>Rubric-based tasks</h3><p class="muted">Writing and speaking with condition checks and four-band descriptor feedback. No totals.</p><span>Open demo →</span></a>
  </section>
  <section class="card">
   <div class="row spread"><h2>Practice coverage against the SD's evidence structure</h2><button class="btn secondary" id="resetCov">Reset coverage</button></div>
   <p class="muted">Shows which sufficiency-shaped slots the learner has attempted. It never shows achieved, passed or qualified. Try a demo and come back: the slot updates.</p>
   <div>${slots.map(s=>{const c=coverage[s[0]];const st=!c?'<span class="pill none">Not attempted</span>':c.status==="cnm"?'<span class="pill warn">Attempted · condition not met</span>':'<span class="pill ok">Attempted</span>';
     return `<div class="slot"><span class="mono">${s[0]}</span><div><b>${s[1]}</b> · ${esc(s[2])} · <span class="muted">${s[3]}</span> ${badge(s[4])}${c?`<div class="muted" style="font-size:12.5px">${esc(c.note)} · ${esc(c.at)}</div>`:""}</div>${st}</div>`}).join("")}</div>
  </section>
  <section class="card"><div class="row spread"><h2>Open verification items</h2><a href="#verify">Review →</a></div><p><b>${open}</b> of ${VERIFY.length} items still need checking against current NZQA sources.</p></section>`;
}

let mxSkill="All",mxMode="All";
function vAlign(){
  const sk=["Listening","Reading","Writing","Speaking"];
  return `
  <section class="grid" style="gap:8px"><h1>Curriculum alignment matrix · Level ${LV}</h1><p class="lede">Every practice item carries a GPO ID, focus IDs, a Section 5 text type and a length rule. GPO wording below is verbatim from the NZQA Supporting Document (SD).</p></section>
  <section class="card"><h2>Graduate Profile Outcomes (exact wording)</h2><div class="tbl"><table><thead><tr><th>GPO ID</th><th>Skill</th><th>Outcome</th><th>Source</th></tr></thead><tbody>
   ${GPO[LV].map(g=>`<tr><td class="mono">${g.id}</td><td>${g.skill}</td><td>${esc(g.text)}</td><td class="mono">${g.ref}</td></tr>`).join("")}</tbody></table></div>
   ${LV==="5"?'<p class="fb"><b>Level 6 boundary.</b> Level 5 items must not require critical evaluation of listening texts or synthesis and critique of sources in writing (Level 6 GPOs, SD pp.10, 13, 49).</p>':'<p class="fb"><b>Level 3 → 4 shift.</b> Level 3 targets “some specific details”; Level 4 targets “supporting details” (reasons, causes, examples). Specific-detail items appear only as enabling items.</p>'}
  </section>
  <section class="card"><h2>Glossary terms that set the standard</h2><div class="tbl"><table><thead><tr><th>Term</th><th>Definition (SD glossary)</th><th>Source</th></tr></thead><tbody>${GLOSS[LV].map(r=>`<tr><td><b>${r[0]}</b></td><td>${esc(r[1])}</td><td class="mono">${r[2]}</td></tr>`).join("")}</tbody></table></div></section>
  <section class="card"><h2>By skill: focus areas, text types, sufficiency</h2>
   <p class="muted">Focus areas are platform-derived tags, not NZQA Learning Outcomes. Providers write LOs and NZQA approves them (SD p.46).</p>
   <div class="grid g2">${sk.map(s=>{const g=gpoOf(s);const tt=TEXTTYPES[LV][s];return `<div class="card" style="background:var(--bg)">
    <div class="row spread"><h3>${s}</h3><span class="mono muted">${g.id}</span></div>
    <details open><summary>Focus areas</summary><ul style="margin:6px 0 0;padding-left:18px">${FOCUS[LV][s].map(f=>`<li><span class="mono">${g.id}-${f[0]}</span> ${esc(f[1])}</li>`).join("")}</ul></details>
    <details><summary>Section 5 text types</summary><p style="margin-top:6px"><b>Level ${LV} additions:</b> ${esc(tt.add)}</p><p class="muted"><b>Inherited:</b> ${esc(tt.inh)}</p></details>
    <details open><summary>Sufficiency (SD ${LV==="4"?"p.40":"p.43"})</summary><div class="check" style="margin-top:6px">${SUFF[LV][s].map(r=>`${badge(r[1])}<span>${esc(r[0])}</span>`).join("")}</div></details>
   </div>`}).join("")}</div>
  </section>
  <section class="card"><h2>Task and item types</h2>
   <div class="row"><span class="muted">Skill</span><div class="chips" id="fSkill">${["All",...sk].map(x=>`<button class="chip" aria-pressed="${x===mxSkill}" data-v="${x}">${x}</button>`).join("")}</div></div>
   <div class="row"><span class="muted">Mode</span><div class="chips" id="fMode">${[["All","All"],["F","Formative"],["M","Timed mock"],["R","Rubric"]].map(x=>`<button class="chip" aria-pressed="${x[0]===mxMode}" data-v="${x[0]}">${x[1]}</button>`).join("")}</div></div>
   <div class="tbl"><table><thead><tr><th>#</th><th>Task / item type</th><th>Mode</th><th>GPO</th><th>Focus</th><th>Text type</th><th>Length rule</th><th>Modelled on</th></tr></thead><tbody id="mxBody"></tbody></table></div>
   <p class="muted" style="font-size:13px">“Modelled on” means the task follows the SD's stated conditions for that unit standard. It does not replicate the standard's performance criteria (VERIFY-02).</p>
  </section>`;
}
function fillMatrix(){
  const rows=MATRIX[LV].filter(r=>(mxSkill==="All"||r[3]===mxSkill)&&(mxMode==="All"||r[2].includes(mxMode)));
  $("#mxBody").innerHTML=rows.map(r=>`<tr><td class="mono">${r[0]}</td><td>${esc(r[1])}</td><td>${modeTags(r[2])}</td><td class="mono">${gpoOf(r[3]).id}</td><td class="mono">${r[4]}</td><td>${esc(r[5])}</td><td class="num">${esc(r[6])}</td><td>${r[7]?esc(r[7]):'<span class="muted">—</span>'}</td></tr>`).join("")||'<tr><td colspan="8" class="muted">No task types match these filters.</td></tr>';
}

function vBlue(){
  return `
  <section class="grid" style="gap:8px"><h1>Assessment blueprint · Level ${LV}</h1><p class="lede">How the three modes differ, the mock evidence set that mirrors the SD's sufficiency structure, the topic bank, and platform time limits.</p></section>
  <section class="card"><h2>Three modes</h2><div class="tbl"><table><thead><tr><th></th><th><span class="modetag mF">A</span> Formative</th><th><span class="modetag mM">B</span> Timed mock</th><th><span class="modetag mR">C</span> Rubric</th></tr></thead><tbody>${MODES.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("")}</tbody></table></div></section>
  <section class="card"><h2>Mock evidence set (SD ${LV==="4"?"p.40":"p.43"})</h2><p class="muted">The smallest group of tasks whose shape matches the SD's sufficiency guidance. One sitting per slot; different topics within each skill. Completing it shows practice coverage only.</p>
   <div class="tbl"><table><thead><tr><th>Slot</th><th>Skill</th><th>Task</th><th>Minimum</th><th>Type</th></tr></thead><tbody>${SLOTS[LV].map(s=>`<tr><td class="mono">${s[0]}</td><td>${s[1]}</td><td>${esc(s[2])}</td><td class="num">${s[3]}</td><td>${badge(s[4])}</td></tr>`).join("")}</tbody></table></div></section>
  <div class="grid g2">
   <section class="card"><h2>Topic bank (for approval)</h2><div class="tbl"><table><thead><tr><th>ID</th><th>Topic</th><th>Field / emphasis</th></tr></thead><tbody>${TOPICS[LV].map(t=>`<tr><td class="mono">${t[0]}</td><td>${t[1]}</td><td class="muted">${t[2]}</td></tr>`).join("")}</tbody></table></div></section>
   <section class="card"><h2>Platform time limits</h2><p class="muted">The SD gives no time limits. These are platform defaults and are labelled that way in the learner view.</p><div class="tbl"><table><thead><tr><th>Task</th><th>Default</th></tr></thead><tbody>${TIMES[LV].map(t=>`<tr><td>${t[0]}</td><td class="num">${t[1]}</td></tr>`).join("")}</tbody></table></div></section>
  </div>
  <section class="card"><h2>Claims policy</h2><div class="grid g2"><div><h3 style="color:var(--ok)">May say</h3><ul><li>Practice aligned to the NZCEL (Academic) Level ${LV} GPOs as described in the NZQA Supporting Document</li><li>Task modelled on the conditions stated for an EAP unit standard</li><li>Items answered correctly: 14 of 20</li></ul></div><div><h3 style="color:var(--must)">Must not say</h3><ul><li>NZQA-approved, accredited, official, certified</li><li>Pass / fail / merit, percentage cut-offs, IELTS or CEFR equivalents</li><li>You are ready for, or have achieved, NZCEL</li></ul></div></div></section>`;
}

/* ---------- A. Formative ---------- */
function vForm(){
  const d=READ[LV];const words=wc(d.paras.join(" "));
  return `
  <section class="grid" style="gap:8px"><h1>${STU?"Practice exercise · Reading":'<span class="modetag mF">A</span> Formative exercise · Reading'}</h1><p class="lede">${STU?"There's no time limit. Choose an answer to see straight away whether it's correct and why. Each question shows which reading skill it practises.":"Untimed. Feedback appears as soon as you answer, with the focus area each item practises. Formative texts may be shorter than mock texts (SD: other tasks “can be relatively simpler”)."}</p></section>
  <section class="card">
   ${STU?`<div class="row" style="gap:6px 14px"><span><b>Reading</b> · ${esc(topicName(d.topic))}</span>${SAMPLE}</div>`:`<div class="row" style="gap:6px 14px"><span><b>GPO</b> <span class="mono">${gpoOf("Reading").id}</span></span><span><b>Topic</b> ${d.topic}</span><span><b>Text type</b> ${d.textType}</span><span><b>Task</b> ${d.task}</span></div>
   <div class="meter"><span class="pill ok">Formative: no length minimum</span><span class="muted">${words} words (a mock version would need ≥ ${d.min})</span></div>`}
   <article class="passage"><h4>${d.title}</h4>${d.paras.map(p=>`<p>${esc(p)}</p>`).join("")}</article>
   <div id="fq">${d.qs.map((q,i)=>`<div class="q"><fieldset><legend>${i+1}. ${esc(q.q)} ${STU?`<span class="pill none">${SHORT[q.f]||q.f}</span>`:`<span class="mono muted">${gpoOf("Reading").id}-${q.f}</span>`}</legend>
     ${q.o.map((o,j)=>`<label class="opt" id="fo${i}_${j}"><input type="radio" name="f${i}" value="${j}">${esc(o)}</label>`).join("")}</fieldset><div class="fb hidden" id="ff${i}"></div></div>`).join("")}</div>
   <div class="card" style="background:var(--bg)"><h3>${STU?"Your progress by skill area":"Your progress by focus area"}</h3><div class="bars" id="fbars"></div></div>
  </section>`;
}
function bindForm(){
  const d=READ[LV];const ans={};
  const draw=()=>{const by={};d.qs.forEach((q,i)=>{by[q.f]=by[q.f]||[0,0];if(i in ans){by[q.f][1]++;if(ans[i])by[q.f][0]++}});
    $("#fbars").innerHTML=Object.keys(by).map(k=>{const [c,t]=by[k];const lbl=(FOCUS[LV].Reading.find(f=>f[0]===k)||[k,k])[1];return `<div class="barrow"><span title="${esc(lbl)}">${STU?esc(SHORT[k]||k):`<span class="mono">${k}</span> ${esc(lbl.split(" ").slice(0,3).join(" "))}…`}</span><div class="track"><div class="fill" style="width:${t?c/t*100:0}%"></div></div><span class="num">${c}/${t}</span></div>`}).join("")+`<p class="muted" style="font-size:12.5px">${STU?"These counts help you see what to practise next.":"Counts only. No levels or pass marks are derived from them."}</p>`};
  d.qs.forEach((q,i)=>document.querySelectorAll(`input[name=f${i}]`).forEach(r=>r.addEventListener("change",()=>{
    const v=+r.value;ans[i]=v===q.a;
    q.o.forEach((_,j)=>{const el=$(`#fo${i}_${j}`);el.classList.remove("right","wrong");if(j===q.a)el.classList.add("right");else if(j===v)el.classList.add("wrong")});
    const f=$("#ff"+i);f.classList.remove("hidden");f.innerHTML=(v===q.a?"<b>Correct.</b> ":"<b>Not quite.</b> ")+esc(q.e);draw();})));
  draw();
}

/* ---------- B. Mock ---------- */
let mockTab="listening";
function vMock(){
  return `
  <section class="grid" style="gap:8px"><h1>${STU?"Mock exam":'<span class="modetag mM">B</span> Timed mock examination'}</h1><p class="lede">${STU?"Practise under test conditions: there is a time limit and no hints. You may use a dictionary. Listening audio plays twice only. You see your results after you submit.":"Mock conditions: platform time limit, no hints, no AI tools, dictionary allowed (dictionary function only), and listening audio played exactly twice. Results appear only after submission, as counts per focus area."}</p></section>
  <div class="seg" role="tablist"><button aria-pressed="${mockTab==="listening"}" data-mt="listening">Listening</button><button aria-pressed="${mockTab==="reading"}" data-mt="reading">Reading</button></div>
  <section class="card" id="mockBody"></section>`;
}
function bindMock(){
  document.querySelectorAll("[data-mt]").forEach(b=>b.onclick=()=>{mockTab=b.dataset.mt;render()});
  const box=$("#mockBody");
  const isL=mockTab==="listening";
  const d=isL?LISTEN[LV]:READ[LV];
  const g=gpoOf(isL?"Listening":"Reading");
  const words=isL?wc(d.script):wc(d.paras.join(" "));
  const est=Math.round(words/150*60);
  const limit=isL?(LV==="4"?10:15)*60:(LV==="4"?45:75)*60;
  const slot=isL?(LV==="4"?"L4-L2":"L5-L2"):(LV==="4"?"L4-R2":"L5-R2");
  box.innerHTML=`
   ${STU?`<div class="row" style="gap:6px 14px"><span><b>${isL?"Listening":"Reading"}</b> · ${esc(topicName(d.topic))}</span>${SAMPLE}</div>`:`<div class="row" style="gap:6px 14px"><span><b>GPO</b> <span class="mono">${g.id}</span></span><span><b>Topic</b> ${d.topic}</span><span><b>Text type</b> ${d.textType}</span><span><b>Coverage slot</b> <span class="mono">${slot}</span></span></div>
   ${isL?lengthCheck(est,d.min,"rec","s"):lengthCheck(words,d.min,d.minType,"w")}
   ${isL?'<p class="muted" style="font-size:13px">Audio duration is estimated at 150 words per minute from the script. In production, recorded audio is measured exactly.</p>':""}`}
   ${isL&&!STU?`<details class="card" open style="background:var(--bg);border-color:var(--accent)"><summary>Audio script and answer key (teacher only · ${words} words · about ${mmss(est)} spoken)</summary><div style="display:grid;gap:10px;margin-top:10px"><p class="muted" style="font-size:13px">Hidden from students during the mock; shown to them in their results after they submit. Topic: ${esc(d.topic)} · ${esc(d.textType)}.</p>${scriptHTML(d.script)}<div><b>Answer key</b><ol style="margin:6px 0 0;padding-left:20px">${d.qs.map(q=>`<li>${esc(q.o[q.a])} <span class="muted" style="font-size:12.5px">(${SHORT[q.f]||q.f})</span></li>`).join("")}</ol></div></div></details>`:""}
   <div class="card" style="background:var(--bg)" id="pre"><h3>Before you start</h3>
    <div class="check"><span class="pill must">${STU?"Rule":"Must"}</span><span>${isL?"The audio plays exactly twice (first play + one repeat). You can't pause or replay it.":"Answer independently. Feedback appears only after you submit."}</span>
    <span class="pill perm">${STU?"Allowed":"Permitted"}</span><span>A monolingual or bilingual dictionary${STU?" (a dictionary only, not a translation app)":" (dictionary function only)"}.</span>
    <span class="pill none">Time</span><span>${isL?"Two plays, then ":""}${mmss(limit)} to finish your answers${STU?"":" (platform default; the SD sets no time limit)"}.</span>
    <span class="pill none">${STU?"Not allowed":"Disabled"}</span><span>${STU?"Hints, the transcript, translation or AI tools.":"Hints, transcript, AI tools."}</span></div>
    <div><button class="btn" id="startMock">${STU?"Start":"Start mock"}</button></div></div>
   <div id="live" class="hidden" style="display:grid;gap:12px">
    <div class="row spread"><div class="row"><span class="muted">Time remaining</span><span class="timer" id="clock">${mmss(limit)}</span></div>${isL?'<div class="row"><button class="btn" id="play">Play audio</button><span id="plays" class="mono">Plays used: 0 of 2</span></div>':""}</div>
    ${isL?`<p class="muted" id="ttsnote" style="font-size:13px">${STU?"Turn your sound on. The audio is read by your browser's computer voice.":"Demo audio uses your browser's text-to-speech voice."}</p><label for="notes"><b>Your notes</b> <span class="muted">${STU?"(write notes while you listen; you can change your answers using your notes)":"(kept with your answers; you may amend answers from notes)"}</span></label><textarea id="notes" style="min-height:110px"></textarea>`:`<article class="passage"><h4>${d.title}</h4>${d.paras.map(p=>`<p>${esc(p)}</p>`).join("")}</article>`}
    <div>${d.qs.map((q,i)=>`<div class="q"><fieldset><legend>${i+1}. ${esc(q.q)}</legend>${q.o.map((o,j)=>`<label class="opt" id="mo${i}_${j}"><input type="radio" name="m${i}" value="${j}">${esc(o)}</label>`).join("")}</fieldset><div class="fb hidden" id="mf${i}"></div></div>`).join("")}</div>
    <div><button class="btn" id="submitMock">Submit answers</button></div>
   </div>
   <div id="result" class="hidden"></div>`;
  let plays=0,left=limit,done=false;
  const submit=(auto)=>{if(done)return;done=true;clearTimers();
    const by={};let c=0;
    d.qs.forEach((q,i)=>{const s=document.querySelector(`input[name=m${i}]:checked`);const v=s?+s.value:-1;by[q.f]=by[q.f]||[0,0];by[q.f][1]++;if(v===q.a){by[q.f][0]++;c++}
      document.querySelectorAll(`input[name=m${i}]`).forEach(x=>x.disabled=true);
      q.o.forEach((_,j)=>{const el=$(`#mo${i}_${j}`);if(j===q.a)el.classList.add("right");else if(j===v)el.classList.add("wrong")});
      const f=$("#mf"+i);f.classList.remove("hidden");f.innerHTML=(STU?`<b>${SHORT[q.f]||q.f}</b> · `:`<span class="mono">${g.id}-${q.f}</span> · `)+esc(q.e)});
    $("#submitMock").disabled=true;if($("#play"))$("#play").disabled=true;
    const meets=isL?est>=d.min:words>=d.min;
    setCov(slot,STU?"att":(meets?"att":"cnm"),STU?`${isL?"Listening":"Reading"} sample · ${c} of ${d.qs.length} correct`:(isL?"Listening":"Reading")+" mock demo"+(meets?"":` · ${isL?"audio":"text"} below SD length`));
    const r=$("#result");r.classList.remove("hidden");r.className="card report";
    r.innerHTML=`<div class="row spread"><h2>${STU?"Your results":"Mock report"}</h2>${auto?'<span class="pill warn">Submitted automatically at time limit</span>':""}</div>
     <p>Items answered correctly: <b>${c} of ${d.qs.length}</b></p>
     <div class="bars">${Object.keys(by).map(k=>{const [a,t]=by[k];const lbl=(FOCUS[LV][isL?"Listening":"Reading"].find(f=>f[0]===k)||[k,k])[1];return `<div class="barrow"><span>${STU?esc(SHORT[k]||k):`<span class="mono">${k}</span> ${esc(lbl.split(" ").slice(0,3).join(" "))}…`}</span><div class="track"><div class="fill" style="width:${a/t*100}%"></div></div><span class="num">${a}/${t}</span></div>`}).join("")}</div>
     ${STU?`<p class="muted">Read each explanation above to see why the answer is correct. Your checklist on the Home page has been updated.</p>`:`<h3>Condition checks</h3><div class="check">${meets?'<span class="pill ok">Met</span>':'<span class="pill warn">Not met</span>'}<span>${isL?"Audio length":"Text length"} against the SD guidance for Level ${LV}</span>${isL?`<span class="pill ok">Met</span><span>Plays used: ${plays} of 2</span>`:""}<span class="pill ok">Met</span><span>No hints or AI tools available during the attempt</span></div>
     <p class="muted">Coverage slot <span class="mono">${slot}</span> updated on the Overview page. A retake would use a new form on a different topic.</p>`}${isL?`<details${STU?" open":""}><summary>${STU?"Read the audio script":"Audio script"}</summary><div style="margin-top:10px">${scriptHTML(d.script)}</div></details>`:""}${FOOT}`;
    r.scrollIntoView({behavior:"smooth",block:"start"});
  };
  $("#startMock").onclick=()=>{$("#pre").classList.add("hidden");const lv=$("#live");lv.classList.remove("hidden");
    timers.push(setInterval(()=>{left--;$("#clock").textContent=mmss(left);if(left<=0)submit(true)},1000));
    if(isL){const pb=$("#play");const hasTTS="speechSynthesis" in window;
      if(!hasTTS)$("#ttsnote").textContent="This browser has no text-to-speech. The play counter still demonstrates the two-play rule.";
      pb.onclick=()=>{if(plays>=2)return;plays++;$("#plays").textContent=`Plays used: ${plays} of 2`;pb.disabled=true;pb.textContent=plays===1?"Playing (1st)…":"Playing (repeat)…";
        const fin=()=>{pb.textContent=plays>=2?"No plays left":"Play repeat";pb.disabled=plays>=2};
        if(hasTTS){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(d.script);u.lang="en-NZ";u.rate=.95;u.onend=fin;u.onerror=fin;speechSynthesis.speak(u)}catch(e){fin()}}else setTimeout(fin,1500)}}};
  $("#submitMock").onclick=()=>submit(false);
}

/* ---------- C. Rubric ---------- */
let rubTab="writing", spkIdx=0;
function rubricTable(key,prefix){
  return `<div class="tbl rub"><table><thead><tr><th>${STU?"Checklist point":"Criterion"}</th>${BANDS.map((b,i)=>`<th>${i+1} · ${b}</th>`).join("")}</tr></thead><tbody>
   ${RUB[key].map((c,ci)=>`<tr><td class="crit">${esc(critName(c[0]))}<br><input type="text" id="${prefix}c${ci}" placeholder="${STU?"Example from the work":"Evidence / comment"}" style="width:100%;margin-top:6px;font-weight:400"></td>${c[1].map((t,bi)=>`<td><label><input type="radio" name="${prefix}r${ci}" value="${bi}">${esc(t)}</label></td>`).join("")}</tr>`).join("")}
  </tbody></table></div>`;
}
function vRub(){
  return `
  <section class="grid" style="gap:8px"><h1>${STU?"Writing &amp; speaking":'<span class="modetag mR">C</span> Rubric-based assessment practice'}</h1><p class="lede">${STU?"Do the task, then use the checklist to rate your work (or ask a classmate or your teacher). For each point, choose the description that fits best and write an example from your work.":"Condition checks are recorded first and reported separately. Each criterion gets one of four descriptor bands with an evidence comment. Bands are never added up or turned into a pass."}</p></section>
  <div class="seg"><button aria-pressed="${rubTab==="writing"}" data-rt="writing">Writing</button><button aria-pressed="${rubTab==="speaking"}" data-rt="speaking">Speaking</button></div>
  <section class="card" id="rubBody"></section>`;
}
function report(key,prefix,conds,rater){
  const rows=RUB[key].map((c,ci)=>{const s=document.querySelector(`input[name=${prefix}r${ci}]:checked`);const cm=$("#"+prefix+"c"+ci).value.trim();
    return `<tr><td>${esc(critName(c[0]))}</td><td>${s?`<span class="pill ${+s.value===3?"ok":+s.value===2?"rec":"warn"}">${+s.value+1} · ${BANDS[+s.value]}</span>`:'<span class="pill none">Not rated</span>'}</td><td>${cm?esc(cm):'<span class="muted">No comment</span>'}</td></tr>`}).join("");
  return `<div class="row spread"><h2>${STU?"Your feedback":"Practice report"}</h2><span class="pill none">Rated by: ${esc(rater)}${rater==="automated"?" · Automated formative feedback":""}</span></div>
   <h3>${STU?"Task checks":"Condition checks"}</h3><div class="check">${conds.map(c=>`${c[0]?`<span class="pill ok">${STU?"Yes":"Met"}</span>`:`<span class="pill warn">${STU?"Not yet":"Not met"}</span>`}<span>${esc(c[1])}</span>`).join("")}</div>
   <h3>${STU?"Checklist":"Criterion feedback"}</h3><div class="tbl"><table><thead><tr><th>${STU?"Point":"Criterion"}</th><th>${STU?"Rating":"Band"}</th><th>${STU?"Example":"Evidence / comment"}</th></tr></thead><tbody>${rows}</tbody></table></div>
   <p class="muted">${STU?"Look at the points rated lowest: those are what to practise next.":"No total, average or pass/fail is calculated."}</p>${FOOT}`;
}
function bindRub(){
  document.querySelectorAll("[data-rt]").forEach(b=>b.onclick=()=>{rubTab=b.dataset.rt;render()});
  const box=$("#rubBody");
  if(rubTab==="writing"){
    const w=WRITE[LV];const g=gpoOf("Writing");
    box.innerHTML=`${STU?`<div class="row" style="gap:6px 14px"><span><b>Timed essay</b> · ${esc(topicName(w.topic))}</span></div>`:`<div class="row" style="gap:6px 14px"><span><b>GPO</b> <span class="mono">${g.id}</span></span><span><b>Task</b> ${w.task}</span><span><b>Topic</b> ${w.topic}</span><span><b>Coverage slot</b> <span class="mono">${w.slot}</span></span></div>`}
     <div class="card" style="background:var(--bg)"><h3>Prompt</h3><p style="max-width:72ch">${esc(w.prompt)}</p><p><b>Write at least ${w.min} words.</b> ${STU?"":badge(w.minType)}</p>
      <div class="check"><span class="pill must">Test conditions</span><span>${STU?"Timed. You can't paste text, there's no spell-check, and AI tools are not allowed. You may use a dictionary. You can't edit your essay after you submit it.":"Timed, locked editor: paste is disabled, no spell-check, no AI tools. Dictionary allowed. No resubmission; a new attempt uses a new prompt (SD p.24)."}</span><span class="pill none">Time</span><span>${w.mins} minutes${STU?"":" (platform default)"}.</span></div>
      <div><button class="btn" id="wStart">Start timed writing</button></div></div>
     <div id="wLive" class="hidden" style="display:grid;gap:10px">
      <div class="row spread"><div class="row"><span class="muted">Time remaining</span><span class="timer" id="wClock">${mmss(w.mins*60)}</span></div><span class="mono" id="wCount">0 words</span></div>
      <textarea id="wText" spellcheck="false" autocomplete="off" aria-label="Your essay"></textarea>
      <p class="muted" id="pasteMsg" style="font-size:13px">Paste is disabled under test conditions.</p>
      <div class="row"><button class="btn" id="wSubmit">Submit essay</button>${STU?"":'<button class="btn secondary" id="wSample">Fill with demo text (reviewer shortcut)</button>'}</div>
     </div>
     <div id="wRate" class="hidden" style="display:grid;gap:12px"><h2>${STU?"Check your essay":"Rate against the rubric"}</h2>
      <div class="row"><label for="wRater"><b>${STU?"Who is rating?":"Rater"}</b></label><select id="wRater"><option>self</option><option>peer</option><option>teacher</option>${STU?"":"<option>automated</option>"}</select></div>
      ${rubricTable(w.crit,"w")}<div><button class="btn" id="wReport">${STU?"See my feedback":"Generate practice report"}</button></div></div>
     <div id="wOut" class="hidden card report"></div>`;
    let left=w.mins*60,submitted=false,words=0;
    const ta=$("#wText");
    ta.addEventListener("paste",e=>{e.preventDefault();$("#pasteMsg").innerHTML="<b>Paste blocked.</b> Under test conditions, type your own work."});
    ta.addEventListener("drop",e=>e.preventDefault());
    ta.addEventListener("input",()=>{$("#wCount").textContent=wc(ta.value)+" words"});
    if($("#wSample"))$("#wSample").onclick=()=>{ta.value="Recorded lectures give first-year students flexibility, because they can watch at a convenient time and replay difficult sections. However, attending in person helps students build routines and ask questions directly. In my view, a combination is best, provided that first-year students attend most sessions while they adjust to university study.";ta.dispatchEvent(new Event("input"))};
    const sub=()=>{if(submitted)return;submitted=true;clearTimers();words=wc(ta.value);ta.readOnly=true;$("#wSubmit").disabled=true;if($("#wSample"))$("#wSample").disabled=true;$("#wRate").classList.remove("hidden");
      setCov(w.slot,words>=w.min?"att":"cnm",`Timed writing · ${words} words`+(words>=w.min?"":` (below ${w.min})`));
      $("#wRate").insertAdjacentHTML("afterbegin",learnerCheck(words,w.min,"w","Your essay"))};
    $("#wStart").onclick=()=>{$("#wStart").closest(".card").querySelector("div:last-child").classList.add("hidden");$("#wLive").classList.remove("hidden");ta.focus();
      timers.push(setInterval(()=>{left--;$("#wClock").textContent=mmss(left);if(left<=0)sub()},1000))};
    $("#wSubmit").onclick=sub;
    $("#wReport").onclick=()=>{const o=$("#wOut");o.classList.remove("hidden");o.innerHTML=report(w.crit,"w",(STU?[[words>=w.min,`${words} words (aim: at least ${w.min})`],[true,"Written under test conditions"]]:[[words>=w.min,`Word count ${words} against ${w.minType==="must"?"required":"recommended"} minimum ${w.min}`],[true,"Completed under platform test conditions (timed, paste disabled)"],[true,"Learner declaration: own work, no AI tools"]]),$("#wRater").value);o.scrollIntoView({behavior:"smooth"})};
  } else {
    const list=SPEAK[LV];const t=list[spkIdx]||list[0];const g=gpoOf("Speaking");
    box.innerHTML=`<div class="seg">${list.map((x,i)=>`<button aria-pressed="${i===spkIdx}" data-si="${i}">${x.interaction?(STU?"Discussion / debate":"Interaction"):"Presentation"}</button>`).join("")}</div>
     ${STU?`<div class="row" style="gap:6px 14px"><span><b>${t.interaction?"Discussion / debate":"Presentation"}</b> · ${esc(topicName(t.topic))}</span></div>`:`<div class="row" style="gap:6px 14px"><span><b>GPO</b> <span class="mono">${g.id}</span></span><span><b>Task</b> ${t.task}</span><span><b>Topic</b> ${t.topic}</span><span><b>Coverage slot</b> <span class="mono">${t.slot}</span></span></div>`}
     <div class="card" style="background:var(--bg)"><h3>${t.name}</h3><p style="max-width:72ch">${esc(t.brief)}</p>
      ${STU?`<div class="check"><span class="pill none">Time</span><span>Speak for ${t.minLabel}.</span><span class="pill must">Rule</span><span>${t.interaction?"No scripts. You may have a role card, but don't read from notes.":"Cue cards with key words only. Don't read from a script. Slides should have very little text."}</span>${t.interaction?'<span class="pill must">Rule</span><span>Do this with a classmate, a group or your teacher.</span>':""}</div>`
      :`<div class="check"><span class="pill ${t.minType}">${t.minType==="must"?"Must":"Recommended"}</span><span>Duration ${t.minLabel}.</span><span class="pill must">Must</span><span>Minimal written support: ${t.interaction?"no text that could act as a script":"cue cards with key words only; visuals with minimal text"}.</span>${t.interaction?'<span class="pill must">Must</span><span>A live partner or group is needed. A recorded-prompt simulation is formative only and does not fill this slot.</span>':""}</div>`}</div>
     <div class="card"><h3>${STU?"Record and time yourself":"Speaking timer and recording"}</h3>
      <p class="muted" style="font-size:13px">Press Start to begin the timer and record from your microphone (your browser will ask permission). The recording stays on this device. If recording isn't available, the timer still works and you can attach a recording from your phone.</p>
      <div class="row"><span class="timer" id="sClock">00:00</span><button class="btn" id="sGo">Start</button><button class="btn secondary" id="sStop" disabled>Stop</button>${STU?"":`<button class="btn secondary" id="sSkip">Simulate ${mmss(t.minS)} (reviewer shortcut)</button>`}<span class="muted" id="sRecMsg" style="font-size:13px"></span></div>
      <div class="row"><label for="sFile"><b>Attach a recording</b> <span class="muted">(optional)</span></label><input type="file" id="sFile" accept="audio/*,video/*"></div><div id="sPlayer"></div>
      <div id="sCheck"></div>
      ${t.interaction?`<div class="row"><input type="checkbox" id="sLive"><label for="sLive">${STU?"I did this with a partner, group or teacher":"Interaction took place with a live partner or group"}</label></div>`:""}
     </div>
     <div style="display:grid;gap:12px"><h2>${STU?"Check your speaking":"Rate against the rubric"}</h2><div class="row"><label for="sRater"><b>${STU?"Who is rating?":"Rater"}</b></label><select id="sRater"><option>self</option><option>peer</option><option>teacher</option>${STU?"":"<option>automated</option>"}</select></div>
      ${rubricTable(t.crit,"s")}<div><button class="btn" id="sReport">${STU?"See my feedback":"Generate practice report"}</button></div></div>
     <div id="sOut" class="hidden card report"></div>`;
    document.querySelectorAll("[data-si]").forEach(b=>b.onclick=()=>{spkIdx=+b.dataset.si;render()});
    let el=0,rec=null,stream=null,chunks=[];
    const show=()=>{$("#sClock").textContent=mmss(el);$("#sCheck").innerHTML=el?learnerCheck(el,t.minS,"s",STU?"You spoke for":"Duration")+(t.maxS&&el>t.maxS?`<p class="muted" style="font-size:13px">${STU?"That's longer than the suggested":"Over the recommended"} maximum of ${mmss(t.maxS)}.</p>`:""):""};
    const stopRec=()=>{try{if(rec&&rec.state!=="inactive")rec.stop()}catch(e){}};
    $("#sGo").onclick=async()=>{clearTimers();el=0;show();$("#sGo").disabled=true;$("#sStop").disabled=false;
      timers.push(setInterval(()=>{el++;show()},1000));
      try{stream=await navigator.mediaDevices.getUserMedia({audio:true});chunks=[];rec=new MediaRecorder(stream);
        rec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
        rec.onstop=()=>{const blob=new Blob(chunks,{type:rec.mimeType||"audio/webm"});$("#sPlayer").innerHTML=`<p style="font-size:13px"><b>Your recording</b> (listen back and use it to rate yourself)</p><audio controls src="${URL.createObjectURL(blob)}" style="width:100%"></audio>`;stream.getTracks().forEach(x=>x.stop())};
        rec.start();$("#sRecMsg").textContent="● Recording";}
      catch(e){$("#sRecMsg").textContent="Recording isn't available here. The timer is running.";}};
    $("#sStop").onclick=()=>{clearTimers();stopRec();$("#sGo").disabled=false;$("#sStop").disabled=true;$("#sRecMsg").textContent="";show()};
    if($("#sSkip"))$("#sSkip").onclick=()=>{clearTimers();stopRec();el=t.minS;show();$("#sGo").disabled=false;$("#sStop").disabled=true};
    $("#sFile").onchange=e=>{const f=e.target.files[0];if(!f)return;const u=URL.createObjectURL(f);$("#sPlayer").innerHTML=`<audio controls src="${u}" style="width:100%"></audio>`;const a=$("#sPlayer audio");a.onloadedmetadata=()=>{if(isFinite(a.duration)){el=Math.round(a.duration);show()}}};
    $("#sReport").onclick=()=>{const live=t.interaction?$("#sLive").checked:true;const okLen=el>=t.minS;
      setCov(t.slot,okLen&&live?"att":"cnm",`${t.interaction?(STU?"Discussion":"Interaction"):"Presentation"} · ${mmss(el)}`+(okLen?"":STU?" (shorter than the aim)":" (below minimum)")+(live?"":STU?" (no partner)":" (no live partner)"));
      const conds=STU?[[okLen,`You spoke for ${mmss(el)} (aim: ${t.minLabel})`],[true,"No script used"]]:[[okLen,`Duration ${mmss(el)} against ${t.minType==="must"?"required":"recommended"} ${t.minLabel}`],[true,"Written support limited to cue cards / non-script materials (learner declaration)"]];
      if(t.interaction)conds.push([live,STU?"Done with a partner, group or teacher":"Live partner or group present"]);
      const o=$("#sOut");o.classList.remove("hidden");o.innerHTML=report(t.crit,"s",conds,$("#sRater").value);o.scrollIntoView({behavior:"smooth"})};
  }
}

/* ---------- Verification ---------- */
function vVer(){
  const opts=["Open","Verified – no change","Verified – change needed"];
  return `<section class="grid" style="gap:8px"><h1>Verification log</h1><p class="lede">Items to check against current NZQA sources before content is finalised. Your status choices are saved in this browser only.</p></section>
  <section class="card"><div class="tbl"><table><thead><tr><th>ID</th><th>Level</th><th>What to verify</th><th>Why</th><th>Status</th></tr></thead><tbody>
   ${VERIFY.map(v=>`<tr><td class="mono">${v[0]}</td><td>${v[1]}</td><td>${esc(v[2])}</td><td class="muted">${esc(v[3])}</td><td><select data-ver="${v[0]}" aria-label="Status for ${v[0]}">${opts.map(o=>`<option${(verifyState[v[0]]||"Open")===o?" selected":""}>${o}</option>`).join("")}</select></td></tr>`).join("")}
  </tbody></table></div></section>
  <section class="card"><h2>Confirmed from the source document</h2><ul style="margin:0;padding-left:18px">
   <li>No pass marks, cut scores, percentages or grade boundaries for NZCEL appear anywhere in the SD.</li>
   <li>All 8 GPOs and every unit standard title quoted on this platform match the SD text word for word.</li>
   <li>The repository was empty at audit (23 Nov 2026), so there were no earlier questions to audit.</li></ul></section>`;
}

/* ================= ROUTER ================= */
function render(){
  clearTimers();
  const v=(location.hash||"#home").slice(1);const view=VIEWS.some(x=>x[0]===v)?v:"home";
  $("#nav").innerHTML=VIEWS.map(x=>`<a href="#${x[0]}"${x[0]===view?' aria-current="page"':""}>${x[1]}</a>`).join("");
  ["4","5"].forEach(l=>$("#lv"+l).setAttribute("aria-pressed",String(LV===l)));
  const app=$("#app");
  app.innerHTML={home:vHome,alignment:vAlign,blueprint:vBlue,formative:vForm,mock:vMock,rubric:vRub,verify:vVer}[view]();
  if(view==="alignment"){fillMatrix();
    document.querySelectorAll("#fSkill .chip").forEach(b=>b.onclick=()=>{mxSkill=b.dataset.v;document.querySelectorAll("#fSkill .chip").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));fillMatrix()});
    document.querySelectorAll("#fMode .chip").forEach(b=>b.onclick=()=>{mxMode=b.dataset.v;document.querySelectorAll("#fMode .chip").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));fillMatrix()});}
  if(view==="formative")bindForm();
  if(view==="mock")bindMock();
  if(view==="rubric")bindRub();
  if(view==="home")$("#resetCov").onclick=()=>{coverage={};store.set(COVK,coverage);render()};
  if(view==="verify")document.querySelectorAll("[data-ver]").forEach(s=>s.onchange=()=>{verifyState[s.dataset.ver]=s.value;store.set("ver",verifyState)});
}
document.querySelectorAll("[data-lv]").forEach(b=>b.onclick=()=>{LV=b.dataset.lv;store.set("lv",LV);spkIdx=0;render()});
window.addEventListener("hashchange",()=>{render();window.scrollTo(0,0)});
render();
