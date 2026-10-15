import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import { renderSystemOneProviderReference } from "../../scripts/docs/systemoneProviderReference.ts";
import { v1SystemOneSchema } from "../../src/shared/validation/schemas/systemone.ts";

test("provider reference is registry-driven and documents billing and ordered failover", () => {
  const text = renderSystemOneProviderReference();
  for (const value of [
    "typesafe/jev-latest",
    "cloudflare-ai/jev",
    "cloudflare-ai/clef",
    "cloudflare-ai/clef-flash",
    "AI Gateway credits",
    "Workers AI neurons",
    "decision-fallback",
  ])
    assert.ok(text.includes(value), value);
});
test("generated API Explorer includes System One without growing the frozen module", async () => {
  const generated = await import("../../src/app/docs/lib/openapi.generated.ts");
  const chunk = await import("../../src/app/docs/lib/openapi.systemone.generated.ts");
  assert.ok(chunk.SYSTEMONE_ENDPOINTS.some((endpoint) => endpoint.path === "/v1/systemone"));
  assert.ok(generated.OPENAPI_ENDPOINTS.some((endpoint) => endpoint.path === "/api/v1/systemone"));
  assert.deepEqual(
    generated.OPENAPI_ENDPOINTS,
    [...generated.OPENAPI_ENDPOINTS].sort(
      (a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method)
    )
  );
});

test("System One docs distinguish combo stop conditions from member failover", () => {
  const section = fs
    .readFileSync(new URL("../../docs/reference/API_REFERENCE.md", import.meta.url), "utf8")
    .split("## System One Decisions")[1]
    .split("## List Models")[0];
  assert.match(
    section,
    /stops on\s+400 `api_usage_error` from body\/model validation, 413, 422, or caller cancellation\s+\(499\)/
  );
  assert.match(
    section,
    /fails over on member-level 401\/402\/403\/404\/408\/429, HTTP 5xx, timeout or\s+network failure, no usable credential, and member budget or token-limit rejection/
  );
  assert.doesNotMatch(section, /validation\/policy 4xx errors are not hidden/);
});

test("documented System One request parses with the real schema", () => {
  const text = fs
    .readFileSync(new URL("../../docs/reference/API_REFERENCE.md", import.meta.url), "utf8")
    .split("## System One Decisions")[1]
    .split("## List Models")[0];
  const json = text.match(/```json\n([\s\S]*?)```/);
  assert.ok(json);
  assert.equal(v1SystemOneSchema.safeParse(JSON.parse(json[1])).success, true);
});
