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
      /** @type import("ol").Collection<import("ol/layer").Layer> */ (
        this.group.getLayers()
      ),
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
            class="max-width"
            open=${groupOpen || nothing}
            data-children-length=${numberOfChildLayers}
          >
            <summary class="square">
              <!-- Open/close arrow -->
              <div class="arrow-container">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
              </div>

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${true}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
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
        `,
      )}
    `;
  }

  #styleBasic = ``;
  #styleEOX = `
    details > summary {
      min-block-size: 0rem;
      padding: 0 var(--padding);
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details > summary:hover {
      background-color: var(--surface-container);
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
    }
  `;
}

customElements.define(
  "eox-layercontrol-layer-group",
  EOxLayerControlLayerGroup,
);
