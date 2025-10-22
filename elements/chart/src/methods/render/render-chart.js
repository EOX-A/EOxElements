import { default as vegaEmbed } from "vega-embed";
import { deepmerge } from "deepmerge-ts";
import { DEFAULT_SPEC, DEFAULT_OPT } from "../../enums";

/**
 * Render the Vega-Lite chart using vega-embed with a spec and (optionally) dataValues
 *
 * @param {import("../../main").EOxChart} EOxChart The eox-chart instance
 * @param {import("vega-embed").VisualizationSpec} spec
 * @param {Object=} dataValues
 *
 */
const renderChartMethod = (EOxChart, spec, opt, dataValues) => {
  const mergedSpec = deepmerge(DEFAULT_SPEC, spec);
  const mergedOpt = deepmerge(DEFAULT_OPT, opt);
  vegaEmbed(
    /** @type {HTMLElement} */ (EOxChart.renderRoot.querySelector("#vis")),
    mergedSpec,
    mergedOpt,
  ).then((res) => {
    if (dataValues) {
      Object.keys(dataValues).forEach((dataSourceName) => {
        res.view.insert(dataSourceName, dataValues[dataSourceName]);
      });
      res.view.run();
    }
    res.view.addEventListener("pointermove", (event, item) => {
      if (!item) return;
      EOxChart._dispatchItemPointerMoveEvent({ event, item });
    });
    res.view.addEventListener("click", (event, item) => {
      if (!item) return;
      EOxChart._dispatchItemClickEvent({ event, item });
    });
  });
};

export default renderChartMethod;
