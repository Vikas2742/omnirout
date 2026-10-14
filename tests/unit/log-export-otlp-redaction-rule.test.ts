import test from "node:test";
import assert from "node:assert/strict";
import {
  otlpHttpDestination,
  otlpHttpConfigSchema,
} from "../../src/lib/logExport/destinations/otlpHttp.ts";

async function probe(body: string, headers: Record<string, string>, status = 400) {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return new Response(body, { status });
  };
  try {
    const result = await otlpHttpDestination
      .createClient(
        otlpHttpConfigSchema.parse({
          endpoint: "http://127.0.0.1:1/v1/traces",
          headers,
        })
      )
      .test();
    assert.equal(calls, 1);
    return result;
  } finally {
    globalThis.fetch = original;
  }
}
function basic(username: string, password: string) {
  return { Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}` };
}

// A replacement marker can itself contain a registered secret. The containment
// scan must fail closed rather than repeatedly expanding/redacting that marker.
for (const [label, headers] of [
  ["raw header value", { "X-Fixture": "REDACTED" }],
  ["Bearer token", { Authorization: "Bearer REDACTED" }],
  ["Basic password", basic("synthetic-user", "REDACTED")],
  ["Basic username length >= 4", basic("REDACTED", "synthetic-password")],
] as const) {
  test(`fail closed on residual registered form: ${label}`, async () => {
    assert.deepEqual(await probe("collector REDACTED", headers), {
      ok: false,
      detail: "OTLP/HTTP permanent status 400: [response excerpt withheld]",
    });
  });
}

test("short usernames redact collector echoes without withholding markers or generated wording", async () => {
  for (const username of ["a", "api", "A", "ED", "TED"]) {
    assert.deepEqual(await probe(`collector ${username}`, basic(username, "synthetic-password")), {
      ok: false,
      detail: "OTLP/HTTP permanent status 400: collector [REDACTED]",
    });
    assert.deepEqual(
      await probe(
        '{"partialSuccess":{"rejectedSpans":"1"}}',
        basic(username, "synthetic-password"),
        200
      ),
      {
        ok: false,
        detail: "OTLP/HTTP rejected 1 spans (partial success)",
      }
    );
  }
});

test("HTTP status stringification uses the collector boundary for failure and success details", async () => {
  for (const status of [400, 200]) {
    const result = await probe("", basic("synthetic-user", String(status)), status);
    assert.equal(result.ok, status === 200);
    assert.equal(result.detail?.includes(String(status)), false);
    assert.equal(
      result.detail,
      status === 200 ? "OTLP/HTTP status [REDACTED]" : "OTLP/HTTP permanent status [REDACTED]"
    );
  }
});

test("partial-success numeric and leading-zero string counts redact after numeric normalization", async () => {
  for (const rejectedSpans of [8675309, "0008675309"]) {
    assert.deepEqual(
      await probe(
        JSON.stringify({ partialSuccess: { rejectedSpans } }),
        basic("synthetic-user", "8675309"),
        200
      ),
      {
        ok: false,
        detail: "OTLP/HTTP rejected spans (partial success)",
      }
    );
  }
});

test("redact a complete secret before the 256-character excerpt boundary", async () => {
  const password = "synthetic/secret";
  const result = await probe("z".repeat(250) + password, basic("synthetic-user", password));
  assert.equal(
    result.detail,
    "OTLP/HTTP permanent status 400: " + ("z".repeat(250) + "[REDACTED]").slice(0, 256)
  );
  assert.equal(result.detail?.includes("synt"), false);
});

test("raw header, token, UTF-8 username, password and pair registered forms are actually echoed", async () => {
  const username = "synthetic-üsér/🔐-name";
  const password = "synthetic-päss/🔐-secret";
  const pair = `${username}:${password}`;
  const token = Buffer.from(pair).toString("base64");
  const header = `Basic ${token}`;
  const headers = { Authorization: header };
  for (const encode of [
    (s: string) => s,
    (s: string) => JSON.stringify(s).slice(1, -1),
    encodeURIComponent,
    (s: string) =>
      s.replace(/[\u0080-\uffff]/g, (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`),
    (s: string) =>
      s.replace(
        /[\u0080-\uffff]/g,
        (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()}`
      ),
  ]) {
    const body = [header, token, username, password, pair].map(encode).join(" | ");
    const result = await probe(body, headers);
    assert.equal(result.ok, false);
    assert.match(result.detail!, /\[REDACTED\]/);
    for (const value of [header, token, username, password, pair]) {
      assert.equal(result.detail!.includes(value), false);
      assert.equal(result.detail!.includes(encode(value)), false);
    }
  }
});
