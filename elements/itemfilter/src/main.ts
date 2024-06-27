import { html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import { repeat } from "lit/directives/repeat.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import "toolcool-range-slider";
import dayjs from "dayjs";
import { TemplateElement } from "../../../utils/templateElement";
import "./filters/_expandcontainer";
import "./filters/multiselect";
import "./filters/range";
import "./filters/select";
import "./filters/spatial";
import "./filters/text";
import "./inline";
import { indexItems, filter as filterClient } from "./filterClient";
import { filter as filterExternal } from "./filterExternal";
import { style } from "./style";
import { styleEOX } from "./style.eox";

export class ElementConfig {
  /**
   * Aggregate results by a property key
   */
  public aggregateResults?: string = undefined;

  /**
   * Automatically spread single item summaries
   * removing the summary header
   */
  public autoSpreadSingle?: boolean = false;

  /**
   * Highlighting of search result character matches
   */
  public enableHighlighting?: boolean = false;

  /**
   * Use an external search endpoint instead of fuse search.
   * Passed properties: input string, filters object
   */
  public externalFilter?: (input: string, filters: object[]) => string;

  /**
   * The filter properties.
   * @param filterProperties
   */
  public filterProperties?: Array<FilterObject> = [];

  /**
   * Native fuse.js config override
   */
  public fuseConfig?: object;

  /**
   * Inline mode, for rendering the itemfilter in avery condensed space.
   * Expexts showResults to be false
   */
  public inlineMode?: boolean = false;

  /**
   * Show all result items if nothing is input by the user
   * @default true
   */
  public matchAllWhenEmpty?: boolean = true;

  /**
   * Callback that is triggered on item search
   * @returns result items
   */
  // eslint-disable-next-line
  public onFilter?: Function = () => {};

  /**
   * Callback that is triggered on item selection
   * @returns selected item
   */
  // eslint-disable-next-line
  public onSelect?: Function = () => {};

  /**
   * Display results list
   */
  public showResults?: boolean = true;

  /**
   * The property of the result items used for display
   */
  public titleProperty = "title";

  /**
   * Allow opening multiple filter accordeons in parallel
   * @default true
   */
  public expandMultipleFilters?: boolean = true;

  /**
   * Initialize result accordeons expanded
   * @default true
   */
  public expandResults?: boolean = true;

  /**
   * Allow opening multiple result accordeons in parallel
   * @default true
   */
  public expandMultipleResults?: boolean = true;
}

@customElement("eox-itemfilter")
export class EOxItemFilter extends TemplateElement {
  _resultAggregation: Array<string> = [];

  _items: Record<string, unknown>[] = [];

  @state()
  public filters: { [key: string]: FilterObject } = {};

  @state()
  public results: Record<string, unknown>[];

  @state()
  public selectedResult: Item;

  @property({ attribute: false }) set items(items) {
    this.apply(items);
  }
  get items() {
    return this._items;
  }

  @property({ attribute: false }) set config(config) {
    const oldValue = this._config;
    this._config = {
      ...new ElementConfig(),
      ...config,
    };
    this.requestUpdate("config", oldValue);
  }
  get config() {
    return this._config;
  }
  private _config = new ElementConfig();

  @property()
  apply = (items: Array<object>) => {
    this._items = items.map((i, index) => ({
      id: `item-${index}`,
      ...i,
    }));

    // build filters
    if (this._config.filterProperties.length) {
      this._config.filterProperties.forEach((filterProperty: FilterObject) => {
        const filterKeys: FilterState = {};
        const parseValue = (value: string) => {
          return (<RangeFilterObject>filterProperty).format === "date"
            ? dayjs(value).unix()
            : parseInt(value);
        };
        this._items.forEach((item: Item) => {
          if (filterProperty.type === "range") {
            if (Array.isArray(item[filterProperty.key] as Array<number>)) {
              const currentValues = [
                // @ts-ignore
                parseValue(item[filterProperty.key][0]),
                // @ts-ignore
                parseValue(item[filterProperty.key][1]),
              ];
              filterKeys.min =
                filterKeys.min !== undefined
                  ? // @ts-ignore
                    Math.min(filterKeys.min, currentValues[0])
                  : currentValues[0];
              filterKeys.max =
                filterKeys.max !== undefined
                  ? // @ts-ignore
                    Math.max(filterKeys.max, currentValues[1])
                  : currentValues[1];
            } else {
              // @ts-ignore
              const currentValue = parseValue(item[filterProperty.key]);
              filterKeys.min =
                filterKeys.min !== undefined
                  ? // @ts-ignore
                    Math.min(filterKeys.min, currentValue)
                  : currentValue;
              filterKeys.max =
                filterKeys.max !== undefined
                  ? // @ts-ignore
                    Math.max(filterKeys.max, currentValue)
                  : currentValue;
            }
            return;
          }
          if (Array.isArray(item[filterProperty.key])) {
            // @ts-ignore
            item[filterProperty.key].forEach((prop: string) => {
              filterKeys[prop] = undefined;
            });
          } else {
            if (filterProperty.type === "spatial") {
              // @ts-ignore
              (<SpatialFilterObject>filterKeys).geometry = undefined;
              // @ts-ignore
              (<SpatialFilterObject>filterKeys).mode =
                (<SpatialFilterObject>filterProperty).mode || "intersects";
            } else {
              // @ts-ignore
              filterKeys[item[filterProperty.key]] = undefined;
            }
          }
        });
        this.filters[
          filterProperty.key ||
            (<TextFilterObject>filterProperty).keys.join("|")
        ] = {
          ...filterProperty,
          type: filterProperty.type || "multiselect",
          state: {
            ...filterKeys,
            ...filterProperty.state,
          },
          ...(filterProperty.state && {
            dirty: false,
          }),
          ...(filterProperty.type === "range" && {
            // @ts-ignore
            min: (<RangeFilterObject>filterKeys).min,
            // @ts-ignore
            max: (<RangeFilterObject>filterKeys).max,
            format: (<RangeFilterObject>filterProperty).format,
          }),
        };
      });
    }

    if (this._config.matchAllWhenEmpty !== false) {
      // initially render all items
      this.results = this.sortResults(this._items);
      this.requestUpdate();
    }

    if (this._config.aggregateResults) {
      // @ts-ignore
      this._resultAggregation = [
        ...new Set(
          // @ts-ignore
          this._items.reduce((store: Array<string>, item: Item) => {
            // @ts-ignore
            return store.concat(item[this._config.aggregateResults]);
          }, [])
        ),
        // @ts-ignore
      ].sort((a, b) => a.localeCompare(b));
    }

    const fuseKeys: Array<string> = [];
    Object.values(this.filters).forEach((f) => {
      if (f.type === "text") {
        (<TextFilterObject>f).keys.forEach((k) => {
          if (!fuseKeys.includes(k)) {
            fuseKeys.push(k);
          }
        });
      } else if (f.type === "select" || f.type === "multiselect") {
        if (!fuseKeys.includes(f.key)) {
          fuseKeys.push(f.key);
        }
      }
    });
    indexItems(this._items, {
      keys: fuseKeys,
      ...this._config.fuseConfig,
    });
    this.search();
  };

  @property({ attribute: false })
  styleOverride: string;

  @property({ type: Boolean })
  unstyled: boolean;

  private async search() {
    let results;
    if (this.config.externalFilter) {
      results = await filterExternal(this._items, this.filters, this._config);
    } else {
      results = await filterClient(this._items, this.filters, this._config);
    }
    this.results = this.sortResults(results);
    this._config.onFilter(this.results, this.filters);
  }

  aggregateResults(items: FilterObject[], property: string) {
    // @ts-ignore
    return items.filter((item: Item) => {
      const aggregation = item[this._config.aggregateResults];
      // special check if a currently selected fiter property is part of a filter key
      // also used for aggregation. if aggregation of results uses the same property
      // as the filter, it doesn't make sense to show all aggregations, but only
      // the one matching the current filter
      let currentFilter;
      if (this.filters[this._config.aggregateResults]) {
        currentFilter = Object.keys(
          this.filters[this._config.aggregateResults]
        ).filter((f) => this.filters[this._config.aggregateResults].state[f]);
      }

      const includedInCurrentFilter = currentFilter?.length
        ? currentFilter.includes(property)
        : true;

      return includedInCurrentFilter && Array.isArray(aggregation)
        ? aggregation.includes(property)
        : aggregation === property;
    });
  }

  createItemList(aggregationProperty: string) {
    return html`
      <ul>
        ${repeat(
          this.aggregateResults(this.results, aggregationProperty),
          (item: Item) => item.id,
          (item: Item) => html`
            <li
              class=${this.selectedResult?.[this._config.titleProperty] ===
              item[this._config.titleProperty]
                ? "highlighted"
                : (nothing as null)}
            >
              <label>
                <input
                  data-cy="result-radio"
                  type="radio"
                  class="result-radio"
                  name="result"
                  id="${<string>item.id}"
                  ?checked=${this.selectedResult?.[
                    this._config.titleProperty
                  ] === item[this._config.titleProperty] || (nothing as null)}
                  @click=${() => {
                    this.selectedResult = item;
                    this._config.onSelect(item);
                  }}
                />
                ${when(
                  this.hasTemplate("result"),
                  () =>
                    this.renderTemplate("result", item, `result-${item.id}`),
                  () => html`
                    <span class="title"
                      >${unsafeHTML(
                        <string>item[this._config.titleProperty]
                      )}</span
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

  sortResults(items: Record<string, unknown>[]) {
    return [...items].sort((a: Item, b: Item) =>
      (<string>a[this._config.titleProperty]).localeCompare(
        <string>b[this._config.titleProperty]
      )
    );
  }

  resetFilters() {
    this.renderRoot.querySelectorAll("[data-type='filter']").forEach((f) => {
      (<Filter>f).reset();
    });
    this.search();
  }

  toggleAccordion(event: CustomEvent) {
    let detailsElement: HTMLDetailsElement;

    if (event.detail) {
      detailsElement = event.detail.target as HTMLDetailsElement;
    } else {
      detailsElement = event.target as HTMLDetailsElement;
    }

    if (detailsElement.classList.contains("details-filter")) {
      if (!detailsElement.open || this.config.expandMultipleFilters) return;

      this.shadowRoot
        .querySelectorAll("eox-itemfilter-expandcontainer")
        .forEach((container) => {
          const details = container.shadowRoot.querySelector(".details-filter");
          if (details && details !== detailsElement) {
            details.removeAttribute("open");
          }
        });
    } else {
      if (!detailsElement.open || this.config.expandMultipleResults) return;

      this.shadowRoot.querySelectorAll("details").forEach((details) => {
        if (details !== detailsElement) {
          details.removeAttribute("open");
        }
      });
    }
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        @submit="${(evt: FormDataEvent) => evt.preventDefault()}"
      >
        ${when(
          this._config.inlineMode,
          () => html`
            <eox-itemfilter-inline
              .items=${Object.values(this.filters)}
              .unstyled=${this.unstyled}
              @filter=${() => this.search()}
            >
            </eox-itemfilter-inline>
          `,
          () => html`
            ${when(
              this._config.filterProperties.length,
              () => html`
                <section
                  class="${this.config.inlineMode
                    ? "inline"
                    : (nothing as null)}"
                >
                  ${when(
                    !this.config.inlineMode,
                    () => html`
                      <slot name="filterstitle"
                        ><h4 style="margin-top: 8px">Filters</h4></slot
                      >
                    `
                  )}
                  <ul id="filters">
                    ${map(
                      Object.values(this.filters),
                      (filterObject) => staticHTML`
                    <li>
                      ${
                        filterObject.featured
                          ? staticHTML`
                            <eox-itemfilter-${unsafeStatic(filterObject.type)}
                              slot="filter"
                              data-type="filter"
                              .filterObject=${filterObject}
                              .unstyled=${this.unstyled}
                              @filter="${() => this.search()}"
                            ></eox-itemfilter-${unsafeStatic(
                              filterObject.type
                            )}>
                          `
                          : staticHTML`
                            <eox-itemfilter-expandcontainer
                              .filterObject=${filterObject}
                              .unstyled=${this.unstyled}
                              @details-toggled=${this.toggleAccordion}
                            >
                            ${when(
                              filterObject.dirty,
                              () => html`
                                <button
                                  slot="reset-button"
                                  class="reset-icon icon"
                                  @click=${(e: MouseEvent) => {
                                    (<Element & { reset: () => void }>(
                                      (<HTMLButtonElement>(
                                        e.target
                                      )).parentElement.querySelector(
                                        "[slot=filter]"
                                      )
                                    )).reset();
                                    this.search();
                                    this.requestUpdate();
                                  }}
                                >
                                  ${this.unstyled ? "Reset" : nothing}
                                </button>
                              `
                            )}
                              <eox-itemfilter-${unsafeStatic(filterObject.type)}
                                slot="filter"
                                data-type="filter"
                                data-filter="${filterObject.key}"
                                .filterObject=${filterObject}
                                .unstyled=${this.unstyled}
                                @filter="${() => this.search()}"
                              ></eox-itemfilter-${unsafeStatic(
                                filterObject.type
                              )}>
                            </eox-itemfilter-expandcontainer>
                        `
                      }
                    </li>
                  `
                    )}
                  </ul>
                  ${when(
                    this._config.filterProperties &&
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
              `
            )}
            ${when(
              this.config.showResults && this.results,
              () => html`
                <section id="section-results">
                  <div>
                    <slot name="resultstitle"
                      ><h4 style="margin-top: 8px">Results</h4></slot
                    >
                  </div>
                  <div id="container-results" class="scroll">
                    ${this.results.length < 1
                      ? html`
                          <small class="no-results">No matching items</small>
                        `
                      : nothing}
                    <ul id="results" part="results">
                      ${this._config.aggregateResults
                        ? map(
                            this._resultAggregation.filter(
                              (aggregationProperty) =>
                                this.aggregateResults(
                                  this.results,
                                  aggregationProperty
                                ).length
                            ),
                            (aggregationProperty) =>
                              html` ${when(
                                this.aggregateResults(
                                  this.results,
                                  aggregationProperty
                                ).length === 1 && this.config.autoSpreadSingle,
                                () =>
                                  html` <div style="margin-left: -8px">
                                    ${this.createItemList(aggregationProperty)}
                                  </div>`,
                                () => html`
                                  <details
                                    class="details-results"
                                    @toggle=${this.toggleAccordion}
                                    ?open=${this._config.expandResults ||
                                    (nothing as null)}
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
                                    <div>
                                      ${this.createItemList(
                                        aggregationProperty
                                      )}
                                    </div>
                                  </details>
                                `
                              )}`
                          )
                        : map(
                            this.results,
                            (item: Item) =>
                              html`<li part="result">
                                <label>
                                  <input
                                    type="radio"
                                    name="result"
                                    id="${<string>item.id}"
                                    @click=${() => {
                                      this.selectedResult = item;
                                      this._config.onSelect(item);
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
                                          <string>(
                                            item[this._config.titleProperty]
                                          )
                                        )}</span
                                      >
                                    `
                                  )}
                                </label>
                              </li>`
                          )}
                    </ul>
                  </div>
                </section>
              `
            )}
          `
        )}
      </form>
    `;
  }
}
