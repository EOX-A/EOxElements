import { html } from "lit";
import { STORIES_HIDDEN_GROUP_LAYERS, STORIES_MAP_STYLE } from "../src/enums";

export const Primary = {
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
        .layers=${STORIES_HIDDEN_GROUP_LAYERS}
      ></eox-map>
    </div>
  `,
};

export default Primary;
