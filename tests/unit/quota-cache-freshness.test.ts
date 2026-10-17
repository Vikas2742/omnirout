import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-quota-freshness-"));
process.env.DATA_DIR = dir;
process.env.DISABLE_SQLITE_AUTO_BACKUP = "true";
const core = await import("../../src/lib/db/core.ts");
const snapshots = await import("../../src/lib/db/quotaSnapshots.ts");
const quota = await import("../../src/domain/quotaCache.ts");
const state = await import("../../src/domain/quotaCacheState.ts");
const resetAt = new Date(Date.now() + 7 * 86400000).toISOString();
function seed(id: string, remainingPercentage = 0) {
  quota.setQuotaCache(id, "codex", { session: { remainingPercentage, resetAt } });
}
test.afterEach(() => {
  quota.stopBackgroundRefresh();
  quota.__clearForTests();
});
test.after(() => {
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
});
test("fresh exhaustion and configured thresholds still block, fresh headroom releases", () => {
  seed("fresh");
  assert.equal(quota.getQuotaWindowStatus("fresh", "session")?.reachedThreshold, true);
  seed("fresh", 1);
  assert.equal(quota.getQuotaWindowStatus("fresh", "session", 99)?.reachedThreshold, true);
  seed("fresh", 100);
  assert.equal(quota.getQuotaWindowStatus("fresh", "session")?.reachedThreshold, false);
});
test("old exhaustion cannot exclude a provider until a distant weekly reset", () => {
  seed("expired");
  quota.getQuotaCache("expired")!.fetchedAt = Date.now() - state.EXHAUSTED_MAX_PARK_MS - 1;
  assert.equal(quota.getQuotaWindowStatus("expired", "session")?.reachedThreshold, false);
  assert.equal(quota.isQuotaExhaustedForRequest("expired", "codex", "gpt-6-sol"), false);
});
test("provider observations start exactly one background refresh timer", () => {
  seed("timer");
  const timer = state.getQuotaCacheState().refreshTimer;
  assert.notEqual(timer, null);
  seed("timer-two");
  assert.equal(state.getQuotaCacheState().refreshTimer, timer);
});
test("the window policy honors a bounded park after repeated fresh exhausted observations", () => {
  seed("bounded");
  const deadline = quota.getQuotaCache("bounded")!.nextResetAt;
  seed("bounded");
  assert.equal(quota.getQuotaCache("bounded")!.nextResetAt, deadline);
  quota.getQuotaCache("bounded")!.nextResetAt = new Date(Date.now() - 1).toISOString();
  assert.equal(quota.getQuotaWindowStatus("bounded", "session")?.reachedThreshold, false);
  assert.equal(quota.isQuotaExhaustedForRequest("bounded", "codex", "gpt-6-sol"), false);
});
test("persisted observations resume refresh after cache hydration", () => {
  snapshots.saveQuotaSnapshot({
    provider: "codex",
    connection_id: "hydrated",
    window_key: "session",
    remaining_percentage: 0,
    is_exhausted: 1,
    next_reset_at: resetAt,
    window_duration_ms: null,
    raw_data: null,
  });
  assert.equal(quota.getQuotaWindowStatus("hydrated", "session")?.reachedThreshold, true);
  assert.notEqual(state.getQuotaCacheState().refreshTimer, null);
});
test("an upstream 429 remains blocking and starts recovery polling", () => {
  quota.markAccountExhaustedFrom429("rate-limited", "codex");
  assert.equal(quota.isAccountQuotaExhausted("rate-limited"), true);
  assert.notEqual(state.getQuotaCacheState().refreshTimer, null);
});
