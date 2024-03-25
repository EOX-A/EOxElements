import { html } from "lit";
import {
  STORIES_MAP_STYLE,
  STORIES_DRAW_TYPES,
  STORIES_LAYERS_ARRAY,
} from "../src/enums";

/**
 * Component demonstrating how `DrawType` component generates a set of map instances with different drawing capabilities,
 * allowing users to visualize and interact with various drawing tools supported by the eox-drawtools module.
 */
export const DrawType = {
  render: () => html`
    <!-- Render a collection of map instances with different drawing types -->
    <div style="display: flex">
      <!-- Iterating over different drawing types -->
      ${STORIES_DRAW_TYPES.map(
        ({ id, type }) => html`
          <div>
            <!-- Displaying an instance of eox-map -->
            <eox-map
              id=${id}
              style=${STORIES_MAP_STYLE}
              .layers=${STORIES_LAYERS_ARRAY}
            />
            <!-- Displaying the current drawing type -->
            ${type}
            <!-- Configuring eox-drawtools with specified parameters -->
            <eox-drawtools
              for="eox-map#${id}"
              multiple-features
              allow-modify
              type="${type}"
            />
          </div>
        `
      )}
    </div>
  `,
};

export default DrawType;
