import { ZodError } from "zod";
import { getGoogleFlowWebConfig } from "../../../services/googleFlowWebConfig.ts";
import { googleFlowWebBrowser } from "../../../services/googleFlowWebBrowser.ts";
import { GoogleFlowWebError } from "../../../services/googleFlowWebResponse.ts";
import { sanitizeErrorMessage } from "../../../utils/error.ts";
import { saveImageErrorResult, saveImageSuccessResult } from "../../imageGeneration.ts";
import { parseGoogleFlowWebRequest } from "./googleFlowWebRequest.ts";

export async function handleGoogleFlowWebImageGeneration({
  body,
  model,
  signal,
}: {
  body: Record<string, unknown>;
  model: string;
  signal?: AbortSignal;
}) {
  const startTime = Date.now();
  const provider = "google-flow-web";
  try {
    const input = parseGoogleFlowWebRequest({ ...body, model });
    const config = getGoogleFlowWebConfig();
    if (!config)
      throw new GoogleFlowWebError(
        "disabled",
        "Google Flow web provider is disabled; admin must configure a valid loopback CDP endpoint and project UUID.",
        403
      );
    const images = await googleFlowWebBrowser.generate(input, config, signal);
    return saveImageSuccessResult({
      provider,
      model,
      startTime,
      requestBody: { model, n: input.n },
      responseBody: { images_count: images.length },
      images: images.map((b64_json) => ({ b64_json })),
    });
  } catch (error) {
    const message =
      error instanceof ZodError
        ? "Unsupported Google Flow image parameters; use Nano Banana 2.1, n=1–4, a supported aspect, and b64_json only."
        : error instanceof GoogleFlowWebError
          ? error.message
          : "Google Flow web image generation failed; inspect the attached browser. No retry was attempted.";
    return saveImageErrorResult({
      provider,
      model,
      startTime,
      status:
        error instanceof ZodError ? 400 : error instanceof GoogleFlowWebError ? error.status : 502,
      error: sanitizeErrorMessage(message),
      requestBody: { model },
      retryable: false,
    });
  }
}
