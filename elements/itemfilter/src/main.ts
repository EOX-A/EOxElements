import { html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import { live } from "lit/directives/live.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import Fuse from "fuse.js";
// @ts-ignore
import _debounce from "lodash.debounce";
import "toolcool-range-slider";
import dayjs from "dayjs";
import { TemplateElement } from "../../../utils/templateElement";
import { highlight } from "./itemHighlighting";
import { intersects, within, SpatialFilter } from "./spatial";
import { style } from "./style";
import { styleEOX } from "./style.eox";

class ElementConfig {
  /**
   * Aggregate results by a property key
   */
  public aggregateResults?: string = undefined;

  /**
   * Highlighting of search result character matches
   */
  public enableHighlighting?: Boolean = false;

  /**
   * Search functionality
   */
  public enableSearch?: Boolean = false;

  /**
   * Make the filters mutually exclusive
   */
  public exclusiveFilters?: Boolean = false;

  /**
   * Use an external search endpoint instead of fuse search.
   * Passed properties: input string, filters object
   */
  public externalSearch?: Function;

  /**
   * The filter properties.
   * @param filterProperties
   */
  public filterProperties?: Array<{
    key: string;
    title?: string;
    exclusive?: Boolean;
    type?: string;
    format?: string;
    expanded?: Boolean;
  }> = [];

  /**
   * Native fuse.js config override
   */
  public fuseConfig?: Object = {
    keys: ["title"],
  };

  /**
   * Inline mode, for rendering the itemfilter in avery condensed space.
   * Expexts showResults to be false and enableSearch to be true
   */
  public inlineMode?: Boolean = false;

  /**
   * Show all result items if nothing is input by the user
   * @default true
   */
  public matchAllWhenEmpty?: Boolean = true;

  /**
   * Callback that is triggered on item search
   * @returns result items
   */
  public onSearch?: Function = () => {};

  /**
   * Callback that is triggered on item selection
   * @returns selected item
   */
  public onSelect?: Function = () => {};

  /**
   * Display results list
   */
  public showResults?: Boolean = true;

  /**
   * The property of the result items used for display
   */
  public titleProperty: string = "title";
}

@customElement("eox-itemfilter")
export class EOxItemFilter extends TemplateElement {
  _fuse: Fuse<any>;
  _resultAggregation: Array<string> = [];

  @state()
  _items: Array<Object> = [];

  @state()
  _results: Array<Object>;

  @state()
  _filters: Object = {};

  @state()
  _selectedResult: Object;

  @property({ attribute: false }) set config(config) {
    const oldValue = this._config;
    this._config = {
      ...new ElementConfig(),
      ...config,
    };
    this.requestUpdate("config", oldValue);
  }
  private _config = new ElementConfig();
  get config() {
    return this._config;
  }

  @property()
  apply = (items: Array<Object>) => {
    this._items = items.map((i, index) => ({
      id: `item-${index}`,
      ...i,
    }));
    this._fuse = new Fuse(this._items, {
      // minMatchCharLength: 3,
      // location: 0,
      threshold: 0.4,
      distance: 50,
      includeMatches: true,
      useExtendedSearch: true,
      ...this._config.fuseConfig,
    });

    // build filters
    if (this._config.filterProperties.length) {
      this._config.filterProperties.forEach((filterProperty) => {
        const filterKeys = {};
        const parseValue = (value: string) => {
          return filterProperty.format === "date"
            ? dayjs(value).unix()
            : parseInt(value);
        };
        this._items.forEach((item) => {
          if (filterProperty.type === "range") {
            // @ts-ignore
            if (Array.isArray(item[filterProperty.key])) {
              const currentValues = [
                // @ts-ignore
                parseValue(item[filterProperty.key][0]),
                // @ts-ignore
                parseValue(item[filterProperty.key][1]),
              ];
              // @ts-ignore
              filterKeys.min =
                // @ts-ignore
                filterKeys.min !== undefined
                  ? // @ts-ignore
                    Math.min(filterKeys.min, currentValues[0])
                  : currentValues[0];
              // @ts-ignore
              filterKeys.max =
                // @ts-ignore
                filterKeys.max !== undefined
                  ? // @ts-ignore
                    Math.max(filterKeys.max, currentValues[1])
                  : currentValues[1];
            } else {
              // @ts-ignore
              const currentValue = parseValue(item[filterProperty.key]);
              // @ts-ignore
              filterKeys.min =
                // @ts-ignore
                filterKeys.min !== undefined
                  ? // @ts-ignore
                    Math.min(filterKeys.min, currentValue)
                  : currentValue;
              // @ts-ignore
              filterKeys.max =
                // @ts-ignore
                filterKeys.max !== undefined
                  ? // @ts-ignore
                    Math.max(filterKeys.max, currentValue)
                  : currentValue;
            }
            return;
          }
          // @ts-ignore
          if (Array.isArray(item[filterProperty.key])) {
            // @ts-ignore
            item[filterProperty.key].forEach((prop) => {
              // @ts-ignore
              filterKeys[prop] = undefined;
            });
          } else {
            if (filterProperty.type === "spatial") {
              filterKeys.geometry = undefined;
              filterKeys.mode = filterProperty.mode || "intersects";
            } else {
              // @ts-ignore
              filterKeys[item[filterProperty.key]] = undefined;
            }
          }
        });
        // @ts-ignore
        this._filters[filterProperty.key] = {
          type: filterProperty.type || "string",
          state: filterKeys,
          ...(filterProperty.type === "range" && {
            // @ts-ignore
            min: filterKeys.min,
            // @ts-ignore
            max: filterKeys.max,
            format: filterProperty.format,
          }),
        };
        if (filterProperty.state) {
          this._filters[filterProperty.key].state = {
            ...this._filters[filterProperty.key].state,
            ...filterProperty.state,
          };
        }
      });
    }

    if (this._config.matchAllWhenEmpty !== false) {
      // initially render all items
      this._results = this.sortResults(this._items);
      this.requestUpdate();
    }

    if (this._config.aggregateResults) {
      this._resultAggregation = [
        ...new Set(
          this._items.reduce((store: Array<string>, item: Object) => {
            // @ts-ignore
            return store.concat(item[this._config.aggregateResults]);
          }, [])
        ),
      ].sort((a, b) => a.localeCompare(b));
    }
  };

  @property({ type: Boolean })
  unstyled: Boolean;

  inputHandler = () => {
    // TEMP store the search input into filters
    const searchInput = <HTMLInputElement>(
      this.renderRoot.querySelector("input[type='text']")
    );
    if (searchInput) {
      this._filters[".search"] = {
        state: searchInput.value,
      };
    }
    this.search();
  };

  debouncedInputHandler = _debounce(this.inputHandler, 500, {
    leading: true,
  });

  public async filter(
    input: string = (<HTMLInputElement>(
      this.renderRoot.querySelector("input[type='text']")
    ))?.value || ""
  ) {
    const filters: Object = this._filters;
    const items: Array<object> = this._items;
    const parsedFilters = Object.entries(filters)
      .filter(([_, filter]) => filter.type === "string")
      .reduce((store, [key, filter]) => {
        const operator = "$or";
        const holding: Array<any> = [];
        // @ts-ignore
        const createProperty = (val) => {
          const property = {};
          // @ts-ignore
          property[key] = `="${val}"`; // exact match
          holding.push(property);
        };
        Object.entries(filter.state)
          .filter(([_, v]) => v)
          .forEach(([k, _]) => createProperty(k));
        if (holding.length > 0) {
          store.push({
            [operator]: holding,
          });
        }
        return store;
      }, []);
    let results;
    if (
      !(input.length > 0) &&
      !parsedFilters.length &&
      this._config.matchAllWhenEmpty !== false
    ) {
      results = items;
    } else {
      if (this.config.externalSearch) {
        const response = await fetch(
          `${this.config.externalSearch(input, filters)}`
        );
        const jsonData = await response.json();
        results = jsonData.features;
      } else {
        const parameters: Object = {
          $and: [
            ...(input.length > 0
              ? [
                  {
                    $or: [
                      // @ts-ignore
                      ...this._config.fuseConfig["keys"].map((key: string) => ({
                        [key]: input,
                      })),
                    ],
                  },
                ]
              : []),
            ...parsedFilters,
          ],
        };
        const response = this._fuse.search(parameters);
        results = this._config.enableHighlighting
          ? highlight(response, "highlight", this._config.titleProperty)
          : response.map((i) => i.item);
      }
    }
    const rangeFilters = Object.entries(this._filters)
      .filter(([_, value]) => value.type === "range")
      .reduce((acc, [key, value]) => {
        // @ts-ignore
        acc[key] = {
          min: value.state.min,
          max: value.state.max,
          format: value.format,
        };
        return acc;
      }, {});
    if (Object.keys(rangeFilters).length > 0) {
      const filteredResults = [];
      for (let i = 0; i < results.length; i++) {
        const pass = {};
        for (let [key, value] of Object.entries(rangeFilters)) {
          const parseValue = (input: string) => {
            // @ts-ignore
            return value.format === "date" ? dayjs(input).unix() : input;
          };
          if (results[i].hasOwnProperty(key)) {
            if (Array.isArray(results[i][key])) {
              const mode = "overlap";
              // @ts-ignore
              if (mode === "contain") {
                // must contain complete range to pass
                // @ts-ignore
                pass[key] =
                  // @ts-ignore
                  parseValue(results[i][key][0]) >= rangeFilters[key].min &&
                  // @ts-ignore
                  parseValue(results[i][key][1]) <= rangeFilters[key].max;
              } else if (mode === "overlap") {
                // must have an overlap with the range to pass
                // @ts-ignore
                pass[key] =
                  // @ts-ignore
                  rangeFilters[key].min <= parseValue(results[i][key][1]) &&
                  // @ts-ignore
                  parseValue(results[i][key][0]) <= rangeFilters[key].max;
              }
            } else if (
              // @ts-ignore
              parseValue(results[i][key]) >= rangeFilters[key].min &&
              // @ts-ignore
              parseValue(results[i][key]) <= rangeFilters[key].max
            ) {
              // @ts-ignore
              pass[key] = true;
            } else {
              // @ts-ignore
              pass[key] = false;
            }
          } else {
            // @ts-ignore
            pass[key] = true;
          }
        }
        if (Object.values(pass).every((v) => !!v)) {
          filteredResults.push(results[i]);
        }
      }
      results = [...filteredResults];
    }
    const spatialFilters: { geometry?: any } = Object.entries(this._filters)
      .filter(([_, value]) => value.type === "spatial")
      .reduce((acc, [key, value]) => {
        // @ts-ignore
        acc[key] = {
          geometry: value.state.geometry,
          mode: value.state.mode,
        };
        return acc;
      }, {});
    if (
      Object.values(spatialFilters)
        .map((f) => f.geometry)
        .filter((f) => !!f).length > 0
    ) {
      const filteredResults = [];
      for (let i = 0; i < results.length; i++) {
        const pass = {};
        for (let key of Object.keys(spatialFilters)) {
          // @ts-ignore
          const mode = spatialFilters[key].mode || "within";
          if (results[i].hasOwnProperty(key)) {
            const test =
              mode === "within"
                ? within(
                    results[i][key],
                    // @ts-ignore
                    spatialFilters[key].geometry
                  )
                : intersects(
                    results[i][key],
                    // @ts-ignore
                    spatialFilters[key].geometry
                  );
            if (test) {
              // @ts-ignore
              pass[key] = true;
            } else {
              // @ts-ignore
              pass[key] = false;
            }
          } else {
            // @ts-ignore
            pass[key] = false;
          }
        }
        if (Object.values(pass).every((v) => !!v)) {
          filteredResults.push(results[i]);
        }
      }
      results = [...filteredResults];
    }
    return this.sortResults(results);
  }

  private async search() {
    this._results = await this.filter();
    this._config.onSearch(this._results);
  }

  aggregateResults(items: Array<Object>, property: string | Array<string>) {
    return items.filter((item) => {
      // @ts-ignore
      const aggregation = item[this._config.aggregateResults];
      // special check if a currently selected fiter property is part of a filter key
      // also used for aggregation. if aggregation of results uses the same property
      // as the filter, it doesn't make sense to show all aggregations, but only
      // the one matching the current filter
      let currentFilter;
      // @ts-ignore
      if (this._filters[this._config.aggregateResults]) {
        currentFilter = Object.keys(
          // @ts-ignore
          this._filters[this._config.aggregateResults]
          // @ts-ignore
        ).filter((f) => this._filters[this._config.aggregateResults].state[f]);
      }

      const includedInCurrentFilter = currentFilter?.length
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
      a[this._config.titleProperty].localeCompare(b[this._config.titleProperty])
    );
  }

  toggleFilter(filter: string, key: string, exclusive: Boolean) {
    if (exclusive) {
      Object.keys(this._filters)
        // @ts-ignore
        .filter((f) => this._filters[f].type === "string")
        .forEach((f) => {
          if (
            this._config.filterProperties.find((fP) => fP.key === f).exclusive
          ) {
            // @ts-ignore
            Object.keys(this._filters[f].state).forEach((k) => {
              // @ts-ignore
              this._filters[f].state[k] = false;
            });
          }
        });
    }
    // @ts-ignore
    this._filters[filter].state[key] = !this._filters[filter].state[key];
    this.search();
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
    this.renderRoot.querySelectorAll(".details-filter input").forEach((f) => {
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
      if (this._filters[f].type === "range") {
        // @ts-ignore
        this._filters[f].state.min = this._filters[f].min;
        // @ts-ignore
        this._filters[f].state.max = this._filters[f].max;
        return;
      }
      // @ts-ignore
      if (this._filters[f].type === "spatial") {
        // @ts-ignore
        this._filters[f].state.geometry = undefined;
        const spatialFilter: SpatialFilter = this.renderRoot.querySelector(
          "eox-itemfilter-spatial-filter"
        );
        spatialFilter.reset();
        return;
      }
      // @ts-ignore
      Object.keys(this._filters[f].state).forEach((k) => {
        // @ts-ignore
        this._filters[f].state[k] = false;
      });
    });
    this.search();
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <form @submit="${(evt: FormDataEvent) => evt.preventDefault()}">
        ${when(
          this._config.enableSearch,
          () => html`
            <section>
              <input
                type="text"
                placeholder="Type something..."
                data-cy="search"
                part="input-search"
                @input="${this.debouncedInputHandler}"
              />
            </section>
          `
        )}
        ${when(
          this._config.filterProperties.length,
          () => html`
            <section class="${this.config.inlineMode ? "inline" : nothing}">
              ${when(
                !this.config.inlineMode,
                () => html` <slot name="filterstitle"></slot> `
              )}
              <ul id="filters">
                ${map(
                  this._config.filterProperties,
                  (filter) => html`
                    <details
                      class="details-filter"
                      part="details-filter"
                      data-filter="${filter.key}"
                      open=${filter.expanded || nothing}
                    >
                      <summary>
                        <span
                          class="title"
                          style="${!filter.title &&
                          "text-transform: capitalize"}"
                        >
                          ${filter.title || filter.key}
                          ${filter.type === "string" &&
                          Object.values(
                            // @ts-ignore
                            this._filters[filter.key].state
                          ).filter((v) => v).length
                            ? `(${
                                Object.values(
                                  // @ts-ignore
                                  this._filters[filter.key].state
                                ).filter((v) => v).length
                              })`
                            : nothing}
                        </span>
                      </summary>
                      <div class="scroll">
                        ${filter.type === "range"
                          ? html`
                              <div>
                                ${filter.format === "date"
                                  ? dayjs.unix(
                                      // @ts-ignore
                                      this._filters[filter.key].state.min
                                    )
                                  : // @ts-ignore
                                    this._filters[filter.key].state.min}
                              </div>
                              <tc-range-slider
                                min="${
                                  // @ts-ignore
                                  this._filters[filter.key].min
                                }"
                                max="${
                                  // @ts-ignore
                                  this._filters[filter.key].max
                                }"
                                value1="${
                                  // @ts-ignore
                                  this._filters[filter.key].state.min
                                }"
                                value2="${
                                  // @ts-ignore
                                  this._filters[filter.key].state.max
                                }"
                                step="1"
                                @change="${(evt: InputEvent) => {
                                  [
                                    // @ts-ignore
                                    this._filters[filter.key].state.min,
                                    // @ts-ignore
                                    this._filters[filter.key].state.max,
                                    // @ts-ignore
                                  ] = evt.detail.values;
                                  this.search();
                                }}"
                              ></tc-range-slider>
                              <div>
                                ${filter.format === "date"
                                  ? dayjs.unix(
                                      // @ts-ignore
                                      this._filters[filter.key].state.max
                                    )
                                  : // @ts-ignore
                                    this._filters[filter.key].state.max}
                              </div>
                            `
                          : filter.type === "spatial"
                          ? html`
                              <form style="display: inline">
                              ${map(
                                ["intersects", "within"],
                                (mode: string) => html`
                                  <label>
                                    <input
                                      type="radio"
                                      name="mode"
                                      .checked="${
                                        // @ts-ignore
                                        live(
                                          this._filters[filter.key].state
                                            .mode === mode
                                        )
                                      }"
                                      value="${mode}"
                                      @click="${() => {
                                        // @ts-ignore
                                        this._filters[filter.key].state.mode =
                                          mode;
                                        this.requestUpdate();
                                        this.search();
                                      }}"
                                    />
                                    <small>${mode} filter geometry</small>
                                  </label>
                                `
                              )}
                              </form>
                              <eox-itemfilter-spatial-filter
                                exportparts="map: spatial-filter-map"
                                .geometry=${
                                  this._filters[filter.key].state?.geometry
                                }
                                @filter="${(e: Event) => {
                                  // @ts-ignore
                                  this._filters[filter.key].state.geometry =
                                    // @ts-ignore
                                    e.detail.geometry;
                                  this.search();
                                }}"
                              ></eox-itemfilter-spatial>
                            `
                          : html`
                              <ul>
                                ${
                                  // @ts-ignore
                                  this._filters[filter.key]
                                    ? map(
                                        Object.keys(
                                          // @ts-ignore
                                          this._filters[filter.key].state
                                        ).sort((a, b) => a.localeCompare(b)),
                                        (key) => html`
                                          <li>
                                            <label>
                                              <input
                                                name="selection"
                                                type="${filter.exclusive
                                                  ? "radio"
                                                  : "checkbox"}"
                                                checked="${
                                                  // @ts-ignore
                                                  this._filters[filter.key]
                                                    .state[key] || nothing
                                                }"
                                                @click=${() =>
                                                  this.toggleFilter(
                                                    filter.key,
                                                    key,
                                                    filter.exclusive
                                                  )}
                                              />
                                              <span class="title">${key}</span>
                                            </label>
                                          </li>
                                        `
                                      )
                                    : null
                                }
                              </ul>
                            `}
                      </div>
                    </details>
                  `
                )}
              </ul>
              ${when(
                this._config.filterProperties,
                () => html`
                  <a
                    id="filter-reset"
                    data-cy="filter-reset"
                    @click=${() => this.resetFilters()}
                    >Reset filters</a
                  >
                `
              )}
            </section>
          `
        )}
        ${when(
          this.config.showResults && this._results,
          () => html`
            <section id="section-results">
              <div>
                <slot name="resultstitle"></slot>
              </div>
              <div id="container-results" class="scroll">
                ${this._results.length < 1
                  ? html` <small class="no-results">No matching items</small> `
                  : nothing}
                <ul id="results" part="results">
                  ${this._config.aggregateResults
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
                            <span class="title">
                              ${aggregationProperty}
                              <span class="count"
                                >(${this.aggregateResults(
                                  this._results,
                                  aggregationProperty
                                ).length})</span
                              >
                            </span>
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
                                        this._config.onSelect(item);
                                      }}
                                    />
                                    ${when(
                                      this.hasTemplate("result"),
                                      () =>
                                        this.renderTemplate(
                                          "result",
                                          item,
                                          // @ts-ignore
                                          `result-${item.id}`
                                        ),
                                      () => html`
                                        <span class="title"
                                          >${unsafeHTML(
                                            // @ts-ignore
                                            item[this._config.titleProperty]
                                          )}</span
                                        >
                                      `
                                    )}
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
                          html`<li part="result">
                            ${
                              // @ts-ignore
                              unsafeHTML(item[this._config.titleProperty])
                            }
                          </li>`
                      )}
                </ul>
              </div>
            </section>
          `
        )}
      </form>
    `;
  }
}
