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
let multiSelect = false;
let multiSelectStartDate = null;
let multiSelectEndDate = null;

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

  getContainer() {
    return /** @type {HTMLElement} */ (
      this.renderRoot.querySelector("#timeline")
    );
  }

  #rangeSizeFix() {
    const timeSliderContainer = this.getContainer();

    const startEle = /** @type {HTMLElement} */ (
      timeSliderContainer.querySelector(".vis-custom-time.multi-select-start")
    );
    const endEle = /** @type {HTMLElement} */ (
      timeSliderContainer.querySelector(".vis-custom-time.multi-select-end")
    );

    if (startEle && endEle) {
      const endLeft = Number(endEle.style.left.replace("px", ""));
      const startLeft = Number(startEle.style.left.replace("px", ""));
      startEle.style.width = `${endLeft - startLeft}px`;
    }
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
          this.#rangeSizeFix();
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

        const selectRange = (props) => {
          if (multiSelect) {
            const timeSliderContainer = this.getContainer();
            const startEle = /** @type {HTMLElement} */ (
              timeSliderContainer.querySelector(
                ".vis-custom-time.multi-select-start",
              )
            );
            const endEle = /** @type {HTMLElement} */ (
              timeSliderContainer.querySelector(
                ".vis-custom-time.multi-select-end",
              )
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
        };
        visTimeline.on("mouseMove", selectRange);
        visTimeline.on("timechange", () => {
          drag = true;
          this.#rangeSizeFix();
        });

        visTimeline.on("timechanged", (props) => {});

        visTimeline.on("click", (props) => {
          if (
            props &&
            props.time &&
            props.what &&
            props.what !== "group-label" &&
            !drag &&
            !props.event.shiftKey
          ) {
            const date = dayjs(props.time).format(TIME_CONTROL_DATE_FORMAT);
            const startDate = dayjs(date).utc().format();
            const endDate = dayjs(date + "T23:59:59")
              .utc()
              .format();
            EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);

            try {
              visTimeline.removeCustomTime("multi-select-start");
            } catch {}
            try {
              visTimeline.removeCustomTime("multi-select-end");
            } catch {}
            try {
              visTimeline.addCustomTime(
                dayjs(startDate).toDate(),
                "multi-select-start",
              );
            } catch {}
            try {
              visTimeline.addCustomTime(
                dayjs(startDate).add(1, "day").toDate(),
                "multi-select-end",
              );
            } catch {}

            // drag = true;
            // setTimeout(() => (drag = false));
            setTimeout(() => {
              this.#rangeSizeFix();
            });
          }
          // else if (
          //   props &&
          //   props.time &&
          //   props.what &&
          //   props.what !== "group-label" &&
          //   props.event.shiftKey
          // ) {
          //   if (!multiSelect) {
          //     multiSelectStartDate = props.time;
          //     try {
          //       visTimeline.addCustomTime(
          //         dayjs(multiSelectStartDate).toDate(),
          //         "multi-select-start",
          //       );
          //     } catch {
          //       /* exists */
          //     }
          //     try {
          //       visTimeline.removeCustomTime("multi-select-end");
          //       const timeSliderContainer = this.getContainer();
          //       const startEle = /** @type {HTMLElement} */ (timeSliderContainer.querySelector(
          //         ".vis-custom-time.multi-select-start",
          //       ));
          //       (startEle).style.width = `0px`;
          //     } catch {
          //       // ignore errors
          //     }
          //     visTimeline.setCustomTime(
          //       dayjs(multiSelectStartDate).toDate(),
          //       "multi-select-start",
          //     );
          //     multiSelect = true;
          //     multiSelectEndDate = null;
          //     const selectedRange = [];
          //     selectedRange.push(dayjs(multiSelectStartDate));
          //     EOxTimeControl.selectedRange = selectedRange;
          //     EOxTimeControl.requestUpdate();
          //   } else {
          //     multiSelect = false;
          //     multiSelectEndDate = props.time;
          //     try {
          //       visTimeline.addCustomTime(
          //         dayjs(multiSelectEndDate).toDate(),
          //         "multi-select-end",
          //       );
          //     } catch (_) {
          //       /* exists */
          //     }
          //     visTimeline.setCustomTime(
          //       dayjs(multiSelectEndDate).toDate(),
          //       "multi-select-end",
          //     );
          //     const selectedRange = [];
          //     selectedRange.push(dayjs(multiSelectStartDate));
          //     selectedRange.push(dayjs(multiSelectEndDate));
          //     EOxTimeControl.selectedRange = selectedRange;
          //     EOxTimeControl.requestUpdate();
          //   }
          // }
        });

        visTimeline.on("rangechange", (props) => {
          if (props.byUser) {
            this.#rangeSizeFix();
          }
        });

        visTimeline.on("rangechanged", (props) => {
          if (props.byUser) {
            drag = true;
            setTimeout(() => (drag = false));
            this.#rangeSizeFix();
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
