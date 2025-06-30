import { changeset } from "vega";
import { default as vegaEmbed } from "vega-embed";
import { deepmerge } from "deepmerge-ts";
import { DEFAULT_SPEC } from "../../enums";
// import "https://d3js.org/d3.v6.min.js";
// import "https://cdn.jsdelivr.net/gh/uwdata/gemini@v0.1-alpha/gemini.web.js";

let vegaView;

/**
 * Render the Vega-Lite chart using vega-embed with a spec and (optionally) dataValues
 *
 * @param {import("../../main").EOxChart} EOxChart The eox-chart instance
 * @param {import("vega-embed").VisualizationSpec} spec
 * @param {Object=} dataValues
 *
 */
export const renderChartMethod = (EOxChart, spec, dataValues) => {
  const mergedSpec = deepmerge(DEFAULT_SPEC, spec);
  vegaEmbed(
    /** @type {HTMLElement} */ (EOxChart.renderRoot.querySelector("#vis")),
    mergedSpec,
  ).then((res) => {
    vegaView = res.view;
    if (dataValues) {
      Object.keys(dataValues).forEach((dataSourceName) => {
        vegaView.insert(dataSourceName, dataValues[dataSourceName]);
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

export const updateChartMethod = (dataValues) => {
  if (dataValues) {
    Object.keys(dataValues).forEach((dataSourceName) => {
      vegaView.insert(dataSourceName, dataValues[dataSourceName]);
      const changeSet = changeset()
        .remove(() => true)
        .insert(dataValues[dataSourceName]);
      vegaView.change(dataSourceName, changeSet).run();
    });
  }
};
