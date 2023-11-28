import { html } from "lit";
import "../../map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

/**
 * By setting the `show-list` attribute or `showList` property to `true`,
 * List of features will be visible
 */
export const MultiPolygonWithList = {
  render: () => html`
    <div style="display: flex">
      <eox-map
        id="list"
        style=${STORIES_MAP_STYLE}
        .layers=${STORIES_LAYERS_ARRAY}
      />
      <eox-drawtools
        for="eox-map#list"
        layer="draw"
        multiple-features
        show-list
      />
    </div>
  `,
};

export default MultiPolygonWithList;
