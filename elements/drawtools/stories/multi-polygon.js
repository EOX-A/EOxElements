import { html } from "lit";
import "../../map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

/**
 * By setting the `multiple-features` attribute or `multipleFeatures` property to `true`,
 * multiple polygons can be drawn.
 */
export const MultiPolygon = {
  render: () => html`<eox-map
      id="multi"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    />
    <eox-drawtools for="eox-map#multi" multiple-features />`,
};

export default MultiPolygon;
