import { LitElement, html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import { hideLayersBasedOnProperties } from "../helpers";
import "./layer";
import "./layer-list";

/**
 * Custom element representing a group of layers within a layer control.
 * Handles rendering a layer control group with expandable details containing layers.
 *
 * @element eox-layercontrol-layer-group
 * @extends LitElement
 */
export class EOxLayerControlLayerGroup extends LitElement {
  // Define static properties for the component
  static properties = {
    group: { attribute: false },
    idProperty: { attribute: "id-property" },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    showLayerZoomState: { attribute: "show-layer-zoom-state", type: Boolean },
    tools: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    toolsAsList: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * The native OL layer group
     *
     * @type {import("ol/layer").Group}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Group-LayerGroup.html}
     */
    this.group = null;

    /**
     * The layer id property
     *
     * @type {String}
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
   * Renders a layer control group with expandable details containing layers.
   */
  render() {
    // Check if the group should be open based on a specific control property
    const groupOpen = Boolean(this.group?.get("layerControlExpand"));
    const numberOfChildLayers = hideLayersBasedOnProperties(
      this.group.getLayers()
    )?.length;

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.group,
        () => html`
          <!-- Render the details element with the layer control -->
          <details
            open=${groupOpen || nothing}
            data-children-length=${numberOfChildLayers}
          >
            <summary>
              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${true}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                @changed=${() => this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${true}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
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
    details[data-children-length="0"] summary::before {
      display: none;
    }
  `;
}

customElements.define(
  "eox-layercontrol-layer-group",
  EOxLayerControlLayerGroup
);
