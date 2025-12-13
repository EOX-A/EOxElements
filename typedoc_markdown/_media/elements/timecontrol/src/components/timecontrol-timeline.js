import { LitElement, html } from "lit";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import { styleTimeline } from "../styles/style.timeline.js";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import {
  initTimelineMethod,
  setDateRangeMethod,
} from "../methods/timeline/index.js";
import { when } from "lit/directives/when.js";

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
   * Reference to the vis-timeline Timeline instance.
   *
   * @type {import("vis-timeline/standalone").Timeline}
   */
  #visTimeline = null;

  /**
   * Whether the timecontrol is loading.
   *
   * @type {boolean}
   */
  #loading = false;

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
  }

  /**
   * Gets the vis-timeline Timeline instance.
   *
   * @returns {import("vis-timeline/standalone").Timeline}
   */
  get visTimeline() {
    return this.#visTimeline;
  }

  /**
   * Sets the vis-timeline Timeline instance.
   *
   * @param {import("vis-timeline/standalone").Timeline} visTimeline - The vis-timeline Timeline instance.
   */
  set visTimeline(visTimeline) {
    this.#visTimeline = visTimeline;
  }

  /**
   * Sets the loading state of the timeline.
   *
   * @param {boolean} value - The loading state.
   */
  set loading(value) {
    this.#loading = value;
    this.requestUpdate();
  }

  /**
   * Gets the loading state of the timeline.
   *
   * @returns {boolean} The loading state.
   */
  get loading() {
    return this.#loading;
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
   * Gets the window of the vis-timeline Timeline instance.
   *
   * @returns {Object} The window of the vis-timeline Timeline instance.
   */
  getViewRange() {
    return this.#visTimeline.getWindow();
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
        ${when(
          this.loading,
          () => html`
            <div class="load-wrapper-container">
              <div class="load-wrapper">
                <div class="shimmer"></div>
              </div>
            </div>
          `,
        )}
      </div>
    `;
  }
}
customElements.define("eox-timecontrol-timeline", EOxTimeControlTimeline);
