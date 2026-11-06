import { dispatchElementEvent } from "@eox/elements-utils";

/**
 * Moves a sliced layer (e.g. GeoZarr) to the time slice mapped to the given datetime
 * @param {import("ol/layer").Layer} layer
 * @param {string} datetime
 */
export function updateLayerSlice(layer, datetime) {
  const sliceMap = layer.get("layerDatetime")?.sliceMap;
  if (!sliceMap || !(datetime in sliceMap)) return;
  const source = /** @type {any} */ (layer.getSource?.());
  if (typeof source?.updateDimensions !== "function") return;
  source.updateDimensions({ time: sliceMap[datetime] });
}

/**
 * Dispatches datetime updates from layer datetime to the layercontrol
 * @param {CustomEvent} evt
 * @param {HTMLElement} element
 * @param {boolean} [activity=false]
 */
export function handleDatetimeUpdate(evt, element, activity = false) {
  dispatchElementEvent(element, "datetime:updated", {
    detail: evt.detail,
    activity,
    action: "datetime:updated",
  });
}
