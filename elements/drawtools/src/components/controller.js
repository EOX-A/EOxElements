import { LitElement, html, nothing } from "lit";
import { styleEOX } from "../style.eox";
import { updateButtonStatesMethod } from "../methods/controller";
import initStyle from "../../../../utils/styles/init-style";

/**
 * Controller component for drawing features
 *
 * @element eox-drawtools-controller
 */
export class EOxDrawToolsController extends LitElement {
  // Define properties with default values and types
  static properties = {
    multipleFeatures: { attribute: false, type: Boolean },
    drawnFeatures: { attribute: false, state: true, type: Array },
    currentlyDrawing: { attribute: false, state: true, type: Boolean },
    drawFunc: { attribute: false, type: Object },
    theme: { attribute: false, type: Object },
    noShadow: { type: Boolean },
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
     * The array of drawn native OpenLayers features. Normally includes only one feature,
     * until multiple feature drawing is enabled.
     *
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

    /**
     * Override existing theme
     *
     * @type {Object}
     */
    this.theme = {};

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;
  }

  /**
   * Updates button states based on conditions
   */
  updateButtonStates() {
    const { drawDisabled, discardDisabled } = updateButtonStatesMethod(this);

    this.#drawDisabled = drawDisabled;
    this.#discardDisabled = discardDisabled;
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    this.updateButtonStates();
    const drawLabel = this.currentlyDrawing ? "drawing" : "draw";

    return html`
      <style>
        ${!this.unstyled && initStyle(this.theme)}
        ${!this.unstyled && styleEOX}
      </style>
      <div>
        <slot></slot>

        <!-- Draw Button -->
        <button
          data-cy="drawBtn"
          class="polygon icon"
          ?disabled="${this.#drawDisabled || nothing}"
          @click="${() => this.drawFunc.start()}"
        >
          ${drawLabel}
        </button>

        <!-- Discard Button -->
        <button
          data-cy="discardBtn"
          class="discard icon"
          ?disabled="${this.#discardDisabled || nothing}"
          @click="${() => this.drawFunc.discard()}"
        >
          discard
        </button>
      </div>
    `;
  }
}

customElements.define("eox-drawtools-controller", EOxDrawToolsController);
