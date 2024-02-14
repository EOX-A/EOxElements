import { LitElement, html, nothing } from "lit";
import "./components/list";
import "./components/controller";
import { styleEOX } from "./style.eox";
import {
  startDrawingMethod,
  initLayerMethod,
  discardDrawingMethod,
  emitDrawnFeaturesMethod,
} from "./methods/draw";
import mainStyle from "../../../utils/styles/dist/main.style";
import { DUMMY_GEO_JSON } from "./enums/index.js";

/**
 * Manage drawn features on a map
 *
 * @element eox-drawtools
 */
export class EOxDrawTools extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      allowModify: { attribute: "allow-modify", type: Boolean },
      for: { type: String },
      currentlyDrawing: { attribute: false, state: true, type: Boolean },
      draw: { attribute: false, state: true },
      drawLayer: { attribute: false, state: true },
      drawnFeatures: { attribute: false, state: true, type: Array },
      geoJSON: { attribute: false, state: true, type: Object },
      modify: { attribute: false, state: true },
      multipleFeatures: { attribute: "multiple-features", type: Boolean },
      showList: { attribute: "show-list", type: Boolean },
      noShadow: { type: Boolean },
      type: { type: String },
      unstyled: { type: Boolean },
    };
  }

  /**
   * @type import("../../map/main").EOxMap
   */
  #eoxMap;

  /**
   * @type import("ol").Map
   */
  #olMap;

  constructor() {
    super();

    /**
     * Allow modifying the drawn feature(s)
     */
    this.allowModify = false;

    /**
     * The query selector for the map
     * @default eox-map
     */
    this.for = "eox-map";

    /**
     * Whether the user is currently in the process of drawing or not
     */
    this.currentlyDrawing = false;

    /**
     * The current native OpenLayers `draw` interaction
     * @type import("ol/interaction").Draw
     */
    this.draw = null;

    /**
     * The current native OpenLayers draw `layer`
     * @type import("ol/layer").Vector<import("ol/source").Vector>
     */

    this.drawLayer = null;

    /**
     * The array of drawn native OpenLayers features. Normally includes only one feature, until multiple feature drawing is enabled.
     * @type Array<import("ol").Feature>
     */
    this.drawnFeatures = [];

    /**
     * The current native OpenLayers `modify` interaction
     * @type import("ol/interaction").Modify
     */
    this.modify = null;

    /**
     * The current native OpenLayers `modify` interaction
     * @type import("ol/interaction").DragAndDrop
     */
    this.dragAndDrop = null;

    /**
     * Allow adding more than one feature at a time
     */
    this.multipleFeatures = false;

    /**
     * Encoded features in geo-json format
     */
    this.geoJSON = null;

    /**
     * Show list of features
     */
    this.showList = false;

    /**
     * Type of the drawn feature
     * @type {"Polygon" | "Point" | "LineString" | "Circle" | "Box"}
     */
    this.type = "Polygon";

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
   * @onClick Event handler triggered to start drawing on the map.
   */
  handleStartDrawing() {
    startDrawingMethod(this);
  }

  /**
   * @onClick Event handler triggered to discard/stop drawing
   * on the map and delete the drawn shapes.
   */
  handleDiscardDrawing() {
    discardDrawingMethod(this);
  }

  /**
   * @event onModifyEnd triggered when the modification of a shape is completed.
   */
  onModifyEnd() {
    this.emitDrawnFeatures();
  }

  /**
   * Triggers different events when the drawing of a shape is completed.
   */
  emitDrawnFeatures() {
    const drawUpdateEvent = () => {
      /**
       * Fires whenever features are added, modified or discarded, where the event detail
       * is the `drawnFeatures` array
       * @type Array<import("ol").Feature>
       */
      this.dispatchEvent(
        new CustomEvent("drawupdate", { detail: this.drawnFeatures })
      );
    };
    emitDrawnFeaturesMethod(this, drawUpdateEvent);
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * initializes the EOxMap and OlMap instances
   * And stores them in the private properties #eoxMap and #olMap, respectively.
   * It then calls requestUpdate to trigger a re-render.
   */
  firstUpdated() {
    const { EoxMap, OlMap } = initLayerMethod(this, this.multipleFeatures);
    (this.#eoxMap = EoxMap), (this.#olMap = OlMap);
    this.requestUpdate();
  }

  // Render method for UI display
  render() {
    return html`
      <style>
        :host { display: block; }
        ${!this.unstyled && mainStyle}
        ${!this.unstyled && styleEOX}
      </style>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{
          start: () => this.handleStartDrawing(),
          discard: () => this.handleDiscardDrawing(),
        }}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .geoJSON=${JSON.stringify(this.geoJSON || DUMMY_GEO_JSON)}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList && this.drawnFeatures?.length
        ? html`<eox-drawtools-list
            .eoxMap=${this.#eoxMap}
            .olMap=${this.#olMap}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${() => this.requestUpdate()}
          ></eox-drawtools-list>`
        : nothing}
    `;
  }
}

customElements.define("eox-drawtools", EOxDrawTools);
