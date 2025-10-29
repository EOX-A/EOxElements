/**
 * Component demonstrating the capability to modify features after drawing on the eox-map.
 * This component exhibits the usage of eox-drawtools with allow-modify attribute/property
 * set to enable the modification functionality for the drawn features on the map.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const ModifyFeatures = {
  render: () => html`
    <!-- Render eox-map component with ID "modify" -->
    <eox-map
      id="modify"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "modify" -->
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `,
};

export default ModifyFeatures;
