/**
 * Component demonstrating theme override using `.theme` property
 */
import { html } from "lit";
import "@eox/map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const ThemeOverride = {
  render: () => html`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="theme-override"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#theme-override"
      multiple-features
      show-list
      .theme=${{
        "primary-color": "#fc7303",
        "secondary-color": "#ffa55c",
      }}
    ></eox-drawtools>
  `,
};

export default ThemeOverride;
