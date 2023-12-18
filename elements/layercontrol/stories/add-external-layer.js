import { html } from "lit";
import { STORIES_MAIN_MAP_LAYERS, STORIES_MAP_STYLE } from "../src/enums";

export const addExternalLayer = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
    addExternalLayers: true,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .unstyled=${args.unstyled}
        .addExternalLayers=${args.addExternalLayers}
        for="eox-map"
      ></eox-layercontrol>
      <eox-map
        .style=${STORIES_MAP_STYLE}
        .zoom=${3}
        .layers=${STORIES_MAIN_MAP_LAYERS}
      ></eox-map>
    </div>
  `,
};

export default addExternalLayer;
