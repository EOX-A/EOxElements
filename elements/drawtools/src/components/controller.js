import { LitElement, html, nothing } from "lit";
import { updateButtonStatesMethod } from "../methods/controller";
import { copyTextToClipboard } from "../helpers/index.js";
import { when } from "lit/directives/when.js";

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
    select: { type: Boolean },
    importFeatures: { attribute: "import-features", type: Boolean },
    showEditor: { attribute: "show-editor", type: Boolean },
    geoJSON: { attribute: "geo-json", type: String },
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
     * Allow import features using drag-drop and upload button
     * @type Boolean
     */
    this.importFeatures = false;

    /**
     * Show geo-json editor for draw tool
     * @type Boolean
     */
    this.showEditor = false;

    /**
     * Whether the user is currently in the process of drawing or not
     */
    this.currentlyDrawing = false;

    /**
     * List of draw function object like start, discard etc.
     */
    this.drawFunc = null;

    /**
     * Parsed and Stringify Geo JSON
     * @type String
     */
    this.geoJSON = "";

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     *
     */
    this.select = false;
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
   * Overrides createRenderRoot to handle shadow DOM
   */
  createRenderRoot() {
    return this;
  }

  render() {
    this.updateButtonStates();
    const drawLabel = this.currentlyDrawing ? "drawing" : "draw";

    const polygonIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>shape-polygon-plus</title>
      <path
        d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
      />
    </svg>`;
    const pointerIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`;
    const discardIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;
    const importIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`;
    const copyIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;

    return html`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent circle primary-text no-margin small"
            title="${this.unstyled ? (this.select ? "Select" : "Draw") : ""}"
            ?disabled="${this.#drawDisabled || nothing}"
            @click="${() => this.drawFunc.start()}"
          >
            ${this.unstyled
              ? drawLabel
              : html`
                  <i class="small"
                    >${this.select ? pointerIcon : polygonIcon}</i
                  >
                  <div class="tooltip right">
                    ${this.select ? "Select" : "Draw"}
                  </div>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent circle error-text no-margin small"
            title="${this.unstyled ? "Discard" : ""}"
            ?disabled="${this.#discardDisabled || nothing}"
            @click="${() => this.drawFunc.discard()}"
          >
            ${this.unstyled
              ? "discard"
              : html`
                  <i class="small">${discardIcon}</i>
                  <div class="tooltip right">Discard</div>
                `}
          </button>
        </div>

        <!-- Import Button -->
        ${when(
          this.importFeatures,
          () => html`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled ? "Import features" : ""}"
              @click=${() =>
                /**@type {HTMLElement}*/ (
                  this.querySelector("#import-file")
                ).click()}
            >
              ${this.unstyled
                ? "import"
                : html`
                    <i class="small">${importIcon}</i>
                    <div class="tooltip left">Import features</div>
                  `}
            </button>
          `,
        )}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${when(
        this.showEditor,
        () => html`
          <div class="field textarea border extra">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin"
              @click=${() => copyTextToClipboard(this.geoJSON)}
            >
              ${this.unstyled
                ? "copy"
                : html`
                    <i class="tiny">${copyIcon}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `,
      )}
    `;
  }
}

customElements.define("eox-drawtools-controller", EOxDrawToolsController);
