import { enforceApiKeyPolicy } from "@/shared/utils/apiKeyPolicy";
import { extractApiKey } from "@/sse/services/auth";
import { validateApiKey } from "@/lib/db/apiKeys";
import { getSettings } from "@/lib/db/settings";
import { systemOneErrorResponse } from "@omniroute/open-sse/handlers/systemone/shared.ts";

/** The policy helper alone does not authenticate unknown keys. */
export async function enforceSystemOnePolicy(request: Request, model: string) {
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
  return enforceApiKeyPolicy(request, model);
}
