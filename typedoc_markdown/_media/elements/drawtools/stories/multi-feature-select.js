/**
 * Component demonstrating the ability to select a feature on an eox-map.
 */
import { html } from "lit";
import { STORIES_MAP_STYLE, STORIES_VECTOR_LAYERS } from "../src/enums";

export const MuliFeatureSelect = {
  args: {
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
    drawUpdate: (e) => {
      console.log("drawUpdate:", e.detail);
    },
  },
  render: (args) => html`
    <!-- Render eox-map component with ID "multi-select" -->
    <eox-map
      id="multi-select"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_VECTOR_LAYERS}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "multi-select" -->
    <eox-drawtools
      for="eox-map#multi-select"
      .allowModify=${args.allowModify}
      .multipleFeatures=${args.multipleFeatures}
      .type=${args.type}
      layer-id=${args.layerId}
      ?show-list=${args.showList}
      .featureStyles=${args.featureStyles}
      .featureName=${args.featureName}
      .featureNameKey=${args.featureNameKey}
      @drawupdate=${args.drawUpdate}
    />
  `,
};

export default MuliFeatureSelect;
