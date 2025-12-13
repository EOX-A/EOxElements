import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import { updateRangeElements } from "./index.js";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../../types").DateRange} DateRange
 */

/**
 * Sets the date range on the timeline by adding or updating custom time markers for the start and end dates.
 * Updates the range elements display after setting the dates.
 *
 * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
 * @param {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 */
export default function setDateRangeMethod(dateRange, EOxTimeControlTimeline) {
  try {
    EOxTimeControlTimeline.visTimeline.removeCustomTime("multi-select-start");
  } catch {
    /** catch */
  }
  try {
    EOxTimeControlTimeline.visTimeline.removeCustomTime("multi-select-end");
  } catch {
    /** catch */
  }
  try {
    EOxTimeControlTimeline.visTimeline.addCustomTime(
      dayjs(dateRange[0]).toDate(),
      "multi-select-start",
    );
  } catch {
    /** catch */
  }
  try {
    EOxTimeControlTimeline.visTimeline.addCustomTime(
      dayjs(dateRange[1]).toDate(),
      "multi-select-end",
    );
  } catch {
    /** catch */
  }
  setTimeout(() => {
    updateRangeElements(EOxTimeControlTimeline);
  });
}
