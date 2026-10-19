/**
 * xAI /v1/responses rejects the whole request on unknown tool types:
 *   422 tools[7].type: unknown variant `namespace`, expected one of `function`, ...
 * Codex CLI sends its MCP servers as `namespace` groups, so the executor must flatten
 * them, and the 422 must not cool down the (often single) xAI account.
 */
import test from "node:test";
import assert from "node:assert/strict";

const { XaiExecutor, normalizeXaiResponsesTools } = await import("../../open-sse/executors/xai.ts");
const { isRequestShapeRejection } = await import("../../src/sse/handlers/chatPredicates.ts");

const codexLikeTools = [
  { type: "function", name: "shell", description: "run", parameters: { type: "object" } },
  { type: "web_search" },
  {
    type: "namespace",
    name: "mcp__atlassian__",
    description: "Atlassian",
    tools: [
      { type: "function", name: "getIssue", description: "get", parameters: { type: "object" } },
      { name: "search", parameters: { type: "object" } },
    ],
  },
  { type: "custom", name: "apply_patch", description: "patch", format: { type: "grammar" } },
  { type: "local_shell" },
  { type: "function", function: { name: "nested", parameters: { type: "object" } } },
];

test("normalizeXaiResponsesTools flattens namespace groups and drops unknown types", () => {
  const out = normalizeXaiResponsesTools(codexLikeTools) as Array<Record<string, unknown>>;
  const types = out.map((t) => t.type);
  assert.ok(
    types.every((t) => t === "function" || t === "web_search"),
    String(types)
  );
  const names = out.filter((t) => t.type === "function").map((t) => t.name);
  assert.deepEqual(names, [
    "shell",
    "mcp__atlassian__getIssue",
    "mcp__atlassian__search",
    "apply_patch",
    "nested",
  ]);
  const patch = out.find((t) => t.name === "apply_patch") as Record<string, unknown>;
  assert.deepEqual((patch.parameters as Record<string, unknown>).required, ["input"]);
  const nested = out.find((t) => t.name === "nested") as Record<string, unknown>;
  assert.equal(nested.function, undefined);
});

test("XaiExecutor native passthrough never ships a namespace tool to xAI", () => {
  const executor = new XaiExecutor("xai-oauth");
  const out = executor.transformRequest(
    "grok-4.6",
    {
      model: "grok-4.6",
      input: "hi",
      tools: codexLikeTools,
      _nativeXaiResponsesPassthrough: true,
    },
    true,
    {} as never
  ) as Record<string, unknown>;
  const tools = out.tools as Array<Record<string, unknown>>;
  assert.ok(Array.isArray(tools));
  assert.ok(!tools.some((t) => t.type === "namespace" || t.type === "custom"));
  assert.ok(tools.some((t) => t.name === "mcp__atlassian__getIssue"));
});

test("isRequestShapeRejection recognises xAI body-deserialization 422s only", () => {
  assert.equal(
    isRequestShapeRejection({
      status: 422,
      error:
        "[422]: Failed to deserialize the JSON body into the target type: tools[7].type: unknown variant `namespace`",
    }),
    true
  );
  assert.equal(isRequestShapeRejection({ status: 429, error: "Failed to deserialize" }), false);
  assert.equal(isRequestShapeRejection({ status: 422, error: "quota exhausted" }), false);
});
