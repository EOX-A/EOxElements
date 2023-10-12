import { LitElement, html } from "lit";
import { live } from "lit/directives/live.js";

/**
 * Layer configuration for an individual layer
 *
 * @element eox-layercontrol-layerconfig
 */
export class EOxLayerControlLayerConfig extends LitElement {
  static properties = {
    layer: { attribute: false },
    unstyled: { type: Boolean },
  };

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
  }

  render() {
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value=${live(this.layer?.getOpacity())}
        @input=${(/** @type {{ target: { value: string; }; }} */ evt) =>
          this.layer.setOpacity(parseFloat(evt.target.value))}
      />
      <button
        class="delete"
        @click=${() => {
          this.layer?.set("layerControlOptional", true);
          this.layer?.setVisible(false);
          this.dispatchEvent(
            new CustomEvent("changed", { detail: this.layer, bubbles: true })
          );
        }}
      >
        x
      </button>
    `;
  }

  #styleBasic = ``;

  #styleEOX = ``;
}

customElements.define(
  "eox-layercontrol-layerconfig",
  EOxLayerControlLayerConfig
);
