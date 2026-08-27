import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../types").DateRange} DateRange
 */

/**
 * Gets the initial date range from the initDate property.
 * @param {DateRange | string | Array<string>} initDate - The initial date range, date string, or keyword ("first" | "last").
 * @param {Array<any>} [items] - The available timeline items array.
 * @param {boolean} [showUTC=false] - Whether to return the date range in UTC format.
 * @returns {DateRange | null} The initial date range as [startDate, endDate] in ISO format.
 */
export default function getInitDate(initDate, items, showUTC = false) {
  if (!initDate) {
    return null;
  }

  let rawVal = Array.isArray(initDate) ? initDate[0] : initDate;
  if (!rawVal) {
    return null;
  }

  let start, end;

  if (rawVal === "first" || rawVal === "last") {
    if (items && items.length) {
      const utc = dayjs(
        rawVal === "first" ? items[0].utc : items[items.length - 1].utc,
      );
      start = showUTC ? utc.utc().format() : utc.format();
      end = showUTC
        ? utc.utc().endOf("day").format()
        : utc.endOf("day").format();
    } else {
      return null;
    }
  } else if (Array.isArray(initDate) && initDate.length >= 2) {
    [start, end] = initDate;
  } else {
    start = end = rawVal;
  }

  start = dayjs(start).utc().format();
  end = dayjs(end).endOf("day").utc().format();

  return [start, end];
}
