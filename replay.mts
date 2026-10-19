import fs from "node:fs";
import { translateRequest } from "./open-sse/translator/index.ts";

const ART = "/Users/patrykkopycinski/.opencode-kanban/boards/fleet/workspaces/t_6c8c8ada/artifact.json";
const raw = JSON.parse(fs.readFileSync(ART, "utf8"));
const body = raw.body ?? raw.request?.body ?? raw.requestBody ?? raw;

function openaiToolNested(b) {
  const h = [];
  (b.messages ?? []).forEach((m, i) => {
    if (m?.role !== "tool" || !Array.isArray(m.content)) return;
    m.content.forEach((blk, j) => {
      if (blk && typeof blk === "object" && blk.cache_control !== undefined) h.push(`messages[${i}].content[${j}]`);
    });
  });
  return h;
}
function claudeNested(o, p = "", h = []) {
  if (Array.isArray(o)) { o.forEach((v, i) => claudeNested(v, `${p}[${i}]`, h)); return h; }
  if (!o || typeof o !== "object") return h;
  if (o.type === "tool_result" && Array.isArray(o.content)) {
    o.content.forEach((b, i) => { if (b && typeof b === "object" && b.cache_control !== undefined) h.push(`${p}.content[${i}]`); });
  }
  for (const [k, v] of Object.entries(o)) claudeNested(v, `${p}.${k}`, h);
  return h;
}

console.log("source nested tool markers:", openaiToolNested(body).length);
let leaks = 0;
for (const [src, tgt] of [["openai", "openai"], ["openai", "claude"]]) {
  for (const preserve of [false, true]) {
    const out = await translateRequest(src, tgt, tgt === "claude" ? "claude-opus-5" : "gpt-5",
      structuredClone(body), true, null, null, null, { preserveCacheControl: preserve });
    const hits = tgt === "claude" ? claudeNested(out) : openaiToolNested(out);
    if (hits.length) leaks++;
    console.log(`${src}->${tgt} preserve=${preserve}: nested=${hits.length} ${hits.length ? "LEAK (would 400)" : "clean"}`);
  }
}
console.log(leaks ? `RESULT: ${leaks}/4 combinations LEAK` : "RESULT: all clean");
