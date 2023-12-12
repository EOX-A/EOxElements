import { LitElement, html, nothing } from "lit";
import "./layer";
import "./layerGroup";
import WMSCapabilities from "wms-capabilities";
import {
  detectMapURLType,
  handleAddLayerMethod,
  handleInputChangeMethod,
  isLayerJSONValid,
} from "../helpers";

/**
 * Add layer
 *
 * @element eox-layercontrol-layer-add
 */
export class EOxLayerControlAddLayers extends LitElement {
  static properties = {
    map: { attribute: false, state: true },
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
   * @type {import("wms-capabilities").WMSCapabilitiesJSON}
   */
  wmsCapabilities = null;

  constructor() {
    super();

    /**
     * The native OL map
     * @type {import("ol").Map}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html}
     */
    this.map = null;

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
    this.noShadow = true;
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Handles changes in the input field
   *
   * @param {Event} evt - The input change event.
   */
  #handleURLChange(evt) {
    //@ts-ignore
    this.urlInput = evt.target.value;
    this.requestUpdate();
  }

  #handleSearchURL() {
    if (!this.urlInput) return;
    /**
     * @param {string} originalURL - The input change event.
     */
    async function fetchCapabilities(originalURL) {
      let url = new URL(originalURL);
      let params = url.searchParams;

      // Update or add multiple parameters
      params.set("SERVICE", "WMS");
      params.set("REQUEST", "GetCapabilities"); // Change or add a new parameter

      // Generate the updated URL
      let updatedURL = url.toString();

      const response = await fetch(updatedURL);
      console.log(response);
      const movies = await response.text();

      return new WMSCapabilities(movies).toJSON();
    }

    if (detectMapURLType(this.urlInput) === "XYZ")
      this.#addWMSLayer({ Name: this.urlInput });
    else
      fetchCapabilities(this.urlInput).then((data) => {
        this.wmsCapabilities = data;
        this.requestUpdate();
      });
  }

  /**
   * Handles changes in the input field
   *
   * @param {{"Name": string}} layer - The input change event.
   */
  #addWMSLayer(layer) {
    const { Name: id } = layer;
    const urlType = detectMapURLType(this.urlInput) || "XYZ";

    /**
     * @type {import("@eox/map/src/generate").EoxLayer}
     */
    const layerEOXJSON = {
      type: "Tile",
      properties: {
        id: id,
        // @ts-ignore
        title: id,
      },
      source: {
        type: urlType,
        // @ts-ignore
        url: this.urlInput,
        params: {
          LAYERS: id,
        },
      },
    };

    this.eoxMap.addOrUpdateLayer(layerEOXJSON);

    this.urlInput = null;
    this.jsonInput = null;
    this.wmsCapabilities = null;

    this.requestUpdate();
  }

  /**
   * Handles changes in the input field
   *
   * @param {string} url - The input change event.
   */
  isMapUrlValid(url) {
    // Regular expression pattern to match URLs with localhost, domain, and IP addresses
    const urlRegex =
      /^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/;

    const urlRegexTest = urlRegex.test(this.urlInput);
    const mapUrlType = detectMapURLType(this.urlInput);

    if (!url || !urlRegexTest || !mapUrlType) return false;
    else return true;
  }

  /**
   * Handles the addition of one or multiple layers to the map based on the input.
   */
  #handleAddLayer() {
    handleAddLayerMethod(this);
  }

  /**
   * Handles changes in the input field
   *
   * @param {Event} evt - The input change event.
   */
  #handleInputChange(evt) {
    handleInputChangeMethod(evt, this);
  }

  /**
   * Handles changes in the input field
   *
   * @param {string} tab - The input change event.
   */
  #handleOpenCloseTab(tab) {
    this.open = tab || null;
    this.urlInput = null;
    this.jsonInput = null;
    this.wmsCapabilities = null;

    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <ul class="eox-add-layer-tab ${this.open ? "open" : "close"}">
            <li
              @click=${() => this.#handleOpenCloseTab("url")}
              class="${this.open === "url" && "active"}"
            >
              URL
            </li>
            <li
              @click=${() => this.#handleOpenCloseTab("json")}
              class="${this.open === "json" && "active"}"
            >
              EOx JSON
            </li>
          </ul>
          <button
            class="add-icon icon"
            @click=${() => this.#handleOpenCloseTab(!this.open ? "url" : null)}
          ></button>
        </div>
        <div class="eox-add ${this.open ? "open" : "close"}">
          ${this.open === "url"
            ? html`
              <div class="eox-add-layer-col">
                <input type="text" class="add-url" placeholder="Add URL (WMS/XYZ)" .value="${
                  this.urlInput
                }" @input=${this.#handleURLChange}></input>
                <button class="search-icon" disabled=${
                  this.isMapUrlValid(this.urlInput) ? nothing : true
                } @click=${this.#handleSearchURL}></button>
              </div>
              ${
                this.wmsCapabilities
                  ? html`<ul>
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(
                        (layer) => html`
                          <li>
                            ${
                              //@ts-ignore
                              layer.Name
                            }<button
                              class="add-layer-icon icon"
                              @click=${() =>
                                // @ts-ignore
                                this.#addWMSLayer(layer)}
                            ></button>
                          </li>
                        `
                      )}
                    </ul>`
                  : nothing
              }
              `
            : html`
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid EOX layer json."
                  @input=${this.#handleInputChange}
                  .value=${this.jsonInput}
                ></textarea>
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
      max-width: 200px;
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

customElements.define("eox-layercontrol-layer-add", EOxLayerControlAddLayers);
