/**
 * Component demonstrating the ability to select a feature on an eox-map.
 */
import { html } from "lit";
import { STORIES_MAP_STYLE, STORIES_VECTOR_LAYERS } from "../src/enums";

export const SelectFeature = {
  args: {
    for: "eox-map#select",
    multipleFeatures: false,
    type: "Polygon",
    layerId: "regions",
    drawupdate: (e) => {
      console.log("drawUpdate:", e.detail);
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "select",
        style: STORIES_MAP_STYLE,
        layers: STORIES_VECTOR_LAYERS,
      },
    },
  },
  render: (args) => html`
    <eox-drawtools
      for=${args.for}
      .multipleFeatures=${args.multipleFeatures}
      .type=${args.type}
      layer-id=${args.layerId}
      @drawupdate=${args.drawupdate}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default SelectFeature;
