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
 * @param {CustomEvent & { isUser?: boolean }} evt
 * @param {HTMLElement} element
 * @param {boolean} [activity=false]
 */
export function handleDatetimeUpdate(evt, element, activity = false) {
  evt.stopPropagation();
  if (!activity) {
    const event = Object.assign(
      new CustomEvent("datetime:updated", {
        detail: evt.detail,
        bubbles: true,
        composed: true,
      }),
      { isUser: evt.isUser === true },
    );
    /**
     * Forwards datetime:updated while preserving attribution without child telemetry.
     */
    element.dispatchEvent(event);
    return;
  }
  /**
   * Fires the public datetime:updated event and activity only for user selections.
   */
  dispatchElementEvent(element, "datetime:updated", {
    detail: evt.detail,
    bubbles: true,
    composed: true,
    activity: evt.isUser === true,
    action: "datetime:updated",
  });
}
