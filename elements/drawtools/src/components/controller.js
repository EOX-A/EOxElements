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
    type: { attribute: "type", type: String },
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
     * Type of the drawn feature
     * @type {"Polygon" | "Point" | "LineString" | "Circle" | "Box"}
     */
    this.type = "Polygon";

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

    const shapeIcons = {
      Polygon: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,
      Point: html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,
      Circle: html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,
      LineString: html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,
      Box: html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `,
    };
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
    const editIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
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
            class="transparent square primary-text no-margin small"
            title=${this.unstyled ? (this.select ? "Select" : "Draw") : ""}
            ?disabled=${this.#drawDisabled || nothing}
            @click=${() => this.drawFunc.start()}
          >
            ${this.unstyled
              ? drawLabel
              : html`
                  <i class="small"
                    >${this.select ? pointerIcon : shapeIcons[this.type]}</i
                  >
                  <div class="tooltip bottom">
                    ${this.select ? "Select" : "Draw"}
                  </div>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title=${this.unstyled ? "Discard" : ""}
            ?disabled=${this.#discardDisabled || nothing}
            @click=${() => this.drawFunc.discard()}
          >
            ${this.unstyled
              ? "discard"
              : html`
                  <i class="small">${discardIcon}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${when(
          this.showEditor,
          () => html`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title=${this.unstyled ? "Edit features" : ""}
              @click=${() =>
                this.renderRoot
                  .querySelector("#editor")
                  .classList.toggle("hidden")}
            >
              ${this.unstyled
                ? "import"
                : html`
                    <i class="small">${editIcon}</i>
                    <div class="tooltip bottom">Edit features</div>
                  `}
            </button>
          `,
        )}

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
              title=${this.unstyled ? "Import features" : ""}
              @click=${() =>
                /**@type {HTMLElement}*/ (
                  this.querySelector("#import-file")
                ).click()}
            >
              ${this.unstyled
                ? "import"
                : html`
                    <i class="small">${importIcon}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `,
        )}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${when(
        this.showEditor,
        () => html`
          <div id="editor" class="field textarea border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
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
