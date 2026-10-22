import test from "node:test";
import assert from "node:assert/strict";

const { AbitChatGptRelayExecutor, buildAbitChatGptRelayPrompt } =
  await import("@omniroute/open-sse/executors/abit-chatgpt-relay");

const originalFetch = globalThis.fetch;

test.afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("buildAbitChatGptRelayPrompt preserves system/user/assistant transcript", () => {
  const prompt = buildAbitChatGptRelayPrompt({
    messages: [
      { role: "system", content: "Use project instructions." },
      { role: "user", content: "Status?" },
      { role: "assistant", content: "Working." },
      { role: "user", content: [{ type: "text", text: "Continue." }] },
    ],
  });

  assert.match(prompt, /\[SYSTEM\]\nUse project instructions\./);
  assert.match(prompt, /\[USER\]\nStatus\?/);
  assert.match(prompt, /\[ASSISTANT\]\nWorking\./);
  assert.match(prompt, /\[USER\]\nContinue\./);
});

test("non-streaming executor sends the request through the local ABiT relay", async () => {
  let capturedUrl = "";
  let capturedAuth = "";
  let capturedBody: Record<string, unknown> = {};

  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    capturedUrl = String(url);
    capturedAuth = String((init?.headers as Record<string, string>)?.Authorization || "");
    capturedBody = JSON.parse(String(init?.body || "{}"));
    const relayBody = [
      JSON.stringify({ type: "heartbeat" }),
      JSON.stringify({ type: "progress", response: "RELAY" }),
      JSON.stringify({
        type: "complete",
        result: {
          response: "RELAY_OK",
          project: { id: "g-p-test", name: "Development_AGENT_Development" },
        },
      }),
      "",
    ].join("\n");
    return new Response(relayBody, {
      status: 200,
      headers: { "Content-Type": "application/x-ndjson" },
    });
  }) as typeof fetch;

  const executor = new AbitChatGptRelayExecutor();
  const { response } = await executor.execute({
    model: "project-management",
    body: { messages: [{ role: "user", content: "Reply RELAY_OK" }] },
    stream: false,
    credentials: {
      apiKey: "relay-secret",
      projectId: "g-p-test",
      providerSpecificData: {
        baseUrl: "http://127.0.0.1:8794/chatgpt-relay",
        projectName: "Development_AGENT_Development",
      },
    },
  });

  assert.equal(capturedUrl, "http://127.0.0.1:8794/chatgpt-relay/relay");
  assert.equal(capturedAuth, "Bearer relay-secret");
  assert.equal(capturedBody.project_name, "Development_AGENT_Development");
  assert.equal(capturedBody.chatgpt_project_id, "g-p-test");
  assert.equal(capturedBody.close_on_complete, true);
  assert.equal(capturedBody.stream, true);
  assert.equal(response.status, 200);

  const body = await response.json();
  assert.equal(body.object, "chat.completion");
  assert.equal(body.choices[0].message.content, "RELAY_OK");
  assert.equal(body.choices[0].finish_reason, "stop");
});

test("streaming executor converts relay NDJSON progress into OpenAI SSE deltas", async () => {
  globalThis.fetch = (async () => {
    const body = [
      JSON.stringify({ type: "progress", response: "Hello" }),
      JSON.stringify({ type: "progress", response: "Hello world" }),
      JSON.stringify({ type: "complete", result: { response: "Hello world!" } }),
      "",
    ].join("\n");
    return new Response(body, {
      status: 200,
      headers: { "Content-Type": "application/x-ndjson" },
    });
  }) as typeof fetch;

  const executor = new AbitChatGptRelayExecutor();
  const { response } = await executor.execute({
    model: "project-management",
    body: { messages: [{ role: "user", content: "hello" }] },
    stream: true,
    credentials: {
      apiKey: "relay-secret",
      providerSpecificData: { projectName: "Development_AGENT_Development" },
    },
  });

  assert.equal(response.headers.get("Content-Type"), "text/event-stream; charset=utf-8");
  const text = await response.text();
  assert.match(text, /"role":"assistant"/);
  assert.match(text, /"content":"Hello"/);
  assert.match(text, /"content":" world"/);
  assert.match(text, /"content":"!"/);
  assert.match(text, /"finish_reason":"stop"/);
  assert.match(text, /data: \[DONE\]/);
});

test("executor refuses non-loopback relay URLs", async () => {
  let fetchCalled = false;
  globalThis.fetch = (async () => {
    fetchCalled = true;
    return new Response("{}");
  }) as typeof fetch;

  const executor = new AbitChatGptRelayExecutor();
  const { response } = await executor.execute({
    model: "project-management",
    body: { messages: [{ role: "user", content: "hello" }] },
    stream: false,
    credentials: {
      apiKey: "relay-secret",
      providerSpecificData: { baseUrl: "https://example.com/relay" },
    },
  });

  assert.equal(response.status, 400);
  assert.equal(fetchCalled, false);
  const body = await response.json();
  assert.match(String(body.error.message), /local Dev-02 loopback endpoint/);
});

test("relay forwards the caller correlation ID without exposing credentials in traces", async () => {
  let forwardedCorrelation = "";
  const traces: string[] = [];
  const originalInfo = console.info;
  console.info = (...args: unknown[]) => {
    if (args[0] === "[ABIT_RELAY_TRACE]") traces.push(String(args[1] || ""));
  };
  try {
    globalThis.fetch = (async (_url: unknown, init?: RequestInit) => {
      forwardedCorrelation = String(
        (init?.headers as Record<string, string>)?.["x-correlation-id"] || ""
      );
      return new Response(
        JSON.stringify({ type: "complete", result: { response: "ABIT_RELAY_OK" } }) + "\n",
        { status: 200, headers: { "Content-Type": "application/x-ndjson" } }
      );
    }) as typeof fetch;
    const executor = new AbitChatGptRelayExecutor();
    const result = await executor.execute({
      model: "project-management",
      body: {
        messages: [{ role: "user", content: "Reply exactly ABIT_RELAY_OK and nothing else." }],
      },
      stream: false,
      clientHeaders: { "x-correlation-id": "trace-test-001" },
      credentials: { apiKey: "fixture-secret", providerSpecificData: {} },
    });
    assert.equal(result.response.status, 200);
    assert.equal(forwardedCorrelation, "trace-test-001");
    assert.ok(traces.some((item) => item.includes('"event":"request_start"')));
    assert.ok(traces.some((item) => item.includes('"event":"response_headers"')));
    assert.ok(traces.every((item) => !item.includes("fixture-secret")));
  } finally {
    console.info = originalInfo;
  }
});

test("relay preserves genuine parent cancellation rather than retrying or silently falling back", async () => {
  const controller = new AbortController();
  let attempts = 0;
  const originalInfo = console.info;
  const traces: string[] = [];
  console.info = (...args: unknown[]) => {
    if (args[0] === "[ABIT_RELAY_TRACE]") traces.push(String(args[1] || ""));
  };
  try {
    globalThis.fetch = (async (_url: unknown, init?: RequestInit) => {
      attempts++;
      return await new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener(
          "abort",
          () => reject(new DOMException("Aborted", "AbortError")),
          { once: true }
        );
      });
    }) as typeof fetch;
    const executor = new AbitChatGptRelayExecutor();
    const operation = executor.execute({
      model: "project-management",
      body: { messages: [{ role: "user", content: "test" }] },
      stream: false,
      signal: controller.signal,
      clientHeaders: { "x-correlation-id": "abort-test-001" },
      credentials: { apiKey: "fixture-secret", providerSpecificData: {} },
    });
    controller.abort("request_signal_aborted");
    const { response } = await operation;
    assert.equal(response.status, 502);
    assert.equal(attempts, 1);
    assert.ok(traces.some((entry) => entry.includes('"event":"parent_abort"')));
    assert.ok(traces.some((entry) => entry.includes('"event":"upstream_fetch_failure"')));
    assert.ok(traces.every((entry) => !entry.includes("fixture-secret")));
  } finally {
    console.info = originalInfo;
  }
});
