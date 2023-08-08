import { html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
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
   * Highlighting of search result character matches
   */
  public enableHighlighting?: Boolean = false;

  /**
   * Search functionality // TODO
   */
  public enableSearch?: Boolean = false;

  /**
   * Use an external search endpoint instead of fuse search.
   * Passed properties: input string, filters object
   */
  public externalFilter?: Function;

  /**
   * The filter properties.
   * @param filterProperties
   */
  public filterProperties?: Array<FilterObject> = [];

  /**
   * Native fuse.js config override
   */
  public fuseConfig?: Object;

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
  public onFilter?: Function = () => {};

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
  _resultAggregation: Array<string> = [];

  @state()
  _items: Array<object> = [];

  @state()
  _results: Array<object>;

  @state()
  _filters: { [key: string]: FilterObject } = {};

  @state()
  _selectedResult: object;

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
                parseValue(item[filterProperty.key][0]),
                parseValue(item[filterProperty.key][1]),
              ];
              filterKeys.min =
                filterKeys.min !== undefined
                  ? Math.min(filterKeys.min, currentValues[0])
                  : currentValues[0];
              filterKeys.max =
                filterKeys.max !== undefined
                  ? Math.max(filterKeys.max, currentValues[1])
                  : currentValues[1];
            } else {
              const currentValue = parseValue(item[filterProperty.key]);
              filterKeys.min =
                filterKeys.min !== undefined
                  ? Math.min(filterKeys.min, currentValue)
                  : currentValue;
              filterKeys.max =
                filterKeys.max !== undefined
                  ? Math.max(filterKeys.max, currentValue)
                  : currentValue;
            }
            return;
          }
          if (Array.isArray(item[filterProperty.key])) {
            item[filterProperty.key].forEach((prop: string) => {
              filterKeys[prop] = undefined;
            });
          } else {
            if (filterProperty.type === "spatial") {
              (<SpatialFilterObject>filterKeys).geometry = undefined;
              (<SpatialFilterObject>filterKeys).mode =
                (<SpatialFilterObject>filterProperty).mode || "intersects";
            }
          }
        });
        this._filters[
          filterProperty.key ||
            (<TextFilterObject>filterProperty).keys.join("|")
        ] = {
          ...filterProperty,
          type: filterProperty.type || "multiselect",
          state: {
            ...filterKeys,
            ...filterProperty.state,
          },
          ...(filterProperty.type === "range" && {
            min: (<RangeFilterObject>filterKeys).min,
            max: (<RangeFilterObject>filterKeys).max,
            format: (<RangeFilterObject>filterProperty).format,
          }),
        };
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
          this._items.reduce((store: Array<string>, item: Item) => {
            return store.concat(item[this._config.aggregateResults]);
          }, [])
        ),
      ].sort((a, b) => a.localeCompare(b));
    }

    const fuseKeys: Array<string> = [];
    this._config.filterProperties.forEach((f) => {
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
  };

  @property({ type: Boolean })
  unstyled: Boolean;

  private async search() {
    let results;
    if (this.config.externalFilter) {
      results = await filterExternal(this._items, this._filters, this._config);
    } else {
      results = await filterClient(this._items, this._filters, this._config);
    }
    this._results = this.sortResults(results);
    this._config.onFilter(this._results, this._filters);
  }

  aggregateResults(items: Array<Object>, property: string) {
    return items.filter((item: Item) => {
      const aggregation = item[this._config.aggregateResults];
      // special check if a currently selected fiter property is part of a filter key
      // also used for aggregation. if aggregation of results uses the same property
      // as the filter, it doesn't make sense to show all aggregations, but only
      // the one matching the current filter
      let currentFilter;
      if (this._filters[this._config.aggregateResults]) {
        currentFilter = Object.keys(
          this._filters[this._config.aggregateResults]
        ).filter((f) => this._filters[this._config.aggregateResults].state[f]);
      }

      const includedInCurrentFilter = currentFilter?.length
        ? currentFilter.includes(property)
        : true;

      return includedInCurrentFilter && Array.isArray(aggregation)
        ? aggregation.includes(property)
        : aggregation === property;
    });
  }

  sortResults(items: Array<Object>) {
    return [...items].sort((a: Item, b: Item) =>
      a[this._config.titleProperty].localeCompare(b[this._config.titleProperty])
    );
  }

  resetFilters() {
    this.renderRoot.querySelectorAll("[data-type='filter']").forEach((f) => {
      (<Filter>f).reset();
    });
    this.search();
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <form @submit="${(evt: FormDataEvent) => evt.preventDefault()}">
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
                  Object.values(this._filters),
                  (filterObject) => staticHTML`
                  <li>
                    <eox-itemfilter-expandcontainer .filterObject=${filterObject}>
                      <eox-itemfilter-${unsafeStatic(filterObject.type)}
                        slot="filter"
                        data-type="filter"
                        .filterObject=${filterObject}
                        @filter="${() => this.search()}"
                      ></eox-itemfilter-${unsafeStatic(filterObject.type)}>
                    </eox-itemfilter-expandcontainer>
                  </li>
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
                              (item: Item) => html`
                                <li>
                                  <label>
                                    <input
                                      type="radio"
                                      name="result"
                                      id="${item.id}"
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
                                          `result-${item.id}`
                                        ),
                                      () => html`
                                        <span class="title"
                                          >${unsafeHTML(
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
                        (item: Item) =>
                          html`<li part="result">
                            ${unsafeHTML(item[this._config.titleProperty])}
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
