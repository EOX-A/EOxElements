import { LitElement, html } from "lit";
import "./layer";
import "./layerGroup";
import _debounce from "lodash.debounce";
/**
 * Add layer
 *
 * @element eox-layercontrol-layer-add
 */
export class EOxLayerControlLayerAdd extends LitElement {
  static properties = {
    map: { attribute: false, state: true },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The layer id property
     */
    this.idProperty = "id";

    /**
     * The native OL map
     * @type {import("ol").Map}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html}
     */
    this.map = null;

    /**
     * The layer title property
     */
    this.titleProperty = "title";

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

  render() {
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
          <input type="text" class="add-url" placeholder="Add URL (WMS/XYZ)"></input>
          <button class="search-icon">
            
          </button>
        </div>
        <ul>
          <li>Test 123 <button class="add-layer-icon icon"></button></li>
          <li>Test 123 <button class="add-layer-icon icon"></button></li>
        </ul>
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
    button.icon, button.icon::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      display:flex
      margin-right: 6px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
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
