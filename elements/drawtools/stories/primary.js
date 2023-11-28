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
  render: (args) => html`<eox-map
      id="primary"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    />
    <eox-drawtools
      for="eox-map#primary"
      .allowModify=${args.allowModify}
      .multipleFeatures=${args.multipleFeatures}
      .type=${args.type}
    />`,
};

export default Primary;
