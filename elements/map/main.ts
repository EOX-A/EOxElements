import Map from "ol/Map.js";
import View from "ol/View.js";
import olCss from "ol/ol.css";
import { addDraw } from "./src/draw";
import { addSelect } from "./src/select";
import { generateLayers } from "./src/generate";
import Interaction from "ol/interaction/Interaction";
import Control from "ol/control/Control";
import { getLayerById } from "./src/layer";
import { getCenterFromAttribute } from "./src/center";
import { addInitialControls } from "./src/controls";

export class EOxMap extends HTMLElement {
  shadow: ShadowRoot;

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
   * dictionary of ol controls associated with the map.
   */
  controls: { [index: string]: Control };

  /**
   * Apply layers from Mapbox Style JSON
   * @param json a Mapbox Style JSON
   * @returns the array of layers
   */
  setLayers: Function;

  /**
   * Adds draw functionality to a given vector layer.
   * @param layerId id of a vector layer to draw on
   * @param options options (to do: define draw options)
   */
  addDraw: Function;

  /**
   * Adds a select functionality a given vector layer.
   * @param layerId id of a vector layer to select features from
   * @param options options (to do: define select options)
   */
  addSelect: Function;

  /**
   * removes a given interaction from the map. Layer have to be removed seperately
   * @param id id of the interaction
   */
  removeInteraction: Function;

  /**
   * removes a given control from the map.
   * @param id id of the control element
   */
  removeControl: Function;

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
    .eox-map-tooltip {
      pointer-events: none !important;
    }
  `;
    style.innerHTML = shadowStyleFix + olCss;
    this.shadow.appendChild(style);
    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    this.shadow.appendChild(div);

    const slot = document.createElement("slot");
    this.shadow.appendChild(slot);

    this.map = new Map({
      controls: [],
      target: div,
      layers: generateLayers(JSON.parse(this.getAttribute("layers"))),
      view: new View({
        center: getCenterFromAttribute(this.getAttribute("center")),
        zoom: this.hasAttribute("zoom")
          ? JSON.parse(this.getAttribute("zoom"))
          : 0,
      }),
    });

    this.interactions = {};
    this.controls = {};

    this.setLayers = (json: JSON) => {
      // TODO typing
      // @ts-ignore
      this.map.setLayers(generateLayers(json));
    };

    this.addDraw = (layerId: string, options: Object) => {
      addDraw(this, layerId, options);
    };

    this.addSelect = (layerId: string, options: Object) => {
      addSelect(this, layerId, options);
    };

    this.removeInteraction = (id: string) => {
      this.map.removeInteraction(this.interactions[id]);
      delete this.interactions[id];
    };

    this.removeControl = (id: string) => {
      this.map.removeControl(this.controls[id]);
      delete this.controls[id];
    };

    this.getLayerById = (layerId: string) => {
      return getLayerById(this, layerId);
    };

    addInitialControls(this);

    this.map.on("loadend", () => {
      const loadEvt = new CustomEvent("loadend", { detail: { foo: "bar" } });
      this.dispatchEvent(loadEvt);
    });
  }
}

export const registerComponent = () => {
  customElements.define("eox-map", EOxMap);
}

registerComponent()
