import { beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";

import { runLiveZoneCompression } from "../../../open-sse/handlers/chatCore/liveZoneCompression.ts";
import {
  getLiveZoneCacheStats,
  resetLiveZoneCache,
} from "../../../open-sse/services/compression/liveZone.ts";
import type { CompressionConfig } from "../../../open-sse/services/compression/types.ts";

const compressionConfig = { enabled: true } as CompressionConfig;

function claudeMessage(body: Record<string, unknown>) {
  return body.messages as Array<Record<string, unknown>>;
}

async function run(
  compressionInputBody: Record<string, unknown>,
  clientHeaders: Record<string, string> | null,
  calls: Array<Record<string, unknown>>,
  connectionId = "conn-1"
) {
  return runLiveZoneCompression({
    compressionInputBody,
    clientHeaders,
    provider: "anthropic",
    getCurrentConnectionId: () => connectionId,
    compressionPrincipalId: "key-1",
    mode: "rtk",
    effectiveModel: "claude-sonnet-4",
    compressionConfig,
    runCompression: async (input) => {
      calls.push(structuredClone(input));
      return {
        body: {
          ...input,
          messages: claudeMessage(input).map((message) => ({ ...message, compressed: true })),
        },
        compressed: true,
        stats: null,
      };
    },
  });
}

function metadata(sessionId: string) {
  return JSON.stringify({
    device_id: "a".repeat(64),
    account_uuid: "00000000-0000-0000-0000-000000000001",
    session_id: sessionId,
  });
}

beforeEach(() => resetLiveZoneCache());

describe("live-zone Claude Code session identity", () => {
  it("keys the cache on metadata.user_id.session_id across appended turns", async () => {
    const calls: Array<Record<string, unknown>> = [];
    const first = {
      model: "claude-sonnet-4",
      metadata: { user_id: metadata("11111111-1111-1111-1111-111111111111") },
      messages: [{ role: "user", content: "hello" }],
    };
    await run(first, null, calls);
    const second = {
      ...first,
      messages: [...first.messages, { role: "assistant", content: "hi" }],
    };
    const reused = await run(second, null, calls);

    assert.equal(calls.length, 1);
    assert.equal(reused.stats?.liveZone?.cacheHit, true);
  });

  it("reads the X-Claude-Code-Session-Id header", async () => {
    const calls: Array<Record<string, unknown>> = [];
    const headers = { "x-claude-code-session-id": "22222222-2222-2222-2222-222222222222" };
    await run(
      { model: "claude-sonnet-4", messages: [{ role: "user", content: "hello" }] },
      headers,
      calls
    );
    const reused = await run(
      {
        model: "claude-sonnet-4",
        messages: [
          { role: "user", content: "hello" },
          { role: "assistant", content: "hi" },
        ],
      },
      headers,
      calls
    );

    assert.equal(calls.length, 1);
    assert.equal(reused.stats?.liveZone?.cacheHit, true);
  });

  it("isolates cache entries by Claude Code session id", async () => {
    const calls: Array<Record<string, unknown>> = [];
    const body = (sessionId: string) => ({
      model: "claude-sonnet-4",
      metadata: { user_id: metadata(sessionId) },
      messages: [{ role: "user", content: "hello" }],
    });
    await run(body("33333333-3333-3333-3333-333333333333"), null, calls);
    const other = await run(body("44444444-4444-4444-4444-444444444444"), null, calls);

    assert.equal(calls.length, 2);
    assert.equal(other.stats?.liveZone?.cacheHit, undefined);
    assert.equal(getLiveZoneCacheStats().entries, 2);
  });

  it("isolates cache entries by connection, so account rotation never shares", async () => {
    const calls: Array<Record<string, unknown>> = [];
    const body = {
      model: "claude-sonnet-4",
      metadata: { user_id: metadata("55555555-5555-5555-5555-555555555555") },
      messages: [{ role: "user", content: "hello" }],
    };
    await run(body, null, calls, "conn-a");
    const rotated = await run(body, null, calls, "conn-b");

    assert.equal(calls.length, 2);
    assert.equal(rotated.stats?.liveZone?.cacheHit, undefined);
  });
});
