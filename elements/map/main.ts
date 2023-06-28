import Map from "ol/Map.js";
import View from "ol/View.js";
import { Coordinate } from "ol/coordinate";

import olCss from "ol/ol.css";
import { addDraw } from "./src/draw";
import { generateLayers } from "./src/generate";
import Interaction from "ol/interaction/Interaction";
import { getLayerById } from "./src/layer";

export class EOxMap extends HTMLElement {
  private shadow: ShadowRoot;

  /**
   * The native OpenLayers map object.
   * See [https://openlayers.org/en/latest/apidoc/](https://openlayers.org/en/latest/apidoc/)
   */
  map: Map;

  /**
   * dictionary of ol interactions associated with the map.
   */
  interactions: { [index: string]: Interaction };

  /**
   * Apply layers from Mapbox Style JSON
   * @param json a Mapbox Style JSON
   * @returns the array of layers
   */
  setLayers: Function;

  /**
   * Adds draw functionality to a given vector layer.
   * @param layerId id of a vector layer to draw on
   */
  addDraw: Function;

  /**
   * removes a given draw interaction from the map. Layer have to be removed seperately
   * @param id id of the interaction
   */
  removeInteraction: Function;

  /**
   * gets an OpenLayers-Layer, either by its "id" or one of its Mapbox-Style IDs
   */
  getLayerById: Function;

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
      controls: [],
      target: div,
      layers: generateLayers(JSON.parse(this.getAttribute("layers"))),
      view: new View({
        center: this.hasAttribute("center")
          ? (JSON.parse(
              this.getAttribute("center")
            ) as Array<Number> as Coordinate)
          : [0, 0],
        zoom: this.hasAttribute("zoom")
          ? JSON.parse(this.getAttribute("zoom"))
          : 0,
      }),
    });
    this.interactions = {};

    this.setLayers = (json: JSON) => {
      // TODO typing
      // @ts-ignore
      this.map.setLayers(generateLayers(json));
    };

    this.addDraw = (layerId: string, options: Object) => {
      addDraw(this, layerId, options);
    };

    this.removeInteraction = (id: string) => {
      this.map.removeInteraction(this.interactions[id]);
      delete this.interactions[id];
    };

    this.getLayerById = (layerId: string) => {
      return getLayerById(this, layerId);
    };

    this.map.on("loadend", () => {
      const loadEvt = new CustomEvent("loadend", { detail: { foo: "bar" } });
      this.dispatchEvent(loadEvt);
    });
  }
}

customElements.define("eox-map", EOxMap);
