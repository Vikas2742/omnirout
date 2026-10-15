/** System One transport; API compatibility adapted from Sean P. Ford's PR #14498. */
import { attachOmniRouteMetaHeaders } from "@/domain/omnirouteResponseMeta";
import { generateRequestId } from "@/shared/utils/requestId";
import { CORS_HEADERS } from "../utils/cors.ts";
import { systemOneErrorResponse } from "./systemone/shared.ts";
import { executeSystemOneAttempt } from "./systemone/attempt.ts";
import { logSystemOneAttempt, recordSystemOneSuccess } from "./systemone/accounting.ts";
import type { SystemOneProxyOptions } from "./systemone/runtime.ts";
export type { SystemOneProxyOptions } from "./systemone/runtime.ts";

export async function handleSystemOneProxy(options: SystemOneProxyOptions): Promise<Response> {
  if (!options.credentials.apiKey && !options.credentials.accessToken) {
    return systemOneErrorResponse({
      status: 401,
      error_type: "authentication_error",
      message: "No System One credential configured",
    });
  }
  const startedAt = Date.now();
  const requestId = generateRequestId();
  const attempt = await executeSystemOneAttempt(options);
  const costUsd = await recordSystemOneSuccess(options, attempt, requestId);
  await logSystemOneAttempt(options, attempt, costUsd, startedAt);
  if (attempt.error) return systemOneErrorResponse(attempt.error, options.credentials);
  const headers = new Headers({ ...CORS_HEADERS, "Content-Type": "application/json" });
  if (attempt.upstreamRequestId) headers.set("x-typesafe-request-id", attempt.upstreamRequestId);
  attachOmniRouteMetaHeaders(headers, {
    provider: options.target.provider,
    model: attempt.result!.model,
    costUsd,
    latencyMs: Date.now() - startedAt,
    requestId,
  });
  return Response.json(attempt.result, { headers });
}
