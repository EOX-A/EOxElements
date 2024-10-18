/**
 * Component demonstrating the ability to select a feature on an eox-map.
 */
import { html } from "lit";
import { STORIES_MAP_STYLE, STORIES_VECTOR_LAYERS } from "../src/enums";

export const SelectFeature = {
  args: {
    multipleFeatures: false,
    type: "Polygon",
    layerId: "regions",
    drawUpdate: (e) => {
      console.log(" drawUpdate: ", e.detail);
    },
  },
  render: (args) => html`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_VECTOR_LAYERS}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .multipleFeatures=${args.multipleFeatures}
      .type=${args.type}
      layer-id=${args.layerId}
      @drawupdate=${args.drawUpdate}
    />
  `,
};

export default SelectFeature;
