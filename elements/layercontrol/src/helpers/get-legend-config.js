import { flattenObject } from "../methods/layer-config";
/**
 * extracts legend configurations from `LayerConfig`
 *
 * @param {import("../components/layer-config").EOxLayerControlLayerConfig["layerConfig"]["legend"]} legendConfig
 * @param {Record<string,unknown>} data
 */
const getLegendConfig = (legendConfig, data) => {
  if (!legendConfig) return undefined;
  if (!("domainProperties" in legendConfig) || "domain" in legendConfig) {
    return { ...legendConfig };
  }
  return Object.keys(legendConfig)?.reduce((legend, key) => {
    if (key === "domainProperties") {
      const flatData_ = flattenObject(data);
      legend["domain"] = legendConfig[key].map((k) => flatData_[k]);
    } else {
      //@ts-expect-error
      legend[key] = legendConfig[key];
    }
    return legend;
  }, /** @type {import("../components/layer-legend").LegendConfig} */ ({}));
};

export default getLegendConfig;
