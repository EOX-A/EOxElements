import { TemplateElement } from "../../../../utils/templateElement";
import { html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import {
  aggregateResultsMethod,
  createItemDetailsMethod,
  createItemListMethod,
} from "../methods/results/index.js";

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

  #createItemList(aggregationProperty) {
    return createItemListMethod(aggregationProperty, this);
  }

  #createItemDetails(aggregationProperty) {
    return createItemDetailsMethod(aggregationProperty, this);
  }

  aggregateResults(items, property) {
    return aggregateResultsMethod(items, property, this);
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
                          ${this.#createItemList(aggregationProperty)}
                        </div>`,
                      () => this.#createItemDetails(aggregationProperty)
                    )}`
                ),
              () => this.#createItemList()
            )}
          </ul>
        </div>
      </section>
    `;
  }
}

customElements.define("eox-itemfilter-results", EOxItemFilterResults);
