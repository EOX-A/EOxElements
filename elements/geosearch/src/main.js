import { LitElement, html } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import proj4 from "proj4";
import _debounce from "lodash.debounce";

import { style } from "./style";
import { styleEOX } from "./style.eox";

import { getElement } from "@eox/elements-utils";

const loaderSvg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="50"
    height="50"
    style="shape-rendering: auto; display: block; background: transparent;"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle
        stroke-dasharray="164.93361431346415 56.97787143782138"
        r="35"
        stroke-width="12"
        stroke="#1a467c"
        fill="none"
        cy="50"
        cx="50"
      >
        <animateTransform
          keyTimes="0;1"
          values="0 50 50;360 50 50"
          dur="1.2222222222222223s"
          repeatCount="indefinite"
          type="rotate"
          attributeName="transform"
        ></animateTransform>
      </circle>
      <g></g>
    </g>
  </svg>
`;

/**
 * `eox-geosearch` provides a flexible geocoding and location search interface using the OpenCage API.
 * It can be used standalone or integrated with `eox-map` for interactive map zooming and result visualization.
 *
 * Main features:
 * - Search for locations using OpenCage API
 * - Integrate with `eox-map` for zooming to results
 * - Customizable loader SVG
 * - Geographic extent limiting
 * - Tooltip support
 * - Additional OpenCage API parameters via args
 * - Button mode for compact UI
 * - Flexible alignment and direction options
 */
class EOxGeoSearch extends LitElement {
  static get properties() {
    return {
      /**
       * Internal storage of OpenCage API data after a successful API request.
       * @private
       */
      _data: { attribute: false },
      /**
       * Whether or not the list dropdown is visible.
       * @private
       */
      _isListVisible: { attribute: false },
      /**
       * Whether or not the input field is visible.
       * @private
       */
      _isInputVisible: { attribute: false },
      /**
       * The search query, which is bound to the input field.
       * @private
       */
      _query: { attribute: false },
      /**
       * Returns true if the element is currently loading data from the API.
       * @private
       */
      _isLoading: { attribute: false },
      /**
       * The OpenCage API endpoint to use for the search, including the key but without the query parameter.
       *
       */
      endpoint: { type: String },

      for: { type: String },
      /**
       * The name of the query parameter to use for the search query in the endpoint URI.
       *
       */
      queryParameter: {
        attribute: "query-parameter",
        type: String,
        default: "q",
      },
      /**
       * Whether or not to enable button mode, which hides and shows the input field
       * similar to how a modal works.
       *
       */
      button: { type: Boolean },
      /**
       * Whether or not to render the map externally.
       *
       */
      externalMapRendering: { type: Boolean },
      /**
       * Set a custom interval for the debounce function.
       *
       */
      interval: { type: Number, default: 800 },
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
        attribute: "results-direction",
      },
      unstyled: { type: Boolean },
      /**
       * Svg used as loading indicator
       */
      loaderSvg: {
        type: String,
        attribute: "loader-svg",
      },
      /**
       * Geographic extent to limit search results in the format "minLon,minLat,maxLon,maxLat".
       * This corresponds to OpenCage API's bounds parameter.
       * Example: "-0.563160,51.280430,0.278970,51.683979"
       */
      extent: {
        type: String,
      },
      /**
       * Tooltip text to display on the search button/input (uses BeerCSS tooltip).
       */
      tooltip: {
        type: String,
      },
      /**
       * Direction of the tooltip relative to the button.
       * Options: "top", "bottom", "left", "right"
       * Default: "left"
       */
      tooltipDirection: {
        type: String,
        attribute: "tooltip-direction",
      },
      /**
       * Additional parameters to add to the query string as key-value pairs.
       * Example: { language: "en", limit: 10, countrycode: "us" }
       */
      params: {
        type: Object,
        attribute: "false",
      },
    };
  }

  /**
   * @type import("@eox/map").EOxMap
   */
  #eoxMap;

  constructor() {
    super();

    this._data = [];
    this._isListVisible = false;
    this._isInputVisible = false;
    this._query = "";
    this._isLoading = false;
    this.endpoint = undefined;
    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";
    this.queryParameter = "q";
    this.button = false;
    this.externalMapRendering = false;
    this.label = undefined;
    this.direction = "right";
    this.resultsDirection = "down";
    this.interval = 800;
    this.small = false;
    /**
     * Render the element without additional styles
     */
    this.unstyled = false;
    this.loaderSvg = loaderSvg;
    this.extent = undefined;
    this.tooltip = undefined;
    this.tooltipDirection = "left";
    this.params = undefined;

    /**
     * @private
     */
    this.fetchDebounced = _debounce(async () => {
      if (this._query.length < 2) return;
      this._isLoading = true;
      try {
        let uri = `${this.endpoint}${
          this.endpoint.includes("?") ? "&" : "?"
        }${this.queryParameter ?? "q"}=${this._query}`;

        // Add bounds parameter if extent is defined
        if (this.extent) {
          uri += `&bounds=${this.extent}`;
        }

        // Add additional parameters from params object
        if (this.params && typeof this.params === "object") {
          Object.entries(this.params).forEach(([key, value]) => {
            uri += `&${key}=${value}`;
          });
        }

        const response = await fetch(encodeURI(uri));
        const json = await response.json();
        this._data = json.results;
        this._isLoading = false;
      } catch (_) {
        console.log("Error setting up or requesting from geosearch endpoint");
      }
    }, this.interval);
  }

  async onInput(e) {
    this._query = e.target.value;
    if (this._query.length == 0) {
      this._isListVisible = false;
      return;
    } else {
      if (this._query.length >= 2) {
        this._isLoading = true;
      }
      this._isListVisible = true;
    }
    this.fetchDebounced();
  }

  onInputBlur() {
    this._isInputVisible = false;
    this._isListVisible = false;
    this._query = "";
  }

  handleSelect(event) {
    this._isInputVisible = false;
    this._isListVisible = false;
    this._query = "";

    if (!this.externalMapRendering) {
      /**
       * This for now only supports OpenCage
       */
      const viewProjection = this.eoxMap.map
        .getView()
        .getProjection()
        .getCode();

      let sw = proj4("EPSG:4326", viewProjection, [
        event.bounds.southwest.lng,
        event.bounds.southwest.lat,
      ]);
      let ne = proj4("EPSG:4326", viewProjection, [
        event.bounds.northeast.lng,
        event.bounds.northeast.lat,
      ]);
      const zoomExtent = [sw[0], sw[1], ne[0], ne[1]];

      this.eoxMap.zoomExtent = zoomExtent;
    }

    /**
     * The select event, including the details of the selected item
     */
    this.dispatchEvent(
      new CustomEvent("geosearchSelect", {
        detail: event,
        bubbles: true,
        composed: true,
      }),
    );
  }

  updateMap() {
    const foundElement = getElement(this.for);

    if (foundElement) {
      const EoxMap = /** @type {import("@eox/map").EOxMap} */ (foundElement);
      this.eoxMap = EoxMap;
    }
  }

  /**
   * initializes the EOxMap instance
   * And stores it in the private property #eoxMap.
   */
  firstUpdated() {
    this.updateMap();
  }

  updated(changedProperties) {
    if (changedProperties.has("for")) {
      this.updateMap();
    }
  }

  get eoxMap() {
    return this.#eoxMap;
  }

  set eoxMap(value) {
    const oldValue = this.#eoxMap;
    this.#eoxMap = value;
    this.requestUpdate("eoxMap", oldValue);
  }

  render() {
    const searchIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>magnify</title>
      <path
        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
      />
    </svg>`;
    const backIcon = html`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>arrow-left</title>
      <path
        d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
      />
    </svg>`;

    const menuInput = html`
      <li>
        <div class="field small prefix surface border">
          ${!this.unstyled
            ? this._isLoading
              ? this.loaderSvg
                ? html`<i>${unsafeSVG(this.loaderSvg)}</i>`
                : html`<progress class="circle"></progress>`
              : html`<i class="front">${backIcon}</i>`
            : ""}
          <input
            placeholder="Type to search"
            @input="${this.onInput}"
            @blur="${this.onInputBlur}"
          />
        </div>
      </li>
    `;
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <div
        class="geosearch"
      >
      
        <div class="${this.button ? (this.small ? "button small circle small-elevate" : "button extra circle") : "field small prefix round surface border active"}" data-ui="#search"
        @click=${() => {
          this._isListVisible = true;
          setTimeout(() => {
            /** @type HTMLInputElement */ (
              this.renderRoot.querySelector("menu#search input")
            ).focus();
          }, 500);
        }}
        >
        ${!this.unstyled ? html`<i class="front small">${searchIcon}</i>` : ""}
        ${this.tooltip && this.button && !this._isListVisible ? html`<div class="tooltip ${this.tooltipDirection}">${this.tooltip}</div>` : ""}

  ${this.button || this.unstyled ? "" : html`<input placeholder="Type to search" />`}
  <menu id="search" class="surface ${this.button ? `no-wrap ${this.direction} ${this.resultsDirection === "up" ? "top" : "bottom"}` : ""} min${this._isListVisible ? " active" : ""}">
${this.resultsDirection === "up" ? "" : menuInput}
    ${this._query && this._query.length < 2 ? html`<li class="surface"><small>Enter at least two characters to search</small></li>` : ""}
${this._data.map(
  (item) => html`
    <li
      data-ui="#search"
      class="surface"
      @click="${() => {
        this.handleSelect(item);
      }}"
    >
      ${item.formatted}
    </li>
  `,
)}
          ${this.resultsDirection === "up" ? menuInput : ""}
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

customElements.define("eox-geosearch", EOxGeoSearch);

export { EOxGeoSearch };
