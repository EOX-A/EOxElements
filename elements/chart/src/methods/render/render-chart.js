import { default as vegaEmbed } from "vega-embed";
import { deepmerge } from "deepmerge-ts";
import { DEFAULT_SPEC, DEFAULT_OPT } from "../../enums";

/**
 * Render the Vega-Lite chart using vega-embed with a spec and (optionally) dataValues
 *
 * @param {import("../../main").EOxChart} EOxChart The eox-chart instance
 * @param {import("vega-embed").VisualizationSpec} spec
 * @param {import("vega-embed").EmbedOptions} opt
 * @param {object=} dataValues
 *
 */
const renderChartMethod = async (EOxChart, spec, opt, dataValues) => {
  // @ts-expect-error using private method defined on EOxChart
  EOxChart._disposeChart();
  if (!EOxChart.isConnected) return;

  const request = {};
  // @ts-expect-error using private property defined on EOxChart
  EOxChart._renderRequest = request;
  const mergedSpec = deepmerge(DEFAULT_SPEC, spec);
  const mergedOpt = deepmerge(DEFAULT_OPT, opt);
  const visContainer = /** @type {HTMLElement} */ (
    EOxChart.renderRoot.querySelector("#vis")
  );
  // Each embed owns its DOM, so an older async embed cannot overwrite a newer one.
  const container = document.createElement("div");
  container.className = "chart-container";
  visContainer.replaceChildren(container);
  const res = await vegaEmbed(container, mergedSpec, mergedOpt);
  // @ts-expect-error using private property defined on EOxChart
  if (!EOxChart.isConnected || EOxChart._renderRequest !== request) {
    res.finalize();
    return;
  }
  // Retain the embed finalizer, which also removes embed-level event listeners.
  // @ts-expect-error using private property defined on EOxChart
  EOxChart._embedResult = res;
  if (dataValues) {
    Object.keys(dataValues).forEach((dataSourceName) => {
      res.view.insert(dataSourceName, dataValues[dataSourceName]);
    });
    res.view.run();
  }
  res.view.addEventListener("pointermove", (event, item) => {
    if (!item) return;
    // @ts-expect-error using private method defined on EOxChart
    EOxChart._dispatchItemPointerMoveEvent({ event, item });
  });
  res.view.addEventListener("click", (event, item) => {
    if (!item) return;
    // @ts-expect-error using private method defined on EOxChart
    EOxChart._dispatchItemClickEvent({ event, item });
  });

  // @ts-expect-error using private method defined on EOxChart
  EOxChart._vegaView = res.view;
};

export default renderChartMethod;
