import { LitElement, html } from "lit";
import Map from "ol/Map.js";
import View from "ol/View.js";
import olCss from "ol/ol.css?inline";
import controlCss from "../src/controls/controls.css?inline";
// import { EOxSelectInteraction } from "../src/select";
import {
  // EoxLayer,
  createLayer,
  updateLayer,
} from "../src/generate";
// import { Draw, Modify } from "ol/interaction";
// import Control from "ol/control/Control";
import { getLayerById, getFlatLayersArray } from "../src/layer";
import { getCenterFromProperty } from "../src/center";
import {
  addOrUpdateControl,
  // controlDictionary,
  // controlType,
} from "../src/controls/controls";
import { buffer } from "ol/extent";
import "../src/compare";
import {
  addScrollInteractions,
  coordinatesRoughlyEquals,
  removeDefaultScrollInteractions,
  transform,
  transformExtent,
} from "../src/utils";
import GeoJSON from "ol/format/GeoJSON";
import {
  parseText,
  registerProjection,
  registerProjectionFromCode,
  READ_FEATURES_OPTIONS,
  cancelAnimation,
} from "../helpers";
// import Feature from "ol/Feature";
import VectorLayer from "ol/layer/Vector.js";
import {
  transform as olTransform,
  getPointResolution,
  get as getProjection,
} from "ol/proj";
import { getElement } from "../../../utils";

export class EOxMap extends LitElement {
  static get properties() {
    return {
      center: { attribute: false, type: Array },
      layers: { attribute: false, type: Array },
      preventScroll: { attribute: "prevent-scroll", type: Boolean },
      config: { attribute: false, type: Object },
      sync: { attribute: "sync", type: String },
      projection: { attribute: "projection", type: String },
    };
  }

  _zoomExtent = undefined
  _controls = undefined;
  _layers = undefined;
  _preventScroll = undefined
  _config = undefined
  _animationOptions = undefined
  _sync = undefined
  _center = [0, 0];
  _zoom = 0;
  _projection = "EPSG:3857";
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
    const centerIsSame =
      center?.length &&
      coordinatesRoughlyEquals(center, this.map.getView().getCenter());
    if (center && !centerIsSame) {
      if (!this.projection || this.projection === "EPSG:3857") {
        const mercatorCenter = getCenterFromProperty(center);
        this._center = mercatorCenter;
      } else {
        this._center = center;
      }
      this._animateToState();
    }
  }

  get center() {
    return this._center;
  }

  get lonLatCenter() {
    if (this.projection === "EPSG:4326") {
      return this.map.getView().getCenter();
    }
    return transform(this.map.getView().getCenter(), this.projection);
  }

  get lonLatExtent() {
    const currentExtent = this.map
      .getView()
      .calculateExtent(this.map.getSize());
    if (this.projection === "EPSG:4326") {
      return currentExtent;
    }
    return transformExtent(currentExtent, this.projection);
  }

  set zoom(zoom) {
    if (zoom === undefined) return;
    this._zoom = zoom;
    this._animateToState();
  }

  get zoom() {
    return this._zoom;
  }

  set zoomExtent(extent) {
    if (!extent || !extent.length) {
      this._zoomExtent = undefined;
      return;
    }
    const view = this.map.getView();
    cancelAnimation(view);
    setTimeout(() => {
      view.fit(extent, this.animationOptions);
    }, 0);
    this._zoomExtent = extent;
  }

  set controls(controls) {
    const oldControls = this._controls;
    const newControls = controls;
    console.log(controls);

    if (oldControls) {
      console.log(oldControls);
      const oldControlTypes = Object.keys(oldControls);
      const newControlTypes = Object.keys(newControls);
      for (let i = 0, ii = oldControlTypes.length; i < ii; i++) {
        const oldControlType = oldControlTypes[i];
        if (!newControlTypes.includes(oldControlType)) {
          this.removeControl(oldControlType);
        }
      }
    }
    if (newControls) {
      const keys = Object.keys(controls);
      for (let i = 0, ii = keys.length; i < ii; i++) {
        const key = keys[i];
        addOrUpdateControl(this, oldControls, key, controls[key]);
      }
    }
    this._controls = newControls;
  }

  get controls() {
    return this._controls;
  }

  set layers(layers) {
    const oldLayers = this._layers;
    const newLayers = JSON.parse(JSON.stringify(layers)).reverse();

    if (oldLayers) {
      oldLayers.forEach((l) => {
        if (
          !l.properties?.id ||
          !newLayers.find(
            (newLayer) => newLayer.properties.id === l.properties.id
          )
        ) {
          const layerToBeRemoved = getLayerById(this, l.properties?.id);
          const jsonDefinition = layerToBeRemoved.get("_jsonDefinition");
          jsonDefinition.interactions?.forEach((interaction) => {
            if (interaction.type === "select") {
              this.removeSelect(interaction.options.id);
            } else {
              this.removeInteraction(interaction.options.id);
            }
          });
          this.map.removeLayer(layerToBeRemoved);
        }
      });
    }

    newLayers.forEach((l) => {
      this.addOrUpdateLayer(l);
    });

    const sortedIds = newLayers.map((l) => l.properties?.id);
    this.map
      .getLayers()
      .getArray()
      .sort((layerA, layerB) => {
        return (
          sortedIds.indexOf(layerA.get("id")) -
          sortedIds.indexOf(layerB.get("id"))
        );
      });
    this._layers = newLayers;
  }

  get layers() {
    return this._layers;
  }

  set preventScroll(preventScroll) {
    if (preventScroll) {
      removeDefaultScrollInteractions(this.map);
      addScrollInteractions(this.map, true);
    } else addScrollInteractions(this.map);

    console.log(preventScroll)

    this._preventScroll = preventScroll;
  }

  get preventScroll() {
    return this._preventScroll;
  }

  set config(config) {
    this._config = config;
    if (config?.animationOptions !== undefined) {
      this.animationOptions = config.animationOptions;
    }
    this.projection = config?.view?.projection || "EPSG:3857";
    this.layers = config?.layers || [];
    this.controls = config?.controls || {};
    console.log(this._preventScroll)
    if (this.preventScroll === undefined) {
      this.preventScroll = config?.preventScroll;
    }
    this.zoom = config?.view?.zoom || 0;
    this.center = config?.view?.center || [0, 0];
    this.zoomExtent = config?.view?.zoomExtent;
  }

  set animationOptions(animationOptions) {
    this._animationOptions = animationOptions;
  }

  get animationOptions() {
    return this._animationOptions;
  }

  get config() {
    return this._config;
  }

  set projection(projection) {
    const oldView = this.map.getView();
    if (
      projection &&
      getProjection(projection) &&
      projection !== oldView.getProjection().getCode()
    ) {
      const newCenter = olTransform(
        oldView.getCenter(),
        oldView.getProjection().getCode(),
        projection
      );

      const newProjection = getProjection(projection);
      const oldResolution = oldView.getResolution();
      const oldMPU = oldView.getProjection().getMetersPerUnit();
      const newMPU = newProjection.getMetersPerUnit();
      const oldPointResolution =
        getPointResolution(
          oldView.getProjection(),
          1 / oldMPU,
          oldView.getCenter(),
          "m"
        ) * oldMPU;
      const newPointResolution =
        getPointResolution(newProjection, 1 / newMPU, newCenter, "m") * newMPU;

      const newResolution =
        (oldResolution * oldPointResolution) / newPointResolution;

      const newView = new View({
        zoom: oldView.getZoom(),
        center: newCenter,
        resolution: newResolution,
        rotation: oldView.getRotation(),
        projection,
      });
      const eventTypes = [
        "change:center",
        "change:resolution",
        "change:rotation",
        "propertychange",
      ];
      eventTypes.forEach((eventType) => {
        const existingListeners = oldView.getListeners(eventType);
        if (existingListeners?.length) {
          for (let i = existingListeners.length - 1; i >= 0; i--) {
            const listener = existingListeners[i];
            oldView.un(eventType, listener);
            newView.on(eventType, listener);
          }
        }
      });
      this.map.setView(newView);
      this.getFlatLayersArray(this.map.getLayers().getArray())
        .filter((l) => l instanceof VectorLayer)
        .forEach((l) => l.getSource().refresh());
      this._projection = projection;
      this.center = newCenter;
    }
  }

  set sync(sync) {
    this._sync = sync;
    if (sync) {
      setTimeout(() => {
        const originMap = getElement(sync);
        if (originMap) {
          this.map.setView(originMap.map.getView());
        }
      });
    }
  }

  get sync() {
    return this._sync;
  }

  addOrUpdateLayer = (json) => {
    if (!json.interactions) {
      json.interactions = [];
    }
    const id = json.properties?.id;

    const existingLayer = id ? getLayerById(this, id) : false;
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

  removeInteraction = (id) => {
    this.map.removeInteraction(this.interactions[id]);
    delete this.interactions[id];
    if (this.interactions[`${id}_modify`]) {
      this.map.removeInteraction(this.interactions[`${id}_modify`]);
      delete this.interactions[`${id}_modify`];
    }
  };

  removeSelect = (id) => {
    this.selectInteractions[id].remove();
    delete this.selectInteractions[id];
  };

  removeControl = (id) => {
    this.map.removeControl(this.mapControls[id]);
    delete this.mapControls[id];
  };

  getLayerById = (layerId) => {
    return getLayerById(this, layerId);
  };

  parseFeature = (features) => {
    const format = new GeoJSON();
    return format.writeFeaturesObject(features, READ_FEATURES_OPTIONS);
  };

  parseTextToFeature = (text, vectorLayer, replaceFeatures = false) => {
    parseText(text, vectorLayer, this, replaceFeatures);
  };

  registerProjectionFromCode = registerProjectionFromCode;

  registerProjection = registerProjection;

  getFlatLayersArray = getFlatLayersArray;

  transform = transform;

  transformExtent = transformExtent;

  buffer(extent, value) {
    return buffer(extent, value);
  }

  firstUpdated() {
    this.map.once("change:target", (e) => {
      e.target.getView().setCenter(this.center);
    });
    this.map.setTarget(this.renderRoot.querySelector("div"));
    if (this._zoomExtent) {
      this.map.getView().fit(this._zoomExtent, this.animationOptions);
    } else {
      this._animateToState();
    }
    this.map.on("loadend", () => {
      this.dispatchEvent(new CustomEvent("loadend", { detail: this.map }));
    });
    this.dispatchEvent(new CustomEvent("mapmounted", { detail: this.map }));
  }

  _animateToState() {
    const animateToOptions = Object.assign({}, this.animationOptions);
    const view = this.map.getView();
    cancelAnimation(view);
    if (!animateToOptions || !Object.keys(animateToOptions).length) {
      view.setCenter(this.center);
      view.setZoom(this.zoom);
      return;
    }
    animateToOptions.center = getCenterFromProperty(this.center);
    animateToOptions.zoom = this.zoom;
    view.animate(animateToOptions);
  }

  updated(_changedProperties) {}

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
