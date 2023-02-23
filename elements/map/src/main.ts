import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { apply } from 'ol-mapbox-style';

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

window.map = map;

window.addEventListener("message", (event) => {
  // add/update layers of the map
  if (event.data.hasOwnProperty("set-layers")) {
    const styleJson = event.data["set-layers"];
    apply(map, styleJson)
  }
});

map.on("loadend", (evt) => {
  window.postMessage(
    {
      "map-event": {
        type: evt.type,
      },
    },
    "*"
  );
});
