import { html } from "lit";
import {
  STORIES_LAYER_EOX_CLOUDLESS_2019,
  STORIES_LAYER_EOX_CLOUDLESS_2020,
  STORIES_LAYER_EOX_CLOUDLESS_2021,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_LAYERCONTROL_STYLE,
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

export const OptionalLayersStory = {
  args: {
    style: STORIES_LAYERCONTROL_STYLE,
    for: "eox-map#optional",
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        layers: [
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2021),
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2020),
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2019),
          STORIES_LAYER_TERRAIN_LIGHT,
        ],
        id: "optional",
      },
    },
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

export default OptionalLayersStory;
