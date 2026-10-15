import { z } from "zod";

// TypeSafe-native schema adapted from Sean P. Ford's PR #14498.
const structuredText = z.union([
  z.string(),
  z.record(z.string(), z.unknown()),
  z.array(z.unknown()),
  z.null(),
]);
const noul = z
  .object({
    type: z.literal("noul"),
    instructions: structuredText,
    criteria: z
      .object({ true: structuredText.optional(), false: structuredText.optional() })
      .catchall(z.unknown())
      .optional(),
  })
  .catchall(z.unknown());
const choice = z
  .object({
    type: z.literal("choice"),
    instructions: structuredText,
    criteria: z
      .record(z.string().trim().min(1), structuredText)
      .refine((criteria) => Object.keys(criteria).length > 0, "criteria must not be empty")
      .refine(
        (criteria) => Object.keys(criteria).length <= 255,
        "criteria must contain no more than 255 options"
      ),
  })
  .catchall(z.unknown());
const score = z
  .object({
    type: z.literal("score"),
    instructions: structuredText,
    criteria: z.array(structuredText).min(2).max(10),
  })
  .catchall(z.unknown());
export const systemOneQuestionSchema = z.discriminatedUnion("type", [noul, choice, score]);
export const v1SystemOneSchema = z
  .object({
    model: z.string().min(1).max(512),
    state: structuredText,
    questions: z
      .record(z.string().trim().min(1), systemOneQuestionSchema)
      .refine((questions) => Object.keys(questions).length > 0, "questions must not be empty"),
  })
  .catchall(z.unknown());
