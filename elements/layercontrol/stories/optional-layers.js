import { html } from "lit";
import {
  STORIES_LAYER_EOX_CLOUDLESS_2019,
  STORIES_LAYER_EOX_CLOUDLESS_2020,
  STORIES_LAYER_EOX_CLOUDLESS_2021,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_MAP_STYLE,
} from "../src/enums";

const customizeLayer = (layer) => ({
  ...layer,
  properties: {
    ...layer.properties,
    layerControlOptional: true,
  },
  visible: false,
});

export const OptionalLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#optional"></eox-layercontrol>
      <eox-map
        id="optional"
        .style=${STORIES_MAP_STYLE}
        .layers=${[
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2021),
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2020),
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2019),
          STORIES_LAYER_TERRAIN_LIGHT,
        ]}
      >
      </eox-map>
    </div>
  `,
};

export default OptionalLayers;
