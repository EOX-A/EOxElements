import { flattenObject } from "../methods/layer-config";
/**
 * extracts legend configurations from `LayerConfig`
 *
 * @param {import("../components/layer-config").EOxLayerControlLayerConfig["layerConfig"]["legend"]} legendConfig
 * @param {Record<string,unknown>} data
 */
const getLegendConfig = (legendConfig, data) => {
  if (!legendConfig) return undefined;
  /** @type {import("../components/layer-config").EOxLayerControlLayerConfig["layerConfig"]["legend"]} */
  let activeLegend;
  const flatData = flattenObject(data);
  if (Array.isArray(legendConfig) && legendConfig.length) {
    activeLegend = legendConfig.find((legend) => {
      const propName = legend.boundTo.key;
      const expectedToMatch = legend.boundTo.value;
      return flatData[propName] == expectedToMatch;
    });
    if (!activeLegend) {
      activeLegend = legendConfig;
    }
  } else {
    activeLegend = legendConfig;
  }
  if (!Array.isArray(activeLegend)) {
    activeLegend = [activeLegend];
  }
  return activeLegend.map((lgnd) => {
    if (!("domainProperties" in lgnd) || "domain" in lgnd) {
      return { ...lgnd };
    }
    return Object.keys(lgnd)?.reduce((legend, key) => {
      if (key === "domainProperties") {
        legend["domain"] = lgnd[key].map((k) => flatData[k]);
      } else {
        legend[key] = lgnd[key];
      }
      return legend;
    }, /** @type {import("../components/layer-legend").LegendConfig} */ ({}));
  });
};

export default getLegendConfig;
