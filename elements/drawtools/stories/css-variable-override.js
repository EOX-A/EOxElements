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
    <style>
      html,
      :host,
      :root {
        --secondary-color: #ffa55c;
        --bg-hover-transparency: 20%;
        --color: #ffa55c;
        --body-font-family: "Comic Sans MS", cursive;
      }
    </style>
    <eox-drawtools
      for="eox-map#css-var-override"
      multiple-features
      show-list
      .noShadow=${false}
    ></eox-drawtools>
  `,
};

export default CSSVariableOverride;
