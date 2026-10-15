import { handleComboChat } from "@omniroute/open-sse/services/combo.ts";
import type { ComboLike } from "@omniroute/open-sse/services/combo/types.ts";
import { dispatchSystemOne } from "./systemoneDispatch";
import type { SystemOneBody, SystemOneRouteDependencies } from "./systemoneRoutes";
import * as log from "@/sse/utils/logger";

export async function dispatchSystemOneCombo(
  request: Request,
  body: SystemOneBody,
  combo: ComboLike,
  deps: SystemOneRouteDependencies
): Promise<Response> {
  const policy = await deps.enforcePolicy(request, body.model);
  if (policy.rejection) return policy.rejection;
  // The generic combo engine understands chat errors, not TypeSafe's detail envelope.
  // Latch request/policy errors so it cannot dispatch another upstream on a 4xx.
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
      if (terminal) return terminal.clone();
      const result = await dispatchSystemOne(request, { ...body, model }, deps, target);
      if (!result.ok) {
        lastFailure = result.clone();
        if (result.status >= 400 && result.status < 500 && ![402, 408, 429].includes(result.status))
          terminal = result.clone();
      }
      return result;
    },
  });
  return terminal || (!response.ok && lastFailure ? lastFailure : response);
}
