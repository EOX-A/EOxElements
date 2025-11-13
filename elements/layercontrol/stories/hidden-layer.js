import { html } from "lit";
import {
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_LAYER_REGION,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums";

const customizeLayer = (layer) => ({
  ...layer,
  properties: {
    ...layer.properties,
    layerControlHide: true,
  },
});

export const HiddenLayersStory = {
  args: {
    for: "eox-map#hidden",
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        layers: [
          customizeLayer(STORIES_LAYER_REGION),
          STORIES_LAYER_TERRAIN_LIGHT,
        ],
        id: "hidden",
      },
    },
    style: STORIES_LAYERCONTROL_STYLE,
  },
  render: (args) => html`
    <div style="display: flex">
      <eox-layercontrol
        .for=${args.for}
        .style=${args.style}
      ></eox-layercontrol>
      <eox-map
        id=${args.storyAdditionalComponents["eox-map"].id}
        .style=${args.storyAdditionalComponents["eox-map"].style}
        .layers=${args.storyAdditionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default HiddenLayersStory;
