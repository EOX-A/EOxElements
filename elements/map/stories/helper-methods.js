import { html } from "lit";
import { buffer, transform, transformExtent } from "@eox/map";

window.buffer = buffer;
window.transform = transform;
window.transformExtent = transformExtent;

const HelperMethodsStory = {
  args: {
    layers: [
      { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      {
        type: "Vector",
        properties: { id: "vector" },
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
      },
    ],
    storyCodeBefore: `import { buffer, transform, transformExtent } from "@eox/map";`,
    storyCodeAfter: `
    // Register projection via proj4 with name and definition
eoxMap.registerProjection(
  'EPSG:21781',
  '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 ' +
    '+x_0=600000 +y_0=200000 +ellps=bessel ' +
    '+towgs84=660.077,13.551,369.344,2.484,1.783,2.939,5.66 +units=m +no_defs',
);

// Register projection from EPSG code
eoxMap.registerProjectionFromCode(3035);

// Get layer by id from map
console.log(eoxMap.getLayerById("osm"));

// Get flat layers array from map
console.log(eoxMap.getFlatLayersArray(eoxMap.layers));

// Parse feature
eoxMap.addEventListener("loadend", () => {
  console.log(eoxMap.parseFeature(eoxMap.getLayerById("vector").getSource().getFeatures()));

  eoxMap.parseTextToFeature(
    JSON.stringify({ type: "FeatureCollection", features: [{"type": "Feature", "geometry": {"type": "Polygon", "coordinates": [[[146.9, -2], [146.7, -2], [146.6, -2], [146.7, -2.2], [146.8, -2.2], [146.9, -2.2], [147.2, -2.2], [147.3, -2], [147.1, -2], [146.9, -2]]]}, "id": 135, "properties": {}}] }),
    eoxMap.getLayerById("vector"),
    eoxMap,
    true,
    true,
  );
  
  // Create buffer around extent
  console.log(buffer(eoxMap.map.getView().calculateExtent(), 100))

  // Transform
  console.log(transform([100000, 100000], "EPSG:3857", "EPSG:4326"));

  // Transform extent
  console.log(transformExtent(eoxMap.map.getView().calculateExtent(), "EPSG:3857", "EPSG:4326"));
})

    `,
  },
  render: (args) => html`
    <eox-map .layers=${args.layers}></eox-map>
    <script type="module">
      const eoxMap = document.querySelector("eox-map");
      ${args.storyCodeAfter};
    </script>
  `,
};

export default HelperMethodsStory;
