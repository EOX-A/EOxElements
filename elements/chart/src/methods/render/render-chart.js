import { default as vegaEmbed } from "vega-embed";
import { deepmerge } from "deepmerge-ts";
import { emitActivity } from "@eox/elements-utils";
import { DEFAULT_SPEC, DEFAULT_OPT } from "../../enums";

/**
 * Render the Vega-Lite chart using vega-embed with a spec and (optionally) dataValues
 *
 * @param {import("../../main").EOxChart} EOxChart The eox-chart instance
 * @param {import("vega-embed").VisualizationSpec} spec
 * @param {object=} dataValues
 *
 */
const renderChartMethod = (EOxChart, spec, opt, dataValues) => {
  const mergedSpec = deepmerge(DEFAULT_SPEC, spec);
  const mergedOpt = deepmerge(DEFAULT_OPT, opt);
  const visContainer = /** @type {HTMLElement} */ (
    EOxChart.renderRoot.querySelector("#vis")
  );
  vegaEmbed(visContainer, mergedSpec, mergedOpt).then((res) => {
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

    // Case B: Listen to clicks on vega-embed actions (Save as PNG/SVG, View Source, etc.)
    visContainer.addEventListener("click", (e) => {
      const target = /** @type {HTMLElement | null} */ (e.target);
      const actionLink = /** @type {HTMLAnchorElement | null} */ (
        target?.closest(".vega-actions a")
      );
      if (actionLink) {
        emitActivity(
          EOxChart,
          "click:action",
          {
            action: actionLink.textContent?.trim() || "",
            href: actionLink.getAttribute("href") || "",
          },
          e,
        );
      }
    });

    // Case B: Listen to changes on Vega input bindings (.vega-bindings)
    visContainer.addEventListener("change", (e) => {
      const target =
        /** @type {HTMLInputElement | HTMLSelectElement | null} */ (e.target);
      if (target?.closest(".vega-bindings")) {
        emitActivity(
          EOxChart,
          "change:binding",
          {
            name:
              target.getAttribute("name") ||
              target.getAttribute("id") ||
              target.className,
            value: target.value,
          },
          e,
        );
      }
    });

    // @ts-expect-error using private method defined on EOxChart
    EOxChart._vegaView = res.view;
  });
};

export default renderChartMethod;
