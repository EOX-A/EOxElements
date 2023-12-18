import { html } from "lit";
import {
  STORIES_LAYER_DEFORESTED_BIOMASS,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const LayerConfig = {
  args: {},
  render: () => html`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[-7000000, -500000]}
      .zoom=${4}
      id="config"
      .style=${STORIES_MAP_STYLE}
      .layers=${[STORIES_LAYER_DEFORESTED_BIOMASS, STORIES_LAYER_TERRAIN_LIGHT]}
    >
    </eox-map>
  `,
};

export default LayerConfig;
