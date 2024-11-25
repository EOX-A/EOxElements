import { html } from "lit";
import {
  STORIES_MAIN_MAP_LAYERS,
  STORIES_MAP_STYLE,
  STORIES_LAYER_SENTINEL_HUB,
  STORIES_LAYER_REGION,
  STORIES_LAYER_S2,
  STORIES_LAYER_OSM,
} from "../src/enums";

const COLORED_LAYERS = [
  {
    type: "Group",
    properties: {
      id: "group2",
      title: "Data Layers",
      layerControlExpand: true,
      description: "# Hello world",
    },
    layers: [
      {
        ...STORIES_LAYER_SENTINEL_HUB.wind,
        color: "#008955",
      },
      {
        ...STORIES_LAYER_SENTINEL_HUB.no2,
        color: "#008397",
      },
      {
        ...STORIES_LAYER_REGION,
        color: "#007bcb",
      },
    ],
  },
  {
    type: "Group",
    properties: {
      id: "group1",
      title: "Background Layers",
    },
    layers: [STORIES_LAYER_S2, STORIES_LAYER_OSM],
  },
];

export const LayerColor = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .unstyled=${args.unstyled}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${STORIES_MAP_STYLE}
        .zoom=${3}
        .layers=${COLORED_LAYERS}
      ></eox-map>
    </div>
  `,
};

export default LayerColor;
