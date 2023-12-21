import { html } from "lit";
import {
  STORIES_LAYER_EOX_CLOUDLESS_2021,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_MAP_STYLE,
} from "../src/enums/stories";

const customizeLayer = (layer, visible = true) => ({
  ...layer,
  properties: {
    ...layer.properties,
    layerControlExclusive: true,
  },
  visible: visible,
});

export const ExclusiveLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#exclusive"></eox-layercontrol>
      <eox-map
        id="exclusive"
        .style=${STORIES_MAP_STYLE}
        .layers=${[
          customizeLayer(STORIES_LAYER_TERRAIN_LIGHT),
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2021, false),
        ]}
      >
      </eox-map>
    </div>
  `,
};

export default ExclusiveLayers;
