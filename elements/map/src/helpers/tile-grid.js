import { createXYZ } from "ol/tilegrid";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { getTopLeft, getWidth } from "ol/extent";
import { get as getProjection } from "ol/proj";

/**
 * @typedef {import("../../types").EoxLayer} EoxLayer
 * */

/**
 * Generates a tile grid for the specified layer. If the layer's source type is "WMTS",
 * a `WMTSTileGrid` is generated. Otherwise, an `XYZ` tile grid is generated using the
 * OpenLayers `createXYZ` function. Returns `undefined` if the layer's tile grid is not defined.
 *
 * @param {EoxLayer} layer - The layer configuration object, containing source and tile grid information.
 * @returns {import("ol/tilegrid/WMTS").default | import("ol/tilegrid/TileGrid").default | undefined} - The generated tile grid or `undefined` if not applicable.
 */
export function generateTileGrid(layer) {
  let tileGrid;

  // Return undefined if no tile grid is defined in the layer's source
  if (!layer.source?.tileGrid) {
    return undefined;
  }

  // Return undefined if no tile grid is defined in the layer's source
  if (layer.source.tileGrid) {
    // Return undefined if no tile grid is defined in the layer's source
    if (layer.source.type === "WMTS") {
      // Return undefined if no tile grid is defined in the layer's source
      const projection = getProjection("EPSG:3857");
      const projectionExtent = projection.getExtent();

      // Calculate the size of the tiles based on the extent and desired resolution
      const size = getWidth(projectionExtent) / 128;

      // Calculate the size of the tiles based on the extent and desired resolution
      const resolutions = new Array(19);
      const matrixIds = new Array(19);

      for (let z = 0; z < 19; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions[z] = size / Math.pow(2, z);
        matrixIds[z] = z;
      }

      // Create a new WMTSTileGrid using the calculated resolutions and matrix IDs
      tileGrid = new WMTSTileGrid({
        resolutions: resolutions,
        origin: getTopLeft(projectionExtent),
        projection: layer.source.tileGrid.projection || "EPSG:3857",
        matrixIds: matrixIds,
        ...layer.source.tileGrid,
      });
    } else {
      // For non-WMTS sources, generate an XYZ tile grid
      tileGrid = createXYZ({
        ...layer.source.tileGrid,
      });
    }
  }

  // Return the generated tile grid
  return tileGrid;
}
