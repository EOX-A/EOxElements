import { html } from "lit";
import { STORIES_MAP_STYLE, STORIES_LAYERS_ARRAY } from "../src/enums";

/**
 * Component demonstrating how `DrawType` component generates a set of map instances with different drawing capabilities,
 * allowing users to visualize and interact with various drawing tools supported by the eox-drawtools module.
 */
export const DrawType = {
  args: {
    for: "eox-map#drawTypes",
    "multiple-features": true,
    "allow-modify": true,
    type: "Box",
    storyAdditionalComponents: {
      "eox-map": {
        id: "drawTypes",
        layers: STORIES_LAYERS_ARRAY,
        style: STORIES_MAP_STYLE,
      },
    },
  },
  render: (args) => html`
    <eox-drawtools
      for=${args.for}
      ?multiple-features=${args["multiple-features"]}
      ?allow-modify=${args["allow-modify"]}
      type="${args.type}"
    />
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      style=${args.storyAdditionalComponents["eox-map"].style}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
    />
  `,
};

export default DrawType;
