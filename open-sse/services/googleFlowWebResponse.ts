import { z } from "zod";

export class GoogleFlowWebError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly status = 502
  ) {
    super(message);
    this.name = "GoogleFlowWebError";
  }
}
export interface GoogleFlowMedia {
  id: string;
  url: string;
  width: number;
  height: number;
}
const uuid = z.uuid();
const dimensions = z.tuple([
  z.number().int().positive().max(16384),
  z.number().int().positive().max(16384),
]);
function malformed(): never {
  throw new GoogleFlowWebError(
    "invalid_response",
    "Flow returned malformed or mismatched image results; inspect the project in the browser. Do not resubmit automatically."
  );
}
export function isGoogleFlowMediaUrl(value: string, id?: string): boolean {
  try {
    const url = new URL(value);
    const mediaId = url.pathname.slice("/image/".length);
    return (
      url.protocol === "https:" &&
      url.hostname === "flow-content.google" &&
      !url.port &&
      !url.username &&
      !url.password &&
      !url.hash &&
      url.pathname.startsWith("/image/") &&
      uuid.safeParse(mediaId).success &&
      (!id || mediaId === id)
    );
  } catch {
    return false;
  }
}
/** Parse only the owned page's UI-triggered ogiZ0b response; never request/replay an RPC. */
export function parseGoogleFlowResponse(
  text: string,
  n: number,
  prompt: string
): GoogleFlowMedia[] {
  if (Buffer.byteLength(text) > 4 * 1024 * 1024 || !text.startsWith(")]}'\n")) malformed();
  const lines = text.slice(5).split("\n");
  const frames: unknown[][] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    if (!/^[1-9][0-9]{0,7}$/.test(lines[i])) malformed();
    const length = Number(lines[i]);
    const line = lines[++i];
    if (!line) malformed();
    const bytes = Buffer.byteLength(line);
    // Google may count the two line separators as part of a frame's byte length.
    const includesSeparators = length === bytes + 2 && lines[i + 1] === "";
    if (length !== bytes && !includesSeparators) malformed();
    let entries: unknown;
    try {
      entries = JSON.parse(line);
    } catch {
      malformed();
    }
    if (!Array.isArray(entries)) malformed();
    for (const entry of entries) if (Array.isArray(entry)) frames.push(entry);
  }
  const matches = frames.filter((entry) => entry[0] === "wrb.fr" && entry[1] === "ogiZ0b");
  if (matches.length !== 1) malformed();
  const frame = matches[0];
  if (JSON.stringify(frame).includes("PUBLIC_ERROR_UNUSUAL_ACTIVITY")) {
    throw new GoogleFlowWebError(
      "verification_required",
      "Flow verification/unusual activity — operator must take over in the browser. No retry was attempted.",
      403
    );
  }
  if (typeof frame[2] !== "string") malformed();
  let payload: unknown;
  try {
    payload = JSON.parse(frame[2]);
  } catch {
    malformed();
  }
  if (
    !Array.isArray(payload) ||
    !Array.isArray(payload[0]) ||
    !Array.isArray(payload[1]) ||
    payload[0].length !== n ||
    n < 1 ||
    n > 4
  )
    malformed();
  const seen = new Set<string>();
  return payload[0].map((media: unknown) => {
    if (!Array.isArray(media) || !uuid.safeParse(media[0]).success || !Array.isArray(media[6]))
      malformed();
    const id = media[0] as string;
    const detail = media[6];
    const image = detail[0];
    const size = dimensions.safeParse(detail[2]);
    if (
      seen.has(id) ||
      !Array.isArray(image) ||
      image[7] !== prompt ||
      typeof image[13] !== "string" ||
      !isGoogleFlowMediaUrl(image[13], id) ||
      !size.success
    )
      malformed();
    seen.add(id);
    return { id, url: image[13], width: size.data[0], height: size.data[1] };
  });
}
