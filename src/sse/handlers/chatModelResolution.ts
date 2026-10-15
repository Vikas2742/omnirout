import { isSystemOneOnlyModel } from "@omniroute/open-sse/config/systemoneRegistry.ts";
import { buildErrorBody } from "@omniroute/open-sse/utils/error.ts";
import { CORS_HEADERS } from "@omniroute/open-sse/utils/cors.ts";
import { getModelInfoOrRetirementResponse } from "../services/model";

/** Shared by direct chat and each combo leg, before selecting any credentials. */
export async function getChatModelInfo(modelId: string) {
  const info = await getModelInfoOrRetirementResponse(modelId);
  if ("error" in info || !isSystemOneOnlyModel(info.provider, info.model)) return info;
  const body = buildErrorBody(400, "System One models do not support chat completions");
  // The endpoint is a trusted constant, not an upstream filesystem path to redact.
  body.error.message += "; use /v1/systemone";
  return { error: Response.json(body, { status: 400, headers: CORS_HEADERS }) };
}
