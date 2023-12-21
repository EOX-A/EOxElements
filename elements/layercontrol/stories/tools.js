import { html } from "lit";
import {
  STORIES_LAYER_REGION,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const Tools = {
  args: {},
  render: () => html`
    <p>Default tools: info, opacity, config, remove, sort</p>
    <eox-layercontrol for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: info</p>
    <eox-layercontrol .tools=${["info"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>Only one tool: sort</p>
    <eox-layercontrol .tools=${["sort"]} for="eox-map#tools"></eox-layercontrol>
    <hr />
    <p>No tools</p>
    <eox-layercontrol .tools=${[]} for="eox-map#tools"></eox-layercontrol>
    <eox-map
      id="tools"
      .style=${STORIES_MAP_STYLE}
      .layers=${[STORIES_LAYER_REGION, STORIES_LAYER_TERRAIN_LIGHT]}
    >
    </eox-map>
  `,
};

export default Tools;
