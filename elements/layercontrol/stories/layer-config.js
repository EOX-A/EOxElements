import { html } from "lit";
import {
  STORIES_LAYER_DEFORESTED_BIOMASS,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const LayerConfigStory = {
  args: {
    tools: ["config"],
    for: "eox-map#config",
    storyAdditionalComponents: {
      "eox-map": {
        center: [-7000000, -500000],
        zoom: 4,
        style: STORIES_MAP_STYLE,
        layers: [STORIES_LAYER_TERRAIN_LIGHT, STORIES_LAYER_DEFORESTED_BIOMASS],
        id: "config",
      },
    },
    storyCodeBefore: 'import "@eox/jsonform"',
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <eox-layercontrol
      .tools=${args.tools}
      .for=${args.for}
      .style=${args.style}
    ></eox-layercontrol>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      .center=${args.storyAdditionalComponents["eox-map"].center}
      .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
      .style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default LayerConfigStory;
