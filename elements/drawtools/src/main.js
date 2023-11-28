import { LitElement, html, nothing } from "lit";
import "./components/list";
import "./components/controller";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import {
  discardDrawingMethod,
  emitDrawnFeaturesMethod,
  initDrawLayerMethod,
  onDrawEndMethod,
  startDrawingMethod,
} from "./methods";

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

  initDrawLayer = () => initDrawLayerMethod(this, this.#eoxMap, this.#olMap);

  startDrawing = () => startDrawingMethod(this, this.#eoxMap, this.#olMap);

  discardDrawing = () => discardDrawingMethod(this, this.#eoxMap, this.#olMap);

  onDrawEnd = () => onDrawEndMethod(this);

  onModifyEnd = () => emitDrawnFeaturesMethod(this);

  emitDrawnFeatures = () => emitDrawnFeaturesMethod(this);

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <eox-drawtools-controller
        .drawFunc=${{
          start: () => this.startDrawing(),
          discard: () => this.discardDrawing(),
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
