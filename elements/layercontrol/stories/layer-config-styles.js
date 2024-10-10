import { html } from "lit";
import "color-legend-element";
import {
  STORIES_LAYER_CROPOMHUSC2,
  STORIES_MAP_STYLE,
  STORIES_LAYER_SEE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

// registering the projection of CROPOMHUSC2_VECTOR_CONFIG_STYLE_LAYER
setTimeout(async () => {
  if (document.querySelector("eox-map#config-styles")) {
    //@ts-expect-error EOX Map API
    await document
      .querySelector("eox-map#config-styles")
      .registerProjectionFromCode(3035);
  }
});

export default {
  args: {},
  render: () => html`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config-styles"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[1820000, 5959912]}
      .zoom=${5.5}
      id="config-styles"
      .style=${STORIES_MAP_STYLE}
      .layers=${[
        STORIES_LAYER_SEE,
        STORIES_LAYER_CROPOMHUSC2,
        STORIES_LAYER_TERRAIN_LIGHT,
      ]}
    >
    </eox-map>
  `,
};
