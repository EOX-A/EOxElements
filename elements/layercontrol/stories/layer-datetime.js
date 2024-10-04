import { html } from "lit";
import {
  STORIES_LAYER_VESSEL_DENSITY_CARGO,
  STORIES_MAP_STYLE,
  STORIES_LAYER_TERRAIN_LIGHT,
} from "../src/enums";

export const LayerDateTime = {
  args: {
    /** @param {CustomEvent<{datetime:string|number,layer:import("ol/layer").Layer}>} evt */
    onDatetimeUpdated: (evt) => {
      evt.detail.layer.getSource().updateParams({ TIME: evt.detail.datetime });
    },
  },
  render: (args) => html`
    <eox-layercontrol
      .tools=${["datetime", "legend"]}
      for="eox-map#datetime"
      @datetime:updated=${args.onDatetimeUpdated}
    ></eox-layercontrol>
    <hr />
    <eox-map
      .center=${[2000000, 8000000]}
      .zoom=${4}
      id="datetime"
      .style=${STORIES_MAP_STYLE}
      .layers=${[
        STORIES_LAYER_VESSEL_DENSITY_CARGO,
        STORIES_LAYER_TERRAIN_LIGHT,
      ]}
    >
    </eox-map>
  `,
};

export default LayerDateTime;
