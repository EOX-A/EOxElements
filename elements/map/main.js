import Map from "ol/Map.js";
import View from "ol/View.js";
import { Draw } from "ol/interaction.js";
import { OSM, Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";

const map = new Map({
  controls: [],
  layers: [],
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

window.map = map;

map.on("click", (event) => {
  window.postMessage(
    {
      type: "event",
      click: {
        coordinate: event.coordinate,
        pixel: event.pixel,
      },
    },
    "*"
  );
});

window.addEventListener("message", (event) => {
  // add a layer to the map
  if (event.data.type === "layer") {
    if (event.data.layer.source === "osm") {
      map.addLayer(
        new TileLayer({
          ...event.data.layer,
          id: event.data.layer.source,
          source: new OSM(),
        })
      );
    }
    if (event.data.layer.source === "vector") {
      const source = new VectorSource();
      const vector = new VectorLayer({
        source: source,
        style: {
          "circle-radius": 7,
          "circle-fill-color": "#004170",
        },
      });
      map.addLayer(vector);
      const draw = new Draw({
        source: source,
        type: "Point",
      });
      map.addInteraction(draw);
    }
  }
  // change layer visibilty
  if (event.data.type === "layer-visibility") {
    const layer = map
      .getLayers()
      .getArray()
      .find((layer) => layer.get("id") === event.data.layer.source);
    layer.setVisible(event.data.layer.visible);
  }
  // animate the view
  if (event.data.type === "view") {
    map.getView().animate({ ...event.data });
  }
});
