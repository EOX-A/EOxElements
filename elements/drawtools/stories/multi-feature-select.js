/**
 * Component demonstrating the ability to select multiple features on an eox-map with a list.
 */
import { html } from "lit";
import { STORIES_MAP_STYLE, STORIES_VECTOR_LAYERS } from "../src/enums";

export const MultiFeatureSelect = {
  args: {
    for: "eox-map#multi-select",
    allowModify: false,
    multipleFeatures: true,
    type: "Box",
    layerId: "regions",
    showList: true,
    featureName: "Region",
    featureNameKey: "ECO_NAME",
    featureStyles: {
      layer: {
        "fill-color": "#16A105A0",
        "stroke-color": "#16A105",
        "stroke-width": 2.5,
      },
      hover: {
        "fill-color": "#19B806A0",
        "stroke-color": "#19B806",
        "stroke-width": 2.5,
      },
    },
    drawupdate: (e) => {
      console.log("drawUpdate:", e.detail);
    },
    storyAdditionalComponents: {
      "eox-map": {
        id: "multi-select",
        style: STORIES_MAP_STYLE,
        layers: STORIES_VECTOR_LAYERS,
      },
    },
  },
  render: (args) => html`
    <eox-drawtools
      for=${args.for}
      .allowModify=${args.allowModify}
      .multipleFeatures=${args.multipleFeatures}
      .type=${args.type}
      layer-id=${args.layerId}
      ?show-list=${args.showList}
      .featureStyles=${args.featureStyles}
      .featureName=${args.featureName}
      .featureNameKey=${args.featureNameKey}
      @drawupdate=${args.drawupdate}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>
  `,
};

export default MultiFeatureSelect;
