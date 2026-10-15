import type { SystemOneAdapter } from "./types.ts";
import { asRecord, authHeaders, nativeResult, normalizeError } from "./shared.ts";

export const typesafeAdapter: SystemOneAdapter = {
  buildRequest: (model, input, credentials) => ({
    url: "https://api.typesafe.ai/v1/systemone",
    headers: authHeaders(credentials),
    body: { model, state: input.state, questions: input.questions },
  }),
  normalizeSuccess: nativeResult,
  normalizeError: (status, body, headers) => {
    const detail = asRecord(body)?.detail;
    const validationMessages = Array.isArray(detail)
      ? detail
          .map((entry) => asRecord(entry)?.msg)
          .filter((msg): msg is string => typeof msg === "string")
          .join("; ")
      : undefined;
    return normalizeError(status, asRecord(detail)?.message ?? validationMessages, headers);
  },
};
