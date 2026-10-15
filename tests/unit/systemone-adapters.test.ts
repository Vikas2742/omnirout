import assert from "node:assert/strict";
import test from "node:test";
import { resolveSystemOneModel } from "../../open-sse/config/systemoneRegistry.ts";
import { systemOneAdapters } from "../../open-sse/handlers/systemone/adapters.ts";

const credentials = {
  apiKey: "synthetic-systemone-token",
  providerSpecificData: { accountId: "0123456789abcdef0123456789abcdef" },
};
const input = {
  state: { text: "Synthetic state" },
  questions: { x: { type: "noul", instructions: "Valid?" } },
};
const native = {
  model: "jev-1.13.0",
  answers: { x: { type: "noul", noul: 0.9 } },
  usage: { input_tokens: 367, output_tokens: 61 },
};

for (const [id, upstream, suffix, wrapped] of [
  ["typesafe/jev-latest", "jev-latest", "https://api.typesafe.ai/v1/systemone", false],
  ["typesafe/jev-1.13.0", "jev-1.13.0", "https://api.typesafe.ai/v1/systemone", false],
  ["cloudflare-ai/jev", "typesafe/jev", "/ai/run", true],
  ["cloudflare-ai/clef", "clef", "/ai/run/@cf/cloudflare/clef", false],
  ["cf/clef-flash", "clef-flash", "/ai/run/@cf/cloudflare/clef-flash", false],
] as const) {
  test(`adapter exact request: ${id}`, () => {
    const target = resolveSystemOneModel(id);
    assert.ok(target);
    const request = systemOneAdapters[target.adapter].buildRequest(
      target.upstreamModel,
      input,
      credentials
    );
    assert.equal(
      request.url,
      suffix.startsWith("https:")
        ? suffix
        : `https://api.cloudflare.com/client/v4/accounts/${credentials.providerSpecificData.accountId}${suffix}`
    );
    assert.deepEqual(request.headers, {
      Accept: "application/json",
      Authorization: `Bearer ${credentials.apiKey}`,
      "Content-Type": "application/json",
    });
    assert.deepEqual(
      request.body,
      wrapped ? { model: upstream, input } : { model: upstream, ...input }
    );
  });
}

test("native and both Cloudflare envelopes normalize without losing answer fields", () => {
  assert.deepEqual(systemOneAdapters.typesafe.normalizeSuccess(native), native);
  assert.deepEqual(
    systemOneAdapters.cloudflare.normalizeSuccess({
      success: true,
      result: { state: "Completed", result: native },
    }),
    native
  );
  assert.deepEqual(
    systemOneAdapters.cloudflare.normalizeSuccess({ success: true, result: native }),
    native
  );
  assert.throws(() => systemOneAdapters.cloudflare.normalizeSuccess({ success: true, result: {} }));
});

for (const accountId of [undefined, "", "../x", "A".repeat(32), "a".repeat(31), "a".repeat(33)]) {
  test(`invalid account configuration is rejected: ${String(accountId)}`, () => {
    assert.throws(
      () =>
        systemOneAdapters.cloudflare.buildRequest("typesafe/jev", input, {
          ...credentials,
          providerSpecificData: { accountId },
        }),
      /32 lowercase hexadecimal/
    );
  });
}

test("Cloudflare path selector is allowlisted, not interpolated from client input", () => {
  assert.throws(() => systemOneAdapters.cloudflare.buildRequest("../x", input, credentials));
  for (const id of [
    "cf/../x",
    "cloudflare-ai/@cf/cloudflare/clef",
    "typesafe/jev-fake",
    "unknown/jev",
    "jev",
  ])
    assert.equal(resolveSystemOneModel(id), null);
  assert.equal(resolveSystemOneModel("jev-preview")?.provider, "typesafe");
  assert.equal(resolveSystemOneModel("clef")?.provider, "cloudflare-ai");
});

for (const [status, errorType] of [
  [400, "api_usage_error"],
  [401, "authentication_error"],
  [403, "authentication_error"],
  [402, "insufficient_balance"],
  [429, "rate_limit_error"],
  [503, "server_error"],
] as const) {
  test(`error mapping ${status}`, () => {
    const cf = systemOneAdapters.cloudflare.normalizeError(
      status,
      { success: false, errors: [{ code: 7003, message: "Invalid value at questions.x.type" }] },
      new Headers({ "retry-after": "7" })
    );
    assert.equal(cf.status, status);
    assert.equal(cf.error_type, errorType);
    assert.equal(cf.message, "Invalid value at questions.x.type");
    if (status === 429) assert.equal(cf.retryAfter, "7");
    const ts = systemOneAdapters.typesafe.normalizeError(
      status,
      { detail: { error_type: errorType, message: "Synthetic error" } },
      new Headers()
    );
    assert.equal(ts.error_type, errorType);
    assert.equal(ts.message, "Synthetic error");
  });
}

test("FastAPI validation errors remain useful and never stringify arbitrary input", () => {
  const result = systemOneAdapters.typesafe.normalizeError(
    422,
    {
      detail: [{ loc: ["body", "questions"], msg: "Invalid question", input: credentials.apiKey }],
    },
    new Headers()
  );
  assert.equal(result.error_type, "api_usage_error");
  assert.match(result.message, /Invalid question/);
  assert.doesNotMatch(result.message, /synthetic-systemone-token/);
});
