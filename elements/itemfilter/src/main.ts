import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import Fuse from "fuse.js";
import { highlight } from "./itemHighlighting";
import { style } from "./style";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

interface ElementConfig {
  /**
   * The filter properties.
   * @param filterProperties
   */
  filterProperties: Array<string>;
  /**
   * The property of the result items used for display
   */
  titleProperty: string;
  /**
   * Aggregate results by a property key
   */
  aggregateResults?: string;
  /**
   * Native fuse.js config override
   */
  fuseConfig?: Object;
  /**
   * Search functionality
   */
  enableSearch?: Boolean;
  /**
   * Highlighting of search result character matches
   */
  enableHighlighting?: Boolean;
  /**
   * Callback that is triggered on item selection
   * @returns selected item
   */
  onSelect?: Function;
  /**
   * Show all result items if nothing is input by the user
   * @default true
   */
  matchAllWhenEmpty?: Boolean;
  /**
   * Make the filters mutually exclusive
   */
  exclusiveFilters?: Boolean;
}

@customElement("eox-itemfilter")
export class EOxItemFilter extends LitElement {
  _fuse: Fuse<any>;
  _resultAggregation: Array<string> = [];

  @state()
  _items: Array<Object> = [];

  @state()
  _results: Array<Object> = [];

  @state()
  _filters: Object = {};

  @state()
  _selectedResult: Object;

  @property({ attribute: false })
  config: ElementConfig = {
    titleProperty: "title",
    filterProperties: ["themes"],
    aggregateResults: "themes",
    fuseConfig: {},
    enableSearch: true,
    enableHighlighting: false,
    onSelect: () => {},
    matchAllWhenEmpty: true,
    exclusiveFilters: false,
  };

  @property()
  apply = (items: Array<Object>) => {
    this._items = items.map((i, index) => ({
      ...i,
      id: `item-${index}`,
    }));
    this._fuse = new Fuse(this._items, {
      minMatchCharLength: 3,
      // location: 0,
      threshold: 0.4,
      distance: 50,
      includeMatches: true,
      useExtendedSearch: true,
      ...this.config.fuseConfig,
    });

    // build filters
    this.config.filterProperties.forEach((filterProperty) => {
      const filterKeys = {};
      this._items.forEach((item) => {
        // @ts-ignore
        if (Array.isArray(item[filterProperty])) {
          // @ts-ignore
          item[filterProperty].forEach((prop) => {
            // @ts-ignore
            filterKeys[prop] = undefined;
          });
        } else {
          // @ts-ignore
          filterKeys[item[filterProperty]] = undefined;
        }
      });
      // @ts-ignore
      this._filters[filterProperty] = filterKeys;
    });

    if (this.config.matchAllWhenEmpty !== false) {
      // initially render all items
      this._results = this.sortResults(this._items);
      this.requestUpdate();
    }

    if (this.config.aggregateResults) {
      this._resultAggregation = [
        ...new Set(
          this._items.reduce((store: Array<string>, item: Object) => {
            // @ts-ignore
            return store.concat(item[this.config.aggregateResults]);
          }, [])
        ),
      ].sort();
    }
  };

  search(input: string = "", filters: Object = this._filters) {
    const parsedFilters = Object.entries(filters).reduce(
      (store, [key, value]) => {
        // @ts-ignore
        const createProperty = (val) => {
          const property = {};
          // @ts-ignore
          property[key] = `="${val}"`; // exact match
          store.push(property);
        };
        Object.entries(value)
          .filter(([_, v]) => v)
          .forEach(([k, _]) => createProperty(k));
        return store;
      },
      []
    );
    let results;
    if (
      !(input.length > 2) &&
      !parsedFilters.length &&
      this.config.matchAllWhenEmpty !== false
    ) {
      results = this._items;
    } else {
      const parameters: Object = {
        ...(input.length > 2 && parsedFilters.length
          ? {
              $and: [
                {
                  $or: [
                    // @ts-ignore
                    ...this.config.fuseConfig["keys"].map((key: string) => ({
                      [key]: input,
                    })),
                  ],
                },
                {
                  $or: parsedFilters,
                },
              ],
            }
          : {
              $or: [
                // @ts-ignore
                ...this.config.fuseConfig["keys"].map((key: string) => ({
                  [key]: input,
                })),
                {
                  $or: parsedFilters,
                },
              ],
            }),
      };
      const response = this._fuse.search(parameters);
      results = this.config.enableHighlighting
        ? highlight(response, "highlight", this.config.titleProperty)
        : response.map((i) => i.item);
    }
    this._results = this.sortResults(results);
    this.requestUpdate();
  }

  aggregateResults(items: Array<Object>, property: string | Array<string>) {
    return items.filter((item) => {
      // @ts-ignore
      const aggregation = item[this.config.aggregateResults];
      // special check if a currently selected fiter property is part of a filter key
      // also used for aggregation. if aggregation of results uses the same property
      // as the filter, it doesn't make sense to show all aggregations, but only
      // the one matching the current filter
      const currentFilter = Object.keys(
        // @ts-ignore
        this._filters[this.config.aggregateResults]
        // @ts-ignore
      ).filter((f) => this._filters[this.config.aggregateResults][f]);
      const includedInCurrentFilter = currentFilter.length
        ? // @ts-ignore
          currentFilter.includes(property)
        : true;
      return includedInCurrentFilter && Array.isArray(aggregation)
        ? aggregation.includes(property)
        : aggregation === property;
    });
  }

  sortResults(items: Array<Object>) {
    return [...items].sort((a, b) =>
      // @ts-ignore
      a[this.config.titleProperty] < b[this.config.titleProperty] ? -1 : 1
    );
  }

  toggleFilter(filter: string, key: string) {
    if (this.config.exclusiveFilters === true) {
      Object.keys(this._filters).forEach((f) => {
        // @ts-ignore
        Object.keys(this._filters[f]).forEach((k) => {
          // @ts-ignore
          this._filters[f][k] = false;
        });
      });
    }
    // @ts-ignore
    this._filters[filter][key] = !this._filters[filter][key];
    const searchField = this.renderRoot.querySelector('input[type="text"]');
    if (searchField) {
      // @ts-ignore
      this.search(searchField.value);
    } else {
      this.search();
    }
    const resultItems = this.renderRoot.querySelectorAll(
      "ul#results input[type='radio']"
    );
    // first reset all result radio inputs, then re-select the one currently stored in state
    // @ts-ignore
    for (let i = 0; i < resultItems.length; i++) resultItems[i].checked = false;
    if (this._selectedResult) {
      setTimeout(() => {
        const selectedItem = this.renderRoot.querySelector(
          // @ts-ignore
          `#${this._selectedResult.id}`
        );
        if (selectedItem) {
          // @ts-ignore
          selectedItem.checked = true;
          this.requestUpdate();
        }
      });
    }
  }

  resetFilters() {
    this.renderRoot.querySelectorAll("#details-filter input").forEach((f) => {
      // @ts-ignore
      f.checked = false;
    });
    const searchField = this.renderRoot.querySelector('input[type="text"]');
    if (searchField) {
      // @ts-ignore
      searchField.value = "";
    }
    Object.keys(this._filters).forEach((f) => {
      // @ts-ignore
      Object.keys(this._filters[f]).forEach((k) => {
        // @ts-ignore
        this._filters[f][k] = false;
      });
    });
    this.search();
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <form>
        <section>
          <input
            type="text"
            placeholder="Search"
            data-cy="search"
            style="display:${this.config.enableSearch ? "block" : "none"}"
            @input="${(evt: HTMLElementEvent<HTMLInputElement>) =>
              this.search(evt.target.value)}"
          />
        </section>
        <section>
          <slot name="filterstitle"></slot>
          <ul id="filters">
            ${map(
              this.config.filterProperties,
              (filter) => html`
                <details
                  id="details-filter"
                  data-filter="${filter}"
                  @click=${() =>
                    this.renderRoot
                      .querySelectorAll("details#details-filter")
                      .forEach((d) => {
                        if (d.getAttribute("data-filter") !== filter) {
                          d.removeAttribute("open");
                          this.requestUpdate();
                        }
                      })}
                >
                  <summary>
                    <small>
                      <strong class="title"> ${filter} </strong>
                    </small>
                    <div>
                      <svg
                        data-cy="expand-button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-down</title>
                        <path
                          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div class="scroll" style="max-height: 150px">
                    <ul>
                      ${
                        // @ts-ignore
                        this._filters[filter]
                          ? map(
                              // @ts-ignore
                              Object.keys(this._filters[filter]).sort(),
                              (key) => html`
                                <li>
                                  <label>
                                    <input
                                      name="selection"
                                      type="${this.config.exclusiveFilters ===
                                      true
                                        ? "radio"
                                        : "checkbox"}"
                                      checked="${
                                        // @ts-ignore
                                        this._filters[filter][key] || nothing
                                      }"
                                      @click=${() =>
                                        this.toggleFilter(filter, key)}
                                    />
                                    <span class="title">${key}</span>
                                  </label>
                                </li>
                              `
                            )
                          : null
                      }
                    </ul>
                  </div>
                </details>
              `
            )}
          </ul>
          <a id="filter-reset" @click=${() => this.resetFilters()}
            ><small>Reset filters</small></a
          >
        </section>
        <section id="section-results">
          <div>
            <slot name="resultstitle"></slot>
          </div>
          <div id="container-results" class="scroll">
            ${this._results.length < 1
              ? html` <small class="no-results">No matching items</small> `
              : nothing}
            <ul id="results">
              ${this.config.aggregateResults
                ? map(
                    this._resultAggregation.filter(
                      (aggregationProperty) =>
                        this.aggregateResults(
                          this._results,
                          aggregationProperty
                        ).length
                    ),
                    (aggregationProperty) => html`<details
                      id="details-results"
                      open
                    >
                      <summary>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <title>chevron-down</title>
                          <path
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                          />
                        </svg>
                        <strong class="title"> ${aggregationProperty} </strong>
                        <span style="margin-left: 0.25rem"
                          >(${this.aggregateResults(
                            this._results,
                            aggregationProperty
                          ).length})</span
                        >
                      </summary>
                      <ul>
                        ${map(
                          this.aggregateResults(
                            this._results,
                            aggregationProperty
                          ),
                          // @ts-ignore
                          (item) => html`
                            <li>
                              <label>
                                <input
                                  type="radio"
                                  name="result"
                                  id="${
                                    // @ts-ignore
                                    item.id
                                  }"
                                  @click=${() => {
                                    this._selectedResult = item;
                                    this.config.onSelect(item);
                                  }}
                                />
                                <span class="title"
                                  >${
                                    // @ts-ignore
                                    unsafeHTML(item[this.config.titleProperty])
                                  }</span
                                >
                              </label>
                            </li>
                          `
                        )}
                      </ul>
                    </details>`
                  )
                : map(
                    this._results,
                    // @ts-ignore
                    (item) =>
                      html`<li>
                        ${
                          // @ts-ignore
                          unsafeHTML(item[this.config.titleProperty])
                        }
                      </li>`
                  )}
            </ul>
          </div>
        </section>
      </form>
    `;
  }
}
