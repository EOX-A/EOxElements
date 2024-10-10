import { LitElement, html } from "lit";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import allStyle from "../../../utils/styles/dist/all.style";
import { DEFAULT_SPEC } from "./enums";
import { default as vegaEmbed } from "vega-embed";
import { deepmerge } from "deepmerge-ts";

/**
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
     * Data values passed on runtime. Requires a name data source "temp"
     *
     * @type {Object}
     */
    this.dataValues;

    /**
     * Vega-Lite spec
     *
     * @type {import("vega-embed").VisualizationSpec}
     */
    this.spec;

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
