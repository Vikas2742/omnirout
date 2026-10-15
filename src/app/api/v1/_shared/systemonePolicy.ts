import {
  enforceApiKeyPolicy,
  validateApiKeyRoutingTarget,
  type ApiKeyMetadata,
  type EnforceApiKeyPolicyOptions,
} from "@/shared/utils/apiKeyPolicy";
import { extractApiKey } from "@/sse/services/auth";
import { validateApiKey } from "@/lib/db/apiKeys";
import { getSettings } from "@/lib/db/settings";
import { asRecord, systemOneErrorResponse } from "@omniroute/open-sse/handlers/systemone/shared.ts";
import { systemOneCandidateRejection } from "./systemoneLimits";

export type SystemOnePolicyResult = {
  apiKey?: string | null;
  apiKeyInfo: Partial<ApiKeyMetadata> | null;
  rejection: Response | null;
};

/** Project shared policy failures onto the native System One contract. */
export async function systemOnePolicyRejection(
  response: Response | null
): Promise<Response | null> {
  if (!response) return null;
  const body = asRecord(
    await response
      .clone()
      .json()
      .catch(() => null)
  );
  const error = asRecord(body?.error);
  return systemOneErrorResponse({
    status: response.status,
    error_type:
      response.status === 429
        ? error?.code === "token_limit_exceeded"
          ? "token_limit_exceeded"
          : "rate_limit_error"
        : [401, 403].includes(response.status)
          ? "authentication_error"
          : response.status >= 500
            ? "server_error"
            : "api_usage_error",
    message: typeof error?.message === "string" ? error.message : "API key policy rejected request",
    retryAfter: response.headers.get("retry-after") || undefined,
  });
}

/** Recheck authorization and non-consuming limits, never client request slots. */
export async function enforceSystemOneTargetPolicy(
  request: Request,
  model: string,
  policy: SystemOnePolicyResult
): Promise<Response | null> {
  if (!policy.apiKeyInfo?.id) return null;
  const rejection = await validateApiKeyRoutingTarget(
    request,
    policy.apiKey ?? extractApiKey(request),
    { ...policy.apiKeyInfo, id: policy.apiKeyInfo.id },
    model
  );
  return systemOnePolicyRejection(
    rejection ?? systemOneCandidateRejection(policy.apiKeyInfo.id, model)
  );
}

/** The policy helper alone does not authenticate unknown keys. */
export async function enforceSystemOnePolicy(
  request: Request,
  model: string,
  options?: EnforceApiKeyPolicyOptions
) {
  const key = extractApiKey(request);
  const settings = await getSettings();
  if (
    (key && !(await validateApiKey(key))) ||
    (!key && (settings.requireApiKey === true || process.env.REQUIRE_API_KEY === "true"))
  ) {
    return {
      apiKeyInfo: null,
      rejection: systemOneErrorResponse({
        status: 401,
        error_type: "authentication_error",
        message: "A valid OmniRoute API key is required",
      }),
    };
  }
  const policy = await enforceApiKeyPolicy(request, model, options);
  return { ...policy, rejection: await systemOnePolicyRejection(policy.rejection) };
}
