import { LitElement, html } from "lit";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import { Timeline, DataSet } from "vis-timeline/standalone";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";

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
      { id: 1, content: "Product 1" },
      { id: 2, content: "Product 2" },
      { id: 3, content: "Product 3" },
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
      {
        id: 203,
        group: 2,
        className: "task",
        start: "2024-12-14",
        end: "2025-04-20",
      },

      {
        id: 301,
        group: 3,
        className: "task",
        start: "2024-10-03",
        end: "2024-11-28",
      },
      {
        id: 302,
        group: 3,
        className: "task",
        start: "2024-12-05",
        end: "2025-04-20",
      },
    ]);

    const container = this.renderRoot.querySelector("#timeslider");

    const options = {
      groupOrder: (a, b) => a.id - b.id,
      stack: false,
      selectable: false,
      zoomable: true,
      moveable: true,
      margin: { item: 10, axis: 10 },
      start: "2024-09-20",
      end: "2025-04-30",
      min: "2024-07-01",
      max: "2025-07-01",
      showCurrentTime: true,
      timeAxis: { scale: "month", step: 1, top: { scale: "year", step: 1 } },
      orientation: { axis: "top" },
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
      timeline.setCustomTime(d, "selected");
      timeline.setCustomTimeTitle(formatDate(d), "selected");
      const el = container.querySelector(
        '.vis-custom-time[data-id="selected"]',
      );
      if (el) el.classList.add("vis-custom-time-selected");
    }

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
      <div id="timeslider"></div>
    `;
  }
}

customElements.define("eox-timeslider", EOxTimeSlider);
