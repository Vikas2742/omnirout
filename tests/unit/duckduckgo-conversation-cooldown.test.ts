import { after, beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-ddg-cooldown-"));
process.env.DATA_DIR = dataDir;
process.env.API_KEY_SECRET = "test-duckduckgo-cooldown-only";
process.env.OMNIROUTE_PLUGINS_DIR = path.join(dataDir, "plugins");
const { DuckDuckGoWebExecutor } = await import("../../open-sse/executors/duckduckgo-web.ts");
const { getProviderCredentials, markAccountUnavailable } =
  await import("../../src/sse/services/auth.ts");
const { clearAllModelLockouts } = await import("../../open-sse/services/accountFallback.ts");
const { resetDbInstance } = await import("../../src/lib/db/core.ts");

beforeEach(() => clearAllModelLockouts());
after(() => {
  clearAllModelLockouts();
  resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

test("DuckDuckGo chat 429 preserves Retry-After without exposing other upstream headers", async () => {
  const executor = new DuckDuckGoWebExecutor() as unknown as {
    processResponse(response: Response, streaming: boolean): Promise<Response>;
  };
  for (const streaming of [false, true]) {
    const response = await executor.processResponse(
      Response.json(
        { type: "ERR_CONVERSATION_LIMIT" },
        { status: 429, headers: { "Retry-After": "120", "Set-Cookie": "private=fixture" } }
      ),
      streaming
    );
    assert.equal(response.status, 429);
    assert.equal(response.headers.get("Retry-After"), "120");
    assert.equal(response.headers.get("Set-Cookie"), null);
    assert.match((await response.json()).error.message, /ERR_CONVERSATION_LIMIT/);
  }
});

test("real DuckDuckGo 429 handling suppresses the synthetic model on the next selection", async () => {
  const provider = "duckduckgo-web";
  const model = "claude-haiku-4-5";
  const before = await getProviderCredentials(provider, null, null, model);
  assert.equal(before?.connectionId, "noauth");
  const result = await markAccountUnavailable(
    "noauth",
    429,
    "DuckDuckGo AI Chat error: ERR_CONVERSATION_LIMIT",
    provider,
    model,
    { useUpstreamRetryHints: true },
    { headers: new Headers({ "Retry-After": "120" }) }
  );
  assert.equal(result.shouldFallback, true);
  const afterFailure = await getProviderCredentials(provider, null, null, model);
  assert.equal(afterFailure?.allRateLimited, true);
  assert.equal(afterFailure?.cooldownScope, "model");
  const remaining = Date.parse(afterFailure?.retryAfter ?? "") - Date.now();
  assert.ok(remaining > 115_000 && remaining <= 120_000, `remaining: ${remaining}`);
  const sibling = await getProviderCredentials(provider, null, null, "gpt-5.4-mini");
  assert.equal(sibling?.connectionId, "noauth", "do not invent a provider-wide quota");
});

test("without a retry hint DuckDuckGo uses the resolved transient backoff, not an invented daily reset", async () => {
  const result = await markAccountUnavailable(
    "noauth",
    429,
    "DuckDuckGo AI Chat error: ERR_CONVERSATION_LIMIT",
    "duckduckgo-web",
    "claude-haiku-4-5"
  );
  assert.ok(result.cooldownMs > 0);
  const credentials = await getProviderCredentials(
    "duckduckgo-web",
    null,
    null,
    "claude-haiku-4-5"
  );
  assert.equal(credentials?.allRateLimited, true);
  const remaining = Date.parse(credentials?.retryAfter ?? "") - Date.now();
  assert.ok(remaining > 0 && remaining <= result.cooldownMs);
});

test("non-rate-limit client errors do not create this transient DuckDuckGo cooldown", async () => {
  await markAccountUnavailable(
    "noauth",
    400,
    "Malformed request",
    "duckduckgo-web",
    "claude-haiku-4-5"
  );
  const credentials = await getProviderCredentials(
    "duckduckgo-web",
    null,
    null,
    "claude-haiku-4-5"
  );
  assert.equal(credentials?.connectionId, "noauth");
});
