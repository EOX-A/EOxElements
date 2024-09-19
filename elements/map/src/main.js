import { LitElement, html } from "lit";
import Map from "ol/Map";
import View from "ol/View";
import olCss from "ol/ol.css?inline";
import controlCss from "./controls/controls.css?inline";
import { buffer } from "ol/extent";
import "./components/compare";
import {
  transform,
  transformExtent,
  parseFeature,
  parseTextToFeature,
  registerProjection,
  registerProjectionFromCode,
  getLayerById,
  getFlatLayersArray,
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

/**
 * @typedef {import("../types").EoxLayer} EoxLayer
 * */

/**
 * The `eox-map` is a wrapper for the library [OpenLayers](https://openlayers.org/) with additional features and helper functions.
 *
 * Basic usage:
 *
 * ```
 * import "@eox/map"
 *
 * <eox-map [...]></eox-map>
 * ```
 *
 * Some basic layers, sources and formats are included in the default bundle, for advanced usage it is
 * required to import the `advanced-layers-and-sources` plugin.
 *
 * Included in the base bundle:
 * - Formats: `GeoJSON`, `MVT`
 * - Layers: `Group`, `Image`, `Tile`, `Vector`, `VectorTile`
 * - Sources: `ImageWMS`, `OSM`, `Tile`, `TileWMS`, `Vector`, `VectorTile`, `WMTS`, `XYZ`
 *
 * In order to use the rest of the layers and sources provided by OpenLayers, import the plugin as well:
 *
 * ```
 * import "@eox/map/dist/eox-map-advanced-layers-and-sources.js"
 * import "@eox/map/dist/eox-map.js"
 *
 * <eox-map [...]></eox-map>
 * ```
 * Included in the advanced plugin bundle:
 * - Layers:
 *   - All OpenLayers layer types
 *   - [`STAC`](https://github.com/m-mohr/ol-stac)
 * - Sources:
 *   - All OpenLayers source types
 *   - [`WMTSCapabilities`](https://github.com/EOX-A/EOxElements/tree/main/elements/map/src/custom/sources/WMTSCapabilities.ts)
 * - Reprojection through [proj4](https://github.com/proj4js/proj4js)
 *
 * @element eox-map
 */
export class EOxMap extends LitElement {
  // Define static properties for the component
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

  /**
   * The current zoom extent of the map.
   * This is used to define the maximum and minimum zoom levels.
   *
   * @type {Array}
   * @private
   */
  #zoomExtent;

  /**
   * Stores the controls applied to the map, such as zoom and navigation tools.
   *
   * @type {Object}
   * @private
   */
  #controls;

  /**
   * The array of layers currently added to the map.
   *
   * @type {Array<EoxLayer>}
   * @private
   */
  #layers;

  /**
   * Indicates whether the map's scroll interactions (zooming, panning) are prevented.
   *
   * @type {Boolean}
   * @private
   */
  #preventScroll;

  /**
   * Holds the configuration object for initializing and managing the map's settings.
   *
   * @type {Object}
   * @private
   */
  #config;

  /**
   * Options for animating changes to the map's view, such as panning or zooming.
   *
   * @type {Object}
   * @private
   */
  #animationOptions;

  /**
   * Represents the sync state of the map with another map instance.
   *
   * @type {String}
   * @private
   */
  #sync;

  /**
   * The current center coordinates of the map.
   * Stored as an array of two numbers representing the x and y coordinates.
   *
   * @type {Array<number>}
   * @private
   */
  #center = [0, 0];

  /**
   * The current zoom level of the map.
   *
   * @type {number}
   * @private
   */
  #zoom = 0;

  /**
   * The map's projection system, specifying how coordinates are mapped on the globe.
   * Defaults to "EPSG:3857".
   *
   * @type {string}
   * @private
   */
  #projection = "EPSG:3857";

  constructor() {
    super();

    /**
     * The OpenLayers map instance.
     *
     * @type {import("ol/Map").default}
     */
    this.map = new Map({
      controls: [],
      layers: [],
      view: new View({
        center: [0, 0],
        zoom: 0,
        projection: this.projection,
      }),
    });

    /**
     * Object to store various map interactions (e.g., drag, zoom).
     *
     * @type {Object.<string, import("ol/interaction/Interaction").default>}
     */
    this.interactions = {};

    /**
     * Object to store selection interactions for the map.
     *
     * @type {Object.<string, import("ol/interaction/Select").default>}
     */
    this.selectInteractions = {};

    /**
     * Object to store map controls (e.g., custom buttons, geolocation).
     *
     * @type {Object.<string, import("ol/control/Control").default>}
     */
    this.mapControls = {};
  }

  /**
   * Sets the center of the map. If the new center is valid, updates the map's view.
   *
   * @param {Array<number>} center - The new center coordinates [x, y].
   */
  set center(center) {
    const newCenter = setCenterMethod(center, this);
    if (newCenter !== undefined) {
      this.#center = newCenter;
      animateToStateMethod(this);
    }
  }

  /**
   * Gets the current center coordinates of the map.
   *
   * @returns {Array<number>} The current center of the map.
   */
  get center() {
    return this.#center;
  }

  /**
   * Gets the current center of the map in longitude and latitude.
   *
   * @returns {Array<number>} The geographic center [longitude, latitude].
   */
  get lonLatCenter() {
    return getLonLatCenterMethod(this);
  }

  /**
   * Gets the current extent of the map in longitude and latitude.
   *
   * @returns {Array<number>} The geographic extent [minLon, minLat, maxLon, maxLat].
   */
  get lonLatExtent() {
    return getLonLatExtentMethod(this);
  }

  /**
   * Sets the zoom level of the map and animates the change.
   *
   * @param {number} zoom - The new zoom level.
   */
  set zoom(zoom) {
    if (zoom === undefined) return;
    this.#zoom = zoom;
    animateToStateMethod(this);
  }

  /**
   * Gets the current zoom level of the map.
   *
   * @returns {number} The current zoom level.
   */
  get zoom() {
    return this.#zoom;
  }

  /**
   * Sets the zoom extent of the map.
   *
   * @param {Array} extent - The new zoom extent.
   */
  set zoomExtent(extent) {
    this.#zoomExtent = setZoomExtentMethod(extent, this);
  }

  /**
   * Sets the controls for the map.
   *
   * @param {Object} controls - An array of control configurations.
   */
  set controls(controls) {
    this.#controls = setControlsMethod(controls, this.#controls, this);
  }

  /**
   * Gets the current map controls.
   *
   * @returns {Object} The current controls applied to the map.
   */
  get controls() {
    return this.#controls;
  }

  /**
   * Sets the layers for the map.
   *
   * @param {Array<EoxLayer>} layers - An array of layer configurations.
   */
  set layers(layers) {
    this.#layers = setLayersMethod(layers, this.#layers, this);
  }

  /**
   * Gets the current layers of the map.
   *
   * @returns {Array<EoxLayer>} The current layers applied to the map.
   */
  get layers() {
    return this.#layers;
  }

  /**
   * Enables or disables scroll interactions on the map.
   *
   * @param {Boolean} preventScroll - Whether to prevent scroll interactions.
   */
  set preventScroll(preventScroll) {
    this.#preventScroll = setPreventScrollMethod(preventScroll, this);
  }

  /**
   * Gets the current scroll interaction state.
   *
   * @returns {Boolean} `true` if scroll interactions are prevented, `false` otherwise.
   */
  get preventScroll() {
    return this.#preventScroll;
  }

  /**
   * Sets the configuration for the map.
   *
   * @param {Object} config - The configuration object.
   */
  set config(config) {
    this.#config = setConfigMethod(config, this);
  }

  /**
   * Gets the current configuration of the map.
   *
   * @returns {Object} The map's configuration object.
   */
  get config() {
    return this.#config;
  }

  /**
   * Sets animation options for map view changes.
   *
   * @param {Object} animationOptions - The animation options.
   */
  set animationOptions(animationOptions) {
    this.#animationOptions = animationOptions;
  }

  /**
   * Gets the current animation options.
   *
   * @returns {Object} The current animation options for the map.
   */
  get animationOptions() {
    return this.#animationOptions;
  }

  /**
   * Sets the map's projection.
   *
   * @param {string} projection - The projection code (e.g., "EPSG:3857").
   */
  set projection(projection) {
    this.#projection = setProjectionMethod(projection, this.#projection, this);
  }

  /**
   * Gets the current map projection.
   *
   * @returns {string} The map's projection code.
   */
  get projection() {
    return this.#projection || "EPSG:3857";
  }

  /**
   * Sets the sync state for the map.
   *
   * @param {string} sync - The ID of the map to sync with.
   */
  set sync(sync) {
    this.#sync = setSyncMethod(sync, this);
  }

  /**
   * Gets the current sync state of the map.
   *
   * @returns {string} The ID of the map that this map is synced with.
   */
  get sync() {
    return this.#sync;
  }

  /**
   * Adds or updates a layer on the map.
   *
   * @param {Object} json - The layer configuration in JSON format.
   * @returns {Object} The added or updated layer.
   */
  addOrUpdateLayer(json) {
    return addOrUpdateLayerMethod(json, this);
  }

  /**
   * Removes an interaction from the map by its ID.
   *
   * @param {string} id - The ID of the interaction to remove.
   */
  removeInteraction(id) {
    removeInteractionMethod(id, this);
  }

  /**
   * Removes a select interaction from the map by its ID.
   *
   * @param {string} id - The ID of the select interaction to remove.
   */
  removeSelect(id) {
    removeSelectMethod(id, this);
  }

  /**
   * Removes a control from the map by its ID.
   *
   * @param {string} id - The ID of the control to remove.
   */
  removeControl(id) {
    removeControlMethod(id, this);
  }

  /**
   * Retrieves a layer from the map by its ID.
   *
   * @param {string} layerId - The ID of the layer to retrieve.
   * @returns {Object} The layer object.
   */
  getLayerById(layerId) {
    return getLayerById(this, layerId);
  }

  /**
   * Lifecycle method called after the component's first update.
   * Sets up initial configurations like zoom extent.
   */
  firstUpdated() {
    firstUpdatedMethod(this.#zoomExtent, this);
  }

  /**
   * Parses a feature from the input data.
   *
   * @type {Function}
   */
  parseFeature = parseFeature;

  /**
   * Parses text into a feature.
   */
  parseTextToFeature = parseTextToFeature;

  /**
   * Registers a projection from an EPSG code.
   */
  registerProjectionFromCode = registerProjectionFromCode;

  /**
   * Registers a custom projection.
   */
  registerProjection = registerProjection;

  /**
   * Retrieves all layers in a flat array.
   */
  getFlatLayersArray = getFlatLayersArray;

  /**
   * Transforms coordinates between different projections.
   */
  transform = transform;

  /**
   * Transforms the extent between different projections.
   */
  transformExtent = transformExtent;

  /**
   * Applies a buffer around an extent.
   */
  buffer = buffer;

  // Renders the component's HTML template
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
