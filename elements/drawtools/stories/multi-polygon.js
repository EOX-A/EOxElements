/**
 * Component demonstrating the ability to draw multiple polygons on an eox-map.
 * The eox-drawtools component is configured with the `multiple-features` attribute/property set
 * to enable the drawing of multiple polygons.
 */
import { html } from "lit";
import "../../map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const MultiPolygon = {
  render: () => html`
    <!-- Render eox-map component with ID "multi" -->
    <eox-map
      id="multi"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi" -->
    <eox-drawtools for="eox-map#multi" multiple-features />
  `,
};

export default MultiPolygon;
