/**
 * Applies a calendar or navigation selection and centers each timeline without changing zoom.
 *
 * @param {import("../../types").DateRange} dateRange - Selected start and end dates.
 * @param {import("../../main").EOxTimeControl} timeControl - The parent timecontrol instance.
 */
export default function selectDateRangeMethod(dateRange, timeControl) {
  if (!timeControl) return;

  timeControl.dateChange(dateRange, timeControl);
  const start = new Date(dateRange[0]).getTime();
  const end = new Date(dateRange[1]).getTime();
  const midpoint = start + (end - start) / 2;
  if (!Number.isFinite(midpoint)) return;

  timeControl
    .querySelectorAll("eox-timecontrol-timeline")
    .forEach((element) => {
      const timeline =
        /** @type {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} */ (
          element
        );
      timeline.visTimeline?.moveTo(new Date(midpoint), { animation: false });
    });
}
