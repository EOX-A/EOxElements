import { html } from "lit";
import "color-legend-element";
import COLORMAPS from "../src/enums/stories/assets/colormaps.json";
import {
  STORIES_LAYER_ESDL_DYNAMIC,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const layerLegendDynamicStory = {
  args: {
    additionalComponents: {
      "eox-map": {
        center: [0, 4800000],
        zoom: 6,
        style: STORIES_MAP_STYLE,
        layers: [STORIES_LAYER_TERRAIN_LIGHT, STORIES_LAYER_ESDL_DYNAMIC],
        id: "legend-dynamic",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
    colormapRegistry: COLORMAPS,
    tools: ["legend", "config"],
    for: "eox-map#legend-dynamic",
  },
  render: (args) => html`
    <eox-layercontrol
      .tools=${args.tools}
      for=${args.for}
      .style=${args.style}
      .colormapRegistry=${args.colormapRegistry}
    ></eox-layercontrol>
    <hr />
    <eox-map
      id=${args.additionalComponents["eox-map"].id}
      .center=${args.additionalComponents["eox-map"].center}
      .zoom=${args.additionalComponents["eox-map"].zoom}
      .style=${args.additionalComponents["eox-map"].style}
      .layers=${args.additionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default layerLegendDynamicStory;
