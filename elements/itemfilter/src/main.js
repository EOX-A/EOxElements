import { html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";

import allStyle from "../../../utils/styles/dist/all.style";
import "./components/expand-container";
import "./components/itemfilter-container";
import "./components/filters/text";
import "./components/results";
import "./components/filters/selector";
import "./components/filters/range";
import "./components/filters/spatial";
import "./components/chips";
import { ELEMENT_CONFIG } from "./enums";
import {
  filterApplyMethod,
  searchMethod,
  createFilterMethod,
  sortResultsMethod,
  createResetMethod,
  resetFilterMethod,
} from "./methods/itemfilter";
import _debounce from "lodash.debounce";
import { TemplateElement } from "../../../utils/templateElement";
import { getTabIndex, isFiltersDirty } from "./helpers/index.js";

/**
 * EOxItemFilter is a custom web component that provides a comprehensive item filtering system.
 * It includes methods for applying filters, searching, sorting results, and resetting filters.
 * The component supports both inline and dropdown modes for filter display.
 *
 * @module EOxItemFilter
 * @extends {TemplateElement}
 * @property {Object} config - The configuration object for the filter. See [the config options](https://github.com/EOX-A/EOxElements/blob/main/elements/itemfilter/src/enums/config.js).
 * @property {Object} items - The items to be filtered.
 * @property {Object} results - The state object containing the filtered results.
 * @property {Object} filters - The state object containing the applied filters.
 * @property {Object} selectedResult - Property with pre-selected result
 */
export class EOxItemFilter extends TemplateElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      config: { attribute: false, type: Object },
      items: { attribute: false, type: Object },
      results: { state: true, attribute: false, type: Object },
      filters: { state: true, attribute: false, type: Object },
      selectedResult: { attribute: false, type: Object },
      unstyled: { type: Boolean },
    };
  }

  /**
   * @type Array<string>
   */
  #resultAggregation = [];

  /**
   * @type Array<object>
   */
  #items = [];

  /**
   * @type Object
   */
  #config = ELEMENT_CONFIG;

  constructor() {
    super();

    /**
     * @type Object
     */
    this.config = null;

    /**
     * @type Object
     */
    this.items = null;

    /**
     * @type Object
     */
    this.filters = {};

    /**
     * @type Object
     */
    this.selectedResult = null;

    /**
     * @type Function
     */
    this.search = _debounce(this.searchHandler, 100, {
      leading: true,
    });
  }

  /**
   * Applies the filters to the items and updates the result aggregation.
   */
  apply() {
    this.#resultAggregation = filterApplyMethod(
      this.#config,
      this.#items,
      this
    );
    this.search();
  }

  /**
   * Performs a search based on the current configuration and items.
   * Requests an update after the search completes.
   */
  async searchHandler() {
    await searchMethod(this.#config, this.#items, this);
    /**
     * Fires when the filters are changed; event detail includes `filters` and `results`
     */
    this.dispatchEvent(
      new CustomEvent("filter", {
        detail: {
          results: this.results,
          filters: this.filters,
        },
        bubbles: true,
        composed: true,
      })
    );
    if (this.config?.inlineMode)
      this.renderRoot.querySelector("eox-itemfilter-container").updateInline();
    this.requestUpdate();
  }

  /**
   * Sorts the given items based on the current configuration.
   *
   * @param {Array<object>} items - The items to be sorted.
   * @returns {Array<object>} - The sorted items.
   */
  sortResults(items) {
    return sortResultsMethod(items, this.#config);
  }

  /**
   * Creates a filter element based on the given filter object and tab index.
   *
   * @param {Object} filterObject - The filter object.
   * @param {number} tabIndex - The tab index for the filter element.
   * @returns {import("lit")} - The template result for the filter element.
   * @private
   */
  #createFilter(filterObject, tabIndex) {
    return createFilterMethod(filterObject, tabIndex, this);
  }

  /**
   * Creates a reset element for the given filter object and tab index.
   *
   * @param {Object} filterObject - The filter object.
   * @param {number} tabIndex - The tab index for the reset element.
   * @returns {import("lit")} - The template result for the filter element.
   * @private
   */
  #createReset(filterObject, tabIndex) {
    return createResetMethod(filterObject, tabIndex, this);
  }

  /**
   * Resets all applied filters.
   */
  resetFilters() {
    resetFilterMethod(this);
  }

  /**
   * Lifecycle method called after the first update.
   * Initializes the configuration and items, and applies the filters.
   *
   * @param {Map} _changedProperties - The changed properties.
   */
  firstUpdated(_changedProperties) {
    this.#config = {
      ...ELEMENT_CONFIG,
      ...this.config,
    };
    this.#items =
      this.items?.map((i, index) =>
        Object.assign({ id: `item-${index}` }, i)
      ) || [];
    this.apply();
  }

  /**
   * Called when the element is updated.
   * Re-Initialize itemfilter when `config` and `items` changes.
   *
   * @param {Map} changedProperties - The properties that have changed.
   */
  updated(changedProperties) {
    if (changedProperties.has("config") || changedProperties.has("items"))
      this.firstUpdated();
  }

  /**
   * Updates selected result when result component triggers the "result" event.
   *
   * @param {{detail: Object}} evt - "result" event triggered by result component
   */
  updateResult(evt) {
    this.selectedResult = evt.detail;
    /**
     * Fires when a result is selected; event detail is `selectedResult`
     */
    this.dispatchEvent(
      new CustomEvent("select", {
        detail: this.selectedResult,
        bubbles: true,
        composed: true,
      })
    );
    this.requestUpdate();
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && allStyle}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.config.inlineMode ? "inline" : nothing}
        @submit="${(evt) => evt.preventDefault()}"
      >
        ${when(
          this.config?.filterProperties,
          () => html`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.config.filterProperties}
              .inlineMode=${this.config.inlineMode || false}
              @reset=${() => this.resetFilters()}
              @filter=${() => this.search()}
            >
              <section slot="section">
                ${when(
                  !this.config.inlineMode,
                  () => html`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `
                )}
                <ul id="filters">
                  ${map(
                    Object.values(this.filters),
                    (filterObject, index) =>
                      html` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${filterObject}
                          data-details="${filterObject.key}"
                        >
                          ${this.#createReset(
                            filterObject,
                            getTabIndex(index, 1)
                          )}
                          ${this.#createFilter(
                            filterObject,
                            getTabIndex(index, 2)
                          )}
                        </eox-itemfilter-expandcontainer>
                      </li>`
                  )}
                </ul>
                ${when(
                  !this.config.inlineMode &&
                    this.#config.filterProperties &&
                    !this.config.inlineMode &&
                    this.#config.filterProperties &&
                    isFiltersDirty(this.filters),
                  () => html`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${() => this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `
                )}
              </section>
            </eox-itemfilter-container>
          `
        )}
        ${when(
          this.#config?.showResults && this.results,
          () => html`
            <eox-itemfilter-results
              .config=${this.#config}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${this.#resultAggregation}
              .selectedResult=${this.selectedResult}
              @result=${this.updateResult}
            ></eox-itemfilter-results>
          `
        )}
      </form>
    `;
  }
}

customElements.define("eox-itemfilter", EOxItemFilter);
