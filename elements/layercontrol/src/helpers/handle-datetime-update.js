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
 */
export function handleDatetimeUpdate(evt, element) {
  dispatchElementEvent(element, "datetime:updated", {
    detail: evt.detail,
    activity: true,
    action: "datetime:updated",
  });
}
