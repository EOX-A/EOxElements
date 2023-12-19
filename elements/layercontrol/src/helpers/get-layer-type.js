/**
 * Tries to infer the layer type based on certain properties without direct dependency on OL.
 *
 * @param {import("ol/layer").Layer | import("ol/layer").Group} layer - The layer or layer group.
 * @param {import("ol").Map} map - The OL map instance.
 * @returns {string|undefined} - The inferred layer type: "group", "draw", "vector", "raster", or undefined if not determinable.
 */
export default function getLayerType(layer, map) {
  // Unable to determine layer type without necessary objects
  if (!layer || !map) return undefined;

  // Check if the layer is a group
  // @ts-ignore
  if (layer.getLayers) return "group"; // Identified as a layer group

  // Attempt to infer based on other properties
  const interactions = map.getInteractions().getArray();

  // Filter interactions for drawing - assuming freehand_ property as an indicator
  const isDrawing = interactions
    // @ts-ignore
    .filter((i) => i.freehand_ !== undefined)
    // @ts-ignore
    .map((i) => i.source_)
    // @ts-ignore
    ?.ol_uid?.includes(
      // @ts-ignore
      layer.getSource ? layer.getSource()?.ol_uid : undefined
    );

  if (isDrawing) return "draw";
  // @ts-ignore
  else if (layer.declutter_ !== undefined) return "vector";
  else return "raster";
}
