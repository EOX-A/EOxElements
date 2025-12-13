import { html } from "lit";
import {
  STORIES_LAYER_VESSEL_DENSITY_CARGO,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const layerDatetimeStory = {
  args: {
    for: "eox-map#datetime",
    "datetime:updated": (evt) => {
      evt.detail.layer.getSource().updateParams({ TIME: evt.detail.datetime });
    },
    additionalComponents: {
      "eox-map": {
        center: [2000000, 8000000],
        zoom: 4,
        style: STORIES_MAP_STYLE,
        layers: [
          STORIES_LAYER_TERRAIN_LIGHT,
          STORIES_LAYER_VESSEL_DENSITY_CARGO,
        ],
        id: "datetime",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
    tools: ["datetime"],
  },
  render: (args) => html`
    <eox-layercontrol
      .tools=${args.tools}
      for=${args.for}
      .style=${args.style}
      @datetime:updated=${args["datetime:updated"]}
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

export default layerDatetimeStory;
