import {
  DEFAULT_VIS_TIMELINE_OPTIONS,
  VIS_TIMELINE_DATE_FORMATS,
} from "../../enums.js";
import * as vis from "vis-timeline/standalone";
import {
  updateVisibility,
  getWrongLocalFormatToUTCFormat,
} from "../../helpers/index.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import duration from "dayjs/plugin/duration";
import groupBy from "lodash.groupby";

const CLUSTER_ITEM_CLASSNAME = "vis-cluster-item";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

/**
 * @typedef {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} EOxTimeControlTimeline
 * @typedef {import("../../main").EOxTimeControl} EOxTimeControl
 */

let drag = false;
let drawInterval = null;
let click = false;

const labelDateFormat = "DD MMM YYYY HH:mm:ss";

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

  const EOxTimeControl = EOxTimeControlTimeline.getEOxTimeControl();

  let startTitle,
    endTitle = null;
  let startDate,
    endDate = null;

  try {
    startDate = dayjs(
      EOxTimeControlTimeline.visTimeline.getCustomTime("multi-select-start"),
    );
    startTitle = EOxTimeControl.showUTC
      ? startDate.utc().format(labelDateFormat)
      : startDate.format(labelDateFormat);
  } catch {
    /** catch */
  }

  try {
    endDate = dayjs(
      EOxTimeControlTimeline.visTimeline.getCustomTime("multi-select-end"),
    );
    endTitle = EOxTimeControl.showUTC
      ? endDate.utc().format(labelDateFormat)
      : endDate.format(labelDateFormat);
  } catch {
    /** catch */
  }

  if ((startTitle && startDate) || (endTitle && endDate)) {
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
}

/**
 * Handles the timeline changed event.
 * Updates the bin cell width and visibility of the timeline items.
 *
 * @param {EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 */
function handleTimelineChanged(EOxTimeControlTimeline, EOxTimeControl) {
  const EOxItemFilter = EOxTimeControl.querySelector("eox-itemfilter");

  for (let i = 0; i < EOxTimeControl.sliderValues.length; i++) {
    updateVisibility(
      EOxTimeControlTimeline,
      EOxTimeControl.sliderValues[i].layerInstance?.getVisible() || true,
      i,
    );
  }
  if (EOxItemFilter) EOxTimeControl.filter(undefined, EOxTimeControl);
}

/**
 * Handles the time changed event.
 * Updates the date range on the timecontrol component.
 *
 * @param {Object} props - The event properties.
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 */
function handleTimeChanged(props, EOxTimeControl) {
  if (props.id == "multi-select-start" || props.id == "multi-select-end") {
    const isStart = props.id.includes("start");
    const newDate = EOxTimeControl.showUTC
      ? getWrongLocalFormatToUTCFormat(props.time, EOxTimeControl.showUTC)
      : dayjs.utc(props.time).format();
    const newDateRange = isStart
      ? [newDate, EOxTimeControl.selectedDateRange[1]]
      : [EOxTimeControl.selectedDateRange[0], newDate];

    const sortedDateRange = [...newDateRange].sort((a, b) =>
      dayjs(a).isAfter(dayjs(b)) ? 1 : -1,
    );
    EOxTimeControl.dateChange(sortedDateRange, EOxTimeControl);
  }
}

/**
 * Handles the click event.
 * Updates the date range on the timecontrol component.
 *
 * @param {Object} props - The event properties.
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 * @param {EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 */
function handleClick(props, EOxTimeControl, EOxTimeControlTimeline) {
  if (
    props &&
    props.time &&
    props.what &&
    props.what !== "group-label" &&
    !drag &&
    !props.event.shiftKey
  ) {
    click = true;
    generateClusterItems(EOxTimeControlTimeline);
    const dom = /** @type {any} */ (EOxTimeControlTimeline.visTimeline).dom
      .root;
    const isBackgroundClick = Boolean(props.what == "background");
    const isClusterItem =
      !isBackgroundClick && props.item
        ? dom
            .querySelector(`.item-${props.item}`)
            .classList.contains(CLUSTER_ITEM_CLASSNAME)
        : false;

    const utcFormattedDate = getWrongLocalFormatToUTCFormat(
      props.time,
      EOxTimeControl.showUTC,
    );
    if (isBackgroundClick || isClusterItem) {
      const selection = /** @type {any} */ (
        EOxTimeControlTimeline.selectionDuration
      );
      const duration = dayjs.duration(selection);

      const startDate = EOxTimeControl.showUTC
        ? dayjs(utcFormattedDate).utc().format()
        : dayjs(props.time).utc().format();
      const endDate = EOxTimeControl.showUTC
        ? dayjs(utcFormattedDate).utc().add(duration).format()
        : dayjs(props.time).add(duration).utc().format();
      EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);
    } else {
      const duration = dayjs.duration({
        seconds: 1,
      });
      const selectedItem = props.item
        ? groupBy(EOxTimeControl.items.get(), "id")[props.item]
        : null;
      const selectedDateTime = selectedItem ? selectedItem[0].utc : props.time;

      const startDate = EOxTimeControl.showUTC
        ? dayjs(selectedDateTime).utc().format()
        : dayjs(selectedDateTime).utc().format();
      const endDate = EOxTimeControl.showUTC
        ? dayjs(selectedDateTime).utc().add(duration).format()
        : dayjs(selectedDateTime).add(duration).utc().format();
      EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);
    }
  }
}

/**
 * Handles the range changed event.
 * Updates the date range on the timecontrol component.
 *
 * @param {Object} props - The event properties.
 * @param {EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 */
function handleRangeChanged(props, EOxTimeControlTimeline) {
  if (props.byUser) {
    drag = true;
    setTimeout(() => (drag = false));
    if (EOxTimeControlTimeline.selectionResizable)
      updateRangeElements(EOxTimeControlTimeline);
  }
  const viewRange = EOxTimeControlTimeline.visTimeline.getWindow();
  EOxTimeControlTimeline.dispatchEvent(
    new CustomEvent("update:view", {
      detail: {
        start: viewRange.start,
        end: viewRange.end,
      },
      composed: true,
    }),
  );
}

/**
 * Generates the cluster items for the timeline items.
 *
 * @param {EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 */
function generateClusterItems(EOxTimeControlTimeline) {
  const timeline = EOxTimeControlTimeline.visTimeline;
  const dotDiameterPx = 15;
  const minOverlapPx = 2;
  const sameTimeTolerancePx = 1;
  const rowTolerancePx = null;
  const yTolerance = rowTolerancePx || dotDiameterPx;
  const xDistanceLimit = dotDiameterPx - minOverlapPx;
  const pointItems = [];
  const clusterItems = [];
  const dom = /** @type {any} */ (timeline).dom;

  for (const el of dom.root.querySelectorAll(".vis-item.vis-point")) {
    el.classList.remove(CLUSTER_ITEM_CLASSNAME);
    const rect = el.getBoundingClientRect();
    if (rect.width) {
      pointItems.push({
        el,
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2,
      });
    }
  }
  pointItems.sort((a, b) => a.centerX - b.centerX);

  for (let i = 1; i < pointItems.length; i++) {
    const current = pointItems[i];
    for (let j = i - 1; j >= 0; j--) {
      const previous = pointItems[j];
      const xDistance = current.centerX - previous.centerX;

      if (xDistance >= xDistanceLimit) break;
      if (xDistance <= sameTimeTolerancePx) continue;
      if (Math.abs(current.centerY - previous.centerY) >= yTolerance) continue;

      clusterItems.push({
        a: previous.el,
        b: current.el,
        overlapPx: +(dotDiameterPx - xDistance).toFixed(2),
      });
      current.el.classList.add(CLUSTER_ITEM_CLASSNAME);
      previous.el.classList.add(CLUSTER_ITEM_CLASSNAME);
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
  const EOxTimeControl = EOxTimeControlTimeline.getEOxTimeControl();

  if (EOxTimeControl) {
    const items = /** @type {Array<any>} */ (EOxTimeControl.items.get());
    const groups = EOxTimeControl.groups.get();
    const dates = items.map((item) => dayjs(item.start));
    const min = dayjs.min(dates).subtract(50, "day").format("YYYY-MM-DD");
    const max = dayjs.max(dates).add(50, "day").format("YYYY-MM-DD");

    const container = EOxTimeControlTimeline.getContainer();
    container.innerHTML = "";

    const groupByOriginalDate = groupBy(items, "originalDate");

    const options = {
      ...DEFAULT_VIS_TIMELINE_OPTIONS,
      start: min,
      end: max,
      min: min,
      max: max,
      format: VIS_TIMELINE_DATE_FORMATS,
      tooltip: {
        delay: 300,
        template: function (originalItemData) {
          const dom = /** @type {any} */ (EOxTimeControlTimeline.visTimeline)
            .dom.root;
          const isClusterItem = dom
            .querySelector(`.item-${originalItemData.id}`)
            .classList.contains(CLUSTER_ITEM_CLASSNAME);
          const items =
            groupByOriginalDate[originalItemData.originalDate] || [];
          return isClusterItem || items.length === 1
            ? false
            : `<span>${items.length} item${items.length > 1 ? "s" : ""}</span>`;
        },
      },
      moment: function (date) {
        if (EOxTimeControl.showUTC) {
          // @ts-expect-error type not returned
          return vis.moment(date).utc();
        } else {
          // @ts-expect-error type not returned
          return vis.moment(date);
        }
      },
    };

    const visTimeline =
      /** @type {import("vis-timeline/standalone").Timeline} */ (
        new vis.Timeline(
          container,
          items,
          groups,
          /** @type {import("vis-timeline/standalone").TimelineOptions} */ (
            options
          ),
        )
      );
    EOxTimeControlTimeline.visTimeline = visTimeline;
    EOxTimeControlTimeline.requestUpdate();

    if (drawInterval) {
      clearInterval(drawInterval);
      drawInterval = null;
    }

    if (drawInterval === null)
      drawInterval = setInterval(() => {
        const vt =
          /** @type {import("vis-timeline/standalone").Timeline | any} */ (
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
      if (!click) generateClusterItems(EOxTimeControlTimeline);
      updateRangeElements(EOxTimeControlTimeline);
      handleTimelineChanged(EOxTimeControlTimeline, EOxTimeControl);
      click = false;
    });
    visTimeline.on("timechange", () => {
      if (EOxTimeControlTimeline.selectionResizable)
        updateRangeElements(EOxTimeControlTimeline);
      else
        EOxTimeControlTimeline.setDateRange(EOxTimeControl.selectedDateRange);
    });

    visTimeline.on("timechanged", (props) =>
      handleTimeChanged(props, EOxTimeControl),
    );

    visTimeline.on("click", (props) =>
      handleClick(props, EOxTimeControl, EOxTimeControlTimeline),
    );

    visTimeline.on(
      "rangechange",
      (props) => props.byUser && updateRangeElements(EOxTimeControlTimeline),
    );

    visTimeline.on("rangechanged", (props) =>
      handleRangeChanged(props, EOxTimeControlTimeline),
    );
  }
}
