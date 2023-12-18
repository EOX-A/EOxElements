import { html } from "lit";
import {
  STORIES_LAYER_EOX_CLOUDLESS_2021,
  STORIES_LAYER_TERRAIN_LIGHT,
  STORIES_MAP_STYLE,
} from "../src/enums/stories";

export const ExpandedLayers = {
  args: {},
  render: () => html`
    <div style="display: flex">
      <eox-layercontrol for="eox-map#expanded"></eox-layercontrol>
      <eox-map
        id="expanded"
        .style=${STORIES_MAP_STYLE}
        .layers=${[
          STORIES_LAYER_TERRAIN_LIGHT,
          {
            type: "Group",
            properties: {
              title: "Layer group",
              layerControlExpand: true,
            },
            layers: [{ ...STORIES_LAYER_EOX_CLOUDLESS_2021, visible: false }],
          },
        ]}
      >
      </eox-map>
    </div>
  `,
};

export default ExpandedLayers;
