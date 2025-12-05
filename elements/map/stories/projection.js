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
          id: "cloudless",
          title: "Sentinel-2 Cloudless 2024",
        },
        source: {
          type: "XYZ",
          url: "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024/default/WGS84/{z}/{y}/{x}.jpg",
          crossOrigin: "anonymous",
          projection: "EPSG:4326"
        }
      }
    ],
    center: [16.8, 48.2],
    zoom: 7,
    projection: "EPSG:4326",
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
