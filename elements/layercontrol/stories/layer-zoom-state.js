import { html } from "lit";
import {
  STORIES_LAYER_REGION,
  STORIES_LAYER_SENTINEL_HUB,
  STORIES_LAYERCONTROL_STYLE,
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

export const layerZoomStateStory = {
  args: {
    for: "eox-map#zoomstate",
    showLayerZoomState: true,
    additionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        zoom: 1,
        layers: [
          customizeLayer(STORIES_LAYER_SENTINEL_HUB.wind, { maxZoom: 9 }),
          customizeLayer(STORIES_LAYER_REGION, { minZoom: 2 }),
        ],
        id: "zoomstate",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .showLayerZoomState=${args.showLayerZoomState}
        for=${args.for}
        .style=${args.style}
      ></eox-layercontrol>
      <eox-map
        id=${args.additionalComponents["eox-map"].id}
        .style=${args.additionalComponents["eox-map"].style}
        .zoom=${args.additionalComponents["eox-map"].zoom}
        .layers=${args.additionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default layerZoomStateStory;
