import { default as vegaEmbed } from "vega-embed";
import { deepmerge } from "deepmerge-ts";
import { DEFAULT_SPEC } from "../../enums";

/**
 * Render the Vega-Lite chart using vega-embed with a spec and (optionally) dataValues
 *
 * @param {import("../../main").EOxChart} The eox-chart instance
 * @param {import("vega-embed").VisualizationSpec} spec
 * @param {Object=} dataValues
 *
 */
const renderChartMethod = (EOxChart, spec, dataValues) => {
  const mergedSpec = deepmerge(DEFAULT_SPEC, spec);
  vegaEmbed(
    /** @type {HTMLElement} */ (EOxChart.renderRoot.querySelector("#vis")),
    mergedSpec,
  ).then((res) => {
    if (dataValues) {
      Object.keys(dataValues).forEach((dataSourceName) => {
        res.view.insert(dataSourceName, dataValues[dataSourceName]);
      });
      res.view.run();
    }
  });
};

export default renderChartMethod;
