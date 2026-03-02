import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import "./components/layer-list";
import "./components/optional-list";
import "./components/add-layers";
import { filterLayers, handleDatetimeUpdate } from "./helpers";
import {
  firstUpdatedMethod,
  layerListChangeMethod,
} from "./methods/layercontrol";
import eoxStyle from "@eox/ui/style.css?inline";
import { addCommonStylesheet } from "@eox/elements-utils";

addCommonStylesheet();

/**
 * The `eox-layercontrol` element provides a user interface for managing and configuring layers of an `eox-map`. It connects to the underlying OpenLayers map instance and displays a list of layers, supporting advanced features such as optional layers, exclusive layers, layer tools, dynamic legends, time controls, and external layer addition.
 *
 * ## Usage
 * Place `<eox-layercontrol></eox-layercontrol>` next to an `<eox-map></eox-map>` element. If there is only one `eox-map` present, `eox-layercontrol` will automatically connect to it. This can be configured
 * via the `for` attribute/property in order to support connecting to a specific map.
 *
 * ## Layer Properties
 * To be displayed and managed correctly, the map layers should have custom properties set (e.g. using `properties.<property>` inside the `eox-map` layer json, or by doing `layer.set(property, value)` on the native OpenLayers layers).
 *
 * - `id?: string` — Unique identifier for the layer. Recommended for referencing and managing layers; also used for `eox-map` smart layer updating.
 * - `title?: string` — Human-readable title for the layer, displayed in the control. Recommended for usability.
 * - `layerControlHide?: boolean` — If true, hides the layer from the control UI.
 * - `layerControlOptional?: boolean` — If true, the layer is initially hidden and can be added from the optional list.
 * - `layerControlExclusive?: boolean` — If true, only one exclusive layer can be visualized at a time (taking into account all other layers on the same level with this property).
 * - `layerControlExpand?: boolean` — If true, the layer is "expanded" by default, showing description, tools etc. (if available).
 * - `layerControlToolsExpand?: boolean` — If true, the layer tools section is expanded by default.
 * - `layerConfig?: object` — Configuration for the "config" tool, consisting of a JSON schema (rendered by `eox-jsonform`) for editable settings.
 * - `layerDatetime?: object` — Configuration for the "datetime" tool, supporting time-based controls and playback.
 * - `layerLegend?: object` — Configuration for the "legend" tool, supporting dynamic color legends.
 *
 * For `eox-map` attributes/properties and emitted events, see below.
 *
 * @element eox-layercontrol
 */
export class EOxLayerControl extends LitElement {
  // Define static properties for the component
  static properties = {
    for: { type: String },
    idProperty: { attribute: "id-property" },
    map: { attribute: false, state: true },
    titleProperty: { attribute: "title-property", type: String },
    showLayerZoomState: { attribute: "show-layer-zoom-state", type: Boolean },
    tools: { attribute: false },
    addExternalLayers: { attribute: false },
    unstyled: { type: Boolean },
    styleOverride: { type: String },
    toolsAsList: { type: Boolean },
    globallyExclusiveLayers: {
      attribute: "globally-exclusive-layers",
      type: Boolean,
    },
    customEditorInterfaces: { attribute: false, type: Array },
  };

  /**
   * Instance of `eox-map` which is a wrapper for the OL
   *
   * @type {import("@eox/map").EOxMap}
   */
  #eoxMap;

  // Constructor to set default values for properties
  constructor() {
    super();

    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";

    /**
     * Layer id property
     *
     * @type {String}
     */
    this.idProperty = "id";

    /**
     * The native OL map instance
     *
     * @type {import("ol").Map}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html}
     */
    this.map = null;

    /**
     * Layer title property
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
     * Layer tools
     *
     * @type {Array<String>}
     */
    this.tools = ["info", "opacity", "datetime", "config", "remove", "sort"];

    /**
     * Enable-disable external layer
     *
     * @type {Boolean}
     */
    this.addExternalLayers = false;

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;

    /**
     * Overrides elements current CSS.
     *
     * @type {String}
     */
    this.styleOverride = "";

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

    /**
     * List of custom editor interfaces for layer config eox-jsonforms
     * Read more about the implementation of custom editor interfaces here:
     * https://github.com/json-editor/json-editor/blob/master/docs/custom-editor.html
     *
     * @type {Array}
     */
    this.customEditorInterfaces = [];
  }

  /**
   * Called when the component is first updated
   * Updated #eoxMap after first update.
   */
  firstUpdated() {
    this.eoxMap = firstUpdatedMethod(this);
  }

  updated(changedProperties) {
    if (changedProperties.has("for")) {
      this.eoxMap = firstUpdatedMethod(this);
    }
  }

  get eoxMap() {
    return this.#eoxMap;
  }

  set eoxMap(value) {
    const oldValue = this.#eoxMap;
    this.#eoxMap = value;
    this.requestUpdate("eoxMap", oldValue);
  }

  /**
   * Event handler for changes in the layer list
   *
   * @param {CustomEvent & {target: Element}} evt
   */
  #handleLayerControlLayerListChange(evt) {
    layerListChangeMethod(evt, this);
    /**
     * A generic layer change event; could be a layer visibility, group length updates and others.
     * Passes the changed layer in the `detail`.
     */
    this.dispatchEvent(new CustomEvent("layerchange", { detail: evt.detail }));
  }

  /**
   * Dispatches jsonform updates from layer config to the layercontrol
   * @param {CustomEvent} evt
   */
  #handleLayerConfigChange(evt) {
    this.dispatchEvent(
      new CustomEvent("layerConfig:change", { detail: evt.detail }),
    );
  }

  render() {
    // Checks if there are any layers with the 'layerControlOptional' property set to true
    const layers = this.map?.getLayers().getArray();
    const layerControlOptionalCondition =
      layers && filterLayers(layers, "layerControlOptional", true)?.length > 0;

    return html`
      <style>
        ${!this.unstyled && this.#styleEOX}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${when(
        this.addExternalLayers && this.#eoxMap?.addOrUpdateLayer,
        () => html`
          <eox-layercontrol-add-layers
            .noShadow=${true}
            .eoxMap=${this.#eoxMap}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `,
      )}

      <!-- Conditional rendering of layer list component -->
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
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${this.#handleLayerControlLayerListChange}
            @datetime:updated=${(evt) => handleDatetimeUpdate(evt, this)}
            @layerConfig:change=${this.#handleLayerConfigChange}
          ></eox-layercontrol-layer-list>
        `,
      )}

      <!-- Conditional rendering of optional list component -->
      ${when(
        layerControlOptionalCondition,
        () => html`
          <eox-layercontrol-optional-list
            .noShadow=${true}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${() => this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `,
      )}
    `;
  }

  #styleEOX = `
    ${eoxStyle}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

      --primary-color: var(--primary);
      --secondary-color: var(--secondary);
      --item-color: color-mix(
        in srgb,
        var(--primary-color) 10%,
        transparent
      );
      --item-hover-color: color-mix(
        in srgb,
        var(--surface) 80%,
        transparent
      );

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
    summary > * {
      pointer-events: all !important;
    }
  `;
}

customElements.define("eox-layercontrol", EOxLayerControl);
