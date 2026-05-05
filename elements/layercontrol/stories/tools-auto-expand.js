import { html } from "lit";
import {
  STORIES_LAYER_DEFORESTED_BIOMASS,
  STORIES_LAYER_REGION,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const toolsAutoExpandStory = {
  args: {
    for: "eox-map#tools-auto-expand",
    tools: ["info", "opacity"],
    toolsAutoExpand: true,
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        layers: [
          STORIES_LAYER_TERRAIN_LIGHT,
          STORIES_LAYER_DEFORESTED_BIOMASS,
          STORIES_LAYER_REGION,
        ],
        id: "tools-auto-expand",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <eox-layercontrol
      .for=${args.for}
      .tools=${args.tools}
      .toolsAutoExpand=${args.toolsAutoExpand}
      .style=${args.style}
    ></eox-layercontrol>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      .style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default toolsAutoExpandStory;
