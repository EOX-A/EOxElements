import { createXYZ } from "ol/tilegrid";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { getTopLeft, getWidth } from "ol/extent";
import { get as getProjection } from "ol/proj";

/**
 * Generates a tile grid for the specified source. If the source type is "WMTS",
 * a `WMTSTileGrid` is generated. Otherwise, an `XYZ` tile grid is generated using the
 * OpenLayers `createXYZ` function. Returns `undefined` if the layer's tile grid is not defined.
 *
 * @param {import("../layers").EoxSource<any>} source - The source configuration object, containing the tile grid information.
 * @returns {import("ol/tilegrid/WMTS").default | import("ol/tilegrid/TileGrid").default | undefined} - The generated tile grid or `undefined` if not applicable.
 */
export function generateTileGrid(source) {
  let tileGrid;

  // Return undefined if no tile grid is defined in the source
  if (!source || !("tileGrid" in source)) {
    return undefined;
  }

  if (source.type === "WMTS") {
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
      // @ts-expect-error - 'projection' not specified inside WMTS.d.ts types
      projection: source.tileGrid.projection || "EPSG:3857",
      matrixIds: matrixIds,
      ...source.tileGrid,
    });
  } else {
    // For non-WMTS sources, generate an XYZ tile grid
    tileGrid = createXYZ({
      ...source.tileGrid,
    });
  }

  // Return the generated tile grid
  return tileGrid;
}
