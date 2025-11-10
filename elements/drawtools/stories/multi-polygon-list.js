/**
 * Component demonstrating the display of a list of features on the eox-map.
 * This component showcases the usage of eox-drawtools with the `show-list` attribute/property set
 * to display a list of features corresponding to drawn polygons on the map.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const MultiPolygonWithList = {
  args: {
    for: "eox-map#list",
    multipleFeatures: true,
    showList: true,
    featureName: "Polygon",
    storyAdditionalComponents: {
      "eox-map": {
        id: "list",
        style: STORIES_MAP_STYLE,
        layers: STORIES_LAYERS_ARRAY,
      },
    },
    drawupdate: `(e) => { console.log('drawupdate', e.detail); }`,
  },
  render: (args) => html`
    <eox-drawtools
      for="${args.for}"
      ?multiple-features="${args.multipleFeatures}"
      ?show-list="${args.showList}"
      feature-name="${args.featureName}"
      @drawupdate=${eval(args.drawupdate)}
    ></eox-drawtools>
    <eox-map
      id="${args.storyAdditionalComponents["eox-map"].id}"
      style="${args.storyAdditionalComponents["eox-map"].style}"
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default MultiPolygonWithList;
