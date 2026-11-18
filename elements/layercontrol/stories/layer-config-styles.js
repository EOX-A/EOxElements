import { html } from "lit";
import "color-legend-element";
import { registerProjection } from "@eox/map/src/helpers";
import {
  STORIES_LAYER_CROPOMHUSC2,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_SEE,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_LAYER_POLARIS,
} from "../src/enums";

registerProjection(
  "EPSG:3035",
  "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs",
);

export const LayerStylesConfigStory = {
  args: {
    tools: ["config"],
    for: "eox-map#config-styles",
    storyAdditionalComponents: {
      "eox-map": {
        center: [-1856051, 8501749],
        zoom: 3,
        style: STORIES_MAP_STYLE,
        layers: [
          STORIES_LAYER_TERRAIN_LIGHT,
          STORIES_LAYER_POLARIS,
          STORIES_LAYER_CROPOMHUSC2,
          STORIES_LAYER_SEE,
        ],
        id: "config-styles",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <eox-layercontrol
      .tools=${args.tools}
      .for=${args.for}
      .style=${args.style}
    ></eox-layercontrol>
    <hr />
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      .center=${args.storyAdditionalComponents["eox-map"].center}
      .zoom=${args.storyAdditionalComponents["eox-map"].zoom}
      .style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default LayerStylesConfigStory;
