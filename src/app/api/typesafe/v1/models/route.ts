import {
  getProviderCredentialsWithQuotaPreflight,
  clearRecoveredProviderState,
} from "@/sse/services/auth";
import { enforceSystemOnePolicy } from "@/app/api/v1/_shared/systemonePolicy";
import { isAllRateLimitedCredentials } from "@/app/api/v1/_shared/rateLimit";
import { handleTypeSafeModelsProxy } from "@omniroute/open-sse/handlers/systemone/models.ts";
import { systemOneErrorResponse } from "@omniroute/open-sse/handlers/systemone/shared.ts";
import type { SystemOneCredentials } from "@omniroute/open-sse/handlers/systemone/types.ts";
export { systemOneOptions as OPTIONS } from "@/app/api/v1/_shared/systemoneRoutes";

export async function GET(request: Request) {
  const policy = await enforceSystemOnePolicy(request, "typesafe/jev-latest");
  if (policy.rejection) return policy.rejection;
  const credentials = await getProviderCredentialsWithQuotaPreflight(
    "typesafe",
    null,
    policy.apiKeyInfo?.allowedConnections || null
  );
  if (!credentials || ("allExpired" in credentials && credentials.allExpired))
    return systemOneErrorResponse({
      status: 401,
      error_type: "authentication_error",
      message: "No TypeSafe provider credential is configured",
    });
  if (isAllRateLimitedCredentials(credentials))
    return systemOneErrorResponse({
      status: 429,
      error_type: "rate_limit_error",
      message: "All TypeSafe credentials are rate limited",
    });
  const response = await handleTypeSafeModelsProxy(
    credentials as SystemOneCredentials,
    request.signal
  );
  if (response.ok) await clearRecoveredProviderState(credentials);
  return response;
}
