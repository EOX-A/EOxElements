import { TIME_CONTROL_DATE_FORMAT } from "../../enums";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 *
 * @param {*} selectedDateRange
 * @param {*} range
 * @returns {{dates: string[], year: number, month: 0 | 1 | 10 | 11 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}}
 */
export default function getSelectedDatesMethod(selectedDateRange, range) {
  if (!selectedDateRange) return null;
  const start = dayjs(selectedDateRange[0]);
  const end = dayjs(selectedDateRange[1]);
  const startDateFormatted = start.format(TIME_CONTROL_DATE_FORMAT);
  const endDateFormatted = end.format(TIME_CONTROL_DATE_FORMAT);
  const selectedDates = range
    ? [startDateFormatted, endDateFormatted]
    : [startDateFormatted];

  return {
    dates: selectedDates,
    year: start.year(),
    month: /** @type {0 | 1 | 10 | 11 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9} */ (
      start.month()
    ),
  };
}
