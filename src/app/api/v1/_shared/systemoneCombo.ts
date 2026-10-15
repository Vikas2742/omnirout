import { handleComboChat } from "@omniroute/open-sse/services/combo.ts";
import type { ComboLike } from "@omniroute/open-sse/services/combo/types.ts";
import { asRecord, systemOneErrorResponse } from "@omniroute/open-sse/handlers/systemone/shared.ts";
import { dispatchSystemOne } from "./systemoneDispatch";
import { systemOnePolicyRejection } from "./systemonePolicy";
import type { SystemOneBody, SystemOneRouteDependencies } from "./systemoneRoutes";
import * as log from "@/sse/utils/logger";

const abortedResponse = () =>
  systemOneErrorResponse({
    status: 499,
    error_type: "request_aborted",
    message: "Request aborted by caller",
  });

async function isRequestFailure(response: Response): Promise<boolean> {
  if ([413, 422].includes(response.status)) return true;
  if (response.status !== 400) return false;
  const body = asRecord(
    await response
      .clone()
      .json()
      .catch(() => null)
  );
  return asRecord(body?.detail)?.error_type === "api_usage_error";
}

export async function dispatchSystemOneCombo(
  request: Request,
  body: SystemOneBody,
  combo: ComboLike,
  deps: SystemOneRouteDependencies
): Promise<Response> {
  const policy = await deps.enforcePolicy(request, body.model);
  if (policy.rejection) return policy.rejection;
  if (request.signal.aborted) return abortedResponse();
  // The generic combo engine understands chat errors, not TypeSafe's detail envelope.
  // Latch only request-shaped errors, never a failed member's credential/channel error.
  let terminal: Response | undefined;
  let lastFailure: Response | undefined;
  const response = await handleComboChat({
    body,
    combo,
    allCombos: await deps.getCombos(),
    settings: deps.getSettings(),
    log,
    signal: request.signal,
    apiKeyAllowedConnections: policy.apiKeyInfo?.allowedConnections,
    handleSingleModel: async (_body, model, target) => {
      if (request.signal.aborted) return abortedResponse();
      if (terminal) return terminal.clone();
      let result = await dispatchSystemOne(request, { ...body, model }, deps, target, policy);
      // A target deadline is not a caller cancellation. Generic combo stops on 499,
      // so expose a retryable timeout before its exhaustion/termination classifier.
      if (result.status === 499 && !request.signal.aborted) {
        result = systemOneErrorResponse({
          status: 504,
          error_type: "timeout_error",
          message: "System One member timed out",
        });
      }
      if (!result.ok) {
        lastFailure = result.clone();
        if (await isRequestFailure(result)) terminal = result.clone();
      }
      return result;
    },
  });
  if (request.signal.aborted) return abortedResponse();
  if (terminal) return terminal;
  if (response.ok) return response;
  return lastFailure ?? (await systemOnePolicyRejection(response))!;
}
