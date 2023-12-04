/**
 * Primary component demonstrating the configuration options for eox-drawtools on an eox-map.
 * It showcases the settings for allowModify, multipleFeatures, and type properties.
 */
import { html } from "lit";
import "../../map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const Primary = {
  args: {
    allowModify: false,
    multipleFeatures: false,
    type: "Polygon",
  },
  render: (args) => html`
    <!-- Render eox-map component with ID "primary" -->
    <eox-map
      id="primary"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "primary" -->
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${args.allowModify}
      .multipleFeatures=${args.multipleFeatures}
      .type=${args.type}
    />
  `,
};

export default Primary;
