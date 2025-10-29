import { html } from "lit";
import {
  STORIES_LAYER_OSM,
  STORIES_LAYER_SENTINEL_HUB,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_MAP_STYLE,
} from "../src/enums";

export const LayerList = {
  args: { unstyled: false, noShadow: false },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol-layer-list
        .noShadow=${args.noShadow}
        .unstyled=${args.unstyled}
      ></eox-layercontrol-layer-list>
      <eox-map
        id="list"
        .style=${STORIES_MAP_STYLE}
        .layers=${[
          STORIES_LAYER_SENTINEL_HUB.wind,
          STORIES_LAYER_OSM,
          STORIES_LAYER_TERRAIN_LIGHT,
        ]}
      ></eox-map>
    </div>
    <script>
      olMapList = document.querySelector("eox-map#list").map;
      olMapList.once("loadend", () => {
        const layerCollection = olMapList.getLayers();
        document.querySelector("eox-layercontrol-layer-list").layers =
          layerCollection;
        document.querySelector("eox-layercontrol-layer-list").olMapList =
          olMapList;
      });
    </script>
  `,
};

export default LayerList;
