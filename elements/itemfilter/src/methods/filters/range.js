import { resetFilter, isDate } from "../../helpers/index.js";
import dayjs from "dayjs";
import { html } from "lit";
import { DATE_TIME_FORMAT } from "../../enums/index.js";

/**
 * Resets the range filter to its default state and requests an update.
 *
 * @param {import("../../components/filters/range.js").EOxItemFilterRange} EOxItemFilterRange - The EOxItemFilterRange component instance.
 */
export function resetRangeMethod(EOxItemFilterRange) {
  resetFilter(EOxItemFilterRange.filterObject);
  if (EOxItemFilterRange.filterObject) {
    const min = EOxItemFilterRange.filterObject.min;
    const max = EOxItemFilterRange.filterObject.max;

    /**
     * @type {import("@eox/timecontrol").EOxTimeControl}
     */
    const eleTimeControl = EOxItemFilterRange.querySelector("eox-timecontrol");
    if (eleTimeControl) {
      eleTimeControl.dateChange(
        [dayjs(min).format(), dayjs(max).format()],
        eleTimeControl,
      );
    }

    /**
     * @type {import("toolcool-range-slider").RangeSlider}
     */
    const eleTCRangeSlider =
      EOxItemFilterRange.querySelector("tc-range-slider");
    if (eleTCRangeSlider) {
      if (eleTCRangeSlider.value1 !== min) eleTCRangeSlider.value1 = min;
      if (eleTCRangeSlider.value2 !== max) eleTCRangeSlider.value2 = max;
    }
  }
  EOxItemFilterRange.requestUpdate();
}

/**
 * Handles input changes for the range filter and updates the filter state accordingly.
 *
 * @param {CustomEvent} evt - The input event that triggers the update.
 * @param {Object} EOxItemFilterRange - The EOxItemFilterRange component instance.
 */
export function rangeInputHandlerMethod(evt, EOxItemFilterRange) {
  const parseVal = (val) => {
    return isDate(EOxItemFilterRange.filterObject)
      ? dayjs(val).valueOf()
      : parseFloat(val);
  };

  const min = parseVal(evt.detail.values[0]);
  const max = parseVal(evt.detail.values[1]);

  const currentMin = parseVal(EOxItemFilterRange.filterObject.state.min);
  const currentMax = parseVal(EOxItemFilterRange.filterObject.state.max);

  const filterMin = parseVal(EOxItemFilterRange.filterObject.min);
  const filterMax = parseVal(EOxItemFilterRange.filterObject.max);

  let isEqualMin, isEqualMax;
  let isEqualCurrentMin, isEqualCurrentMax;

  if (isDate(EOxItemFilterRange.filterObject)) {
    isEqualMin = dayjs(min).isSame(dayjs(filterMin), "day");
    isEqualMax = dayjs(max).isSame(dayjs(filterMax), "day");
    isEqualCurrentMin = dayjs(min).isSame(dayjs(currentMin), "day");
    isEqualCurrentMax = dayjs(max).isSame(dayjs(currentMax), "day");
  } else {
    isEqualMin = min === filterMin;
    isEqualMax = max === filterMax;
    isEqualCurrentMin = min === currentMin;
    isEqualCurrentMax = max === currentMax;
  }

  // If the new values are the same as the current state, do nothing
  if (isEqualCurrentMin && isEqualCurrentMax) {
    return;
  }

  // Update the state with the new min and max values
  [
    EOxItemFilterRange.filterObject.state.min,
    EOxItemFilterRange.filterObject.state.max,
  ] = [min, max];

  if (isEqualMin && isEqualMax) {
    delete EOxItemFilterRange.filterObject.dirty;
    delete EOxItemFilterRange.filterObject.stringifiedState;
  } else {
    EOxItemFilterRange.filterObject.dirty = true;
  }

  if (EOxItemFilterRange.filterObject.dirty) {
    EOxItemFilterRange.filterObject.stringifiedState =
      EOxItemFilterRange.filterObject.format === "date"
        ? `${dayjs(min).format(DATE_TIME_FORMAT)} - ${dayjs(max).format(DATE_TIME_FORMAT)}`
        : `${min} - ${max}`;
  }

  EOxItemFilterRange.dispatchEvent(new CustomEvent("filter"));

  // Reset the component if the state matches the original min and max values, otherwise request an update
  if (isEqualMin && isEqualMax) {
    EOxItemFilterRange.reset();
  } else {
    EOxItemFilterRange.requestUpdate();
  }
}

/**
 * Generates the HTML for the range labels, formatted as dates if necessary.
 *
 * @param {number|string} val - The value of the range label.
 * @param {string} pos - The position of the range label (e.g., "min" or "max").
 * @param {Object} EOxItemFilterRange - The EOxItemFilterRange component instance.
 * @returns {import("lit").HTMLTemplateResult}
 */
export function rangeLabelMethod(val, pos, EOxItemFilterRange) {
  const filteredVal = EOxItemFilterRange.filterObject.state[val];
  const label = isDate(EOxItemFilterRange.filterObject)
    ? dayjs(filteredVal).format(DATE_TIME_FORMAT)
    : filteredVal;
  return html`<div class="range-${pos}">${label}</div>`;
}
