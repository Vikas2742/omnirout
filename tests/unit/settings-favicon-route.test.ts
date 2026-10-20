import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-favicon-route-"));
const ORIGINAL_DATA_DIR = process.env.DATA_DIR;

process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const faviconRoute = await import("../../src/app/api/settings/favicon/route.ts");

function resetStorage() {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

test.beforeEach(() => {
  resetStorage();
});

test.after(() => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });

  if (ORIGINAL_DATA_DIR === undefined) {
    delete process.env.DATA_DIR;
  } else {
    process.env.DATA_DIR = ORIGINAL_DATA_DIR;
  }
});

// Regression: NextResponse.redirect("/favicon.svg") throws "URL is malformed"
// in Next 16 (relative URLs unsupported), so the fallback path returned a raw
// 500 whenever no custom favicon was configured.
test("GET redirects to the static favicon with an absolute Location when no custom favicon is set", async () => {
  const request = new Request("http://localhost:20128/api/settings/favicon");
  const response = await faviconRoute.GET(request);

  assert.ok(
    response.status >= 300 && response.status < 400,
    `expected redirect, got ${response.status}`
  );
  assert.equal(response.headers.get("location"), "http://localhost:20128/favicon.svg");
});
