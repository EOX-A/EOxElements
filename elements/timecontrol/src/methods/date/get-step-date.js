import dayjs from "dayjs";
import groupBy from "lodash.groupby";
import { TIME_CONTROL_DATE_FORMAT } from "../../enums.js";

/**
 * Resolves the date reached by a navigation step using the same UTC-first,
 * calendar-date fallback for both button availability and navigation.
 *
 * @param {number} step - Number of steps to move.
 * @param {import("../../components/timecontrol-date.js").EOxTimeControlDate} EOxTimeControlDate - The date component instance.
 * @returns {string | undefined} The target date, or undefined when navigation is unavailable.
 */
export default function getStepDateMethod(step, EOxTimeControlDate) {
  const EOxTimeControl = EOxTimeControlDate.getEOxTimeControl();
  const curStartDate = EOxTimeControl?.selectedDateRange?.[0];
  if (!curStartDate) return undefined;

  const items = EOxTimeControl.items.get();
  const getValues = (key) =>
    Object.keys(groupBy(items, key)).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime(),
    );
  let itemValues = getValues("utc");
  let index = itemValues.findIndex((date) => {
    if (EOxTimeControl.showUTC && curStartDate.includes("T00:00:00Z")) {
      return dayjs(date).isSame(curStartDate, "day");
    }
    return dayjs(date).isSame(curStartDate);
  });

  if (index < 0) {
    itemValues = getValues("date");
    index = itemValues.findIndex(
      (date) => date === dayjs(curStartDate).format(TIME_CONTROL_DATE_FORMAT),
    );
  }

  if (!itemValues.length) return undefined;

  let newIndex = index + step;
  if (!EOxTimeControlDate.dateWrap) {
    if (newIndex < 0 || newIndex >= itemValues.length) return undefined;
  } else {
    if (newIndex > itemValues.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = itemValues.length - 1;
  }
  return itemValues[newIndex];
}
