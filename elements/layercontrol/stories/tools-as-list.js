import { html } from "lit";
import {
  STORIES_MAIN_MAP_LAYERS,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";

export const ToolsAsListStory = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    toolsAsList: true,
    for: "eox-map#tools-as-list",
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 3,
        layers: STORIES_MAIN_MAP_LAYERS,
      },
      id: "tools-as-list",
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .toolsAsList=${args.toolsAsList}
        .for=${args.for}
        .style=${args.style}
      ></eox-layercontrol>
      <eox-map
        id=${args.storyAdditionalComponents["eox-map"].id}
        .style=${args.storyAdditionalComponents["eox-map"].style}
        .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
        .layers=${args.storyAdditionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default ToolsAsListStory;
