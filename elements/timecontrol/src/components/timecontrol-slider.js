import { LitElement, html } from "lit";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import noUiSliderCSS from "nouislider/dist/nouislider.css?inline";
import noUiSlider from "nouislider";
import { sliderStyle } from "../styles/style.slider.js";
import { TIME_CONTROL_DATE_FORMAT } from "../enums.js";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import groupBy from "lodash.groupby";

dayjs.extend(utc);
dayjs.extend(timezone);

const DAY_MS = 24 * 60 * 60 * 1000;

export class EOxTimeControlSlider extends LitElement {
  static get properties() {
    return {
      unstyled: { type: Boolean, attribute: "unstyled" },
      data: { type: Array },
      selectedDateRange: { type: Array },
    };
  }

  #slider;
  #sliderInstance;
  #items = null;
  #selectedDateRange = [];
  constructor() {
    super();
    this.unstyled = false;
    this.#slider = null;
    this.#sliderInstance = null;
  }

  get sliderInstance() {
    return this.#sliderInstance;
  }

  setDateRange(dateRange, data) {
    this.#selectedDateRange = dateRange;
    if (data && data.length) {
      this.#items = Object.keys(groupBy(data, "utc")).sort((a, b) =>
        dayjs(a).diff(dayjs(b), "day"),
      );
    }
    this.requestUpdate();
    this.#setupFromProps(true);
  }

  firstUpdated() {
    this.#slider = /** @type {HTMLElement} */ (
      this.renderRoot.querySelector("#slider")
    );
    this.#setupFromProps();
    this.#setupTooltipHover();
  }

  updated(changedProps) {
    if (changedProps.has("data") || changedProps.has("selectedDateRange")) {
      this.#setupFromProps(true);
      this.#setupTooltipHover();
    }
  }

  #setupFromProps(recreate = false) {
    if (!this.#slider || !this.#items || !this.#items.length) return;

    if (recreate && this.#sliderInstance) {
      this.#sliderInstance.destroy();
      this.#sliderInstance = null;
      this.#slider.innerHTML = "";
    }

    const dateTs = this.#items
      .map((d) => this.#dateStringToUtcMs(d))
      .filter((n) => !Number.isNaN(n))
      .sort((a, b) => a - b);

    if (!dateTs.length) return;

    const minTs = dateTs[0];
    const maxTs = dateTs[dateTs.length - 1];

    const [startSel, endSel] = this.#selectedRangeOrDefaultFromDates(
      minTs,
      maxTs,
      this.#selectedDateRange,
    );
    console.log(startSel, endSel);

    const { tickValues, monthTickSet, yearTickSet } =
      this.#buildTicksFromDates(dateTs);

    const yearKeys = new Set([...yearTickSet].map(Number));
    const monthKeys = new Set([...monthTickSet].map(Number));
    const EOxTimeControl = /** @type {EOxTimeControl} */ (
      this.closest("eox-timecontrol")
    );
    const format =
      EOxTimeControl.querySelector("eox-timecontrol-date")?.format ||
      TIME_CONTROL_DATE_FORMAT;

    this.#sliderInstance = noUiSlider.create(this.#slider, {
      start: [startSel, endSel],
      connect: true,
      range: {
        min: minTs,
        max: maxTs,
      },
      step: DAY_MS,
      pips: {
        mode: "values",
        values: tickValues,
        density: 5,
        format: {
          to: (value) => {
            const num = Number(value);
            if (yearKeys.has(num)) return dayjs.utc(num).year().toString();
            if (monthKeys.has(num)) return dayjs.utc(num).format("MMM");
            return "";
          },
          from: (value) => Number(value),
        },
      },
      tooltips: [
        {
          to: (value) => dayjs(value).format(format),
        },
        {
          to: (value) => dayjs(value).format(format),
        },
      ],
    });

    this.#sliderInstance.on("change", (values) => {
      const [v1, v2] = values.map(Number);
      const rangeDates = this.#tsRangeToSelectedDates(v1, v2);
      if (EOxTimeControl) {
        EOxTimeControl.dateChange(rangeDates, EOxTimeControl);
      }
    });

    // Re-setup tooltip hover logic after sliderInstance is created
    this.#setupTooltipHover();
  }

  // Show tooltip on hover handler
  #setupTooltipHover() {
    if (!this.#slider) return;
    // Wait until sliderInstance is created & handles exist
    setTimeout(() => {
      const handles = this.#slider.querySelectorAll(".noUi-handle");
      const tooltips = this.#slider.querySelectorAll(".noUi-tooltip");
      // Hide tooltips by default (if not focused or active drag)
      tooltips.forEach((tooltip) => {
        tooltip.style.opacity = "0";
        tooltip.style.pointerEvents = "none";
      });
      handles.forEach((handle, i) => {
        // Remove any previous listeners (by setting anew)
        handle.onmouseenter = () => {
          if (tooltips[i]) {
            tooltips[i].style.opacity = "1";
            tooltips[i].style.pointerEvents = "";
          }
        };
        handle.onmouseleave = () => {
          if (tooltips[i]) {
            tooltips[i].style.opacity = "0";
            tooltips[i].style.pointerEvents = "none";
          }
        };
        // Also show tooltip on keyboard focus
        handle.onfocus = () => {
          if (tooltips[i]) {
            tooltips[i].style.opacity = "1";
            tooltips[i].style.pointerEvents = "";
          }
        };
        handle.onblur = () => {
          if (tooltips[i]) {
            tooltips[i].style.opacity = "0";
            tooltips[i].style.pointerEvents = "none";
          }
        };
      });
      // Show tooltips while dragging
      if (this.#sliderInstance) {
        this.#sliderInstance.off?.("start.showTooltip");
        this.#sliderInstance.off?.("end.hideTooltip");
        this.#sliderInstance.on("start.showTooltip", () => {
          tooltips.forEach((tooltip) => {
            tooltip.style.opacity = "1";
            tooltip.style.pointerEvents = "";
          });
        });
        this.#sliderInstance.on("end.hideTooltip", () => {
          tooltips.forEach((tooltip) => {
            tooltip.style.opacity = "0";
            tooltip.style.pointerEvents = "none";
          });
        });
      }
    }, 0);
  }

  #dateStringToUtcMs(dateStr) {
    return dayjs.utc(dateStr, "YYYY-MM-DD").startOf("day").valueOf();
  }

  #selectedRangeOrDefaultFromDates(minTs, maxTs, selectedDateRange) {
    if (selectedDateRange && selectedDateRange.length === 2) {
      const start = dayjs(selectedDateRange[0]).utc().startOf("day");
      const end = dayjs(selectedDateRange[1]).utc().endOf("day");
      if (start.isValid() && end.isValid()) {
        const s = Math.max(minTs, start.valueOf());
        const e = Math.min(maxTs, end.valueOf());
        return [s, e];
      }
    }
    return [minTs, maxTs];
  }

  #buildTicksFromDates(dateTs) {
    const tickValues = [];
    const monthTickSet = new Set();
    const yearTickSet = new Set();

    const seenYear = new Set();
    const seenYearMonth = new Set();

    for (const ts of dateTs) {
      const d = dayjs.utc(ts);
      const year = d.year();
      const month = d.month();

      const yKey = `${year}`;
      const ymKey = `${year}-${month}`;

      if (!seenYear.has(yKey)) {
        seenYear.add(yKey);
        const jan1 = dayjs
          .utc()
          .year(year)
          .month(0)
          .date(1)
          .startOf("day")
          .valueOf();
        yearTickSet.add(jan1);
      }

      if (!seenYearMonth.has(ymKey)) {
        seenYearMonth.add(ymKey);
        const firstOfMonth = dayjs
          .utc()
          .year(year)
          .month(month)
          .date(1)
          .startOf("day")
          .valueOf();
        monthTickSet.add(firstOfMonth);
      }
    }

    yearTickSet.forEach((v) => tickValues.push(v));
    monthTickSet.forEach((v) => tickValues.push(v));
    tickValues.sort((a, b) => a - b);

    return { tickValues, monthTickSet, yearTickSet };
  }

  #tsRangeToSelectedDates(startTs, endTs) {
    const tz = dayjs.tz.guess();

    const startLocal = dayjs.utc(startTs).tz(tz).startOf("day");
    const endLocal = dayjs.utc(endTs).tz(tz).endOf("day");

    const startIso = startLocal.utc().toISOString();
    const endIso = endLocal.utc().toISOString();

    return [startIso, endIso];
  }

  render() {
    return html`
      <style>
        ${style}
        ${noUiSliderCSS}
        ${!this.unstyled && styleEOX}
        ${sliderStyle}
      </style>
      <div class="date-range-slider-wrapper">
        <div id="slider"></div>
      </div>
    `;
  }
}

customElements.define("eox-timecontrol-slider", EOxTimeControlSlider);
