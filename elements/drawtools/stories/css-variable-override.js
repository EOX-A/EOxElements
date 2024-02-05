/**
 * Component demonstrating css variable override when
 * `noShadow` is true and we can override using new CSS variable inside <style>
 */
import { html } from "lit";
import "@eox/map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const CSSVariableOverride = {
  render: () => html`
    <!-- Render eox-map component with ID "list" -->
    <eox-map
      id="css-var-override"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "list" -->
    <eox-drawtools
      for="eox-map#css-var-override"
      multiple-features
      show-list
      .noShadow=${true}
    ></eox-drawtools>
    <style>
      :host,
      :root {
        --primary-background-hover: #fc730314;
        --secondary: #ffa55c;
      }
    </style>
  `,
};

export default CSSVariableOverride;
