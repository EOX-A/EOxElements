import { LitElement, html } from "lit";
import { styleEOX } from "../style.eox";

export class EOxItemFilterContainer extends LitElement {
  static get properties() {
    return {
      filterProperties: { attribute: false, type: Object },
      inlineMode: { attribute: "inline-mode", type: Boolean },
      unstyled: { type: Boolean },
      inlineContentElement: { state: true, type: Boolean },
    };
  }

  constructor() {
    super();
    this.filterProperties = {};
    this.unstyled = false;
    this.inlineMode = false;
    this.inlineContentElement = false;
    this.showDropdown = false;
  }

  _onFocus() {
    this.showDropdown = true;
    this.requestUpdate();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleOutsideClick.bind(this));
  }

  _handleOutsideClick(event) {
    if (!this.shadowRoot.contains(event.target)) {
      this.showDropdown = false;
      this.requestUpdate();
    }
  }

  firstUpdated() {
    if (this.inlineMode) {
      document.addEventListener("click", this._handleOutsideClick.bind(this));

      // [".inline-container-wrapper", ".inline-content"].forEach((selector) => {
      //   this.inputElement = this.shadowRoot.querySelector(selector);
      //   this.inlineContentElement =
      //     this.shadowRoot.querySelector(".inline-content");
      //
      //   console.log(this.inputElement)
      //
      //   this.inputElement.addEventListener("focusin", () => {
      //     setTimeout(() => {
      //       console.log("entry")
      //       this.inlineContentVisible = true;
      //       this.requestUpdate();
      //     }, 5);
      //   });
      //
      //   this.inputElement.addEventListener("focusout", (event) => {
      //     console.log(event.relatedTarget)
      //     setTimeout(() => {
      //       if (!this.inputElement.contains(event.relatedTarget)) {
      //         this.inlineContentVisible = false;
      //         this.requestUpdate();
      //       }
      //     }, 0);
      //   });
      // })
    }
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
                    <span class="chip">
                      <span class="chip-title">Theme</span>
                      <span class="chip-close">✕</span>
                    </span>
                  </span>
                </div>
                <div class="input-container">
                  <input
                    @focus=${this._onFocus}
                    id="inline-input"
                    slot="trigger"
                    type="text"
                    placeholder="Type something..."
                  />
                </div>
              </div>

              <div class="inline-content" slot="content">
                <slot name="section"></slot>
              </div>
            </div>
          `
        : html`<slot name="section"></slot>`}
    `;
  }
}

customElements.define("eox-itemfilter-container", EOxItemFilterContainer);
