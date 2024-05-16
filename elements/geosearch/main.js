import { LitElement, html, css } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import Handlebars from "handlebars";
import proj4 from "proj4";

import { button } from "../../utils/styles/button";

import styles from "./style";

class EOxGeoSearch extends LitElement {
  static get properties() {
    return {
      /**
       * Internal storage of OpenCage API data after a successful API request.
       *
       */
      _data: { attribute: false },
      /**
       * Whether or not the list dropdown is visible.
       *
       */
      _isListVisible: { attribute: false },
      /**
       * Whether or not the input field is visible.
       *
       */
      _isInputVisible: { attribute: false },
      /**
       * The search query, which is bound to the input field.
       *
       */
      _query: { attribute: false },
      _useMockData: { attribute: false },
      /**
       * The OpenCage API endpoint to use for the search, as a Handlebars template string with `query` and `key` variables.
       *
       */
      endpoint: { type: String },
      /**
       * The API key to use for the search.
       *
       */
      key: { type: String },
      /**
       * The query selector for the map target, if any.
       *
       */
      for: { type: String },
      /**
       * A function to be called when a search result is selected, to enable
       * the parent component to handle the selection.
       *
       */
      onSelect: { type: Function },
      /**
       * Whether or not to enable button mode, which hides and shows the input field
       * similar to how a modal works.
       *
       */
      button: { type: Boolean },
      /**
       * Limit the search results to a certain number of items.
       *
       */
      limit: { type: Number, default: 10 },
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
      direction: { type: String },
      /**
       * The direction of the search results relative to the input field, with the same options as described above.
       *
       */
      secondaryDirection: { type: String },
    };
  }

  constructor() {
    super();

    this._data = [];
    this._isListVisible = false;
    this._isInputVisible = false;
    this._query = "";
    this._useMockData = true;
  }

  static styles = styles;

  async useMockData() {
    let url = `/opencage-mock-data.json`;

    const response = await fetch(url);
    const json = await response.json();
    this._data = json.results;
  }

  async fetchRemoteData(url) {
    const response = await fetch(url);
    const json = await response.json();
    this._data = json.results;
  }

  emit(_query) {
    let event = new CustomEvent("input", {
      bubbles: true,
      cancelable: true,
      value: _query,
    });

    this.dispatchEvent(event);
  }

  async onInput(e) {
    this._query = e.target.value;

    // Ignore requests with less than 2 characters since the API might respond with a 400 to them.
    if (this._query.length <= 1) {
      this._isListVisible = false;
      return;
    } else {
      this._isListVisible = true;
    }

    // Switch from mock data to API if `endpoint` and `key` are set and not empty.
    if (
      this.endpoint &&
      this.key &&
      this.endpoint.length > 0 &&
      this.key.length > 0
    ) {
      var template = Handlebars.compile(this.endpoint);

      // Execute the compiled template and store the resulting URL.
      let url = template({
        query: this._query,
        key: this.key,
        limit: this.limit,
      });

      await this.fetchRemoteData(url);
    } else {
      this.useMockData();
      console.info("Using mock data for EOxGeoSearch");
    }
  }

  onButtonClick() {
    this._isInputVisible = !this._isInputVisible;

    // Auto-focus the input field when it becomes visible
    if (this._isInputVisible) {
      this.renderRoot.querySelector("#gazetteer").focus();
    }
  }

  handleSelect(item) {
    this._isListVisible = false;

    this.onSelect(item);
  }

  getFlexDirection() {
    return this.direction === "top"
        ? "row-reverse"
        : this.direction === "left"
        ? "row-reverse"
        : this.direction === "bottom"
        ? "column"
        : this.direction === "right"
        ? "column"
        : "row";
  }

  getVerticalAlign() {
    return this.direction === "top"
        ? "end"
        : this.direction === "left"
        ? "start"
        : this.direction === "bottom"
        ? "end"
        : this.direction === "right"
        ? "start"
        : "row";
  }

  getMarginDirection() {
    return this.direction === "top"
        ? "left"
        : this.direction === "left"
        ? "left"
        : this.direction === "bottom"
        ? "right"
        : this.direction === "right"
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
          class="${this.button ? "" : "hidden"}"
          style="
                        margin-${this.getMarginDirection()}: 12px;
                        background: ${this._isInputVisible
            ? "#0078CE"
            : "#004170"};
                        flex-direction: ${this.direction === "top"
            ? "column"
            : this.direction === "left"
            ? "row"
            : this.direction === "bottom"
            ? "column-reverse"
            : "row-reverse"}
                    "
          @click="${this.onButtonClick}"
        >
          <span class="icon"></span>
          <span
            class="chevron ${this.direction ?? "right"} ${this._isInputVisible
              ? "active"
              : ""}"
          ></span>
          <span style="display: ${this.small ? "none" : "flex"}"
            >${this.label ?? "Search"}</span
          >
        </button>
        <div
          class="search-container ${this.button
            ? this._isInputVisible
              ? ""
              : "hidden"
            : ""}"
          style="flex-direction: ${this.direction === "top"
            ? "column-reverse"
            : "column"}"
        >
          <input
            id="gazetteer"
            type="text"
            placeholder="Type to search"
            .value="${this._query}"
            style="margin-top: ${this.direction === "top" ? 12 : 0}px"
            @input="${this.onInput}"
          />
          <div class="results-container ${this._isListVisible ? "" : "hidden"}">
            ${this._data.map(
              (item) => html`
                <eox-geosearch-item
                  .item="${item}"
                  .onClick="${(e) => {
                    this._isListVisible = false;
                    this._query = "";
                    let sw = proj4("EPSG:4326", "EPSG:3857", [
                      e.bounds.southwest.lng,
                      e.bounds.southwest.lat,
                    ]);
                    let ne = proj4("EPSG:4326", "EPSG:3857", [
                      e.bounds.northeast.lng,
                      e.bounds.northeast.lat,
                    ]);
                    e.zoomExtent = [sw[0], sw[1], ne[0], ne[1]];
                    this.onSelect(e);
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
      border-bottom: 1px solid #aaa;
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
