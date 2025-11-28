/**
 * Component demonstrating the ability to draw multiple polygons on an eox-map.
 * The eox-drawtools component is configured with the `multiple-features` attribute/property set
 * to enable the drawing of multiple polygons.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const MultiPolygon = {
  args: {
    for: "eox-map#multi",
    multipleFeatures: true,
    storyAdditionalComponents: {
      "eox-map": {
        id: "multi",
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
      for=${args.for}
      ?multiple-features=${args.multipleFeatures}
      @drawupdate=${args.drawupdate}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default MultiPolygon;
