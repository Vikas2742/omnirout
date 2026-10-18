export interface ProviderSafetyInput {
  status?: unknown;
  code?: unknown;
  type?: unknown;
  message?: unknown;
}

/** Classify explicit protocol safety stops without inferring a private detector from prose. */
export function classifyProviderSafetyError(
  input: ProviderSafetyInput
): { status: number; code: string } | null {
  let code = typeof input.code === "string" ? input.code : "";
  if (
    code !== "misalignment_policy_violation" &&
    code !== "content_policy_violation" &&
    code !== "provider_safety_rejection"
  ) {
    if (
      (input.code !== undefined &&
        input.code !== null &&
        input.code !== "" &&
        input.code !== "invalid_request_error" &&
        input.code !== "bad_request") ||
      input.type !== "invalid_request_error" ||
      input.message !==
        "This request was blocked by our safety systems. Reason: Potentially unintended activity."
    ) {
      return null;
    }
    // A bounded local label preserves a legacy stop without inventing its upstream code.
    code = "provider_safety_rejection";
  }
  const status = input.status ?? (code === "misalignment_policy_violation" ? 403 : 400);
  if (status !== 400 && status !== 403) return null;
  return { status, code };
}
