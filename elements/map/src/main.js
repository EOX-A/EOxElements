/// <reference types="vite/client" />

import { LitElement, html } from "lit";
import Map from "ol/Map";
import View from "ol/View";
import olCss from "ol/ol.css?inline";
import { defaults as interactionDefaults } from "ol/interaction";
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
  getZoomExtentMethod,
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
import eoxStyle from "@eox/ui/style.css?inline";
import { addCommonStylesheet } from "@eox/elements-utils";

addCommonStylesheet();

/**
 * @typedef {import("./layers").EoxLayer} EoxLayer
 * @typedef {import("./types").EOxAnimationOptions} EOxAnimationOptions
 * @typedef {import("./types").ControlDictionary} ControlDictionary
 * @typedef {import("./types").ConfigObject} ConfigObject
 * @typedef {import("./types").ProjectionLike} ProjectionLike
 * @typedef {import("./types").AnyLayerWithSource} AnyLayerWithSource
 * */

/**
 * The `eox-map` element is a powerful wrapper around [OpenLayers](https://openlayers.org/) that provides a declarative, highly configurable map element for web applications. It supports a wide range of layer types, sources, controls, and advanced features, making it suitable for interactive mapping, data visualization, and geospatial analysis.
 *
 * ## Basic usage:
 *
 * ```
 * import "@eox/map"
 *
 * <eox-map [...]></eox-map>
 * ```
 *
 * Some basic layers, sources and formats are included in the default bundle, for advanced usage it is
 * required to import the `advancedLayersAndSources` plugin.
 *
 * Included in the base bundle:
 * - Formats: `GeoJSON`, `MVT`
 * - Layers: `Group`, `Image`, `Tile`, `Vector`, `VectorTile`
 * - Sources: `ImageWMS`, `OSM`, `Tile`, `TileWMS`, `Vector`, `VectorTile`, `WMTS`, `XYZ`
 *
 * In order to use the rest of the layers and sources provided by OpenLayers, import the plugin as well:
 *
 * ```
 * import "@eox/map/src/plugins/advancedLayersAndSources"
 * import "@eox/map"
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
 * For usage and story examples, see the Storybook stories in `/elements/map/stories`.
 *
 * ## Features
 *
 * - **Layer Support:** Easily add and configure layers such as Tile, Vector, VectorTile, Image, Group, and advanced types like STAC, GeoTIFF, MapboxStyle, and FlatGeoBuf. Layers are passed via the `layers` property as an array of configuration objects.
 * - **Source Formats:** Supports GeoJSON, MVT, OSM, TileWMS, WMTS, XYZ, ImageWMS, and more. Advanced sources (e.g., WMTSCapabilities) are available via plugin import.
 * - **Controls:** Add built-in or custom controls (Zoom, Geolocation, LoadingIndicator, etc.) using the `controls` property. Controls can be configured and styled for various use cases.
 * - **Interactions:** Enable feature selection, hover, click, cluster-explode, and highlight interactions. Interactions are configured per layer and can trigger custom events.
 * - **Tooltips:** Built-in tooltip support via `<eox-map-tooltip></eox-map-tooltip>`, with options for property transformation, custom tooltips, and pixel/band value display for raster layers.
 * - **Layer Groups:** Organize layers into groups for complex compositions and hierarchical management.
 * - **Animations:** Animate view changes (zoom, center, extent) using the `animationOptions` property.
 * - **Projection & Transformation:** Change map projection, register custom projections, and transform coordinates/extents using helper methods.
 * - **Sync & Compare:** Synchronize multiple maps using the `sync` property, and compare maps side-by-side with `<eox-map-compare>`.
 * - **Config Object:** Pass a configuration object for advanced map setup and dynamic updates.
 * - **Scroll Prevention:** Prevent scroll/drag interactions for embedded maps using the `preventScroll` property.
 *
 * ## Events
 *
 * - `clusterSelect`: Fired when a cluster is selected.
 * - `loadend`: Fired when the map has finished loading.
 * - `mapmounted`: Fired when the map is successfully mounted.
 * - `select`: Fired when a feature is selected.
 *
 * ## Methods
 *
 * - `registerProjection`, `registerProjectionFromCode`: Register custom or EPSG projections.
 * - `getLayerById`, `getFlatLayersArray`: Retrieve layers by ID or as a flat array.
 * - `addOrUpdateLayer`, `removeInteraction`, `removeSelect`, `removeControl`: Manage layers and interactions programmatically.
 * - `parseFeature`: Parses a feature from the input data.
 * - `parseTextToFeature`: Parses text into a feature.
 *
 * Usage: `document.querySelector("eox-map").registerProjection([...]);`
 *
 * ## Additional Helper Methods
 *
 * - `buffer`: Applies a buffer around an extent
 * - `transform`, `transformExtent`: Transform coordinates and extents between projections.
 *
 * Usage: `import { buffer, transform, transformExtent } from "@eox/map";`
 *
 * @element eox-map
 * @fires {CustomEvent} clusterSelect - A cluster is selected
 * @fires {CustomEvent} loadend - The map has finished loading
 * @fires {CustomEvent} mapmounted - The map has been successfully mounted
 * @fires {CustomEvent} select - A feature is selected
 */
export class EOxMap extends LitElement {
  // Define static properties for the component
  static get properties() {
    return {
      map: { attribute: false, state: true },
      config: { attribute: false, type: Object },
      center: { attribute: false, type: Array },
      layers: { attribute: false, type: Array },
      zoom: { attribute: false, type: Number },
      animationOptions: { attribute: false, type: Object },
      controls: { attribute: false, type: Object },
      interactions: { attribute: false, type: Object },
      lonLatCenter: { attribute: false, type: Array },
      lonLatExtent: { attribute: false, type: Array },
      mapControls: { attribute: false, state: true, type: Object },
      preventScroll: { attribute: "prevent-scroll", type: Boolean },
      projection: { attribute: "projection", type: String },
      selectInteractions: { attribute: false, state: true, type: Object },
      sync: { attribute: "sync", type: String },
      zoomExtent: { attribute: false, type: Array },
    };
  }

  /**
   * The current zoom extent of the map.
   * This is used to define the maximum and minimum zoom levels.
   *
   * @type {import("ol/extent").Extent}
   */
  #zoomExtent;

  /**
   * Stores the controls applied to the map, such as zoom and navigation tools.
   *
   * @type {ControlDictionary}
   */
  #controls;

  /**
   * The array of layers currently added to the map.
   *
   * @type {Array<EoxLayer>}
   */
  #layers;

  /**
   * Indicates whether the map's scroll interactions (zooming, panning) are prevented.
   *
   * @type {boolean}
   */
  #preventScroll;

  /**
   * Holds the configuration object for initializing and managing the map's settings.
   *
   * @type {ConfigObject}
   */
  #config;

  /**
   * Options for animating changes to the map's view, such as panning or zooming.
   *
   * @type {EOxAnimationOptions}
   */
  #animationOptions;

  /**
   * Represents the sync state of the map with another map instance.
   *
   * @type {string}
   */
  #sync;

  /**
   * The current center coordinates of the map.
   * Stored as an array of two numbers representing the x and y coordinates.
   *
   * @type {Array<number>}
   */
  #center = [0, 0];

  /**
   * The current zoom level of the map.
   *
   * @type {number}
   */
  #zoom = 0;

  /**
   * The map's projection system, specifying how coordinates are mapped on the globe.
   * Defaults to "EPSG:3857".
   *
   * @type {ProjectionLike}
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
      interactions: interactionDefaults({
        altShiftDragRotate: false,
        pinchRotate: false,
      }),
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
     * @type {Object.<string, import("./helpers/select").EOxSelectInteraction>}
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
   * @type {Array<number>}
   * @returns {Array<number>} The current center of the map.
   */
  get center() {
    return this.#center;
  }

  /**
   * Sets the configuration for the map.
   *
   * @param {ConfigObject} config - The configuration object.
   */
  set config(config) {
    this.#config = setConfigMethod(config, this);
  }

  /**
   * Gets the current configuration of the map.
   *
   * @type {ConfigObject}
   * @returns {ConfigObject} The map's configuration object.
   */
  get config() {
    return this.#config;
  }

  /**
   * Gets the current center of the map in longitude and latitude.
   *
   * @type {Array<number>}
   * @returns {Array<number>} The geographic center [longitude, latitude].
   */
  get lonLatCenter() {
    return getLonLatCenterMethod(this);
  }

  /**
   * Gets the current extent of the map in longitude and latitude.
   *
   * @type {Array<number>}
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
   * @type {number}
   * @returns {number} The current zoom level.
   */
  get zoom() {
    return this.#zoom;
  }

  /**
   * Sets the zoom extent of the map.
   *
   * @param {import("ol/extent").Extent} extent - The new zoom extent.
   */
  set zoomExtent(extent) {
    this.#zoomExtent = setZoomExtentMethod(extent, this);
  }

  /**
   * Gets the current extent of the map.
   *
   * @type {Array<number>}
   * @returns {Array<number>} The extent in current map projection.
   */
  get zoomExtent() {
    return getZoomExtentMethod(this);
  }

  /**
   * Sets the controls for the map.
   *
   * @param {ControlDictionary} controls - An array of control configurations.
   */
  set controls(controls) {
    this.#controls = setControlsMethod(controls, this.#controls, this);
  }

  /**
   * Gets the current map controls.
   *
   * @type {ControlDictionary}
   * @returns {ControlDictionary} The current controls applied to the map.
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
   * Gets the current layers of the map
   *
   * @returns {Array<EoxLayer>} The current layers applied to the map.
   */
  get layers() {
    return this.#layers;
  }

  /**
   * Enables or disables scroll interactions on the map.
   *
   * @param {boolean} preventScroll - Whether to prevent scroll interactions.
   */
  set preventScroll(preventScroll) {
    this.#preventScroll = setPreventScrollMethod(preventScroll, this);
  }

  /**
   * Gets the current scroll interaction state.
   *
   * @type {boolean}
   * @returns {boolean} `true` if scroll interactions are prevented, `false` otherwise.
   */
  get preventScroll() {
    return this.#preventScroll;
  }

  /**
   * Sets animation options for map view changes.
   *
   * @param {EOxAnimationOptions} animationOptions - The animation options.
   */
  set animationOptions(animationOptions) {
    this.#animationOptions = animationOptions;
  }

  /**
   * Gets the current animation options.
   *
   * @type {EOxAnimationOptions}
   * @returns {EOxAnimationOptions} The current animation options for the map.
   */
  get animationOptions() {
    return this.#animationOptions;
  }

  /**
   * Sets the map's projection.
   *
   * @param {ProjectionLike} projection - The projection code (e.g., "EPSG:3857").
   */
  set projection(projection) {
    this.#projection = setProjectionMethod(projection, this.#projection, this);
  }

  /**
   * Gets the current map projection.
   *
   * @type {ProjectionLike}
   * @returns {ProjectionLike} The map's projection code.
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
   * @type {string}
   * @returns {string} The ID of the map that this map is synced with.
   */
  get sync() {
    return this.#sync;
  }

  /**
   * Adds or updates a layer on the map.
   *
   * @param {EoxLayer} json - The layer configuration in JSON format.
   * @returns {Object} The added or updated layer.
   */
  addOrUpdateLayer(json) {
    return addOrUpdateLayerMethod(json, this);
  }

  /**
   * Removes an interaction from the map by its ID.
   *
   * @param {string | number} id - The ID of the interaction to remove.
   */
  removeInteraction(id) {
    removeInteractionMethod(id, this);
  }

  /**
   * Removes a select interaction from the map by its ID.
   *
   * @param {string | number} id - The ID of the select interaction to remove.
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
   * @returns {import("./types").AnyLayerWithSource} The layer object.
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
   * Converts an array of OpenLayers features into a GeoJSON object.
   *
   * @param {Array<import("ol/Feature").default>} features - An array of OpenLayers features to be converted.
   * @returns {Object} - A GeoJSON object representing the provided features.
   */
  parseFeature(features) {
    return parseFeature(features);
  }

  /**
   * This function reads text and attempts to parse it as GeoJSON, KML, or TopoJSON.
   * If successful, it adds the parsed features to the map.
   *
   * @param {string} text - The string containing the geographic data to be parsed.
   * @param {import("ol/layer").Vector} vectorLayer - The vector layer to which the parsed features will be added.
   * @param {EOxMap} EOxMap - An instance of EOxMap, used here for context and potentially for further operations like event dispatching.
   * @param {boolean} replaceFeatures - Optional boolean flag indicating whether to replace the existing features with the new ones.
   * @param {boolean} animate - Optional boolean flag indicating whether to animate the map on feature change.
   * @return {void}
   */
  parseTextToFeature(text, vectorLayer, EOxMap, replaceFeatures, animate) {
    parseTextToFeature(text, vectorLayer, EOxMap, replaceFeatures, animate);
  }

  /**
   * Fetches the projection definition for a given EPSG code from epsg.io and registers the projection using proj4.
   *
   * @param {string | number} code - The EPSG code (e.g., 4326 or 'EPSG:4326').
   * @returns {Promise<import("ol/proj/Projection").default>} - A promise that resolves to the registered projection.
   */
  registerProjectionFromCode(code) {
    return registerProjectionFromCode(code);
  }

  /**
   * Registers a projection under a given name using a proj4 definition.
   * This allows OpenLayers to recognize and work with custom or predefined projections.
   *
   * @param {string} name - The name of the projection (e.g., "EPSG:4326").
   * @param {string | proj4.ProjectionDefinition} projection - The proj4 projection definition string or object.
   * @param {import("ol/extent").Extent} [extent=undefined] - Optional extent for the projection. Defines the coordinate system's valid area.
   */
  registerProjection(name, projection, extent = undefined) {
    registerProjection(name, projection, extent);
  }

  /**
   * Returns a flat array of all map layers, including nested layers within groups.
   *
   * Note: If you want to get all layers without groups, use the native OpenLayers `getAllLayers` method:
   * https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#getAllLayers
   *
   * @param {Array<import("./types").AnyLayer>} layers - Array of OpenLayers layers, possibly containing groups.
   * @returns {Array<import("./types").AnyLayer>} layers - Flattened array of input layers
   */
  getFlatLayersArray(layers) {
    return getFlatLayersArray(layers);
  }

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
        ${eoxStyle}
        ${controlCss}
      </style>
      <div style="width: 100%; height: 100%"></div>
      <slot></slot>
    `;
  }
}

// Export Additional Helper Methods
export { buffer, transform, transformExtent };

customElements.define("eox-map", EOxMap);
