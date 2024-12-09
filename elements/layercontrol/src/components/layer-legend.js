import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Legend configurations
 *
 * @typedef {{
 *   domain:import("color-legend-element").ColorLegendElement["domain"]
 *   width?:number;
 *   range:string[];
 *   title?:string;
 *   tickFormat?:import("color-legend-element").ColorLegendElement["tickFormat"]
 *   ticks?:import("color-legend-element").ColorLegendElement["ticks"]
 *   tickValues?:import("color-legend-element").ColorLegendElement["tickValues"]
 *   scaleType?:import("color-legend-element").ColorLegendElement["scaleType"]
 *   markType?:import("color-legend-element").ColorLegendElement["markType"]
 * }} LegendConfig
 **/

/**
 * `EOxLayerControlLayerLegend` is a component that handles creating a legend from a range of colors & the domain of the color values.
 *
 * @element eox-layercontrol-layer-datetime
 * @extends LitElement
 */
export class EOxLayerControlLayerLegend extends LitElement {
  // Define static properties for the component
  static properties = {
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    layerLegend: { attribute: false },
    layer: { attribute: false },
  };

  constructor() {
    super();

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
     * Legend configurations
     * @type {LegendConfig}
     * @see {@link https://clhenrick.github.io/color-legend-element/}
     */
    this.layerLegend = null;

    /**
     * The native OL layer
     *
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  updated() {
    if (this.offsetWidth < 325 && this.offsetWidth !== this.layerLegend.width) {
      this.layerLegend.width = this.offsetWidth;
      this.requestUpdate();
    }
  }

  /**
   * Renders a Time Control for datetime options of a layer.
   */
  render() {
    if (!customElements.get("color-legend")) {
      console.error(
        "Please import `color-legend-element` in order to use layerLegend",
      );
    }

    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layerLegend,
        () => html`
          <div class="legend-container">
            <!-- Render color-legend-->
            <color-legend
              id="${this.layer.get("id")}"
              width=${this.layerLegend.width ?? 325}
              scaleType="${ifDefined(this.layerLegend.scaleType)}"
              markType="${ifDefined(this.layerLegend.markType)}"
              titleText="${ifDefined(this.layerLegend.title)}"
              .range=${this.layerLegend.range}
              .domain=${this.layerLegend.domain}
              tickFormat="${ifDefined(this.layerLegend.tickFormat)}"
              .ticks=${this.layerLegend.ticks ?? 5}
              .tickValues=${this.layerLegend.tickValues}
            >
            </color-legend>
          </div>
        `,
      )}
    `;
  }

  #styleBasic = css`
    .legend-container {
      display: flex;
      justify-content: center;
    }

    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `;
  #styleEOX = ``;
}

customElements.define(
  "eox-layercontrol-layer-legend",
  EOxLayerControlLayerLegend,
);
