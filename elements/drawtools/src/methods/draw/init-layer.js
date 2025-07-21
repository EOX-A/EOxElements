import { onDrawEndMethod, initSelection } from "./";

import { getElement } from "@eox/elements-utils";
import { exitSelection } from "./handle-layer-id";

/**
 * Initializes the draw layer, interacts with the map, and returns map instances.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {Boolean} multipleFeatures - Allow adding more than one feature at a time
 */
const initLayerMethod = (EoxDrawTool, multipleFeatures) => {
  const mapQuery = getElement(EoxDrawTool.for);

  const EoxMap = /** @type {import("@eox/map").EOxMap} */ (mapQuery);

  const OlMap = EoxMap.map;

  const primaryColor = "0, 65, 112";

  EoxDrawTool.drawLayer = EoxMap.addOrUpdateLayer({
    zIndex: 100,
    type: "Vector",
    properties: {
      id: "drawLayer",
      layerControlHide: true,
      isDrawingEnabled: false,
      multipleFeatures: multipleFeatures,
    },
    source: {
      type: "Vector",
    },
    style: EoxDrawTool.featureStyles?.["layer"] || {
      "fill-color": `rgba(${primaryColor}, 0.1)`,
      "stroke-color": `rgba(${primaryColor}, 1)`,
      "stroke-width": 2,
      "circle-radius": 5,
      "circle-fill-color": `rgba(${primaryColor}, 1)`,
    },
    interactions: [
      {
        type: "draw",
        options: {
          active: false,
          id: "drawInteraction",
          type: EoxDrawTool.type,
          modify: EoxDrawTool.allowModify,
          stopClick: true,
          style: EoxDrawTool.featureStyles?.["layer"] || {
            "fill-color": `rgba(${primaryColor}, 0.1)`,
            "stroke-color": `rgba(${primaryColor}, 1)`,
            "stroke-width": 1,
            "stroke-line-dash": [7, 3],
            "circle-radius": 5,
            "circle-fill-color": `rgba(${primaryColor}, 1)`,
          },
        },
      },
      {
        type: "select",
        options: {
          id: "SelectLayerHoverInteraction",
          condition: "pointermove",
          style: EoxDrawTool.featureStyles?.["hover"] || {
            "fill-color": `rgba(${primaryColor}, 0.2)`,
            "stroke-color": `rgba(${primaryColor}, 1)`,
            "stroke-width": 2,
          },
          tooltip: false,
        },
      },
      {
        type: "select",
        options: {
          id: "SelectLayerClickInteraction",
          condition: "click",
          panIn: true,
          style: EoxDrawTool.featureStyles?.["click"] || {
            "fill-color": `rgba(${primaryColor}, 0.2)`,
            "stroke-color": `rgba(${primaryColor}, 1)`,
            "stroke-width": 2,
          },
        },
      },
    ],
  });

  EoxDrawTool.draw = /** @type {import("ol/interaction").Draw} */ (
    /** @type {unknown} */ (EoxMap.interactions["drawInteraction"])
  );

  EoxDrawTool.modify = /** @type {import("ol/interaction").Modify} */ (
    /** @type {unknown} */ (EoxMap.interactions["drawInteractionmodify"])
  );

  // Initialize selection interactions
  initSelection(EoxDrawTool, EoxMap, EoxDrawTool.layerId);
  const onModifyEnd = () => EoxDrawTool.onModifyEnd();
  const onAddFeatures = () => onDrawEndMethod(EoxDrawTool);

  EoxDrawTool.modify?.on("modifyend", onModifyEnd);

  EoxMap.addEventListener("addfeatures", onAddFeatures);

  if (EoxDrawTool.drawnFeatures) {
    EoxDrawTool.drawLayer.getSource().addFeatures(EoxDrawTool.drawnFeatures);
  }

  /**
   * Resets the draw layer, cleaning up interactions and listeners.
   *
   * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
   */
  const reset = (EoxDrawTool) => {
    if (!EoxDrawTool.eoxMap || !EoxDrawTool.drawLayer) {
      return;
    }

    // Remove the layer from the map
    EoxDrawTool.drawLayer.getSource().clear();
    EoxDrawTool.eoxMap.map.removeLayer(EoxDrawTool.drawLayer);
    EoxDrawTool.modify?.un("modifyend", onModifyEnd);
    EoxDrawTool.eoxMap.removeEventListener("addfeatures", onAddFeatures);

    // Clean up references
    // EoxDrawTool.drawLayer = null;
    EoxDrawTool.draw = null;
    EoxDrawTool.modify = null;
    if (EoxDrawTool.layerId) {
      exitSelection(EoxDrawTool, EoxDrawTool.eoxMap);
    }
  };

  return { EoxMap, OlMap, reset };
};
export default initLayerMethod;
