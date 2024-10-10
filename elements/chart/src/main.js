import { LitElement, html } from "lit";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import allStyle from "../../../utils/styles/dist/all.style";
import { DEFAULT_SPEC } from "./enums";
import { default as vegaEmbed } from "vega-embed";
import { deepmerge } from "deepmerge-ts";

/**
 * Chart component based on [Vega-Lite](https://vega.github.io/vega-lite/)/[Vega-Embed](https://github.com/vega/vega-embed).
 * Pass a valid Vega spec as `spec` property in order to render a chart.
 *
 * The `eox-chart` provides some default `spec` settings (merged with the provided `spec` property) and helper functionalities on top of Vega-Lite.
 *
 * @element eox-chart
 */
export class EOxChart extends LitElement {
  static properties = {
    dataValues: { attribute: false, type: Object },
    spec: { attribute: false, type: Object },
    noShadow: { attribute: "no-shadow", type: Boolean },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * [Vega-Lite spec](https://vega.github.io/vega-lite/docs/spec.html)
     *
     * @type {import("vega-embed").VisualizationSpec}
     */
    this.spec = undefined;

    /**
     * Data values passed on runtime. Requires a [named data source](https://vega.github.io/vega-lite/docs/data.html#named) in the provided `spec`
     *
     * @type {{[dataSourceName: string]: import("vega-lite/build/src/data").InlineData}}
     */
    this.dataValues = undefined;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;
  }

  /**
   * Render Vega-Lite using vega-embed
   *
   * @param {import("vega-embed").VisualizationSpec} spec
   * @param {Object} dataValues
   */
  renderVega(spec, dataValues) {
    const mergedSpec = deepmerge(DEFAULT_SPEC, spec);
    vegaEmbed(
      /** @type {HTMLElement} */ (this.renderRoot.querySelector("#vis")),
      mergedSpec
    ).then((res) => {
      if (dataValues) {
        Object.keys(dataValues).forEach((dataSourceName) => {
          res.view.insert(dataSourceName, dataValues[dataSourceName]);
        });
        res.view.run();
      }
    });
  }

  /**
   * Lifecycle method called when the element is updated
   *
   * @param {import("lit").PropertyValues} changedProperties
   */
  async updated(changedProperties) {
    if (changedProperties.has("spec") || changedProperties.has("dataValues")) {
      this.renderVega(this.spec, this.dataValues);
    }
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Renders the component's HTML and CSS
   */
  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && allStyle}
        ${!this.unstyled && styleEOX}
      </style>
      <div id="vis"></div>
    `;
  }
}

customElements.define("eox-chart", EOxChart);
