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
  UnstyledStory,
} from "./index";

export default {
  title: "Elements/eox-drawtools",
  tags: ["autodocs"],
  component: "eox-drawtools",
};

// Exporting each individual story for the eox-drawtools component.

/**
 * Primary story showcasing basic usage.
 */
export const Primary = PrimaryStory;

/**
 * By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,
 * multiple polygons can be drawn.
 */
export const MultiPolygon = MultiPolygonStory;

/**
 * By setting the `allow-modify` attribute or `allowModify` property,
 * the user can modify features after drawing.
 */
export const ModifyFeatures = ModifyFeaturesStory;

/**
 * The `type` attribute/property controls which drawing type is enabled
 * (defaults to "Polygon").
 */
export const DrawType = DrawTypeStory;

/**
 * By setting the `show-list` attribute or `showList` property to `true`,
 * a list of the drawn features will be populated.
 */
export const MultiPolygonWithList = MultiPolygonWithListStory;

/**
 * By setting the `unstyled` attribute or property, the element has no styling applied.
 */
export const Unstyled = UnstyledStory;
