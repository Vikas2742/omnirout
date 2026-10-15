import { isSystemOneOnlyModel } from "./systemoneRegistry.ts";

export function systemOneChatError(provider: string, _model: string): Error & { status: number } {
  return Object.assign(
    new Error(
      `System One model on provider "${provider}" does not support chat completions; use /v1/systemone instead.`
    ),
    { status: 400 }
  );
}
export function assertSystemOneChatSupported(provider: string, model: string): void {
  if (isSystemOneOnlyModel(provider, model)) throw systemOneChatError(provider, model);
}
