import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import "./filters/multiselect";
import "./filters/range";
import "./filters/select";
import "./filters/spatial";
import "./filters/text";
import { style } from "./style";
import { styleEOX } from "./style.eox";

@customElement("eox-itemfilter-inline")
export class EOxItemFilterInline extends LitElement {
  @property()
  filters: Object;

  @property({ type: Boolean })
  unstyled: boolean;

  @state()
  inProgress: Object;

  @state()
  inputFilter = "";

  @state()
  highlightedRowIndex = 0;

  render() {
    console.log(this.inProgress);
    return html`
      <style>
        ${style}
        eox-itemfilter-autocomplete {
          display: flex;
          flex-direction: column;
        }
        ${!this.unstyled && styleEOX}
      </style>
      <eox-itemfilter-autocomplete
        .items=${Object.values(this.filters)?.reduce((acc, curr) => {
          if ((curr.key || curr.keys) && curr.dirty) {
            acc[curr.key] = curr.state;
          }
          if (curr === this.inProgress) {
            acc[curr.key] = "...";
          }
          return acc;
        }, {})}
        .unstyled=${this.unstyled}
        @input=${(evt) => (this.inputFilter = evt.target.value.toLowerCase())}
        @deleteChip=${(evt) => {
          console.log(this.filters);
          this.filters[evt.detail.key].dirty = false;
          Object.keys(this.filters[evt.detail.key].state).forEach((key) => {
            this.filters[evt.detail.key].state[key] = undefined;
          });
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent("filter"));
        }}
      >
        <div slot="dropdown" class="inline-dropdown">
          <ul style="display: ${this.inProgress ? "none" : "block"}">
            ${map(
              Object.entries(this.filters).filter(
                ([key, value]) =>
                  value.title?.toLowerCase().includes(this.inputFilter) ||
                  value.key?.toLowerCase().includes(this.inputFilter)
              ),
              ([key, value], index) => html`
                <li
                  class=${this.highlightedRowIndex === index
                    ? "highlighted"
                    : nothing}
                  @click=${() => {
                    this.inProgress = value;
                  }}
                >
                  ${value.title || value.key}
                </li>
              `
            )}
          </ul>
          ${map(
            Object.entries(this.filters),
            ([key, value]) => staticHTML`
              <eox-itemfilter-${unsafeStatic(value.type)}
                .filterObject=${value}
                data-type="filter"
                style="display: ${this.inProgress === value ? "block" : "none"}"
                @filter=${() => {
                  // this.inProgress = null;
                  this.dispatchEvent(new CustomEvent("filter"));
                }}
              >
              </eox-itemfilter-${unsafeStatic(value.type)}>
            `
          )}
        </div>
      </eox-itemfilter-autocomplete>
      <span
        class="inline-clear"
        @click=${() => {
          this.renderRoot
            .querySelectorAll("[data-type='filter']")
            .forEach((f) => {
              (<Filter>f).reset();
            });
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent("reset"));
        }}
      >
        ✕
      </span>
    `;
  }

  firstUpdated() {
    document.addEventListener("keydown", (evt) => {
      // enter
      if (evt.keyCode === 13) {
        this.renderRoot.querySelector(".highlighted").click();
        this.inProgress = null;
      }
      // down
      if (evt.keyCode === 40) {
        this.highlightedRowIndex++;
      }
      // up
      if (evt.keyCode === 38) {
        this.highlightedRowIndex--;
      }
    });
  }
}
