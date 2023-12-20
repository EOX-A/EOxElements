/**
 * Component demonstrating the display of a list of features on the eox-map.
 * This component showcases the usage of eox-drawtools with the `show-list` attribute/property set
 * to display a list of features corresponding to drawn polygons on the map.
 */
import { html } from "lit";
import "@eox/map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const StyleOverride = {
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
      .styleOverride=${{
        "eox-drawtools-list": `
          ul li {
            background-color: #004170;
          }
          ul li:hover {
            background-color: #0f578a;
          }
          .list .title {
            color: white;
          }
        `,
        "eox-drawtools-controller": `
          button.icon {
            background-color: red;
          }
        `,
      }}
    ></eox-drawtools>
  `,
};

export default StyleOverride;
