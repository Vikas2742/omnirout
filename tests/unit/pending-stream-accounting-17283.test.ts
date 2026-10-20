import test from "node:test";
import assert from "node:assert/strict";
import {
  clearPendingRequests,
  trackPendingRequest,
  updatePendingRequestStreamChunks,
  getPendingRetainedBytes,
  getPendingById,
  finalizePendingRequestById,
} from "../../src/lib/usage/usageHistory.ts";
import { createRequestLogger } from "../../open-sse/utils/requestLogger.ts";

test.beforeEach(() => clearPendingRequests());
test.afterEach(() => clearPendingRequests());

test("reusing and growing the same stream arrays updates retained bytes", () => {
  const id = trackPendingRequest("m", "p", "c", true);
  const chunks = { provider: ["x".repeat(1000)], client: ["first"] };
  updatePendingRequestStreamChunks("m", "p", "c", chunks);
  const first = getPendingRetainedBytes();
  chunks.provider.push("á".repeat(2000));
  chunks.client.push("second");
  updatePendingRequestStreamChunks("m", "p", "c", chunks);
  assert.equal(getPendingRetainedBytes() - first, 4006);
  updatePendingRequestStreamChunks("m", "p", "c", chunks);
  assert.equal(getPendingRetainedBytes() - first, 4006, "same-size replacement is idempotent");
  assert.ok(id);
  finalizePendingRequestById(id, {});
  assert.equal(getPendingRetainedBytes(), 0, "finalizing must not leave negative accounting");
});

test("the real request logger accounts for every append on the exact request", async () => {
  const first = trackPendingRequest("m", "p", "c", true);
  const target = trackPendingRequest("m", "p", "c", true);
  assert.ok(first && target);
  const logger = await createRequestLogger("openai", "openai", "m", {
    requestId: target,
    connectionId: "c",
    model: "m",
    provider: "p",
    enabled: false,
  });
  const empty = getPendingRetainedBytes();
  logger.appendProviderChunk("a".repeat(1000));
  const afterFirst = getPendingRetainedBytes();
  assert.ok(afterFirst > empty + 1000, "actual append must participate in byte accounting");
  logger.appendProviderChunk("b".repeat(2000));
  assert.ok(getPendingRetainedBytes() > afterFirst + 2000);
  assert.equal(getPendingById().get(first)?.streamChunks, undefined);
  assert.equal(getPendingById().get(target)?.streamChunks?.provider?.length, 2);
  finalizePendingRequestById(target, {});
  assert.equal(getPendingRetainedBytes(), empty / 2);
  logger.appendProviderChunk("late");
  assert.equal(
    getPendingRetainedBytes(),
    empty / 2,
    "late write must not attach to a different request"
  );
  assert.equal(getPendingById().get(first)?.streamChunks, undefined);
});
