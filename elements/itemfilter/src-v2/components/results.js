import { TemplateElement } from "../../../../utils/templateElement";
import { html, nothing } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { map } from "lit/directives/map.js";

export class EOxItemFilterResults extends TemplateElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      config: { attribute: false, type: Object },
      results: { state: true, type: Object },
      filters: { state: true, type: Object },
      resultAggregation: { attribute: false, type: Array },
    };
  }

  constructor() {
    super();
    this.config = null;
    this.filters = {};
    this.resultAggregation = [];
  }

  createItemList(aggregationProperty) {
    return html`
      <ul>
        ${repeat(
          this.aggregateResults(this.results, aggregationProperty),
          (item) => item.id,
          (item) => html`
            <li
              class=${this.selectedResult?.[this.config.titleProperty] ===
              item[this.config.titleProperty]
                ? "highlighted"
                : nothing}
            >
              <label>
                <input
                  data-cy="result-radio"
                  type="radio"
                  class="result-radio"
                  name="result"
                  id="${item.id}"
                  ?checked=${this.selectedResult?.[
                    this.config.titleProperty
                  ] === item[this.config.titleProperty] || nothing}
                  @click=${() => {
                    this.selectedResult = item;
                    this.config.onSelect(item);
                  }}
                />
                ${when(
                  this.hasTemplate("result"),
                  () =>
                    this.renderTemplate("result", item, `result-${item.id}`),
                  () => html`
                    <span class="title"
                      >${unsafeHTML(item[this.config.titleProperty])}</span
                    >
                  `
                )}
              </label>
            </li>
          `
        )}
      </ul>
    `;
  }

  aggregateResults(items, property) {
    return items.filter((item) => {
      const aggregation = item[this.config.aggregateResults];
      // special check if a currently selected fiter property is part of a filter key
      // also used for aggregation. if aggregation of results uses the same property
      // as the filter, it doesn't make sense to show all aggregations, but only
      // the one matching the current filter
      let currentFilter;
      if (this.filters[this.config.aggregateResults]) {
        currentFilter = Object.keys(
          this.filters[this.config.aggregateResults]
        ).filter((f) => this.filters[this.config.aggregateResults].state[f]);
      }

      const includedInCurrentFilter = currentFilter?.length
        ? currentFilter.includes(property)
        : true;

      return includedInCurrentFilter && Array.isArray(aggregation)
        ? aggregation.includes(property)
        : aggregation === property;
    });
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="section-results">
        <div>
          <h6 style="padding: 8px 0px;">Results</h6>
        </div>
        <div id="container-results" class="scroll">
          ${when(
            this.results.length < 1,
            () => html`<small class="no-results">No matching items</small>`,
            () => nothing
          )}
          <ul id="results" part="results">
            ${when(
              this.config.aggregateResults,
              () =>
                map(
                  this.resultAggregation.filter(
                    (aggregationProperty) =>
                      this.aggregateResults(this.results, aggregationProperty)
                        .length
                  ),
                  (aggregationProperty) =>
                    html`${when(
                      this.aggregateResults(this.results, aggregationProperty)
                        .length === 1 && this.config.autoSpreadSingle,
                      () =>
                        html`<div style="margin-left: -8px">
                          ${this.createItemList(aggregationProperty)}
                        </div>`,
                      () => html`
                        <details
                          class="details-results"
                          @toggle=${this.toggleAccordion}
                          ?open=${this.config.expandResults || nothing}
                        >
                          <summary>
                            <span class="title">
                              ${aggregationProperty}
                              <span class="count"
                                >${this.aggregateResults(
                                  this.results,
                                  aggregationProperty
                                ).length}</span
                              >
                            </span>
                          </summary>
                          <div>${this.createItemList(aggregationProperty)}</div>
                        </details>
                      `
                    )}`
                ),
              () =>
                map(
                  this.results,
                  (item) =>
                    html`<li part="result">
                      <label>
                        <input
                          type="radio"
                          name="result"
                          id="$item.id}"
                          @click=${() => {
                            this.selectedResult = item;
                            this.config.onSelect(item);
                          }}
                        />
                        ${when(
                          this.hasTemplate("result"),
                          () =>
                            this.renderTemplate(
                              "result",
                              item,
                              `result-${item.id}`
                            ),
                          () => html`
                            <span class="title"
                              >${unsafeHTML(
                                item[this.config.titleProperty]
                              )}</span
                            >
                          `
                        )}
                      </label>
                    </li>`
                )
            )}
          </ul>
        </div>
      </section>
    `;
  }
}

customElements.define("eox-itemfilter-results", EOxItemFilterResults);
