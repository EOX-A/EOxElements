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
      ?open=${EOxItemFilterResults.config.expandResults || nothing}
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
    EOxItemFilterResults.selectedResult?.[config.idProperty] ===
    item[config.idProperty]
      ? "highlighted"
      : nothing;

  return html`
    <ul>
      ${repeat(
        items,
        (item) => item.id,
        (item) => html`
          <li class=${className(item)}>
            <span
              id="${item.id}"
              @click=${() => {
                if (EOxItemFilterResults.selectedResult === item) {
                  EOxItemFilterResults.selectedResult = null;
                } else {
                  EOxItemFilterResults.selectedResult = item;
                }
                EOxItemFilterResults.dispatchEvent(
                  new CustomEvent("result", {
                    detail: EOxItemFilterResults.selectedResult,
                  })
                );
              }}
            >
              ${when(
                EOxItemFilterResults.hasTemplate("result"),
                () =>
                  EOxItemFilterResults.renderTemplate(
                    "result",
                    item,
                    `result-${item.id}`
                  ),
                () => html`
                  ${when(
                    config.subTitleProperty,
                    () => html`
                      <div class="title-container">
                        <span class="title"
                          >${unsafeHTML(item[config.titleProperty])}</span
                        >
                        <span class="subtitle"
                          >${unsafeHTML(item[config.subTitleProperty])}</span
                        >
                      </div>
                    `,
                    () => html`
                      <span class="title"
                        >${unsafeHTML(item[config.titleProperty])}</span
                      >
                    `
                  )}
                `
              )}
            </span>
          </li>
        `
      )}
    </ul>
  `;
}
