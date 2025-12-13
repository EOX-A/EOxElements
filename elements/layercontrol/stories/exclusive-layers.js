import { html } from "lit";
import {
  STORIES_LAYER_EOX_CLOUDLESS_2021,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_LAYERCONTROL_STYLE,
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

export const ExclusiveLayersStory = {
  args: {
    style: STORIES_LAYERCONTROL_STYLE,
    for: "eox-map#exclusive",
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        layers: [
          customizeLayer(STORIES_LAYER_EOX_CLOUDLESS_2021, false),
          customizeLayer(STORIES_LAYER_TERRAIN_LIGHT),
        ],
        id: "exclusive",
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

export default ExclusiveLayersStory;
