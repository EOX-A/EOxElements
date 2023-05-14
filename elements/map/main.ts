import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";

import olCss from "ol/ol.css";

export class EOxMap extends HTMLElement {
  private shadow: ShadowRoot;

  /**
   * The native OpenLayers map object.
   * See [https://openlayers.org/en/latest/apidoc/](https://openlayers.org/en/latest/apidoc/)
   */
  map: Map;

  /**
   * Apply layers from Mapbox Style JSON
   * @param json a Mapbox Style JSON
   * @returns the array of layers
   */
  setLayers: Function;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    const shadowStyleFix = `
    :host {
      display: block;
    }
  `;
    style.innerHTML = shadowStyleFix + olCss;
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

    this.setLayers = (json: JSON) => {
      apply(this.map, json);
    };

    this.map.on("loadend", () => {
      const loadEvt = new CustomEvent("loadend", { detail: { foo: "bar" } });
      this.dispatchEvent(loadEvt);
    });
  }
}

customElements.define("eox-map", EOxMap);
