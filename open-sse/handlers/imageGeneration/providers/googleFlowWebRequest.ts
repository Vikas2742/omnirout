import { z } from "zod";

const sizes = {
  "1024x1024": "1:1",
  "1536x1024": "16:9",
  "1024x1536": "9:16",
  "1024x768": "4:3",
  "768x1024": "3:4",
} as const;
const schema = z
  .object({
    model: z.literal("nano-banana-2.1"),
    prompt: z
      .string()
      .min(1)
      .max(20000)
      .refine((value) => value.trim().length > 0),
    n: z.number().int().min(1).max(4).default(1),
    aspect_ratio: z.enum(["1:1", "16:9", "9:16", "4:3", "3:4"]).optional(),
    size: z.enum(["1024x1024", "1536x1024", "1024x1536", "1024x768", "768x1024"]).optional(),
    response_format: z.literal("b64_json").default("b64_json"),
    user: z.string().max(256).optional(), // Standard OpenAI attribution only; never sent to Flow.
  })
  .strict()
  .refine(
    (value) => !value.size || !value.aspect_ratio || sizes[value.size] === value.aspect_ratio,
    { message: "size and aspect_ratio conflict" }
  );
/** Pixel sizes select aspect only, not a promised output resolution. */
export function parseGoogleFlowWebRequest(body: unknown) {
  const value = schema.parse(body);
  return {
    prompt: value.prompt,
    n: value.n,
    aspect: value.aspect_ratio ?? (value.size ? sizes[value.size] : "1:1"),
  };
}
export type GoogleFlowWebRequest = ReturnType<typeof parseGoogleFlowWebRequest>;
