import { sanitizeErrorMessage } from "../../utils/error.ts";
import { CORS_HEADERS } from "../../utils/cors.ts";
import type { SystemOneCredentials, SystemOneError, SystemOneResult } from "./types.ts";

export function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

export function nativeResult(body: unknown): SystemOneResult {
  const record = asRecord(body);
  const usage = asRecord(record?.usage);
  const validTokens = (value: unknown): value is number =>
    typeof value === "number" && Number.isFinite(value) && value >= 0;
  if (
    typeof record?.model !== "string" ||
    !asRecord(record.answers) ||
    !validTokens(usage?.input_tokens) ||
    !validTokens(usage?.output_tokens)
  ) {
    throw new Error("Invalid System One upstream response");
  }
  return {
    model: record.model,
    answers: asRecord(record.answers)!,
    usage: { input_tokens: usage.input_tokens, output_tokens: usage.output_tokens },
  };
}

export function authHeaders(credentials: SystemOneCredentials): Record<string, string> {
  return {
    Accept: "application/json",
    Authorization: `Bearer ${credentials.apiKey || credentials.accessToken}`,
    "Content-Type": "application/json",
  };
}

export function normalizeError(status: number, message: unknown, headers: Headers): SystemOneError {
  const error_type =
    status === 402
      ? "insufficient_balance"
      : status === 401 || status === 403
        ? "authentication_error"
        : status === 429
          ? "rate_limit_error"
          : status < 500
            ? "api_usage_error"
            : "server_error";
  return {
    status,
    error_type,
    message: typeof message === "string" && message ? message : `Upstream returned HTTP ${status}`,
    ...(status === 429 && headers.get("retry-after")
      ? { retryAfter: headers.get("retry-after")! }
      : {}),
  };
}

/** Redact connection secrets before the shared sanitizer, including upstream-echoed values. */
export function safeSystemOneText(value: string, credentials: SystemOneCredentials = {}): string {
  let text = value;
  for (const secret of [
    credentials.apiKey,
    credentials.accessToken,
    credentials.providerSpecificData?.accountId,
  ]) {
    if (typeof secret === "string" && secret) text = text.split(secret).join("[REDACTED]");
  }
  return sanitizeErrorMessage(text.replace(/\b[a-fA-F0-9]{32}\b/g, "[REDACTED]"));
}

export function systemOneErrorResponse(
  error: SystemOneError,
  credentials?: SystemOneCredentials
): Response {
  const headers = new Headers(CORS_HEADERS);
  if (error.retryAfter && /^(?:\d{1,10}|[A-Za-z]{3}, [\w ,:-]{1,60} GMT)$/.test(error.retryAfter))
    headers.set("Retry-After", safeSystemOneText(error.retryAfter, credentials));
  return Response.json(
    {
      detail: {
        error_type: error.error_type,
        message: safeSystemOneText(error.message, credentials),
      },
    },
    { status: error.status, headers }
  );
}
