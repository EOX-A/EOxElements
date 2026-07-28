import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Converts a local date to a UTC date.
 * @param {string} date - The local date to convert.
 * @param {boolean} showUTC - Whether to show the UTC date.
 * @returns {string} The UTC date.
 */
export default function getWrongLocalFormatToUTCFormat(date, showUTC = false) {
  const localFormat = "YYYY-MM-DD HH:mm:ss";
  const dateTime = showUTC
    ? dayjs(date).utc().format(localFormat)
    : dayjs(date).format(localFormat);
  return dayjs.utc(dateTime, localFormat).format();
}
