import { LitElement, html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { style } from "../styles/style.js";
import { firstUpdatedMethod, getSelectedDatesMethod } from "../methods/picker";
import {
  cleanCalendarStyles,
  extractISOFromCalendar,
  calendarStyle,
  getUTCLocalDateTime,
} from "../helpers";
import { Calendar } from "vanilla-calendar-pro";
import groupBy from "lodash.groupby";
import find from "lodash.find";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("vanilla-calendar-pro").DateAny} DateAny
 */

let lastClickDate = null;

/**
 * The `eox-timecontrol-picker` component provides a calendar-based date picker for selecting single dates or date ranges.
 * It uses vanilla-calendar-pro and can be displayed inline or as a popup. The calendar can show dots indicating
 * available data on specific dates and supports both single and range selection modes.
 *
 * @element eox-timecontrol-picker
 */
export class EOxTimeControlPicker extends LitElement {
  /**
   * Defines the component's reactive properties.
   *
   * @returns {Object} Property definitions.
   */
  static get properties() {
    return {
      cal: { attribute: false, state: true },
      popup: { type: Boolean, attribute: "popup" },
      unstyled: { type: Boolean, attribute: "unstyled" },
      range: { type: Boolean, attribute: "range" },
      showItems: { type: Boolean, attribute: "show-items" },
      showDots: { type: Boolean, attribute: "show-dots" },
      position: { type: Array, attribute: false },
      itemTitleKey: { type: String, attribute: "item-title-key" },
      showTime: { type: Boolean, attribute: "show-time" },
      timeFormat: { type: String, attribute: "time-format" },
      propertyTransform: { attribute: false, type: Function },
    };
  }

  /**
   * Whether the calendar has been initialized.
   *
   * @type {boolean}
   */
  #init = false;

  /**
   * The currently selected date range.
   *
   * @type {DateRange | null}
   */
  #selectedDateRange = null;

  /**
   * Creates a new EOxTimeControlPicker instance.
   */
  constructor() {
    super();

    /**
     * Reference to the vanilla-calendar-pro Calendar instance.
     *
     * @type {Calendar | null}
     */
    this.cal = null;

    /**
     * Whether the calendar is displayed in popup mode.
     *
     * @type {boolean}
     */
    this.popup = false;

    /**
     * Whether default styling is disabled.
     *
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * Whether range selection is enabled.
     *
     * @type {boolean}
     */
    this.range = false;

    /**
     * Whether to show dots indicating available data on calendar dates.
     *
     * @type {boolean}
     */
    this.showDots = false;

    /**
     * Whether to show items in the calendar popup.
     *
     * @type {boolean}
     */
    this.showItems = false;

    /**
     * Position of the calendar picker.
     *
     * @type {Array<string>}
     */
    this.position = ["top", "left"];

    /**
     * Property key on the timeline item used to select the primary title line in the popup items card.
     * Available item properties include `layerName` (display name of the layer), `group` (layer ID),
     * `itemId` (item identifier), `originalDate` (date string), plus any custom properties defined on the
     * layer's `timeControlValues` objects (e.g., `cloudCoverage`).
     * Defaults to undefined (falls back to timecontrol's titleKey or 'name', resolving to the layer title).
     *
     * @type {string | undefined}
     */
    this.itemTitleKey = undefined;

    /**
     * Whether to show time in the popup items card. Defaults to true (omitted if item has no time component).
     *
     * @type {boolean}
     */
    this.showTime = true;

    /**
     * Format string for time display in the popup items card (dayjs format). Defaults to "HH:mm".
     *
     * @type {string}
     */
    this.timeFormat = "HH:mm";

    /**
     * Custom transformation function for popup items. Receives an item object containing
     * `{ title, subtitle, time, dotColor, layerName, group, itemId, originalDate, ...customItemProps }`.
     * Can return an updated item object, an HTML string, or null/false to hide the item.
     *
     * @type {((item: Object) => Object | string | null | false) | null}
     */
    this.propertyTransform = null;
  }

  /**
   * Lifecycle method called after the component's first update.
   * Injects calendar styles and initializes the calendar if not already initialized.
   */
  firstUpdated() {
    firstUpdatedMethod();
    if (!this.#init) this.initCalendar();
  }

  /**
   * Updates component when properties change.
   *
   * @param {Map<string, any>} changedProperties - Changed properties map.
   */
  updated(changedProperties) {
    super.updated(changedProperties);
    if (
      this.cal &&
      (changedProperties.has("showItems") ||
        changedProperties.has("showDots") ||
        changedProperties.has("range") ||
        changedProperties.has("itemTitleKey") ||
        changedProperties.has("showTime") ||
        changedProperties.has("timeFormat") ||
        changedProperties.has("propertyTransform"))
    ) {
      this.initCalendar({ selectedDateRange: this.#selectedDateRange });
    }
  }

  /**
   * Lifecycle method called when the component is disconnected from the DOM.
   * Cleans up calendar styles to prevent memory leaks.
   */
  disconnectedCallback() {
    if (this.cal) {
      this.cal.destroy();
      this.cal = null;
    }
    super.disconnectedCallback();
    cleanCalendarStyles();
  }

  /**
   * Sets the date range and updates the calendar selection.
   *
   * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
   */
  setDateRange(dateRange) {
    const EOxTimeControl = /** @type {EOxTimeControl} */ (
      this.closest("eox-timecontrol")
    );
    this.#selectedDateRange = dateRange;
    if (this.cal) {
      const selectedDates = getSelectedDatesMethod(
        this.#selectedDateRange,
        this.range,
        EOxTimeControl.showUTC,
      );
      this.cal.set({
        selectedDates: selectedDates.dates,
        selectedYear: selectedDates.year,
        selectedMonth: selectedDates.month,
      });
    }
  }

  /**
   * Emits the update:view event for the calendar picker.
   */
  #emitUpdateEvent() {
    const viewRange = this.getViewRange();
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("update:view", {
          detail: {
            start: viewRange.start,
            end: viewRange.end,
          },
          composed: true,
        }),
      );
    });
  }

  /**
   * Gets the view range of the calendar picker.
   *
   * @returns {Object} The view range of the calendar picker.
   */
  getViewRange() {
    const monthEle = this.cal.context.mainElement.querySelector(".vc-month");
    const yearEle = this.cal.context.mainElement.querySelector(".vc-year");
    const selectedMonth = monthEle
      ? Number(monthEle.getAttribute("data-vc-month"))
      : this.cal.selectedMonth;
    const selectedYear = yearEle
      ? Number(yearEle.getAttribute("data-vc-year"))
      : this.cal.selectedYear;
    const startDate = dayjs(
      `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-01`,
    ).startOf("month");
    const endDate = dayjs(startDate).endOf("month");
    return {
      start: startDate.toDate(),
      end: endDate.toDate(),
    };
  }

  /**
   * Initializes the calendar picker with the given options.
   * Creates a new vanilla-calendar-pro Calendar instance and sets up event handlers for date selection.
   *
   * @param {Object} [options={}] - Calendar initialization options.
   * @param {DateRange} [options.selectedDateRange] - Initial selected date range.
   * @param {DateAny} [options.min] - Minimum selectable date.
   * @param {DateAny} [options.max] - Maximum selectable date.
   */
  initCalendar(options = {}) {
    this.#init = true;
    const EOxTimeControl = /** @type {EOxTimeControl} */ (
      this.closest("eox-timecontrol")
    );
    setTimeout(() => {
      const defaultCalendarSelector = /** @type {HTMLElement} */ (
        this.renderRoot.querySelector("#cal")
      );
      const externalCalendarSelector =
        /** @type {import("../main.js").EOxTimeControl} */ (
          EOxTimeControl.querySelector(
            "eox-timecontrol-date",
          )?.shadowRoot?.querySelector("span")
        );
      const calendarSelector = !this.popup
        ? defaultCalendarSelector
        : externalCalendarSelector || defaultCalendarSelector;
      if (calendarSelector) {
        defaultCalendarSelector.innerHTML = "";
        this.#selectedDateRange =
          options.selectedDateRange ||
          this.#selectedDateRange ||
          EOxTimeControl?.selectedDateRange;
        const showUTC = EOxTimeControl.showUTC;
        const selectedDates = getSelectedDatesMethod(
          this.#selectedDateRange,
          this.range,
          showUTC,
        );
        const data = EOxTimeControl.items.get();
        const groupKey = showUTC ? "utc" : "date";
        const itemGroups = groupBy(data, (item) =>
          item[groupKey] ? item[groupKey].split("T")[0] : undefined,
        );
        let popups = {};

        if (this.showItems) {
          const titleKey =
            this.itemTitleKey || EOxTimeControl?.titleKey || "name";
          const groupsList = Object.keys(groupBy(data, "group"));

          for (const date of Object.keys(itemGroups)) {
            const items = itemGroups[date];

            // Get top 3 items
            const topItems = items.slice(0, 3);
            const remainingCount = items.length - 3;

            // Build HTML for the list
            let listHTML = "";

            topItems.forEach((item) => {
              const hasTime =
                item.originalDate &&
                (item.originalDate.includes("T") ||
                  item.originalDate.includes(":") ||
                  (item.originalDate.includes(" ") &&
                    item.originalDate.length > 10));

              const formattedTime =
                this.showTime && hasTime
                  ? showUTC
                    ? dayjs(item.utc)
                        .utc()
                        .format(this.timeFormat || "HH:mm")
                    : dayjs(item.utc).format(this.timeFormat || "HH:mm")
                  : "";

              const group = item.group || "";
              const groupObj = /** @type {any} */ (
                EOxTimeControl?.groups?.get(group)
              );
              const groupContent = Array.isArray(groupObj)
                ? groupObj[0]?.content
                : groupObj?.content;
              const layerTitle = item.layerName || groupContent || "";

              const hasItemValue =
                item[titleKey] !== undefined && item[titleKey] !== null;

              let title = hasItemValue
                ? item[titleKey]
                : (titleKey === "id" ? item.itemId || item.id : null) ||
                  (titleKey === "name" ? layerTitle : null) ||
                  layerTitle ||
                  item.name ||
                  item.title ||
                  item.itemId ||
                  group;

              let subtitle = "";
              if (
                hasItemValue &&
                String(item[titleKey]) !== String(layerTitle)
              ) {
                subtitle = layerTitle || group;
              } else if (
                titleKey !== "id" &&
                item.itemId &&
                item.itemId !== item.id
              ) {
                subtitle = item.itemId;
              }

              const dotColor = `var(--dot-color-${groupsList.indexOf(group) + 1}, var(--primary))`;

              let itemData = {
                title: String(title ?? ""),
                subtitle: String(subtitle || ""),
                time: formattedTime,
                dotColor: dotColor,
                ...item,
              };

              let customHtml = null;

              if (typeof this.propertyTransform === "function") {
                const transformed = this.propertyTransform(itemData);
                if (transformed === false || transformed === null) {
                  return;
                }
                if (typeof transformed === "string") {
                  customHtml = transformed;
                } else if (
                  typeof transformed === "object" &&
                  transformed !== null
                ) {
                  itemData = {
                    ...itemData,
                    ...transformed,
                  };
                }
              }

              if (customHtml !== null) {
                listHTML += `
                <div class="vc-item-popup__item">
                  ${customHtml}
                </div>
              `;
              } else {
                const displayTitle = itemData.title || "";
                const truncatedTitle =
                  displayTitle.length > 30
                    ? displayTitle.substring(0, 30) + "..."
                    : displayTitle;

                const metaParts = [itemData.time, itemData.subtitle].filter(
                  Boolean,
                );
                const metaText = metaParts.join(" ");

                listHTML += `
                <div class="vc-item-popup__item">
                  <div class="vc-item-popup__item-content">
                    <div class="vc-item-popup__dot" style="background-color: ${itemData.dotColor || dotColor}"></div>
                    <div class="vc-item-popup__text-container">
                      <div class="vc-item-popup__id vc-item-popup__title">
                        ${truncatedTitle}
                      </div>
                      ${
                        metaText
                          ? `<div class="vc-item-popup__meta">${metaText}</div>`
                          : ""
                      }
                    </div>
                  </div>
                </div>
              `;
              }
            });

            // Add "more" indicator if there are remaining items
            if (remainingCount > 0) {
              listHTML += `
                <div class="vc-item-popup__more">
                  + ${remainingCount} more
                </div>
              `;
            }

            popups = {
              ...popups,
              [date]: {
                modifier: "vc-item-popup",
                html: listHTML,
              },
            };
          }
        }

        if (this.cal) {
          const wasOpen = Boolean(this.cal.context?.isShowInInputMode);
          const selectedYear =
            this.cal.context?.selectedYear ?? this.cal.selectedYear;
          const selectedMonth =
            this.cal.context?.selectedMonth ?? this.cal.selectedMonth;
          this.cal.set({
            popups: popups,
            selectionDatesMode: this.range ? "multiple-ranged" : "single",
            ...(options.min
              ? { dateMin: options.min, displayDateMin: options.min }
              : {}),
            ...(options.max
              ? { dateMax: options.max, displayDateMax: options.max }
              : {}),
            ...(selectedYear !== undefined ? { selectedYear } : {}),
            ...(selectedMonth !== undefined ? { selectedMonth } : {}),
          });
          if (wasOpen) {
            this.cal.show();
          }
          return;
        }

        this.cal = new Calendar(calendarSelector || "#cal", {
          selectedTheme: "light",
          dateMin: options.min,
          dateMax: options.max,
          displayDateMin: options.min,
          disableToday: false,
          displayDateMax: options.max,
          displayDatesOutside: true,
          type: "default",
          selectionDatesMode: this.range ? "multiple-ranged" : "single",
          ...(selectedDates
            ? {
                selectedDates: selectedDates.dates,
                selectedYear: selectedDates.year,
                selectedMonth: selectedDates.month,
              }
            : {}),
          enableEdgeDatesOnly: false,
          inputMode: this.popup ? true : false,
          //@ts-expect-error error from vanilla-calendar-pro types
          positionToInput: this.position,
          selectedWeekends: [],
          popups: popups,
          onClickArrow: () => this.#emitUpdateEvent(),
          onClickMonth: () => this.#emitUpdateEvent(),
          onClickYear: () => this.#emitUpdateEvent(),
          onClickDate: (self) => {
            const lengthOfDates = self.context.selectedDates.length - 1;
            const start = self.context.selectedDates[0] || lastClickDate;
            const end = this.range && self.context.selectedDates[lengthOfDates];
            if (start) {
              const startDate = getUTCLocalDateTime(
                start,
                EOxTimeControl.showUTC,
                true,
              );
              const endDate = getUTCLocalDateTime(
                end || start,
                EOxTimeControl.showUTC,
                false,
              );

              if (this.range) {
                if (lengthOfDates || lastClickDate === start) {
                  EOxTimeControl.dateChange(
                    [startDate, endDate],
                    EOxTimeControl,
                  );
                  lastClickDate = null;
                } else lastClickDate = start;
              } else {
                EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);
              }
            }
          },
          onCreateDateEls: (_self, dateEl) => {
            const date = extractISOFromCalendar(dateEl);
            const data = EOxTimeControl.items.get();
            const groupKey = EOxTimeControl.showUTC ? "utc" : "date";
            const itemsGroupedByDate = groupBy(data, (item) =>
              item[groupKey] ? item[groupKey].split("T")[0] : undefined,
            );
            const oldDots = dateEl.querySelector(".vc-day__dots");
            if (oldDots) oldDots.remove();
            const items = itemsGroupedByDate[date];
            const groupList = Object.keys(groupBy(data, "group"));

            if (items && dateEl.children.length) {
              const host = document.createElement("div");
              host.className = "vc-day__dots";
              const EOxItemFilter = /** @type {EOxItemFilter} */ (
                EOxTimeControl.querySelector("eox-itemfilter")
              );
              if (EOxItemFilter) {
                const results = EOxItemFilter.results;
                const dataAvailableAfterFilter = find(
                  results,
                  (result) => result.start === date,
                );
                if (!dataAvailableAfterFilter) {
                  dateEl.classList.add("vc-data-unavailable");
                }
              }

              const totalDots = items.length;
              const dotsRequired = totalDots <= 3 ? totalDots : 3;
              for (let i = 0; i < dotsRequired; i++) {
                dateEl.classList.add("vc-data-available");
                if (dateEl.hasAttribute("data-vc-date-today")) {
                  dateEl.removeAttribute("data-vc-date-today");
                }

                if (this.showDots) {
                  if (i < 2 || (i === 2 && totalDots === 3)) {
                    const dot = document.createElement("div");
                    dot.className = "vc-day__dot";
                    dot.style.backgroundColor = `var(--dot-color-${groupList.indexOf(items[i].group) + 1}, var(--primary))`;
                    host.appendChild(dot);
                  } else {
                    const plus = document.createElement("div");
                    plus.className = "vc-day__plus";
                    host.appendChild(plus);
                  }
                }
              }
              dateEl.appendChild(host);
            }
          },
        });
        this.cal.init();
      }
    });
  }

  render() {
    return html`
      <style>
        ${style}
        ${calendarStyle}
      </style>
      <div id="cal" class="timecontrol-calendar-input" readonly />
    `;
  }
}
customElements.define("eox-timecontrol-picker", EOxTimeControlPicker);
