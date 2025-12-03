import { LitElement, html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import { styleTimeline } from "../styles/style.timeline.js";
import {
  DEFAULT_VIS_TIMELINE_OPTIONS,
  TIME_CONTROL_DATE_FORMAT,
  VIS_TIMELINE_DATE_FORMATS,
} from "../enums.js";
import { Timeline } from "vis-timeline/standalone";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import { updateVisibility } from "../helpers/index.js";
dayjs.extend(utc);
dayjs.extend(timezone);

let drag = false;

export class EOxTimeControlTimeline extends LitElement {
  static get properties() {
    return {
      unstyled: { type: Boolean, attribute: "unstyled" },
    };
  }

  constructor() {
    super();
    this.unstyled = false;
    this.visTimeline = null;
  }

  #selectedDateRange = null;
  getContainer() {
    return /** @type {HTMLElement} */ (
      this.renderRoot.querySelector("#timeline")
    );
  }

  #updateRangeElements() {
    const timeSliderContainer = this.getContainer();

    const startEle = /** @type {HTMLElement} */ (
      timeSliderContainer.querySelector(".vis-custom-time.multi-select-start")
    );
    const endEle = /** @type {HTMLElement} */ (
      timeSliderContainer.querySelector(".vis-custom-time.multi-select-end")
    );

    const startTitle = dayjs(
      this.visTimeline.getCustomTime("multi-select-start"),
    ).format("DD MMM YYYY HH:mm:ss");
    const endTitle = dayjs(
      this.visTimeline.getCustomTime("multi-select-end"),
    ).format("DD MMM YYYY HH:mm:ss");

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
      startEle.style.width = `${endLeft - startLeft}px`;
    }
  }

  setDateRange(dateRange) {
    this.#selectedDateRange = dateRange;
    try {
      this.visTimeline.removeCustomTime("multi-select-start");
    } catch {}
    try {
      this.visTimeline.removeCustomTime("multi-select-end");
    } catch {}
    try {
      this.visTimeline.addCustomTime(
        dayjs(dateRange[0]).toDate(),
        "multi-select-start",
      );
    } catch {}
    try {
      this.visTimeline.addCustomTime(
        dayjs(dateRange[1]).toDate(),
        "multi-select-end",
      );
    } catch {}
    setTimeout(() => {
      this.#updateRangeElements();
    });
  }

  initTimeline() {
    setTimeout(() => {
      const EOxTimeControl = /** @type {EOxTimeControl} */ (
        this.closest("eox-timecontrol")
      );

      if (EOxTimeControl) {
        const items = EOxTimeControl.items.get();
        const groups = EOxTimeControl.groups.get();
        const dates = items.map((item) => dayjs(item.start));
        const min = dayjs.min(dates).subtract(50, "day").format("YYYY-MM-DD");
        const max = dayjs.max(dates).add(50, "day").format("YYYY-MM-DD");

        const container = this.getContainer();
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
        this.visTimeline = visTimeline;

        visTimeline.on("changed", () => {
          this.#updateRangeElements();
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
              this,
              EOxTimeControl.sliderValues[i].layerInstance.getVisible(),
              i,
            );
          }
        });
        visTimeline.on("timechange", () => {
          this.#updateRangeElements();
        });

        visTimeline.on("timechanged", (props) => {
          if (
            props.id == "multi-select-start" ||
            props.id == "multi-select-end"
          ) {
            const isStart = props.id.includes("start");
            const newDate = dayjs(props.time).utc().format();
            const newDateRange = isStart
              ? [newDate, this.#selectedDateRange[1]]
              : [this.#selectedDateRange[0], newDate];
            EOxTimeControl.dateChange(newDateRange, EOxTimeControl);
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
            this.#updateRangeElements();
          }
        });

        visTimeline.on("rangechanged", (props) => {
          if (props.byUser) {
            drag = true;
            setTimeout(() => (drag = false));
            this.#updateRangeElements();
          }
        });
      }
    });
  }

  render() {
    return html`
      <style>
        ${style}
        ${visTimelineCSS}
        ${!this.unstyled && styleEOX}
        ${styleTimeline}
      </style>
      <div class="timeline-wrapper">
        <div id="timeline"></div>
      </div>
    `;
  }
}
customElements.define("eox-timecontrol-timeline", EOxTimeControlTimeline);
