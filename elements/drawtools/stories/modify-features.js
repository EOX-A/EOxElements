import { html } from "lit";
import "../../map/main";
import "../src/main";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

/**
 * By setting the `allow-modify` attribute or `allowModify` property,
 * the user can modify features after drawing
 */
export const ModifyFeatures = {
  render: () => html`
    <eox-map
      id="modify"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    />
    <eox-drawtools for="eox-map#modify" multiple-features allow-modify />
  `,
};

export default ModifyFeatures;
