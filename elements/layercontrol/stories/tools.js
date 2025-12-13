import { html } from "lit";
import {
  STORIES_LAYER_DEFORESTED_BIOMASS,
  STORIES_LAYER_VESSEL_DENSITY_CARGO,
  STORIES_LAYER_REGION,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const ToolsStory = {
  args: {
    for: "eox-map#tools",
    tools: ["info"],
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        layers: [
          STORIES_LAYER_TERRAIN_LIGHT,
          STORIES_LAYER_DEFORESTED_BIOMASS,
          STORIES_LAYER_REGION,
          STORIES_LAYER_VESSEL_DENSITY_CARGO,
        ],
        id: "tools",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <p>Default tools: info, opacity, config, remove, sort</p>
    <p>Toggle tools using the Controls panel.</p>
    <eox-layercontrol
      .for=${args.for}
      .tools=${args.tools}
      .style=${args.style}
    ></eox-layercontrol>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      .style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default ToolsStory;
