import { html } from "lit";
import {
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_LAYER_REGION,
  STORIES_MAP_STYLE,
} from "../src/enums";

const customizeLayer = (layer) => ({
  ...layer,
  properties: {
    ...layer.properties,
    layerControlHide: true,
  },
});

export const HiddenLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#hidden"></eox-layercontrol>
      <eox-map
        id="hidden"
        .style=${STORIES_MAP_STYLE}
        .layers=${[
          customizeLayer(STORIES_LAYER_REGION),
          STORIES_LAYER_TERRAIN_LIGHT,
        ]}
      >
      </eox-map>
    </div>
  `,
};

export default HiddenLayers;
