/**
 * Dispatches datetime updates from layer datetime to the layercontrol
 * @param {CustomEvent} evt
 * @param {HTMLElement} element
 */
export function handleDatetimeUpdate(evt, element) {
  const { datetime, layer } = evt.detail || {};
  if (layer && datetime) {
    const sliceMap = layer.get("_geozarrSliceMap");
    if (sliceMap && datetime in sliceMap) {
      const sliceIndex = sliceMap[datetime];
      const source = layer.getSource ? layer.getSource() : null;
      if (source && typeof source.updateDimensions === "function") {
        source.updateDimensions({ time: sliceIndex });
      }
    }
  }
  element.dispatchEvent(
    new CustomEvent("datetime:updated", { detail: evt.detail, bubbles: true }),
  );
}
