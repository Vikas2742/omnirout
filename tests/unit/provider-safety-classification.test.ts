import assert from "node:assert/strict";
import test from "node:test";
import { classifyProviderSafetyError } from "../../open-sse/utils/providerSafety.ts";

const message =
  "This request was blocked by our safety systems. Reason: Potentially unintended activity.";

for (const [code, status] of [
  ["misalignment_policy_violation", 403],
  ["content_policy_violation", 400],
  ["provider_safety_rejection", 400],
] as const) {
  test(`${code}: retain a recognized code without claiming a private trigger`, () => {
    assert.deepEqual(classifyProviderSafetyError({ code }), { code, status });
    assert.deepEqual(classifyProviderSafetyError({ code, status: 400 }), { code, status: 400 });
    assert.deepEqual(classifyProviderSafetyError({ code, status: 403 }), { code, status: 403 });
    for (const otherStatus of [200, 401, 429, 500, 502, 503]) {
      assert.equal(classifyProviderSafetyError({ code, status: otherStatus }), null);
    }
  });
}

test("the exact legacy rejection gets a local classification, not an invented OpenAI code", () => {
  assert.deepEqual(
    classifyProviderSafetyError({
      status: 400,
      code: "bad_request",
      type: "invalid_request_error",
      message,
    }),
    { status: 400, code: "provider_safety_rejection" }
  );
  for (const changed of [
    { code: "invalid_api_key" },
    { type: "authentication_error" },
    { message: `Quoted example: ${message}` },
    { message: "Request blocked" },
    { message: { text: message } },
  ]) {
    assert.equal(
      classifyProviderSafetyError({
        status: 400,
        code: "bad_request",
        type: "invalid_request_error",
        message,
        ...changed,
      }),
      null
    );
  }
});

test("unknown, malformed, permission and ordinary validation errors stay unclassified", () => {
  for (const input of [
    {},
    { code: null },
    { code: ["misalignment_policy_violation"] },
    { code: { toString: () => "misalignment_policy_violation" } },
    { code: "misalignment_policy_violation", status: "403" },
    { code: "misalignment_policy_violation", status: Number.NaN },
    { code: "permission_denied", status: 403 },
    { code: "bad_request", type: "invalid_request_error", message: "unsupported parameter" },
    { code: "context_length_exceeded", status: 400 },
  ]) {
    assert.equal(classifyProviderSafetyError(input), null);
  }
});

test("a type projected into the legacy code slot retains only the local stop classification", () => {
  assert.deepEqual(
    classifyProviderSafetyError({
      status: 403,
      code: "invalid_request_error",
      type: "invalid_request_error",
      message,
    }),
    { status: 403, code: "provider_safety_rejection" }
  );
});
