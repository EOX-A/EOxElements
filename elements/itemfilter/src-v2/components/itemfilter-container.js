import { LitElement, html } from "lit";
import { styleEOX } from "../style.eox";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

export class EOxItemFilterContainer extends LitElement {
  static get properties() {
    return {
      filterProperties: { attribute: false, type: Object },
      inlineMode: { attribute: "inline-mode", type: Boolean },
      unstyled: { type: Boolean },
      inlineContentElement: { state: true, type: Boolean },
      filters: { state: true, type: Object },
    };
  }

  constructor() {
    super();
    this.filterProperties = {};
    this.unstyled = false;
    this.inlineMode = false;
    this.inlineContentElement = false;
    this.showDropdown = false;
    this.filters = {};
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.inlineMode) {
      document.addEventListener("click", this.handleClickOutside);
      document.addEventListener("focusout", this.handleClickOutside);
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }

  disconnectedCallback() {
    if (this.inlineMode) {
      document.removeEventListener("click", this.handleClickOutside);
      document.removeEventListener("focusout", this.handleClickOutside);
      document.removeEventListener("keydown", this.handleKeyDown);
    }
    super.disconnectedCallback();
  }

  handleClickOutside(event) {
    if (
      this.inlineMode &&
      event.target.tagName !== "DROPDOWN-FORM" &&
      this.showDropdown
    ) {
      this.showDropdown = false;
      this.requestUpdate();
    }
  }

  handleKeyDown(event) {
    if (this.inlineMode && event.key === "Escape" && this.showDropdown) {
      this.showDropdown = false;
      this.requestUpdate();
    }
  }

  toggleDropdown(event) {
    if (this.inlineMode) {
      event.stopPropagation();
      this.showDropdown = true;
      this.requestUpdate();
    }
  }

  showDropdownOnFocus() {
    if (this.inlineMode) {
      this.showDropdown = true;
      this.requestUpdate();
    }
  }

  handleFormClick(event) {
    if (this.inlineMode) event.stopPropagation();
  }

  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX} .inline-content {
          display: ${this.showDropdown ? "block" : "none"};
        }
      </style>
      ${this.inlineMode
        ? html`
            <div class="inline-container-wrapper">
              <div class="inline-container" part="container">
                <div>
                  <span class="chip-container">
                    ${map(
                      Object.keys(this.filters),
                      (filter) => html`
                        ${when(
                          this.filters[filter].dirty,
                          () => html`
                            <span class="chip">
                              <span class="chip-title"
                                >${filter}:
                                ${this.filters[filter].stringifiedState}
                              </span>
                              <span class="chip-close">✕</span>
                            </span>
                          `
                        )}
                      `
                    )}
                  </span>
                </div>
                <div class="input-container">
                  <input
                    type="text"
                    @click="${this.toggleDropdown}"
                    @keydown="${this.toggleDropdown}"
                    @focus="${this.showDropdownOnFocus}"
                    placeholder="Click to open form"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                class="inline-content ${this.showDropdown ? "" : "hidden"}"
                slot="content"
                @keydown="${this.handleKeyDown}"
                @click="${this.handleFormClick}"
                @focus="${this.handleFormClick}"
              >
                <slot name="section"></slot>
              </div>
            </div>
          `
        : html`<slot name="section"></slot>`}
    `;
  }
}

customElements.define("eox-itemfilter-container", EOxItemFilterContainer);
