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

  let parsedInitDate = initDate;
  if (typeof parsedInitDate === "string") {
    const trimmed = parsedInitDate.trim();
    if (
      (trimmed.startsWith("[") && trimmed.endsWith("]")) ||
      (trimmed.startsWith("{") && trimmed.endsWith("}"))
    ) {
      try {
        parsedInitDate = JSON.parse(trimmed);
      } catch {
        // retain original string if JSON parsing fails
      }
    }
  }

  let rawVal = Array.isArray(parsedInitDate)
    ? parsedInitDate[0]
    : parsedInitDate;
  if (!rawVal) {
    return null;
  }

  let start, end;

  if (rawVal === "first" || rawVal === "last") {
    if (items && items.length) {
      const sorted = [...items].sort((a, b) => {
        const dateA = a.utc || a.date || a.start;
        const dateB = b.utc || b.date || b.start;
        return new Date(dateA).getTime() - new Date(dateB).getTime();
      });
      const targetItem =
        rawVal === "first" ? sorted[0] : sorted[sorted.length - 1];
      const targetUtc = targetItem?.utc || targetItem?.date;
      if (!targetUtc) {
        return null;
      }
      const utc = dayjs(targetUtc);
      start = showUTC ? utc.utc().format() : utc.format();
      end = showUTC
        ? utc.utc().endOf("day").format()
        : utc.endOf("day").format();
    } else {
      return null;
    }
  } else if (Array.isArray(parsedInitDate) && parsedInitDate.length >= 2) {
    [start, end] = parsedInitDate;
  } else {
    start = end = rawVal;
  }

  const startDayjs = dayjs(start);
  const endDayjs = dayjs(end);
  if (Number.isNaN(startDayjs.unix()) || Number.isNaN(endDayjs.unix())) {
    return null;
  }

  start = showUTC ? startDayjs.utc().format() : startDayjs.format();
  end = showUTC
    ? endDayjs.utc().endOf("day").format()
    : endDayjs.endOf("day").format();

  return [start, end];
}
