import { resolveProxyForConnection } from "@/lib/db/settings";
import { attachOmniRouteMetaHeaders } from "@/domain/omnirouteResponseMeta";
import { generateRequestId } from "@/shared/utils/requestId";
import { CORS_HEADERS } from "../../utils/cors.ts";
import { runWithProxyContext } from "../../utils/proxyFetch.ts";
import { typesafeAdapter } from "./typesafe.ts";
import { authHeaders, systemOneErrorResponse } from "./shared.ts";
import { requestSignal } from "./runtime.ts";
import type { SystemOneCredentials } from "./types.ts";

/** Preserve TypeSafe SDK native discovery (including version/release metadata). */
export async function handleTypeSafeModelsProxy(
  credentials: SystemOneCredentials,
  signal: AbortSignal
): Promise<Response> {
  const timer = requestSignal(signal, 30_000);
  const startedAt = Date.now();
  try {
    const proxy = credentials.connectionId
      ? await resolveProxyForConnection(credentials.connectionId)
      : null;
    const response = await runWithProxyContext(proxy?.proxy || null, () =>
      fetch("https://api.typesafe.ai/v1/models", {
        method: "GET",
        headers: authHeaders(credentials),
        signal: timer.signal,
      })
    );
    const body: unknown = await response.json();
    if (!response.ok)
      return systemOneErrorResponse(
        typesafeAdapter.normalizeError(response.status, body, response.headers),
        credentials
      );
    const headers = new Headers(CORS_HEADERS);
    attachOmniRouteMetaHeaders(headers, {
      provider: "typesafe",
      model: "",
      costUsd: 0,
      latencyMs: Date.now() - startedAt,
      requestId: generateRequestId(),
    });
    return Response.json(body, { headers });
  } catch {
    return systemOneErrorResponse({
      status: signal.aborted ? 499 : timer.timedOut() ? 504 : 502,
      error_type: signal.aborted
        ? "request_aborted"
        : timer.timedOut()
          ? "timeout_error"
          : "connection_error",
      message: "TypeSafe model discovery failed",
    });
  } finally {
    timer.cleanup();
  }
}
