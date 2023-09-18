import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { when } from "lit/directives/when.js";
import "../autocomplete";

@customElement("eox-itemfilter-multiselect")
export class EOxItemFilterMultiselect extends LitElement {
  @property()
  filterObject: FilterObject;

  private _inputFilter = "";

  public reset() {
    this.renderRoot
      .querySelectorAll("input[type='checkbox']")
      .forEach((f: Element) => {
        if (f instanceof HTMLInputElement) {
          f.checked = false;
        }
      });
    for (const filter in this.filterObject.state) {
      this.filterObject.state[filter] = false;
    }
    delete this.filterObject.dirty;
    this.requestUpdate();
  }

  // skip shadow root creation
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      ${when(
        Object.keys(this.filterObject.state).length > 10,
        () => html`
          <eox-itemfilter-autocomplete
            .items=${this.filterObject.state}
            @deleteChip=${(evt) => {
              this.filterObject.state[evt.detail.key] = undefined;
              this.requestUpdate();
              this.dispatchEvent(new CustomEvent("filter"));
            }}
            @input=${(evt) => {
              this._inputFilter = evt.target.value;
              this.requestUpdate();
            }}
          >
          </eox-itemfilter-autocomplete>
        `
      )}
      <ul>
        ${repeat(
          Object.keys(this.filterObject.state)
            .sort((a, b) => a.localeCompare(b))
            .filter((item) => item.includes(this._inputFilter)),
          (key) => key + this.filterObject.state[key],
          (key) => html`
            <li class=${this.filterObject.state[key] ? "highlighted" : nothing}>
              <label>
                <input
                  data-cy="multiselect-checkbox"
                  name="selection"
                  type="checkbox"
                  class="multiselect-checkbox"
                  id=${key}
                  checked="${this.filterObject.state[key] || nothing}"
                  @click=${() => {
                    this.filterObject.state[key] =
                      !this.filterObject.state[key];
                    this.filterObject.dirty = true;
                    this.dispatchEvent(new CustomEvent("filter"));
                    this.requestUpdate();
                    this.renderRoot
                      .querySelector("eox-itemfilter-autocomplete")
                      ?.requestUpdate();
                  }}
                />
                <span class="title">${key}</span>
              </label>
            </li>
          `
        )}
      </ul>
    `;
  }
}
