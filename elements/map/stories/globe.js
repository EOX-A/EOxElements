/**
 * Basic Globe rendered using `projection: "globe"`
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GlobeStory = {
  args: {
    center: [15, 48],
    projection: "globe",
    layers: [
      // {
      //   type: "Tile",
      //   properties: {
      //     id: "EOX",
      //   },
      //   source: {
      //     type: "WMTSCapabilities",
      //     url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
      //     layer: "s2cloudless-2024",
      //     crossOrigin: 'anonymous'
      //   },
      // },
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
      // { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
    ],
    zoom: 7,
  },
};

export default GlobeStory;
