import { html } from "lit";
import {
  STORIES_MAIN_MAP_LAYERS,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";

export const unstyledStory = {
  args: {
    for: "eox-map#unstyled",
    unstyled: true,
    additionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 3,
        layers: STORIES_MAIN_MAP_LAYERS,
        id: "unstyled",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
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

export default unstyledStory;
