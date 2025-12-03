import { LitElement, html } from "lit";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import { styleTimeline } from "../styles/style.timeline.js";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import {
  initTimelineMethod,
  setDateRangeMethod,
} from "../methods/timeline/index.js";

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

  setDateRange(dateRange) {
    setDateRangeMethod(dateRange, this);
  }

  initTimeline() {
    setTimeout(() => initTimelineMethod(this));
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
