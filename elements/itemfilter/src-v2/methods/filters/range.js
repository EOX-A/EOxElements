import { resetFilter } from "../../helpers/index.js";
import dayjs from "dayjs";
import { html } from "lit";

export function resetRangeMethod(EOxItemFilterRange) {
  resetFilter(EOxItemFilterRange.filterObject);
  EOxItemFilterRange.requestUpdate();
}

export function rangeInputHandlerMethod(evt, EOxItemFilterRange) {
  const [min, max] = evt.detail.values;

  if (
    min !== EOxItemFilterRange.filterObject.state.min ||
    max !== EOxItemFilterRange.filterObject.state.max
  ) {
    [
      EOxItemFilterRange.filterObject.state.min,
      EOxItemFilterRange.filterObject.state.max,
    ] = [min, max];
    EOxItemFilterRange.filterObject.dirty = true;
  }

  if (EOxItemFilterRange.filterObject.dirty)
    EOxItemFilterRange.filterObject.stringifiedState = `${dayjs(min)} - ${dayjs(
      max
    )}`;

  EOxItemFilterRange.dispatchEvent(new CustomEvent("filter"));
  if (
    min === EOxItemFilterRange.filterObject.min &&
    max === EOxItemFilterRange.filterObject.max
  )
    EOxItemFilterRange.reset();
  else EOxItemFilterRange.requestUpdate();
}

export function rangeLabelMethod(val, pos, EOxItemFilterRange) {
  const isDate = Boolean(EOxItemFilterRange.filterObject.format === "date");
  const filteredVal = EOxItemFilterRange.filterObject.state[val];
  const label = isDate ? dayjs.unix(filteredVal) : filteredVal;
  return html`<div class="range-${pos}">${label}</div>`;
}
