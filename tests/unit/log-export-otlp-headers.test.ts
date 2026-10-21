import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { once } from "node:events";
import { spawn } from "node:child_process";
import { DatabaseSync } from "node:sqlite";
import test from "node:test";
import {
  buildOtlpPayload,
  otlpHttpConfigSchema,
  otlpHttpDestination,
} from "../../src/lib/logExport/destinations/otlpHttp.ts";
import { attachExportBodies } from "../../src/lib/usage/callLogExportQueries.ts";
import type { LogExportRecord } from "../../src/lib/logExport/types.ts";
import type { ExportChildReply } from "../../src/lib/logExport/childProtocol.ts";

const row: LogExportRecord = {
  id: "headers-fixture",
  timestamp: "2026-10-13T00:00:02.000Z",
  method: "POST",
  path: "/v1/chat/completions",
  status: 200,
  model: "example-model",
  requestedModel: null,
  provider: "example",
  providerDisplay: null,
  account: null,
  connectionId: null,
  duration: 2000,
  ttftMs: 250,
  tokensIn: 10,
  tokensOut: 20,
  tokensCacheRead: null,
  tokensCacheWrite: null,
  tokensReasoning: null,
  tokensCompressed: null,
  cacheSource: null,
  requestType: null,
  sourceFormat: null,
  targetFormat: null,
  apiKeyId: null,
  apiKeyName: null,
  comboName: null,
  comboStepId: null,
  comboExecutionKey: null,
  errorSummary: null,
  errorType: null,
  correlationId: null,
  sessionTag: null,
  modelPinned: false,
  detailState: "none",
  hasRequestBody: false,
  hasResponseBody: false,
  hasPipelineDetails: false,
  requestBody: null,
  responseBody: null,
  pipelineRouteDecision: null,
  pipelineClientRequest: null,
  pipelineOpenaiRequest: null,
  pipelineProviderRequest: null,
  pipelineProviderResponse: null,
  pipelineClientResponse: null,
  pipelineError: null,
  bodiesTruncated: false,
};
const config = (extra: Record<string, unknown> = {}) =>
  otlpHttpConfigSchema.parse({
    endpoint: "http://127.0.0.1:1/v1/traces",
    ...extra,
  });
const arr = (...values: string[]) => ({
  arrayValue: { values: values.map((stringValue) => ({ stringValue })) },
});
const snapshot = (headers: unknown) =>
  JSON.stringify({ headers, body: { model: "example-model" } });
const spans = (payload: ReturnType<typeof buildOtlpPayload>) =>
  payload.resourceSpans[0].scopeSpans[0].spans;
const attrs = (record: LogExportRecord, extra: Record<string, unknown> = {}) =>
  Object.fromEntries(
    spans(buildOtlpPayload([record], config(extra)))[0].attributes.map(({ key, value }) => [
      key,
      value,
    ])
  );
const headerAttrs = (record: LogExportRecord, extra: Record<string, unknown> = {}) =>
  Object.fromEntries(
    Object.entries(attrs(record, extra)).filter(([key]) => key.startsWith("http.request.header."))
  );

test("header capture defaults off, does not read snapshots, and has an opt-in form field", () => {
  const record = {
    ...row,
    get pipelineClientRequest(): string {
      throw new Error("must not read");
    },
  };
  assert.deepEqual(buildOtlpPayload([record], config()), buildOtlpPayload([row], config()));
  assert.deepEqual(headerAttrs(record, { requestHeaderAllowlist: [] }), {});
  assert.deepEqual(config().requestHeaderAllowlist, []);
  const field = otlpHttpDestination.fields.find((f) => f.key === "requestHeaderAllowlist");
  assert.equal(field?.type, "textarea");
  assert.equal(field?.defaultValue, "");
});

test("exact/prefix capture preserves full lowercase names and OTLP string arrays in both modes", () => {
  const record = {
    ...row,
    pipelineClientRequest: snapshot({
      "X-Project": "one,two",
      "x-project": ["three", "four"],
      "X-OmniRoute-Meta-Team": "example-team",
      "X-OmniRoute-Meta-Task": ["task-a"],
      "User-Agent": "ExampleClient/1.0",
      "X-Other": "omit",
    }),
    pipelineProviderRequest: snapshot({ "X-Project": "provider-not-client" }),
  };
  const expected = {
    "http.request.header.x-project": arr("one,two", "three", "four"),
    "http.request.header.x-omniroute-meta-team": arr("example-team"),
    "http.request.header.x-omniroute-meta-task": arr("task-a"),
    "http.request.header.user-agent": arr("ExampleClient/1.0"),
  };
  for (const langfuseMapping of [false, true]) {
    const extra = {
      requestHeaderAllowlist: "X-Project, X-OmniRoute-Meta-*\nUser-Agent",
      langfuseMapping,
    };
    assert.deepEqual(headerAttrs(record, extra), expected);
    const all = attrs(record, extra);
    assert.deepEqual(all["user_agent.original"], { stringValue: "ExampleClient/1.0" });
    assert.equal(all["omniroute.metadata.team"], undefined);
    assert.equal(all["langfuse.observation.metadata.team"], undefined);
    assert.equal(JSON.stringify(all).includes("provider-not-client"), false);
  }
  assert.deepEqual(headerAttrs(record, { requestHeaderAllowlist: ["x-project"] }), {
    "http.request.header.x-project": expected["http.request.header.x-project"],
  });
});

test("allowlist accepts arrays/text, deduplicates case, and rejects unbounded/invalid patterns", () => {
  assert.deepEqual(
    config({ requestHeaderAllowlist: ["X-Project", "x-project", "X-OmniRoute-Meta-*"] })
      .requestHeaderAllowlist,
    ["x-project", "x-omniroute-meta-*"]
  );
  assert.deepEqual(config({ requestHeaderAllowlist: "X-A\r\nX-B" }).requestHeaderAllowlist, [
    "x-a",
    "x-b",
  ]);
  for (const requestHeaderAllowlist of [
    "*",
    "x-**",
    "x-*-team",
    "bad name",
    "X-Key",
    "x".repeat(257),
    "x-a\rb",
    [""],
    [3],
    Array(65).fill("x-a"),
  ]) {
    assert.equal(
      otlpHttpConfigSchema.safeParse({ endpoint: "http://localhost/", requestHeaderAllowlist })
        .success,
      false
    );
  }
});

test("credentials and gateway auth never export even under explicit or prefix selection", () => {
  const names = [
    "Authorization",
    "Proxy-Authorization",
    "Cookie",
    "Set-Cookie",
    "X-API-Key",
    "Api_Key",
    "X-Goog-Api-Key",
    "XI-API-Key",
    "X-Access-Token",
    "X-Secret",
    "X-Password",
    "X-Credential",
    "X-Runtime-Key",
    "X-Storage-State",
    "X-Capability",
    "X-OmniRoute-CLI-Token",
    "X-OmniRoute-Internal-Service-Token",
    "X-OmniRoute-Lease-Owner",
    "X-OmniRoute-Auth-Id",
    "X-OmniRoute-Self-Loop-Key-Id",
    "X-OmniRoute-Playground-Key-Id",
    "X-OmniRoute-Meta-Token",
    "X-OmniRoute-Meta-Secret",
  ];
  const headers = Object.fromEntries(names.map((name) => [name, "partially...masked"]));
  Object.assign(headers, { "X-Project": "allowed" });
  const record = { ...row, pipelineClientRequest: snapshot(headers) };
  assert.deepEqual(headerAttrs(record, { requestHeaderAllowlist: [...names, "x-project"] }), {
    "http.request.header.x-project": arr("allowed"),
  });
  assert.deepEqual(
    headerAttrs(record, { requestHeaderAllowlist: ["x-*", "a*", "p*", "c*", "s*"] }),
    {
      "http.request.header.x-project": arr("allowed"),
    }
  );
});

test("invalid names/types/control values and known credentials are omitted without coercion", () => {
  const headers = JSON.parse(
    '{"__proto__":"unsafe","constructor":"unsafe","prototype":"unsafe"}'
  ) as Record<string, unknown>;
  Object.assign(headers, {
    "bad name": "bad",
    "X-Key": "invalid-unicode-name",
    "x-null": null,
    "x-number": 42,
    "x-object": {},
    "x-mixed": ["ok", 3],
    "x-crlf": "one\r\ntwo",
    "x-control": "a\u0000b",
    "x-surrogate": "\ud800",
    "x-empty-array": [],
    "X-Duplicate": "ok",
    "x-duplicate": false,
    "x-empty": "",
    "x-tab": "a\tb",
    "x-known": "sk-proj-" + "a".repeat(30),
    "x-bearer": "Bearer synthetic-credential-value",
    "x-marker": "[REDACTED:auth_header]",
    "x-good": ["a,b", "c"],
  });
  assert.deepEqual(
    headerAttrs(
      { ...row, pipelineClientRequest: snapshot(headers) },
      {
        requestHeaderAllowlist: ["x-*", "bad*", "__proto__", "constructor", "prototype"],
      }
    ),
    {
      "http.request.header.x-empty": arr(""),
      "http.request.header.x-tab": arr("a\tb"),
      "http.request.header.x-good": arr("a,b", "c"),
    }
  );
});

test("header count, UTF-8 value bytes, array length and total bytes are bounded without clipping", () => {
  const headers: Record<string, unknown> = Object.fromEntries(
    Array.from({ length: 40 }, (_, i) => [`x-h${String(i).padStart(2, "0")}`, "v"])
  );
  assert.equal(
    Object.keys(
      headerAttrs(
        { ...row, pipelineClientRequest: snapshot(headers) },
        { requestHeaderAllowlist: "x-*" }
      )
    ).length,
    32
  );
  assert.deepEqual(
    headerAttrs(
      {
        ...row,
        pipelineClientRequest: snapshot({
          "x-over": "🙂".repeat(1025),
          "x-boundary": "🙂".repeat(1024),
          "x-array": Array(17).fill("v"),
        }),
      },
      { requestHeaderAllowlist: "x-*" }
    ),
    { "http.request.header.x-boundary": arr("🙂".repeat(1024)) }
  );
  const many = headerAttrs(
    {
      ...row,
      pipelineClientRequest: snapshot({
        "x-a": Array(4).fill("a".repeat(4000)),
        "x-b": "b".repeat(1000),
        "x-c": "ok",
      }),
    },
    { requestHeaderAllowlist: "x-*" }
  );
  assert.equal(many["http.request.header.x-b"], undefined);
  assert.deepEqual(many["http.request.header.x-c"], arr("ok"));
  assert.deepEqual(
    headerAttrs(
      {
        ...row,
        pipelineClientRequest: snapshot(
          Object.fromEntries(Array.from({ length: 257 }, (_, i) => [`x-${i}`, "v"]))
        ),
      },
      { requestHeaderAllowlist: "x-*" }
    ),
    {}
  );
  assert.deepEqual(
    headerAttrs(
      { ...row, pipelineClientRequest: snapshot({ "x-good": "v", body: "x".repeat(1024 * 1024) }) },
      { requestHeaderAllowlist: "x-*" }
    ),
    {}
  );
});

test("missing/corrupt/clipped snapshots cannot fall back to provider headers or contaminate rows", () => {
  for (const pipelineClientRequest of [
    null,
    "{broken",
    '{"headers":{"x-project":"v"}}…[truncated]',
    "null",
    "[]",
    '{"headers":[]}',
  ]) {
    assert.deepEqual(
      headerAttrs(
        {
          ...row,
          pipelineClientRequest,
          pipelineProviderRequest: snapshot({ "x-project": "provider" }),
        },
        { requestHeaderAllowlist: "x-project" }
      ),
      {}
    );
  }
  const records = ["first", "second", null].map((value, i) => ({
    ...row,
    id: `row-${i}`,
    pipelineClientRequest: value === null ? null : snapshot({ "x-project": value }),
  }));
  const values = spans(
    buildOtlpPayload(records, config({ requestHeaderAllowlist: "x-project" }))
  ).map((s) => s.attributes.find((a) => a.key === "http.request.header.x-project")?.value);
  assert.deepEqual(values, [arr("first"), arr("second"), undefined]);
});

test("actual hydration preserves clientRawRequest precedence, legacy clientRequest and clipping", async () => {
  for (const key of ["clientRawRequest", "clientRequest"]) {
    const hydrated = await attachExportBodies([{ rowId: 1, record: row }], 1024, async () => ({
      requestBody: null,
      responseBody: null,
      pipelinePayloads: {
        clientRequest: { headers: { "x-project": "legacy" } },
        [key]: { headers: { "x-project": key }, body: "small" },
        providerRequest: { headers: { "x-project": "provider" } },
      },
    }));
    assert.deepEqual(headerAttrs(hydrated[0].record, { requestHeaderAllowlist: "x-project" }), {
      "http.request.header.x-project": arr(key),
    });
  }
  const clipped = await attachExportBodies([{ rowId: 1, record: row }], 1024, async () => ({
    requestBody: null,
    responseBody: null,
    pipelinePayloads: {
      clientRawRequest: { headers: { "x-project": "present-before-clip" }, body: "x".repeat(3000) },
    },
  }));
  assert.equal(clipped[0].record.bodiesTruncated, true);
  assert.deepEqual(headerAttrs(clipped[0].record, { requestHeaderAllowlist: "x-project" }), {});
});

test("real HTTP send carries arrays as span attributes, not as collector transport headers", async () => {
  const received: {
    headers: http.IncomingHttpHeaders;
    payload: ReturnType<typeof buildOtlpPayload>;
  }[] = [];
  const server = http.createServer(async (req, res) => {
    const parts: Buffer[] = [];
    for await (const part of req) parts.push(Buffer.from(part));
    received.push({ headers: req.headers, payload: JSON.parse(Buffer.concat(parts).toString()) });
    res.writeHead(200).end();
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert.ok(address && typeof address !== "string");
  try {
    await otlpHttpDestination
      .createClient(
        config({
          endpoint: `http://127.0.0.1:${address.port}/v1/traces`,
          requestHeaderAllowlist: "x-project",
          headers: "X-Collector: transport-only",
        })
      )
      .send([{ ...row, pipelineClientRequest: snapshot({ "x-project": ["a,b", "c"] }) }]);
    assert.equal(received.length, 1);
    assert.equal(received[0].headers["x-project"], undefined);
    assert.equal(received[0].headers["x-collector"], "transport-only");
    assert.deepEqual(
      spans(received[0].payload)[0].attributes.find(
        (a) => a.key === "http.request.header.x-project"
      )?.value,
      arr("a,b", "c")
    );
  } finally {
    server.closeAllConnections();
    server.close();
    await once(server, "close");
  }
});

test("real export child hydrates persisted artifacts only with includeBodies and sends headers", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "otlp-header-child-"));
  const db = new DatabaseSync(path.join(dir, "storage.sqlite"));
  db.exec(`CREATE TABLE call_logs (id TEXT, timestamp TEXT, model TEXT, status INTEGER, path TEXT,
    provider TEXT, account TEXT, connection_id TEXT, artifact_relpath TEXT, detail_state TEXT,
    error_summary TEXT, has_pipeline_details INTEGER);
    CREATE TABLE provider_nodes (id TEXT, name TEXT, prefix TEXT);
    CREATE TABLE provider_connections (id TEXT, name TEXT, email TEXT);`);
  fs.mkdirSync(path.join(dir, "call_logs"));
  db.prepare(
    "INSERT INTO call_logs (id,timestamp,path,status,artifact_relpath,detail_state,has_pipeline_details) VALUES (?,?,?,200,?,'ready',1)"
  ).run(row.id, row.timestamp, row.path, "headers.json");
  fs.writeFileSync(
    path.join(dir, "call_logs/headers.json"),
    JSON.stringify({
      pipeline: {
        clientRawRequest: {
          headers: { "x-project": "persisted-client", Authorization: "[REDACTED]" },
        },
        providerRequest: { headers: { "x-project": "never-provider" } },
      },
    })
  );
  const insert = db.prepare(
    "INSERT INTO call_logs (id,timestamp,path,status,artifact_relpath,detail_state,has_pipeline_details) VALUES (?,?,?,200,?,'ready',1)"
  );
  for (const name of ["missing", "corrupt", "clipped"])
    insert.run(name, row.timestamp, row.path, `${name}.json`);
  fs.writeFileSync(path.join(dir, "call_logs/corrupt.json"), "{invalid-snapshot-content");
  fs.writeFileSync(
    path.join(dir, "call_logs/clipped.json"),
    JSON.stringify({
      pipeline: {
        clientRawRequest: { headers: { "x-project": "before-clip" }, body: "x".repeat(3000) },
      },
    })
  );
  db.close();
  const payloads: ReturnType<typeof buildOtlpPayload>[] = [];
  const server = http.createServer(async (req, res) => {
    const parts: Buffer[] = [];
    for await (const part of req) parts.push(Buffer.from(part));
    payloads.push(JSON.parse(Buffer.concat(parts).toString()));
    res.writeHead(200).end();
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert.ok(address && typeof address !== "string");
  try {
    for (const includeBodies of [false, true]) {
      const child = spawn(
        process.execPath,
        ["--import", "tsx/esm", "src/lib/logExport/exportChild.ts"],
        {
          env: {
            DATA_DIR: dir,
            NODE_ENV: "test",
            NODE_OPTIONS: process.env.NODE_OPTIONS,
            HOME: process.env.HOME,
            TMPDIR: process.env.TMPDIR,
          },
          stdio: ["ignore", "pipe", "pipe", "ipc"],
        }
      );
      let output = "";
      child.stderr!.on("data", (part) => {
        output += part.toString();
      });
      const replies: ExportChildReply[] = [];
      child.on("message", (message: ExportChildReply) => {
        replies.push(message);
        if (message.kind === "batch") child.send({ kind: "ack", cursorRowId: message.cursorRowId });
      });
      const timer = setTimeout(() => child.kill("SIGKILL"), 20000);
      try {
        child.send({
          kind: "start",
          destination: { id: "fixture", type: "otlp-http", name: "fixture" },
          config: config({
            endpoint: `http://127.0.0.1:${address.port}/v1/traces`,
            requestHeaderAllowlist: "x-project,Authorization",
          }),
          batchSize: 10,
          maxRowsPerRun: 10,
          includeBodies,
          maxBodyBytes: 1024,
          cursorRowId: 0,
        });
        const [code] = await once(child, "close");
        assert.equal(code, 0, output + JSON.stringify(replies));
        assert.deepEqual(
          replies.map((m) => m.kind),
          ["batch", "done"]
        );
        assert.deepEqual(replies[0], { kind: "batch", cursorRowId: 4, count: 4 });
      } finally {
        clearTimeout(timer);
        if (child.exitCode === null) child.kill("SIGKILL");
      }
      const sent = spans(payloads.at(-1)!)[0].attributes;
      assert.deepEqual(
        sent.find((a) => a.key === "http.request.header.x-project")?.value,
        includeBodies ? arr("persisted-client") : undefined
      );
      assert.equal(
        sent.some((a) => a.key === "http.request.header.authorization"),
        false
      );
      assert.equal(JSON.stringify(sent).includes("never-provider"), false);
      const batch = spans(payloads.at(-1)!);
      assert.equal(batch.length, 4);
      for (const span of batch.slice(1))
        assert.equal(
          span.attributes.some((a) => a.key.startsWith("http.request.header.")),
          false
        );
    }
    assert.equal(payloads.length, 2);
  } finally {
    server.closeAllConnections();
    server.close();
    await once(server, "close");
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
