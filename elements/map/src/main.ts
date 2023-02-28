import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

const map: Map = new Map({
  controls: [],
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

window.addEventListener("message", (event) => {
  // add/update layers of the map
  if (event.data["set-layers"]) {
    const layers = event.data["set-layers"];
    layers.forEach((layer: any) => {
      console.log(layer.type);
    });
  }
});

map.on("loadend", (evt) => {
  window.parent.postMessage(
    {
      "map-event": {
        type: evt.type,
      },
    },
    "*"
  );
});
