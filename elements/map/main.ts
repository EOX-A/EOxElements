import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import Map from "ol/Map.js";
import View from "ol/View.js";
// @ts-ignore
import olCss from "ol/ol.css?inline";
import { EOxSelectInteraction } from "./src/select";
import { EoxLayer, createLayer, updateLayer } from "./src/generate";
import { Draw, Modify } from "ol/interaction";
import Control from "ol/control/Control";
import { getLayerById, getFlatLayersArray } from "./src/layer";
import { getCenterFromProperty } from "./src/center";
import {
  addOrUpdateControl,
  controlDictionary,
  controlType,
} from "./src/controls";
import { buffer } from "ol/extent";
import "./src/compare";

@customElement("eox-map")
export class EOxMap extends LitElement {
  /**
   * Map center, can be lon/lat or UTM
   */
  @property({ attribute: false, type: Array })
  center: Array<number> = [0, 0];

  /**
   * Map controls
   */
  private _controls: controlDictionary;

  set controls(controls: controlDictionary) {
    const oldControls = this._controls;
    const newControls = controls;

    // remove controls that are not defined anymore
    if (oldControls) {
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
        const key = keys[i] as controlType;
        addOrUpdateControl(this, oldControls, key, controls[key]);
      }
    }
    this._controls = newControls;
  }

  get controls() {
    return this._controls;
  }

  private _layers: Array<EoxLayer>;

  set layers(layers: Array<EoxLayer>) {
    const oldLayers = this._layers;
    const newLayers = layers;

    // remove layers that are not defined anymore
    if (oldLayers) {
      oldLayers.forEach((l: EoxLayer) => {
        if (
          !l.properties?.id || // always remove old layers without id
          !newLayers.find(
            (newLayer) => newLayer.properties.id === l.properties.id
          )
        ) {
          const layerToBeRemoved = getLayerById(this, l.properties?.id);
          this.map.removeLayer(layerToBeRemoved);
        }
      });
    }

    newLayers.forEach((l) => {
      this.addOrUpdateLayer(l);
    });

    // after all layers were added/updated/deleted, rearrange them in the correct order
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

  @property({ type: Array })
  get layers() {
    return this._layers;
  }

  /**
   * Map zoom
   */
  @property({ attribute: false, type: Number })
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
   * creates or updates an existing layer
   * will update an layer if the ID already exists
   * @param json EoxLayer JSON definition
   * @returns the created or updated ol layer
   */
  addOrUpdateLayer = (json: EoxLayer) => {
    if (!json.interactions) {
      json.interactions = [];
    }
    const id = json.properties?.id;

    // if id is undefined, never try to update an existing layer, always create a new one instead.
    const existingLayer = id && getLayerById(this, id);
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
  removeInteraction = (id: string | number) => {
    this.map.removeInteraction(this.interactions[id]);
    delete this.interactions[id];
    if (this.interactions[`${id}_modify`]) {
      this.map.removeInteraction(this.interactions[`${id}_modify`]);
      delete this.interactions[`${id}_modify`];
    }
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
    if (this.sync) {
      const originMap: EOxMap = document.querySelector(this.sync);
      if (originMap) {
        this.map.setView(originMap.map.getView());
      }
    } else {
      if (this.center) {
        this.map.getView().setCenter(getCenterFromProperty(this.center));
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

  protected updated(
    _changedProperties: // eslint-disable-next-line
    PropertyValueMap<any> | globalThis.Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("center")) {
      this.map.getView().setCenter(getCenterFromProperty(this.center));
    }
    if (_changedProperties.has("zoom")) {
      this.map.getView().setZoom(this.zoom || 0);
    }
  }
}
