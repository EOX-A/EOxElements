import { html } from "lit";
import {
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";

export const SingleLayer = {
  args: {
    idProperty: "id",
    titleProperty: "title",
    unstyled: false,
    noShadow: false,
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .noShadow=${args.noShadow}
        .idProperty=${args.idProperty}
        .titleProperty=${args.titleProperty}
        .unstyled=${args.unstyled}
        .style=${args.style}
      ></eox-layercontrol>
      <eox-map
        id="single"
        .style=${STORIES_MAP_STYLE}
        .layers=${[STORIES_LAYER_TERRAIN_LIGHT]}
      ></eox-map>
    </div>
  `,
};

export default SingleLayer;
