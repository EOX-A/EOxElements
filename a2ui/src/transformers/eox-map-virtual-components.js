import { z } from "zod";

export const mapVirtualComponents = [
  {
    name: "EOxMapWorkspace",
    tagName: "eox-a2ui-element",
    targetTagName: "eox-map-workspace",
    schema: z.object({
      children: z.array(z.string()).optional(),
      slot: z.string().optional(),
      style: z.string().optional(),
    }),
  },
  {
    name: "EOxMapCompare",
    tagName: "eox-a2ui-element",
    targetTagName: "eox-map-compare",
    schema: z.object({
      children: z.array(z.string()).optional(),
      slot: z.string().optional(),
      sync: z.string().optional(),
      enabled: z.string().optional(),
      value: z.number().optional(),
      style: z.string().optional(),
    }),
  },
  {
    name: "EOxMapSideBySide",
    tagName: "eox-a2ui-element",
    targetTagName: "eox-map-side-by-side",
    schema: z.object({
      children: z.array(z.string()).optional(),
      slot: z.string().optional(),
      style: z.string().optional(),
    }),
  },
];
