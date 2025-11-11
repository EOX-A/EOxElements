import { html } from "lit";
import {
  STORIES_MAIN_MAP_LAYERS,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";
import { useArgs } from "storybook/internal/preview-api";

export const addExternalLayerStory = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
    addExternalLayers: true,
    for: "eox-map#external",
    additionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 3,
        layers: STORIES_MAIN_MAP_LAYERS,
        id: "external",
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
        .addExternalLayers=${args.addExternalLayers}
        for=${useArgs.id}
        .style=${args.style}
      ></eox-layercontrol>
      <eox-map
        .id=${args.additionalComponents["eox-map"].id}
        .style=${args.additionalComponents["eox-map"].style}
        .zoom=${args.additionalComponents["eox-map"].zoom}
        .layers=${args.additionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default addExternalLayerStory;
