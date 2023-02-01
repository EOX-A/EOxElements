import Map from "ol/Map.js";
import View from "ol/View.js";

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

window.addEventListener("message", (event) => {
  // add/update layers of the map
  if (event.data.hasOwnProperty("update-layers")) {
    const layers = event.data["update-layers"];
    layers.forEach((layer: any) => {
      console.log(layer);
    });
  }
});
