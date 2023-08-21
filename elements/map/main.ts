import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import Map from "ol/Map.js";
import View from "ol/View.js";
// @ts-ignore
import olCss from "ol/ol.css";
import { addDraw } from "./src/draw";
import { addSelect } from "./src/select";
import { generateLayers, EoxLayer } from "./src/generate";
import Interaction from "ol/interaction/Interaction";
import Control from "ol/control/Control";
import { getLayerById } from "./src/layer";
import { getCenterFromAttribute } from "./src/center";
import { addInitialControls } from "./src/controls";

@customElement("eox-map")
export class EOxMap extends LitElement {
  /**
   * Map center, can be lon/lat or UTM
   */
  @property({ type: Array })
  center: Array<number>;

  /**
   * Map controls
   */
  @property({ type: Object })
  controls: object;

  /**
   * Layers array
   */
  @property({ type: Array })
  layers: Array<EoxLayer>;

  /**
   * Map zoom
   */
  @property({ type: Number })
  zoom: number;

  /**
   * The native OpenLayers map object.
   * See [https://openlayers.org/en/latest/apidoc/](https://openlayers.org/en/latest/apidoc/)
   */
  @state()
  map: Map;

  /**
   * dictionary of ol interactions associated with the map.
   */
  @state()
  interactions: { [index: string]: Interaction };

  /**
   * dictionary of ol controls associated with the map.
   */
  @state()
  mapControls: { [index: string]: Control };

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

  firstUpdated(): void {
    this.map = new Map({
      controls: [],
      target: this.renderRoot.querySelector("div"),
      layers: generateLayers(this.layers),
      view: new View({
        center: getCenterFromAttribute(this.center),
        zoom: this.zoom || 0,
      }),
    });

    this.interactions = {};
    this.mapControls = {};

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
      this.map.removeControl(this.mapControls[id]);
      delete this.mapControls[id];
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
