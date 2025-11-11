import { html } from "lit";
import {
  STORIES_MAIN_MAP_LAYERS,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";

export const Primary = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    for: "eox-map",
    unstyled: false,
    style: STORIES_LAYERCONTROL_STYLE,
    additionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 3,
        layers: STORIES_MAIN_MAP_LAYERS,
      },
    },
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
        .style=${args.additionalComponents["eox-map"].style}
        .zoom=${args.additionalComponents["eox-map"].zoom}
        .layers=${args.additionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default Primary;
