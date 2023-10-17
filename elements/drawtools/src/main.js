import { LitElement, html, nothing } from "lit";
import { style } from "./style";
import { styleEOX } from "./style.eox";

/**
 * Manage drawn features on a map
 * @element eox-drawtools
 */
export class EOxDrawTools extends LitElement {
  static get properties() {
    return {
      for: { type: String },
      currentlyDrawing: { attribute: false, state: true, type: Boolean },
      draw: { attribute: false, state: true },
      drawLayer: { attribute: false, state: true },
      drawnFeatures: { attribute: false, state: true, type: Array },
      layer: { type: String },
      modify: { attribute: false, state: true },
      multipleFeatures: { attribute: "multiple-features", type: Boolean },
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
     * The layer id of the draw layer
     * @default draw
     */
    this.layer = "draw";

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
     * Render the element without additional styles
     */
    this.unstyled = false;
  }

  startDrawing() {
    this.#eoxMap.addDraw(this.layer, {
      id: "drawInteraction",
      type: "Polygon",
    });
    this.draw = /** @type {import("ol/interaction").Draw} */ (
      /** @type {unknown} */ (this.#eoxMap.interactions["drawInteraction"])
    );
    this.modify = /** @type {import("ol/interaction").Modify} */ (
      /** @type {unknown} */ (
        this.#eoxMap.interactions["drawInteractionmodify"]
      )
    );
    this.draw?.on("drawend", (evt) => this.onDrawEnd(evt));
    this.modify?.on("modifyend", (evt) => this.onModifyEnd(evt));
    this.currentlyDrawing = true;
    this.requestUpdate();
  }

  discardDrawing() {
    this.drawnFeatures = [];
    this.#eoxMap.removeInteraction("drawInteraction");
    this.drawLayer.getSource().clear();
    this.currentlyDrawing = false;
    this.requestUpdate();
  }

  /**
   *
   * @param {import("ol/interaction/Draw").DrawEvent} evt
   */
  onDrawEnd(evt) {
    console.log(evt.target);
    this.emitDrawnFeatures();
    this.#eoxMap.removeInteraction("drawInteraction");
    this.currentlyDrawing = false;
    this.requestUpdate();
  }

  /**
   *
   * @param {import("ol/interaction/Modify").ModifyEvent} evt
   */
  onModifyEnd(evt) {
    console.log(evt);
    this.emitDrawnFeatures();
  }

  emitDrawnFeatures() {
    setTimeout(() => {
      this.drawnFeatures = this.drawLayer.getSource().getFeatures();
      this.requestUpdate();
      const drawEvt = new CustomEvent("drawupdate", {
        detail: this.drawnFeatures,
      });
      this.dispatchEvent(drawEvt);
    }, 0);
  }

  render() {
    const mapQuery = document.querySelector(this.for);

    this.#eoxMap = /** @type {import("@eox/map/main").EOxMap} */ (mapQuery);
    // @ts-ignore
    this.#olMap = /** @type {import("ol").Map} */ this.#eoxMap.map;

    this.drawLayer =
      /** @type {import("ol/layer").Vector<import("ol/source").Vector>} */ (
        this.#olMap
          .getLayers()
          .getArray()
          .find((l) => l.get("id") === this.layer)
      );
    this.requestUpdate();

    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="icon-text polygon"
          disabled="${(!this.multipleFeatures &&
            this.drawnFeatures?.length > 0) ||
          this.currentlyDrawing ||
          nothing}"
          @click="${() => this.startDrawing()}"
        >
          ${this.currentlyDrawing ? "drawing" : "draw"}
        </button>
        <button
          data-cy="discardBtn"
          class="discard"
          disabled="${(!this.drawnFeatures?.length && !this.currentlyDrawing) ||
          nothing}"
          @click="${() => this.discardDrawing()}"
        >
          discard
        </button>
      </div>
    `;
  }
}

customElements.define("eox-drawtools", EOxDrawTools);
