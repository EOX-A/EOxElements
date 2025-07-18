import { LitElement, html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import { live } from "lit/directives/live.js";
import "./layer-tools";
import { firstUpdatedMethod, inputClickMethod } from "../methods/layer";
import {
  getToolsIcon,
  _parseActions,
  _parseTools,
  removeButton,
  sortButton,
} from "../helpers/layer-tools";

/**
 * `EOxLayerControlLayer` represents a custom web component managing individual layers within the EOxLayerControl system.
 * This component encapsulates functionalities for handling layers, their properties, and associated tools within the OpenLayers map context.
 *
 * @element eox-layercontrol-layer
 * @extends LitElement
 */
export class EOxLayerControlLayer extends LitElement {
  // Define static properties for the component
  static properties = {
    layer: { attribute: false },
    layerType: { attribute: false },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    showLayerZoomState: { attribute: "show-layer-zoom-state", type: Boolean },
    tools: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    toolsAsList: { type: Boolean },
    globallyExclusiveLayers: { type: Boolean },
  };

  /**
   * Represents the current layer visibility based on zoom level.
   *
   * @type {Boolean}
   */
  currLayerVisibilityBasedOnZoom = true;

  constructor() {
    super();

    /**
     * The native OL layer
     *
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;

    /**
     * The type of the layer, which can be a string representing the layer type.
     *
     * @type {string|undefined} - The inferred layer type: "group", "draw", "vector", "raster", or undefined if not determinable.
     */
    this.layerType = undefined;

    /**
     * The native OL map
     *
     * @type {import("ol").Map}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html}
     */
    this.map = null;

    /**
     * The layer title property
     *
     * @type {String}
     */
    this.titleProperty = "title";

    /**
     * Show layer state based on zoom level or not
     *
     * @type {Boolean}
     */
    this.showLayerZoomState = false;

    /**
     * Represents an array of tools.
     *
     * @type {Array<string>}
     */
    this.tools = [];

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;

    /**
     * If enabled, the tools section will be rendered as list.
     *
     * @type {Boolean}
     */
    this.toolsAsList = false;

    /**
     * If enabled, exclusive layers (marked with the property `layerControlExclusive`) will be globally exclusive (default: exclusive within their layer group).
     *
     * @type {Boolean}
     */
    this.globallyExclusiveLayers = false;
  }

  /**
   * Private method to get layer property by key if available.
   *
   * @param {string} key - The key for the layer property.
   * @returns {any} - The value of the layer property if exists, otherwise undefined.
   */
  #getLayer(key) {
    return this.layer?.get(key);
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Check and update layer zoom visibility at beginning
   * and register "change:resolution" ones at the beginning if `showLayerZoomState` is present
   */
  firstUpdated() {
    firstUpdatedMethod(this);
  }

  /**
   * Handles the click event on the input element triggering the method.
   *
   * @param {{target: { checked: boolean }}} evt - The input change event.
   */
  #handleInputClick(evt) {
    inputClickMethod(evt, this);
  }

  /**
   * Renders layer controls and tools with conditional display based on certain properties.
   * Conditionally renders layer visibility controls, title, and tools for the layer based on availability and settings.
   * Styles are applied conditionally based on the 'unstyled' property.
   */
  render() {
    // Retrieve the visibility of the layer
    const visibility = this.layer.getVisible();

    // Apply CSS classes based on the visibility and zoom state of the layer
    const visibilityClass = visibility ? "visible" : "";
    const layerZoomStateClass = !this.currLayerVisibilityBasedOnZoom
      ? "zoom-state-invisible"
      : "";

    // Determine if the layer is disabled based on a specific control property
    const disableClass = this.#getLayer("layerControlDisable")
      ? "disabled"
      : "";

    // Determine the input type (radio or checkbox) based on a specific control property
    const inputType = this.#getLayer("layerControlExclusive")
      ? "radio"
      : "checkbox";

    // Check if tools are available for the layer
    const isActionAvail = _parseActions(this.tools, this.layer)?.length > 0;

    // Check if tools are available for the layer
    const isToolsAvail = _parseTools(this.tools, this.layer)?.length > 0;

    // Check if eox-layercontrol-layer-tools is available in the DOM elsewhere for external tools,
    // otherwise render inside layercontrol
    const externalTools = document.querySelector(
      "eox-layercontrol-layer-tools",
    );
    if (externalTools) {
      Object.assign(externalTools, {
        layer: this.layer,
        tools: this.tools,
        toolsAsList: this.toolsAsList,
      });
    }

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layer,
        () => html`
          <!-- Render the layer -->
          <nav
            class="layer ${disableClass} ${visibilityClass} ${layerZoomStateClass} responsive tiny-space"
          >
            ${when(!this.unstyled, () => {
              if (this.#getLayer("color")) {
                return html`
                  <i class="small" style="color: ${this.#getLayer("color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;
              }
              switch (this.layerType) {
                case "group":
                  // handled in layer group component
                  return html` <i class="small"> </i> `;
                case "draw":
                  return html`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;
                case "vector":
                  return html`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;
                case "raster":
                  return html`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;
                default:
                  return html` <i class="small grey-text"> </i> `;
              }
            })}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${disableClass}">
              <span class="layertitle truncate"
                >${this.#getLayer(this.titleProperty)}</span
              >
            </div>

            ${when(
              isToolsAvail,
              () => html`
                <button
                  class="transparent square primary-text small action tools ${this
                    .tools.length === 1
                    ? this.tools[0]
                    : "dots"}"
                  @click=${() => {
                    const toolsDetails =
                      this.renderRoot
                        .querySelector("eox-layercontrol-layer-tools")
                        ?.shadowRoot?.querySelector("details") ||
                      this.renderRoot
                        .querySelector("eox-layercontrol-layer-tools")
                        ?.querySelector("details");
                    // Toggle tools details open/close
                    toolsDetails.open = !toolsDetails.open;
                  }}
                >
                  <i class="small">
                    ${getToolsIcon()[
                      this.tools.length > 1 ? "dots" : this.tools[0]
                    ]}
                  </i>
                  <!--<div class="tooltip top" style="pointer-events: none">Tools</div>-->
                </button>
              `,
            )}
            ${when(!isToolsAvail && isActionAvail, () =>
              this.tools[0] === "remove"
                ? removeButton(this, getToolsIcon()[this.tools[0]])
                : sortButton(this, getToolsIcon()[this.tools[0]], false),
            )}

            <!-- Input element for layer visibility -->
            <label
              class="${disableClass} ${inputType} icon square primary-text action visibility small"
            >
              <input
                type=${inputType}
                .checked=${live(visibility)}
                @click=${this.#handleInputClick}
                disabled=${disableClass || nothing}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<div class="tooltip top" style="pointer-events: none">${visibility
                ? "Hide"
                : "Show"}</div>-->
            </label>
          </nav>
        `,
      )}

      <!-- Render layer tools -->
      ${when(
        isToolsAvail && !externalTools,
        () => html`
          <eox-layercontrol-layer-tools
            .noShadow=${false}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `,
      )}
    `;
  }

  #styleBasic = ``;
  #styleEOX = `
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools > details[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;  
      transform: translateX(.3rem);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `;
}

customElements.define("eox-layercontrol-layer", EOxLayerControlLayer);
