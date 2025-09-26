import { LitElement, html, nothing } from "lit";
import { styleEOX } from "../style.eox";
import { when } from "lit/directives/when.js";

/**
 * EOxItemFilterExpandContainer is a custom web component that provides an expandable container for item filters.
 * The component supports a featured view and an expandable details view.
 *
 * @module EOxItemFilterExpandContainer
 * @extends LitElement
 * @property {Object} filterObject - The filter object containing state and properties such as title and expanded state.
 * @property {Boolean} unstyled - Flag to determine if default styles should be applied.
 */
export class EOxItemFilterExpandContainer extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      filterObject: { attribute: false, type: Object },
      unstyled: { type: Boolean },
      styleOverride: { type: String },
    };
  }

  constructor() {
    super();

    /**
     * @type Object
     */
    this.filterObject = {};

    /**
     * @type Boolean
     */
    this.unstyled = false;

    /**
     * @type String
     */
    this.styleOverride = "";
  }

  /**
   * Handles the toggle event for the details element.
   * Dispatches a custom event "details-toggled" with the event details.
   *
   * @param {Event} event - The toggle event.
   */
  #handleDetailsToggle(event) {
    this.dispatchEvent(
      new CustomEvent("details-toggled", {
        detail: event,
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX}
        ${this.styleOverride}
      </style>

      ${when(
        this.filterObject.featured,
        () => html`<slot name="filter"></slot>`,
        () =>
          html`<details
            @toggle="${this.#handleDetailsToggle}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded || nothing}
          >
            <summary class="square">
              <nav class="responsive tiny-space">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
                <span
                  class="title max"
                  style="${!this.filterObject.title &&
                  "text-transform: var(--text-transform)"}"
                >
                  ${this.filterObject.title ||
                  this.filterObject.key ||
                  "Filter"}
                </span>
                <slot name="reset-button"></slot>
              </nav>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`,
      )}
    `;
  }
}

customElements.define(
  "eox-itemfilter-expandcontainer",
  EOxItemFilterExpandContainer,
);
