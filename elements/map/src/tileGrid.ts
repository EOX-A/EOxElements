import { createXYZ } from "ol/tilegrid";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { getTopLeft, getWidth } from "ol/extent.js";
import { get as getProjection } from "ol/proj.js";

/**
 * generates a WMTS tile grid for WMTS layers or else an XYZ tile grid, if defined.
 * @param layer
 * @returns {WMTSTileGrid | import("ol/tilegrid/TileGrid").default | undefined}
 */
export function generateTileGrid(layer: import("./generate").EoxLayer) {
  let tileGrid;
  if (!layer.source?.tileGrid) {
    return undefined;
  }

  if (layer.source.tileGrid) {
    if (layer.source.type === "WMTS") {
      const projection = getProjection("EPSG:3857");
      const projectionExtent = projection.getExtent();
      const size = getWidth(projectionExtent) / 128;
      const resolutions = new Array(19);
      const matrixIds = new Array(19);
      for (let z = 0; z < 19; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions[z] = size / Math.pow(2, z);
        matrixIds[z] = z;
      }

      tileGrid = new WMTSTileGrid({
        resolutions: resolutions,
        origin: getTopLeft(projectionExtent),
        // @ts-ignore
        projection: layer.source.tileGrid.projection || "EPSG:3857",
        matrixIds: matrixIds,
        ...layer.source.tileGrid,
      });
    } else {
      tileGrid = createXYZ({
        ...layer.source.tileGrid,
      });
    }
  }
  return tileGrid;
}
