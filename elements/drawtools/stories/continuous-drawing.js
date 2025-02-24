/**
 * Component demonstrating drawing polygons continuously.
 * This component showcases the usage of eox-drawtools with the `multiple-features` and `continuous` attribute/property set
 * to be able to draw multiple polygons one at a time continuously on the map.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const ContinuousDrawing = {
  render: () => html`
    <!-- Render eox-map component with ID "continuous" -->
    <eox-map
      id="continuous"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "continuous" -->
    <eox-drawtools
      for="eox-map#continuous"
      multiple-features
      continuous
    ></eox-drawtools>
  `,
};

export default ContinuousDrawing;
