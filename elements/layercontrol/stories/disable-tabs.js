import { html } from "lit";
import { STORIES_MAIN_MAP_LAYERS, STORIES_MAP_STYLE } from "../src/enums";

export const DisableTabs = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    disableTabs: true,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .disableTabs=${args.disableTabs}
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

export default DisableTabs;
