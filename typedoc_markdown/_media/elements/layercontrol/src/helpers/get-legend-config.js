import { flattenObject } from "../methods/layer-config";
/**
 * extracts legend configurations from `LayerConfig`
 *
 * @param {import("../components/layer-config").EOxLayerControlLayerConfig["layerConfig"]["legend"]} legendConfig
 * @param {Record<string,unknown>} data
 */
const getLegendConfig = (legendConfig, data) => {
  if (!legendConfig) {
    return undefined;
  }

  const flatData = flattenObject(data);

  /**
   * legends config that will be shown
   * @type {import("../components/layer-config").layerConfigLegend[]} */
  let activeLegends;
  /**
   * legends config that are available
   * @type {import("../components/layer-config").layerConfigLegend[]} */
  let availableLegends;

  if (Array.isArray(legendConfig)) {
    availableLegends = structuredClone(legendConfig);
  } else {
    availableLegends = [structuredClone(legendConfig)];
  }

  activeLegends = availableLegends.filter((legend) => {
    // if the legend is not bound to a property, it will be shown
    if (!("boundTo" in legend)) {
      return true;
    }

    const propName = legend.boundTo.key;
    const expectedToMatch = legend.boundTo.value;

    // only show the legend if the property exists and matches the expected value
    return propName in flatData && flatData[propName] == expectedToMatch;
  });

  // If no legends are active, return null
  if (!activeLegends.length) {
    activeLegends = null;
  }

  return /** @type {import("../components/layer-legend").LegendConfig[] | null} */ (
    activeLegends?.map((activeLegend) => {
      delete activeLegend.boundTo;
      if (!("domainProperties" in activeLegend) || "domain" in activeLegend) {
        return activeLegend;
      }
      return Object.keys(activeLegend)?.reduce((legend, key) => {
        if (key === "domainProperties") {
          legend["domain"] = activeLegend[key].map((k) => flatData[k]);
        } else {
          legend[key] = activeLegend[key];
        }
        return legend;
      }, /** @type {import("../components/layer-legend").LegendConfig} */ ({}));
    })
  );
};

export default getLegendConfig;
