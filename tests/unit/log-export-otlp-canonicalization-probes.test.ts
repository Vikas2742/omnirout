import test from "node:test";
import assert from "node:assert/strict";
import {
  otlpHttpDestination,
  otlpHttpConfigSchema,
} from "../../src/lib/logExport/destinations/otlpHttp.ts";

const endpoint = "http://127.0.0.1:1/v1/traces"; // All fetch calls are mocked; never contacted.
const cfg = (password: string) =>
  otlpHttpConfigSchema.parse({
    endpoint,
    headers: {
      Authorization: "Basic " + Buffer.from("synthetic-user:" + password).toString("base64"),
    },
    identitySalt: "a".repeat(64),
  });
const escapeEveryUnit = (s: string) =>
  s.replace(/[\s\S]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));

async function probe(password: string, text: string, status = 400) {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return new Response(text, { status });
  };
  try {
    const result = await otlpHttpDestination.createClient(cfg(password)).test();
    assert.equal(calls, 1);
    return result;
  } finally {
    globalThis.fetch = original;
  }
}

test("canonical JSON escape/format matrix contains credentials", async () => {
  for (const password of [
    "synthetic-pässword",
    "synthetic-/slash",
    'synthetic-"quote\\backslash',
    "synthetic-\u2028-line",
    "synthetic-🔐-password",
    "synthetic-\u0000-tab\t",
  ]) {
    for (const body of [
      JSON.stringify({ error: password }),
      '{"error":"' + escapeEveryUnit(password) + '"}',
      JSON.stringify({ error: password }).replaceAll("/", "\\/"),
    ]) {
      const result = await probe(password, body);
      assert.equal(result.ok, false);
      assert.match(result.detail!, /\[REDACTED\]/);
      assert.equal(result.detail!.includes(password), false);
      assert.equal(result.detail!.includes(escapeEveryUnit(password)), false);
    }
  }
});

test("large flat and moderately nested valid JSON stays contained", async () => {
  const password = "synthetic-pässword";
  for (const body of [
    '{"error":"' + escapeEveryUnit(password) + '","padding":"' + "x".repeat(60000) + '"}',
    '{"error":"' +
      escapeEveryUnit(password) +
      '","nested":' +
      "[".repeat(500) +
      "0" +
      "]".repeat(500) +
      "}",
  ]) {
    const result = await probe(password, body);
    assert.match(result.detail!, /\[REDACTED\]/);
    assert.equal(result.detail!.includes(escapeEveryUnit(password)), false);
  }
});

test("non-JSON response remains readable with redaction before clipping", async () => {
  const password = "synthetic-pässword";
  const result = await probe(password, "raw collector: " + password + " " + "z".repeat(500));
  assert.equal(
    result.detail,
    "OTLP/HTTP permanent status 400: " +
      ("raw collector: [REDACTED] " + "z".repeat(500)).slice(0, 256)
  );
});

test("deep parseable JSON stays contained on the actual review runtime", async () => {
  const password = "synthetic-pässword-secret";
  const escaped = escapeEveryUnit(password);
  const body =
    '{"error":"' + escaped + '","nested":' + "[".repeat(12000) + "0" + "]".repeat(12000) + "}";
  assert.ok(Buffer.byteLength(body) < 65536);
  const parsed = JSON.parse(body);
  assert.equal(parsed.error, password);
  // Node 24 on this host parses this depth but JSON.stringify can exceed its
  // native stack. Exercise canonicalBody's raw fallback instead of failing in
  // the test harness before the destination is called.
  const result = await probe(password, body);
  console.log(
    "DEEP_JSON_RESULT",
    JSON.stringify({ bytes: Buffer.byteLength(body), detail: result.detail })
  );
  assert.equal(result.detail!.includes(password), false);
  assert.equal(
    result.detail!.includes(escaped),
    false,
    "valid JSON credential remains recoverable in test detail"
  );
});

test("clipped JSON optional slash escaping must not materialize a plaintext password", async () => {
  const password = "synthetic/secret";
  const body = '{"error":"rejected synthetic\\/secret';
  assert.throws(() => JSON.parse(body));
  const result = await probe(password, body);
  console.log("CLIPPED_SLASH_RESULT", JSON.stringify(result));
  assert.equal(
    result.detail!.includes(password),
    false,
    "sanitizer decodes a bypassed JSON escape after header matching"
  );
});

test("partial-success count derived from remote text must not expose numeric Basic password", async () => {
  const password = "8675309";
  const result = await probe(
    password,
    JSON.stringify({ partialSuccess: { rejectedSpans: password } }),
    200
  );
  assert.equal(result.ok, false);
  console.log("ACK_RESULT", JSON.stringify(result));
  assert.equal(
    result.detail!.includes(password),
    false,
    "untrusted rejectedSpans leaks a configured password"
  );
});

test("network exceptions discard attacker-controlled error text", async () => {
  const password = "synthetic-pässword";
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    throw new Error("untrusted fetch failure " + password);
  };
  try {
    const result = await otlpHttpDestination.createClient(cfg(password)).test();
    assert.deepEqual(result, { ok: false, detail: "OTLP/HTTP network request failed" });
    assert.equal(calls, 3);
  } finally {
    globalThis.fetch = original;
  }
});
