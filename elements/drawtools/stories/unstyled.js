/**
 * Unstyled version of the element
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const Unstyled = {
  args: {
    for: "eox-map#unstyled",
    multipleFeatures: true,
    showList: true,
    unstyled: true,
    storyAdditionalComponents: {
      "eox-map": {
        id: "unstyled",
        style: STORIES_MAP_STYLE,
        layers: STORIES_LAYERS_ARRAY,
      },
    },
    drawupdate: (e) => {
      console.log("drawupdate", e.detail);
    },
  },
  render: (args) => html`
    <eox-drawtools
      for="${args.for}"
      ?multiple-features="${args.multipleFeatures}"
      ?show-list="${args.showList}"
      .unstyled=${args.unstyled}
      @drawupdate=${args.drawupdate}
    ></eox-drawtools>
    <eox-map
      id="${args.storyAdditionalComponents["eox-map"].id}"
      style="${args.storyAdditionalComponents["eox-map"].style}"
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default Unstyled;
