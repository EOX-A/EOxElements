import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import { live } from "lit/directives/live.js";
import "./layerTools";
import { checkbox } from "../../../../utils/styles/checkbox";
import { firstUpdatedMethod, inputClickMethod } from "../methods/layer";

/**
 * A single layer display
 *
 * @element eox-layercontrol-layer
 */
export class EOxLayerControlLayer extends LitElement {
  static properties = {
    layer: { attribute: false },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    showLayerZoomState: { attribute: "show-layer-zoom-state", type: Boolean },
    tools: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  /**
   * @type Boolean
   */
  currLayerVisibilityBasedOnZoom = true;

  constructor() {
    super();

    /**
     * The native OL layer
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;

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
     * Show layer state based on zoom level or not
     */
    this.showLayerZoomState = false;

    /**
     * @type Array<string>
     */
    this.tools = [];

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
    /**
     * Renders the element without a shadow root
     */
    this.noShadow = true;
  }

  /**
   *
   * @param {string} key
   * @returns {any}
   */
  #getLayer(key) {
    return this.layer?.get(key);
  }

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
   * @param {{target: { checked: boolean }}} evt - The input change event triggering the method.
   */
  #handleInputClick(evt) {
    inputClickMethod(evt, this);
  }

  render() {
    const visibility = this.layer.getVisible();
    const visibilityClass = visibility ? "visible" : "";
    const layerZoomStateClass = !this.currLayerVisibilityBasedOnZoom
      ? "zoom-state-invisible"
      : "";
    const disableClass = this.#getLayer("layerControlDisable")
      ? "disabled"
      : "";
    const inputType = this.#getLayer("layerControlExclusive")
      ? "radio"
      : "checkbox";
    const isToolsAvail = this.tools?.length > 0;

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layer,
        () => html`
          <div class="layer ${visibilityClass} ${layerZoomStateClass}">
            <label class="${disableClass}">
              <input
                type=${inputType}
                .checked=${live(visibility)}
                @click=${this.#handleInputClick}
              />
              <span class="title">${this.#getLayer(this.titleProperty)}</span>
              ${when(
                isToolsAvail,
                () => html`<span class="tools-placeholder"></span>`
              )}
            </label>
          </div>
          <eox-layercontrol-layer-tools
            .noShadow=${true}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-layer-tools>
        `
      )}
    `;
  }

  #styleBasic = ``;

  #styleEOX = `
    ${checkbox}
    eox-layercontrol-layer {
      width: 100%;
    }
    .layer.zoom-state-invisible {
      background: #d2e2ee;
      opacity: 0.3;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
    }
    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }
  `;
}

customElements.define("eox-layercontrol-layer", EOxLayerControlLayer);
