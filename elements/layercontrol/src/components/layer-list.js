import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import { repeat } from "lit/directives/repeat.js";
import { getLayerType, hideLayersBasedOnProperties } from "../helpers";
import "./layer";
import "./layer-group";
import { firstUpdatedMethod } from "../methods/layer-list";
/**
 * EOxLayerControlLayerList: Manages a list of layers within the EOx Layer Control.
 *
 * @element eox-layercontrol-layer-list
 * @extends LitElement
 */
export class EOxLayerControlLayerList extends LitElement {
  // Define static properties for the component
  static properties = {
    idProperty: { attribute: "id-property" },
    layers: { attribute: false },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    showLayerZoomState: { attribute: "show-layer-zoom-state", type: Boolean },
    tools: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    toolsAsList: { type: Boolean },
    globallyExclusiveLayers: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The layer id property
     *
     * @type {String}
     */
    this.idProperty = "id";

    /**
     * The OL layer collection
     *
     * @type {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html}
     */
    this.layers = null;

    /**
     * The native OL map
     *
     * @type {import("ol").Map}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html}
     */
    this.map = null;

    /**
     * Represents an array of tools.
     *
     * @type {Array<string>}
     */
    this.tools = undefined;

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
   * Executes specific logic after the initial render of the component.
   */
  firstUpdated() {
    firstUpdatedMethod(this);
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Renders a list of layers for the EOx Layer Control component. Filters layers based on control properties and renders either
   * layer groups or individual layers accordingly. Utilizes conditional rendering and iterates through available layers.
   */
  render() {
    // Filter and reverse layers based on control properties
    const layers = this.layers
      ? hideLayersBasedOnProperties(this.layers).reverse()
      : [];

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <ul class="list no-space">
        ${when(
          this.layers,
          () => html`
            ${repeat(
              layers,
              (layer) => layer,
              (layer) => html`
                <li
                  data-layer="${layer.get(this.idProperty)}"
                  data-type="${getLayerType(layer, this.map)}"
                  class="square"
                >
                  ${
                    /** Checks if the layer is a group or individual layer and renders accordingly */
                    /** @type {import("ol/layer").Group} */ (layer).getLayers
                      ? html`
                          <eox-layercontrol-layer-group
                            .noShadow=${true}
                            .group=${layer}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this
                              .globallyExclusiveLayers}
                            @changed=${() => this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `
                      : html`
                          <eox-layercontrol-layer
                            .noShadow=${true}
                            .layer=${layer}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .layerType=${getLayerType(layer, this.map)}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this
                              .globallyExclusiveLayers}
                            @changed=${() => this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `
                  }
                </li>
              `,
            )}
          `,
        )}
      </ul>
    `;
  }

  #styleBasic = ``;
  #styleEOX = `
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list li ul.list > li:has(details[open]) eox-layercontrol-tools-items {
      display: block;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `;
}

customElements.define("eox-layercontrol-layer-list", EOxLayerControlLayerList);
