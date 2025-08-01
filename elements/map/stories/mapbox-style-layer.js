/**
 * Renders a layer-composition using Mapbox Styles
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const MapboxStyleStory = {
  args: {
    center: [0, 0],
    layers: [
      {
        type: "MapboxStyle",
        properties: {
          id: "mapboxStyleGroup",
          title: "mapboxStyleGroup",
          mapboxStyle: {
            version: 8,
            sources: {
              osm: {
                type: "raster",
                tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
                tileSize: 256,
                attribution: "© OpenStreetMap contributors",
              },
              pointSource: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "Point",
                        coordinates: [0, 0],
                      },
                      properties: {},
                    },
                  ],
                },
              },
            },
            layers: [
              {
                id: "osm-base",
                type: "raster",
                source: "osm",
                minzoom: 0,
                maxzoom: 19,
              },
              {
                id: "point-halo",
                type: "circle",
                source: "pointSource",
                paint: {
                  "circle-radius": 10,
                  "circle-color": "#0000ff",
                  "circle-opacity": 0.5,
                },
              },
              {
                id: "point-main",
                type: "circle",
                source: "pointSource",
                paint: {
                  "circle-radius": 5,
                  "circle-color": "#ff0000",
                },
              },
            ],
          },
        },
      },
    ],
    zoom: 0,
  },
};

export default MapboxStyleStory;
