import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { hasTimeFormat } from "../../helpers/index.js";

dayjs.extend(utc);

/**
 * Selects a navigation step while preserving its time when the display includes time tokens
 * Date-only formats retain day-based navigation; the selection still ends at the end of the day
 *
 * @param {string} nextDate - The next available observation date or timestamp
 * @param {import("../../components/timecontrol-date").EOxTimeControlDate} EOxTimeControlDate - Date component instance
 * @returns {void}
 */
export default function selectStepMethod(nextDate, EOxTimeControlDate) {
  const EOxTimeControl = EOxTimeControlDate.getEOxTimeControl();
  const next = dayjs(nextDate);
  const isSameDay = next.isSame(EOxTimeControl.selectedDateRange[0], "day");
  const start =
    hasTimeFormat(EOxTimeControlDate.format) || isSameDay
      ? next
      : EOxTimeControl.showUTC
        ? next.utc().startOf("day")
        : next.startOf("day");
  const end = EOxTimeControl.showUTC
    ? next.utc().endOf("day")
    : next.endOf("day");

  EOxTimeControl.dateChange(
    [start.utc().format(), end.utc().format()],
    EOxTimeControl,
  );
}
