/**
 * Starts the drawing method by initializing the draw layer,
 * activating drawing, and requesting an update.
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
export const startDrawingMethod = (EoxDrawTool) => {
  const initializeDrawing = () => {
    EoxDrawTool.initDrawLayer();
    EoxDrawTool.draw.setActive(true);
  };

  const updateDrawingStatus = () => {
    EoxDrawTool.currentlyDrawing = true;
    EoxDrawTool.requestUpdate();
  };

  initializeDrawing();
  updateDrawingStatus();
};

/**
 * Discards drawing on the map, resets drawing interactions and features,
 * clears the source, and triggers updates.
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {import("../../../map/main").EOxMap} EoxMap - The map instance.
 * @param {import("ol").Map} OlMap - The OL map instance.
 */
export const discardDrawingMethod = (EoxDrawTool, EoxMap, OlMap) => {
  const discardDrawing = () => {
    EoxDrawTool.drawnFeatures = [];
    EoxDrawTool.draw.setActive(false);
    EoxDrawTool.drawLayer.getSource().clear();
    EoxMap.removeInteraction("drawInteraction");
    OlMap.removeLayer(EoxDrawTool.drawLayer);
  };

  const triggerUpdates = () => {
    emitDrawnFeaturesMethod(EoxDrawTool);
    EoxDrawTool.currentlyDrawing = false;
    EoxDrawTool.requestUpdate();
  };

  discardDrawing();
  triggerUpdates();
};

/**
 * Handles actions after drawing ends -
 * emits drawn features, deactivates drawing, and requests an update.
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
export const onDrawEndMethod = (EoxDrawTool) => {
  const handleDrawEnd = () => {
    emitDrawnFeaturesMethod(EoxDrawTool);
    EoxDrawTool.draw.setActive(false);
    EoxDrawTool.currentlyDrawing = false;
  };

  handleDrawEnd();
  EoxDrawTool.requestUpdate();
};

/**
 * Emits drawn features after a timeout to allow updating drawn features.
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
export const emitDrawnFeaturesMethod = (EoxDrawTool) => {
  const emitFeatures = () => {
    EoxDrawTool.drawnFeatures = EoxDrawTool.drawLayer.getSource().getFeatures();
    EoxDrawTool.requestUpdate();

    EoxDrawTool.dispatchEvent(
      new CustomEvent("drawupdate", {
        detail: EoxDrawTool.drawnFeatures,
      })
    );
  };

  setTimeout(emitFeatures, 0);
};

/**
 * Initializes the draw layer, interacts with the map, and returns map instances.
 *
 * @param {import("../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @returns {{EoxMap: import("@eox/map/main").EOxMap, OlMap: import("ol").Map}} - The map instances.
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
