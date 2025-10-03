import { Timeline, DataSet } from "vis-timeline/standalone";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import createTimelineOptions from "./create-timeline-options";
import updateTimelineItems, { updateVisibility } from "./update-timeline-items";
import setSelectedDate from "./set-selected-date";
import { dateChangeHandler } from "../methods/timeslider";
import { Calendar } from "vanilla-calendar-pro";
import groupBy from "lodash.groupby";
dayjs.extend(utc);
dayjs.extend(timezone);

function extractISO(dateEl) {
  // Try common attribute keys then fall back by scanning dataset values.
  return (
    dateEl.getAttribute("data-calendar-date") ||
    dateEl.dataset?.calendarDate ||
    Object.values(dateEl.dataset || {}).find((v) =>
      /^\d{4}-\d{2}-\d{2}$/.test(v),
    ) ||
    null
  );
}

let drag = false;
let multiSelect = false;
let multiSelectStartDate = null;
let multiSelectEndDate = null;

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

  function selectRange(props) {
    if (multiSelect) {
      const timeSliderContainer = EOxTimeSlider.getContainer();
      const startEle = timeSliderContainer.querySelector(
        ".vis-custom-time.multi-select-start",
      );
      const endEle = timeSliderContainer.querySelector(
        ".vis-custom-time.multi-select-end",
      );
      if (props.event.shiftKey && startEle) {
        const width = props.pageX - startEle.getBoundingClientRect().x;
        startEle.style.width = `${width}px`;
      } else {
        if (endEle) endEle.remove();
        if (startEle) startEle.remove();
        multiSelect = false;
        multiSelectStartDate = null;
        multiSelectEndDate = null;
      }
    }
  }
  visTimeline.on("mouseMove", selectRange);

  visTimeline.on("click", (props) => {
    if (
      props &&
      props.time &&
      props.what &&
      props.what !== "group-label" &&
      !drag &&
      !props.event.shiftKey
    )
      setSelectedDate(
        props.time,
        visTimeline,
        EOxTimeSlider.eoxMap,
        EOxTimeSlider,
      );
    else if (
      props &&
      props.time &&
      props.what &&
      props.what !== "group-label" &&
      props.event.shiftKey
    ) {
      if (!multiSelect) {
        multiSelectStartDate = props.time;
        try {
          visTimeline.addCustomTime(
            dayjs(multiSelectStartDate).toDate(),
            "multi-select-start",
          );
        } catch (_) {
          /* exists */
        }
        visTimeline.setCustomTime(
          dayjs(multiSelectStartDate).toDate(),
          "multi-select-start",
        );
        multiSelect = true;
        multiSelectEndDate = null;
      } else {
        multiSelect = false;
        multiSelectEndDate = props.time;
        try {
          visTimeline.addCustomTime(
            dayjs(multiSelectEndDate).toDate(),
            "multi-select-end",
          );
        } catch (_) {
          /* exists */
        }
        visTimeline.setCustomTime(
          dayjs(multiSelectEndDate).toDate(),
          "multi-select-end",
        );
        const timeSliderContainer = EOxTimeSlider.getContainer();
        const startEle = timeSliderContainer.querySelector(
          ".vis-custom-time.multi-select-start",
        );
        const endEle = timeSliderContainer.querySelector(
          ".vis-custom-time.multi-select-end",
        );

        startEle.style.width = `${endEle.left - startEle.left}px`;
      }
    }
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
  const itemValues = EOxTimeSlider.items.get();

  if (itemValues && itemValues.length) {
    setTimeout(() => {
      dateChangeHandler(itemValues[0].start, EOxTimeSlider);
    }, 100);
    const calendarInput = EOxTimeSlider.renderRoot.querySelector("#cal");
    if (calendarInput) {
      calendarInput.innerHTML = "";
      const cal = new Calendar(calendarInput, {
        selectedTheme: "light",
        // type: "month",
        // selectionDatesMode: "multiple-ranged",
        // displayMonthsCount: 2,
        // monthsToSwitch: 2,
        dateMin: options.min,
        dateMax: options.max,
        displayDateMin: options.min,
        displayDateMax: options.max,
        displayDatesOutside: false,
        selectedDates: [itemValues[0].start],
        enableEdgeDatesOnly: false,
        // disableDatesPast: true,
        // enableEdgeDatesOnly: true,
        inputMode: true,
        positionToInput: ["top", "left"],
        selectedWeekends: [],
        onClickDate: (self) => {
          if (self.context.selectedDates[0])
            dateChangeHandler(self.context.selectedDates[0], EOxTimeSlider);
        },
        onCreateDateEls: (self, dateEl) => {
          const date = extractISO(dateEl);
          const dateDots = groupBy(itemValues, "start");
          const oldDots = dateEl.querySelector(".vc-day__dots");
          if (oldDots) oldDots.remove();

          if (dateDots[date] && dateEl.children.length) {
            const host = document.createElement("div");
            host.className = "vc-day__dots";

            for (let i = 0; i < dateDots[date].length; i++) {
              const dot = document.createElement("div");
              dot.className = "vc-day__dot";
              host.appendChild(dot);
            }
            dateEl.appendChild(host);
          }
        },
      });
      cal.init();
    }
  } else {
    EOxTimeSlider.selectedDate = null;
  }
}
