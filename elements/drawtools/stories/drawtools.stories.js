/**
 * Stories for eox-drawtools component showcasing various configurations.
 * These stories provide visual representations and usage examples for different scenarios.
 */
import {
  PrimaryStory,
  DrawTypeStory,
  MultiPolygonStory,
  ModifyFeaturesStory,
  MultiPolygonWithListStory,
} from "./index";

export default {
  title: "Elements/eox-drawtools",
  tags: ["autodocs"],
  component: "eox-drawtools",
};

// Exporting each individual story for the eox-drawtools component.
export const Primary = PrimaryStory; // Primary story showcasing basic usage.
export const MultiPolygon = MultiPolygonStory; // Story demonstrating multiple polygons.
export const ModifyFeatures = ModifyFeaturesStory; // Story showcasing feature modification.
export const DrawType = DrawTypeStory; // Story illustrating different draw types.
export const MultiPolygonWithList = MultiPolygonWithListStory; // Story demonstrating polygons with lists.
