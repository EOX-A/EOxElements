import PrimaryStory from "./primary";
import DrawTypeStory from "./draw-type";
import MultiPolygonStory from "./multi-polygon";
import ModifyFeaturesStory from "./modify-features";
import MultiPolygonWithListStory from "./multi-polygon-list";

export default {
  title: "Elements/eox-drawtools",
  tags: ["autodocs"],
  component: "eox-drawtools",
};

export const Primary = PrimaryStory;
export const MultiPolygon = MultiPolygonStory;
export const ModifyFeatures = ModifyFeaturesStory;
export const DrawType = DrawTypeStory;
export const MultiPolygonWithList = MultiPolygonWithListStory;
