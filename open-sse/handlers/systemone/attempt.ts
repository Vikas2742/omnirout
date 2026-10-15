import { runWithProxyContext } from "../../utils/proxyFetch.ts";
import { systemOneAdapters } from "./adapters.ts";
import { SystemOneConfigurationError } from "./cloudflare.ts";
import { asRecord, safeSystemOneText } from "./shared.ts";
import {
  recordSystemOneHealth,
  requestSignal,
  systemOneDefaults,
  type SystemOneProxyOptions,
} from "./runtime.ts";
import type { SystemOneError, SystemOneResult } from "./types.ts";

export interface SystemOneAttempt {
  status: number;
  result?: SystemOneResult;
  error?: SystemOneError;
  upstreamRequestId?: string;
  attempted: boolean;
}

async function fetchSystemOne(
  options: SystemOneProxyOptions,
  signal: AbortSignal,
  markAttempted: () => void
): Promise<Response> {
  const adapter = systemOneAdapters[options.target.adapter];
  const upstreamRequest = adapter.buildRequest(
    options.target.upstreamModel,
    options.body,
    options.credentials
  );
  const proxyInfo = options.credentials.connectionId
    ? await (options.resolveProxyImpl ?? systemOneDefaults.resolveProxyForConnection)(
        options.credentials.connectionId
      )
    : null;
  const doFetch = () => {
    markAttempted();
    signal.throwIfAborted();
    return (options.fetchImpl ?? globalThis.fetch)(upstreamRequest.url, {
      method: "POST",
      headers: { ...options.forwardedHeaders, ...upstreamRequest.headers },
      body: JSON.stringify(upstreamRequest.body),
      signal,
    });
  };
  return (options.runProxyImpl ?? runWithProxyContext)(proxyInfo?.proxy || null, doFetch);
}

async function normalizeAttempt(
  upstream: Response,
  options: SystemOneProxyOptions
): Promise<Omit<SystemOneAttempt, "attempted">> {
  const parsed: unknown = await upstream.json().catch(() => null);
  const rawId =
    upstream.headers.get("x-typesafe-request-id") ||
    upstream.headers.get("cf-ray") ||
    upstream.headers.get("x-request-id");
  const upstreamRequestId = rawId ? safeSystemOneText(rawId, options.credentials) : undefined;
  const adapter = systemOneAdapters[options.target.adapter];
  if (upstream.ok && asRecord(parsed)?.success !== false) {
    return { status: 200, result: adapter.normalizeSuccess(parsed), upstreamRequestId };
  }
  const status = upstream.ok ? 502 : upstream.status;
  const error = adapter.normalizeError(status, parsed, upstream.headers);
  error.message = safeSystemOneText(error.message, options.credentials);
  await recordSystemOneHealth(options, status, upstream.headers).catch(() => {
    console.warn("[SYSTEMONE] Could not update upstream health state");
  });
  return { status, error, upstreamRequestId };
}

function exceptionError(caught: unknown, aborted: boolean, timedOut: boolean): SystemOneError {
  if (aborted)
    return { status: 499, error_type: "request_aborted", message: "Request aborted by caller" };
  if (timedOut)
    return { status: 504, error_type: "timeout_error", message: "System One request timed out" };
  if (caught instanceof SystemOneConfigurationError)
    return { status: 400, error_type: "api_usage_error", message: caught.message };
  return {
    status: 502,
    error_type: "connection_error",
    message: "System One upstream request failed",
  };
}

export async function executeSystemOneAttempt(
  options: SystemOneProxyOptions
): Promise<SystemOneAttempt> {
  const timer = requestSignal(options.signal, options.timeoutMs ?? 30_000);
  let attempted = false;
  try {
    const response = await fetchSystemOne(options, timer.signal, () => {
      attempted = true;
    });
    const result = await normalizeAttempt(response, options);
    timer.signal.throwIfAborted();
    return { ...result, attempted };
  } catch (caught) {
    const error = exceptionError(caught, options.signal?.aborted === true, timer.timedOut());
    return { status: error.status, error, attempted };
  } finally {
    timer.cleanup();
  }
}
