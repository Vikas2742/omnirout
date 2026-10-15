import { SYSTEMONE_PROVIDERS } from "../../config/systemoneRegistry.ts";
import type { SystemOneAdapter } from "./types.ts";
import { asRecord, authHeaders, nativeResult, normalizeError } from "./shared.ts";

export class SystemOneConfigurationError extends Error {}

export const cloudflareAdapter: SystemOneAdapter = {
  buildRequest: (upstreamModel, input, credentials) => {
    const accountId = credentials.providerSpecificData?.accountId;
    if (typeof accountId !== "string" || !/^[a-f0-9]{32}$/.test(accountId)) {
      throw new SystemOneConfigurationError(
        "Cloudflare System One requires an Account ID containing exactly 32 lowercase hexadecimal characters; update provider settings."
      );
    }
    // Retrieve the selector from the registry itself: no client-controlled URL paths.
    const model = SYSTEMONE_PROVIDERS["cloudflare-ai"].models.find(
      (entry) => entry.upstreamModel === upstreamModel
    );
    if (!model) throw new SystemOneConfigurationError("Unknown Cloudflare System One model");
    const base = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run`;
    const jev = model.upstreamModel === "typesafe/jev";
    return {
      url: jev ? base : `${base}/@cf/cloudflare/${model.upstreamModel}`,
      headers: authHeaders(credentials),
      body: jev
        ? { model: model.upstreamModel, input: { state: input.state, questions: input.questions } }
        : { model: model.upstreamModel, state: input.state, questions: input.questions },
    };
  },
  normalizeSuccess: (body) => {
    const envelope = asRecord(body);
    if (envelope?.success !== true) throw new Error("Cloudflare System One execution failed");
    const result = asRecord(envelope.result);
    return nativeResult(result?.state === "Completed" ? result.result : result);
  },
  normalizeError: (status, body, headers) => {
    const errors = asRecord(body)?.errors;
    return normalizeError(
      status,
      Array.isArray(errors) ? asRecord(errors[0])?.message : undefined,
      headers
    );
  },
};
