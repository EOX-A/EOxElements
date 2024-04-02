import { LitElement, html } from "lit";
import { getStartVals } from "../helpers";
import { dataChangeMethod } from "../methods/layer-config";
import { when } from "lit/directives/when.js";
import _debounce from "lodash.debounce";

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
     * @type {{ schema: object, element: string }}
     */
    this.layerConfig = null;

    /**
     * Debounce #handleDataChange() by 1000 milliseconds
     */
    this.debouncedDataChange = _debounce(this.#handleDataChange, 1000, {
      leading: true,
    });
  }

  /**
   * Handles changes in eox-jsonform values.
   *
   *  @param  {{ detail: { value: string; }; }} e
   */
  #handleDataChange(e) {
    this.#data = e.detail;
    this.#originalTileUrlFunction = dataChangeMethod(
      this.#data,
      this.#originalTileUrlFunction,
      this
    );
    this.requestUpdate();
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
    // Fetch initial values for the layer and its configuration
    this.#startVals = getStartVals(this.layer, this.layerConfig);
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
