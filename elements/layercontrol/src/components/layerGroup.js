import { LitElement, html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import "./layer";
import "./layerList";

/**
 * Display of a layer group
 *
 * @element eox-layercontrol-layer-group
 */
export class EOxLayerControlLayerGroup extends LitElement {
  static properties = {
    group: { attribute: false },
    idProperty: { attribute: "id-property" },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    showLayerZoomState: { attribute: "show-layer-zoom-state", type: Boolean },
    tools: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The native OL layer group
     * @type {import("ol/layer").Group}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Group-LayerGroup.html}
     */
    this.group = null;

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

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.group,
        () => html`
          <details open=${this.group.get("layerControlExpand") || nothing}>
            <summary>
              <eox-layercontrol-layer
                .noShadow=${true}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                @changed=${() => this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>
            <eox-layercontrol-layer-list
              .noShadow=${true}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              @changed=${() => this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `
      )}
    `;
  }

  #styleBasic = ``;

  #styleEOX = `
    details summary {
      cursor: pointer;
      display: flex;
    }
    details summary { list-style-type: none; } /* Firefox */
    details summary::-webkit-details-marker { display: none; } /* Chrome */
    details summary::marker { display: none; }
    details summary::before {
      display: block;
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
      font-size: 13px;
      width: 24px;
      height: 24px;
      margin: 4px 0;
      transform-origin: center;
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
  `;
}

customElements.define(
  "eox-layercontrol-layer-group",
  EOxLayerControlLayerGroup
);
