import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(customParseFormat);

/**
 * Commits a strictly formatted date or date range on blur or Enter.
 * Invalid or unchanged text is restored without updating the parent or emitting events
 *
 * @param {HTMLInputElement} input - The edited date input
 * @param {import("../../types").DateRange} selectedDateRange - Last accepted range
 * @param {string} formattedDate - Last accepted range in the current display format
 * @param {import("../../components/timecontrol-date").EOxTimeControlDate} EOxTimeControlDate - Date component instance
 * @returns {void}
 */
export default function commitInputMethod(
  input,
  selectedDateRange,
  formattedDate,
  EOxTimeControlDate,
) {
  const EOxTimeControl = EOxTimeControlDate.getEOxTimeControl();
  const value = input.value;
  if (
    !EOxTimeControlDate.editable ||
    !EOxTimeControl ||
    value === formattedDate
  ) {
    input.value = formattedDate;
    return;
  }

  const format = EOxTimeControlDate.format;
  const parse = (text) =>
    EOxTimeControl.showUTC
      ? dayjs.utc(text, format, true)
      : dayjs(text, format, true);

  let start = parse(value);
  let end = start.endOf("day");

  if (!start.isValid()) {
    // Try each range separator so a literal " - " inside the format still works.
    for (
      let index = value.indexOf(" - ");
      index >= 0;
      index = value.indexOf(" - ", index + 3)
    ) {
      const rangeStart = parse(value.slice(0, index));
      const rangeEnd = parse(value.slice(index + 3));
      if (rangeStart.isValid() && rangeEnd.isValid()) {
        start = rangeStart;
        const hasTime = /[HhmsS]/.test(format.replace(/\[[^\]]*\]/g, ""));
        end = hasTime ? rangeEnd : rangeEnd.endOf("day");
        break;
      }
    }
  }

  if (!start.isValid() || !end.isValid() || end.isBefore(start)) {
    input.value = formattedDate;
    return;
  }

  if (start.isSame(selectedDateRange[0]) && end.isSame(selectedDateRange[1])) {
    input.value = formattedDate;
    return;
  }

  EOxTimeControl.dateChange(
    [start.utc().toISOString(), end.utc().toISOString()],
    EOxTimeControl,
  );
}
