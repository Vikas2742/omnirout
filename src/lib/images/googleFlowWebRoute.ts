import { getSettings } from "@/lib/db/settings";
import { isModelAllowedForKey } from "@/lib/db/apiKeys";
import { hasApiKeyModelRestrictions } from "@/shared/utils/resolvedModelAccess";
import { isProviderBlockedByIdOrAlias } from "@/shared/utils/noAuthProviders";
import { extractApiKey, isValidApiKey } from "@/sse/services/auth";
import { enforceApiKeyPolicy, checkApiKeyAuthorization } from "@/shared/utils/apiKeyPolicy";
import { errorResponse } from "@omniroute/open-sse/utils/error.ts";
import { HTTP_STATUS } from "@omniroute/open-sse/config/constants.ts";
import { getImageProvider, getImageModelEntry } from "@omniroute/open-sse/config/imageRegistry.ts";
import { handleGoogleFlowWebImageGeneration } from "@omniroute/open-sse/handlers/imageGeneration/providers/googleFlowWeb.ts";
import { getGoogleFlowWebConfig } from "@omniroute/open-sse/services/googleFlowWebConfig.ts";
import { runWithCallLogApiKeyContext } from "@/lib/usage/callLogApiKeyContext";
import { OMNIROUTE_RESPONSE_HEADERS } from "@/shared/constants/headers";
import { attachOmniRouteMetaHeaders } from "@/domain/omnirouteResponseMeta";
import { generateRequestId } from "@/shared/utils/requestId";

const PROVIDER = "google-flow-web";
const MODEL = "nano-banana-2.1";
export const googleFlowWebSettings = { read: getSettings };
function rawModel(body: unknown, provider?: string): string | null {
  if (
    !body ||
    typeof body !== "object" ||
    typeof (body as Record<string, unknown>).model !== "string"
  )
    return null;
  const model = (body as Record<string, unknown>).model as string;
  return provider && model === MODEL ? `${provider}/${model}` : model;
}
function isFlowRequest(body: unknown, provider?: string): boolean {
  const model = rawModel(body, provider);
  return model === PROVIDER || model?.startsWith(`${PROVIDER}/`) === true || provider === PROVIDER;
}
function flowModel(body: unknown, provider?: string): string {
  const model = rawModel(body, provider);
  return model === MODEL && provider ? `${provider}/${MODEL}` : model || "";
}
async function admission(request: Request, model: string) {
  const key = extractApiKey(request);
  if (!key || !(await isValidApiKey(key)))
    return {
      response: errorResponse(
        HTTP_STATUS.UNAUTHORIZED,
        "A valid OmniRoute API key is required for Google Flow web."
      ),
    };
  const policy = await enforceApiKeyPolicy(request, model);
  if (policy.rejection) return { response: policy.rejection };
  if (policy.apiKeyInfo) {
    const rejection = await checkApiKeyAuthorization(request, key, policy.apiKeyInfo, model);
    if (rejection) return { response: rejection };
  }
  // Flow is dispatched directly: a model-to-combo mapping never grants model authority here.
  if (hasApiKeyModelRestrictions(policy.apiKeyInfo)) {
    try {
      if (!(await isModelAllowedForKey(key, model)))
        return {
          response: errorResponse(
            HTTP_STATUS.FORBIDDEN,
            "This API key is not allowed to use the Google Flow web model directly."
          ),
        };
    } catch {
      return {
        response: errorResponse(
          HTTP_STATUS.SERVICE_UNAVAILABLE,
          "Google Flow model authorization is unavailable; request refused."
        ),
      };
    }
  }
  if (
    Array.isArray(policy.apiKeyInfo?.allowedConnections) &&
    policy.apiKeyInfo.allowedConnections.length > 0 &&
    !policy.apiKeyInfo.allowedConnections.includes("noauth")
  ) {
    return {
      response: errorResponse(
        HTTP_STATUS.FORBIDDEN,
        "This API key is not allowed to use the Google Flow web connection."
      ),
    };
  }
  try {
    const settings = await googleFlowWebSettings.read();
    if (isProviderBlockedByIdOrAlias(PROVIDER, settings.blockedProviders))
      return {
        response: errorResponse(
          HTTP_STATUS.FORBIDDEN,
          "Google Flow web provider is disabled in provider settings."
        ),
      };
  } catch {
    return {
      response: errorResponse(
        HTTP_STATUS.SERVICE_UNAVAILABLE,
        "Google Flow provider settings are unavailable; request refused."
      ),
    };
  }
  if (!getGoogleFlowWebConfig())
    return {
      response: errorResponse(
        HTTP_STATUS.FORBIDDEN,
        "Google Flow web provider is disabled; configure a valid loopback CDP endpoint and project UUID."
      ),
    };
  return { policy };
}
/** Shared fail-closed admission for both image-generation route spellings. */
export async function maybeHandleGoogleFlowWebImageRoute(
  request: Request,
  body: unknown,
  provider?: string
): Promise<Response | null> {
  if (!isFlowRequest(body, provider)) return null;
  const startTime = Date.now();
  if (provider && provider !== PROVIDER)
    return errorResponse(400, "Model does not belong to the requested provider.");
  const model = flowModel(body, provider);
  if (model !== `${PROVIDER}/${MODEL}` || !getImageProvider(PROVIDER) || !getImageModelEntry(model))
    return errorResponse(HTTP_STATUS.BAD_REQUEST, `Only ${PROVIDER}/${MODEL} is supported.`);
  try {
    const admissionResult = await admission(request, model);
    if (admissionResult.response) return admissionResult.response;
    const policy = admissionResult.policy;
    const result = await runWithCallLogApiKeyContext(
      { apiKeyId: policy?.apiKeyInfo?.id ?? null, apiKeyName: policy?.apiKeyInfo?.name ?? null },
      () =>
        handleGoogleFlowWebImageGeneration({
          body: { ...(body as Record<string, unknown>), model: MODEL },
          model: MODEL,
          signal: request.signal,
        })
    );
    if ("error" in result)
      return errorResponse(
        result.status || 502,
        typeof result.error === "string" ? result.error : "Google Flow web image generation failed."
      );
    const data = (result as { data: unknown }).data;
    const headers = new Headers({ "Content-Type": "application/json" });
    attachOmniRouteMetaHeaders(headers, {
      provider: PROVIDER,
      model: `${PROVIDER}/${MODEL}`,
      latencyMs: Date.now() - startTime,
      requestId: generateRequestId(),
    });
    // No measured token usage or per-image price: do not turn helper defaults into accounting facts.
    for (const key of [
      OMNIROUTE_RESPONSE_HEADERS.responseCost,
      OMNIROUTE_RESPONSE_HEADERS.tokensIn,
      OMNIROUTE_RESPONSE_HEADERS.tokensOut,
    ])
      headers.delete(key);
    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch {
    return errorResponse(
      502,
      "Google Flow web image generation failed; inspect the attached browser. No retry was attempted."
    );
  }
}
