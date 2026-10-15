import { handleSystemOneProxy } from "@omniroute/open-sse/handlers/systemone.ts";
import { systemOneErrorResponse } from "@omniroute/open-sse/handlers/systemone/shared.ts";
import type { SystemOneCredentials } from "@omniroute/open-sse/handlers/systemone/types.ts";
import type { ComboLike } from "@omniroute/open-sse/services/combo/types.ts";
import { CORS_HEADERS } from "@omniroute/open-sse/utils/cors.ts";
import {
  clearRecoveredProviderState,
  getProviderCredentialsWithQuotaPreflight,
} from "@/sse/services/auth";
import { resolveModelAliasWithSeedFallback } from "@/lib/modelAliasResolver";
import { getComboByName, getCombos } from "@/lib/db/combos";
import { getUserDatabaseSettings } from "@/lib/db/databaseSettings";
import { v1SystemOneSchema } from "@/shared/validation/schemas/systemone";
import { withInjectionGuard } from "@/middleware/promptInjectionGuard";
import { enforceSystemOnePolicy, type SystemOnePolicyResult } from "./systemonePolicy";
import { dispatchSystemOne } from "./systemoneDispatch";
import { dispatchSystemOneCombo } from "./systemoneCombo";

export type SystemOneBody = { model: string; state: unknown; questions: Record<string, unknown> };
type CredentialResult =
  | SystemOneCredentials
  | { allExpired: true }
  | { allRateLimited: true; retryAfter?: string | number | Date | null }
  | null;
export interface SystemOneRouteDependencies {
  resolveAlias: (id: string) => Promise<string | null>;
  enforcePolicy: (request: Request, model: string) => Promise<SystemOnePolicyResult>;
  getCredentials: (
    provider: string,
    exclude?: string | null,
    allowed?: string[] | null,
    model?: string | null,
    options?: Parameters<typeof getProviderCredentialsWithQuotaPreflight>[4]
  ) => Promise<CredentialResult>;
  clearRecovered: (credentials: unknown) => Promise<unknown>;
  getCombo: (name: string) => Promise<ComboLike | null>;
  getCombos: () => Promise<ComboLike[]>;
  getSettings: () => Record<string, unknown>;
  proxy: typeof handleSystemOneProxy;
}
const defaults: SystemOneRouteDependencies = {
  resolveAlias: resolveModelAliasWithSeedFallback,
  enforcePolicy: enforceSystemOnePolicy,
  getCredentials: async (...args) =>
    (await getProviderCredentialsWithQuotaPreflight(...args)) as unknown as CredentialResult,
  clearRecovered: clearRecoveredProviderState,
  getCombo: async (name) => (await getComboByName(name)) as unknown as ComboLike | null,
  getCombos: async () => (await getCombos()) as unknown as ComboLike[],
  getSettings: getUserDatabaseSettings,
  proxy: handleSystemOneProxy,
};

export function systemOneOptions() {
  return new Response(null, {
    headers: {
      ...CORS_HEADERS,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

async function handleSystemOneRequest(
  request: Request,
  deps: SystemOneRouteDependencies
): Promise<Response> {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return systemOneErrorResponse({
      status: 400,
      error_type: "api_usage_error",
      message: "Invalid JSON body",
    });
  }
  const validation = v1SystemOneSchema.safeParse(raw);
  if (!validation.success) {
    return Response.json(
      {
        detail: validation.error.issues.map((issue) => ({
          type: "value_error",
          loc: ["body", ...issue.path],
          msg: issue.message,
        })),
      },
      { status: 422, headers: CORS_HEADERS }
    );
  }
  const model = (await deps.resolveAlias(validation.data.model)) || validation.data.model;
  const body: SystemOneBody = {
    model,
    state: validation.data.state,
    questions: validation.data.questions,
  };
  const combo = !model.includes("/") ? await deps.getCombo(model) : null;
  return combo
    ? dispatchSystemOneCombo(request, body, combo, deps)
    : dispatchSystemOne(request, body, deps);
}

/** Factory keeps tests on the actual route/combo pipeline without real upstream credentials. */
export function createSystemOnePost(overrides: Partial<SystemOneRouteDependencies> = {}) {
  const deps = { ...defaults, ...overrides };
  return (request: Request): Promise<Response> => handleSystemOneRequest(request, deps);
}

export const systemOnePost = withInjectionGuard(createSystemOnePost());
