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

const dir = fs.mkdtempSync(path.join(process.cwd(), "tests/.tmp-r3-credential-surfaces-"));
process.env.DATA_DIR = dir;
process.env.STORAGE_ENCRYPTION_KEY = "synthetic-fresh-review-encryption-key";
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
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
});

for (const mode of ["clipped slash JSON", "partial-success count"]) {
  test(
    mode + " must contain the configured Basic password across all public error surfaces",
    async () => {
      const password = mode === "clipped slash JSON" ? "synthetic/secret" : "8675309";
      const body =
        mode === "clipped slash JSON"
          ? JSON.stringify({
              error: "rejected " + password,
              padding: "x".repeat(70000),
            }).replaceAll("/", "\\/")
          : JSON.stringify({ partialSuccess: { rejectedSpans: password } });
      // The oversized slash response starts as valid JSON, then responseText clips it.
      assert.doesNotThrow(() => JSON.parse(body));
      const status = mode === "clipped slash JSON" ? 400 : 200;
      let requests = 0;
      const server = http.createServer(async (req, res) => {
        for await (const _ of req) {
        }
        requests++;
        res.writeHead(status, { "Content-Type": "application/json" }).end(body);
      });
      server.listen(0, "127.0.0.1");
      await once(server, "listening");
      const address = server.address();
      assert.ok(address && typeof address !== "string");
      const output: string[] = [];
      const originalError = console.error;
      let spawned = 0;
      console.error = (...args: unknown[]) => output.push(args.join(" "));
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
            Authorization: "Basic " + Buffer.from("synthetic-user:" + password).toString("base64"),
          },
          identitySalt: "a".repeat(64),
        });
        const probe = await otlpHttpDestination.createClient(config).test();
        const db = core.getDbInstance();
        db.exec("DELETE FROM call_logs");
        db.prepare(
          "INSERT INTO call_logs(id,timestamp,path,status,duration) VALUES(?,?,?,?,?)"
        ).run(
          "fresh-credential-row",
          "2026-10-13T00:00:02.000Z",
          "/v1/chat/completions",
          200,
          1000
        );
        const dest = dbDest.createLogExportDestination({
          name: "synthetic-credential-surfaces",
          type: "otlp-http",
          config: secrets.encryptDestinationConfig("otlp-http", config),
        });
        const result = await runner.runDestinationExport(dest);
        const saved = dbDest.getLogExportDestination(dest.id);
        assert.equal(probe.ok, false);
        assert.equal(result.success, false);
        assert.equal(result.cursorRowId, 0);
        assert.equal(saved?.cursorRowId, 0);
        assert.equal(requests, 2);
        assert.equal(spawned, 1);
        const surfaces = {
          "test detail": probe.detail,
          "runner error": result.error,
          "stored lastError": saved?.lastError,
          console: output.join("\n"),
        };
        console.log(
          "FRESH_CONTAINMENT",
          JSON.stringify({
            mode,
            responseBytes: Buffer.byteLength(body),
            surfaces: Object.fromEntries(
              Object.entries(surfaces).map(([name, value]) => [
                name,
                String(value).includes(password),
              ])
            ),
            testDetail: probe.detail,
            runnerError: result.error,
          })
        );
        assert.deepEqual(
          Object.fromEntries(
            Object.entries(surfaces).map(([name, value]) => [
              name,
              String(value).includes(password),
            ])
          ),
          {
            "test detail": false,
            "runner error": false,
            "stored lastError": false,
            console: false,
          },
          "plaintext configured credential escaped containment"
        );
      } finally {
        console.error = originalError;
        runner.__setLogExportChildOptionsForTest(null);
        server.closeAllConnections();
        server.close();
        await once(server, "close");
      }
    }
  );
}
