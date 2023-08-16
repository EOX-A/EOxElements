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

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <details
        class="details-filter"
        part="details-filter"
        data-filter="${this.filterObject.key}"
        open=${this.filterObject.expanded || nothing}
      >
        <summary>
          <span
            class="title"
            style="${!this.filterObject.title && "text-transform: capitalize"}"
          >
            ${this.filterObject.title || this.filterObject.key || "Filter"}
          </span>
        </summary>
        <div class="scroll">
          <slot name="filter"></slot>
        </div>
      </details>
    `;
  }
}
