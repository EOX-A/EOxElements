import { html, nothing } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * Creates the item details view for the aggregation property in the EOxItemFilterResults component.
 *
 * @param {string} aggregationProperty - The property used for aggregation.
 * @param {Object} EOxItemFilterResults - The EOxItemFilterResults component instance.
 * @returns {TemplateResult} The HTML template for the item details view.
 */
export function createItemDetailsMethod(
  aggregationProperty,
  EOxItemFilterResults
) {
  return html`
    <details
      class="details-results"
      @toggle=${EOxItemFilterResults.handleAccordion}
      ?open=${EOxItemFilterResults.config?.expandMultipleFilters ||
      EOxItemFilterResults.config.expandResults ||
      nothing}
    >
      <summary>
        <span class="title">
          ${aggregationProperty}
          <span class="count"
            >${EOxItemFilterResults.aggregateResults(
              EOxItemFilterResults.results,
              aggregationProperty
            ).length}</span
          >
        </span>
      </summary>
      <div>
        ${createItemListMethod(aggregationProperty, EOxItemFilterResults)}
      </div>
    </details>
  `;
}

/**
 * Creates the item list view for the aggregation property in the EOxItemFilterResults component.
 *
 * @param {string} aggregationProperty - The property used for aggregation.
 * @param {Object} EOxItemFilterResults - The EOxItemFilterResults component instance.
 * @returns {TemplateResult} The HTML template for the item list view.
 */
export function createItemListMethod(
  aggregationProperty,
  EOxItemFilterResults
) {
  const results = EOxItemFilterResults.results;
  const items = aggregationProperty
    ? EOxItemFilterResults.aggregateResults(results, aggregationProperty)
    : results;

  const config = EOxItemFilterResults.config;

  const className = (item) =>
    EOxItemFilterResults.selectedResult?.[config.titleProperty] ===
    item[config.titleProperty]
      ? "highlighted"
      : nothing;

  return html`
    <ul>
      ${repeat(
        items,
        (item) => item.id,
        (item) => html`
          <li class=${className(item)}>
            <label>
              <input
                data-cy="result-radio"
                type="radio"
                class="result-radio"
                name="result"
                id="${item.id}"
                ?checked=${EOxItemFilterResults.selectedResult?.[
                  config.titleProperty
                ] === item[config.titleProperty] || nothing}
                @click=${() => {
                  EOxItemFilterResults.selectedResult = item;
                  EOxItemFilterResults.dispatchEvent(
                    new CustomEvent("result", {
                      detail: item,
                    })
                  );
                }}
              />
              ${when(
                EOxItemFilterResults.hasTemplate("result"),
                () =>
                  EOxItemFilterResults.renderTemplate(
                    "result",
                    item,
                    `result-${item.id}`
                  ),
                () => html`
                  <span class="title"
                    >${unsafeHTML(item[config.titleProperty])}</span
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
