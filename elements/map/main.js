import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

class OLComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://openlayers.org/theme/ol.css");
    this.shadow.appendChild(link);
    const style = document.createElement("style");
    style.innerText = `
      :host {
        display: block;
      }
    `;
    this.shadow.appendChild(style);
    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    this.shadow.appendChild(div);

    this.map = new Map({
      target: div,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    this.setLayers = (json) => {
      //
    };

    this.map.on("loadend", () => {
      const loadEvt = new CustomEvent("loadend", { detail: { foo: "bar" } });
      this.dispatchEvent(loadEvt);
    });
  }
}

customElements.define("eox-map", OLComponent);
