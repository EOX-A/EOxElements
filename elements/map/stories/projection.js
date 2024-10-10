import { html } from "lit";

/**
 * The projection of the view can be changed via the `projection`-attribute.
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ProjectionStory = {
  args: {
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
      },
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
    center: [16.8, 48.2],
    zoom: 7,
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      id="projectionMap"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
    >
    </eox-map>
    <button
      @click=${() => {
        const eoxMap = /** @type {import("../src/main").EOxMap} **/ (
          /** @type {any} **/ document.querySelector("#projectionMap")
        );
        eoxMap.setAttribute(
          "projection",
          eoxMap.map.getView().getProjection().getCode() === "EPSG:4326"
            ? "EPSG:3857"
            : "EPSG:4326"
        );
      }}
    >
      change projection
    </button>
  `,
};

export default ProjectionStory;
