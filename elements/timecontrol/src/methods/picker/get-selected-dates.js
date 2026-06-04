import { TIME_CONTROL_DATE_FORMAT } from "../../enums";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../../types").DateRange} DateRange
 * @typedef {import("../../types").SelectedDates} SelectedDates
 */

/**
 * Converts a selected date range into a format suitable for the calendar picker component.
 * Extracts the dates, year, and month from the date range for calendar initialization.
 *
 * @param {DateRange | null} selectedDateRange - The selected date range as [startDate, endDate] in ISO format, or null.
 * @param {boolean} range - Whether range selection is enabled. If true, returns both start and end dates; if false, returns only the start date.
 * @param {boolean} showUTC - Whether to show UTC dates.
 * @returns {SelectedDates | null} An object containing the formatted dates array, year, and month, or null if no date range is provided.
 */
export default function getSelectedDatesMethod(
  selectedDateRange,
  range,
  showUTC,
) {
  if (!selectedDateRange || !selectedDateRange[0]) return null;
  const start = showUTC
    ? dayjs(selectedDateRange[0]).utc()
    : dayjs(selectedDateRange[0]);

  const selectedDates = [];

  // If a range is requested and the end date is provided, fill in all days
  if (range && selectedDateRange[1]) {
    const end = showUTC
      ? dayjs(selectedDateRange[1]).utc()
      : dayjs(selectedDateRange[1]);

    let current = start;
    while (!current.isAfter(end, "day")) {
      selectedDates.push(current.format(TIME_CONTROL_DATE_FORMAT));
      current = current.add(1, "day");
    }
  } else {
    // Fallback if it's a single date selection or the user hasn't clicked the second date yet
    selectedDates.push(start.format(TIME_CONTROL_DATE_FORMAT));
  }

  return {
    dates: selectedDates,
    year: start.year(),
    month: /** @type {0 | 1 | 10 | 11 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9} */ (
      start.month()
    ),
  };
}
