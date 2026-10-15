import { getAllSystemOneModels } from "../../open-sse/config/systemoneRegistry.ts";

/** Keep generated provider docs aligned with the non-chat registry. */
export function renderSystemOneProviderReference(): string {
  const rows = getAllSystemOneModels().map(
    (model) => `| \`${model.id}\` | ${model.name} | ${model.inputUsdPerMillion} |`
  );
  return [
    "## System One decision channels",
    "",
    "Use `POST /v1/systemone` with an OmniRoute key and existing TypeSafe or Cloudflare Workers AI connections.",
    "The `cf/` alias also selects Cloudflare. Bare `jev-*` selects TypeSafe; bare `clef` and `clef-flash` select Cloudflare.",
    "Versioned TypeSafe selectors such as `typesafe/jev-1.13.0` are forwarded unchanged; operator aliases run first.",
    "",
    "| Model id | Display name | Input USD / 1M tokens |",
    "| --- | --- | --- |",
    ...rows,
    "",
    "Output tokens are free. Pricing-table input rows override defaults.",
    "Cloudflare Jev uses AI Gateway credits, whereas Clef and Clef-flash use Workers AI neurons.",
    "Configure the Cloudflare Account ID as 32 lowercase hexadecimal characters in provider settings.",
    "System One errors lock only the selected Cloudflare model/connection, not Cloudflare chat.",
    "",
    'For ordered failover, create a priority combo named `decision-fallback` with `models: ["cloudflare-ai/jev", "typesafe/jev-latest"]`.',
    'Send `"model": "decision-fallback"` to fail over on 5xx, 429, 402 or timeout, without hiding validation errors.',
    "TypeSafe SDK compatibility: `POST /typesafe/v1/systemone` and direct TypeSafe discovery at `GET /typesafe/v1/models`.",
    "These models are advertised as `systemone`, never as chat. See [API Reference](./API_REFERENCE.md#system-one-decisions).",
    "",
  ].join("\n");
}
