import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(process.cwd(), ".systemone-transport-test-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "synthetic-test-secret";
const { handleSystemOneProxy } = await import("../../open-sse/handlers/systemone.ts");
const { resolveSystemOneModel } = await import("../../open-sse/config/systemoneRegistry.ts");
const core = await import("../../src/lib/db/core.ts");
test.after(() => {
  core.resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});
const token = "synthetic-provider-token";
const accountId = "0123456789abcdef0123456789abcdef";
const body = { state: "Synthetic", questions: { x: { type: "noul", instructions: "Valid?" } } };
const success = {
  model: "jev-1.13.0",
  answers: { x: { type: "noul", noul: 0.8 } },
  usage: { input_tokens: 1000000, output_tokens: 61 },
};

function options(model = "cloudflare-ai/jev") {
  const target = resolveSystemOneModel(model);
  assert.ok(target);
  const logs: Record<string, unknown>[] = [];
  const costs: unknown[][] = [];
  const health: unknown[][] = [];
  return {
    target,
    body,
    credentials: {
      apiKey: token,
      connectionId: "synthetic-connection",
      providerSpecificData: { accountId },
    },
    apiKeyId: "synthetic-omni-id",
    apiKeyName: "Synthetic Omni key",
    saveCallLogImpl: async (row: Record<string, unknown>) => {
      logs.push(row);
    },
    recordCostImpl: (...args: unknown[]) => {
      costs.push(args);
    },
    markAccountUnavailableImpl: async (...args: unknown[]) => {
      health.push(args);
    },
    resolveProxyImpl: async () => ({ proxy: null }),
    calculateCostImpl: async () => ({ priced: false, costUsd: 0 }),
    lockModelImpl: (...args: unknown[]) => {
      health.push(args);
    },
    logs,
    costs,
    health,
  };
}

test("one sanitized call log and registry-priced API-key cost per successful attempt", async () => {
  for (const [model, price] of [
    ["typesafe/jev-latest", 0.042],
    ["cloudflare-ai/jev", 0.042],
    ["clef", 0.24],
    ["clef-flash", 0.038],
  ] as const) {
    const opts = options(model);
    const response = await handleSystemOneProxy({
      ...opts,
      fetchImpl: async () =>
        Response.json(
          opts.target.provider === "typesafe" ? success : { success: true, result: success },
          { headers: { "x-request-id": "synthetic-upstream-id" } }
        ),
    });
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), success);
    assert.equal(opts.logs.length, 1);
    assert.equal(opts.logs[0].provider, opts.target.provider);
    assert.equal(opts.logs[0].model, opts.target.id);
    assert.equal(opts.logs[0].requestType, "systemone");
    assert.equal(opts.logs[0].connectionId, "synthetic-connection");
    assert.equal(opts.logs[0].apiKeyId, "synthetic-omni-id");
    assert.equal(opts.logs[0].upstreamRequestId, "synthetic-upstream-id");
    assert.deepEqual(opts.logs[0].tokens, success.usage);
    assert.equal(opts.costs.length, 1);
    assert.equal(opts.costs[0][1], price);
    assert.ok(response.headers.get("x-omniroute-provider"));
    assert.doesNotMatch(
      JSON.stringify(opts.logs) + JSON.stringify([...response.headers]),
      new RegExp(`${token}|${accountId}`)
    );
  }
});

test("per-connection proxy resolution encloses the exact upstream fetch", async () => {
  const opts = options();
  const proxy = { type: "http", host: "synthetic-proxy.invalid", port: 8080 };
  let insideProxy = false;
  const response = await handleSystemOneProxy({
    ...opts,
    resolveProxyImpl: async (id) => {
      assert.equal(id, "synthetic-connection");
      return { proxy };
    },
    runProxyImpl: async (resolvedProxy, run) => {
      assert.deepEqual(resolvedProxy, proxy);
      insideProxy = true;
      return run();
    },
    fetchImpl: async () => {
      assert.equal(insideProxy, true);
      return Response.json({ success: true, result: success });
    },
  });
  assert.equal(response.status, 200);
});

test("pricing-table input row wins but output tokens remain free", async () => {
  const opts = options();
  const response = await handleSystemOneProxy({
    ...opts,
    calculateCostImpl: async (_provider, _model, tokens) => {
      assert.equal(tokens.output_tokens, 0);
      return { priced: true, costUsd: 0.123 };
    },
    fetchImpl: async () => Response.json({ success: true, result: success }),
  });
  assert.equal(response.status, 200);
  assert.equal(opts.costs[0][1], 0.123);
});

for (const status of [400, 401, 402, 403, 429, 503]) {
  test(`HTTP ${status} logs once, redacts secrets and only model-locks Cloudflare`, async () => {
    const opts = options();
    const response = await handleSystemOneProxy({
      ...opts,
      fetchImpl: async () =>
        Response.json(
          {
            success: false,
            errors: [{ code: 7003, message: `Invalid value ${token} ${accountId}` }],
          },
          { status, headers: { "retry-after": "7", "x-request-id": `${token}-${accountId}` } }
        ),
    });
    assert.equal(response.status, status);
    if (status === 429) assert.equal(response.headers.get("retry-after"), "7");
    assert.equal(opts.logs.length, 1);
    assert.equal(opts.costs.length, 0);
    assert.doesNotMatch(
      (await response.text()) + JSON.stringify(opts.logs) + JSON.stringify([...response.headers]),
      new RegExp(`${token}|${accountId}`)
    );
    assert.ok(opts.health.every((args) => args[0] === "cloudflare-ai"));
  });
}

for (const kind of ["timeout", "network", "abort"] as const) {
  test(`${kind} propagates, counts only real fetches and returns a native error`, async () => {
    const opts = options();
    let fetches = 0;
    const controller = new AbortController();
    if (kind === "abort") controller.abort();
    const response = await handleSystemOneProxy({
      ...opts,
      timeoutMs: 5,
      signal: controller.signal,
      fetchImpl: async (_url, init) => {
        fetches++;
        if (kind === "network") throw new Error(`network ${token} ${accountId}`);
        return new Promise((_resolve, reject) => {
          const abort = () => reject(new Error("abort"));
          if (init?.signal?.aborted) abort();
          else init?.signal?.addEventListener("abort", abort, { once: true });
        });
      },
    });
    assert.equal(response.status, { timeout: 504, network: 502, abort: 499 }[kind]);
    assert.equal(fetches, kind === "abort" ? 0 : 1);
    assert.equal(opts.logs.length, fetches);
    assert.doesNotMatch(
      (await response.text()) + JSON.stringify(opts.logs),
      new RegExp(`${token}|${accountId}`)
    );
  });
}

test("invalid account ids never dispatch fetch", async () => {
  for (const id of [undefined, "../x", "F".repeat(32), "f".repeat(31)]) {
    const opts = options();
    let calls = 0;
    const response = await handleSystemOneProxy({
      ...opts,
      credentials: { ...opts.credentials, providerSpecificData: { accountId: id } },
      fetchImpl: async () => {
        calls++;
        return Response.json(success);
      },
    });
    assert.equal(response.status, 400);
    assert.equal(calls, 0);
    assert.match(await response.text(), /32 lowercase hexadecimal/);
  }
});
