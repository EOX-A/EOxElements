/**
 * Showcasing different formats of drawtools return values
 */
import { html } from "lit";
import { STORIES_LAYERS_ARRAY, STORIES_MAP_STYLE } from "../src/enums";

export const Formats = {
  args: {
    type: "Box",
    multipleFeatures: true,
    drawUpdate: (e) => {
      console.log(`returned values in ${e.target?.format} format `, e.detail);
    },
    changeFormat: (format) => {
      const drawtools = document.querySelector("eox-drawtools#formats");
      drawtools.setAttribute("format", format);
      drawtools.emitDrawnFeatures();
    },
  },
  render: (args) => html`
    <eox-map
      id="formats"
      style=${STORIES_MAP_STYLE}
      .layers=${STORIES_LAYERS_ARRAY}
    ></eox-map>
    <nav>
      <button
        id="formats"
        class="small"
        @click=${() => args.changeFormat("geojson")}
      >
        GeoJSON
      </button>
      <button
        id="formats"
        class="small"
        @click=${() => args.changeFormat("wkt")}
      >
        WKT
      </button>
      <button
        id="formats"
        class="small"
        @click=${() => args.changeFormat("feature")}
      >
        Feature
      </button>
    </nav>
    <p>Refer to the console for the emitted values</p>

    <!-- Initialize eox-drawtools for the eox-map with ID "formats" -->
    <eox-drawtools
      id="formats"
      for="eox-map#formats"
      ?multiple-features=${args.multipleFeatures}
      type=${args.type}
      @drawupdate=${args.drawUpdate}
    />
  `,
};

export default Formats;
