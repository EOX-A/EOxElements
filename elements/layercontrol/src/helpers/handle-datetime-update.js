/**
 * Dispatches datetime updates from layer datetime to the layercontrol
 * @param {CustomEvent} evt
 * @param {HTMLElement} element
 */
export function handleDatetimeUpdate(evt, element) {

  element.dispatchEvent(
    new CustomEvent("datetime:updated", { detail: evt.detail, bubbles: true }),
  );
}
