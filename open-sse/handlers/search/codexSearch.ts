import { saveCallLog } from "@/lib/usageDb";
import { getCodexBackendIdentityHeaders } from "../../config/codexClient.ts";
import type { SearchProviderConfig } from "../../config/searchRegistry.ts";
import type { SearchResult } from "../search.ts";
import { resolveSearchBaseUrl } from "./baseUrl.ts";
import {
  emitSearchProxyEvent,
  fetchWithSearchProxy,
  resolveSearchProxy,
  shouldCoolDownSearchConnection,
  type ProviderFetchResult,
} from "./searchProxy.ts";

export const CODEX_SEARCH_MAX_BYTES = 4 * 1024 * 1024;

interface CodexSearchParams {
  query: string;
  maxResults: number;
  searchType?: string;
  token?: string;
  timeRange?: string;
  domainFilter?: string[];
  providerOptions?: Record<string, unknown>;
  providerSpecificData?: Record<string, unknown>;
}

function nonempty(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

/** Domain and time constraints are instruction hints, NOT hard upstream filters. */
export function buildCodexSearchRequest(config: SearchProviderConfig, params: CodexSearchParams) {
  const options = params.providerOptions;
  const model =
    nonempty(options?.model) || nonempty(params.providerSpecificData?.searchModel) || "gpt-6-luna";
  const requestedEffort = options?.reasoning_effort;
  const effort = ["low", "medium", "high", "xhigh"].includes(String(requestedEffort))
    ? requestedEffort
    : "low";
  const hints = [
    `Search the web and return only JSON: {"results":[{"title":"...","url":"...","description":"..."}]}. Return up to ${Math.min(10, Math.max(1, params.maxResults))} relevant results.`,
    "Use the web_search tool. Only return URLs actually observed in search sources or citations. Do not invent URLs.",
  ];
  if (params.searchType === "news")
    hints.push("Focus on recent news and prioritize the latest reporting.");
  if (params.timeRange && params.timeRange !== "any")
    hints.push(`Prefer results from the last ${params.timeRange}.`);
  const include = params.domainFilter?.filter((domain) => !domain.startsWith("-"));
  const exclude = params.domainFilter
    ?.filter((domain) => domain.startsWith("-"))
    .map((domain) => domain.slice(1));
  if (include?.length) hints.push(`Prefer these domains: ${include.join(", ")}.`);
  if (exclude?.length) hints.push(`Avoid these domains: ${exclude.join(", ")}.`);
  const headers: Record<string, string> = {
    ...getCodexBackendIdentityHeaders(),
    Authorization: `Bearer ${params.token || ""}`,
    "Content-Type": "application/json",
    Accept: "text/event-stream",
  };
  const workspaceId = nonempty(params.providerSpecificData?.workspaceId);
  if (workspaceId) headers["chatgpt-account-id"] = workspaceId;
  return {
    // The registry URL already ends in /responses. Never append it again.
    url: resolveSearchBaseUrl(config, params),
    init: {
      method: "POST",
      redirect: "error",
      headers,
      body: JSON.stringify({
        model,
        instructions: hints.join("\n"),
        input: [{ role: "user", content: [{ type: "input_text", text: params.query }] }],
        tools: [{ type: "web_search" }],
        tool_choice: "required",
        include: ["web_search_call.action.sources"],
        reasoning: { effort },
        stream: true,
        store: false,
      }),
    } satisfies RequestInit,
  };
}

/** Fixed public text: upstream errors may contain credentials or internal details. */
export class CodexSearchError extends Error {
  constructor(readonly statusHint = 502) {
    super("Codex web search failed");
    this.name = "CodexSearchError";
  }
}

type Row = { title: string; url: string; snippet: string };
function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}
function array(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function upstreamStatus(value: unknown): number {
  const error = record(value);
  const text = `${error.code || ""} ${error.message || ""}`.toLowerCase();
  if (/unauthorized|invalid_api_key|authentication/.test(text)) return 401;
  if (/forbidden|permission_denied/.test(text)) return 403;
  if (/rate_limit|quota|usage_limit|insufficient_quota/.test(text)) return 429;
  if (/overloaded|server_error|service_unavailable/.test(text)) return 503;
  if (/invalid_request|cannot be used|not supported/.test(text)) return 400;
  return 502;
}

function cleanUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) return null;
    // Delete only this parameter; preserve unrelated query strings and fragments.
    url.searchParams.delete("utm_source");
    return url.href;
  } catch {
    return null;
  }
}

function groundingKey(url: string): string {
  const parsed = new URL(url);
  return parsed.hostname.toLowerCase().replace(/^www\./, "") + parsed.pathname.replace(/\/+$/, "");
}

function modelRows(text: string): Row[] {
  try {
    const json = text
      .trim()
      .replace(/^```(?:json)?\s*/, "")
      .replace(/\s*```$/, "");
    return array(record(JSON.parse(json)).results).flatMap((value) => {
      const item = record(value);
      const url = cleanUrl(item.url);
      return url
        ? [
            {
              url,
              title: nonempty(item.title) || new URL(url).hostname,
              snippet: nonempty(item.description) || nonempty(item.snippet) || "",
            },
          ]
        : [];
    });
  } catch {
    return [];
  }
}

/** Parse final snapshots, not deltas: completed items must never duplicate rows/text. */
export function parseCodexSearchSse(text: string, maxResults: number) {
  if (Buffer.byteLength(text, "utf8") > CODEX_SEARCH_MAX_BYTES) throw new CodexSearchError();
  const sources: Row[] = [];
  const annotations: Row[] = [];
  const messages: string[] = [];
  const outputTexts: string[] = [];
  const observed = new Set<string>();
  let calls = 0;
  let completed = false;
  let searches = 0;
  let usage: Record<string, unknown> = {};
  const observe = (value: unknown, target: Row[], title?: unknown) => {
    const url = cleanUrl(value);
    if (!url) return;
    observed.add(groundingKey(url));
    target.push({ url, title: nonempty(title) || new URL(url).hostname, snippet: "" });
  };
  for (const block of text.replace(/\r\n/g, "\n").split("\n\n")) {
    const lines = block.split("\n");
    const event = lines
      .find((line) => line.startsWith("event:"))
      ?.slice(6)
      .trim();
    const data = lines
      .filter((line) => line.startsWith("data:"))
      .map((line) => line.slice(5).trimStart())
      .join("\n");
    if (!data || data === "[DONE]") continue;
    let payload: Record<string, unknown>;
    try {
      payload = record(JSON.parse(data));
    } catch {
      throw new CodexSearchError();
    }
    const type = nonempty(payload.type) || event;
    if (type === "error" || type === "response.failed") {
      throw new CodexSearchError(
        upstreamStatus(payload.error || record(payload.response).error || payload)
      );
    }
    if (type === "response.output_item.done") {
      const item = record(payload.item);
      if (item.type === "web_search_call") {
        calls++;
        const action = record(item.action);
        for (const source of array(action.sources)) observe(record(source).url, sources);
        if (action.type === "open_page") observe(action.url, sources);
      }
      if (item.type === "message") {
        for (const content of array(item.content)) {
          const part = record(content);
          if (typeof part.text === "string") messages.push(part.text);
          for (const annotation of array(part.annotations)) {
            const citation = record(annotation);
            if (citation.type === "url_citation")
              observe(citation.url, annotations, citation.title);
          }
        }
      }
    }
    if (type === "response.output_text.done" && typeof payload.text === "string")
      outputTexts.push(payload.text);
    if (type === "response.completed") {
      const response = record(payload.response);
      if (response.status && response.status !== "completed") throw new CodexSearchError();
      completed = true;
      usage = record(response.usage);
      const count = record(record(response.tool_usage).web_search).num_requests;
      if (typeof count === "number" && Number.isFinite(count) && count >= 0) searches = count;
    }
  }
  if (!completed || calls === 0) throw new CodexSearchError();
  const grounded = (outputTexts.length ? outputTexts : messages)
    .flatMap(modelRows)
    .filter((row) => observed.has(groundingKey(row.url)));
  const rows = grounded.length ? grounded : annotations.length ? annotations : sources;
  const seen = new Set<string>();
  const results = rows
    .filter((row) => {
      const key = groundingKey(row.url);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, Math.min(10, Math.max(1, maxResults)));
  return { results, searches: searches || calls, usage };
}

/** Bound the streamed body, including error bodies, and keep abort active until EOF. */
async function readBody(response: Response, signal: AbortSignal): Promise<string> {
  if (!response.body) return "";
  const reader = response.body.getReader();
  const cancel = () => {
    void reader.cancel().catch(() => {});
  };
  signal.addEventListener("abort", cancel, { once: true });
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = "";
  try {
    signal.throwIfAborted();
    while (true) {
      const { done, value } = await reader.read();
      signal.throwIfAborted();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > CODEX_SEARCH_MAX_BYTES) {
        cancel();
        throw new CodexSearchError();
      }
      text += decoder.decode(value, { stream: true });
    }
    return text + decoder.decode();
  } finally {
    signal.removeEventListener("abort", cancel);
    reader.releaseLock();
  }
}

export async function executeCodexSearch(
  config: SearchProviderConfig,
  params: CodexSearchParams,
  context: {
    connectionId?: string;
    apiKeyId?: string;
    globalStartTime: number;
    globalTimeoutMs: number;
  },
  makeResult: (provider: string, item: Row, index: number, now: string) => SearchResult
): Promise<ProviderFetchResult> {
  const startTime = Date.now();
  const { connectionId, apiKeyId } = context;
  const { proxy, proxyLevel } = await resolveSearchProxy(connectionId, apiKeyId, config.id);
  const controller = new AbortController();
  const remaining = context.globalTimeoutMs - (Date.now() - context.globalStartTime);
  const timer = setTimeout(
    () => controller.abort(),
    Math.min(config.timeoutMs, Math.max(1, remaining))
  );
  let upstreamStatusCode: number | null = null;
  let url = config.baseUrl;
  const logCall = (fields: Record<string, unknown>) =>
    saveCallLog({
      method: "POST",
      path: "/v1/search",
      model: config.id,
      provider: config.id,
      connectionId: connectionId || null,
      apiKeyId,
      requestType: "search",
      requestBody: {
        query: params.query.slice(0, 200),
        search_type: params.searchType,
        max_results: params.maxResults,
      },
      duration: Date.now() - startTime,
      ...fields,
    }).catch(() => {
      /* Logging must not block the response. */
    });
  const emit = (status: string) =>
    emitSearchProxyEvent(
      config.id,
      connectionId,
      proxy,
      proxyLevel,
      url,
      startTime,
      status,
      upstreamStatusCode
    );
  try {
    const request = buildCodexSearchRequest(config, params);
    url = request.url;
    const response = await fetchWithSearchProxy(proxy, () =>
      fetch(url, { ...request.init, signal: controller.signal })
    );
    upstreamStatusCode = response.status;
    if (response.status === 401) {
      await response.body?.cancel();
      throw new CodexSearchError(401);
    }
    const text = await readBody(response, controller.signal);
    if (!response.ok) {
      if (connectionId && shouldCoolDownSearchConnection(response.status, text)) {
        await coolDown(connectionId, response.status, text);
      }
      throw new CodexSearchError(response.status);
    }
    const parsed = parseCodexSearchSse(text, params.maxResults);
    const now = new Date().toISOString();
    const results = parsed.results.map((row, index) => makeResult(config.id, row, index, now));
    await logCall({
      status: 200,
      tokens: {
        prompt_tokens: parsed.usage.input_tokens || 0,
        completion_tokens: parsed.usage.output_tokens || 0,
      },
      responseBody: { results_count: results.length, searches: parsed.searches, cached: false },
    });
    await emit("success");
    if (connectionId) {
      try {
        const { getProviderConnectionById } = await import("@/lib/db/providers");
        const current = await getProviderConnectionById(connectionId);
        if (current) {
          const { clearAccountError } = await import("@/sse/services/auth.ts");
          await clearAccountError(connectionId, current as never);
        }
      } catch {
        /* Stale-error cleanup must not block a successful search. */
      }
    }
    const duration = Date.now() - startTime;
    return {
      success: true,
      data: {
        provider: config.id,
        query: params.query,
        results,
        answer: null,
        usage: { queries_used: parsed.searches, search_cost_usd: 0 },
        metrics: {
          response_time_ms: duration,
          upstream_latency_ms: duration,
          total_results_available: results.length,
        },
        errors: [],
      },
    };
  } catch (error: unknown) {
    const status = controller.signal.aborted
      ? 504
      : error instanceof CodexSearchError
        ? error.statusHint
        : 502;
    if (connectionId && upstreamStatusCode === 200 && shouldCoolDownSearchConnection(status, "")) {
      await coolDown(connectionId, status, "Codex web search failed");
    }
    await logCall({ status, error: "Codex web search failed" });
    await emit(status === 504 ? "timeout" : "error");
    return { success: false, status, error: "Codex web search failed" };
  } finally {
    clearTimeout(timer);
  }
}

async function coolDown(connectionId: string, status: number, text: string) {
  try {
    const { markAccountUnavailable } = await import("@/sse/services/auth.ts");
    // Like the generic search path, cool the selected connection for this
    // search service. Codex's chat-only virtual-child path needs a chat model
    // and intentionally does not persist a parent cooldown for model-less 429s.
    await markAccountUnavailable(connectionId, status, text, "codex-search", null);
  } catch {
    /* Cooldown persistence must not break the search response. */
  }
}
