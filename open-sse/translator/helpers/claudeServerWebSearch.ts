/**
 * Anthropic's web-search *server* tool as Claude Code's WebSearch sends it:
 * `{ type: "web_search_20250305", name: "web_search", max_uses: 8 }`. The dated
 * `type` is versioned (`web_search_YYYYMMDD`); the literal `name` is fixed by the
 * Messages API for each dated type.
 *
 * The two lanes that reach a Gemini target need this same predicate:
 *  - the hub (`claudeToOpenAIRequest`, CLAUDE→OPENAI→GEMINI/ANTIGRAVITY), and
 *  - the direct translator (`claudeToGeminiRequest`, CLAUDE→GEMINI),
 * which hands the raw Claude tool straight to `buildGeminiTools`.
 */
export function isClaudeServerWebSearchTool(tool: unknown): boolean {
  if (!tool || typeof tool !== "object" || Array.isArray(tool)) return false;
  const record = tool as Record<string, unknown>;
  return (
    record.name === "web_search" &&
    typeof record.type === "string" &&
    /^web_search_\d{8}$/.test(record.type)
  );
}

/**
 * True when the server tool is the ONLY tool in the request — the Claude Code
 * WebSearch sub-request shape. Google Search grounding is enabled only for that
 * shape: Antigravity's v1internal 400s when a built-in tool shares a request with
 * functionDeclarations, and an agent turn that merely happens to declare the
 * server tool alongside its own functions must keep those functions.
 */
export function isSoleClaudeServerWebSearchTool(tools: unknown): boolean {
  return Array.isArray(tools) && tools.length === 1 && isClaudeServerWebSearchTool(tools[0]);
}
