import {
  DEFAULT_VIS_TIMELINE_OPTIONS,
  VIS_TIMELINE_DATE_FORMATS,
} from "../../enums.js";
import { Timeline } from "vis-timeline/standalone";
import { updateVisibility } from "../../helpers/index.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} EOxTimeControlTimeline
 * @typedef {import("../../main").EOxTimeControl} EOxTimeControl
 */

let drag = false;
let drawInterval = null;

/**
 * Updates the visual representation of the range elements (start and end custom time markers) on the timeline.
 * Sets the title text and adjusts the width and position of the range selection indicators.
 *
 * @param {EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 */
export function updateRangeElements(EOxTimeControlTimeline) {
  const timeSliderContainer = EOxTimeControlTimeline.getContainer();

  const startEle = /** @type {HTMLElement} */ (
    timeSliderContainer.querySelector(".vis-custom-time.multi-select-start")
  );
  const endEle = /** @type {HTMLElement} */ (
    timeSliderContainer.querySelector(".vis-custom-time.multi-select-end")
  );

  const startDate = dayjs(
    EOxTimeControlTimeline.visTimeline.getCustomTime("multi-select-start"),
  );
  const startTitle = startDate.format("DD MMM YYYY HH:mm:ss");

  const endDate = dayjs(
    EOxTimeControlTimeline.visTimeline.getCustomTime("multi-select-end"),
  );
  const endTitle = endDate.format("DD MMM YYYY HH:mm:ss");

  if (startEle) {
    startEle.title = "";
    const existingTag = startEle.querySelector("tag");
    const tagEle = existingTag || document.createElement("tag");
    tagEle.textContent = startTitle;
    if (!existingTag) {
      startEle.appendChild(tagEle);
    }
  }

  if (endEle) {
    endEle.title = "";
    const existingTag = endEle.querySelector("tag");
    const tagEle = existingTag || document.createElement("tag");
    tagEle.textContent = endTitle;
    if (!existingTag) {
      endEle.appendChild(tagEle);
    }
  }

  if (startEle && endEle) {
    const endLeft = Number(endEle.style.left.replace("px", ""));
    const startLeft = Number(startEle.style.left.replace("px", ""));

    startEle.style.width = startDate.isAfter(endDate)
      ? `${startLeft - endLeft}px`
      : `${endLeft - startLeft}px`;
    if (startDate.isAfter(endDate)) {
      startEle.style.left = `${endLeft}px`;
    }
  }
}

/**
 * Initializes the vis-timeline instance with items, groups, and event handlers.
 * Sets up the timeline visualization, custom time markers for range selection, and various event listeners
 * for user interactions such as clicking, dragging, and time changes.
 *
 * @param {EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 */
export default function initTimelineMethod(EOxTimeControlTimeline) {
  const EOxTimeControl = /** @type {EOxTimeControl} */ (
    EOxTimeControlTimeline.closest("eox-timecontrol")
  );

  if (EOxTimeControl) {
    const items = /** @type {Array<any>} */ (EOxTimeControl.items.get());
    const groups = EOxTimeControl.groups.get();
    const dates = items.map((item) => dayjs(item.start));
    const min = dayjs.min(dates).subtract(50, "day").format("YYYY-MM-DD");
    const max = dayjs.max(dates).add(50, "day").format("YYYY-MM-DD");

    const container = EOxTimeControlTimeline.getContainer();
    container.innerHTML = "";

    const options = {
      ...DEFAULT_VIS_TIMELINE_OPTIONS,
      start: min,
      end: max,
      min: min,
      max: max,
      format: VIS_TIMELINE_DATE_FORMATS,
    };

    const visTimeline = new Timeline(
      container,
      items,
      groups,
      /** @type {import("vis-timeline/standalone").TimelineOptions} */ (
        options
      ),
    );
    EOxTimeControlTimeline.visTimeline = visTimeline;

    if (drawInterval) {
      clearInterval(drawInterval);
      drawInterval = null;
    }

    if (drawInterval === null)
      drawInterval = setInterval(() => {
        const vt = /** @type {import("vis-timeline/standalone").Timeline} */ (
          EOxTimeControlTimeline.visTimeline
        );
        if (
          vt &&
          vt.initialRangeChangeDone &&
          vt.initialFitDone &&
          !vt.initialDrawDone
        ) {
          vt.redraw();
          clearInterval(drawInterval);
        } else if (
          vt &&
          vt.initialRangeChangeDone &&
          vt.initialFitDone &&
          vt.initialDrawDone
        ) {
          clearInterval(drawInterval);
        }
      }, 50);

    visTimeline.on("changed", () => {
      const EOxItemFilter = EOxTimeControl.querySelector("eox-itemfilter");
      updateRangeElements(EOxTimeControlTimeline);
      const textElement = /** @type {HTMLElement} */ (
        container.querySelector(".vis-text.vis-minor.vis-even")
      );
      const width = Number(textElement.style.width.replace("px", ""));
      const cellWidth = width / options.timeAxis.step + 0.1;

      const milestoneElements = /** @type {NodeListOf<HTMLElement>} */ (
        container.querySelectorAll(".vis-item.milestone")
      );
      milestoneElements.forEach((milestone) => {
        milestone.style.width = `${cellWidth}px`;
      });
      for (let i = 0; i < EOxTimeControl.sliderValues.length; i++) {
        updateVisibility(
          EOxTimeControlTimeline,
          EOxTimeControl.sliderValues[i].layerInstance.getVisible(),
          i,
        );
      }
      if (EOxItemFilter) EOxTimeControl.filter(undefined, EOxTimeControl);
    });
    visTimeline.on("timechange", () => {
      updateRangeElements(EOxTimeControlTimeline);
    });

    visTimeline.on("timechanged", (props) => {
      if (props.id == "multi-select-start" || props.id == "multi-select-end") {
        const isStart = props.id.includes("start");
        const newDate = dayjs(props.time).utc().format();
        const newDateRange = isStart
          ? [newDate, EOxTimeControl.selectedDateRange[1]]
          : [EOxTimeControl.selectedDateRange[0], newDate];

        const sortedDateRange = [...newDateRange].sort((a, b) =>
          dayjs(a).isAfter(dayjs(b)) ? 1 : -1,
        );
        EOxTimeControl.dateChange(sortedDateRange, EOxTimeControl);
      }
    });

    visTimeline.on("click", (props) => {
      if (
        props &&
        props.time &&
        props.what &&
        props.what !== "group-label" &&
        !drag &&
        !props.event.shiftKey
      ) {
        const startDate = dayjs(props.time).startOf("day").utc().format();
        const endDate = dayjs(props.time).endOf("day").utc().format();
        EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);
      }
    });

    visTimeline.on("rangechange", (props) => {
      if (props.byUser) {
        updateRangeElements(EOxTimeControlTimeline);
      }
    });

    visTimeline.on("rangechanged", (props) => {
      if (props.byUser) {
        drag = true;
        setTimeout(() => (drag = false));
        updateRangeElements(EOxTimeControlTimeline);
      }
    });
  }
}
