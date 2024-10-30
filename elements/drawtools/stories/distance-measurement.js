import { html } from "lit";
import { STORIES_MAP_STYLE, STORIES_LAYERS_ARRAY } from "../src/enums";

/**
 * Component demonstrating how `DrawType` component generates a set of map instances with different drawing capabilities,
 * allowing users to visualize and interact with various drawing tools supported by the eox-drawtools module.
 */
export const DistanceMeasurement = {
  render: () => html`
    <eox-map
      id="line-measurement"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
      measure
    />
    <eox-drawtools
      for="eox-map#line-measurement"
      multiple-features
      allow-modify
      type="LineString"
    />
  `,
};

export default DistanceMeasurement;
