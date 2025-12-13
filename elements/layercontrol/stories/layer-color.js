import { html } from "lit";
import {
  STORIES_LAYERCONTROL_STYLE,
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
      id: "group1",
      title: "Background Layers",
    },
    layers: [STORIES_LAYER_OSM, STORIES_LAYER_S2],
  },
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
        ...STORIES_LAYER_REGION,
        color: "#007bcb",
      },
      {
        ...STORIES_LAYER_SENTINEL_HUB.no2,
        color: "#008397",
      },
      {
        ...STORIES_LAYER_SENTINEL_HUB.wind,
        color: "#008955",
      },
    ],
  },
];

export const layerColorStory = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
    for: "epxmap#color",
    additionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 3,
        layers: COLORED_LAYERS,
        id: "color",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .unstyled=${args.unstyled}
        for=${args.for}
        .style=${args.style}
      ></eox-layercontrol>
      <eox-map
        id=${args.additionalComponents["eox-map"].id}
        .style=${args.additionalComponents["eox-map"].style}
        .zoom=${args.additionalComponents["eox-map"].zoom}
        .layers=${args.additionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default layerColorStory;
