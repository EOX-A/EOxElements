import { html, nothing } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { getValue } from "../../helpers";

/**
 * Creates the item details view for the aggregation property in the EOxItemFilterResults component.
 *
 * @param {string} aggregationProperty - The property used for aggregation.
 * @param {Object} EOxItemFilterResults - The EOxItemFilterResults component instance.
 * @returns {import("lit").HTMLTemplateResult} The HTML template for the item details view.
 */
export function createItemDetailsMethod(
  aggregationProperty,
  EOxItemFilterResults,
) {
  return html`
    <details
      class="details-results"
      @toggle=${EOxItemFilterResults.handleAccordion}
      ?open=${EOxItemFilterResults.config.expandResults || nothing}
    >
      <summary class="square">
        <nav class="responsive tiny-space">
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </i>
          <span class="title"> ${aggregationProperty} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${EOxItemFilterResults.aggregateResults(
              EOxItemFilterResults.results,
              aggregationProperty,
            ).length}
          </button>
        </nav>
      </summary>
      <div>
        ${createItemListMethod(EOxItemFilterResults, aggregationProperty)}
      </div>
    </details>
  `;
}

/**
 * Creates the item list view for the aggregation property in the EOxItemFilterResults component.
 *
 * @param {Object} EOxItemFilterResults - The EOxItemFilterResults component instance.
 * @param {string} [aggregationProperty] - The property used for aggregation.
 * @returns {import("lit").TemplateResult} The HTML template for the item list view.
 */
export function createItemListMethod(
  EOxItemFilterResults,
  aggregationProperty,
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

  return staticHtml`
    ${EOxItemFilterResults.resultType === "cards" ? unsafeStatic(`<eox-layout fill-grid>`) : unsafeStatic(`<ul id="results" class="list no-space" part="results">`)}
      ${repeat(
        items,
        (item) => item.id,
        (item) => staticHtml`
        ${EOxItemFilterResults.resultType === "cards" ? unsafeStatic(`<eox-layout-item`) : unsafeStatic(`<li`)}
            class="${className(item)}"
            @click=${() => {
              if (EOxItemFilterResults.selectedResult === item) {
                EOxItemFilterResults.selectedResult = null;
              } else {
                EOxItemFilterResults.selectedResult = item;
              }
              EOxItemFilterResults.dispatchEvent(
                new CustomEvent("result", {
                  detail: EOxItemFilterResults.selectedResult,
                }),
              );
            }}
          >
            <nav id="${item.id}" class="responsive tiny-space">
              ${when(
                config.subTitleProperty || config.imageProperty,
                () => html`
                  ${when(
                    EOxItemFilterResults.resultType === "cards",
                    () =>
                      getValue(config.imageProperty, item)
                        ? html`
                            <img
                              class="image"
                              src="${getValue(config.imageProperty, item)}"
                            />
                          `
                        : html`
                            <svg
                              class="image"
                              width="100%"
                              height="100%"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill="var(--primary-color)"
                              />
                            </svg>
                          `,
                    () => html`
                      <i class="small">
                        ${getValue(config.imageProperty, item)
                          ? html`
                              <img
                                class="image"
                                src="${getValue(config.imageProperty, item)}"
                              />
                            `
                          : html`
                              <svg
                                class="image"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="var(--primary-color)"
                                />
                              </svg>
                            `}
                      </i>
                    `,
                  )}
                  <div class="title-container small-line max truncate">
                    <span class="title truncate"
                      >${unsafeHTML(item[config.titleProperty])}</span
                    >
                    ${when(
                      !!item[config.subTitleProperty],
                      () => html`
                        <small class="subtitle no-line truncate"
                          >${unsafeHTML(
                            item[config.subTitleProperty].toString(),
                          )}</small
                        >
                      `,
                    )}
                  </div>
                `,
                () => html`
                  <div class="small-line max truncate">
                    <span class="title truncate"
                      >${unsafeHTML(item[config.titleProperty])}</span
                    >
                  </div>
                `,
              )}
              ${when(
                EOxItemFilterResults.enableResultAction,
                () => html`
                  <button
                    class="result-action square transparent small"
                    @click=${(event) => {
                      event.stopPropagation(); // prevents emitting the `li` event above
                      EOxItemFilterResults.dispatchEvent(
                        new CustomEvent("click:result-action", {
                          detail: item,
                        }),
                      );
                    }}
                  >
                    <icon class="small"
                      >${unsafeHTML(
                        EOxItemFilterResults.resultActionIcon,
                      )}</icon
                    >
                  </button>
                `,
              )}
            </nav>
          </li>
        `,
      )}
    ${EOxItemFilterResults.resultType === "cards" ? unsafeStatic(`</eox-layout>`) : unsafeStatic(`</ul>`)}
  `;
}
