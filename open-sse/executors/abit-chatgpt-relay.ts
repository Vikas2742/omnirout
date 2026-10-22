import { randomUUID } from "node:crypto";

import { BaseExecutor, type ExecuteInput, type ExecutorExecuteResult } from "./base.ts";

const DEFAULT_RELAY_BASE_URL = "http://127.0.0.1:8794/chatgpt-relay";
const DEFAULT_PROJECT_NAME = "Development_AGENT_Development";
const JSON_HEADERS = { "Content-Type": "application/json" };
const SSE_HEADERS = {
  "Cache-Control": "no-cache, no-transform",
  Connection: "keep-alive",
  "Content-Type": "text/event-stream; charset=utf-8",
};

type JsonRecord = Record<string, unknown>;

function record(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as JsonRecord) : {};
}

function configuredString(...values: unknown[]): string | undefined {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}

function contentText(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      const item = record(part);
      if (typeof item.text === "string") return item.text;
      if (typeof item.input_text === "string") return item.input_text;
      return "";
    })
    .filter(Boolean)
    .join("\n");
}

export function buildAbitChatGptRelayPrompt(body: unknown): string {
  const source = record(body);
  const messages = Array.isArray(source.messages) ? source.messages : [];
  const transcript = messages
    .map((message) => {
      const item = record(message);
      const role = configuredString(item.role)?.toUpperCase() ?? "MESSAGE";
      const text = contentText(item.content).trim();
      return text ? `[${role}]\n${text}` : "";
    })
    .filter(Boolean);

  if (transcript.length > 0) {
    return [
      "Continue the following conversation. Follow SYSTEM instructions as highest priority and answer the latest USER message.",
      "",
      ...transcript,
    ].join("\n\n");
  }

  return configuredString(source.prompt, source.input) ?? "";
}

function relayBaseUrl(credentials: ExecuteInput["credentials"]): string {
  const data = record(credentials.providerSpecificData);
  const configured =
    configuredString(data.baseUrl, process.env.ABIT_CHATGPT_RELAY_URL) ?? DEFAULT_RELAY_BASE_URL;
  let url: URL;
  try {
    url = new URL(configured);
  } catch {
    throw new Error("ABiT ChatGPT Relay base URL is invalid");
  }
  const allowedHost = url.hostname === "127.0.0.1" || url.hostname === "localhost";
  if (url.protocol !== "http:" || !allowedHost) {
    throw new Error("ABiT ChatGPT Relay must use the local Dev-02 loopback endpoint");
  }
  return url.href.replace(/\/$/, "");
}

function relayProject(input: ExecuteInput): { id?: string; name: string } {
  const body = record(input.body);
  const metadata = record(body.metadata);
  const data = record(input.credentials.providerSpecificData);
  const id = configuredString(
    body.chatgpt_project_id,
    body.project_id,
    metadata.chatgpt_project_id,
    metadata.project_id,
    input.credentials.projectId,
    data.projectId,
    process.env.ABIT_CHATGPT_RELAY_PROJECT_ID
  );
  const name =
    configuredString(
      body.chatgpt_project_name,
      body.project_name,
      metadata.chatgpt_project_name,
      metadata.project_name,
      data.projectName,
      data.defaultProjectName,
      process.env.ABIT_CHATGPT_RELAY_PROJECT_NAME
    ) ?? DEFAULT_PROJECT_NAME;
  return { ...(id ? { id } : {}), name };
}

function errorResponse(status: number, message: string): Response {
  return new Response(
    JSON.stringify({
      error: {
        message,
        type: status === 401 ? "authentication_error" : "provider_error",
        code: "abit_chatgpt_relay_error",
      },
    }),
    { status, headers: JSON_HEADERS }
  );
}

function chatCompletion(model: string, content: string) {
  return {
    id: `chatcmpl-${randomUUID().replace(/-/g, "")}`,
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [
      {
        index: 0,
        message: { role: "assistant", content },
        finish_reason: "stop",
      },
    ],
  };
}

function streamChunk(
  id: string,
  model: string,
  delta: JsonRecord,
  finishReason: string | null = null
) {
  return {
    id,
    object: "chat.completion.chunk",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [{ index: 0, delta, finish_reason: finishReason }],
  };
}

function wrapped(response: Response, body: unknown, url: string): ExecutorExecuteResult {
  return {
    response,
    url,
    headers: {},
    transformedBody: body,
    transport: "abit-chatgpt-browser-relay",
  };
}

function relayRequestBody(input: ExecuteInput) {
  const project = relayProject(input);
  const prompt = buildAbitChatGptRelayPrompt(input.body);
  if (!prompt) throw new Error("ABiT ChatGPT Relay request has no text messages");
  return {
    message: prompt,
    project_name: project.name,
    ...(project.id ? { chatgpt_project_id: project.id } : {}),
    close_on_complete: true,
    // Always keep the Dev-02 relay streaming so heartbeat frames arrive quickly.
    // This prevents generic HTTP response-start timeouts while ChatGPT browser work continues.
    stream: true,
  };
}

function relayHeaders(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

async function readRelayError(response: Response): Promise<string> {
  const text = await response.text().catch(() => "");
  if (!text) return `ABiT ChatGPT Relay returned HTTP ${response.status}`;
  try {
    const parsed = JSON.parse(text) as JsonRecord;
    return configuredString(parsed.message, record(parsed.error).message) ?? text.slice(0, 500);
  } catch {
    return text.slice(0, 500);
  }
}

async function readRelayStreamCompletion(response: Response): Promise<string> {
  const reader = response.body?.getReader();
  if (!reader) throw new Error("ABiT ChatGPT Relay returned an empty stream");

  const decoder = new TextDecoder();
  let buffer = "";
  let latest = "";

  const handleLine = (line: string): string | undefined => {
    if (!line.trim()) return undefined;
    let event: JsonRecord;
    try {
      event = JSON.parse(line) as JsonRecord;
    } catch {
      return undefined;
    }

    const type = configuredString(event.type);
    if (type === "heartbeat") return undefined;
    if (type === "progress") {
      latest = configuredString(event.response) ?? latest;
      return undefined;
    }
    if (type === "complete") {
      const result = record(event.result);
      const completed = configuredString(result.response);
      if (completed) latest = completed;
      return latest || undefined;
    }
    if (type === "error") {
      throw new Error(configuredString(event.message) ?? "ABiT ChatGPT Relay stream failed");
    }
    return undefined;
  };

  try {
    while (true) {
      const next = await reader.read();
      if (next.done) break;
      buffer += decoder.decode(next.value, { stream: true });
      let newline = buffer.indexOf("\n");
      while (newline !== -1) {
        const completed = handleLine(buffer.slice(0, newline));
        buffer = buffer.slice(newline + 1);
        if (completed) return completed;
        newline = buffer.indexOf("\n");
      }
    }
    if (buffer.trim()) {
      const completed = handleLine(buffer);
      if (completed) return completed;
    }
  } finally {
    reader.releaseLock();
  }

  if (latest) return latest;
  throw new Error("ChatGPT browser relay ended without a completion");
}

function createRelaySseStream(
  response: Response,
  model: string,
  log?: ExecuteInput["log"]
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = response.body?.getReader();
  const id = `chatcmpl-${randomUUID().replace(/-/g, "")}`;

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      if (!reader) {
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({
              error: {
                message: "ABiT ChatGPT Relay returned an empty stream",
                type: "provider_error",
              },
            })}\n\n`
          )
        );
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
        return;
      }

      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify(streamChunk(id, model, { role: "assistant" }))}\n\n`)
      );

      let buffer = "";
      let emittedText = "";
      let completed = false;

      const emitText = (fullText: string) => {
        if (!fullText) return;
        let delta = fullText;
        if (fullText.startsWith(emittedText)) {
          delta = fullText.slice(emittedText.length);
        }
        emittedText = fullText;
        if (!delta) return;
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(streamChunk(id, model, { content: delta }))}\n\n`)
        );
      };

      const handleLine = (line: string) => {
        if (!line.trim()) return;
        let event: JsonRecord;
        try {
          event = JSON.parse(line) as JsonRecord;
        } catch {
          return;
        }
        const type = configuredString(event.type);
        if (type === "progress") {
          const partial = configuredString(event.response);
          if (partial) emitText(partial);
          return;
        }
        if (type === "complete") {
          const result = record(event.result);
          emitText(configuredString(result.response) ?? "");
          completed = true;
          return;
        }
        if (type === "error") {
          const message = configuredString(event.message) ?? "ABiT ChatGPT Relay stream failed";
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                error: { message, type: "provider_error", code: "abit_chatgpt_relay_error" },
              })}\n\n`
            )
          );
        }
      };

      try {
        while (true) {
          const next = await reader.read();
          if (next.done) break;
          buffer += decoder.decode(next.value, { stream: true });
          let newline = buffer.indexOf("\n");
          while (newline !== -1) {
            const line = buffer.slice(0, newline);
            buffer = buffer.slice(newline + 1);
            handleLine(line);
            newline = buffer.indexOf("\n");
          }
        }
        if (buffer.trim()) handleLine(buffer);
        if (!completed)
          log?.warn?.("ABIT_CHATGPT_RELAY", "Relay stream ended without a complete event");
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(streamChunk(id, model, {}, "stop"))}\n\n`)
        );
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (error) {
        log?.warn?.("ABIT_CHATGPT_RELAY", error instanceof Error ? error.message : String(error));
        controller.error(error);
      } finally {
        reader.releaseLock();
      }
    },
    cancel() {
      void reader?.cancel();
    },
  });
}

export class AbitChatGptRelayExecutor extends BaseExecutor {
  constructor() {
    super("abit-chatgpt-relay", {
      id: "abit-chatgpt-relay",
      baseUrl: DEFAULT_RELAY_BASE_URL,
      format: "openai",
      timeoutMs: 3_600_000,
    });
  }

  override async execute(input: ExecuteInput): Promise<ExecutorExecuteResult> {
    const token = input.credentials.apiKey?.trim();
    if (!token) {
      return wrapped(
        errorResponse(401, "ABiT ChatGPT Relay token is not configured"),
        input.body,
        DEFAULT_RELAY_BASE_URL
      );
    }

    let baseUrl: string;
    let body: ReturnType<typeof relayRequestBody>;
    try {
      baseUrl = relayBaseUrl(input.credentials);
      body = relayRequestBody(input);
    } catch (error) {
      return wrapped(
        errorResponse(400, error instanceof Error ? error.message : String(error)),
        input.body,
        DEFAULT_RELAY_BASE_URL
      );
    }

    const correlationId =
      input.clientHeaders?.["x-correlation-id"] ||
      input.clientHeaders?.["x-request-id"] ||
      randomUUID();
    const startTime = Date.now();
    const trace = (event: string, extra: Record<string, unknown> = {}) => {
      console.info(
        "[ABIT_RELAY_TRACE]",
        JSON.stringify({
          event,
          correlation_id: correlationId,
          provider: "abit-chatgpt-relay",
          requested_model: input.model,
          at: new Date().toISOString(),
          elapsed_ms: Date.now() - startTime,
          executor_timeout_ms: 3_600_000,
          parent_signal_aborted: Boolean(input.signal?.aborted),
          ...extra,
        })
      );
    };
    const onAbort = () => {
      const reason = input.signal?.reason;
      trace("parent_abort", {
        source: "input.signal",
        reason_type:
          reason instanceof Error
            ? reason.name
            : typeof reason === "string"
              ? [
                  "client_closed",
                  "request_signal_aborted",
                  "deadline_exceeded",
                  "timeout",
                ].includes(reason)
                ? reason
                : "string_reason_redacted"
              : "unspecified",
      });
    };
    if (input.signal?.aborted) onAbort();
    else input.signal?.addEventListener("abort", onAbort, { once: true });
    trace("request_start", { upstream: "local_relay" });
    const url = `${baseUrl}/relay`;
    let response: Response;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: { ...relayHeaders(token), "x-correlation-id": correlationId },
        body: JSON.stringify(body),
        signal: input.signal ?? undefined,
      });
    } catch (error) {
      trace("upstream_fetch_failure", {
        error_type: error instanceof Error ? error.name : "unknown",
        aborted: Boolean(input.signal?.aborted),
      });
      return wrapped(
        errorResponse(502, error instanceof Error ? error.message : String(error)),
        input.body,
        url
      );
    }

    trace("response_headers", { http_status: response.status });
    if (!response.ok) {
      return wrapped(
        errorResponse(response.status, await readRelayError(response)),
        input.body,
        url
      );
    }

    if (input.stream) {
      return wrapped(
        new Response(createRelaySseStream(response, input.model, input.log), {
          status: 200,
          headers: SSE_HEADERS,
        }),
        input.body,
        url
      );
    }

    let content: string;
    try {
      content = await readRelayStreamCompletion(response);
    } catch (error) {
      trace("upstream_body_failure", {
        error_type: error instanceof Error ? error.name : "unknown",
        aborted: Boolean(input.signal?.aborted),
      });
      return wrapped(
        errorResponse(502, error instanceof Error ? error.message : String(error)),
        input.body,
        url
      );
    }

    return wrapped(
      new Response(JSON.stringify(chatCompletion(input.model, content)), {
        status: 200,
        headers: JSON_HEADERS,
      }),
      input.body,
      url
    );
  }
}
