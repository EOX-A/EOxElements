import { html } from "lit";
import {
  STORIES_LAYER_REGION,
  STORIES_LAYER_SENTINEL_HUB,
  STORIES_MAP_STYLE,
} from "../src/enums";

const customizeLayer = (layer, prop) => ({
  ...layer,
  properties: {
    ...layer.properties,
    layerControlExclusive: true,
  },
  ...prop,
});

export const layerZoomState = {
  args: {
    showLayerZoomState: true,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${args.showLayerZoomState}
        for="eox-map#zoomstate"
      ></eox-layercontrol>
      <eox-map
        id="zoomstate"
        .style=${STORIES_MAP_STYLE}
        .zoom=${1}
        .layers=${[
          customizeLayer(STORIES_LAYER_REGION, { minZoom: 2 }),
          customizeLayer(STORIES_LAYER_SENTINEL_HUB.wind, { maxZoom: 9 }),
        ]}
      >
      </eox-map>
    </div>
  `,
};

export default layerZoomState;
