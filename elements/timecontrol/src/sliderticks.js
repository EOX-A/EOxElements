import { LitElement, html, svg } from "lit";
import dayjs from "dayjs";

/**
 * @typedef {Object} YearMark
 * @property {number} label
 * @property {number} position
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
    this.handleResize();
  }

  handleResize() {
    this.svgWidth = this.shadowRoot.querySelector("svg").clientWidth;
    this.height = this.shadowRoot.querySelector("svg").clientHeight;
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

  /**
   * @returns {YearMark[]}
   */
  get yearMarks() {
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
    const isYearMark = this.yearMarks.some(
      (yearMark) => Math.abs(yearMark.position - line) < 1.0,
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
          `,
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
          `,
          )}
        </svg>
      </div>
    `;
  }
}

customElements.define("eox-sliderticks", SliderTicks);
