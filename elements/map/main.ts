import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import Map from "ol/Map.js";
import View from "ol/View.js";
// @ts-ignore

import olCss from "ol/ol.css?inline";
import { EOxSelectInteraction } from "./src/select";
import {
  generateLayers,
  EoxLayer,
  createLayer,
  updateLayer,
} from "./src/generate";
import { Draw, Modify } from "ol/interaction";
import Control from "ol/control/Control";
import { getLayerById, getFlatLayersArray } from "./src/layer";
import { getCenterFromAttribute } from "./src/center";
import { addInitialControls } from "./src/controls";
import { buffer } from "ol/extent";
import "./src/compare";

@customElement("eox-map")
export class EOxMap extends LitElement {
  /**
   * Map center, can be lon/lat or UTM
   */
  @property({ type: Array })
  center: Array<number> = [0, 0];

  /**
   * Map controls
   */
  @property({ type: Object })
  controls: object = {};

  /**
   * Layers array
   */
  @property({ type: Array })
  layers: Array<EoxLayer> = [];

  /**
   * Map zoom
   */
  @property({ type: Number })
  zoom: number = 0;

  /**
   * Sync map with another map view by providing its query selector
   */
  @property()
  sync: string;

  /**
   * The native OpenLayers map object.
   * See [https://openlayers.org/en/latest/apidoc/](https://openlayers.org/en/latest/apidoc/)
   */
  @state()
  map: Map = new Map({
    controls: [],
    layers: [],
    view: new View({
      center: [0, 0],
      zoom: 0,
    }),
  });

  /**
   * dictionary of ol interactions associated with the map.
   */
  @state()
  interactions: { [index: string]: Draw | Modify } = {};

  /**
   * dictionary of select interactions.
   */
  @state()
  selectInteractions: { [index: string]: EOxSelectInteraction } = {};

  /**
   * dictionary of ol controls associated with the map.
   */
  @state()
  mapControls: { [index: string]: Control } = {};

  /**
   * Apply layers Eox Layer JSONs
   * @param {Array<EoxLayer>} json array of EoxLayer JSONs
   * @returns {Array<*>} the array of ol layers
   */
  setLayers = (json: Array<EoxLayer>) => {
    const layers = generateLayers(this, json);
    this.map.setLayers(layers);
    return layers;
  };

  /**
   * creates or updates an existing layer
   * will update an layer if the ID already exists
   * @param json EoxLayer JSON definition
   * @returns the created or updated ol layer
   */
  addOrUpdateLayer = (json: EoxLayer) => {
    const id = json.properties?.id;
    const existingLayer = getLayerById(this, id);
    let layer;
    if (existingLayer) {
      updateLayer(this, json, existingLayer);
      layer = existingLayer;
    } else {
      layer = createLayer(this, json);
      this.map.addLayer(layer);
    }
    return layer;
  };

  /**
   * removes a given ol-interaction from the map. Layer have to be removed seperately
   * @param id id of the interaction
   */
  removeInteraction = (id: string) => {
    this.map.removeInteraction(this.interactions[id]);
    delete this.interactions[id];
  };

  /**
   * removes a given EOxSelectInteraction from the map.
   * @param id id of the interaction
   */
  removeSelect = (id: string) => {
    this.selectInteractions[id].remove();
    delete this.selectInteractions[id];
  };

  /**
   * removes a given control from the map.
   * @param id id of the control element
   */
  removeControl = (id: string) => {
    this.map.removeControl(this.mapControls[id]);
    delete this.mapControls[id];
  };

  /**
   * gets an OpenLayers-Layer by its "id"
   */
  getLayerById = (layerId: string) => {
    return getLayerById(this, layerId);
  };

  getFlatLayersArray = getFlatLayersArray;

  render() {
    const shadowStyleFix = `
      :host {
        display: block;
      }
      .eox-map-tooltip {
        pointer-events: none !important;
      }
    `;

    return html`
      <style>
        ${shadowStyleFix}
        ${olCss}
      </style>
      <div style="width: 100%; height: 100%"></div>
      <slot></slot>
    `;
  }

  /**
   * Return extent increased by the provided value.
   * @param {import("ol/extent").Extent} extent
   * @param {number} value
   * @returns {import("ol/extent").Extent}
   */
  buffer(extent: import("ol/extent").Extent, value: number) {
    return buffer(extent, value);
  }

  firstUpdated() {
    addInitialControls(this);

    if (this.layers) {
      this.map.setLayers(generateLayers(this, this.layers));
    }
    if (this.sync) {
      const originMap: EOxMap = document.querySelector(this.sync);
      if (originMap) {
        this.map.setView(originMap.map.getView());
      }
    } else {
      if (this.center) {
        this.map.getView().setCenter(getCenterFromAttribute(this.center));
      }
      if (this.zoom) {
        this.map.getView().setZoom(this.zoom);
      }
    }

    this.map.setTarget(this.renderRoot.querySelector("div"));

    this.map.on("loadend", () => {
      const loadEvt = new CustomEvent("loadend", { detail: { foo: "bar" } });
      this.dispatchEvent(loadEvt);
    });
  }
}
