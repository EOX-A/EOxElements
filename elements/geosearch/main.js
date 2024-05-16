import { LitElement, html, css } from "lit";
import { ref, createRef } from "lit/directives/ref.js";
import Handlebars from "handlebars";
import proj4 from "proj4";

import { button } from "../../utils/styles/button";

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
       * Which direction the search input and results should open to. One of the following options:
       *
       * - `left`
       * - `top`
       * - `right`
       * - `bottom`
       *
       */
      direction: { type: String },
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

  static styles = css`
    .hidden {
      display: none;
    }

    .geosearch {
      display: flex;
      flex-direction: row;
      align-items: start;
    }

    .search-container {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    .search-container.hidden {
      opacity: 0;
    }
    .results-container {
      min-height: 100px;
      width: 332px;
      background: #eaf1f5;
      overflow: hidden;
      border-radius: 6px;
      margin-top: 10px;
      box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.08),
        0px 2px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 5px 0px rgba(0, 0, 0, 0.08);
    }
    input {
      background: #c6d4dd;
      height: 48px;
      border-radius: 6px;
      padding: 0 16px;
      min-width: 300px;
      border: none;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.1),
        0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    }
    input::before {
      background: url("_data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='%23999999' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
      width: 48px;
      height: 48px;
      display: inline-block;
    }
    button {
      height: auto;
    }

    .geosearch.small button {
      height: 32px;
      width: 32px;
      padding: 6px;
    }

    .geosearch.small button .icon {
      min-width: 20px;
      height: 20px;
      transform: translateX(1px);
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E");
    }

    .geosearch.small button .chevron {
      display: none;
    }

    .geosearch.small input {
      background: #fff;
    }

    .chevron {
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-left%3C/title%3E%3Cpath d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /%3E%3C/svg%3E");
      margin-right: 9px;
    }

    .chevron.right {
      transform: rotate(180deg);
      margin-left: 9px;
    }

    .chevron.top {
      transform: rotate(90deg);
      margin-bottom: 9px;
    }

    .chevron.bottom {
      transform: rotate(-90deg);
      margin-top: 9px;
    }

    .chevron.right.active {
      transform: rotate(180deg);
    }
  `;

  // TODO: Find a solution to avoid storing key in the code
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

  render() {
    return html`
      <style>
        ${button}
      </style>
      <div
        class="geosearch ${this.small ? "small" : ""}"
        style="flex-direction: ${this.direction === "top"
          ? "column-reverse"
          : this.direction === "left"
          ? "row-reverse"
          : this.direction === "bottom"
          ? "column"
          : "row"}"
      >
        <button
          class="${this.button ? "" : "hidden"}"
          style="
                        margin-${this.direction ?? "right"}: 12px;
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
