import { LitElement, html } from "lit";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import { styleTimeline } from "../styles/style.timeline.js";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import {
  initTimelineMethod,
  setDateRangeMethod,
} from "../methods/timeline/index.js";

/**
 * @typedef {import("../types").DateRange} DateRange
 */

/**
 * The `eox-timecontrol-timeline` component provides a timeline visualization using vis-timeline.
 * It displays timeline items as milestones grouped by layer, allowing users to visualize
 * and interact with time-based data. Supports range selection via custom time markers.
 *
 * @element eox-timecontrol-timeline
 */
export class EOxTimeControlTimeline extends LitElement {
  /**
   * Defines the component's reactive properties.
   *
   * @returns {Object} Property definitions.
   */
  static get properties() {
    return {
      unstyled: { type: Boolean, attribute: "unstyled" },
    };
  }

  /**
   * Creates a new EOxTimeControlTimeline instance.
   */
  constructor() {
    super();

    /**
     * Whether default styling is disabled.
     *
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * Reference to the vis-timeline Timeline instance.
     *
     * @type {import("vis-timeline/standalone").Timeline | null}
     */
    this.visTimeline = null;
  }

  /**
   * Gets the container element for the timeline.
   *
   * @returns {HTMLElement | null} The timeline container element.
   */
  getContainer() {
    return /** @type {HTMLElement} */ (
      this.renderRoot.querySelector("#timeline")
    );
  }

  /**
   * Sets the date range on the timeline by updating custom time markers.
   *
   * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
   */
  setDateRange(dateRange) {
    setDateRangeMethod(dateRange, this);
  }

  /**
   * Initializes the timeline with items and groups from the parent timecontrol component.
   * Should be called after the timecontrol has populated its items and groups DataSets.
   */
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
