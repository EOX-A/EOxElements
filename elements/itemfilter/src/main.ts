import Fuse from "fuse.js";
import {
  itemFilterTemplate,
  itemTemplate,
  itemAggregationTemplate,
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
          // @ts-ignore
          item
            .querySelector("input[type='checkbox']")
            // @ts-ignore
            .setAttribute("data-filter-key", filterProperty);
          item
            .querySelector("input[type='checkbox']")
            .setAttribute("data-filter-value", filterItem);
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
      this.shadowRoot
        .querySelectorAll("input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.addEventListener("click", (evt) => {
            const target = evt.target;
            // @ts-ignore
            const filterKey = target.getAttribute("data-filter-key");
            // @ts-ignore
            const filterValue = target.getAttribute("data-filter-value");
            // @ts-ignore
            if (target.checked) {
              // @ts-ignore
              if (!this.filters[filterKey]) {
                // @ts-ignore
                this.filters[filterKey] = [];
              }
              // @ts-ignore
              this.filters[filterKey].push(filterValue);
            } else {
              // @ts-ignore
              this.filters[filterKey].splice(
                // @ts-ignore
                this.filters[filterKey].indexOf(filterValue),
                1
              );
              // @ts-ignore
              if (this.filters[filterKey].length === 0) {
                // @ts-ignore
                delete this.filters[filterKey];
              }
            }
            // @ts-ignore
            updateResults(
              // @ts-ignore
              this.shadowRoot.querySelector("input[type='text']").value
            );
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
          aggregationElement.querySelector("summary").innerHTML = aR;
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
        let li;
        if (this.aggregateBy) {
          // @ts-ignore
          const matchingAggregation = result[this.config.aggregateResults];
          if (Array.isArray(matchingAggregation)) {
            matchingAggregation.forEach((mA) => {
              li = document.createElement("li");
              li.innerHTML = result.name;
              this.shadowRoot
                .querySelector(`details[data-aggregate=${mA}]`)
                .appendChild(li);
            });
          } else {
            li = document.createElement("li");
            li.innerHTML = result.name;
            this.shadowRoot
              .querySelector(`details[data-aggregate=${matchingAggregation}]`)
              .appendChild(li);
          }
        } else {
          li = document.createElement("li");
          li.innerHTML = result.name;
          // @ts-ignore
          ul.appendChild(li);
        }
        li.addEventListener("click", () => this.config.onSelect(result));
      });
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
        if (!input) {
          if (this.config.matchAllWhenEmpty !== false) {
            // initially render all items
            renderResults(this.items);
          }
        } else {
          // @ts-ignore
          updateResults(input);
        }
      });
  }
}

customElements.define("eox-itemfilter", EOxItemFilter);
