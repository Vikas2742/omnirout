/**
 * TDD guard for Hard Rule #12 — createErrorResponse() must never echo a raw
 * err.message into a response body. The helper previously passed
 * payload.message through verbatim, so any route feeding it a caught Error
 * (src/app/api/headroom/start/route.ts:38, src/app/api/cli-tools/grok-build-settings/route.ts:230)
 * leaked stack tails / absolute source paths / bearer tokens to clients.
 */
import test from "node:test";
import assert from "node:assert/strict";
import {
  createErrorResponse,
  createErrorResponseFromUnknown,
} from "../../../src/lib/api/errorResponse.ts";

test("createErrorResponse strips stack tails from the message", async () => {
  const response = createErrorResponse({
    status: 500,
    message: "Upstream fetch failed\n    at executeFetch (/srv/app/dist/server.js:12:34)",
  });
  const body = await response.json();

  assert.equal(response.status, 500);
  assert.ok(!body.error.message.includes("at /"), "stack frames must not reach the client");
  assert.ok(!body.error.message.includes("/srv/app"), "absolute paths must not reach the client");
  assert.match(body.error.message, /Upstream fetch failed/);
});

test("createErrorResponse redacts bearer tokens from the message", async () => {
  const response = createErrorResponse({
    status: 502,
    message: "Upstream rejected Authorization: Bearer sk-live-abcdef123456",
  });
  const body = await response.json();

  assert.ok(!body.error.message.includes("sk-live-abcdef123456"), "tokens must be redacted");
  assert.match(body.error.message, /REDACTED/);
});

test("createErrorResponse leaves a benign controlled message unchanged", async () => {
  const response = createErrorResponse({
    status: 404,
    message: "Combo not found",
    type: "not_found",
  });
  const body = await response.json();

  assert.equal(body.error.message, "Combo not found");
  assert.equal(body.error.type, "not_found");
  assert.ok(body.requestId, "requestId must still be present");
});

test("createErrorResponseFromUnknown sanitizes caught Error messages", async () => {
  const err = new Error("boom\n    at handler (/home/user/project/route.ts:99:11)");
  const response = createErrorResponseFromUnknown(err);
  const body = await response.json();

  assert.equal(response.status, 500);
  assert.equal(body.error.type, "server_error");
  assert.ok(!body.error.message.includes("at /"), "stack frames must not reach the client");
  assert.ok(!body.error.message.includes("/home/user"), "paths must not reach the client");
});

test("createErrorResponseFromUnknown keeps a caller-provided status", async () => {
  const err = Object.assign(new Error("Conflict detected"), { status: 409 });
  const response = createErrorResponseFromUnknown(err);
  const body = await response.json();

  assert.equal(response.status, 409);
  assert.equal(body.error.type, "conflict");
  assert.equal(body.error.message, "Conflict detected");
});
