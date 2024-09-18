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
    /** @type {SVGElement[]} */
    this._sliderTicks = [];
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
    this.sliderTicks = this.calculateSliderTicks();
    this.handleResize();
  }

  updated(changedProperties) {
    if (changedProperties.has("steps")) {
      this.yearMarks = this.calculateYearMarks();
      this.sliderTicks = this.calculateSliderTicks();
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

    // Group all of the date strings by year
    this.steps.forEach((step) => {
      const date = dayjs(step);
      const year = date.year();
      let yearGroup = yearGroups.find((yg) => yg.year === year);

      if (!yearGroup) {
        // We've encountered a new year, so create a new year group
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
    return this._sliderTicks;
  }

  set sliderTicks(value) {
    this._sliderTicks = value;
    this.requestUpdate();
  }

  calculateYearBars() {
    const minBarWidth = 30; // Minimum width for a bar to render the year label
    const barSpacing = 2; // Adjust this value to control the spacing between bars

    return this._years.flatMap((year, yearIndex) => {
      // Calculate the start and end position of the bar for the year
      const startPosition =
        (this.steps.indexOf(year.dates[0].date) / (this.steps.length - 1)) *
        this.width;
      const endPosition =
        (this.steps.indexOf(year.dates[year.dates.length - 1].date) /
          (this.steps.length - 1)) *
        this.width;
      const barWidth = Math.max(0, endPosition - startPosition - barSpacing); // Subtract barSpacing from width

      const elements = [];

      // Render the year bar
      elements.push(svg`
            <rect
              key=${yearIndex}
              x=${
                startPosition + barSpacing / 2
              } // Add half the spacing to the start position
              y="0"
              width=${barWidth}
              height="6"
              fill="#7596A2"
            ></rect>
        `);

      // Conditionally render the year label if the bar width is sufficient
      if (barWidth >= minBarWidth) {
        elements.push(svg`
                <text
                  key=${`label-${yearIndex}`}
                  x=${startPosition + 16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${year.year}
                </text>
            `);
      }

      return elements;
    });
  }

  calculateIndividualTicks() {
    return this._years.flatMap((year, yearIndex) => {
      // Calculate the number of ticks that should be evenly spaced across the slider
      const totalSteps = this.steps.length;
      const tickInterval = Math.max(1, Math.floor(totalSteps / this.width)); // Ensure at least one tick per pixel

      return year.dates
        .filter((_, dateIndex) => dateIndex % tickInterval === 0) // Filter dates to achieve even spacing
        .map((date, i) => {
          // Calculate position within the entire slider based on global index
          const globalIndex = this.steps.indexOf(date.date);
          const position = (globalIndex / (this.steps.length - 1)) * this.width;

          const elements = [];

          elements.push(svg`
                <line
                  key=${yearIndex}-${i}
                  x1=${position}
                  y1="0"
                  x2=${position}
                  y2=${date.isYearMarker ? 12 : 6}
                  stroke=${date.isYearMarker ? "#222" : "#7596A2"}
                  stroke-width="1"
                ></line>
              `);

          if (date.isYearMarker) {
            elements.push(svg`
                  <text
                    key=${`label-${yearIndex}`}
                    x=${position + 16}
                    y="30"
                    fill="#555"
                    font-size="14"
                    text-anchor="middle"
                  >
                    ${year.year}
                  </text>
                `);
          }

          return elements;
        });
    });
  }

  get density() {
    return this.steps.length / this.width;
  }

  calculateSliderTicks() {
    if (this.density <= 0.5) {
      return this.calculateIndividualTicks();
    } else if (this.density > 0.5 && this.density < 10.0) {
      return this.calculateYearBars();
    } else if (this.density >= 10.0) {
      return this.calculateDecadeBars();
    }
  }

  calculateDecadeBars() {
    const startTime = performance.now();

    const minBarWidth = 30;
    // Very high density: Render bars or labels for each decade
    const barSpacing = 2;
    const decadeGroups = this._years.reduce((acc, yearGroup) => {
      const decade = Math.floor(yearGroup.year / 10) * 10;
      if (!acc[decade]) {
        acc[decade] = [];
      }
      acc[decade].push(...yearGroup.dates);
      return acc;
    }, {});

    const res = Object.keys(decadeGroups).flatMap((decade, index) => {
      const startPosition =
        (this.steps.indexOf(decadeGroups[decade][0].date) /
          (this.steps.length - 1)) *
        this.width;
      const endPosition =
        (this.steps.indexOf(
          decadeGroups[decade][decadeGroups[decade].length - 1].date
        ) /
          (this.steps.length - 1)) *
        this.width;
      const barWidth = Math.max(0, endPosition - startPosition - barSpacing);

      const elements = [];

      elements.push(svg`
            <rect
              key=${`decade-${index}`}
              x=${startPosition + barSpacing / 2}
              y="0"
              width=${barWidth}
              height="6"
              fill="#555"
            ></rect>
        `);

      if (barWidth >= minBarWidth) {
        elements.push(svg`
                <text
                  key=${`decade-label-${index}`}
                  x=${startPosition + 18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${decade}
                </text>
            `);
      }

      return elements;
    });

    const endTime = performance.now();
    /*console.log(
      "Time taken to calculate decade bars: ",
      endTime - startTime,
      "ms"
    );*/

    return res;
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
          ${this.sliderTicks} ${this.yearMarks}
        </svg>
      </div>
    `;
  }
}

/*
this.years.map((year, index) => svg`
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
`)
*/

customElements.define("eox-sliderticks", SliderTicks);
