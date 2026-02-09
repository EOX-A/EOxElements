import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const Measure = {
  args: {
    for: "eox-map#measure",
    allowModify: true,
    multipleFeatures: true,
    measure: true,
    type: "Polygon",
    storyAdditionalComponents: {
      "eox-map": {
        id: "measure",
        style: STORIES_MAP_STYLE,
        layers: STORIES_LAYERS_ARRAY,
      },
    },
  },
  render: (args) => html`
    <eox-drawtools
      for=${args.for}
      .allowModify=${args.allowModify}
      .multipleFeatures=${args.multipleFeatures}
      .measure=${args.measure}
      .type=${args.type}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default Measure;
