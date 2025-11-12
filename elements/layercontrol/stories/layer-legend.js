import { html } from "lit";
import "color-legend-element";
import {
  STORIES_LAYER_VESSEL_DENSITY_CARGO,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const layerLegendStory = {
  args: {
    additionalComponents: {
      "eox-map": {
        center: [2000000, 8000000],
        zoom: 4,
        style: STORIES_MAP_STYLE,
        layers: [
          STORIES_LAYER_VESSEL_DENSITY_CARGO,
          STORIES_LAYER_TERRAIN_LIGHT,
        ],
        id: "legend",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
    tools: ["legend"],
    for: "eox-map#legend",
  },
  render: (args) => html`
    <eox-layercontrol
      .tools=${args.tools}
      for=${args.for}
      .style=${args.style}
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

export default layerLegendStory;
