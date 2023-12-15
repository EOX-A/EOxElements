import { LitElement, html } from "lit";
import "../../../jsonform/src/main";
import { getStartVals } from "../helpers";
import { dataChangeMethod } from "../methods/layer-config";
import { when } from "lit/directives/when.js";

/**
 * Layer configuration for an individual layer
 *
 * @element eox-layercontrol-layerconfig
 */
export class EOxLayerControlLayerConfig extends LitElement {
  static properties = {
    layer: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    layerConfig: { attribute: false },
  };

  /**
   * data input by the user
   * @type {{[key: string]: any}}
   */
  #data = {};

  /**
   * data input by the user
   * @type {{[key: string]: any}}
   */
  #startVals = null;

  /**
   * Original tile url function, if it exist
   * @type {Function}
   */
  #originalTileUrlFunction;

  constructor() {
    super();

    /**
     * The native OL layer
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     */
    this.noShadow = true;

    /**
     * Layer config for eox-jsonform
     * @type {{ schema: object, element: string }}
     */
    this.layerConfig = null;
  }

  /**
   * Handle eox-jsonform change
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

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    this.#startVals = getStartVals(this.layer, this.layerConfig);
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
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .startVals=${this.#startVals}
            .options=${options}
            @change=${this.#handleDataChange}
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
