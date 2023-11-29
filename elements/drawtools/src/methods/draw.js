/**
 * This method helps to handle
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool
 */
export const startDrawingMethod = (EoxDrawTool) => {
  EoxDrawTool.initDrawLayer();
  EoxDrawTool.draw.setActive(true);
  EoxDrawTool.currentlyDrawing = true;
  EoxDrawTool.requestUpdate();
};

/**
 * This method helps to handle when drawing on the map is discarded
 * and reset all the drawing interactions & drawFeature array
 * and clear the
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool
 * @param {import("../../../map/main").EOxMap} EoxMap
 * @param {import("ol").Map} OlMap
 */
export const discardDrawingMethod = (EoxDrawTool, EoxMap, OlMap) => {
  EoxDrawTool.drawnFeatures = [];
  EoxDrawTool.draw.setActive(false);
  EoxDrawTool.drawLayer.getSource().clear();
  EoxMap.removeInteraction("drawInteraction");
  OlMap.removeLayer(EoxDrawTool.drawLayer);
  emitDrawnFeaturesMethod(EoxDrawTool);
  EoxDrawTool.currentlyDrawing = false;
  EoxDrawTool.requestUpdate();
};

/**
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool
 */
export const onDrawEndMethod = (EoxDrawTool) => {
  emitDrawnFeaturesMethod(EoxDrawTool);
  EoxDrawTool.draw.setActive(false);
  EoxDrawTool.currentlyDrawing = false;
  EoxDrawTool.requestUpdate();
};

/**
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool
 */
export const emitDrawnFeaturesMethod = (EoxDrawTool) => {
  setTimeout(() => {
    EoxDrawTool.drawnFeatures = EoxDrawTool.drawLayer.getSource().getFeatures();
    EoxDrawTool.requestUpdate();
    /**
     * Fires whenever features are added, modified or discarded, where the event detail
     * is the `drawnFeatures` array
     * @type Array<import("ol").Feature>
     */
    EoxDrawTool.dispatchEvent(
      new CustomEvent("drawupdate", {
        detail: EoxDrawTool.drawnFeatures,
      })
    );
  }, 0);
};

/**
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool
 * @returns {{EoxMap: import("@eox/map/main").EOxMap, OlMap: import("ol").Map}}
 */
export const initDrawLayerMethod = (EoxDrawTool) => {
  const mapQuery = document.querySelector(EoxDrawTool.for);

  const EoxMap = /** @type {import("@eox/map/main").EOxMap} */ (mapQuery);
  // @ts-ignore
  const OlMap = EoxMap.map;

  // @ts-ignore
  EoxDrawTool.drawLayer = EoxMap.addOrUpdateLayer({
    type: "Vector",
    properties: {
      id: "drawLayer",
      layerControlHide: true,
    },
    source: {
      type: "Vector",
    },
    // check if the drawInteraction has already been added before adding again
    // TEMP/TODO: this should probably be done by the map in the addOrUpdateLayer method
    ...(EoxMap.interactions["drawInteraction"]
      ? {}
      : {
          interactions: [
            {
              type: "draw",
              options: {
                active: false,
                id: "drawInteraction",
                type: EoxDrawTool.type,
                modify: EoxDrawTool.allowModify,
                stopClick: true,
              },
            },
            {
              type: "select",
              options: {
                id: "selectHover",
                condition: "pointermove",
                style: {
                  "fill-color": "rgba(51, 153, 204,0.5)",
                  "stroke-color": "#3399CC",
                  "stroke-width": 2.5,
                },
              },
            },
            {
              type: "select",
              options: {
                id: "selectClick",
                condition: "click",
                panIn: true,
                style: {
                  "fill-color": "rgba(51, 153, 204,0.5)",
                  "stroke-color": "#3399CC",
                  "stroke-width": 2.5,
                },
              },
            },
          ],
        }),
  });

  EoxDrawTool.draw = /** @type {import("ol/interaction").Draw} */ (
    /** @type {unknown} */ (EoxMap.interactions["drawInteraction"])
  );
  EoxDrawTool.modify = /** @type {import("ol/interaction").Modify} */ (
    /** @type {unknown} */ (EoxMap.interactions["drawInteractionmodify"])
  );
  EoxDrawTool.draw?.on("drawend", () => onDrawEndMethod(EoxDrawTool));
  EoxDrawTool.modify?.on("modifyend", () =>
    emitDrawnFeaturesMethod(EoxDrawTool)
  );

  return { EoxMap, OlMap };
};
