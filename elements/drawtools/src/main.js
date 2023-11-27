import { LitElement, html, nothing } from "lit";
import "./components/list";
import { style } from "./style";
import { styleEOX } from "./style.eox";

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

  initDrawLayer() {
    const mapQuery = document.querySelector(this.for);

    this.#eoxMap = /** @type {import("@eox/map/main").EOxMap} */ (mapQuery);
    // @ts-ignore
    this.#olMap = /** @type {import("ol").Map} */ this.#eoxMap.map;

    // @ts-ignore
    this.drawLayer = this.#eoxMap.addOrUpdateLayer({
      type: "Vector",
      properties: {
        id: "drawLayer",
        layerControlHide: true,
      },
      source: {
        type: "Vector",
      },
      // check if the drawInteraction has already been added before adding again
      // TEMP/TODO: this should probably be done by the map in the addOrUpdateLayer method
      ...(this.#eoxMap.interactions["drawInteraction"]
        ? {}
        : {
            interactions: [
              {
                type: "draw",
                options: {
                  active: false,
                  id: "drawInteraction",
                  type: this.type,
                  modify: this.allowModify,
                  stopClick: true,
                },
              },
              {
                type: "select",
                options: {
                  id: "selectHover",
                  condition: "pointermove",
                  style: {
                    "fill-color": "rgba(51, 153, 204,0.5)",
                    "stroke-color": "#3399CC",
                    "stroke-width": 2.5,
                  },
                },
              },
              {
                type: "select",
                options: {
                  id: "selectClick",
                  condition: "click",
                  panIn: true,
                  style: {
                    "fill-color": "rgba(51, 153, 204,0.5)",
                    "stroke-color": "#3399CC",
                    "stroke-width": 2.5,
                  },
                },
              },
            ],
          }),
    });

    this.draw = /** @type {import("ol/interaction").Draw} */ (
      /** @type {unknown} */ (this.#eoxMap.interactions["drawInteraction"])
    );
    this.modify = /** @type {import("ol/interaction").Modify} */ (
      /** @type {unknown} */ (
        this.#eoxMap.interactions["drawInteractionmodify"]
      )
    );
    this.draw?.on("drawend", () => this.onDrawEnd());
    this.modify?.on("modifyend", () => this.onModifyEnd());
  }

  startDrawing() {
    this.initDrawLayer();
    this.draw.setActive(true);
    this.currentlyDrawing = true;
    this.requestUpdate();
  }

  discardDrawing() {
    this.drawnFeatures = [];
    this.draw.setActive(false);
    this.drawLayer.getSource().clear();
    this.#eoxMap.removeInteraction("drawInteraction");
    this.#olMap.removeLayer(this.drawLayer);
    this.emitDrawnFeatures();
    this.currentlyDrawing = false;
    this.requestUpdate();
  }

  onDrawEnd() {
    this.emitDrawnFeatures();
    this.draw.setActive(false);
    this.currentlyDrawing = false;
    this.requestUpdate();
  }

  onModifyEnd() {
    this.emitDrawnFeatures();
  }

  emitDrawnFeatures() {
    setTimeout(() => {
      this.drawnFeatures = this.drawLayer.getSource().getFeatures();
      this.requestUpdate();
      /**
       * Fires whenever features are added, modified or discarded, where the event detail
       * is the `drawnFeatures` array
       * @type Array<import("ol").Feature>
       */
      this.dispatchEvent(
        new CustomEvent("drawupdate", {
          detail: this.drawnFeatures,
        })
      );
    }, 0);
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="polygon icon"
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
          class="discard icon"
          disabled="${(!this.drawnFeatures?.length && !this.currentlyDrawing) ||
          nothing}"
          @click="${() => this.discardDrawing()}"
        >
          discard
        </button>
      </div>
      ${this.showList && this.drawnFeatures?.length
        ? html`<eox-drawtools-list
            .eoxMap=${this.#eoxMap}
            .olMap=${this.#olMap}
            .draw=${this.draw}
            .layer=${this.layer}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${() => this.requestUpdate()}
          >
          </eox-drawtools-list>`
        : nothing}
    `;
  }
}

customElements.define("eox-drawtools", EOxDrawTools);
