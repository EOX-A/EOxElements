import { html } from "lit";
import "../../map/main";
import "../src/main";
import {
  STORIES_MAP_STYLE,
  STORIES_DRAW_TYPES,
  STORIES_LAYERS_ARRAY,
} from "../src/enums";

/**
 * The `type` attribute/property controls which drawing type is enabled
 * (defaults to "Polygon")
 */
export const DrawType = {
  render: () => html`
    <div style="display: flex">
      ${STORIES_DRAW_TYPES.map(
        ({ id, type }) => html`
          <div>
            <eox-map
              id=${id}
              style=${STORIES_MAP_STYLE}
              .layers=${STORIES_LAYERS_ARRAY}
            />
            ${type}
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
