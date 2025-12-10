/**
 * Component demonstrating drawing polygons continuously.
 * This component showcases the usage of eox-drawtools with the `continuous` attribute/property set
 * to be able to draw multiple polygons one at a time continuously on the map.
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const ContinuousDrawing = {
  args: {
    continuous: true,
    for: "eox-map#continuous",
    storyAdditionalComponents: {
      "eox-map": {
        id: "continuous",
        layers: STORIES_LAYERS_ARRAY,
        style: STORIES_MAP_STYLE,
      },
    },
  },
  render: (args) => html`
    <!-- Render eox-map component with ID "continuous" -->
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    ></eox-map>

    <!-- Initialize eox-drawtools for the eox-map with ID "continuous" -->
    <eox-drawtools
      for="${args.for}"
      continuous=${args.continuous}
    ></eox-drawtools>
  `,
};

export default ContinuousDrawing;
