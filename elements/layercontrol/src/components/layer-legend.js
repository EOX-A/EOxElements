import { LitElement, html, css, nothing } from "lit";
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
     * The native OL layer
     *
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;
  }
  /** @type {(LegendConfig & {id:string})[]}} */
  #layerLegend = [];

  get layerLegend() {
    if (this.#layerLegend) {
      return this.#layerLegend.length > 1
        ? this.#layerLegend
        : this.#layerLegend[0];
    } else {
      return null;
    }
  }
  /**
   * Legend configurations
   * @param {LegendConfig | LegendConfig[]} value
   * @see {@link https://clhenrick.github.io/color-legend-element/}
   **/
  set layerLegend(value) {
    if (!value) {
      this.#layerLegend = null;
    } else if (Array.isArray(value)) {
      this.#layerLegend = value.map((config, idx) => ({
        id: (this.layer?.get("id") ?? "") + idx,
        ...config,
      }));
    } else {
      this.#layerLegend = [
        {
          id: (this.layer?.get("id") ?? "") + 0,
          ...value,
        },
      ];
    }
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  firstUpdated() {
    if (this.layerLegend) {
      new ResizeObserver(() => {
        this.#layerLegend = this.#layerLegend?.map((config) => {
          if (this.offsetWidth !== config.width) {
            config.width = this.offsetWidth;
          }
          return { ...config };
        });
        this.requestUpdate();
      }).observe(this.renderRoot.querySelector(".legend-container"));
    }
  }

  /**
   * Renders color legends based on the layerLegend property.
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
            ${this.#layerLegend.map(
              (legend, idx, configs) => html`
                <color-legend
                  id=${legend.id}
                  width=${legend.width ?? 325}
                  scaleType=${ifDefined(legend.scaleType)}
                  markType=${ifDefined(legend.markType)}
                  titleText=${ifDefined(legend.title)}
                  .range=${legend.range}
                  .domain=${legend.domain}
                  tickFormat=${ifDefined(legend.tickFormat)}
                  .ticks=${legend.ticks ?? 5}
                  .tickValues=${legend.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${idx !== configs.length - 1
                  ? html`<div class="separator"></div>`
                  : nothing}
              `,
            )}
          </div>
        `,
      )}
    `;
  }

  #styleBasic = css`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
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
