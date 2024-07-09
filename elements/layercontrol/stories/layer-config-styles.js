import { html } from "lit";
import {
  STORIES_LAYER_CROPOMHUSC2,
  STORIES_MAP_STYLE,
  STORIES_LAYER_SEE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

// registering the projection of CROPOMHUSC2_VECTOR_CONFIG_STYLE_LAYER
setTimeout(async () => {
  //@ts-expect-error EOX Map API
  await document
    .querySelector("eox-map#config")
    .registerProjectionFromCode(3035);
});

export default {
  args: {},
  render: () => html`
    <eox-layercontrol
      .tools=${["config"]}
      for="eox-map#config"
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[1820000, 5959912]}
      .zoom=${5.5}
      id="config"
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
