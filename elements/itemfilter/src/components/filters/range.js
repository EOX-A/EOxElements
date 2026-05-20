import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import _debounce from "lodash.debounce";
import "toolcool-range-slider";
import dayjs from "dayjs";
import { DATE_TIME_FORMAT } from "../../enums/index.js";
import {
  rangeInputHandlerMethod,
  rangeLabelMethod,
  resetRangeMethod,
} from "../../methods/filters/index.js";
import { isDate } from "../../helpers/index.js";

/**
 * EOxItemFilterRange is a custom web component that provides a range slider for filtering items.
 * It uses the LitElement base class and integrates with external methods for handling input events,
 * generating labels, and resetting the range filter.
 *
 * @module EOxItemFilterRange
 * @extends LitElement
 * @property {Object} filterObject - The filter object containing state and range limits.
 * @property {Array} suggestions - The list of suggestions for the selector.
 * @property {Number} tabIndex - The tab index for the input elements.
 */
export class EOxItemFilterRange extends LitElement {
  // Define properties with defaults and types
  static properties = {
    filterObject: { attribute: false, type: Object },
    suggestions: { attribute: false, type: Array },
    tabIndex: { attribute: false, type: Number },
  };

  constructor() {
    super();

    /**
     * @type Object
     */
    this.filterObject = {};

    /**
     * @type Array
     */
    this.suggestions = [];

    /**
     * @type Boolean
     */
    this.tabIndex = 0;

    /**
     * @type {(evt: CustomEvent<any>) => void}
     */
    this.inputHandler = this.#inputHandler.bind(this);

    /**
     * @type Function
     */
    this.debouncedInputHandler = _debounce(this.inputHandler, 500, {
      leading: false,
    });
  }

  /**
   * Handles the input event for the range slider.
   *
   * @param {CustomEvent} evt - The input event.
   */
  #inputHandler(evt) {
    rangeInputHandlerMethod(evt, this);
  }

  /**
   * Generates labels for the range slider.
   *
   * @param {string} val - The value of the label.
   * @param {string} pos - The position of the label (before or after).
   * @returns {import("lit").HTMLTemplateResult} - The generated label.
   */
  #label(val, pos) {
    return rangeLabelMethod(val, pos, this);
  }

  /**
   * Resets the range filter using the resetRangeMethod.
   */
  reset() {
    resetRangeMethod(this);
  }

  /**
   * Overrides the default createRenderRoot method to render in the light DOM.
   *
   * @returns {this} - The current instance to render in the light DOM.
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return when(
      this.filterObject,
      () => html`
        ${when(
          isDate(this.filterObject),
          () => html`
            <eox-timecontrol
              .controlValues=${[
                {
                  id: this.filterObject.key,
                  title: this.filterObject.title || "Filter",
                  timeControlValues: (
                    this.filterObject.filterKeys ||
                    this.suggestions ||
                    []
                  ).map((item) =>
                    typeof item === "object" ? item : { date: item },
                  ),
                },
              ]}
              .initDate=${[
                dayjs.unix(
                  this.filterObject.state.min || this.filterObject.min,
                ),
                dayjs.unix(
                  this.filterObject.state.max || this.filterObject.max,
                ),
              ]}
              @select=${(e) =>
                rangeInputHandlerMethod(
                  new CustomEvent("values", {
                    detail: {
                      values: [
                        dayjs(e.detail.date[0]).unix(),
                        dayjs(e.detail.date[1]).unix(),
                      ],
                    },
                  }),
                  this,
                )}
            >
              <eox-timecontrol-date
                .format=${DATE_TIME_FORMAT}
              ></eox-timecontrol-date>
              <eox-timecontrol-picker
                popup
                range
                show-dots
                .position=${["bottom", "left"]}
              ></eox-timecontrol-picker>
            </eox-timecontrol>
          `,
          () => html`
            <div style="display: flex; gap: .5rem; align-items: center;">
              ${this.#label("min", "before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min || this.filterObject.min}"
                value2="${this.filterObject.state.max || this.filterObject.max}"
                step="${this.filterObject.step || 1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${this.#label("max", "after")}
            </div>
          `,
        )}
      `,
    );
  }
}

customElements.define("eox-itemfilter-range", EOxItemFilterRange);
