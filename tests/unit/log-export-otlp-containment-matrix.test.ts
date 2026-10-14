import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { once } from "node:events";
import {
  otlpHttpDestination,
  otlpHttpConfigSchema,
} from "../../src/lib/logExport/destinations/otlpHttp.ts";

const dir = fs.mkdtempSync(path.join(process.cwd(), "tests/.tmp-r3-matrix-"));
process.env.DATA_DIR = dir;
process.env.STORAGE_ENCRYPTION_KEY = "synthetic-r3-matrix-encryption-key";
Object.assign(process.env, { NODE_ENV: "test" });
for (const key of [
  "HTTP_PROXY",
  "HTTPS_PROXY",
  "ALL_PROXY",
  "http_proxy",
  "https_proxy",
  "all_proxy",
])
  delete process.env[key];
const core = await import("../../src/lib/db/core.ts");
const dbDest = await import("../../src/lib/db/logExportDestinations.ts");
const secrets = await import("../../src/lib/logExport/secrets.ts");
const runner = await import("../../src/lib/logExport/runner.ts");

test.after(() => {
  runner.__setLogExportChildOptionsForTest(null);
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
});

function unicode(value: string, upper = false, nonAsciiOnly = false) {
  return value.replace(nonAsciiOnly ? /[\u0080-\uffff]/g : /[\s\S]/g, (char) => {
    const hex = char.charCodeAt(0).toString(16).padStart(4, "0");
    return `\\u${upper ? hex.toUpperCase() : hex}`;
  });
}
const encodings = {
  raw: (s: string) => s,
  "JSON-escaped": (s: string) => JSON.stringify(s).slice(1, -1),
  "slash-escaped": (s: string) => JSON.stringify(s).slice(1, -1).replaceAll("/", "\\/"),
  "unicode-lower": (s: string) => unicode(s),
  "unicode-upper": (s: string) => unicode(s, true),
  "URL-encoded": encodeURIComponent,
  // Mix literal ASCII, escaped ASCII, non-ASCII UTF-16 units and optional slash escapes.
  // Not arbitrary nested encodings or separately percent-encoded characters.
  mixed: (s: string) =>
    s.replace(/[\s\S]/g, (char, index: number) =>
      char === "/" ? "\\/" : char.charCodeAt(0) >= 128 || index % 2 ? unicode(char) : char
    ),
};
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
const shapes = [
  "valid JSON",
  "clipped JSON",
  "plain text",
  "read-cap straddle",
  "partial-success count",
] as const;

// Independent oracle for every registered form, plus every matrix encoding. Do not
// import the production secret-registration helper: a missing form must fail tests.
function registeredForms(
  username: string,
  password: string,
  config: ReturnType<typeof otlpHttpConfigSchema.parse>
) {
  const pair = `${username}:${password}`;
  const token = Buffer.from(pair).toString("base64");
  const values = [
    config.headers,
    config.identitySalt!,
    `Basic ${token}`,
    token,
    pair,
    username,
    password,
  ];
  const forms = new Set<string>();
  for (const value of values) {
    const json = JSON.stringify(value).slice(1, -1);
    for (const form of [
      value,
      json,
      encodeURIComponent(value),
      ...Object.values(encodings).map((encode) => encode(value)),
    ])
      forms.add(form);
    for (const form of [value, json]) {
      forms.add(unicode(form, false, true));
      forms.add(unicode(form, true, true));
    }
  }
  return [...forms].filter(Boolean);
}

function responseBody(shape: (typeof shapes)[number], encoded: string, encoding: string) {
  // Raw/URL echoes need JSON string framing; the other encoders already produce
  // JSON string contents. URL echoes remain encoded even inside valid JSON.
  const jsonContents =
    encoding === "raw" || encoding === "URL-encoded"
      ? JSON.stringify(encoded).slice(1, -1)
      : encoded;
  if (shape === "valid JSON") return `{"error":"rejected ${jsonContents}"}`;
  if (shape === "clipped JSON") return `{"error":"rejected ${encoded}`;
  if (shape === "plain text") return `collector rejected ${encoded}`;
  if (shape === "partial-success count")
    return `{"partialSuccess":{"rejectedSpans":"${jsonContents}","errorMessage":"${jsonContents}"}}`;
  const prefix = `{"error":"rejected ${jsonContents}","padding":"`;
  const encodedBytes = Buffer.byteLength(jsonContents);
  const start = 65536 - Math.max(1, Math.floor(encodedBytes / 2));
  const body =
    prefix + "x".repeat(start - Buffer.byteLength(prefix)) + jsonContents + ' trailing"}';
  assert.doesNotThrow(() => JSON.parse(body));
  assert.ok(start < 65536 && start + encodedBytes > 65536, "echo must straddle the byte read cap");
  return body;
}

// All 140 scenarios exercise test(), runDestinationExport(), real persistence and
// captured console. 50 also use the actual Node child; 90 select the existing Bun
// compatibility path under Node (selection simulation, not a Bun runtime claim).
// Real child selection: all clipped-JSON encodings (28), all remaining raw shapes
// (16), and the six remaining numeric-password partial-success encodings (6).
for (const credential of credentials) {
  for (const [encoding, encode] of Object.entries(encodings)) {
    for (const shape of shapes) {
      const realChild =
        shape === "clipped JSON" ||
        encoding === "raw" ||
        (credential.label === "numeric password" && shape === "partial-success count");
      test(`${credential.label} / ${encoding} / ${shape} / ${realChild ? "real child" : "in-process"}`, async (t) => {
        const encoded = encode(credential[credential.part]);
        const body = responseBody(shape, encoded, encoding);
        const status = shape === "partial-success count" ? 200 : 400;
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
        const output: string[] = [];
        const originalError = console.error;
        const originalWarn = console.warn;
        const originalBun = Object.getOwnPropertyDescriptor(process.versions, "bun");
        let spawned = 0;
        console.error = (...args: unknown[]) => output.push(args.join(" "));
        console.warn = (...args: unknown[]) => output.push(args.join(" "));
        if (!realChild)
          Object.defineProperty(process.versions, "bun", {
            configurable: true,
            value: "matrix-in-process-selection",
          });
        runner.__setLogExportChildOptionsForTest({
          modulePath: "",
          onSpawn: (child) => {
            spawned++;
            child.stdout?.on("data", (c: Buffer) => output.push(c.toString()));
            child.stderr?.on("data", (c: Buffer) => output.push(c.toString()));
          },
        });
        try {
          const token = Buffer.from(`${credential.username}:${credential.password}`).toString(
            "base64"
          );
          const config = otlpHttpConfigSchema.parse({
            endpoint: `http://127.0.0.1:${address.port}/v1/traces`,
            headers: { Authorization: `Basic ${token}` },
            identitySalt: "a".repeat(64),
          });
          const probe = await otlpHttpDestination.createClient(config).test();
          const db = core.getDbInstance();
          db.exec("DELETE FROM call_logs");
          db.prepare(
            "INSERT INTO call_logs(id,timestamp,path,status,duration) VALUES(?,?,?,?,?)"
          ).run("r3-matrix-row", "2026-10-13T00:00:02.000Z", "/v1/chat/completions", 200, 1000);
          const dest = dbDest.createLogExportDestination({
            name: "synthetic-matrix",
            type: "otlp-http",
            config: secrets.encryptDestinationConfig("otlp-http", config),
          });
          const result = await runner.runDestinationExport(dest);
          const saved = dbDest.getLogExportDestination(dest.id);
          assert.equal(probe.ok, false);
          assert.equal(result.success, false);
          assert.equal(result.cursorRowId, 0);
          assert.equal(saved?.cursorRowId, 0);
          assert.equal(saved?.lastStatus, "failure");
          assert.equal(requests, 2, "one test request and one export request; no retries");
          assert.equal(spawned, realChild ? 1 : 0);
          assert.ok(
            output.some((line) => line.includes("[LogExport]")),
            "capture the real runner console"
          );
          for (const [surface, value] of Object.entries({
            "test detail": probe.detail,
            "runner error": result.error,
            "persisted lastError": saved?.lastError,
            "captured console": output.join("\n"),
          })) {
            await t.test(surface, () => {
              assert.ok(value);
              for (const form of registeredForms(credential.username, credential.password, config))
                assert.equal(
                  value.includes(form),
                  false,
                  `${surface} contains registered credential form ${JSON.stringify(form)}`
                );
              assert.match(value, /OTLP\/HTTP/);
            });
          }
        } finally {
          console.error = originalError;
          console.warn = originalWarn;
          if (originalBun) Object.defineProperty(process.versions, "bun", originalBun);
          else Reflect.deleteProperty(process.versions, "bun");
          runner.__setLogExportChildOptionsForTest(null);
          server.closeAllConnections();
          server.close();
          await once(server, "close");
        }
      });
    }
  }
}
