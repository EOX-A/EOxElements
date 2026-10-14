import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import getStepDateMethod from "./get-step-date.js";

dayjs.extend(utc);

/**
 * Applies an available navigation step to the parent timecontrol.
 *
 * @param {number} step - Number of steps to move.
 * @param {import("../../components/timecontrol-date.js").EOxTimeControlDate} EOxTimeControlDate - The date component instance.
 * @returns {void}
 */
export default function updateStepMethod(step, EOxTimeControlDate) {
  const nextDate = getStepDateMethod(step, EOxTimeControlDate);
  if (nextDate === undefined) return;

  const EOxTimeControl = EOxTimeControlDate.getEOxTimeControl();
  const isSameDay = dayjs(nextDate).isSame(
    EOxTimeControl.selectedDateRange[0],
    "day",
  );
  const startDate = isSameDay
    ? dayjs(nextDate).utc().format()
    : EOxTimeControl.showUTC
      ? dayjs(nextDate).utc().startOf("day").format()
      : dayjs(nextDate).startOf("day").utc().format();
  const endDate = EOxTimeControl.showUTC
    ? dayjs(nextDate).utc().endOf("day").format()
    : dayjs(nextDate).endOf("day").utc().format();
  EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);
}
