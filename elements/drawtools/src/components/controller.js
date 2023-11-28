import { LitElement, html, nothing } from "lit";
import { styleEOX } from "../style.eox";

/**
 * Controllers for draw feature
 *
 * @element eox-drawtools-controller
 */
export class EOxDrawToolsController extends LitElement {
  static properties = {
    multipleFeatures: { attribute: false, type: Boolean },
    drawnFeatures: { attribute: false, state: true, type: Array },
    currentlyDrawing: { attribute: false, state: true, type: Boolean },
    drawFunc: { attribute: false, type: Object },
    unstyled: { type: Boolean },
  };

  /**
   * @type boolean | import("lit").nothing
   */
  #drawDisabled = true;

  /**
   * @type boolean | import("lit").nothing
   */
  #discardDisabled = true;

  constructor() {
    super();

    /**
     * Allow adding more than one feature at a time
     */
    this.multipleFeatures = false;

    /**
     * The array of drawn native OpenLayers features. Normally includes only one feature, until multiple feature drawing is enabled.
     * @type Array<import("ol").Feature>
     */
    this.drawnFeatures = [];

    /**
     * Whether the user is currently in the process of drawing or not
     */
    this.currentlyDrawing = false;

    /**
     * List of draw function object like start, discard etc.
     */
    this.drawFunc = null;

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
  }

  render() {
    this.#drawDisabled =
      (!this.multipleFeatures && this.drawnFeatures?.length > 0) ||
      this.currentlyDrawing ||
      nothing;

    this.#discardDisabled =
      (!this.drawnFeatures?.length && !this.currentlyDrawing) || nothing;

    const drawLabel = this.currentlyDrawing ? "drawing" : "draw";

    return html`
      <style>
        ${!this.unstyled && styleEOX}
      </style>
      <div>
        <slot></slot>
        <button
          data-cy="drawBtn"
          class="polygon icon"
          disabled="${this.#drawDisabled}"
          @click="${() => this.drawFunc.start()}"
        >
          ${drawLabel}
        </button>
        <button
          data-cy="discardBtn"
          class="discard icon"
          disabled="${this.#discardDisabled}"
          @click="${() => this.drawFunc.discard()}"
        >
          discard
        </button>
      </div>
    `;
  }
}

customElements.define("eox-drawtools-controller", EOxDrawToolsController);
