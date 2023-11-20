import { LitElement, html } from "lit";
import "../../../jsonform/src/main";
import { updateUrl } from "../helpers";

/**
 * Layer configuration for an individual layer
 *
 * @element eox-layercontrol-layerconfig
 */
export class EOxLayerControlLayerConfig extends LitElement {
  static properties = {
    layer: { attribute: false },
    unstyled: { type: Boolean },
    layerConfig: { attribute: false },
  };

  /**
   * data input by the user
   * @type {{[key: string]: any}}
   */
  #data = {};

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
     * Layer config for eox-jsonform
     * @type {{ schema: object, defaultValues: object, element: string }}
     */
    this.layerConfig = null;
  }

  /**
   * Handle eox-jsonform change
   *  @param  {{ detail: { value: string; }; }} e
   */
  #handleDataChange(e) {
    this.#data = e.detail;

    // @ts-ignore
    const url = this.layer.getSource().getUrls()[0];

    updateUrl(url, this.#data, this.layer);
    this.requestUpdate();
  }

  render() {
    if (!this.layerConfig) return ``;

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <eox-jsonform
        .schema=${this.layerConfig.schema}
        .defaultValues=${this.layerConfig.defaultValues}
        .options=${{
          button_state_mode: 2,
          disable_edit_json: true,
          disable_collapse: true,
          disable_properties: true,
        }}
        @change=${this.#handleDataChange}
      ></eox-jsonform>
    `;
  }

  #styleBasic = ``;

  #styleEOX = ``;
}

customElements.define(
  "eox-layercontrol-layerconfig",
  EOxLayerControlLayerConfig
);
