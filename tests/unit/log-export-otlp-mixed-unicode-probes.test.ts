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

// Adapted from the independent reviewer's mixed-unicode-probes.test.ts.
// Keep the recoverability oracle independent of production secret spellings.
const dir = fs.mkdtempSync(path.join(process.cwd(), "tests/.tmp-r4-reviewer-"));
process.env.DATA_DIR = dir;
process.env.STORAGE_ENCRYPTION_KEY = "synthetic-independent-review-key";
Object.assign(process.env, { NODE_ENV: "test", NO_PROXY: "*", no_proxy: "*" });
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

const password = "synthetic-päss/🔐-secret";
const echoes = [
  ["mixed literal and escaped Unicode", "synthetic-p\\u00e4ss/🔐-secret"],
  ["mixed hex case", "synthetic-p\\u00e4ss/\\uD83d\\udd10-secret"],
] as const;
function decodeUnicode(value: string) {
  return value.replace(/\\u([0-9a-f]{4})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}
const cases = [
  {
    label: "minimal malformed JSON with mixed Unicode",
    body: '{"error":"rejected synthetic-p\\u00e4ss/🔐-secret',
    withheld: true,
  },
  ...echoes.flatMap(([label, encoded]) => {
    assert.equal(JSON.parse('"' + encoded + '"'), password);
    return [false, true].map((oversized) => {
      const body = `{"error":"rejected ${encoded}","padding":"${"x".repeat(oversized ? 70000 : 0)}"}`;
      assert.doesNotThrow(() => JSON.parse(body));
      if (oversized) assert.ok(Buffer.byteLength(body) > 65536);
      return {
        label: `${label} / ${oversized ? "valid JSON clipped at read cap" : "valid complete JSON"}`,
        body,
        withheld: oversized,
      };
    });
  }),
];
for (const { label, body, withheld } of cases) {
  test(label, async (t) => {
    let requests = 0;
    const server = http.createServer(async (req, res) => {
      for await (const chunk of req) void chunk;
      requests++;
      res.writeHead(400, { "Content-Type": "application/json" }).end(body);
    });
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    const output: string[] = [];
    const originalError = console.error;
    console.error = (...args: unknown[]) => output.push(args.join(" "));
    let spawned = 0;
    runner.__setLogExportChildOptionsForTest({
      modulePath: "",
      onSpawn: (child) => {
        spawned++;
        child.stdout?.on("data", (c: Buffer) => output.push(c.toString()));
        child.stderr?.on("data", (c: Buffer) => output.push(c.toString()));
      },
    });
    try {
      const config = otlpHttpConfigSchema.parse({
        endpoint: `http://127.0.0.1:${address.port}/v1/traces`,
        headers: {
          Authorization: `Basic ${Buffer.from(`reviewer-user:${password}`).toString("base64")}`,
        },
        identitySalt: "a".repeat(64),
      });
      const probe = await otlpHttpDestination.createClient(config).test();
      const db = core.getDbInstance();
      db.exec("DELETE FROM call_logs");
      db.prepare("INSERT INTO call_logs(id,timestamp,path,status,duration) VALUES(?,?,?,?,?)").run(
        "independent-row",
        "2026-10-13T00:00:02.000Z",
        "/v1/chat/completions",
        200,
        1000
      );
      const dest = dbDest.createLogExportDestination({
        name: "independent-probe",
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
      assert.equal(requests, 2);
      assert.equal(spawned, 1, "must use the actual Node child");
      assert.ok(output.some((line) => line.includes("[LogExport]")));
      const surfaces = {
        "test detail": probe.detail,
        "runner error": result.error,
        "persisted lastError": saved?.lastError,
        "captured console": output.join("\n"),
      };
      for (const [surface, value] of Object.entries(surfaces)) {
        await t.test(surface, () => {
          assert.ok(value);
          assert.equal(
            decodeUnicode(value).includes(password),
            false,
            `${surface} contains recoverable Basic password: ${value}`
          );
          assert.match(value, /OTLP\/HTTP permanent status 400/);
          assert.ok(value.includes(withheld ? "[response excerpt withheld]" : "[REDACTED]"));
        });
      }
    } finally {
      console.error = originalError;
      runner.__setLogExportChildOptionsForTest(null);
      server.closeAllConnections();
      server.close();
      await once(server, "close");
    }
  });
}
