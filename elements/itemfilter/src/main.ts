import Fuse from "fuse.js";
import {
  itemFilterTemplate,
  itemTemplate,
  itemAggregationTemplate,
  itemResultTemplate,
} from "./template";
import { highlight } from "./itemHighlighting";

export class EOxItemFilter extends HTMLElement {
  shadowRoot: ShadowRoot;

  /**
   * Apply JSON items to itemfilter.
   * @param json
   */
  apply: Function;

  private items: Array<Object>;
  private fuse: any; // TODO proper typing

  private filters: Object;
  private aggregateBy: Array<string>;

  config: {
    /**
     * The filter properties.
     * @param filterProperties
     */
    filterProperties: Required<Array<string>>;
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
  };

  constructor() {
    super();

    this.filters = {};

    this.shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = itemFilterTemplate;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.apply = (json: Array<Object>) => {
      if (this.config.enableSearch) {
        // @ts-ignore
        this.shadowRoot.querySelector("input[type=text").style.display =
          "block";
      }
      this.items = json;
      // @ts-ignore
      this.fuse = new Fuse(this.items, {
        minMatchCharLength: 1,
        includeMatches: true,
        // Search in same fields as specified by filter properties, plus name
        // @ts-ignore
        keys: ["name", ...this.config.filterProperties],
        useExtendedSearch: true,
        ...this.config.fuseConfig,
      });
      // @ts-ignore
      this.config.filterProperties.forEach((filterProperty) => {
        // @ts-ignore
        const filter: Array<string> = [
          ...new Set(
            this.items.reduce((store: Array<Object>, item: Object) => {
              // @ts-ignore
              return store.concat(item[filterProperty]);
            }, [])
          ),
        ].sort();

        const ul = this.shadowRoot.querySelector("ul#filters");
        filter.forEach((filterItem) => {
          const li = document.createElement("template");
          li.innerHTML = itemTemplate;
          // @ts-ignore
          const item: Element = li.content.cloneNode(true);
          const filterItemSelect = item.querySelector("input[type='checkbox']");
          filterItemSelect.setAttribute("data-filter-key", filterProperty);
          filterItemSelect.setAttribute("name", "filter");
          if (this.config.exclusiveFilters === true) {
            // @ts-ignore
            filterItemSelect.type = "radio";
          }
          filterItemSelect.setAttribute("data-filter-value", filterItem);
          item.querySelector("span.title").innerHTML = filterItem;
          ul.appendChild(item);
        });

        // @ts-ignore
        if (this.config.aggregateResults === filterProperty) {
          this.aggregateBy = filter;
        }
      });
      watchFilters();

      if (this.config.matchAllWhenEmpty !== false) {
        // initially render all items
        renderResults(this.items);
      }
    };

    const watchFilters = () => {
      const watchedItems = this.shadowRoot.querySelectorAll(
        `input[type="${
          this.config.exclusiveFilters === true ? "radio" : "checkbox"
        }"]`
      );
      // @ts-ignore
      const syncFilters = (target) => {
        watchedItems.forEach((item) => {
          // @ts-ignore
          const filterKey = item.getAttribute("data-filter-key");
          // @ts-ignore
          const filterValue = item.getAttribute("data-filter-value");
          // @ts-ignore
          if (item.checked) {
            // @ts-ignore
            if (!this.filters[filterKey]) {
              // @ts-ignore
              this.filters[filterKey] = [];
            }
            // @ts-ignore
            if (!this.filters[filterKey].includes(filterValue)) {
              // @ts-ignore
              this.filters[filterKey].push(filterValue);
            }
          } else {
            if (target === item) {
              // @ts-ignore
              if (!this.filters[filterKey]) return;
              // @ts-ignore
              this.filters[filterKey].splice(
                // @ts-ignore
                this.filters[filterKey].indexOf(filterValue),
                1
              );
            } else {
              if (this.config.exclusiveFilters === true) {
                if (
                  // @ts-ignore
                  this.filters[filterKey] &&
                  // @ts-ignore
                  this.filters[filterKey].includes(filterValue)
                ) {
                  // @ts-ignore
                  this.filters[filterKey]?.splice(
                    // @ts-ignore
                    this.filters[filterKey].indexOf(filterValue),
                    1
                  );
                }
              }
            }
            // @ts-ignore
            if (this.filters[filterKey]?.length === 0) {
              // @ts-ignore
              delete this.filters[filterKey];
            }
          }
        });
      };
      watchedItems.forEach((item) => {
        item.addEventListener("click", (evt) => {
          syncFilters(evt.target);
          // if all filters are removed, reset
          if (
            this.config.matchAllWhenEmpty !== false &&
            Object.keys(this.filters).length === 0
          ) {
            // render all items
            renderResults(this.items);
          } else {
            updateResults(
              // @ts-ignore
              this.shadowRoot.querySelector("input[type='text']").value
            );
          }
        });
      });
    };

    // @ts-ignore
    const renderResults = (results) => {
      const ul = this.shadowRoot.querySelector("ul#results");
      ul.innerHTML = "";
      if (this.config.aggregateResults) {
        const aggregation = document.createElement("template");
        aggregation.innerHTML = itemAggregationTemplate;
        this.aggregateBy.forEach((aR) => {
          if (
            // @ts-ignore
            !results.find((result) =>
              Array.isArray(result[this.config.aggregateResults])
                ? result[this.config.aggregateResults].includes(aR)
                : result[this.config.aggregateResults] === aR
            )
          ) {
            return;
          }
          // @ts-ignore
          const aggregationElement: Element =
            aggregation.content.cloneNode(true);
          // @ts-ignore
          aggregationElement.querySelector("summary .title").innerHTML = aR;
          // @ts-ignore
          aggregationElement
            .querySelector("details")
            // @ts-ignore
            .setAttribute("data-aggregate", aR);
          ul.appendChild(aggregationElement);
        });
      }
      // @ts-ignore
      results.forEach((result) => {
        const li = document.createElement("template");
        li.innerHTML = itemResultTemplate;
        // @ts-ignore
        const resultElement: Element = li.content.cloneNode(true);
        resultElement.querySelector(".title").innerHTML = result.name;
        let parent;
        if (this.aggregateBy) {
          // @ts-ignore
          const matchingAggregation = result[this.config.aggregateResults];
          if (Array.isArray(matchingAggregation)) {
            matchingAggregation.forEach((mA) => {
              parent = this.shadowRoot.querySelector(
                `details[data-aggregate=${mA}]`
              );
            });
          } else {
            parent = this.shadowRoot.querySelector(
              `details[data-aggregate=${matchingAggregation}]`
            );
          }
        } else {
          // @ts-ignore
          parent = ul;
        }
        resultElement.querySelector("input").addEventListener("click", () => {
          if (this.config.onSelect) {
            this.config.onSelect(result);
          }
        });
        parent.appendChild(resultElement);
      });
      if (this.config.aggregateResults) {
        // console.log(this.shadowRoot.querySelectorAll("details"))
        const allDetails = this.shadowRoot.querySelectorAll("details");
        allDetails.forEach((detail) => {
          // @ts-ignore
          detail.querySelector("summary .count").innerHTML =
            detail.querySelectorAll("li").length;
        });
      }
    };
    const updateResults = (input: String, filters: Object = this.filters) => {
      const parsedFilters = Object.entries(filters).reduce(
        (store, [key, value]) => {
          // @ts-ignore
          const createProperty = (val) => {
            const property = {};
            // @ts-ignore
            property[key] = `=${val}`; // exact match
            store.push(property);
          };
          if (Array.isArray(value)) {
            value.forEach((v) => createProperty(v));
          } else {
            createProperty(value);
          }
          return store;
        },
        []
      );
      const search = this.fuse.search({
        ...(input.length && Object.keys(parsedFilters).length
          ? {
              $and: [
                { name: input },
                {
                  $or: parsedFilters,
                },
              ],
            }
          : {
              $or: [
                { name: input },
                {
                  $or: parsedFilters,
                },
              ],
            }),
      });
      const results = this.config.enableHighlighting
        ? highlight(search)
        : // @ts-ignore
          search.map((i) => i.item);
      renderResults(results);
    };

    this.shadowRoot
      .querySelector("input[type='text']")
      .addEventListener("input", (evt) => {
        // @ts-ignore
        const input = evt.target.value;
        if (!input && this.config.matchAllWhenEmpty !== false) {
          // initially render all items
          renderResults(this.items);
        } else {
          // @ts-ignore
          updateResults(input);
        }
      });
  }
}

customElements.define("eox-itemfilter", EOxItemFilter);
