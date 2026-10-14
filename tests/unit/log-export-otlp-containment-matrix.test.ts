import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { once } from "node:events";
import {
  otlpHttpDestination,
  otlpHttpConfigSchema,
} from "../../src/lib/logExport/destinations/otlpHttp.ts";

// Exhaustive encodings go through the real in-process client and one loopback
// collector, not hundreds of DB writes/child startups. Integration lives in the
// reviewer probes and credential-surfaces tests.
function unicode(value: string, upper = false) {
  return value.replace(/[\s\S]/g, (char) => {
    const hex = char.charCodeAt(0).toString(16).padStart(4, "0");
    return `\\u${upper ? hex.toUpperCase() : hex}`;
  });
}
const encodings = [
  { label: "literal", encode: (s: string) => JSON.stringify(s).slice(1, -1), jsonEscape: true },
  {
    label: "JSON-escaped",
    encode: (s: string) => JSON.stringify(s).slice(1, -1),
    jsonEscape: true,
  },
  {
    label: "slash-escaped",
    encode: (s: string) => JSON.stringify(s).slice(1, -1).replaceAll("/", "\\/"),
    jsonEscape: true,
  },
  { label: "unicode-lower", encode: (s: string) => unicode(s), jsonEscape: true },
  { label: "unicode-upper", encode: (s: string) => unicode(s, true), jsonEscape: true },
  {
    label: "unicode-mixed-case",
    encode: (s: string) =>
      unicode(s).replace(
        /\\u([0-9a-f]{4})/g,
        (_, hex) => `\\u${hex[0]}${hex[1].toUpperCase()}${hex[2]}${hex[3].toUpperCase()}`
      ),
    jsonEscape: true,
  },
  {
    label: "literal+escaped mixture",
    encode: (s: string) => s.replace(/[\u0080-\uffff]/gu, (c) => unicode(c)),
    jsonEscape: true,
  },
  {
    label: "surrogate-pair mixture",
    encode: (s: string) =>
      s.replace(
        /[\ud800-\udbff][\udc00-\udfff]/g,
        (pair) => unicode(pair[0], true) + unicode(pair[1])
      ),
    jsonEscape: true,
  },
  { label: "URL-encoded", encode: encodeURIComponent, jsonEscape: false },
  {
    label: "HTML decimal entities",
    encode: (s: string) => s.replace(/[\s\S]/g, (c) => `&#${c.charCodeAt(0)};`),
    jsonEscape: false,
  },
  {
    label: "HTML hex entities",
    encode: (s: string) => s.replace(/[\s\S]/g, (c) => `&#x${c.charCodeAt(0).toString(16)};`),
    jsonEscape: false,
  },
  { label: "HTML named entity", encode: (s: string) => s + "&amp;", jsonEscape: false },
  {
    label: "nested JSON-in-JSON",
    encode: (s: string) => JSON.stringify({ error: unicode(s) }),
    jsonEscape: false,
  },
];
const credentials = [
  {
    label: "ASCII slash password",
    username: "synthetic-user",
    password: "synthetic/secret",
    part: "password",
  },
  {
    label: "UTF-8 password",
    username: "synthetic-user",
    password: "synthetic-päss/🔐-secret",
    part: "password",
  },
  { label: "numeric password", username: "synthetic-user", password: "8675309", part: "password" },
  {
    label: "UTF-8 username",
    username: "synthetic-üsér/🔐-name",
    password: "synthetic-password",
    part: "username",
  },
] as const;

test("loopback collector encoding/shape table contains credentials", async (t) => {
  let body = "";
  let status = 400;
  let requests = 0;
  const server = http.createServer(async (req, res) => {
    for await (const chunk of req) void chunk;
    requests++;
    res.writeHead(status, { "Content-Type": "application/json" }).end(body);
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert.ok(address && typeof address !== "string");
  const endpoint = `http://127.0.0.1:${address.port}/v1/traces`;
  async function probe(text: string, username: string, password: string, responseStatus = 400) {
    body = text;
    status = responseStatus;
    const before = requests;
    const result = await otlpHttpDestination
      .createClient(
        otlpHttpConfigSchema.parse({
          endpoint,
          headers: {
            Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
          },
          identitySalt: "a".repeat(64),
        })
      )
      .test();
    assert.equal(requests, before + 1, "no retry for permanent failure/partial rejection");
    return result;
  }
  try {
    for (const credential of credentials) {
      for (const { label, encode, jsonEscape } of encodings) {
        const secret = credential[credential.part];
        const encoded = encode(secret);
        const contents = jsonEscape ? encoded : JSON.stringify(encoded).slice(1, -1);
        for (const shape of [
          "complete JSON",
          "clipped JSON",
          "plain text",
          "read-cap straddle",
        ] as const) {
          await t.test(`${credential.label} / ${label} / ${shape}`, async () => {
            let text =
              shape === "complete JSON"
                ? `{"error":"rejected ${contents}"}`
                : shape === "clipped JSON"
                  ? `{"error":"rejected ${encoded}`
                  : `collector rejected ${encoded}`;
            if (shape === "read-cap straddle") {
              const prefix = `{"error":"rejected ${contents}","padding":"`;
              const start = 65536 - Math.max(1, Math.floor(Buffer.byteLength(contents) / 2));
              text =
                prefix + "x".repeat(start - Buffer.byteLength(prefix)) + contents + ' trailing"}';
              assert.doesNotThrow(() => JSON.parse(text));
              assert.ok(Buffer.byteLength(text) > 65536);
            }
            const result = await probe(text, credential.username, credential.password);
            assert.equal(result.ok, false);
            assert.match(result.detail!, /OTLP\/HTTP permanent status 400/);
            // The oracle checks both literal containment and whether an excerpt
            // was withheld, independently of production's registration helper.
            const decoded = shape === "complete JSON" ? JSON.parse(text).error : text;
            const withheld = /\\|%[0-9a-f]{2}|&#\d+;|&#x[0-9a-f]+;|&[a-z][a-z0-9]*;/i.test(decoded);
            assert.ok(
              result.detail!.includes(withheld ? "[response excerpt withheld]" : "[REDACTED]")
            );
            assert.equal(result.detail!.includes(secret), false);
            if (encoded !== secret) assert.equal(result.detail!.includes(encoded), false);
          });
        }
      }
    }
    for (const rejectedSpans of [8675309, "8675309", "0008675309"]) {
      await t.test(
        `partial-success count equals numeric password: ${JSON.stringify(rejectedSpans)}`,
        async () => {
          assert.deepEqual(
            await probe(
              JSON.stringify({ partialSuccess: { rejectedSpans } }),
              "synthetic-user",
              "8675309",
              200
            ),
            {
              ok: false,
              detail: "OTLP/HTTP rejected spans (partial success)",
            }
          );
        }
      );
    }
    for (const [label, text, expected] of [
      [
        "clean plain text",
        "collector rejected unsupported schema",
        "collector rejected unsupported schema",
      ],
      [
        "clean complete JSON stays readable",
        '{ "error": "unsupported schema", "code": 3 }',
        '{"error":"unsupported schema","code":3}',
      ],
      ["plain text stray backslash", "collector path \\ unrelated", "[response excerpt withheld]"],
      [
        "decoded JSON backslash",
        JSON.stringify({ error: "path \\ unrelated" }),
        "[response excerpt withheld]",
      ],
      ["encoding in JSON key", JSON.stringify({ "%41": "clean" }), "[response excerpt withheld]"],
      [
        "encoding in nested array leaf",
        JSON.stringify({ items: [null, { error: "&amp;" }] }),
        "[response excerpt withheld]",
      ],
      [
        "encoding after excerpt boundary",
        JSON.stringify({ padding: "x".repeat(300), error: "&#x41;" }),
        "[response excerpt withheld]",
      ],
      [
        "truncated parseable prefix is raw",
        '{"error":"\\u0041"}' +
          " ".repeat(65536 - Buffer.byteLength('{"error":"\\u0041"}')) +
          "tail",
        "[response excerpt withheld]",
      ],
      [
        "redact before clipping",
        "z".repeat(250) + "synthetic/secret",
        ("z".repeat(250) + "[REDACTED]").slice(0, 256),
      ],
    ]) {
      await t.test(label, async () => {
        assert.deepEqual(await probe(text, "synthetic-user", "synthetic/secret"), {
          ok: false,
          detail: `OTLP/HTTP permanent status 400: ${expected}`,
        });
      });
    }
  } finally {
    server.closeAllConnections();
    server.close();
    await once(server, "close");
  }
});
