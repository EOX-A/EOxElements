// Global import of eox-elements in .storybook/preview.js!
import { PrimaryStory, ExternalMapRenderingStory, ExternalMapRenderingMosaicStory } from "./index";

export default {
  title: "Elements/eox-timeslider",
  tags: ["autodocs"],
  component: "eox-timeslider",
};

export const Primary = PrimaryStory;
export const ExternalMapRendering = ExternalMapRenderingStory;
export const ExternalMapRenderingMosaic = ExternalMapRenderingMosaicStory;
