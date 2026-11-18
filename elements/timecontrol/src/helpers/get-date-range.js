import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("../types").DateRange} DateRange
 */

/**
 * Get the date range and the start and end dates for the timeline.
 *
 * @param {EOxTimeControl} EOxTimeControl - The EOxTimeControl instance.
 * @param {Array<any>} items - The items array.
 * @param {DateRange | null} initDateRange - The initial date range as [startDate, endDate] in ISO format.
 * @returns {{dateRange: DateRange, start: Date, end: Date}} - The date range and the start and end dates for the timeline.
 */
export default function getDateRange(EOxTimeControl, items, initDateRange) {
  const utc = dayjs(items[items.length - 1].utc);
  const startDate = EOxTimeControl.showUTC ? utc.utc().format() : utc.format();
  const endDate = EOxTimeControl.showUTC
    ? utc.utc().endOf("day").format()
    : utc.endOf("day").format();
  const dateRange =
    initDateRange || /** @type {DateRange} */ ([startDate, endDate]);

  const start = dayjs(dateRange[0]).subtract(30, "day").toDate();
  const end = dayjs(dateRange[0]).add(30, "day").toDate();

  return { dateRange, start, end };
}
