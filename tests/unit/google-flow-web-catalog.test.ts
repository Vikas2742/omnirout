import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const dir = mkdtempSync(join(tmpdir(), "omniroute-flow-catalog-"));
process.env.DATA_DIR = dir;
process.env.API_KEY_SECRET = "flow-catalog-test-secret";
const core = await import("../../src/lib/db/core.ts");
const catalog = await import("../../src/app/api/v1/models/catalog.ts");
const config = await import("../../src/lib/db/settings.ts");
const originalFetch = globalThis.fetch;
let outboundCalls = 0;
globalThis.fetch = async (url) => {
  if (String(url).includes("19345") || String(url).includes("flow.google.com")) outboundCalls++;
  throw new Error("Catalog remote services are faked");
};
test.after(() => {
  globalThis.fetch = originalFetch;
  core.resetDbInstance();
  rmSync(dir, { recursive: true, force: true });
});
async function models() {
  catalog.__resetCatalogBuilderRunsForTest();
  const response = await catalog.getUnifiedModelsResponse(
    new Request("http://localhost/api/v1/models")
  );
  assert.equal(response.status, 200);
  return (await response.json()).data as Array<{ id: string; type?: string }>;
}
test("catalog lists Flow only with valid admin env, never as chat or auto candidate", async () => {
  delete process.env.GOOGLE_FLOW_WEB_CDP_URL;
  delete process.env.GOOGLE_FLOW_WEB_PROJECT_ID;
  assert.equal(
    (await models()).some((m) => m.id.startsWith("google-flow-web/")),
    false
  );
  process.env.GOOGLE_FLOW_WEB_CDP_URL = "http://example.com:19345";
  process.env.GOOGLE_FLOW_WEB_PROJECT_ID = "00000001-0000-4000-8000-000000000001";
  assert.equal(
    (await models()).some((m) => m.id.startsWith("google-flow-web/")),
    false
  );
  process.env.GOOGLE_FLOW_WEB_CDP_URL = "http://127.0.0.1:19345";
  const all = await models();
  assert.deepEqual(
    all.filter((m) => m.id.startsWith("google-flow-web/")).map((m) => ({ id: m.id, type: m.type })),
    [{ id: "google-flow-web/nano-banana-2.1", type: "image" }]
  );
  await config.updateSettings({ blockedProviders: ["google-flow-web"] });
  assert.equal(
    (await models()).some((m) => m.id.startsWith("google-flow-web/")),
    false
  );
  assert.equal(outboundCalls, 0);
});
