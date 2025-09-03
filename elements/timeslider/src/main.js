import { LitElement, html } from "lit";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import { Timeline, DataSet } from "vis-timeline/standalone";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);

/**
 * @element eox-timeslider
 */
export class EOxTimeSlider extends LitElement {
  static get properties() {
    return {
      for: { type: String },
      unstyled: { type: Boolean },
    };
  }

  constructor() {
    super();
    /** @type {boolean} */
    this.unstyled = false;

    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";
  }

  initVisTimeline() {
    const groups = new DataSet([
      { id: 1, content: "Sentinel-2 L2A" },
      { id: 2, content: "Sentinel-1 GRD" },
      { id: 3, content: "Sentinel-1 SLC" },
    ]);

    const items = new DataSet([
      {
        id: 101,
        group: 1,
        className: "task",
        start: "2024-10-05",
        end: "2024-11-25",
      },
      {
        id: 102,
        group: 1,
        className: "milestone",
        start: "2024-11-29",
        type: "point",
      },
      {
        id: 103,
        group: 1,
        className: "milestone",
        start: "2024-12-01",
        type: "point",
      },
      {
        id: 104,
        group: 1,
        className: "task",
        start: "2024-12-03",
        end: "2024-12-20",
      },
      {
        id: 105,
        group: 1,
        className: "milestone",
        start: "2025-01-05",
        type: "point",
      },
      {
        id: 106,
        group: 1,
        className: "task",
        start: "2025-01-07",
        end: "2025-01-18",
      },
      {
        id: 107,
        group: 1,
        className: "milestone",
        start: "2025-01-23",
        type: "point",
      },
      {
        id: 108,
        group: 1,
        className: "task",
        start: "2025-02-01",
        end: "2025-04-15",
      },

      {
        id: 201,
        group: 2,
        className: "task",
        start: "2024-10-02",
        end: "2024-12-02",
      },
      {
        id: 202,
        group: 2,
        className: "milestone",
        start: "2024-12-10",
        type: "point",
      },
      // {
      //   id: 203,
      //   group: 2,
      //   className: "task",
      //   start: "2024-12-14",
      //   end: "2025-04-20",
      // },

      // {
      //   id: 301,
      //   group: 3,
      //   className: "task",
      //   start: "2024-10-03",
      //   end: "2024-11-28",
      // },
      // {
      //   id: 302,
      //   group: 3,
      //   className: "task",
      //   start: "2024-12-05",
      //   end: "2025-04-20",
      // },
    ]);

    const container = this.renderRoot.querySelector("#timeslider");

    const options = {
      groupOrder: (a, b) => a.id - b.id,
      stack: false,
      selectable: true,
      zoomable: true,
      moveable: true,
      margin: { item: 40, axis: 20 },
      start: "2024-09-20",
      end: "2025-04-30",
      min: "2024-07-01",
      max: "2025-07-01",
      showCurrentTime: true,
      timeAxis: {
        scale: "day",
        step: 5,
      },
      orientation: { axis: "top" },
      format: {
        minorLabels: {
          millisecond: "SSS",
          second: "s",
          minute: "HH:mm",
          hour: "HH:mm",
          weekday: "ddd D",
          day: "D",
          week: "w",
          month: "MMM",
          year: "YYYY",
        },
        majorLabels: {
          millisecond: "HH:mm:ss",
          second: "D MMMM HH:mm",
          minute: "ddd D MMMM",
          hour: "ddd D MMMM",
          weekday: "MMM YYYY",
          day: "MMM YYYY",
          week: "MMM YYYY",
          month: "YYYY",
          year: "",
        },
      },
    };

    const timeline = new Timeline(container, items, groups, options);
    timeline.setCurrentTime(new Date("2025-01-03T12:00:00"));

    function formatDate(d) {
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    }

    function setSelected(date) {
      const d = new Date(date);
      if (Number.isNaN(d.getTime())) return;
      try {
        timeline.addCustomTime(d, "selected");
      } catch (_) {
        /* exists */
      }
      console.log(timeline);
      timeline.setCustomTime(d, "selected");
      timeline.setCustomTimeTitle(formatDate(d), "selected");
      const el = container.querySelector(
        '.vis-custom-time[data-id="selected"]',
      );
      if (el) el.classList.add("vis-custom-time-selected");

      const selectedEle = container.querySelector(".vis-custom-time");
      if (selectedEle) {
        const labelEle = selectedEle.children[0];
        labelEle.classList.add("vis-custom-time-selected-label");
        labelEle.innerText = dayjs(date).format("MMM DD' YYYY");
      }
    }

    timeline.on("rangechange", (props) => {
      const range = timeline.getWindow();
      const rangeWidth = range.end - range.start; // milliseconds
      const containerWidth = container.offsetWidth;

      // Calculate width per millisecond
      const msPerPixel = rangeWidth / containerWidth;

      // Set milestone width based on visible date range
      // Adjust the multiplier as needed for desired milestone size
      const milestoneWidth = Math.max(
        2,
        Math.min(20, containerWidth / (rangeWidth / (1000 * 60 * 60 * 24 * 7))),
      ); // 1 week base

      const milestoneElements = container.querySelectorAll(
        ".vis-item.milestone",
      );
      milestoneElements.forEach((milestone) => {
        milestone.style.width = `${milestoneWidth}px`;
      });
    });

    timeline.on("click", (props) => {
      if (props && props.time) setSelected(props.time);
    });

    timeline.addCustomTime(new Date(), "selected");
  }

  firstUpdated() {
    this.initVisTimeline();
  }

  render() {
    return html`
      <style>
        ${visTimelineCSS}
        ${!this.unstyled && styleEOX}
        ${style}
      </style>
      <div class="timeslider-container">
        <div class="timeslider-header">
          <div class="field fill border small">
            <input type="date" placeholder=" " />
          </div>
        </div>
        <div id="timeslider"></div>
      </div>
    `;
  }
}

customElements.define("eox-timeslider", EOxTimeSlider);
