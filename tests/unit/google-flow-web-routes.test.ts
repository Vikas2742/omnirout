import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const dir = mkdtempSync(join(tmpdir(), "omniroute-flow-routes-"));
process.env.DATA_DIR = dir;
process.env.API_KEY_SECRET = "google-flow-web-test-secret";
process.env.REQUIRE_API_KEY = "false";
process.env.GOOGLE_FLOW_WEB_CDP_URL = "http://127.0.0.1:19345";
process.env.GOOGLE_FLOW_WEB_PROJECT_ID = "00000001-0000-4000-8000-000000000001";
const core = await import("../../src/lib/db/core.ts");
const keys = await import("../../src/lib/db/apiKeys.ts");
const settings = await import("../../src/lib/db/settings.ts");
const routes = [
  () => import("../../src/app/api/v1/images/generations/route.ts"),
  () => import("../../src/app/api/v1/providers/[provider]/images/generations/route.ts"),
];
const canonical = "google-flow-web/nano-banana-2.1";
const base = { model: canonical, prompt: "apple" };
function createKey(options: { name: string } & Parameters<typeof keys.createApiKey>[3]) {
  return keys.createApiKey(options.name, "flow-test-machine", [], options);
}
let calls = 0;
let lastSignal: AbortSignal | null = null;
async function installSeam() {
  const { googleFlowWebBrowser } = await import("../../open-sse/services/googleFlowWebBrowser.ts");
  test.mock.method(
    googleFlowWebBrowser,
    "generate",
    async (_input: unknown, _config: unknown, signal: AbortSignal) => {
      calls++;
      lastSignal = signal;
      return [{ b64_json: "/9j/4A==" }];
    }
  );
}
test.beforeEach(async () => {
  calls = 0;
  test.mock.restoreAll();
  await installSeam();
});
test.after(() => {
  test.mock.restoreAll();
  keys.resetApiKeyState();
  core.resetDbInstance();
  rmSync(dir, { recursive: true, force: true });
});
async function invoke(index: number, body = base, key?: string) {
  const route = await routes[index]();
  const request = new Request(
    `http://localhost/api/v1/${index ? "providers/google-flow-web/" : ""}images/generations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(key ? { Authorization: `Bearer ${key}` } : {}),
      },
      body: JSON.stringify(body),
    }
  );
  const response = await route.POST(request, {
    params: Promise.resolve({ provider: "google-flow-web" }),
  });
  return { response, request };
}
for (const index of [0, 1]) {
  test(`route ${index}: unreadable disable state fails closed`, async () => {
    const { googleFlowWebSettings } = await import("../../src/lib/images/googleFlowWebRoute.ts");
    test.mock.method(googleFlowWebSettings, "read", async () => {
      throw new Error("private backend path /private/secret and Signature=not-public");
    });
    const key = await createKey({ name: "flow-settings-failure" });
    const { response } = await invoke(index, base, key.key);
    assert.equal(response.status, 503);
    assert.equal(calls, 0);
    assert.ok(!JSON.stringify(await response.json()).includes("not-public"));
  });
  test(`route ${index}: anonymous and invalid key fail even with REQUIRE_API_KEY=false`, async () => {
    for (const key of [undefined, "invalid-key"]) {
      const { response } = await invoke(index, base, key);
      assert.equal(response.status, 401);
      assert.equal(calls, 0);
      assert.ok(!JSON.stringify(await response.json()).includes("at /"));
    }
  });
  test(`route ${index}: disabled, forbidden model and provider excluded never reach bridge`, async () => {
    const allowed = await createKey({ name: "flow-valid" });
    const restricted = await createKey({
      name: "flow-denied-model",
      modelAccessMode: "restricted",
      allowedModels: ["openai/gpt-image-2"],
    });
    const excluded = await createKey({
      name: "flow-denied-connection",
      allowedConnections: ["other-connection"],
    });
    for (const key of [restricted.key, excluded.key]) {
      const { response } = await invoke(index, base, key);
      assert.equal(response.status, 403);
    }
    delete process.env.GOOGLE_FLOW_WEB_CDP_URL;
    try {
      assert.equal((await invoke(index, base, allowed.key)).response.status, 403);
    } finally {
      process.env.GOOGLE_FLOW_WEB_CDP_URL = "http://127.0.0.1:19345";
    }
    await settings.updateSettings({ blockedProviders: ["google-flow-web"] });
    try {
      assert.equal((await invoke(index, base, allowed.key)).response.status, 403);
    } finally {
      await settings.updateSettings({ blockedProviders: [] });
    }
    assert.equal(calls, 0);
  });
  test(`route ${index}: valid key forwards signal, returns bytes and standard metadata`, async () => {
    const key = await createKey({ name: "flow-valid", allowedConnections: ["noauth"] });
    const { response, request } = await invoke(index, base, key.key);
    assert.equal(response.status, 200);
    assert.equal(calls, 1);
    assert.equal(lastSignal, request.signal);
    assert.equal(response.headers.get("x-omniroute-model"), canonical);
    assert.ok(response.headers.get("x-omniroute-request-id"));
    assert.equal(response.headers.has("x-omniroute-tokens-in"), false);
    assert.equal(response.headers.has("x-omniroute-response-cost"), false);
    assert.deepEqual((await response.json()).data, [{ b64_json: "/9j/4A==" }]);
  });
  test(`route ${index}: revised_prompt survives the handler without signed URLs`, async () => {
    const { googleFlowWebBrowser } =
      await import("../../open-sse/services/googleFlowWebBrowser.ts");
    test.mock.method(googleFlowWebBrowser, "generate", async () => [
      { b64_json: "/9j/4A==", revised_prompt: "English rewrite" },
    ]);
    const key = await createKey({ name: "flow-rewrite" });
    const { response } = await invoke(index, base, key.key);
    assert.equal(response.status, 200);
    assert.deepEqual((await response.json()).data, [
      { b64_json: "/9j/4A==", revised_prompt: "English rewrite" },
    ]);
  });
  test(`route ${index}: unsupported params rejected without browser work`, async () => {
    const key = await createKey({ name: "flow-inputs" });
    for (const extra of [
      { response_format: "url" },
      { image: "x" },
      { seed: 1 },
      { n: 5 },
      { aspect_ratio: "2:1" },
      { cdpUrl: "http://example.com" },
      { project: "other" },
    ]) {
      assert.equal((await invoke(index, { ...base, ...extra }, key.key)).response.status, 400);
    }
    assert.equal(calls, 0);
  });
}
test("combo rejects a Flow target before dispatching even an earlier non-Flow target", async () => {
  const { runImageComboTargets } = await import("../../open-sse/services/imageCombo.ts");
  let dispatches = 0;
  const result = await runImageComboTargets(
    [{ modelStr: "openai/gpt-image-2" }, { modelStr: canonical }],
    {
      resolveProvider: (t) => ({
        provider: t.modelStr.split("/")[0],
        model: t.modelStr.split("/")[1],
      }),
      resolveCredentials: async () => ({}),
      dispatch: async () => {
        dispatches++;
        return { success: true, data: {} };
      },
    }
  );
  assert.equal(result.outcome, "terminal");
  assert.equal(dispatches, 0);
  assert.equal(calls, 0);
});
