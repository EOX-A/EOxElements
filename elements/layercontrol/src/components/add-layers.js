import { LitElement, html, nothing } from "lit";
import "./layer";
import "./layer-group";
import { isMapUrlValid, isLayerJSONValid } from "../helpers";
import {
  addLayerMethod,
  urlLayerMethod,
  openCloseTabMethod,
  wmsSearchURLMethod,
  urlInputChangeMethod,
  jsonInputChangeMethod,
} from "../methods/add-layer";

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
  // Define static properties for the component
  static properties = {
    eoxMap: { attribute: false, state: true },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  /**
   * State for URL Input for WMS/XYZ URLs
   *
   * @type {String}
   */
  urlInput = null;

  /**
   * State for JSON Textarea - For EOxMap JSON
   *
   * @type {String}
   */
  jsonInput = null;

  /**
   * State for add layer - consist of url/json
   *
   * @type {"url" | "json" | null}
   */
  open = null;

  /**
   * Loader state when search is triggered
   *
   * @type {Boolean}
   */
  searchLoad = false;

  /**
   * State for `WMS Capabilities JSON`
   *
   * @type {import("wms-capabilities").WMSCapabilitiesJSON}
   */
  wmsCapabilities = null;

  constructor() {
    super();

    /**
     * Instance of `eox-map` which is a wrapper for the OL
     *
     * @type {import("@eox/map").EOxMap}
     */
    this.eoxMap = null;

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
   * Handles changes in the input field by invoking the 'urlInputChangeMethod'.
   * This method is triggered upon an @input change event.
   *
   * @param {Event} evt - The input change event triggering the method.
   */
  #handleURLChange(evt) {
    urlInputChangeMethod(evt, this);
  }

  /**
   * Asynchronously handles WMS URL search, invokes further processing if data is available.
   */
  async #handleWMSSearchURL() {
    const data = await wmsSearchURLMethod(this);
    if (data) this.#handleUrlLayerMethod(data);
  }

  /**
   * Handles input field changes by triggering layer processing and adding layers.
   *
   * @param {{"Name": string}} layer - The layer information triggering the method.
   */
  #handleUrlLayerMethod(layer) {
    urlLayerMethod(layer, this);
    addLayerMethod(this);
  }

  /**
   * Initiates the addition of layers, triggering the handleAddLayerMethod.
   */
  #handleAddLayer() {
    addLayerMethod(this);
  }

  /**
   * Handles input field changes by invoking the 'handleJsonInputChangeMethod'.
   *
   * @param {{target: { value: string }}} evt - The input change event triggering the method.
   */
  #handleInputChange(evt) {
    jsonInputChangeMethod(evt, this);
  }

  /**
   * Handles tab changes by invoking the 'openCloseTabMethod'.
   *
   * @param {"url" | "json" | null} tab - The tab identifier triggering the method.
   */
  #handleOpenCloseTab(tab) {
    openCloseTabMethod(tab, this);
  }

  /**
   * Renders the EOx Layer Control component with tabbed interface for URL and JSON.
   * Handles input fields, search, and addition of layers.
   */
  render() {
    const icons = {
      add: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,
      plus: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,
      search: html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`,
    };

    // Determine classes and tab states based on 'open' property
    const openCloseClassName = this.open ? "open" : "close";
    const isUrlTabOpen = this.open === "url";
    const isJsonTabOpen = this.open === "json";
    const disableSearchBtn =
      !isMapUrlValid(this.urlInput) || this.searchLoad ? true : nothing;

    return html`
      <style>
        ${this.#styleBasic}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${openCloseClassName}"
          >
            <a
              @click=${() => this.#handleOpenCloseTab("url")}
              class="${isUrlTabOpen ? "active" : ""}"
            >
              URL
            </a>
            <a
              @click=${() => this.#handleOpenCloseTab("json")}
              class="${isJsonTabOpen ? "active" : ""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square small"
            @click=${() => this.#handleOpenCloseTab(!this.open ? "url" : null)}
          >
            ${this.unstyled
              ? "Add Layer"
              : html`<i class="small primary-text">${icons.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${openCloseClassName}" style="padding: 15px 0">
          ${isUrlTabOpen
            ? html`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${this.#handleURLChange}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${disableSearchBtn}
                    @click=${this.#handleWMSSearchURL}
                  >
                    ${this.unstyled
                      ? "Search"
                      : html`<i class="small">${icons.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities
                  ? html`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(
                        (layer) => {
                          // @ts-expect-error TODO
                          const name = layer.Name;

                          return html`
                            <li class="search-list">
                              ${name}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${() =>
                                  // @ts-expect-error TODO
                                  this.#handleUrlLayerMethod(layer)}
                              >
                                ${this.unstyled ? "+" : ""}
                              </button>
                            </li>
                          `;
                        },
                      )}
                    </ul>`
                  : nothing}
              `
            : html`
                <!-- Textarea for JSON input -->
                <div class="field textarea border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${this.#handleInputChange}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0;"
                  disabled=${isLayerJSONValid(this.jsonInput) ? nothing : true}
                  @click=${this.#handleAddLayer}
                >
                  ${this.unstyled
                    ? "Add JSON"
                    : html`<i class="small">${icons.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `;
  }

  #styleBasic = `
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `;
}

customElements.define("eox-layercontrol-add-layers", EOxLayerControlAddLayers);
