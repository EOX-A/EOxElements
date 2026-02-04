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
 * @param {DateRange} initDate - The initial date range as [startDate, endDate] in ISO format.
 * @returns {DateRange | null} The initial date range as [startDate, endDate] in ISO format.
 */
export default function getInitDate(initDate) {
  if (!Array.isArray(initDate) || !initDate.length) {
    return null;
  }

  let start, end;

  if (initDate.length < 2) {
    start = end = initDate[0];
  } else {
    [start, end] = initDate;
  }

  start = dayjs(start).utc().format();
  end = dayjs(end).endOf("day").utc().format();

  return [start, end];
}
