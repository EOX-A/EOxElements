/**
 * Default selected option
 * @param {string} id
 * @param {"click" | "pointermove"} condition
 * @param {Boolean} panIn
 * @returns {import("../../map/src/select").SelectOptions}
 */
export const getDefaultSelectedOption = (id, condition, panIn = false) => {
  return {
    id,
    condition,
    panIn,
    layer: {
      type: "Vector",
      properties: {
        id: "selectLayer",
      },
      source: {
        type: "Vector",
      },
      style: {
        "fill-color": "rgba(51, 153, 204,0.5)",
        "stroke-color": "#3399CC",
        "stroke-width": 2.5,
      },
    },
  };
};
