/**
 * Renders `eox-map` with `Cluster-Explode` interaction
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const ClusterExplodeStory = {
  args: {
    layers: [
      {
        type: "Vector",
        properties: {
          id: "clusterLayer",
        },
        interactions: [
          {
            type: "clusterExplode",
            options: {
              id: "clusterExplodeInteraction",
              maxZoom: 12,
              fitOptions: {
                duration: 0,
              },
              style: {
                "circle-radius": 12,
                "circle-fill-color": "#FFD700",
                "circle-stroke-color": "rgba(255, 255, 255, 0.7)",
                "circle-stroke-width": 2,
                "text-font": "normal 16px",
                "text-value": ["get", "NAME"],
                "text-fill-color": "#000",
                "text-offset-y": 1,
              },
            },
          },
        ],
        style: [
          {
            filter: [">", ["get", "features", "length"], 1],
            style: {
              "text-value": ["to-string", ["get", "features", "length"]],
              "circle-radius": 12,
              "circle-fill-color": "#FFD700",
              "circle-stroke-color": "rgba(255, 255, 255, 0.7)",
              "circle-stroke-width": 2,
              "text-font": "normal 16px",
              "text-fill-color": "#000",
              "text-offset-y": 1,
            },
          },
          {
            else: true,
            style: {
              "circle-radius": 12,
              "circle-fill-color": "#FFD700",
              "circle-stroke-color": "rgba(255, 255, 255, 0.7)",
              "circle-stroke-width": 2,
              "text-font": "normal 16px",
              "text-value": "🗻",
              "text-fill-color": "#000",
              "text-offset-y": 1,
            },
          },
        ],
        source: {
          type: "Cluster",
          distance: 45,
          source: {
            type: "Vector",
            url: "https://raw.githubusercontent.com/drei01/geojson-world-cities/refs/heads/master/cities.geojson",
            format: "GeoJSON",
            attributions: `Map data © <a href="https://www.naturalearthdata.com">Natural Earth</a> | City points via <a href="https://github.com/drei01/geojson-world-cities">geojson-world-cities</a>`,
          },
        },
      },
      {
        type: "Tile",
        properties: {
          id: "OSM",
        },
        source: {
          type: "OSM",
        },
      },
    ],
  },
};

export default ClusterExplodeStory;
