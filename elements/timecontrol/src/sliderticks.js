import { LitElement, html, svg } from "lit";
import dayjs from "dayjs";

/**
 * @typedef {Object} YearMark
 * @property {number} label
 * @property {number} position
 */

/**
 * @typedef {Object} YearGroup
 * @property {number} year
 * @property {string[]} dates
 */

/**
 * @element eox-sliderticks
 */
export class SliderTicks extends LitElement {
  static get properties() {
    return {
      width: { type: Number },
      steps: { type: Array },
    };
  }

  constructor() {
    super();
    /** @type {number} */
    this.width = 0;
    /** @type {string[]} */
    this.steps = [];
    /** @type {number} */
    this.height = 6;
    /** @type {number} */
    this.svgWidth = 0;
    /** @type {YearMark[]} */
    this._yearMarks = [];
    /** @type {YearGroup[]} */
    this._years = [];
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.yearMarks = this.calculateYearMarks();
    this.handleResize();
  }

  updated(changedProperties) {
    if (changedProperties.has("steps")) {
      this.yearMarks = this.calculateYearMarks();
      this.handleResize();
    }
  }

  handleResize() {
    this.svgWidth = this.shadowRoot.querySelector("svg").clientWidth;
    this.height = this.shadowRoot.querySelector("svg").clientHeight;
  }

  /**
   * Groups the dates by year.
   * @returns {YearGroup[]}
   */
  groupDatesByYear() {
    const yearGroups = [];

    this.steps.forEach((step) => {
      const date = dayjs(step);
      const year = date.year();
      let yearGroup = yearGroups.find((yg) => yg.year === year);

      if (!yearGroup) {
        yearGroup = { year, dates: [] };
        yearGroups.push(yearGroup);
      }

      yearGroup.dates.push(step);
    });

    return yearGroups;
  }

  /**
   * Preprocess time strings for easier rendering.
   * @returns {YearGroup[]}
   */
  preprocessDates() {
    const yearGroups = [];

    this.steps.forEach((step) => {
      const date = dayjs(step);
      const year = date.year();
      let yearGroup = yearGroups.find((yg) => yg.year === year);

      if (!yearGroup) {
        yearGroup = {
          year,
          // How much of the total time this year represents
          ratio: 0.0,
          dates: [],
        };
        yearGroups.push(yearGroup);
      }

      yearGroup.dates.push({
        date: step,
        isYearMarker: yearGroup.dates.length === 0,
      });
    });

    for (let g of yearGroups) {
      g.ratio = g.dates.length / this.steps.length;
    }

    return yearGroups;
  }

  get sliderTicks() {
    return this._years.flatMap((year, yearIndex) => {
      const totalDatesInYear = year.dates.length;
      const maxTicksForYear = Math.floor(this.width / this._years.length / 2); // Adjust based on the available width for each year
      const stepSize = Math.max(1, Math.ceil(totalDatesInYear / maxTicksForYear)); // Step size calculated per year

      return year.dates
        .filter((_, dateIndex) => dateIndex % stepSize === 0) // Filter dates by step size per year
        .map((date, i) => {
          // Calculate position within the entire slider based on global index
          const globalIndex = this.steps.indexOf(date.date);
          const position = (globalIndex / (this.steps.length - 1)) * this.width;

          return svg`
            <line
              key=${yearIndex}-${i}
              x1=${position}
              y1="0"
              x2=${position}
              y2=${date.isYearMarker ? 12 : 6}
              stroke=${date.isYearMarker ? "#222" : "#7596A2"}
              stroke-width="1"
            ></line>
          `;
        });
    });
  }

  /**
   * @returns {number[]}
   */
  get lines() {
    const num = this.numLines > this.width / 2 ? this.width / 2 : this.numLines;

    const spacing = this.width / (num - 1);
    return Array.from({ length: this.numLines }, (_, i) => i * spacing);
  }

  /**
   * @returns {number}
   */
  get numLines() {
    return this.steps ? this.steps.length : 0;
  }

  get yearMarks() {
    return this._yearMarks;
  }

  set yearMarks(value) {
    this._yearMarks = value;
    this.requestUpdate();
  }

  get years() {
    return this._years;
  }

  set years(value) {
    this._years = value;
    this.requestUpdate();
  }

  /**
   * @returns {YearMark[]}
   */
  calculateYearMarks() {
    console.log(this.preprocessDates());
    this._years = this.preprocessDates();
    /** @type {YearMark[]} */
    const yearMarks = [];
    /** @type {number | null} */
    let previousYear = null;

    this.lines.forEach((line, index) => {
      const currentStep = dayjs(this.steps[index]);
      const currentYear = currentStep.year();

      // If it's the first tick or if the year has changed, add a year mark
      if (index === 0 || currentYear !== previousYear) {
        yearMarks.push({
          label: currentYear,
          position: line, // Assuming 'line' is the position of the tick
        });
      }

      // Update previousYear for the next iteration
      previousYear = currentYear;
    });

    // Filter out year marks that are too close together, in favor of the second one.
    return yearMarks.filter((current, i) => {
      const next = yearMarks[i + 1];

      return !(next && next.position - current.position < 25);
    });
  }

  /**
   * @param {number} line
   * @returns {boolean}
   */
  isYearLine(line) {
    // Check if this line's position is approximately equal to any year mark position
    const isYearMark = this._yearMarks.some(
      (yearMark) => Math.abs(yearMark.position - line) < 1.0
    );

    return isYearMark;
  }

  render() {
    return html`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width + 2} ${this.height}"
        >
          ${this.sliderTicks}
          ${this.years
            .map((year, index) => svg`
              <text
                key=${`y${index}`}
                x=${year.position}
                y=${this.height - 1}
                fill="#555"
                font-size="13"
                font-weight="500"
              >
                ${year.label}
              </text>
            `
          )}
        </svg>
      </div>
    `;
  }


/*
  render() {
    return html`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width + 2} ${this.height}"
        >
          ${this.lines.map(
            (line, index) => svg`
            <line
              key=${index}
              x1=${line}
              y1="0"
              x2=${line}
              y2=${this.isYearLine(line) ? 12 : 6}
              stroke=${this.isYearLine(line) ? "#222" : "#7596A2"}
              stroke-width=${this.isYearLine(line) ? 1 : 1}
            ></line>
          `
          )}
          ${this.yearMarks.map(
            (year, index) => svg`
            <text
              key=${`y${index}`}
              x=${year.position}
              y=${this.height - 1}
              fill="#555"
              font-size="13"
              font-weight="500"
            >
              ${year.label}
            </text>
          `
          )}
        </svg>
      </div>
    `;
  }
*/
}

customElements.define("eox-sliderticks", SliderTicks);
