/**
 * Component demonstrating the display of a list of features on the eox-map.
 * This component showcases the usage of eox-drawtools with the `show-list` attribute/property set
 * to display a list of features corresponding to drawn polygons on the map.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const MultiPolygonWithList = {
  render: () => html`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="list"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#list"
      multiple-features
      show-list
    ></eox-drawtools>
  `,
};

export default MultiPolygonWithList;
