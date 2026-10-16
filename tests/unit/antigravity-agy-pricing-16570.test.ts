/**
 * Issue #16570 — Antigravity (`antigravity`) and Antigravity CLI (`agy`)
 * connections serve models that have no row in the provider pricing tables the
 * billing path reads: the `ag` table kept the Pro / Claude 4.6 / GPT-OSS rows
 * from the retired `ag/` prefix, while `antigravity` and `agy` only carried the
 * three Gemini 3.7 Flash tiers. With a per-key USD limit the fail-closed check
 * (#12341) then marked the whole window exceeded on the FIRST unpriced call —
 * one `antigravity/gemini-4-argon-low` request flipped `weeklyExceeded` and the
 * key returned 429 usage_limit_exceeded for every model until reset.
 *
 * Fix: `ag`, `antigravity` and `agy` resolve the same subscription table, which
 * also gains rows for every chat id the live :fetchAvailableModels catalog can
 * serve today (Gemini 4 Argon, Gemini 3.8 Flash, Claude Opus/Sonnet 5.5 tiers,
 * Flash-Lite, Gemini 3 Flash) plus the client-facing alias display ids.
 *
 * Locks: every id in the shared Antigravity catalog, the live-only ids, and the
 * chat alias display ids resolve `priced: true` through calculateCostDetailed
 * for `antigravity`, `agy` and `ag` — so the next catalog addition fails CI
 * instead of locking keys in production.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-ag-pricing-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const { calculateCostDetailed } = await import("../../src/lib/usage/costCalculator.ts");
const { ANTIGRAVITY_PUBLIC_MODELS, ANTIGRAVITY_MODEL_ALIASES } =
  await import("../../open-sse/config/antigravityModelAliases.ts");
const { AGY_PUBLIC_MODELS } = await import("../../open-sse/config/agyModels.ts");
const core = await import("../../src/lib/db/core.ts");

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

const TOKENS = { input: 1e6, output: 1e6 };

// Ids the live catalog serves but that are not in the static shared catalog
// (issue #16570 table): Gemini 4 Argon tiers, the 3.8 upstream "-tiered" id,
// Claude 5.5 tier ids, and the lite/base Flash ids.
const LIVE_ONLY_CHAT_IDS = [
  "gemini-4-argon-low",
  "gemini-4-argon-medium",
  "gemini-4-argon-high",
  "gemini-3.8-flash-tiered",
  "claude-opus-5-5-low",
  "claude-opus-5-5-medium",
  "claude-opus-5-5-high",
  "claude-sonnet-5-5-low",
  "claude-sonnet-5-5-medium",
  "claude-sonnet-5-5-high",
  "gemini-3.5-flash-lite",
  "gemini-3-flash",
];

// Same predicate as antigravityModelAliases.ts ANTIGRAVITY_NON_CHAT_MODEL_PATTERN
// (module-private): image/tts/embedding/video ids are non-chat surfaces billed
// per-image/-second, not through the token pricing table this issue covers.
const NON_CHAT_PATTERN = /(?:^|[-_])(image|imagen|audio|tts|embedding|embed|video|veo)(?:[-_]|$)/i;
const CHAT_ALIAS_DISPLAY_IDS = Object.keys(ANTIGRAVITY_MODEL_ALIASES).filter(
  (id) => !NON_CHAT_PATTERN.test(id)
);

async function expectPriced(provider: string, model: string) {
  const result = await calculateCostDetailed(provider, model, TOKENS);
  assert.equal(result.priced, true, `${provider}/${model} must resolve a pricing row`);
  assert.ok(result.costUsd > 0, `${provider}/${model} must produce a non-zero estimate`);
}

for (const provider of ["antigravity", "agy", "ag"]) {
  test(`#16570 ${provider}: every shared-catalog chat id is priced`, async () => {
    const catalogIds = new Set([
      ...ANTIGRAVITY_PUBLIC_MODELS.map((m) => m.id),
      ...AGY_PUBLIC_MODELS.map((m) => m.id),
    ]);
    for (const model of catalogIds) await expectPriced(provider, model);
  });

  test(`#16570 ${provider}: live-only chat ids are priced`, async () => {
    for (const model of LIVE_ONLY_CHAT_IDS) await expectPriced(provider, model);
  });

  test(`#16570 ${provider}: chat alias display ids are priced`, async () => {
    for (const model of CHAT_ALIAS_DISPLAY_IDS) await expectPriced(provider, model);
  });
}

test("#16570 existing ag rows keep their values (back-compat)", async () => {
  // ag/gemini-pro-agent: $4 input + $18 output per MTok → $22 for 1M/1M.
  const pro = await calculateCostDetailed("ag", "gemini-pro-agent", TOKENS);
  assert.deepEqual(pro, { costUsd: 22, priced: true });
  // ag/gpt-oss-120b-medium: $0.5 + $2.0 → $2.5.
  const oss = await calculateCostDetailed("ag", "gpt-oss-120b-medium", TOKENS);
  assert.deepEqual(oss, { costUsd: 2.5, priced: true });
});

test("#16570 new rows use the published Standard-tier rates", async () => {
  // Gemini 4 Argon introductory rate: $2/$10 per MTok through 2026-11-30.
  const argon = await calculateCostDetailed("antigravity", "gemini-4-argon-low", TOKENS);
  assert.deepEqual(argon, { costUsd: 12, priced: true });
  // Gemini 3.8 Flash introductory rate: $0.75/$3.75 per MTok through 2026-12-31.
  const flash38 = await calculateCostDetailed("agy", "gemini-3.8-flash-high", TOKENS);
  assert.deepEqual(flash38, { costUsd: 4.5, priced: true });
  // Claude Sonnet 5.5 tier: $2/$10 per MTok (CLAUDE_SONNET_5_PRICING).
  const sonnet = await calculateCostDetailed("antigravity", "claude-sonnet-5-5-high", TOKENS);
  assert.deepEqual(sonnet, { costUsd: 12, priced: true });
});

test("#16570 unrelated providers are unchanged", async () => {
  // A provider id with no antigravity family table still resolves by its own
  // rows only — a model absent from it stays unpriced.
  const result = await calculateCostDetailed("openai", "gemini-4-argon-low", TOKENS);
  assert.equal(result.priced, false);
});
