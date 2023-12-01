import { LitElement, html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import "./components/layerList";
import "./components/optionalList";
import "./components/addLayers";
import { filterLayers } from "./helpers";

/**
 * Display layers and groups of a connected OpenLayers map
 *
 * ## Layer properties
 * In order to be displayed correctly, the OpenLayers map layers need some custom properties (using e.g. `layer.set(property, value)`).
 *
 * #### `id?: string`
 * The layer id. Not required but recommended. Can also be any other layer property (defined via the `idProperty` property or `id-property`attribute - see API).
 *
 * #### `title?: string`
 * The title of the layer displayed in the layer control. Not required, but recommended in order to display human-readable layer titles. Can be any other layer property (defined via the `titleProperty` property or `title-property`attribute - see API).
 *
 * #### `layerControlHide?: Boolean`
 * Completely hide a layer from the layer control.
 *
 * #### `layerControlOptional?: Boolean`
 * Initially hide a layer from the layer control, but make it available as an optional layer. If the layer is selected and added, it will be set to visible and pushed to the top of the layer list or (if originally configured within a layer group) to the top of the layer group.
 *
 * #### `layerControlExclusive?: Boolean`
 * Make layers mutually exclusive. If two or more layers (on the same level, i.e. at root or inside a layer group) have this property, then only one of them can be visualized at a time.
 *
 * #### `layerControlExpand?: Boolean`
 * Pre-expand a layer dropdown so that it is always open when the component initializes.
 *
 * #### `layerControlToolsExpand?: Boolean`
 * Pre-expand the layer tools so they are visible when the component initializes.
 *
 * #### `layerConfig?: Object`
 * Configuration options for the layer (displayed in the layer tools' "config" tab)
 *
 * @element eox-layercontrol
 */
export class EOxLayerControl extends LitElement {
  static properties = {
    for: { type: String },
    idProperty: { attribute: "id-property" },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    showLayerZoomState: { attribute: "show-layer-zoom-state", type: Boolean },
    addLayers: { attribute: "add-layers", type: Boolean },
    tools: { attribute: false },
    unstyled: { type: Boolean },
    styleOverride: { type: String },
  };

  /**
   * @type import("../../map/main").EOxMap
   */
  #eoxMap;
  constructor() {
    super();

    /**
     * Query selector of an eox-map or another DOM element containing an OL map proeprty
     */
    this.for = "eox-map";

    /**
     * Layer id property
     */
    this.idProperty = "id";

    /**
     * The native OL map instance
     * @type {import("ol").Map}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html}
     */
    this.map = null;

    /**
     * Layer title property
     */
    this.titleProperty = "title";

    /**
     * Show layer state based on zoom level or not
     */
    this.showLayerZoomState = false;

    /**
     * Show layer state based on zoom level or not
     */
    this.addLayers = false;

    /**
     * Layer tools
     */
    this.tools = ["info", "opacity", "config", "remove", "sort"];

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     * Overrides elements current CSS.
     */
    this.styleOverride = "";
  }

  updated() {
    /**
     * @type Element & { map: import("ol").Map }
     */
    const foundElement = document.querySelector(this.for);
    if (foundElement && foundElement?.map !== this.map) {
      this.map = foundElement.map;
    }
  }

  firstUpdated() {
    const mapQuery = document.querySelector(this.for);
    this.#eoxMap = /** @type {import("@eox/map/main").EOxMap} */ (mapQuery);
  }

  render() {
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
        ${this.styleOverride}
      </style>
      ${when(
        this.map,
        () => html`
          <eox-layercontrol-layer-list
            .noShadow=${true}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            @changed=${
              /**
               * @param {CustomEvent & {target: Element}} e
               */
              (e) => {
                this.requestUpdate();
                if (e.target.tagName === "EOX-LAYERCONTROL-LAYER-TOOLS") {
                  /**
                   * @type Element & { requestUpdate: function }
                   */
                  const optionalListEl = this.renderRoot.querySelector(
                    "eox-layercontrol-optional-list"
                  );
                  optionalListEl?.requestUpdate();
                }
              }
            }
          ></eox-layercontrol-layer-list>
        `
      )}
      ${when(
        this.map &&
          filterLayers(
            // @ts-ignore
            this.map.getLayers().getArray(),
            "layerControlOptional",
            true
          )?.length > 0,
        () => html`
          <eox-layercontrol-optional-list
            .noShadow=${true}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${() => this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `
      )}
      ${this.addLayers
        ? html`
            <eox-layercontrol-add-layers
              .noShadow=${true}
              .idProperty=${this.idProperty}
              .titleProperty=${this.titleProperty}
              .eoxMap=${this.#eoxMap}
              @changed=${() => this.requestUpdate()}
            ></eox-layercontrol-add-layers>
          `
        : nothing}
    `;
  }

  #styleBasic = ``;

  #styleEOX = `
    * {
      font-family: Roboto, sans-serif;
    }
  `;
}

customElements.define("eox-layercontrol", EOxLayerControl);
