import "@eox/map/src/plugins/advancedLayersAndSources";
import "@eox/map";
import "../src/main";
import { LayerListStory, SingleLayerStory, TabsStory } from ".";

export default {
  title: "Elements/eox-layercontrol",
  tags: ["autodocs"],
  component: "eox-layercontrol",
  parameters: {
    componentSubtitle: "Manage and configure OpenLayers map layers",
    layout: "centered",
  },
};
export const SingleLayer = SingleLayerStory;
export const LayerList = LayerListStory;
export const Tabs = TabsStory;
