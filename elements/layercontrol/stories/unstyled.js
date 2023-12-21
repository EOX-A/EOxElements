import { html } from "lit";
import { STORIES_MAIN_MAP_LAYERS, STORIES_MAP_STYLE } from "../src/enums";

export const unstyled = {
  args: {
    unstyled: true,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .unstyled=${args.unstyled}
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

export default unstyled;
