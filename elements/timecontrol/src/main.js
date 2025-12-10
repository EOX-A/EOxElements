/// <reference types="vite/client" />

import { LitElement, html } from "lit";
import { style } from "./styles/style.js";
import { styleEOX } from "./styles/style.eox.js";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import { DataSet } from "vis-data/standalone";

import "./components/timecontrol-date";
import "./components/timecontrol-picker";
import "./components/timecontrol-timeline";
import "./components/timecontrol-timelapse";
import "./components/timecontrol-slider";

import {
  firstUpdatedMethod,
  dateChangeHandlerMethod,
  filterHandlerMethod,
} from "./methods/timecontrol";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(utc);

/**
 * @typedef {import("./types").SliderValue} SliderValue
 * @typedef {import("./types").DateRange} DateRange
 * @typedef {import("./types").SelectedDateRange} SelectedDateRange
 * @typedef {import("./types").TimelineItem} TimelineItem
 * @typedef {import("./types").TimelineGroup} TimelineGroup
 * @typedef {import("@eox/map").EOxMap} EOxMap
 */

/**
 * The `eox-timecontrol` element provides interactive time navigation for map layers, supporting animation, a simple time slider, timeline visualization, date picker, and custom date formatting.
 *
 * ## Basic usage:
 *
 * ```
 * import "@eox/timecontrol"
 *
 * <eox-timecontrol for="eox-map#my-map">
 *   <eox-timecontrol-date></eox-timecontrol-date>
 *   <eox-timecontrol-slider></eox-timecontrol-slider>
 *   <eox-timecontrol-timeline></eox-timecontrol-timeline>
 *   <eox-timecontrol-timelapse></eox-timecontrol-timelapse>
 *   <eox-timecontrol-picker></eox-timecontrol-picker>
 * </eox-timecontrol>
 * ```
 *
 * ## Features
 *
 * - **Time-based Layer Control:** Link to an `<eox-map>` instance for time-based WMS layer control. Automatically detects layers with `timeControlValues` and `timeControlProperty` properties.
 * - **Multiple UI Components:** Supports date display, date picker (popup or inline), timeline visualization, slider, and timelapse export.
 * - **Navigation Controls:** Previous/next buttons for stepping through time periods.
 * - **Date Formatting:** Customizable display format using dayjs tokens (default: "YYYY-MM-DD").
 * - **Filtering:** Integration with `<eox-itemfilter>` for filtering timeline items by metadata properties.
 * - **Timelapse Export:** Export animated GIFs or MP4s from time series data.
 * - **Standalone Mode:** Can be used without a map for time selection purposes.
 *
 * ## Component Structure
 *
 * The timecontrol element acts as a container for child components:
 * - `<eox-timecontrol-date>`: Displays the current selected date(s) with optional navigation buttons.
 * - `<eox-timecontrol-picker>`: Calendar-based date picker (popup or inline, single or range selection).
 * - `<eox-timecontrol-slider>`: Range slider for selecting date ranges.
 * - `<eox-timecontrol-timeline>`: Timeline visualization using vis-timeline.
 * - `<eox-timecontrol-timelapse>`: Timelapse export functionality.
 *
 * ## Layer Configuration
 *
 * Layers must have the following properties to work with timecontrol:
 * - `properties.timeControlValues`: Array of objects with `date` and optional metadata.
 * - `properties.timeControlProperty`: Property name used in WMS requests (e.g., "TIME").
 * - `properties.id`: Layer identifier (used for grouping in timeline).
 * - `properties.name`: Display name (used in timeline groups).
 *
 * ## Events
 *
 * - `stepchange`: Fired when the current time step changes (not currently implemented).
 *
 * @element eox-timecontrol
 */
export class EOxTimeControl extends LitElement {
  /**
   * Defines the component's reactive properties.
   *
   * @returns {Object} Property definitions.
   */
  static get properties() {
    return {
      for: { type: String },
      unstyled: { type: Boolean },
      titleKey: { type: String, attribute: "title-key" },
      layerIdKey: { type: String, attribute: "layer-id-key" },
      externalMapRendering: {
        type: Boolean,
        attribute: "external-map-rendering",
      },
      selectedDateRange: { type: Array, attribute: "selected-date-range" },
    };
  }

  /**
   * Reference to the associated eox-map element instance.
   *
   * @type {EOxMap | null}
   */
  #eoxMap = null;

  /**
   * DataSet containing timeline groups for vis-timeline.
   *
   * @type {import("vis-data/standalone").DataSet}
   */
  #groups = new DataSet([]);

  /**
   * DataSet containing timeline items for vis-timeline.
   *
   * @type {import("vis-data/standalone").DataSet<TimelineItem>}
   */
  #items = new DataSet([]);

  /**
   * Array of slider value configurations extracted from map layers.
   *
   * @type {Array<SliderValue>}
   */
  #sliderValues = [];

  /**
   * Creates a new EOxTimeControl instance.
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
     * The currently selected date range as [startDate, endDate] in ISO format.
     *
     * @type {SelectedDateRange}
     */
    this.selectedDateRange = null;

    /**
     * Property key used to retrieve layer titles (default: "name").
     *
     * @type {string}
     */
    this.titleKey = "name";

    /**
     * Property key used to identify layers (default: "id").
     *
     * @type {string}
     */
    this.layerIdKey = "id";

    /**
     * Whether external map rendering is enabled for timelapse export.
     *
     * @type {boolean}
     */
    this.externalMapRendering = false;

    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";
  }

  /**
   * Gets the array of slider values extracted from map layers.
   *
   * @type {Array<SliderValue>}
   * @returns {Array<SliderValue>} The slider values array.
   */
  get sliderValues() {
    return this.#sliderValues;
  }

  /**
   * Sets the array of slider values.
   *
   * @param {Array<SliderValue>} value - The new slider values array.
   */
  set sliderValues(value) {
    this.#sliderValues = value;
  }

  /**
   * Gets the reference to the associated eox-map element.
   *
   * @type {EOxMap | null}
   * @returns {EOxMap | null} The eox-map instance or null if not found.
   */
  get eoxMap() {
    return this.#eoxMap;
  }

  /**
   * Sets the reference to the associated eox-map element.
   *
   * @param {EOxMap | null} value - The eox-map instance to associate.
   */
  set eoxMap(value) {
    this.#eoxMap = value;
  }

  /**
   * Gets the DataSet containing timeline groups.
   *
   * @type {import("vis-data/standalone").DataSet<TimelineGroup>}
   * @returns {import("vis-data/standalone").DataSet<TimelineGroup>} The groups DataSet.
   */
  get groups() {
    return this.#groups;
  }

  /**
   * Sets the DataSet containing timeline groups.
   *
   * @param {import("vis-data/standalone").DataSet<TimelineGroup>} value - The groups DataSet.
   */
  set groups(value) {
    this.#groups = value;
  }

  /**
   * Gets the DataSet containing timeline items.
   *
   * @type {import("vis-data/standalone").DataSet<TimelineItem>}
   * @returns {import("vis-data/standalone").DataSet<TimelineItem>} The items DataSet.
   */
  get items() {
    return this.#items;
  }

  /**
   * Sets the DataSet containing timeline items.
   *
   * @param {import("vis-data/standalone").DataSet<TimelineItem>} value - The items DataSet.
   */
  set items(value) {
    this.#items = value;
  }

  /**
   * Gets the container element for the timeslider (legacy method).
   *
   * @returns {Element | null} The container element or null if not found.
   */
  getContainer() {
    return this.renderRoot.querySelector("#timeslider");
  }

  /**
   * Sets the loading state and triggers a re-render.
   */
  setLoading() {
    this.requestUpdate();
  }

  /**
   * Handler for date change events. Updates the selected date range and applies it to map layers.
   *
   * @type {Function}
   * @param {DateRange} dateRange - The new date range [startDate, endDate] in ISO format.
   * @param {EOxTimeControl} instance - The EOxTimeControl instance.
   */
  dateChange = dateChangeHandlerMethod;

  /**
   * Lifecycle method called after the component's first update.
   * Initializes the timecontrol by finding the associated map and setting up layer listeners.
   */
  firstUpdated() {
    firstUpdatedMethod(this);
    this.requestUpdate();
  }

  /**
   * Handler for filter events from eox-itemfilter. Updates timeline item visibility based on filter results.
   *
   * @type {Function}
   * @param {CustomEvent | undefined} event - The filter event (optional).
   * @param {EOxTimeControl} instance - The EOxTimeControl instance.
   */
  filter = filterHandlerMethod;

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define("eox-timecontrol", EOxTimeControl);
