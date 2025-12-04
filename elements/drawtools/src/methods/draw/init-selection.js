/**
 * Initializes the selection interactions for the given layer ID to the DrawTool.
 *
 * @param {import('../../main').EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {import("@eox/map").EOxMap} EoxMap - The map instance.
 * @param {string} layerId - The ID of the layer to initialize selection for.
 */
const initSelection = (EoxDrawTool, EoxMap, layerId) => {
  if (!layerId || !EoxMap) {
    return;
  }

  const olLayer = EoxMap.map.getAllLayers().find((lyr) => lyr.get("id")?.startsWith(layerId));
  const selectionLayer = olLayer
    ? /** @type {import("@eox/map").EoxLayer} */ (
        JSON.parse(JSON.stringify(olLayer.get("_jsonDefinition")))
      )
    : null;

  if (!selectionLayer) {
    console.error(`Layer with id ${layerId} not found`);
    return;
  }

  /** @type {import("@eox/map/src/types").EOxInteraction} */
  const hoverInteraction = {
    type: "select",
    active: false,
    options: {
      id: "SelectLayerHoverInteraction",
      condition: "pointermove",
      active: false,
      style: EoxDrawTool.featureStyles?.["hover"] || {
        "fill-color": "rgba(0, 0, 0,0.0)",
        "stroke-color": "#3399CC",
        "stroke-width": 2.5,
      },
    },
  };

  /** @type {import("@eox/map/src/types").EOxInteraction} */
  const clickInteraction = {
    type: "select",
    options: {
      id: "SelectLayerClickInteraction",
      condition: "click",
      multi: EoxDrawTool.multipleFeatures,
      modify: EoxDrawTool.allowModify,
      active: false,
      style: EoxDrawTool.featureStyles?.["click"] || {
        "fill-color": "rgba(0, 0, 0,0.0)",
        "stroke-color": "rgba(0, 0, 0,0.0)",
      },
    },
  };

  selectionLayer.interactions = [hoverInteraction, clickInteraction];

  EoxMap.addOrUpdateLayer(selectionLayer);
  // replace the layer with the new interactions without triggering the map to update
  replaceLayer(EoxMap.layers, layerId, [selectionLayer]);

  const oldDrawInteraction = EoxDrawTool.draw;
  EoxDrawTool.draw = EoxMap.selectInteractions["SelectLayerClickInteraction"];

  oldDrawInteraction?.setActive(false);
  EoxMap.selectInteractions["SelectLayerClickInteraction"]?.setActive(false);
  EoxMap.selectInteractions["SelectLayerHoverInteraction"]?.setActive(false);
};

export default initSelection;

/**
 * Removes the layer with the id provided and injects an array of layers in its position
 * @param {import('@eox/map').EoxLayer[]} currentLayers
 * @param {string} oldLayer - id of the layer to be replaced
 * @param {import('@eox/map').EoxLayer[]} newLayers - array of layers to replace the old layer
 */
function replaceLayer(currentLayers, oldLayer, newLayers) {
  const oldLayerIdx = currentLayers.findIndex(
    (l) => l.properties.id === oldLayer,
  );

  if (oldLayerIdx !== -1) {
    currentLayers.splice(oldLayerIdx, 1, ...newLayers);
    return currentLayers;
  }

  for (const l of currentLayers) {
    if (l.type === "Group") {
      const updatedGroupLyrs = replaceLayer(l.layers, oldLayer, newLayers);
      if (updatedGroupLyrs?.length) {
        l.layers = updatedGroupLyrs;
      }
    }
  }
  return currentLayers;
}
