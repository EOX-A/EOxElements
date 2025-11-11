/**
 * Showcasing different formats of drawtools return values
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const Formats = {
  args: {
    id: "feature-projection",
    for: "eox-map#formats",
    type: "Box",
    format: "feature",
    multipleFeatures: true,
    drawupdate: (e) => {
      console.log(`returned values in ${e.target?.format} format `, e.detail);
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "formats",
        style: STORIES_MAP_STYLE,
        layers: STORIES_LAYERS_ARRAY,
      },
    },
  },
  render: (args) => html`
    <eox-drawtools
      id=${args.id}
      for=${args.for}
      ?multiple-features=${args.multipleFeatures}
      type=${args.type}
      format=${args.format}
      @drawupdate=${args.drawupdate}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
      style=${args.storyAdditionalComponents["eox-map"].style}
    ></eox-map>
  `,
};

export default Formats;
