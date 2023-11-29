import { LitElement, html, nothing } from "lit";
import "./components/list";
import "./components/controller";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import {
  onDrawEndMethod,
  startDrawingMethod,
  initDrawLayerMethod,
  discardDrawingMethod,
  emitDrawnFeaturesMethod,
} from "./methods/draw";

/**
 * Manage drawn features on a map
 * @element eox-drawtools
 */
export class EOxDrawTools extends LitElement {
  static get properties() {
    return {
      allowModify: { attribute: "allow-modify", type: Boolean },
      for: { type: String },
      currentlyDrawing: { attribute: false, state: true, type: Boolean },
      draw: { attribute: false, state: true },
      drawLayer: { attribute: false, state: true },
      drawnFeatures: { attribute: false, state: true, type: Array },
      modify: { attribute: false, state: true },
      multipleFeatures: { attribute: "multiple-features", type: Boolean },
      showList: { attribute: "show-list", type: Boolean },
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
     * Allow adding more than one feature at a time
     */
    this.multipleFeatures = false;

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
  }

  /**
   * Initializes the drawing layer before starting to draw on the map.
   */
  initDrawLayer = () => {
    const { EoxMap, OlMap } = initDrawLayerMethod(this);
    (this.#eoxMap = EoxMap), (this.#olMap = OlMap);
  };

  /**
   * @onClick Event handler triggered to start drawing on the map.
   */
  handleStartDrawing = () => startDrawingMethod(this);

  /**
   * @onClick Event handler triggered to discard/stop drawing
   * on the map and delete the drawn shapes.
   */
  handleDiscardDrawing = () =>
    discardDrawingMethod(this, this.#eoxMap, this.#olMap);

  /**
   * @event onDrawEnd triggered when the drawing of a shape is completed.
   */
  onDrawEnd = () => onDrawEndMethod(this);

  /**
   * @event onModifyEnd triggered when the modification of a shape is completed.
   */
  onModifyEnd = () => emitDrawnFeaturesMethod(this);

  /**
   * Triggers different events when the drawing of a shape is completed.
   */
  emitDrawnFeatures = () => emitDrawnFeaturesMethod(this);

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <eox-drawtools-controller
        .drawFunc=${{
          start: () => this.handleStartDrawing(),
          discard: () => this.handleDiscardDrawing(),
        }}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
      ></eox-drawtools-controller>
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
