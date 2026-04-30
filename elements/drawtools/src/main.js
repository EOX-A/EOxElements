import { LitElement, html, nothing } from "lit";
import "./components/list";
import "./components/controller";
import { styleEOX } from "./style.eox";
import {
  startDrawingMethod,
  initLayerMethod,
  discardDrawingMethod,
  emitDrawnFeaturesMethod,
  createSelectHandler,
  handleLayerId,
  onKeyDownMethod,
  removeFeatureMethod,
  removeFeatureByIndexMethod,
} from "./methods/draw";
import { DUMMY_GEO_JSON } from "./enums/index.js";
import {
  initMapDragDropImport,
  handleFiles,
} from "./helpers/generate-upload-events.js";

/**
 * The `eox-drawtools` element provides a comprehensive set of drawing, editing, selection, and import tools for vector features on an `eox-map`. It supports drawing multiple feature types (Polygon, Box, Point, Circle, LineString), continuous drawing, feature modification, selection from existing layers, and import/export in various formats (GeoJSON, WKT, native OL feature).
 *
 * Key features:
 * - Draw polygons, boxes, points, circles, and lines on the map
 * - Draw multiple features at once (set `multiple-features`)
 * - Continuous drawing mode (set `continuous`)
 * - Modify drawn features (set `allow-modify`)
 * - Select features from a specified layer (`layer-id`)
 * - Display a list of drawn/selected features (`show-list`)
 * - Edit features as GeoJSON in a text editor (`show-editor`)
 * - Import features via drag-and-drop or file upload (`import-features`)
 * - Emit drawn features in different formats (`format`: `feature`, `geojson`, `wkt`)
 * - Emit features in a specified projection (`projection`)
 * - Customizable feature styles (`featureStyles`)
 * - Unstyled and no-shadow variants for easy integration
 *
 * Usage examples and visual demos are available in Storybook stories, including scenarios for multi-feature drawing, feature modification, selection, import/export, continuous drawing, format and projection control, and style customization.
 *
 * ## Methods
 *
 * - `startDrawing`: Triggers starting the drawing interaction on the map.
 * - `discardDrawing`: Triggers discarding/stopping the drawing interaction and deleting the drawn shapes.
 * - `removeFeature`: Removes a feature from the drawn features.
 * - `removeFeatureByIndex`: Removes a feature from the drawn features by its index.
 *
 * Usage: `document.querySelector("eox-drawtools").startDrawing();`
 *
 * @element eox-drawtools
 * @fires {CustomEvent} drawupdate - Fires whenever features are added, modified or discarded
 */
export class EOxDrawTools extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      allowModify: { attribute: "allow-modify", type: Boolean },
      for: { type: String },
      currentlyDrawing: { attribute: false, state: true, type: Boolean },
      continuous: { type: Boolean },
      draw: { attribute: false, state: true },
      drawLayer: { attribute: false, state: true },
      drawnFeatures: { attribute: false, state: true, type: Array },
      featureName: { attribute: "feature-name", type: String },
      featureNameKey: { attribute: "feature-name-key", type: String },
      layerId: { attribute: "layer-id", type: String },
      featureStyles: { type: Object },
      modify: { attribute: false, state: true },
      multipleFeatures: { attribute: "multiple-features", type: Boolean },
      measure: { type: Boolean },
      importFeatures: { attribute: "import-features", type: Boolean },
      showEditor: { attribute: "show-editor", type: Boolean },
      showList: { attribute: "show-list", type: Boolean },
      projection: { type: String },
      noShadow: { attribute: "no-shadow", type: Boolean },
      format: { type: String },
      type: { type: String },
      unstyled: { type: Boolean },
    };
  }

  /**
   * @type import("@eox/map").EOxMap
   */
  #eoxMap;

  /**
   * @type import("ol").Map
   */
  #olMap;

  /**
   * @type string
   */
  #geoJSON;

  /**
   * @type string
   */
  #layerId;
  /**
   * @type boolean
   */
  #internalUpdate = false;

  /**
   * @type boolean
   */
  #continuous;

  /**
   * @type Array<import("ol").Feature>
   */
  #drawnFeatures = [];

  /**
   * @type {(e: KeyboardEvent) => void}
   */
  #onKeyDownListener = (e) => onKeyDownMethod(e, this);

  constructor() {
    super();

    /**
     * Allow modifying the drawn feature(s)
     */
    this.allowModify = false;

    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";

    /**
     * Whether the user is currently in the process of drawing or not
     */
    this.currentlyDrawing = false;

    /**
     * The current native OpenLayers `draw` interaction
     * @type import("ol/interaction").Draw | import("@eox/map").EOxMap["selectInteractions"][string]
     */
    this.draw = null;

    /**
     * The current native OpenLayers draw `layer` (initialized with a `zIndex` of 100)
     * @type import("ol/layer/Vector").default
     */

    this.drawLayer = null;

    /**
     * The ID of the Vector/Vector Tile Layer that contains features to be selected
     */
    this.layerId = "";

    /**
     * The display name of drawn features, shown e.g. in the feature list.
     */
    this.featureName = "Feature";

    /**
     * The key of the property to display in the feature list.
     */
    this.featureNameKey = null;

    /**
     * Flat styles for the drawn/selected features
     * @type {{
     * layer?: import("ol/style/flat").FlatStyleLike
     * hover?: import("ol/style/flat").FlatStyleLike
     * click?: import("ol/style/flat").FlatStyleLike
     * } | null}
     */
    this.featureStyles = null;

    /**
     * The current native OpenLayers `modify` interaction
     * @type import("ol/interaction").Modify
     */
    this.modify = null;

    /**
     * Allow adding more than one feature at a time
     */
    this.multipleFeatures = false;

    /**
     * Display area/line measurement for the drawn features.
     * When enabled, a "measure" property is added to each drawn feature's properties,
     * containing the calculated area (for Polygons and Circles) or length (for LineStrings).
     * This measurement is also displayed as a text label on the map using OpenLayers flat styles.
     */
    this.measure = false;

    /**
     * Allow import features using drag-drop and upload button
     */
    this.importFeatures = false;

    /**
     * Show geo-json editor for draw tool
     */
    this.showEditor = false;

    /**
     * Show list of features
     */
    this.showList = false;
    /**
     * Projection of the emitted drawn features
     */
    this.projection = "EPSG:4326";

    /**
     * Type of the drawn feature
     * @type {"Polygon" | "Point" | "LineString" | "Circle" | "Box"}
     */
    this.type = "Polygon";

    /**
     * @type {ReturnType<typeof import("./methods/draw/create-select-handler").default>}
     */
    this.selectionEvents = null;

    /**
     * The format in which the drawn features should be emitted
     *
     * @default "feature"
     * @type {"feature"| "geojson" | "wkt"}
     */
    this.format = "feature";

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;
  }

  /**
   * Enables the user to draw continuously one feature after another
   * without having to discard previous ones manually
   * @type {boolean}
   */
  set continuous(value) {
    this.#continuous = value;
    if (value) this.multipleFeatures = true;
  }

  get continuous() {
    return this.#continuous;
  }

  /**
   * Used internally to update the drawnFeatures state without overwriting the map layer source.
   * @param {Array<import("ol").Feature>} features
   * @ignore
   */
  setDrawnFeaturesInternal(features) {
    this.#internalUpdate = true;
    this.drawnFeatures = features;
    this.#internalUpdate = false;
  }

  /**
   * The array of drawn native OpenLayers features. Normally includes only one feature, until multiple feature drawing is enabled.
   * Pass features to be drawn on the map by setting this property. The features should be in the same projection as the map, or a projection should be specified via the `projection` property for proper transformation.
   * @type {Array<import("ol").Feature>}
   */
  set drawnFeatures(features) {
    const oldValue = this.#drawnFeatures;
    this.#drawnFeatures = features;
    if (this.drawLayer && !this.#internalUpdate) {
      this.drawLayer.getSource().clear();
      if (features?.length) {
        const source = this.eoxMap?.projection || "EPSG:3857";
        const destination = this.projection || "EPSG:4326";

        let featuresToAdd = features;
        if (source && destination && source !== destination) {
          featuresToAdd = features.map((feat) => {
            feat = feat.clone();
            const transformed = feat
              .getGeometry()
              .transform(destination, source);
            feat.setGeometry(transformed);
            return feat;
          });
        }
        this.drawLayer.getSource().addFeatures(featuresToAdd);
      }
      this.updateGeoJSON();
    }
    this.requestUpdate("drawnFeatures", oldValue);
  }

  get drawnFeatures() {
    return this.#drawnFeatures;
  }

  /**
   * Enables selection mode for the passed layer
   * @type {string}
   */
  set layerId(value) {
    handleLayerId(this, this.eoxMap, value, this.#layerId);
    this.#layerId = value;
  }

  get layerId() {
    return this.#layerId;
  }

  /**
   * Triggers starting the drawing interaction on the map.
   */
  startDrawing() {
    startDrawingMethod(this);
  }

  /**
   * Triggers discarding/stopping the drawing interaction and deleting the drawn shapes.
   */
  discardDrawing() {
    discardDrawingMethod(this);
  }

  /**
   * Removes a feature from the drawn features.
   * @param {import("ol").Feature} feature - The feature to remove.
   */
  removeFeature(feature) {
    removeFeatureMethod(this, feature);
  }

  /**
   * Removes a feature from the drawn features by its index.
   * @param {number} index - The index of the feature to remove.
   */
  removeFeatureByIndex(index) {
    removeFeatureByIndexMethod(this, index);
  }

  /**
   * @param {string} text - The string representation of the features to be parsed.
   * @param {boolean} replaceFeatures - A boolean flag indicating whether to replace the existing features.
   * @param {boolean} animate - A boolean flag indicating whether to animate the map on feature change.
   * @ignore
   */
  handleFeatureChange(text, replaceFeatures = false, animate = true) {
    this.eoxMap.parseTextToFeature(
      text || JSON.stringify(DUMMY_GEO_JSON),
      this.drawLayer,
      this.eoxMap,
      replaceFeatures,
      animate,
    );
  }

  /**
   * @param {DragEvent | InputEvent & { target: HTMLInputElement }} evt - The event object from the file input interaction.
   * @ignore
   */
  handleFilesChange(evt) {
    handleFiles(evt, this);
  }

  /**
   * @event onModifyEnd triggered when the modification of a shape is completed.
   * @ignore
   */
  onModifyEnd() {
    this.emitDrawnFeatures();
  }

  /**
   * Update #geoJSON with stringify feature.
   * @ignore
   */
  updateGeoJSON() {
    this.#geoJSON = JSON.stringify(
      this.eoxMap.parseFeature(this.drawnFeatures) || DUMMY_GEO_JSON,
      undefined,
      2,
    );
  }

  /**
   * Triggers different events when the drawing of a shape is completed.
   * @ignore
   */
  emitDrawnFeatures() {
    /**
     * @param {import("./methods/draw/emit-drawn-features").EmitFormat} value
     */
    const drawUpdateEvent = (value) => {
      /**
       * Fires whenever features are added, modified or discarded, where the event detail
       * is the `drawnFeatures` array
       * @type Array<import("ol").Feature>
       */
      this.dispatchEvent(new CustomEvent("drawupdate", { detail: value }));
    };
    emitDrawnFeaturesMethod(this, drawUpdateEvent);
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   * @ignore
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * initializes the EOxMap and OlMap instances
   * And stores them in the private properties #eoxMap and #olMap, respectively.
   * @ignore
   */
  updateLayer() {
    if (this.resetLayer) {
      this.resetLayer(this);
    }
    const { EoxMap, OlMap, reset } = initLayerMethod(
      this,
      this.multipleFeatures,
    );
    this.resetLayer = reset;
    this.eoxMap = EoxMap;
    this.#olMap = OlMap;
  }

  /**
   * initializes the EOxMap and OlMap instances
   * And stores them in the private properties #eoxMap and #olMap, respectively.
   * It then calls requestUpdate to trigger a re-render.
   * @ignore
   */
  firstUpdated() {
    this.updateLayer();
    this.selectionEvents = createSelectHandler(this);

    if (this.importFeatures) initMapDragDropImport(this, this.eoxMap);

    if (this.drawnFeatures?.length > 0) {
      this.drawnFeatures = [...this.drawnFeatures];
    } else {
      this.updateGeoJSON();
    }
    this.requestUpdate();
  }

  /** @ignore */
  updated(changedProperties) {
    const hasOldValue = (prop) =>
      changedProperties.has(prop) && changedProperties.get(prop) !== undefined;

    if (
      hasOldValue("for") ||
      (changedProperties.has("type") &&
        changedProperties.get("type") !== this.type) ||
      (changedProperties.has("measure") &&
        changedProperties.get("measure") !== this.measure)
    ) {
      this.updateLayer();
      this.currentlyDrawing = false;
    }
  }

  /**
   * The eox-map instance associated with the draw tools
   * @type {import("@eox/map").EOxMap}
   */
  get eoxMap() {
    return this.#eoxMap;
  }

  set eoxMap(value) {
    const oldValue = this.#eoxMap;
    this.#eoxMap = value;
    this.requestUpdate("eoxMap", oldValue);
  }

  /** @ignore */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this.#onKeyDownListener);
    if (this.drawLayer && this.eoxMap) {
      const { reset } = initLayerMethod(this, this.multipleFeatures);
      this.resetLayer = reset;
    }
  }

  /** @ignore */
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this.#onKeyDownListener);
    this.resetLayer?.(this);
  }
  // Render method for UI display
  render() {
    return html`
      <style>
        :host { display: block; }
        ${!this.unstyled && styleEOX}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{
          start: () => this.startDrawing(),
          discard: () => this.discardDrawing(),
          editor: (/** @type {{ target: { value: string; }; }} */ evt) =>
            this.handleFeatureChange(evt.target.value, true),
          import: (/** @type {DragEvent} */ evt) => this.handleFilesChange(evt),
        }}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${this.#geoJSON}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList && this.drawnFeatures?.length
        ? html`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${this.#olMap}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${() => {
              this.updateGeoJSON();
              this.requestUpdate();
            }}
          ></eox-drawtools-list>`
        : nothing}
    `;
  }
}

customElements.define("eox-drawtools", EOxDrawTools);
