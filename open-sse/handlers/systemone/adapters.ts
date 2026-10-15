import { typesafeAdapter } from "./typesafe.ts";
import { cloudflareAdapter } from "./cloudflare.ts";
import type { SystemOneAdapter } from "./types.ts";
import type { SystemOneProvider } from "../../config/systemoneRegistry.ts";

export const systemOneAdapters: Record<SystemOneProvider["adapter"], SystemOneAdapter> = {
  typesafe: typesafeAdapter,
  cloudflare: cloudflareAdapter,
};
