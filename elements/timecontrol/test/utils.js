import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

/**
 * Transforms a date string into a UTC-adjusted date string.
 * This helper is used in tests to ensure that date assertions match
 * the component's UTC-based display regardless of the local timezone.
 *
 * @param {string} dateString - The original date string (e.g., from STORY_ARGS)
 * @returns {string} The date part of the UTC representation (YYYY-MM-DD)
 */
export const getDate = (dateString, format = "YYYY-MM-DD", isUTC = false) => {
  return isUTC
    ? dayjs(dateString).utc().format(format)
    : dayjs(dateString).format(format);
};
