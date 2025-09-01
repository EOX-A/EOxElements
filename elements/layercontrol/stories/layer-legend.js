import { html } from "lit";
import "color-legend-element";
import {
  STORIES_LAYER_VESSEL_DENSITY_CARGO,
  STORIES_LAYERCONTROL_STYLE,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const LayerLegend = {
  args: {},
  render: () => html`
    <eox-layercontrol
      .tools=${["legend"]}
      for="eox-map#legend"
      .style=${STORIES_LAYERCONTROL_STYLE}
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[2000000, 8000000]}
      .zoom=${4}
      id="legend"
      .style=${STORIES_MAP_STYLE}
      .layers=${[
        STORIES_LAYER_VESSEL_DENSITY_CARGO,
        STORIES_LAYER_TERRAIN_LIGHT,
      ]}
    >
    </eox-map>
  `,
};

export default LayerLegend;
