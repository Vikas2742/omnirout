import {
  resolveSystemOneModel,
  type SystemOneTarget,
} from "@omniroute/open-sse/config/systemoneRegistry.ts";
import { systemOneErrorResponse } from "@omniroute/open-sse/handlers/systemone/shared.ts";
import type { SystemOneCredentials } from "@omniroute/open-sse/handlers/systemone/types.ts";
import type { SingleModelTarget } from "@omniroute/open-sse/services/combo/types.ts";
import { isAllRateLimitedCredentials, rateLimitedProviderResponse } from "./rateLimit";
import type { SystemOneBody, SystemOneRouteDependencies } from "./systemoneRoutes";

async function selectCredentials(
  target: SystemOneTarget,
  targetInfo: SingleModelTarget | undefined,
  allowed: string[] | undefined,
  deps: SystemOneRouteDependencies
): Promise<Response | SystemOneCredentials> {
  const pinned = targetInfo && "connectionId" in targetInfo ? targetInfo.connectionId : undefined;
  if (pinned && allowed?.length && !allowed.includes(pinned)) {
    return systemOneErrorResponse({
      status: 403,
      error_type: "authentication_error",
      message: "Connection access denied",
    });
  }
  const credentials = await deps.getCredentials(
    target.provider,
    null,
    pinned ? [pinned] : allowed || null,
    target.id
  );
  if (!credentials || ("allExpired" in credentials && credentials.allExpired)) {
    return systemOneErrorResponse({
      status: 401,
      error_type: "authentication_error",
      message: "No System One provider credential is configured",
    });
  }
  if (isAllRateLimitedCredentials(credentials)) {
    const standard = rateLimitedProviderResponse(target.provider, credentials);
    return systemOneErrorResponse({
      status: 429,
      error_type: "rate_limit_error",
      message: "All configured credentials are temporarily rate limited",
      retryAfter: standard.headers.get("retry-after") || undefined,
    });
  }
  return credentials as SystemOneCredentials;
}

function clientHeaders(request: Request): Record<string, string> {
  const headers: Record<string, string> = {};
  for (const name of ["x-typesafe-sdk", "x-typesafe-runtime", "x-typesafe-retry-count"]) {
    const value = request.headers.get(name);
    if (value) headers[name] = value;
  }
  return headers;
}

export async function dispatchSystemOne(
  request: Request,
  body: SystemOneBody,
  deps: SystemOneRouteDependencies,
  targetInfo?: SingleModelTarget
): Promise<Response> {
  const alias = await deps.resolveAlias(body.model);
  const target = resolveSystemOneModel(alias || body.model);
  if (!target)
    return systemOneErrorResponse({
      status: 400,
      error_type: "api_usage_error",
      message:
        "Unknown System One model; use typesafe/jev-latest or cloudflare-ai/jev|clef|clef-flash",
    });
  const policy = await deps.enforcePolicy(request, `${target.provider}/${target.id}`);
  if (policy.rejection) return policy.rejection;
  const credentials = await selectCredentials(
    target,
    targetInfo,
    policy.apiKeyInfo?.allowedConnections,
    deps
  );
  if (credentials instanceof Response) return credentials;
  const response = await deps.proxy({
    target,
    body,
    credentials,
    signal: targetInfo?.modelAbortSignal
      ? AbortSignal.any([request.signal, targetInfo.modelAbortSignal])
      : request.signal,
    forwardedHeaders: clientHeaders(request),
    apiKeyId: policy.apiKeyInfo?.id,
    apiKeyName: policy.apiKeyInfo?.name,
  });
  if (response.ok) await deps.clearRecovered(credentials);
  return response;
}
