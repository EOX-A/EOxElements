import { onDrawEndMethod } from "./";

/**
 * Initializes the draw layer, interacts with the map, and returns map instances.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @returns {{EoxMap: import("@eox/map/main").EOxMap, OlMap: import("ol").Map}} - The map instances.
 */
const initDrawLayerMethod = (EoxDrawTool) => {
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
  });

  EoxDrawTool.draw = /** @type {import("ol/interaction").Draw} */ (
    /** @type {unknown} */ (EoxMap.interactions["drawInteraction"])
  );
  EoxDrawTool.modify = /** @type {import("ol/interaction").Modify} */ (
    /** @type {unknown} */ (EoxMap.interactions["drawInteractionmodify"])
  );
  EoxDrawTool.draw?.on("drawend", () => onDrawEndMethod(EoxDrawTool));
  EoxDrawTool.modify?.on("modifyend", () => EoxDrawTool.emitDrawnFeatures());

  return { EoxMap, OlMap };
};

export default initDrawLayerMethod;
