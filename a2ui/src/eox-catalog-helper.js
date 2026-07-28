import { Catalog } from "@a2ui/web_core/v0_9";
import { basicCatalog } from "@a2ui/lit/v0_9";
import { eoxCatalog, urlVersion } from "./eox-catalog.js";
import { version } from "./generated-catalog.js";

/**
 * Merge multiple a2ui catalogs into a single combined catalog.
 *
 * @param {string} id Unique catalog identifier
 * @param  {...Catalog} catalogs Catalogs to merge
 * @returns {Catalog} Merged catalog
 */
export function mergeCatalogs(id, ...catalogs) {
  const mergedComponents = [];
  const mergedFunctions = [];
  for (const cat of catalogs) {
    if (cat.components) {
      mergedComponents.push(...cat.components.values());
    }
    if (cat.functions) {
      mergedFunctions.push(...cat.functions.values());
    }
  }
  return new Catalog(id, mergedComponents, mergedFunctions);
}

/**
 * Combined catalog of basic A2UI components and EOxElements custom catalog.
 */
export const combinedCatalog = mergeCatalogs(
  `https://eox-a.github.io/EOxElements/a2ui/${urlVersion}/combined_catalog.json`,
  basicCatalog,
  eoxCatalog,
);
