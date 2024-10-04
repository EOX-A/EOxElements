import { LitElement, html, css } from "lit";
import { when } from "lit/directives/when.js";
import "color-legend-element";

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
     * Layer config for eox-jsonform
     *
     * @type {{
     *   domain:import("color-legend-element").ColorLegendElement["domain"]
     *   range:string[];
     *   title?:string;
     *   tickFormat?:import("color-legend-element").ColorLegendElement["tickFormat"]
     *   ticks?:import("color-legend-element").ColorLegendElement["ticks"]
     *   tickValues?:import("color-legend-element").ColorLegendElement["tickValues"]
     *   tickSize?:import("color-legend-element").ColorLegendElement["tickSize"]
     *   scaleType?:import("color-legend-element").ColorLegendElement["scaleType"]
     *   markType?:import("color-legend-element").ColorLegendElement["markType"]
     * }|null}
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

  /**
   * Renders a Time Control for datetime options of a layer.
   */
  render() {
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layerLegend,
        () => html`
          <!-- Render color-legend-->
          <color-legend
            id="${this.layer.get("id")}"
            width="${this.parentElement.parentElement.offsetWidth}"
            scaleType=${this.layerLegend.scaleType ?? "continuous"}
            markType=${this.layerLegend.markType}
            titleText=${this.layerLegend.title ?? ""}
            .range="${this.layerLegend.range}"
            .domain="${
              /** @type {number[]|string[]} */ ([
                this.layerLegend.domain[0],
                this.layerLegend.domain[this.layerLegend.domain.length - 1],
              ])
            }"
            tickFormat="${this.layerLegend.tickFormat}"
            .ticks="${this.layerLegend.ticks}"
            .tickValues="${this.layerLegend.tickValues}"
            .tickSize="${this.layerLegend.tickSize}"
          >
          </color-legend>
        `
      )}
    `;
  }

  #styleBasic = css`
  color-legend {
  --cle-background :transparent;
  --cle-font-family:inherit;
  --cle-font-size:inherit;
  --cle-font-weight :inherit
  --cle-letter-spacing :inherit;
  --cle-letter-spacing-title :inherit;
  }
  `;
  #styleEOX = ``;
}

customElements.define(
  "eox-layercontrol-layer-legend",
  EOxLayerControlLayerLegend
);
