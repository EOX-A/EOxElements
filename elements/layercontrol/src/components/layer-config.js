import { LitElement, html } from "lit";
import { getStartVals } from "../helpers";
import { dataChangeMethod, applyUpdatedStyles } from "../methods/layer-config";
import { when } from "lit/directives/when.js";
import _throttle from "lodash.throttle";
import "color-legend-element";
/**
 * `EOxLayerControlLayerConfig` is a component that handles configuration options for layers using eox-jsonform.
 * It allows users to input data, modify layer settings, and update the UI based on those settings.
 *
 *
 * @element eox-layercontrol-layerconfig
 * @extends LitElement
 */
export class EOxLayerControlLayerConfig extends LitElement {
  // Define static properties for the component
  static properties = {
    layer: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    layerConfig: { attribute: false },
  };

  /**
   * data input by the user
   *
   * @type {{[key: string]: any}}
   */
  #data = {};

  /**
   * data input by the user
   *
   * @type {{[key: string]: any}}
   */
  #startVals = null;

  /**
   * Original tile url function, if it exist
   *
   * @type {Function}
   */
  #originalTileUrlFunction;

  constructor() {
    super();

    /**
     * The native OL layer
     *
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;

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
     * Layer config for eox-jsonform
     *
     * @type {{ schema: Record<string,any>; element: string; type?:"tileUrl"|"style"; style?:import("ol/layer/WebGLTile").Style}}
     */
    this.layerConfig = null;

    /**
     * Throttle #handleDataChange() by 200 milliseconds
     */
    this.debouncedDataChange = _throttle(this.#handleDataChange, 200);
  }

  /**
   * Handles changes in eox-jsonform values.
   *
   *  @param  {{ detail: { value: string; }; }} e
   */
  #handleDataChange(e) {
    this.#data = e.detail;
    this.children[0].domain = [this.#data.vminmax.vmin, this.#data.vminmax.vmax];
    if (this.layerConfig.type === "style" || this.layerConfig.style) {
      const supportStyleConfig =
        "setStyle" in this.layer || "updateStyleVariables" in this.layer;
      if (supportStyleConfig) {
        applyUpdatedStyles(this.#data, this.layer, this.layerConfig);
      } else {
        console.error(
          `Layer type ${
            this.layer.get("type") ?? ""
          } does not support styles configuration`
        );
      }
    } else {
      this.#originalTileUrlFunction = dataChangeMethod(
        this.#data,
        this.#originalTileUrlFunction,
        this
      );
      this.requestUpdate();
    }
    this.requestUpdate();
    this.render();
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Renders a JSON form for configuration options of a layer.
   */
  render() {
    console.log("rendering");
    // Fetch initial values for the layer and its configuration
    this.#startVals = getStartVals(this.layer, this.layerConfig);
    if (Object.keys(this.#data).length !== 0) {
      this.#startVals = this.#data;
    }
    console.log("startVals", this.#startVals);
    console.log("data", this.#data);
    if (!customElements.get("eox-jsonform")) {
      console.error("Please import @eox/jsonform in order to use layerconfig");
    }
    // Options for the JSON form rendering
    const options = {
      disable_edit_json: true,
      disable_collapse: true,
      disable_properties: true,
    };

    return html`
      <color-legend
        .id="${Math.random().toString().replace("0.", "")}"
        range='["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"]'
        .domain="${[this.#startVals.vminmax.vmin, this.#startVals.vminmax.vmax]}"
      >
      </color-legend>
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layerConfig,
        () => html`
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${this.#startVals}
            .options=${options}
            @change=${this.debouncedDataChange}
          ></eox-jsonform>
        `
      )}
    `;
  }

  #styleBasic = ``;
  #styleEOX = ``;
}

customElements.define(
  "eox-layercontrol-layerconfig",
  EOxLayerControlLayerConfig
);
