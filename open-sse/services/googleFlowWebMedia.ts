import type { Page } from "playwright-core";
import type { GoogleFlowMedia } from "./googleFlowWebResponse.ts";
import { GoogleFlowWebError, isGoogleFlowMediaUrl } from "./googleFlowWebResponse.ts";

export const GOOGLE_FLOW_MAX_IMAGE_BYTES = 20 * 1024 * 1024;
/** Runs in the owned tab, without Google credentials. Redirects are never followed. */
export async function downloadGoogleFlowMedia({
  url,
  maxBytes,
}: {
  url: string;
  maxBytes: number;
}) {
  const parsed = new URL(url);
  if (
    parsed.protocol !== "https:" ||
    parsed.hostname !== "flow-content.google" ||
    parsed.port ||
    parsed.username ||
    parsed.password
  )
    throw new Error("Invalid image host");
  const response = await fetch(url, { credentials: "omit", redirect: "error" });
  if (!response.ok || !response.body) throw new Error("Image download failed");
  const declared = Number(response.headers.get("content-length") || 0);
  if (declared > maxBytes) {
    await response.body.cancel();
    throw new Error("Image exceeds size cap");
  }
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) throw new Error("Image exceeds size cap");
      chunks.push(value);
    }
  } finally {
    await reader.cancel();
  }
  if (!size) throw new Error("Empty image");
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  const bitmap = await createImageBitmap(new Blob([bytes]));
  const { width, height } = bitmap;
  bitmap.close();
  let binary = "";
  for (let i = 0; i < bytes.length; i += 8192)
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  return { base64: btoa(binary), width, height };
}
export async function fetchGoogleFlowMedia(page: Page, media: GoogleFlowMedia): Promise<string> {
  if (!isGoogleFlowMediaUrl(media.url, media.id))
    throw new GoogleFlowWebError("invalid_media", "Flow returned an invalid image URL.");
  const result = await page.evaluate(downloadGoogleFlowMedia, {
    url: media.url,
    maxBytes: GOOGLE_FLOW_MAX_IMAGE_BYTES,
  });
  if (
    !result ||
    typeof result.base64 !== "string" ||
    result.base64.length > Math.ceil(GOOGLE_FLOW_MAX_IMAGE_BYTES / 3) * 4
  )
    throw new GoogleFlowWebError("invalid_media", "Flow image exceeds the image size cap.");
  const bytes = Buffer.from(result.base64, "base64");
  const jpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const png = bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const webp =
    bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP";
  if (
    !bytes.length ||
    bytes.length > GOOGLE_FLOW_MAX_IMAGE_BYTES ||
    !(jpeg || png || webp) ||
    result.width !== media.width ||
    result.height !== media.height
  )
    throw new GoogleFlowWebError(
      "invalid_media",
      "Flow returned invalid image bytes or mismatched dimensions."
    );
  return result.base64;
}
