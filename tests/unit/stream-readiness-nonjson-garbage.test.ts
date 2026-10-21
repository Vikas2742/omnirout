import test from "node:test";
import assert from "node:assert/strict";

import {
  ensureStreamReadiness,
  hasStreamReadinessSignal,
} from "../../open-sse/utils/streamReadiness.ts";

const encoder = new TextEncoder();

// Gate contract: a non-JSON payload under `data:` (a proxy error page, a
// raw log line, a truncated fragment) is garbage, not a readiness signal — it
// must fail the gate (classified 502/504) instead of being released as a false
// 200. Only a non-ping JSON payload is a signal. SSE preamble/structural field
// lines outside `data:` (`retry:`, `id:`) are NOT signals: many servers send
// `retry:` as the very first bytes and some put `id:` on every frame including
// pings, so counting them would release a dead or ping-only upstream as ready.
// A raw text line WITHOUT SSE field syntax stays refused as well.

// --- The gate's signal contract (hasStreamReadinessSignal) ---

// Red proof: before the fix these non-JSON data: payloads were accepted by the
// catch tolerance; after the fix they are refused.
test("a non-JSON payload under data: is not a readiness signal", () => {
  // A proxy error page replayed under data: (the false-200 failure mode).
  assert.equal(
    hasStreamReadinessSignal("data: <html><body>502 Bad Gateway</body></html>\n\n"),
    false
  );
  // A raw log line under data:.
  assert.equal(
    hasStreamReadinessSignal("data: 2026-10-12 13:25:00 ERROR upstream timeout\n\n"),
    false
  );
  // A truncated JSON fragment under data:.
  assert.equal(hasStreamReadinessSignal("data: {truncated-json\n\n"), false);
  // A plain-text answer under data: (non-JSON) is refused too — only JSON or a
  // structural field line is a signal.
  assert.equal(hasStreamReadinessSignal("data: plain text answer\n\n"), false);
});

// Guard: a non-ping JSON payload under data: is still a signal (no over-refusal).
test("a non-ping JSON payload under data: is still a readiness signal", () => {
  assert.equal(hasStreamReadinessSignal('data: {"choices":[{"delta":{"content":"x"}}]}\n\n'), true);
  assert.equal(hasStreamReadinessSignal('data: {"type":"response.created"}\n\n'), true);
  // An error-only JSON frame stays refused (existing behavior, #7503).
  assert.equal(
    hasStreamReadinessSignal('data: {"error":{"message":"Auggie CLI not found"}}\n\n'),
    false
  );
});

// Guard: structural SSE field lines outside data: (`id:` / `retry:`) are a
// preamble, not a payload — they must never release the readiness gate, or a
// dead / ping-only upstream that sends them would become a false 200.
test("a structural SSE field line outside data: is not a readiness signal", () => {
  assert.equal(hasStreamReadinessSignal("id: 42\n\n"), false);
  assert.equal(hasStreamReadinessSignal("retry: 3000\n\n"), false);
  // A ping frame that carries an `id:` line is still only a ping.
  assert.equal(hasStreamReadinessSignal("id: 1\nevent: ping\ndata: {}\n\n"), false);
  // The preamble does not hide a real payload that follows it.
  assert.equal(
    hasStreamReadinessSignal('retry: 3000\n\ndata: {"choices":[{"delta":{"content":"x"}}]}\n\n'),
    true
  );
});

// Guard: a raw text line WITHOUT SSE field syntax is not a signal — a non-SSE
// text upstream (a raw HTML page, a bare log line) must stay refused so it
// fails with a classified error and the fallback fires, not a false 200.
test("a raw text line without SSE field syntax is not a readiness signal", () => {
  assert.equal(hasStreamReadinessSignal("<html><body>502</body></html>\n\n"), false);
  assert.equal(hasStreamReadinessSignal("plain raw garbage line\n\n"), false);
});

// --- End-to-end: the gate must not serve garbage as a false 200 ---

// A stream whose only payload is a non-JSON data: line (a proxy HTML page) must
// end as a classified readiness failure (502/504), never a 200 that replays the
// garbage to the client.
test("a non-JSON data: payload is refused, not replayed as a 200", async () => {
  const response = new Response(
    new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode("data: <html><body>502 Bad Gateway</body></html>\n\n"));
        controller.close();
      },
    }),
    { status: 200, headers: { "Content-Type": "text/event-stream" } }
  );

  const result = await ensureStreamReadiness(response, { timeoutMs: 200 });
  try {
    assert.equal(result.ok, false);
    if (result.ok) assert.fail("a non-JSON data: payload must not release the readiness gate");
    assert.ok(
      result.response.status === 502 || result.response.status === 504,
      `expected a classified 502/504, got ${result.response.status}`
    );
  } finally {
    await result.response.body?.cancel().catch(() => {});
  }
});

// A stream that sends only a structural field line and then closes has produced
// no payload: it ends as a classified early-EOF, never a released 200.
test("a structural field line outside data: does not release the gate", async () => {
  const response = new Response(
    new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode("id: 42\n\n"));
        controller.close();
      },
    }),
    { status: 200, headers: { "Content-Type": "text/event-stream" } }
  );

  const result = await ensureStreamReadiness(response, { timeoutMs: 200 });
  try {
    assert.equal(result.ok, false);
    if (result.ok) assert.fail("a bare id: line must not release the readiness gate");
    assert.equal(result.code, "STREAM_EARLY_EOF");
  } finally {
    await result.response.body?.cancel().catch(() => {});
  }
});

// A stream that stays open but only ever sends the preamble (`retry:` as the
// first bytes, then silence) or a ping frame carrying an `id:` line must still
// fail with STREAM_READINESS_TIMEOUT: neither is a readiness signal, and neither
// may extend the deadline.
for (const [name, chunk] of [
  ["retry: preamble only", "retry: 3000\n\n"],
  ["ping frame carrying an id: line", "id: 1\nevent: ping\ndata: {}\n\n"],
] as const) {
  test(`a stream with only a ${name} and then silence times out`, async () => {
    const response = new Response(
      new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(encoder.encode(chunk));
        },
        cancel() {},
      }),
      { status: 200, headers: { "Content-Type": "text/event-stream" } }
    );

    const result = await ensureStreamReadiness(response, { timeoutMs: 100, maxTimeoutMs: 400 });
    try {
      assert.equal(result.ok, false);
      if (result.ok) assert.fail(`${name} then silence must remain a readiness failure`);
      assert.equal(result.code, "STREAM_READINESS_TIMEOUT");
      assert.equal(result.response.status, 504);
    } finally {
      await result.response.body?.cancel().catch(() => {});
    }
  });
}

// Guard: a stream whose first payload is a non-ping JSON data: line is released
// as ready (200) — no over-refusal of real content.
test("a non-ping JSON data: payload is released as ready", async () => {
  const response = new Response(
    new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode('data: {"choices":[{"delta":{"content":"x"}}]}\n\n'));
        controller.close();
      },
    }),
    { status: 200, headers: { "Content-Type": "text/event-stream" } }
  );

  const result = await ensureStreamReadiness(response, { timeoutMs: 200 });
  try {
    assert.equal(result.ok, true);
    if (!result.ok) assert.fail("a non-ping JSON data: payload must release the readiness gate");
    assert.equal(result.response.status, 200);
  } finally {
    await result.response.body?.cancel().catch(() => {});
  }
});
