import { checkKeyQuota } from "@/domain/keyQuota";
import { rejectIfMeteredBudgetExceeded } from "@/lib/usage/meteredBudgetPolicy";
import { checkTokenLimits } from "@omniroute/open-sse/services/tokenLimitCounter.ts";
import { errorResponse } from "@omniroute/open-sse/utils/error.ts";

/** Candidate eligibility only: never consumes a client request-rate-limit slot. */
export function systemOneCandidateRejection(apiKeyId: string, model: string): Response | null {
  const separator = model.indexOf("/");
  const provider = model.slice(0, separator);
  const id = model.slice(separator + 1);
  try {
    // Check the resolved provider/id as well as the qualified spelling accepted
    // by the request-level policy. Neither read consumes token allowance.
    const breach =
      checkTokenLimits(apiKeyId, provider, id) ?? checkTokenLimits(apiKeyId, provider, model);
    if (breach) {
      return errorResponse(
        429,
        `Token limit exceeded for ${breach.scopeType}: ${breach.tokensUsed}/${breach.limitValue} tokens used in the current window.`,
        { code: "token_limit_exceeded", retryAfter: breach.nextResetAt }
      );
    }
    const quota = checkKeyQuota(apiKeyId);
    if (!quota.allowed) return errorResponse(429, quota.reason || "API key quota exceeded");
    return rejectIfMeteredBudgetExceeded(apiKeyId, provider, model);
  } catch {
    // A failed policy read must not authorize another paid upstream attempt.
    return errorResponse(503, "System One candidate policy unavailable");
  }
}
