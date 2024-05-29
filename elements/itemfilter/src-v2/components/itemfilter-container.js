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
  }

  firstUpdated() {
    if (this.inlineMode) {
      this.inputElement = this.shadowRoot.querySelector("#inline-input");
      this.inlineContentElement =
        this.shadowRoot.querySelector(".inline-content");

      this.inputElement.addEventListener("focus", () => {
        this.inlineContentVisible = true;
        this.requestUpdate();
      });

      this.inputElement.addEventListener("blur", () => {
        this.inlineContentVisible = false;
        this.requestUpdate();
      });
    }
  }

  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX} .inline-container {
          position: relative;
          border: 1px solid #00417066;
          border-radius: 4px;
          height: 24px;
          padding: 5px;
          flex: 1;
          justify-content: space-between;
          cursor: text;
          transition: all 0.2s ease-in-out;
          overflow-x: auto;
          display: flex;
        }
        .inline-container:hover {
          border: 1px solid #004170;
        }
        .input-container {
          display: flex;
          flex: 1;
          align-items: center;
        }
        .input-container input,
        .input-container input:focus {
          height: 100%;
          border: none;
          outline: none;
          border: 0;
        }
        .button-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 1px;
          top: 5px;
          height: calc(100% - 10px);
          width: 34px;
          background: white;
        }
        button.icon {
          color: #004170;
          height: 24px;
          font-size: large;
          width: unset;
        }
        .inline-container::-webkit-scrollbar {
          height: 2px;
        }
        .inline-container::-webkit-scrollbar-thumb {
          background: lightgrey;
          border-radius: 2px;
        }
        .hidden {
          height: 0;
          padding: 0;
          border: none;
        }
        .hidden:hover {
          border: none;
        }
        .chip.highlighted {
          background: lightgrey;
        }
        .chip-title {
          pointer-events: none;
        }
        .chip-container {
          display: flex;
          flex: 0;
        }
        .chip {
          display: flex;
          align-items: center;
          background: #00417022;
          border-radius: 4px;
          margin-right: 4px;
          padding: 5px 10px;
          font-size: small;
          cursor: default;
          white-space: nowrap;
        }
        .chip.highlighted {
          background: #004170;
          color: white;
        }
        .chip-close {
          cursor: pointer;
          margin-left: 4px;
        }
        .inline-content {
          display: ${this.inlineContentVisible ? "block" : "none"};
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
