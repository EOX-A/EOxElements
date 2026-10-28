import { html } from "lit";
import "color-legend-element";
import {
  STORIES_MAIN_MAP_LAYERS,
  STORIES_LAYER_VESSEL_DENSITY_CARGO,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";

export const ToolsAsListStory = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    toolsAsList: true,
    tools: [
      "info",
      "opacity",
      "config",
      "datetime",
      "legend",
      "sort",
      "remove",
    ],
    for: "eox-map#tools-as-list",
    "datetime:updated": (evt) => {
      evt.detail.layer.getSource().updateParams({ TIME: evt.detail.datetime });
    },
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 3,
        layers: [
          ...STORIES_MAIN_MAP_LAYERS,
          STORIES_LAYER_VESSEL_DENSITY_CARGO,
        ],
        id: "tools-as-list",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .toolsAsList=${args.toolsAsList}
        .tools=${args.tools}
        .for=${args.for}
        .style=${args.style}
        @datetime:updated=${args["datetime:updated"]}
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
