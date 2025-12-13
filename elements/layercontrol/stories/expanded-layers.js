import { html } from "lit";
import {
  STORIES_LAYER_EOX_CLOUDLESS_2021,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
} from "../src/enums/stories";

export const ExpandedLayersStory = {
  args: {
    for: "eox-map#expanded",
    storyAdditionalComponents: {
      "eox-map": {
        style: STORIES_MAP_STYLE,
        layers: [
          {
            type: "Group",
            properties: {
              title: "Layer group",
              layerControlExpand: true,
            },
            layers: [{ ...STORIES_LAYER_EOX_CLOUDLESS_2021, visible: false }],
          },
          STORIES_LAYER_TERRAIN_LIGHT,
        ],
        id: "expanded",
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

export default ExpandedLayersStory;
