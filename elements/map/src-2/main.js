import { LitElement, html } from "lit";
import Map from "ol/Map.js";
import View from "ol/View.js";
import olCss from "ol/ol.css?inline";
import controlCss from "../src/controls/controls.css?inline";
import { getLayerById, getFlatLayersArray } from "../src/layer";
import { buffer } from "ol/extent";
import "../src/compare";
import {
  transform,
  transformExtent,
  parseFeature,
  parseTextToFeature,
  registerProjection,
  registerProjectionFromCode,
} from "./helpers";
import {
  animateToStateMethod,
  setCenterMethod,
  getLonLatCenterMethod,
  getLonLatExtentMethod,
  setZoomExtentMethod,
  setControlsMethod,
  setLayersMethod,
  setPreventScrollMethod,
  setConfigMethod,
  setProjectionMethod,
  setSyncMethod,
  addOrUpdateLayerMethod,
  removeInteractionMethod,
  removeSelectMethod,
  removeControlMethod,
  firstUpdatedMethod,
} from "./methods/map/";

export class EOxMap extends LitElement {
  static get properties() {
    return {
      center: { attribute: false, type: Array },
      layers: { attribute: false, type: Array },
      preventScroll: { attribute: "prevent-scroll", type: Boolean },
      config: { attribute: false, type: Object },
      sync: { attribute: "sync", type: String },
      projection: { attribute: "projection", type: String },
      map: { attribute: false, state: true },
      intersections: { attribute: false, state: true, type: Object },
      selectInteractions: { attribute: false, state: true, type: Object },
      mapControls: { attribute: false, state: true, type: Object },
    };
  }

  #zoomExtent = undefined;
  #controls = undefined;
  #layers = undefined;
  #preventScroll = undefined;
  #config = undefined;
  #animationOptions = undefined;
  #sync = undefined;
  #center = [0, 0];
  #zoom = 0;
  #projection = "EPSG:3857";
  constructor() {
    super();
    this.map = new Map({
      controls: [],
      layers: [],
      view: new View({
        center: [0, 0],
        zoom: 0,
        projection: this.projection,
      }),
    });
    this.interactions = {};
    this.selectInteractions = {};
    this.mapControls = {};
  }

  set center(center) {
    const newCenter = setCenterMethod(center, this);
    if (newCenter !== undefined) {
      this.#center = newCenter;
      animateToStateMethod(this);
    }
  }

  get center() {
    return this.#center;
  }

  get lonLatCenter() {
    return getLonLatCenterMethod(this);
  }

  get lonLatExtent() {
    return getLonLatExtentMethod(this);
  }

  set zoom(zoom) {
    if (zoom === undefined) return;
    this.#zoom = zoom;
    animateToStateMethod(this);
  }

  get zoom() {
    return this.#zoom;
  }

  set zoomExtent(extent) {
    this.#zoomExtent = setZoomExtentMethod(extent, this);
  }

  set controls(controls) {
    this.#controls = setControlsMethod(controls, this.#controls, this);
  }

  get controls() {
    return this.#controls;
  }

  set layers(layers) {
    this.#layers = setLayersMethod(layers, this.#layers, this);
  }

  get layers() {
    return this.#layers;
  }

  set preventScroll(preventScroll) {
    this.#preventScroll = setPreventScrollMethod(preventScroll, this);
  }

  get preventScroll() {
    return this.#preventScroll;
  }

  set config(config) {
    this.#config = setConfigMethod(config, this);
  }

  get config() {
    return this.#config;
  }

  set animationOptions(animationOptions) {
    this.#animationOptions = animationOptions;
  }

  get animationOptions() {
    return this.#animationOptions;
  }

  set projection(projection) {
    this.#projection = setProjectionMethod(projection, this.#projection, this);
  }

  get projection() {
    return this.#projection || "EPSG:3857";
  }

  set sync(sync) {
    this.#sync = setSyncMethod(sync, this);
  }

  get sync() {
    return this.#sync;
  }

  addOrUpdateLayer(json) {
    return addOrUpdateLayerMethod(json, this);
  }

  removeInteraction(id) {
    removeInteractionMethod(id, this);
  }

  removeSelect(id) {
    removeSelectMethod(id, this);
  }

  removeControl(id) {
    removeControlMethod(id, this);
  }

  getLayerById(layerId) {
    return getLayerById(this, layerId);
  }

  firstUpdated() {
    firstUpdatedMethod(this.#zoomExtent, this);
  }

  parseFeature = parseFeature;

  parseTextToFeature = parseTextToFeature;

  registerProjectionFromCode = registerProjectionFromCode;

  registerProjection = registerProjection;

  getFlatLayersArray = getFlatLayersArray;

  transform = transform;

  transformExtent = transformExtent;

  buffer = buffer;

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        .eox-map-tooltip {
          pointer-events: none !important;
        }
        ${olCss}
        ${controlCss}
      </style>
      <div style="width: 100%; height: 100%"></div>
      <slot></slot>
    `;
  }
}

customElements.define("eox-map", EOxMap);
