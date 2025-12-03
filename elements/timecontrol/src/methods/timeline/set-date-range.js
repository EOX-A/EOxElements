import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import { updateRangeElements } from "./index.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function setDateRangeMethod(dateRange, EOxTimeControlTimeline) {
  try {
    EOxTimeControlTimeline.visTimeline.removeCustomTime("multi-select-start");
  } catch {}
  try {
    EOxTimeControlTimeline.visTimeline.removeCustomTime("multi-select-end");
  } catch {}
  try {
    EOxTimeControlTimeline.visTimeline.addCustomTime(
      dayjs(dateRange[0]).toDate(),
      "multi-select-start",
    );
  } catch {}
  try {
    EOxTimeControlTimeline.visTimeline.addCustomTime(
      dayjs(dateRange[1]).toDate(),
      "multi-select-end",
    );
  } catch {}
  setTimeout(() => {
    updateRangeElements(EOxTimeControlTimeline);
  });
}
