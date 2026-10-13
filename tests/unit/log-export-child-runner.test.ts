import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { monitorEventLoopDelay } from "node:perf_hooks";
import { spawn, type ChildProcess } from "node:child_process";
import { build } from "esbuild";
import { setTimeout as delay } from "node:timers/promises";

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "omni-export-child-"));
process.env.DATA_DIR = dir;
Object.assign(process.env, { NODE_ENV: "test" });
process.env.STORAGE_ENCRYPTION_KEY = "synthetic-child-test-key";
const core = await import("../../src/lib/db/core.ts");
const dbDest = await import("../../src/lib/db/logExportDestinations.ts");
const source = await import("../../src/lib/usage/callLogExportSource.ts");
const runner = await import("../../src/lib/logExport/runner.ts");
const secrets = await import("../../src/lib/logExport/secrets.ts");
const fixture = await import("./fixtures/logExportTestDestination.ts");
const output = path.join(dir, "received.jsonl");
const modulePath = path.join(import.meta.dirname, "fixtures/logExportTestDestination.ts");
const secret = "synthetic-secret-not-for-argv-or-env";
let child: ChildProcess | undefined;
type TestOptions = {
  modulePath: string;
  beforeAck?: () => Promise<void>;
  onSpawn?: (child: ChildProcess) => void;
};
const configure = (
  runner as unknown as { __setLogExportChildOptionsForTest?: (options: TestOptions | null) => void }
).__setLogExportChildOptionsForTest;

function options(beforeAck?: () => Promise<void>) {
  configure?.({
    modulePath,
    beforeAck,
    onSpawn: (spawned) => {
      child = spawned;
    },
  });
}
function destination(mode = "records", batchSize = 2) {
  return dbDest.createLogExportDestination({
    name: "fixture",
    type: fixture.testDestination.id,
    enabled: true,
    batchSize,
    maxRowsPerRun: 1000,
    includeBodies: true,
    config: secrets.encryptDestinationConfig(fixture.testDestination.id, { secret, output, mode }),
  });
}
function rows(count: number, artifactBytes = 0) {
  const db = core.getDbInstance();
  const insert = db.prepare(`INSERT INTO call_logs
    (id,timestamp,model,status,artifact_relpath,detail_state,has_request_body)
    VALUES (?, ?, 'fixture-model', 200, ?, ?, ?)`);
  fs.mkdirSync(path.join(dir, "call_logs"), { recursive: true });
  for (let i = 0; i < count; i++) {
    const rel = artifactBytes ? `artifact-${i}.json` : null;
    if (rel)
      fs.writeFileSync(
        path.join(dir, "call_logs", rel),
        JSON.stringify({
          requestBody: { text: "x".repeat(artifactBytes) },
          responseBody: null,
          pipeline: { clientRequest: { model: "fixture" } },
        })
      );
    insert.run(`row-${i}`, "2026-08-29T12:00:00.000Z", rel, rel ? "ready" : "none", rel ? 1 : 0);
  }
}
function received(): unknown[][] {
  return fs.existsSync(output)
    ? fs
        .readFileSync(output, "utf8")
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line) as unknown[])
    : [];
}
function assertGone() {
  assert.ok(child, "must spawn a separate OS process");
  assert.notEqual(child.pid, process.pid);
  assert.ok(
    child.exitCode !== null || child.signalCode !== null,
    "child must exit before the run returns"
  );
  assert.equal(child.listenerCount("message"), 0);
  assert.equal(child.listenerCount("error"), 0);
  assert.throws(() => process.kill(child!.pid!, 0), /ESRCH/);
}

test.beforeEach(() => {
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  fixture.register();
  child = undefined;
  options();
});
test.afterEach(() => {
  configure?.(null);
  delete process.env.OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS;
});
test.after(() => {
  core.resetDbInstance();
  fs.rmSync(dir, { recursive: true, force: true });
});

test("child records match old helpers across artifact, inline, disk, missing and corrupt details", async () => {
  rows(5, 2000);
  const db = core.getDbInstance();
  db.exec(
    "CREATE TABLE IF NOT EXISTS call_logs_v1_legacy (id TEXT, request_body TEXT, response_body TEXT, error TEXT)"
  );
  db.prepare("INSERT INTO call_logs_v1_legacy (id, request_body) VALUES (?, ?)").run(
    "row-1",
    '{"inline":true}'
  );
  db.prepare(
    "UPDATE call_logs SET artifact_relpath = NULL, detail_state = 'legacy-inline' WHERE id = 'row-1'"
  ).run();
  db.prepare(
    "UPDATE call_logs SET artifact_relpath = NULL, timestamp = '2026-08-30T12:00:00.000Z' WHERE id = 'row-2'"
  ).run();
  // Legacy names use local time, like the old dashboard resolver.
  const date = new Date("2026-08-30T12:00:00.000Z");
  const folder = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const time = `${String(date.getHours()).padStart(2, "0")}${String(date.getMinutes()).padStart(2, "0")}${String(date.getSeconds()).padStart(2, "0")}`;
  fs.mkdirSync(path.join(dir, "call_logs", folder), { recursive: true });
  fs.writeFileSync(
    path.join(dir, "call_logs", folder, `${time}_fixture-model_200.json`),
    '{"requestBody":{"disk":true}}'
  );
  fs.rmSync(path.join(dir, "call_logs/artifact-3.json"));
  fs.writeFileSync(path.join(dir, "call_logs/artifact-4.json"), "invalid-json");
  const summaries = source.getCallLogsForExport(0, 10);
  const expected = (await source.attachExportBodies(summaries)).map((row) => row.record);
  // Dashboard reads mark missing/corrupt references; restore original summaries for parity.
  db.prepare(
    "UPDATE call_logs SET artifact_relpath = 'artifact-3.json', detail_state = 'ready' WHERE id = 'row-3'"
  ).run();
  db.prepare("UPDATE call_logs SET detail_state = 'ready' WHERE id = 'row-4'").run();
  const dest = destination();
  assert.equal(source.countCallLogsAfterRowId(0), 5, "fixture rows survive dashboard hydration");
  const result = await runner.runDestinationExport(dest);
  assert.equal(result.success, true, result.error ?? "");
  assert.equal(result.exported, 5, JSON.stringify(result));
  assert.deepEqual(received().flat(), expected);
  assert.equal(
    (
      db.prepare("SELECT detail_state FROM call_logs WHERE id = 'row-4'").get() as {
        detail_state: string;
      }
    ).detail_state,
    "ready",
    "export must not write corrupt detail state"
  );
  assertGone();
});

test("large artifacts block the old hydration control but not the parent's event loop", async (t) => {
  rows(500, 300_000); // ~150 MB, bounded below the storage artifact limit per row.
  const dest = destination("discard", 25);
  async function measure(action: () => Promise<unknown>) {
    const histogram = monitorEventLoopDelay({ resolution: 2 });
    histogram.enable();
    await delay(25);
    await action();
    await delay(25);
    histogram.disable();
    return histogram.max / 1e6;
  }
  const isolated = await measure(async () => {
    const result = await runner.runDestinationExport(dest);
    assert.equal(result.exported, 500);
    assert.equal(result.success, true, result.error ?? "");
  });
  const control = await measure(() =>
    source.attachExportBodies(source.getCallLogsForExport(0, 500))
  );
  t.diagnostic(`event-loop max: child=${isolated.toFixed(2)}ms control=${control.toFixed(2)}ms`);
  // 80 ms tolerates CI scheduler/GC noise, but rules out the hundreds-of-ms
  // synchronous parsing/serialization burst of the same 500-artifact control.
  assert.ok(isolated < 80, `child event-loop delay ${isolated}ms`);
  assert.ok(control > 80, `old control must demonstrate blocking, got ${control}ms`);
  assertGone();
});

test("crash after two acknowledged batches retains cursor and records failure with no orphan", async () => {
  rows(8);
  const dest = destination("crash");
  const result = await runner.runDestinationExport(dest);
  assert.equal(result.success, false);
  assert.equal(result.exported, 4);
  assert.equal(result.batches, 2);
  assert.equal(result.cursorRowId, 4);
  assert.equal(dbDest.getLogExportDestination(dest.id)?.cursorRowId, 4);
  assert.equal(dbDest.getLogExportDestination(dest.id)?.lastStatus, "failure");
  assertGone();
});

test("hung destination is terminated at timeout, escalating past ignored SIGTERM", async () => {
  rows(2);
  process.env.OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS = "1500";
  const dest = destination("hang");
  const start = Date.now();
  const result = await runner.runDestinationExport(dest);
  assert.equal(result.success, false);
  assert.match(result.error ?? "", /timed out/);
  assert.ok(Date.now() - start < 5000);
  assert.equal(dbDest.getLogExportDestination(dest.id)?.lastStatus, "failure");
  assert.equal(result.cursorRowId, 0);
  assertGone();
  assert.equal(child?.signalCode, "SIGKILL");
});

test("secret travels over IPC only, not argv/env, and child gets explicit heap limit", async () => {
  rows(2);
  process.env.UNRELATED_SECRET = secret;
  try {
    const result = await runner.runDestinationExport(destination());
    assert.equal(result.success, true);
    const info = JSON.parse(fs.readFileSync(`${output}.process`, "utf8")) as {
      pid: number;
      argv: string[];
      execArgv: string[];
      env: Record<string, string>;
    };
    assert.notEqual(info.pid, process.pid);
    assert.equal(JSON.stringify(info.argv).includes(secret), false);
    assert.equal(JSON.stringify(info.env).includes(secret), false);
    assert.equal(info.env.STORAGE_ENCRYPTION_KEY, undefined);
    assert.ok(info.execArgv.includes("--max-old-space-size=512"));
    assertGone();
  } finally {
    delete process.env.UNRELATED_SECRET;
  }
});

test("slow acknowledgement prevents starting the next batch", async () => {
  rows(6);
  options(async () => {
    await delay(150);
  });
  const result = await runner.runDestinationExport(destination());
  assert.equal(result.success, true);
  const times = fs.readFileSync(`${output}.times`, "utf8").trim().split("\n").map(Number);
  assert.equal(times.length, 3);
  assert.ok(times[1] - times[0] >= 140, "second send must wait for ack");
  assert.ok(times[2] - times[1] >= 140, "third send must wait for ack");
  assertGone();
});

test("partial send failure retains the last acknowledged cursor and redacts the secret", async () => {
  rows(6);
  const dest = destination("fail");
  const result = await runner.runDestinationExport(dest);
  assert.equal(result.success, false);
  assert.equal(result.exported, 2);
  assert.equal(result.batches, 1);
  assert.equal(result.cursorRowId, 2);
  assert.equal(result.pendingAfterRun, 4);
  assert.equal(result.error?.includes(secret), false);
  assert.match(result.error ?? "", /REDACTED/);
  assert.equal(dbDest.getLogExportDestination(dest.id)?.cursorRowId, 2);
  assert.equal(dbDest.getLogExportDestination(dest.id)?.lastError, result.error);
  assertGone();
});

test("runtime resolver covers adjacent, standalone, cwd, TS development and missing layouts", async () => {
  const { resolveLogExportChild } = await import("../../src/lib/logExport/childRunner.ts");
  const relative = "src/lib/logExport/exportChild.js";
  const context = { moduleDir: "/module", cwd: "/cwd", entryFile: "/standalone/server.js" };
  for (const candidate of [
    "/module/exportChild.js",
    `/standalone/${relative}`,
    `/cwd/${relative}`,
  ]) {
    assert.deepEqual(
      resolveLogExportChild({ ...context, fileExists: (file) => file === candidate }),
      { childFile: candidate, execArgv: [] }
    );
  }
  assert.deepEqual(
    resolveLogExportChild({ ...context, fileExists: (file) => file === "/module/exportChild.ts" }),
    { childFile: "/module/exportChild.ts", execArgv: ["--import", "tsx/esm"] }
  );
  assert.deepEqual(resolveLogExportChild({ ...context, fileExists: () => false }), {
    childFile: `/standalone/${relative}`,
    execArgv: [],
  });
});

test("read-only opener rejects writes and leaves migration state untouched", async () => {
  rows(1);
  const before = core
    .getDbInstance()
    .prepare("SELECT * FROM _omniroute_migrations ORDER BY version")
    .all();
  const { openLogExportReadOnlyDb } = await import("../../src/lib/db/logExportReadOnly.ts");
  const db = openLogExportReadOnlyDb();
  try {
    assert.deepEqual(
      db.prepare("PRAGMA query_only").get(),
      Object.assign(Object.create(null), { query_only: 1 })
    );
    assert.throws(() => db.exec("DELETE FROM call_logs"), /readonly|read-only/);
  } finally {
    db.close();
  }
  assert.equal(source.countCallLogsAfterRowId(0), 1);
  assert.deepEqual(
    core.getDbInstance().prepare("SELECT * FROM _omniroute_migrations ORDER BY version").all(),
    before
  );
});

test("secret sanitization covers nested JSON credentials and multiline fragments", async () => {
  const { exportSecretValues, safeExportError } =
    await import("../../src/lib/logExport/safeExportError.ts");
  const credential = JSON.stringify({
    private_key: "synthetic-line-one\nsynthetic-line-two",
    token: "synthetic-nested-token",
  });
  const values = exportSecretValues({ credential }, ["credential"]);
  for (const value of [
    credential,
    "synthetic-line-one",
    "synthetic-line-two",
    "synthetic-nested-token",
  ]) {
    assert.equal(safeExportError(`error: ${value}`, values).includes(value), false);
  }
});

test("packaged ESM child bundles without server/Next imports and runs from a CommonJS standalone root", async () => {
  rows(2, 2000);
  const root = path.resolve(import.meta.dirname, "../..");
  fs.mkdirSync(path.join(root, ".tmp"), { recursive: true });
  const stage = fs.mkdtempSync(path.join(root, ".tmp/log-export-bundle-"));
  const childFile = path.join(stage, "src/lib/logExport/exportChild.js");
  try {
    fs.mkdirSync(path.dirname(childFile), { recursive: true });
    fs.writeFileSync(path.join(stage, "package.json"), '{"type":"commonjs"}');
    const { writeEsmWorkerScopes } = await import("../../scripts/build/colocate-standalone.mjs");
    writeEsmWorkerScopes([path.dirname(childFile)]);
    const policy = await import("../../scripts/build/pack-artifact-policy.ts");
    assert.deepEqual(
      policy.findUnexpectedArtifactPaths(
        ["src/lib/logExport/exportChild.js", "src/lib/logExport/package.json"],
        {
          exactPaths: policy.APP_STAGING_ALLOWED_EXACT_PATHS,
          prefixPaths: policy.APP_STAGING_ALLOWED_PATH_PREFIXES,
        }
      ),
      []
    );
    assert.ok(
      policy.PACK_ARTIFACT_REQUIRED_PATHS.includes("dist/src/lib/logExport/exportChild.js")
    );
    assert.ok(policy.PACK_ARTIFACT_REQUIRED_PATHS.includes("dist/src/lib/logExport/package.json"));
    const result = await build({
      entryPoints: [path.join(root, "src/lib/logExport/exportChild.ts")],
      outfile: childFile,
      bundle: true,
      platform: "node",
      packages: "external",
      format: "esm",
      metafile: true,
    });
    assert.ok(
      !Object.keys(result.metafile!.inputs).some((file) =>
        /db\/core|callLogs\.ts|next\//.test(file)
      ),
      "bundle must not initialize the server singleton"
    );
    const fixtureFile = path.join(stage, "fixture.mjs");
    await build({
      entryPoints: [modulePath],
      outfile: fixtureFile,
      bundle: true,
      platform: "node",
      packages: "external",
      format: "esm",
    });
    const processInfo = spawn(process.execPath, ["--max-old-space-size=512", childFile], {
      env: { DATA_DIR: dir, NODE_ENV: "test" },
      stdio: ["ignore", "pipe", "pipe", "ipc"],
    });
    let done = false;
    let error = "";
    processInfo.stderr?.on("data", (chunk: Buffer) => {
      error += chunk.toString();
    });
    const closed = new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => {
        processInfo.kill("SIGKILL");
      }, 10_000);
      processInfo.on("error", reject);
      processInfo.on(
        "message",
        (message: { kind: string; cursorRowId: number; message?: string }) => {
          if (message.kind === "batch")
            processInfo.send({ kind: "ack", cursorRowId: message.cursorRowId });
          if (message.kind === "done") done = true;
          if (message.kind === "error") error += message.message;
        }
      );
      processInfo.on("close", (code) => {
        clearTimeout(timer);
        code === 0 && done ? resolve() : reject(new Error(error));
      });
    });
    processInfo.send({
      kind: "start",
      destination: { id: "fixture", type: fixture.testDestination.id, name: "fixture" },
      config: { secret, output, mode: "records" },
      testModulePath: fixtureFile,
      batchSize: 2,
      maxRowsPerRun: 10,
      includeBodies: true,
      maxBodyBytes: 262144,
      cursorRowId: 0,
    });
    await closed;
    assert.equal(received().flat().length, 2);
  } finally {
    fs.rmSync(stage, { recursive: true, force: true });
  }
});
