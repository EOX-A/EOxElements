import { LitElement, html, nothing } from "lit";
import "./layer";
import "./layerGroup";
import _debounce from "lodash.debounce";
import WMSCapabilities from "wms-capabilities";

function xmlToJson(xml) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  const result = {};

  if (xmlDoc.children.length === 0) {
    result[xmlDoc.nodeName] = xmlDoc.textContent.trim();
    return result;
  }

  const parseNode = (node) => {
    const obj = {};

    // Attributes
    if (node.attributes.length > 0) {
      obj._attributes = {};
      for (let i = 0; i < node.attributes.length; i++) {
        const attribute = node.attributes[i];
        obj._attributes[attribute.nodeName] = attribute.nodeValue;
      }
    }

    // Children
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const childName = child.nodeName;

      if (obj[childName] === undefined) {
        obj[childName] = parseNode(child);
      } else {
        if (!Array.isArray(obj[childName])) {
          const temp = obj[childName];
          obj[childName] = [];
          obj[childName].push(temp);
        }
        obj[childName].push(parseNode(child));
      }
    }

    // Text content
    const textContent = node.textContent.trim();
    if (Object.keys(obj).length === 0 && textContent !== "") {
      return textContent;
    }

    return obj;
  };

  return parseNode(xmlDoc.documentElement);
}

/**
 * Add layer
 *
 * @element eox-layercontrol-layer-add
 */
export class EOxLayerControlLayerAdd extends LitElement {
  static properties = {
    map: { attribute: false, state: true },
    eoxMap: { attribute: false, state: true },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  /**
   * @type string
   */
  url = null;

  /**
   * @type object
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
     * @type import("../../../map/main").EOxMap
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
    this.url = evt.target.value;
    this.requestUpdate();
  }

  #handleSearchURL() {
    if (!this.url) return;
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

    fetchCapabilities(this.url).then((data) => {
      this.wmsCapabilities = data;
      this.requestUpdate();
    });
  }

  #addWMSLayer(layer) {
    const { Name: id } = layer;

    const layerEOXJSON = {
      type: "Tile",
      properties: {
        id: id,
        title: id,
      },
      source: {
        type: "TileWMS",
        url: this.url,
        params: {
          LAYERS: id,
        },
      },
    };

    this.eoxMap.addOrUpdateLayer(layerEOXJSON);
  }

  isUrlValid(url) {
    // Regular expression pattern to match URLs with localhost, domain, and IP addresses
    const regex =
      /^(?:(?:https?|ftp):\/\/)?(?:localhost(:\d+)?|(?:\w+\.)+\w+|(?:(?:\d{1,3}\.){3}\d{1,3}))(?::\d+)?(?:\/\S*)?(?:\?\S*)?$/;

    // Check if the URL matches the pattern
    return !url ? false : regex.test(this.url);
  }

  render() {
    console.log(this.wmsCapabilities);
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <div class="eox-add-col justify-end">
        <button class="add-icon icon"></button>
      </div>
      <div class="eox-add">
        <div class="eox-add-col">
          <input type="text" class="add-url" placeholder="Add URL (WMS/XYZ)" @input=${
            this.#handleURLChange
          }></input>
          <button class="search-icon" disabled=${
            this.isUrlValid(this.url) ? nothing : true
          } @click=${this.#handleSearchURL}></button>
        </div>
        ${
          this.wmsCapabilities
            ? html`<ul>
                ${this.wmsCapabilities.Capability.Layer.Layer.map(
                  (layer) => html`
                    <li>
                      ${layer.Name}<button
                        class="add-layer-icon icon"
                        @click=${() => this.#addWMSLayer(layer)}
                      ></button>
                    </li>
                  `
                )}
              </ul>`
            : nothing
        }
      </div>
    `;
  }

  #styleBasic = ``;

  #styleEOX = `
    .eox-add {
      background: #00417011;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-col {
      display: flex;
    }
    .eox-add-col.justify-end {
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
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
      color: white;
    }
    .search-icon::after {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
    }
    .search-icon {
      padding: 4px;
      height: 24px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    input.add-url {
      box-sizing: border-box !important;
      width: 100%;
      height: 24px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
  `;
}

customElements.define("eox-layercontrol-layer-add", EOxLayerControlLayerAdd);
