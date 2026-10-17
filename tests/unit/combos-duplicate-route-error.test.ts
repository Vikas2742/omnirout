/**
 * Unit tests for the 500 catch path of POST /api/combos/duplicate (issue #16969,
 * Hard Rule #12).
 *
 * The route's final catch returns `details: String(error.message)` raw (see
 * src/app/api/combos/duplicate/route.ts), leaking the raw exception message —
 * including absolute source paths — into the 500 body. This test forces that
 * path: auto-combo resolution imports getCachedProviderConnections from
 * "@/lib/db/readCache", which is mocked to throw a message embedding an absolute
 * source path. The regression asserts the emitted body never contains that path
 * or a stack-frame marker.
 *
 * mock.module() requires --experimental-test-module-mocks, so like the sibling
 * precedents (tests/unit/repro-13999-mid-stream-error.test.ts and
 * tests/unit/issue-8674-alpha-search.test.ts) this file is a no-op skip under
 * the project's default suite and a real pass/fail under the flagged run.
 *
 * This MUST be a dedicated file (not added to combos-duplicate-route.test.ts):
 * module mocks only apply to modules loaded AFTER registration, and that file
 * already loads the route (and transitively virtualFactory) for earlier tests.
 *
 * Run with: node --experimental-test-module-mocks --import tsx/esm --test tests/unit/combos-duplicate-route-error.test.ts
 */
import { test, mock } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "os";
import path from "node:path";

// ── DB / auth setup ───────────────────────────────────────────────────────────

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-combos-dup-err-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET ?? "combos-duplicate-error-test-secret";

const core = await import("../../src/lib/db/core.ts");
const settingsDb = await import("../../src/lib/db/settings.ts");

test.after(() => {
  core.resetDbInstance();
  try {
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  } catch {
    // best-effort cleanup
  }
});

function makePostRequest(url: string, body: unknown): Request {
  return new Request(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

if (typeof mock.module !== "function") {
  test("(skipped) requires --experimental-test-module-mocks", () => {
    assert.ok(true);
  });
} else {
  // Mock the DB-layer module the route (via virtualFactory) imports from, so
  // prepareVirtualAutoComboInputs() throws a message embedding an absolute source
  // path — exactly the failure mode #16969 reports. Registered BEFORE the route
  // is imported (module mocks only apply to modules loaded after registration).
  const LEAK = "/var/lib/omniroute/secret/db/combos.ts:42";

  const actualReadCache = await import("@/lib/db/readCache");
  mock.module("@/lib/db/readCache", {
    namedExports: {
      ...actualReadCache,
      getCachedProviderConnections: async () => {
        throw new Error(`SQLITE_CONSTRAINT: INSERT failed at ${LEAK}`);
      },
    },
  });

  const duplicateRoute = await import("../../src/app/api/combos/duplicate/route.ts");

  test("#16969: a 500 from POST /api/combos/duplicate must not leak the raw exception message", async () => {
    await settingsDb.updateSettings({ requireLogin: false });

    const req = makePostRequest("http://localhost/api/combos/duplicate", {
      name: "auto/best-coding",
    });
    const res = await duplicateRoute.POST(req as never);
    const body = (await res.json()) as { error?: string; details?: unknown };

    // A silent mock no-op would resolve real (empty) connections and return 422
    // "No connected providers/models match this auto-combo template".
    assert.equal(
      res.status,
      500,
      `expected 500, got ${res.status} — a silent mock no-op would yield 422`
    );
    assert.equal(body.error, "Failed to duplicate auto-combo");
    assert.ok(
      !JSON.stringify(body).includes(LEAK),
      `500 body must not leak the raw exception message (got: ${JSON.stringify(body)})`
    );
    assert.ok(!JSON.stringify(body).includes("at "), "error response must not leak stack traces");
  });
}
