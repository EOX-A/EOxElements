import { z } from "zod";

export const storytellingVirtualComponents = [
  {
    name: "EOxStorytellingHero",
    schema: z.object({
      title: z.string().optional().describe("Main title of the hero section"),
      as: z
        .enum(["img", "video"])
        .optional()
        .describe("Render hero background as an image or a video"),
      background: z
        .string()
        .optional()
        .describe("URL of the hero background image/video source"),
      description: z
        .string()
        .optional()
        .describe("Sub-description text to overlay on the hero section"),
    }),
  },
  {
    name: "EOxStorytellingText",
    schema: z.object({
      title: z
        .string()
        .optional()
        .describe("Title of the text narrative section"),
      markdown: z
        .string()
        .optional()
        .describe("Markdown-formatted text narrative content"),
    }),
  },
  {
    name: "EOxStorytellingTour",
    schema: z.object({
      title: z.string().optional().describe("Title of the tour section"),
      tourTitle: z.string().optional().describe("Alternative tour title"),
      as: z
        .string()
        .optional()
        .describe(
          "Target element type to render under the tour, e.g. 'eox-map' or 'img'",
        ),
      tourAs: z.string().optional().describe("Alternative target element type"),
      position: z
        .enum(["left", "right"])
        .optional()
        .describe(
          "Position of the text narrative overlay relative to the media",
        ),
      tourPosition: z
        .enum(["left", "right"])
        .optional()
        .describe("Alternative position override"),
      children: z
        .array(z.string())
        .optional()
        .describe("Array of tour step component IDs"),
    }),
  },
  {
    name: "EOxStorytellingTourStep",
    schema: z.object({
      title: z.string().optional().describe("Title of the tour step"),
      stepTitle: z.string().optional().describe("Alternative tour step title"),
      description: z
        .string()
        .optional()
        .describe("Description narrative content of the tour step"),
      stepDescription: z
        .string()
        .optional()
        .describe("Alternative tour step description narrative content"),
      config: z
        .any()
        .optional()
        .describe(
          "Configuration object or string containing layers/zoom/center settings for the step",
        ),
    }),
  },
];
