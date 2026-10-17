import { handleImageGeneration } from "@omniroute/open-sse/handlers/imageGeneration.ts";
import { errorResponse } from "@omniroute/open-sse/utils/error.ts";
import { HTTP_STATUS } from "@omniroute/open-sse/config/constants.ts";
import {
  getProviderCredentialsWithQuotaPreflight,
  clearRecoveredProviderState,
} from "@/sse/services/auth";
import { getImageProvider, parseImageModel } from "@omniroute/open-sse/config/imageRegistry.ts";
import * as log from "@/sse/utils/logger";
import { toJsonErrorPayload, extractErrorMessage } from "@/shared/utils/upstreamError";
import { isUsableImageCredentials } from "@/sse/services/imageCredentials";
import {
  enforceApiKeyPolicyWithScope,
  unusableCredentialsResponse,
} from "@/app/api/v1/_shared/keyScopedRoute";
import { v1ImageGenerationSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { enforceClientApiRouteAuth } from "@/shared/utils/clientApiRouteAuth";
import { runImageRequestWithAccounting } from "@/lib/usage/imageRequestAccounting";
import { executeImageWithCredentialFallback } from "@/sse/services/imageCredentialRetry";
import { isCodexImagesModel } from "@omniroute/open-sse/handlers/codexImages.ts";
import { rejectRetiredCommonChatGptWebProvider } from "@/lib/providers/chatgptWebRetirementResponse";

/**
 * Handle CORS preflight
 */
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

/**
 * POST /v1/providers/{provider}/images/generations
 */
export async function POST(request, { params }) {
  const { provider: rawProvider } = await params;
  const retirementResponse = rejectRetiredCommonChatGptWebProvider(rawProvider);
  if (retirementResponse) return retirementResponse;

  // Verify this is a valid image provider
  const imageProvider = getImageProvider(rawProvider);
  if (!imageProvider) {
    return errorResponse(HTTP_STATUS.BAD_REQUEST, `Unknown image provider: ${rawProvider}`);
  }

  const input = await readImageProviderBody(request);
  if ("rejection" in input) return input.rejection;
  const body = input.body;
  const startTime = Date.now();

  // Ensure model has provider prefix
  if (!body.model.includes("/")) {
    body.model = `${rawProvider}/${body.model}`;
  }

  const authRejection = await enforceClientApiRouteAuth(request);
  if (authRejection) return authRejection;

  // Enforce API key policies (model restrictions + budget limits). GHSA-3w2r:
  // credential selection stays inside the key's connection scope, as in chat.
  const scope = await enforceApiKeyPolicyWithScope(request, body.model);
  if (scope.rejection) return scope.rejection;
  const { policy } = scope;

  // Validate provider match
  const modelProvider = body.model.split("/")[0];
  if (modelProvider !== rawProvider) {
    return errorResponse(
      HTTP_STATUS.BAD_REQUEST,
      `Model "${body.model}" does not belong to image provider "${rawProvider}"`
    );
  }

  // Use the handler's registry resolution for accounting, without rewriting the
  // request or changing credential selection/retry. Never dispatch an alias that
  // resolves outside the provider whose credentials this scoped route selects.
  const parsedModel = parseImageModel(body.model);
  if (parsedModel.provider !== imageProvider.id) {
    return errorResponse(
      HTTP_STATUS.BAD_REQUEST,
      `Model "${body.model}" does not belong to image provider "${rawProvider}"`
    );
  }
  const requestedModel = body.model.slice(rawProvider.length + 1);
  let credentials = await getProviderCredentialsWithQuotaPreflight(
    rawProvider,
    null,
    scope.allowedConnections,
    requestedModel
  );
  if (!credentials) {
    return errorResponse(
      HTTP_STATUS.BAD_REQUEST,
      `No credentials for image provider: ${rawProvider}`
    );
  }
  const unusable = unusableCredentialsResponse(rawProvider, credentials);
  if (unusable) return unusable;

  if (!isUsableImageCredentials(credentials)) {
    return errorResponse(401, "Image credential selection did not return usable credentials");
  }

  const execution = await executeImageWithCredentialFallback({
    provider: rawProvider,
    requestedModel,
    credentials,
    allowedConnections: scope.allowedConnections,
    execute: (attemptCredentials) =>
      runImageRequestWithAccounting(
        {
          endpoint: "/v1/images/generations",
          provider: parsedModel.provider,
          model: parsedModel.model,
          apiKeyInfo: policy.apiKeyInfo,
          credentials: attemptCredentials,
          startTime,
          recordCallLog: parsedModel.provider === "codex" && isCodexImagesModel(parsedModel.model),
        },
        () => handleImageGeneration({ body, credentials: attemptCredentials, log })
      ),
  });
  credentials = execution.credentials;
  const result = execution.result;
  return imageProviderResultResponse(result, credentials);
}

async function imageProviderResultResponse(
  result: Awaited<ReturnType<typeof handleImageGeneration>>,
  credentials: Parameters<typeof clearRecoveredProviderState>[0]
): Promise<Response> {
  if (result.success) {
    await clearRecoveredProviderState(credentials);
    return new Response(JSON.stringify("data" in result ? result.data : undefined), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const errorPayload = toJsonErrorPayload(
    "error" in result ? result.error : undefined,
    "Image generation provider error"
  );
  const message =
    extractErrorMessage("error" in errorPayload ? errorPayload.error : errorPayload) ??
    "Image generation provider error";
  return errorResponse("status" in result ? result.status : undefined, message);
}

async function readImageProviderBody(request: Request) {
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return { rejection: errorResponse(HTTP_STATUS.BAD_REQUEST, "Invalid JSON body") };
  }
  const validation = validateBody(v1ImageGenerationSchema, rawBody);
  if (isValidationFailure(validation))
    return { rejection: errorResponse(HTTP_STATUS.BAD_REQUEST, validation.error.message) };
  return { body: validation.data };
}
