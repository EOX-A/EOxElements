import { Timeline, DataSet } from "vis-timeline/standalone";
import dayjs from "dayjs";
import createTimelineOptions from "./create-timeline-options";
import updateTimelineItems, { updateVisibility } from "./update-timeline-items";
import setSelectedDate from "./set-selected-date";

/**
 * Initializes the vis-timeline instance
 *
 * @param {Object} EOxTimeSlider - The timeslider EOxTimeSlider instance
 */
export default function initVisTimeline(EOxTimeSlider) {
  const container = /** @type {HTMLElement} */ (EOxTimeSlider.getContainer());
  container.innerHTML = "";

  if (EOxTimeSlider.sliderValues.length === 0) return null;

  const groups = new DataSet([]);
  const items = new DataSet([]);

  updateTimelineItems(EOxTimeSlider.sliderValues, groups, items, EOxTimeSlider);

  const dates = items.map((item) => dayjs(item.start));
  const min = dayjs.min(dates).subtract(30, "day").format("YYYY-MM-DD");
  const max = dayjs.max(dates).add(30, "day").format("YYYY-MM-DD");

  const options = createTimelineOptions(min, max);

  const visTimeline = new Timeline(container, items, groups, options);

  visTimeline.on("changed", () => {
    const textElement = /** @type {HTMLElement} */ (
      container.querySelector(".vis-text.vis-minor.vis-even")
    );
    const width = Number(textElement.style.width.replace("px", ""));
    const cellWidth = width / options.timeAxis.step + 0.1;

    const milestoneElements = container.querySelectorAll(".vis-item.milestone");
    milestoneElements.forEach((milestone) => {
      /** @type {HTMLElement} */ (milestone).style.width = `${cellWidth}px`;
    });
    for (let i = 0; i < EOxTimeSlider.sliderValues.length; i++) {
      updateVisibility(
        EOxTimeSlider,
        EOxTimeSlider.sliderValues[i].layerInstance.getVisible(),
        i,
      );
    }
  });

  let drag = false;

  visTimeline.on("click", (props) => {
    if (
      props &&
      props.time &&
      props.what &&
      props.what !== "group-label" &&
      !drag
    )
      setSelectedDate(
        props.time,
        visTimeline,
        EOxTimeSlider.eoxMap,
        EOxTimeSlider,
      );
  });

  visTimeline.on("rangechanged", (props) => {
    if (props.byUser) {
      drag = true;
      setTimeout(() => (drag = false));
    }
  });

  EOxTimeSlider.visTimeline = visTimeline;
  EOxTimeSlider.groups = groups;
  EOxTimeSlider.items = items;
}
