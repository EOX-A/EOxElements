import { LitElement, html, nothing } from "lit";
import "./layer";
import "./layerGroup";
import {
  handleAddLayerMethod,
  handleJsonInputChangeMethod,
  handleOpenCloseTabMethod,
  handleUrlInputChangeMethod,
  handleUrlLayerMethod,
  handleWMSSearchURLMethod,
  isLayerJSONValid,
  isMapUrlValid,
} from "../helpers";

/**
 * EOxLayerControlAddLayers is a class that extends LitElement and provides functionalities
 * for managing layers on an OpenLayers map within an EOxMap context.
 * It allows users to add WMS or XYZ layers to the map using URLs or JSON data.
 * The class provides input fields to handle URLs and JSON, along with methods
 * to validate and process the input for adding layers dynamically to the map.
 *
 * @element eox-layercontrol-add-layers
 * @extends LitElement
 */
export class EOxLayerControlAddLayers extends LitElement {
  static properties = {
    eoxMap: { attribute: false, state: true },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  /**
   * @type string
   */
  urlInput = null;

  /**
   * @type string
   */
  open = null;

  /**
   * @type string
   */
  jsonInput = null;

  /**
   * @type boolean
   */
  searchLoad = false;

  /**
   * @type {import("wms-capabilities").WMSCapabilitiesJSON}
   */
  wmsCapabilities = null;

  constructor() {
    super();

    /**
     * @type import("@eox/map/main").EOxMap
     */
    this.eoxMap = null;

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     */
    this.noShadow = false;
  }

  /**
   * Overrides the default behavior of creating the render root element.
   * If 'noShadow' is set to true, returns 'this'; otherwise, falls back to the default behavior
   * of creating a shadow root using 'super.createRenderRoot()'.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Handles changes in the input field by invoking the 'handleUrlInputChangeMethod'.
   * This method is triggered upon an @input change event.
   *
   * @param {Event} evt - The input change event triggering the method.
   */
  #handleURLChange(evt) {
    handleUrlInputChangeMethod(evt, this);
  }

  /**
   * Asynchronously handles WMS URL search, invokes further processing if data is available.
   */
  async #handleWMSSearchURL() {
    const data = await handleWMSSearchURLMethod(this);
    if (data) this.#handleUrlLayerMethod(data);
  }

  /**
   * Handles input field changes by triggering layer processing and adding layers.
   *
   * @param {{"Name": string}} layer - The layer information triggering the method.
   */
  #handleUrlLayerMethod(layer) {
    handleUrlLayerMethod(layer, this);
    handleAddLayerMethod(this);
  }

  /**
   * Initiates the addition of layers, triggering the handleAddLayerMethod.
   */
  #handleAddLayer() {
    handleAddLayerMethod(this);
  }

  /**
   * Handles input field changes by invoking the 'handleJsonInputChangeMethod'.
   *
   * @param {Event} evt - The input change event triggering the method.
   */
  #handleInputChange(evt) {
    handleJsonInputChangeMethod(evt, this);
  }

  /**
   * Handles tab changes by invoking the 'handleOpenCloseTabMethod'.
   *
   * @param {string} tab - The tab identifier triggering the method.
   */
  #handleOpenCloseTab(tab) {
    handleOpenCloseTabMethod(tab, this);
  }

  /**
   * Renders the EOx Layer Control component with tabbed interface for URL and JSON.
   * Handles input fields, search, and addition of layers.
   */
  render() {
    // Determine classes and tab states based on 'open' property
    const openCloseClassName = this.open ? "open" : "close";
    const isUrlTabOpen = this.open === "url";
    const isJsonTabOpen = this.open === "json";

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${openCloseClassName}">
            <li
              @click=${() => this.#handleOpenCloseTab("url")}
              class="${isUrlTabOpen ? "active" : ""}"
            >
              URL
            </li>
            <li
              @click=${() => this.#handleOpenCloseTab("json")}
              class="${isJsonTabOpen ? "active" : ""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${() => this.#handleOpenCloseTab(!this.open ? "url" : null)}
          ></button>
        </div>
        <div class="eox-add ${openCloseClassName}">
          ${isUrlTabOpen
            ? html`

            <!-- Input field for URL -->
            <div class="eox-add-layer-col">
              <input type="text" class="add-url" placeholder="Add URL (WMS/XYZ)" .value="${
                this.urlInput
              }" @input=${this.#handleURLChange}></input>

              <!-- Search button for URL -->
              <button class="search-icon" disabled=${
                !isMapUrlValid(this.urlInput) || this.searchLoad
                  ? true
                  : nothing
              } @click=${this.#handleWMSSearchURL}></button>
            </div>

            <!-- Display layers for WMS capabilities -->
            ${
              this.wmsCapabilities
                ? html`<ul class="search-lists">
                    ${this.wmsCapabilities.Capability.Layer.Layer.map(
                      (layer) => html`
                        <li class="search-list">
                          ${
                            //@ts-ignore
                            layer.Name
                          }
                          <!-- Button to add layer -->
                          <button
                            class="add-layer-icon icon"
                            @click=${() => this.#handleUrlLayerMethod(layer)}
                          ></button>
                        </li>
                      `
                    )}
                  </ul>`
                : nothing
            }
            `
            : html`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${this.#handleInputChange}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${isLayerJSONValid(this.jsonInput) ? nothing : true}
                  @click=${this.#handleAddLayer}
                ></button>
              `}
        </div>
      </div>
    `;
  }

  #styleBasic = ``;
  #styleEOX = `
    .eox-add {
      background: #f0f2f5;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-layer-col, .eox-add-layer-tab {
      display: flex;
      width: 100%;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .eox-add-layer-main .open {
      position: relative;
    }
    button.icon.add-icon {
      flex-grow: 1;
    }
    .eox-add-layer-tab li {
      border: 0 !important;
      font-size: smaller;
      padding: 0.2rem 0.7rem;
      background: #f0f2f5;
      border-radius: 4px 4px 0px 0px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
    }
    .eox-add-layer-tab li.active {
      background: #204270;
      color: white;
      font-weight: 700;
    }
    .relative {
      position: relative
    }
    .eox-add-layer-col.justify-end {
      justify-content: end;
    }
    .eox-add ul {
      max-height: 120px;
      overflow: scroll;
    }
    .eox-add ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.2rem;
    }
    button.icon {
      justify-content: end;
      transition: opacity .2s;
      opacity: .7;
    }
    button.icon:hover {
      opacity: 1;
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    button.icon.add-icon::before {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .json-add-layer {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='white' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
    }
    .search-icon::after, .json-add-layer::before {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
      color: white;
    }
    .search-icon, .json-add-layer {
      padding: 4px 6px;
      height: 28px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    .json-add-layer {
      position: absolute;
      bottom: 16px;
      right: 14px;
      border-radius: 4px;
      height: 24px;
      padding: 4px;
    }
    input.add-url, textarea.add-layer-input {
      box-sizing: border-box !important;
      width: 100%;
      height: 28px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
    textarea.add-layer-input {
      height: 90px;
      resize: none;
      border-radius: 4px;
    }
    .divider {
      margin: 1rem 0px;
      height: 1px;
      border-top: 1.5px solid #00417059;
      text-align: center;
      position: relative;
    }
    .divider span {
      position: relative;
      top: -.6em;
      padding: 0px 0.5rem;
      background: #f0f2f5;
      color: #00417059;
      font-weight: bold;
      display: inline-block;
    }
  `;
}

customElements.define("eox-layercontrol-add-layers", EOxLayerControlAddLayers);
