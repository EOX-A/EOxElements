/**
 * Showcasing emitting drawn features in different projections
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const FeaturesProjection = {
  args: {
    id: "feature-projection",
    for: "eox-map#feature-projection-map",
    projection: "EPSG:3857",
    type: "Box",
    drawupdate: `(e) => {
      console.log(
        \`extent of the created feature in \${e.target?.projection}\`,
        e.detail?.[0]?.getGeometry().getExtent(),
      );
    }`,
    storyAdditionalComponents: {
      "eox-map": {
        id: "feature-projection-map",
        style: STORIES_MAP_STYLE,
        layers: STORIES_LAYERS_ARRAY,
      },
    },
  },
  render: (args) => html`
    <eox-drawtools
      id=${args.id}
      for=${args.for}
      projection=${args.projection}
      type=${args.type}
      @drawupdate=${eval(args.drawupdate)}
    ></eox-drawtools>
    <eox-map
      id=${args.storyAdditionalComponents["eox-map"].id}
      .layers=${args.storyAdditionalComponents["eox-map"].layers}
      style=${args.storyAdditionalComponents["eox-map"].style}
    ></eox-map>
  `,
};

export default FeaturesProjection;
