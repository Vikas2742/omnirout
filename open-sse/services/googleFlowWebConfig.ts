import { z } from "zod";

export interface GoogleFlowWebConfig {
  cdpUrl: string;
  projectId: string;
  timeoutMs: number;
  queueTimeoutMs: number;
}
const duration = (fallback: number, min: number, max: number) =>
  z.preprocess(
    (value) => (value === undefined || value === "" ? fallback : value),
    z.coerce.number().int().min(min).max(max)
  );
const schema = z.object({
  GOOGLE_FLOW_WEB_CDP_URL: z
    .string()
    .regex(/^http:\/\/(?:127\.0\.0\.1|localhost|\[::1\]):[1-9][0-9]{0,4}\/?$/)
    .refine((value) => {
      try {
        const url = new URL(value);
        return Number(url.port || 80) <= 65535;
      } catch {
        return false;
      }
    }),
  GOOGLE_FLOW_WEB_PROJECT_ID: z.uuid(),
  GOOGLE_FLOW_WEB_TIMEOUT_MS: duration(180000, 1000, 600000),
  GOOGLE_FLOW_WEB_QUEUE_TIMEOUT_MS: duration(60000, 1, 300000),
});
/** Admin environment only. Never call with request data; catalog reads do not attach a browser. */
export function getGoogleFlowWebConfig(
  env: NodeJS.ProcessEnv = process.env
): GoogleFlowWebConfig | null {
  const result = schema.safeParse(env);
  if (!result.success) return null;
  const value = result.data;
  return {
    cdpUrl: value.GOOGLE_FLOW_WEB_CDP_URL,
    projectId: value.GOOGLE_FLOW_WEB_PROJECT_ID,
    timeoutMs: value.GOOGLE_FLOW_WEB_TIMEOUT_MS,
    queueTimeoutMs: value.GOOGLE_FLOW_WEB_QUEUE_TIMEOUT_MS,
  };
}
