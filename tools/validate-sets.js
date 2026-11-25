#!/usr/bin/env node
/*
 * Validates practice sets in data/sets/ against the alignment rules in docs/nzqa-level4-alignment.md §8,
 * and (with --doc) writes the teacher's edition to docs/level4-practice-set.md.
 * Usage: node tools/validate-sets.js [--doc]
 */
const fs = require("fs"), path = require("path");
global.window = {};
const dir = path.join(__dirname, "..", "data", "sets");
fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort().forEach(f => require(path.join(dir, f)));
const SETS = window.NZCEL_SETS;

const FOCUS = { "4": { listening: ["MI", "SD", "REL", "NOTE"], reading: ["MI", "SD", "ORG", "FIND", "NOTE"] } };
const GPO = { "4": { listening: "L4A-LIS", reading: "L4A-RDG", writing: "L4A-WRI", speaking: "L4A-SPK" } };
const SLOTS = { "4": { listening: ["L4-L1", "L4-L2"], reading: ["L4-R1", "L4-R2"], writing: ["L4-W1", "L4-W2", "L4-W3"], speaking: ["L4-S1", "L4-S2"] } };
const WPM = 150;
const wc = s => (s.match(/\S+/g) || []).length;
const spoken = d => d.speakers ? d.script.split(/\n\n/).map(p => { const m = p.match(/^([^:]{1,40}):\s+/); return m && d.speakers.includes(m[1]) ? p.slice(m[0].length) : p; }).join("\n\n") : d.script;
const body = d => d.paras.filter(p => !p.startsWith("## "));

let errors = [], rows = [];
const err = (id, m) => errors.push(`${id}: ${m}`);

for (const [lv, set] of Object.entries(SETS)) {
  const ids = new Set();
  for (const skill of ["listening", "reading", "writing", "speaking"]) {
    const topics = {};
    for (const t of set[skill] || []) {
      if (ids.has(t.id)) err(t.id, "duplicate id"); ids.add(t.id);
      if (!SLOTS[lv][skill].includes(t.slot)) err(t.id, `slot ${t.slot} not valid for ${skill}`);
      if (!t.topic || !/^T\d{3} /.test(t.topic)) err(t.id, "topic must start with a topic ID");
      const tid = t.topic.slice(0, 4);
      if (topics[tid]) err(t.id, `topic ${tid} already used by ${topics[tid]} in ${skill} (sufficiency: different topics)`); topics[tid] = t.id;
      let measure = "";
      if (skill === "listening") {
        const w = wc(spoken(t)), sec = Math.round(w / WPM * 60);
        if (sec < t.min) err(t.id, `estimated ${sec}s < minimum ${t.min}s`);
        measure = `${w} words ≈ ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")} (min ${t.min / 60}:00)`;
      }
      if (skill === "reading") {
        const w = wc(body(t).join(" "));
        if (w < t.min) err(t.id, `${w} words < minimum ${t.min}`);
        measure = `${w} words (min ${t.min})`;
        t.qs.forEach((q, i) => { if (q.ref && /Paragraph/.test(q.ref)) { (q.ref.match(/\d+/g) || []).forEach(n => { if (+n > body(t).length) err(t.id, `item ${i + 1} refers to paragraph ${n}, text has ${body(t).length}`); }); } });
      }
      if (skill === "listening" || skill === "reading") {
        (t.qs || []).forEach((q, i) => {
          if (!FOCUS[lv][skill].includes(q.f)) err(t.id, `item ${i + 1} focus ${q.f} not valid for ${skill}`);
          if (q.type === "mcq" && !(Array.isArray(q.o) && q.a >= 0 && q.a < q.o.length)) err(t.id, `item ${i + 1} bad options/key`);
          if (q.type === "short" && !(Array.isArray(q.accept) && q.accept.length && q.model)) err(t.id, `item ${i + 1} short answer needs accept + model`);
          if (!q.e) err(t.id, `item ${i + 1} missing explanation`);
          if (!q.ref) err(t.id, `item ${i + 1} missing text reference`);
        });
        measure += ` · ${t.qs.length} items`;
      }
      if (skill === "writing") {
        if (!t.min) err(t.id, "writing task must state a minimum word count");
        if (t.slot === "L4-W1" && !(t.test && t.min >= 500)) err(t.id, "22749-style task needs test conditions and ≥ 500 words");
        if (t.slot === "L4-W2" && !(t.min >= 800 && t.sources)) err(t.id, "22750-style task needs ≥ 800 words and a source pack");
        measure = `≥ ${t.min} words${t.test ? ", test conditions, " + t.mins + " min" : ", crafted"}`;
      }
      if (skill === "speaking") {
        if (!t.minS) err(t.id, "speaking task must state a minimum duration");
        if (t.slot === "L4-S1" && t.minS < 480) err(t.id, "22891-style presentation needs ≥ 8 minutes");
        measure = `${t.minLabel}${t.interaction ? ", interaction" : ", presentation"}`;
      }
      rows.push([t.slot, t.id, skill, GPO[lv][skill], t.topic, t.textType || (t.interaction ? "academic discussion" : "presentation"), measure, t.task]);
    }
  }
  const sp = set.speaking || [];
  if (!sp.some(t => t.interaction)) err("L" + lv, "speaking: at least one task must be an interaction");
}

// Teacher schedule: every task referenced must exist; one mock/rubric task per skill per session.
const schedFile = path.join(dir, "teacher", "l4-schedule.js");
if (fs.existsSync(schedFile)) {
  require(schedFile);
  const allIds = {}; for (const [lv, set] of Object.entries(SETS)) for (const sk of Object.keys(set)) for (const t of set[sk]) allIds[t.id] = sk;
  const seen = new Set();
  for (const w of window.NZCEL_SCHEDULE["4"].weeks) for (const se of w.sessions) {
    const skills = [];
    for (const it of se.items) { if (!it.task) continue; if (!allIds[it.task]) err("schedule", `${se.day}: unknown task ${it.task}`); if (it.kind !== "prep") { skills.push(allIds[it.task]); seen.add(it.task); } }
    if (new Set(skills).size !== skills.length) err("schedule", `${se.day}: two tasks for the same skill in one session`);
  }
  Object.keys(allIds).filter(id => id.startsWith("L4-") && !seen.has(id)).forEach(id => err("schedule", `task ${id} is not scheduled`));
}
rows.forEach(r => console.log(r.slice(0, 2).join("  ").padEnd(26), r[6]));
if (errors.length) { console.error("\nERRORS:\n" + errors.join("\n")); process.exit(1); }
console.log("\nAll practice-set checks passed.");

if (process.argv.includes("--doc")) {
  const L = SETS["4"], out = [];
  const esc = s => String(s).replace(/\|/g, "\\|");
  out.push("# NZCEL (Academic) Level 4 — Full-Length Practice Set 1 (Teacher's Edition)", "",
    "> Generated from `data/sets/*.js` by `node tools/validate-sets.js --doc`. Do not edit by hand.",
    "> Preparation material only. Not an NZQA assessment, and not evidence towards an NZCEL qualification.",
    "> Texts are original. People, studies, places and data described as fictional or hypothetical are invented for teaching.", "",
    "## Alignment matrix", "", "| Slot | Task ID | GPO | Topic | Text type | Length check | Task |", "|---|---|---|---|---|---|---|");
  rows.forEach(r => out.push(`| ${r[0]} | ${r[1]} | ${r[3]} | ${esc(r[4])} | ${esc(r[5])} | ${esc(r[6])} | ${esc(r[7])} |`));
  out.push("", "Within each skill, every task uses a different topic, as the Supporting Document's sufficiency guidance requires (SD p.40).", "");
  const items = (t) => { out.push("", "### Questions and answer key", ""); t.qs.forEach((q, i) => { out.push(`${i + 1}. **${q.q}** _(${q.f}; ${q.ref})_`); if (q.type === "mcq") q.o.forEach((o, j) => out.push(`   - ${j === q.a ? "**" + o + "** ✓" : o}`)); else out.push(`   - Model answer: **${q.model}**. Accepts answers containing: ${q.accept.map(a => a.join(" + ")).join(" / ")}`); out.push(`   - _${q.e}_`); }); };
  const verify = t => { if (t.verify && t.verify.length) out.push("", "> **Check before release:** " + t.verify.join(" ")); };
  out.push("## Listening");
  L.listening.forEach(t => { out.push("", `## ${t.slot} · ${t.name}`, "", `${t.task} · ${t.topic} · ${t.textType}`, "", `_${t.intro}_`); verify(t); out.push("", "### Audio script", ""); t.script.split(/\n\n/).forEach(p => out.push(p, "")); items(t); });
  out.push("", "## Reading");
  L.reading.forEach(t => { out.push("", `## ${t.slot} · ${t.name}`, "", `${t.task} · ${t.topic} · ${t.textType}`); verify(t); out.push("", `### ${t.title}`, ""); let n = 0; t.paras.forEach(p => out.push(p.startsWith("## ") ? "#### " + p.slice(3) : `[${++n}] ${p}`, "")); items(t); });
  out.push("", "## Writing");
  L.writing.forEach(t => { out.push("", `## ${t.slot} · ${t.name}`, "", `${t.task} · ${t.topic} · ≥ ${t.min} words${t.test ? ` · test conditions, ${t.mins} minutes` : " · crafted (no time limit)"} · rubric ${t.crit}`, "", `**Prompt.** ${t.prompt}`, ""); (t.tips || []).forEach(x => out.push(`- ${x}`)); if (t.sources) t.sources.forEach(s => { out.push("", `### ${s.label}: ${s.title}`, `_${s.cite}_`, ""); s.text.split(/\n\n/).forEach(p => out.push(p, "")); }); if (t.sourceRef) out.push("", `Source text: ${t.sourceRef} (see Reading).`); out.push("", `**Teacher note.** ${t.teacher}`); });
  out.push("", "## Speaking");
  L.speaking.forEach(t => { out.push("", `## ${t.slot} · ${t.name}`, "", `${t.task} · ${t.topic} · ${t.minLabel} · rubric ${t.crit}`, "", `**Brief.** ${t.brief}`, ""); if (t.prep) { out.push("**Suggested structure**", ""); t.prep.forEach(x => out.push(`1. ${x}`)); out.push(""); } if (t.roles) { out.push("**Role cards**", ""); t.roles.forEach(r => out.push(`- **${r.name}:** ${r.position}`)); out.push(""); } out.push(`**${t.interaction ? "Teacher prompts" : "Question bank for Q&A"}**`, ""); t.teacherQs.forEach(x => out.push(`- ${x}`)); out.push("", `**Teacher note.** ${t.teacher}`); });
  const sc = window.NZCEL_SCHEDULE && window.NZCEL_SCHEDULE["4"];
  if (sc) { out.push("", "## Suggested study schedule (teacher only)", "", sc.note, ""); sc.weeks.forEach(w => { out.push(`### Week ${w.week}: ${w.focus}`, ""); w.sessions.forEach(se => se.items.forEach(it => out.push(`- **${se.day}** · ${it.kind}: ${it.label}`))); out.push(""); }); }
  fs.writeFileSync(path.join(__dirname, "..", "docs", "level4-practice-set.md"), out.join("\n") + "\n");
  console.log("Wrote docs/level4-practice-set.md");
}
