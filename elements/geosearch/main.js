import { LitElement, html, css } from "lit";
import proj4 from "proj4";
import _debounce from "lodash.debounce";

import { button } from "../../utils/styles/button";

import styles from "./style";

class EOxGeoSearch extends LitElement {
  static get properties() {
    return {
      /**
       * The OpenCage API endpoint to use for the search, without the query parameter.
       *
       */
      endpoint: { type: String },
      /**
       * The name of the query parameter to use for the search query in the endpoint URI.
       *
       */
      queryParameter: { type: String, default: "q" },
      /**
       * A function to be called when a search result is selected, to enable
       * the parent component to handle the selection.
       *
       */
      onSelect: { type: Function, attribute: false },
      /**
       * Whether or not to enable button mode, which hides and shows the input field
       * similar to how a modal works.
       *
       */
      button: { type: Boolean },
      /**
       * Set a custom interval for the debounce function.
       *
       */
      interval: { type: Number, default: 200 },
      /**
       * Enables a smaller version of the button for use in map controls.
       *
       */
      small: { type: Boolean },
      /**
       * Which text to use for the button if it is enabled.
       *
       */
      label: { type: String },
      /**
       * The direction of the search input relative to the button, with the following options:
       *
       * - `left`
       * - `top`
       * - `right`
       * - `bottom`
       *
       */
      direction: {
        type: String,
        //default: "left",
        attribute: "list-direction",
      },
      /**
       * The direction of the results box relative to the input, with the following options:
       *
       * - `left`
       * - `top`
       * - `right`
       * - `bottom`
       *
       */
      resultsDirection: {
        type: String,
        default: "right",
        attribute: "results-direction",
      },
    };
  }

  /**
   * Internal storage of OpenCage API data after a successful API request.
   */
  #data;
  /**
   * Whether or not the list dropdown is visible.
   */
  #isListVisible;
  /**
   * Whether or not the input field is visible.
   */
  #isInputVisible;
  /**
   * The search query, which is bound to the input field.
   */
  #query;

  constructor() {
    super();

    this.#data = [];
    this.#isListVisible = false;
    this.#isInputVisible = false;
    this.#query = "";
  }

  static styles = styles;

  async fetchRemoteData(url) {
    const response = await fetch(encodeURI(url));
    const json = await response.json();
    this.#data = json.results;
  }

  emit(query) {
    let event = new CustomEvent("input", {
      bubbles: true,
      cancelable: true,
      value: query,
    });

    this.dispatchEvent(event);
  }

  async onInput(e) {
    this.#query = e.target.value;

    // Ignore requests with less than 2 characters since the API might respond with a 400 to them.
    if (this.#query.length <= 1) {
      this.#isListVisible = false;
      return;
    } else {
      this.#isListVisible = true;
    }

    let bounce = _debounce(async () => {
      if (this.endpoint && this.endpoint.length > 0) {
        const uri = `${this.endpoint}${
          this.endpoint.includes("?") ? "&" : "?"
        }${this.queryParameter ?? "q"}=${this.#query}`;
        await this.fetchRemoteData(uri);
      } else {
        console.error("No endpoint provided for GeoSearch element.");
      }
    }, this.interval);

    bounce();
  }

  onInputBlur() {
    this.#isInputVisible = false;
    this.#isListVisible = false;
    this.#query = "";
  }

  onButtonClick() {
    this.#isInputVisible = !this.#isInputVisible;

    // Auto-focus the input field when it becomes visible
    if (this.#isInputVisible) {
      this.renderRoot.querySelector("#gazetteer").focus();
    }
  }

  handleSelect(item) {
    this.#isListVisible = false;

    this.onSelect(item);
  }

  getFlexDirection() {
    return this.direction === "up"
      ? "column-reverse"
      : this.direction === "left"
      ? "row-reverse"
      : this.direction === "down"
      ? "column"
      : this.direction === "right"
      ? "row"
      : "row";
  }

  getResultsDirection() {
    return this.resultsDirection === "up"
      ? "column-reverse"
      : this.resultsDirection === "left"
      ? "row-reverse"
      : this.resultsDirection === "down"
      ? "column"
      : this.resultsDirection === "right"
      ? "row"
      : "row";
  }

  getVerticalAlign() {
    return this.resultsDirection === "up" ? "end" : "start";
  }

  getMarginDirection(direction) {
    return direction === "up"
      ? "top"
      : direction === "left"
      ? "left"
      : direction === "down"
      ? "bottom"
      : direction === "right"
      ? "right"
      : "row";
  }

  render() {
    return html`
      <style>
        ${button}
      </style>
      <div
        class="geosearch ${this.small ? "small" : ""}"
        style="
            flex-direction: ${this.getFlexDirection()};
            align-items: ${this.getVerticalAlign()};
        "
      >
        <button
          class="${this.button ? "" : "hidden"} ${this.#isInputVisible
            ? "active"
            : ""}"
          style="
            margin-${this.getMarginDirection(this.direction)}: 12px;
            flex-direction: ${this.getFlexDirection()};
          "
          @click="${this.onButtonClick}"
        >
          <span class="icon"></span>
          <span
            class="chevron ${this.direction ?? "right"} ${this.#isInputVisible
              ? "active"
              : ""}"
          ></span>
          <span style="display: ${this.small ? "none" : "flex"}"
            >${this.label ?? "Search"}</span
          >
        </button>
        <div
          class="search-container ${this.button
            ? this.#isInputVisible
              ? ""
              : "hidden"
            : ""}"
          style="
            flex-direction: ${this.getResultsDirection()};
            min-height: 300px;
          "
        >
          <input
            id="gazetteer"
            type="text"
            placeholder="Type to search"
            .value="${this.#query}"
            style="margin-${this.getMarginDirection(
              this.resultsDirection
            )}: 12px"
            @input="${this.onInput}"
          />
          <div class="results-container ${this.#isListVisible ? "" : "hidden"}">
            ${this.#data.map(
              (item) => html`
                <eox-geosearch-item
                  .item="${item}"
                  .onClick="${(e) => {
                    this.#isListVisible = false;
                    this.#query = "";
                    let sw = proj4("EPSG:4326", "EPSG:3857", [
                      e.bounds.southwest.lng,
                      e.bounds.southwest.lat,
                    ]);
                    let ne = proj4("EPSG:4326", "EPSG:3857", [
                      e.bounds.northeast.lng,
                      e.bounds.northeast.lat,
                    ]);
                    e.zoomExtent = [sw[0], sw[1], ne[0], ne[1]];

                    const options = {
                      detail: e.zoomExtent,
                      bubbles: true,
                      composed: true,
                    };
                    window.dispatchEvent(
                      new CustomEvent("geosearchSelect", options)
                    );

                    if (this.onSelect) this.onSelect(e);
                  }}"
                />
              `
            )}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }

  /**
   * Runs when the element is removed from the DOM
   */
  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

class EOxGeoSearchItem extends LitElement {
  static get properties() {
    return {
      item: { type: Object },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
  }

  static styles = css`
    .search-result {
      padding: 10px;
      border-bottom: 1px solid var(--results-border-color, #aaa);
      color: var(--results-fg, #000);
      cursor: pointer;
      font-size: 0.9rem;
    }

    .search-result:hover {
      background: #0001;
    }
  `;

  render() {
    return html`
      <div class="search-result" @click="${() => this.onClick(this.item)}">
        <div class="name">${this.item.formatted}</div>
      </div>
    `;
  }
}

customElements.define("eox-geosearch", EOxGeoSearch);
customElements.define("eox-geosearch-item", EOxGeoSearchItem);

export { EOxGeoSearch };
