import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";

@customElement("eox-itemfilter-autocomplete")
export class EOxItemFilterAutocomplete extends LitElement {
  @property()
  items: Object;

  @property({ type: Boolean })
  unstyled: boolean;

  @state()
  showDropdown = false;

  @state()
  highlightedRowIndex = 0;

  render() {
    return html`
      <style>
        ${style}
        input {
          width: 100%;
        }
        ${!this.unstyled && styleEOX}
      </style>
      <input
        class="autocomplete-input"
        type="text"
        placeholder="Type something..."
        @focus=${() => (this.showDropdown = true)}
        @input=${(evt) => {
          this.value = evt.target.value;
        }}
      />
      <div class="chip-container">
        ${repeat(
          Object.entries(this.items).filter(([key, value]) => value),
          ([key, value]) => key,
          ([key, value]) => html`
            <div class="chip">
              ${key === "undefined" ? "free text" : key}:
              ${key === "undefined"
                ? Object.values(value).filter((v) => !!v)[0]
                : typeof value === "object"
                ? Object.values(value).some((k) => k === true)
                  ? Object.keys(value)
                      .filter((k) => !!value[k])
                      .join(", ")
                  : "✓"
                : value}
              <span
                class="autocomplete-clear"
                @click=${() => {
                  this.dispatchEvent(
                    new CustomEvent("deleteChip", { detail: { key } })
                  );
                  this.requestUpdate();
                }}
              >
                ✕
              </span>
            </div>
          `
        )}
      </div>
      ${when(
        this.showDropdown,
        () => html`
          <div class="dropdown">
            <slot name="dropdown"></slot>
          </div>
        `
      )}
    `;
  }

  firstUpdated() {
    document.addEventListener("keydown", (evt) => {
      // enter
      if (evt.keyCode === 13) {
        this.showDropdown = false;
      }
      //TODO down and up
    });
  }
}
