import { LitElement, html, nothing } from "lit";
import { styleEOX } from "../style.eox";
import { when } from "lit/directives/when.js";

export class EOxItemFilterExpandContainer extends LitElement {
  static get properties() {
    return {
      filterObject: { attribute: false, type: Object },
      unstyled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.filterObject = {};
    this.unstyled = false;
  }

  handleDetailsToggle(event) {
    this.dispatchEvent(
      new CustomEvent("details-toggled", {
        detail: event,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX}
      </style>

      ${when(
        this.filterObject.featured,
        () => html`<slot name="filter"></slot>`,
        () =>
          html`<details
            @toggle="${this.handleDetailsToggle}"
            class="details-filter"
            ?open=${this.filterObject.expanded || nothing}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title &&
                "text-transform: capitalize"}"
              >
                ${this.filterObject.title || this.filterObject.key || "Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`
      )}
    `;
  }
}

customElements.define(
  "itemfilter-expandcontainer",
  EOxItemFilterExpandContainer
);
