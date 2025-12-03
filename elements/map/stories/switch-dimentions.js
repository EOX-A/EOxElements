import { html } from "lit";

/**
 * The projection of the view can be changed via the `projection`-attribute.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const DimensionChangeStory = {
  args: {
    layers: [
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
    center: [0, 0],
    zoom: 4,
    projection: "EPSG:4326",
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      id="globeMap"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
      .projection=${args.projection}
    >
    </eox-map>
    <button
      @click=${() => {
        const eoxMap = /** @type {import("../src/main").EOxMap} **/ (
          /** @type {any} **/ document.querySelector("#globeMap")
        );
        eoxMap.setAttribute(
          "projection",
          !eoxMap.globe ||
            eoxMap.renderRoot?.querySelector("#globe")?.style?.display ===
              "none"
            ? "globe"
            : "EPSG:4326",
        );
      }}
    >
      change dimension
    </button>
  `,
};

export default DimensionChangeStory;
