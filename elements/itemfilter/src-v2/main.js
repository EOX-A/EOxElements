import { html } from "lit";
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
import { TemplateElement } from "../../../utils/templateElement";
import { getTabIndex } from "./helpers/index.js";

export class EOxItemFilter extends TemplateElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      config: { attribute: false, type: Object },
      items: { attribute: false, type: Object },
      results: { state: true, type: Object },
      filters: { state: true, type: Object },
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
    this.config = null;
    this.items = null;
    this.filters = {};
  }

  apply() {
    this.#resultAggregation = filterApplyMethod(
      this.#config,
      this.#items,
      this
    );
    this.search();
  }

  async search() {
    await searchMethod(this.#config, this.#items, this);
    this.requestUpdate();
  }

  sortResults(items) {
    return sortResultsMethod(items, this.#config);
  }

  #createFilter(filterObject, tabIndex) {
    return createFilterMethod(filterObject, tabIndex, this);
  }

  #createReset(filterObject, tabIndex) {
    return createResetMethod(filterObject, tabIndex, this);
  }

  resetFilters() {
    resetFilterMethod(this);
  }

  firstUpdated(_changedProperties) {
    this.#config = {
      ...ELEMENT_CONFIG,
      ...this.config,
    };
    this.#items = this.items.map((i, index) =>
      Object.assign({ id: `item-${index}` }, i)
    );
    this.apply();
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && allStyle}
        ${this.styleOverride}
      </style>
      <form id="itemfilter" @submit="${(evt) => evt.preventDefault()}">
        ${when(
          this.config?.filterProperties,
          () => html`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.config.filterProperties}
              .inlineMode=${this.config.inlineMode || false}
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
                        <itemfilter-expandcontainer
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
                        </itemfilter-expandcontainer>
                      </li>`
                  )}
                </ul>
                ${when(
                  !this.config.inlineMode &&
                    this.#config.filterProperties &&
                    !this.config.inlineMode &&
                    this.#config.filterProperties &&
                    Object.values(this.filters)
                      .map((f) => f.dirty)
                      .filter((f) => f).length > 0,
                  () => html`
                    <button
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
            ></eox-itemfilter-results>
          `
        )}
      </form>
    `;
  }
}

customElements.define("eox-itemfilter-v2", EOxItemFilter);