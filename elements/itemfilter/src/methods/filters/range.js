import { resetFilter } from "../../helpers/index.js";
import dayjs from "dayjs";
import { html } from "lit";

/**
 * Resets the range filter to its default state and requests an update.
 *
 * @param {import("../../components/filters/range.js").EOxItemFilterRange} EOxItemFilterRange - The EOxItemFilterRange component instance.
 */
export function resetRangeMethod(EOxItemFilterRange) {
  EOxItemFilterRange.filterObject = resetFilter(
    EOxItemFilterRange.filterObject,
  );
  if (EOxItemFilterRange.filterObject) {
    const eleTCRangeSlider =
      EOxItemFilterRange.querySelector("tc-range-slider");
    const min = EOxItemFilterRange.filterObject.min;
    const max = EOxItemFilterRange.filterObject.max;
    if (eleTCRangeSlider.value1 !== min) eleTCRangeSlider.value1 = min;
    if (eleTCRangeSlider.value2 !== max) eleTCRangeSlider.value2 = max;
  }
  EOxItemFilterRange.requestUpdate();
}

/**
 * Handles input changes for the range filter and updates the filter state accordingly.
 *
 * @param {Event} evt - The input event that triggers the update.
 * @param {Object} EOxItemFilterRange - The EOxItemFilterRange component instance.
 */
export function rangeInputHandlerMethod(evt, EOxItemFilterRange) {
  const [min, max] = evt.detail.values;

  // Check if the new min and max values are different from the current state
  if (
    min !== EOxItemFilterRange.filterObject.state.min ||
    max !== EOxItemFilterRange.filterObject.state.max
  ) {
    // Update the state with the new min and max values
    [
      EOxItemFilterRange.filterObject.state.min,
      EOxItemFilterRange.filterObject.state.max,
    ] = [min, max];
    EOxItemFilterRange.filterObject.dirty = true;
  }

  if (EOxItemFilterRange.filterObject.dirty) {
    EOxItemFilterRange.filterObject.stringifiedState =
      EOxItemFilterRange.filterObject.format === "date"
        ? `${dayjs.unix(min).format("ddd, D MMM YYYY HH:mm:ss")} - ${dayjs.unix(max).format("ddd, D MMM YYYY HH:mm:ss")}`
        : `${min} - ${max}`;
  }

  EOxItemFilterRange.dispatchEvent(new CustomEvent("filter"));

  // Reset the component if the state matches the original min and max values, otherwise request an update
  if (
    min === EOxItemFilterRange.filterObject.min &&
    max === EOxItemFilterRange.filterObject.max
  )
    EOxItemFilterRange.reset();
  else EOxItemFilterRange.requestUpdate();
}

/**
 * Generates the HTML for the range labels, formatted as dates if necessary.
 *
 * @param {number|string} val - The value of the range label.
 * @param {string} pos - The position of the range label (e.g., "min" or "max").
 * @param {Object} EOxItemFilterRange - The EOxItemFilterRange component instance.
 * @returns {TemplateResult<1>} The HTML template for the range label.
 */
export function rangeLabelMethod(val, pos, EOxItemFilterRange) {
  const isDate = Boolean(EOxItemFilterRange.filterObject.format === "date");
  const filteredVal = EOxItemFilterRange.filterObject.state[val];
  const label = isDate
    ? dayjs.unix(filteredVal).format("ddd, D MMM YYYY HH:mm:ss")
    : filteredVal;
  return html`<div class="range-${pos}">${label}</div>`;
}
