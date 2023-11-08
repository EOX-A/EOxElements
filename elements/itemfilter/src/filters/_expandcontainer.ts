import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "../style";
import { styleEOX } from "../style.eox";

@customElement("eox-itemfilter-expandcontainer")
export class EOxItemFilterExpandContainer extends LitElement {
  @property({ attribute: false })
  filterObject: FilterObject;

  @property()
  unstyled: boolean;

  handleDetailsToggle(event: Event) {
    this.dispatchEvent(
      new CustomEvent("details-toggled", {
        detail: event,
        bubbles: true,
        composed: true,
      })
    );
  }

  _resetFilter() {
    const filterEl = this.querySelector(`[slot='filter']`) as Element & {
      reset: () => void;
    };
    filterEl.reset();
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <details
        @toggle="${this.handleDetailsToggle}"
        class="details-filter"
        part="details-filter"
        open=${this.filterObject.expanded || nothing}
      >
        <summary>
          <span
            class="title"
            style="${!this.filterObject.title && "text-transform: capitalize"}"
          >
            ${this.filterObject.title || this.filterObject.key || "Filter"}
            <button
              id="filter-reset-type"
              class="outline small"
              @click=${() => {
                this._resetFilter();
              }}
            >
              Reset
            </button>
          </span>
        </summary>
        <div class="scroll">
          <slot name="filter"></slot>
        </div>
      </details>
    `;
  }
}
