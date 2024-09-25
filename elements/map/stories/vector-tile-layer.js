/**
 * Renders basic vector layer using `MVT` tile
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const VectorTileLayerStory = {
  args: {
    layers: [
      {
        type: "VectorTile",
        background: "#1a2b39",
        declutter: true,
        properties: {
          id: "countries",
        },
        source: {
          type: "VectorTile",
          url: "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
          format: "MVT",
          tileGrid: {},
        },
        style: {
          "fill-color": "yellow",
          "stroke-color": "#232323",
          "stroke-width": 1,
        },
      },
    ],
  },
};

export default VectorTileLayerStory;
