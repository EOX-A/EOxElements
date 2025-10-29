/**
 * Showcasing emitting drawn features in different projections
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";
let registered = false;

export const FeaturesProjection = {
  args: {
    type: "Box",
    projection: "EPSG:4326",
    drawUpdate: (e) => {
      console.log(
        `extent of the created feature in ${e.target?.projection}`,
        e.detail?.[0]?.getGeometry().getExtent(),
      );
    },
    changeProjection: async (args) => {
      const drawtools = document.querySelector(
        "eox-drawtools#feature-projection",
      );
      args.projection =
        args.projection === "EPSG:4326" ? "EPSG:3035" : "EPSG:4326";
      const map = document.querySelector("eox-map#feature-projection");
      if (!registered) {
        await map.registerProjectionFromCode(args.projection);
        registered = true;
      }
      drawtools.setAttribute("projection", args.projection);
      drawtools.discardDrawing();
    },
  },
  render: (args) => html`
    <eox-map
      id="feature-projection"
      projection="EPSG:4326"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>
    <button
      id="feature-projection"
      class="small no-margin"
      @click=${() => args.changeProjection(args)}
    >
      Change projection
    </button>
    <p>Refer to the console for the emitted extent</p>

    <!-- Initialize eox-drawtools for the eox-map with ID "feature-projection" -->
    <eox-drawtools
      id="feature-projection"
      for="eox-map#feature-projection"
      projection=${args.projection}
      type=${args.type}
      @drawupdate=${args.drawUpdate}
    />
  `,
};

export default FeaturesProjection;
