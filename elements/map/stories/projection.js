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
    projection: "EPSG:3857",
    style: "width: 100%; height: 300px;",
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
      .projection=${args.projection}
      style=${args.style}
    >
    </eox-map>
  `,
};

export default ProjectionStory;
