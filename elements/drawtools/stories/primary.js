/**
 * Primary component demonstrating the configuration options for eox-drawtools on an eox-map.
 * It showcases the settings for allowModify, multipleFeatures, and type properties.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const Primary = {
  args: {
    for: "eox-map#primary",
    allowModify: false,
    multipleFeatures: false,
    type: "Polygon",
    drawupdate: (e) => console.log(e),
    storyAdditionalComponents: {
      "eox-map": {
        id: "primary",
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
      .type=${args.type}
      @drawupdate=${args.drawupdate}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default Primary;
