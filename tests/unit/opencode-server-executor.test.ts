import assert from "node:assert/strict";
import test from "node:test";
import http from "node:http";
import type { AddressInfo } from "node:net";

const TEST_DATA_DIR = process.env.DATA_DIR;

type Captured = { method: string; url: string; body: any };

/**
 * Minimal stand-in for `opencode serve`.
 *
 * The executor must never be unit-tested against a real opencode binary: the
 * whole point of this suite is the wire translation (OpenAI chat/Responses in,
 * session/parts out) and that is fully described by these four endpoints.
 */
async function startFakeServer(): Promise<{
  url: string;
  close: () => Promise<void>;
  calls: Captured[];
  lastPrompt: () => Captured | undefined;
  setAssistantText: (text: string) => void;
}> {
  const calls: Captured[] = [];
  const eventLog = new Map<string, any[]>();
  let assistantText = "OK";
  let sessionSeq = 0;

  const server = http.createServer((req, res) => {
    const url = req.url || "/";

    // The shared /event stream is long-lived and must be claimed before any
    // body/route handling, otherwise the catch-all below would 404 it.
    if (url.startsWith("/event")) {
      res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache" });
      res.write(`data: ${JSON.stringify({ type: "server.connected", properties: {} })}\n\n`);
      // Replay: the executor opens the shared stream lazily, so frames emitted
      // before it connected would otherwise be lost and the turn would hang.
      for (const frames of eventLog.values()) {
        for (const frame of frames) res.write(`data: ${JSON.stringify(frame)}\n\n`);
      }
      eventClients.add(res);
      req.on("close", () => eventClients.delete(res));
      return;
    }

    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      let body: any = null;
      try {
        body = raw ? JSON.parse(raw) : null;
      } catch {
        body = null;
      }
      calls.push({ method: req.method || "GET", url, body });

      const json = (status: number, payload: unknown) => {
        res.writeHead(status, { "content-type": "application/json" });
        res.end(JSON.stringify(payload));
      };

      if (url === "/global/health") return json(200, { healthy: true, version: "0.0.0-test" });

      if (url === "/config/providers") {
        return json(200, {
          default: { opencode: "test-model" },
          providers: [
            {
              id: "opencode",
              name: "OpenCode",
              models: {
                "test-model": {
                  id: "test-model",
                  name: "Test Model",
                  cost: { input: 0, output: 0 },
                  limit: { context: 200000, output: 8192 },
                  capabilities: { toolcall: true, reasoning: true },
                },
                "paid-model": {
                  id: "paid-model",
                  name: "Paid Model",
                  cost: { input: 2.5, output: 15 },
                  limit: { context: 100000 },
                  capabilities: { toolcall: false, reasoning: false },
                },
              },
            },
          ],
        });
      }

      if (url === "/session" && req.method === "POST") {
        sessionSeq += 1;
        return json(200, { id: `ses_test_${sessionSeq}`, title: body?.title });
      }

      const messageMatch = /^\/session\/([^/]+)\/message$/.exec(url);
      if (messageMatch && req.method === "POST") {
        return json(200, {
          info: {
            id: "msg_assistant",
            role: "assistant",
            sessionID: messageMatch[1],
            finish: "stop",
            tokens: { input: 12, output: 3, reasoning: 1, cache: { read: 8, write: 0 } },
          },
          parts: [
            { type: "step-start", id: "prt_1", messageID: "msg_assistant" },
            { type: "text", id: "prt_2", messageID: "msg_assistant", text: assistantText },
            { type: "step-finish", id: "prt_3", messageID: "msg_assistant" },
          ],
        });
      }

      const asyncMatch = /^\/session\/([^/]+)\/prompt_async$/.exec(url);
      if (asyncMatch && req.method === "POST") {
        res.writeHead(204);
        res.end();
        // Deliver the same shape the real server emits on /event.
        setTimeout(() => {
          broadcast(asyncMatch[1]);
        }, 10);
        return;
      }

      if (/^\/session\/[^/]+$/.test(url) && req.method === "DELETE") return json(200, true);

      return json(404, { name: "NotFound", data: { message: `no route for ${url}` } });
    });
  });

  const eventClients = new Set<http.ServerResponse>();
  function broadcast(sessionID: string): void {
    const frames = [
      { type: "message.updated", properties: { info: { id: "msg_assistant", role: "assistant", sessionID } } },
      {
        type: "message.part.delta",
        properties: { sessionID, messageID: "msg_assistant", partID: "prt_2", field: "text", delta: assistantText },
      },
      { type: "session.idle", properties: { sessionID } },
    ];
    eventLog.set(sessionID, frames);
    for (const client of eventClients) {
      for (const frame of frames) client.write(`data: ${JSON.stringify(frame)}\n\n`);
    }
  }

  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address() as AddressInfo;

  return {
    url: `http://127.0.0.1:${address.port}`,
    calls,
    lastPrompt: () => [...calls].reverse().find((call) => call.url.endsWith("/message")),
    setAssistantText: (text: string) => {
      assistantText = text;
    },
    close: () =>
      new Promise<void>((resolve) => {
        for (const client of eventClients) client.end();
        server.close(() => resolve());
      }),
  };
}

void TEST_DATA_DIR;

test("opencode-server: maps a chat request onto an opencode session turn", async () => {
  const fake = await startFakeServer();
  process.env.OPENCODE_SERVER_URL = fake.url;
  process.env.OPENCODE_SERVER_AUTOSTART = "0";
  const { OpencodeServerExecutor } = await import("../../open-sse/executors/opencodeServer.ts");
  const { clearOpencodeServerSettingsCache } = await import("../../open-sse/executors/opencodeServer.ts");
  clearOpencodeServerSettingsCache();

  try {
    const executor = new OpencodeServerExecutor();
    const result = await executor.execute({
      model: "opencode-server/test-model",
      body: {
        messages: [
          { role: "system", content: "be terse" },
          { role: "user", content: "hi" },
        ],
      },
      stream: false,
      credentials: {} as any,
    });

    assert.equal(result.response.status, 200);
    const payload = (await result.response.json()) as any;
    assert.equal(payload.object, "chat.completion");
    assert.equal(payload.choices[0].message.content, "OK");
    assert.equal(payload.choices[0].finish_reason, "stop");
    // input 12 + cache.read 8
    assert.equal(payload.usage.prompt_tokens, 20);
    assert.equal(payload.usage.completion_tokens_details.reasoning_tokens, 1);

    const prompt = fake.lastPrompt();
    assert.ok(prompt, "expected a POST to /session/:id/message");
    // `system` is a STRING on purpose: on the server it replaces the agent
    // system prompt (~6.8k tokens) instead of appending to it.
    assert.equal(typeof prompt.body.system, "string");
    assert.match(prompt.body.system, /be terse/);
    // Tools must be disabled, otherwise the agent toolset is injected again.
    assert.deepEqual(prompt.body.tools, {});
    assert.equal(prompt.body.model.providerID, "opencode");
    assert.equal(prompt.body.model.modelID, "test-model");
    assert.equal(prompt.body.parts[0].type, "text");
    assert.match(prompt.body.parts[0].text, /\[user\] hi/);
  } finally {
    await fake.close();
  }
});

test("opencode-server: unknown model fails loudly instead of hitting the upstream", async () => {
  const fake = await startFakeServer();
  process.env.OPENCODE_SERVER_URL = fake.url;
  process.env.OPENCODE_SERVER_AUTOSTART = "0";
  const { OpencodeServerExecutor, clearOpencodeServerSettingsCache } = await import(
    "../../open-sse/executors/opencodeServer.ts"
  );
  clearOpencodeServerSettingsCache();

  try {
    const executor = new OpencodeServerExecutor();
    await assert.rejects(
      executor.execute({
        model: "opencode-server/does-not-exist",
        body: { messages: [{ role: "user", content: "hi" }] },
        stream: false,
        credentials: {} as any,
      }),
      /unknown model/
    );
  } finally {
    await fake.close();
  }
});

test("opencode-server: streaming forwards deltas and terminates with [DONE]", async () => {
  const fake = await startFakeServer();
  fake.setAssistantText("streamed-text");
  process.env.OPENCODE_SERVER_URL = fake.url;
  process.env.OPENCODE_SERVER_AUTOSTART = "0";
  const { OpencodeServerExecutor, clearOpencodeServerSettingsCache } = await import(
    "../../open-sse/executors/opencodeServer.ts"
  );
  clearOpencodeServerSettingsCache();

  try {
    const executor = new OpencodeServerExecutor();
    const result = await executor.execute({
      model: "opencode-server/test-model",
      body: { messages: [{ role: "user", content: "hi" }] },
      stream: true,
      credentials: {} as any,
    });

    assert.equal(result.response.status, 200);
    const raw = await result.response.text();
    assert.match(raw, /"content":"streamed-text"/);
    assert.match(raw, /"finish_reason":"stop"/);
    assert.match(raw, /data: \[DONE\]/);
    // The async prompt path must be used, never the blocking one.
    assert.ok(fake.calls.some((call) => call.url.endsWith("/prompt_async")));
  } finally {
    await fake.close();
  }
});

test("opencode-server: tool envelope becomes OpenAI tool_calls", async () => {
  const fake = await startFakeServer();
  fake.setAssistantText('{"tool_calls":[{"name":"get_weather","arguments":{"city":"Lisboa"}}]}');
  process.env.OPENCODE_SERVER_URL = fake.url;
  process.env.OPENCODE_SERVER_AUTOSTART = "0";
  const { OpencodeServerExecutor, clearOpencodeServerSettingsCache } = await import(
    "../../open-sse/executors/opencodeServer.ts"
  );
  clearOpencodeServerSettingsCache();

  try {
    const executor = new OpencodeServerExecutor();
    const result = await executor.execute({
      model: "opencode-server/test-model",
      body: {
        messages: [{ role: "user", content: "weather in Lisboa?" }],
        tools: [
          {
            type: "function",
            function: { name: "get_weather", description: "weather", parameters: { type: "object" } },
          },
        ],
        tool_choice: "required",
      },
      stream: false,
      credentials: {} as any,
    });

    const payload = (await result.response.json()) as any;
    assert.equal(payload.choices[0].finish_reason, "tool_calls");
    assert.equal(payload.choices[0].message.content, null);
    assert.equal(payload.choices[0].message.tool_calls[0].function.name, "get_weather");
    assert.deepEqual(JSON.parse(payload.choices[0].message.tool_calls[0].function.arguments), {
      city: "Lisboa",
    });
  } finally {
    await fake.close();
  }
});

test("opencode-server: Responses input produces a Responses payload", async () => {
  const fake = await startFakeServer();
  process.env.OPENCODE_SERVER_URL = fake.url;
  process.env.OPENCODE_SERVER_AUTOSTART = "0";
  const { OpencodeServerExecutor, clearOpencodeServerSettingsCache } = await import(
    "../../open-sse/executors/opencodeServer.ts"
  );
  clearOpencodeServerSettingsCache();

  try {
    const executor = new OpencodeServerExecutor();
    const result = await executor.execute({
      model: "opencode-server/test-model",
      body: { input: "just say OK" },
      stream: false,
      credentials: {} as any,
    });

    const payload = (await result.response.json()) as any;
    assert.equal(payload.object, "response");
    assert.equal(payload.status, "completed");
    assert.equal(payload.output_text, "OK");
    assert.equal(payload.usage.input_tokens, 20);
  } finally {
    await fake.close();
  }
});