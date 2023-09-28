import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import "../autocomplete";
import "../selectionlist";

@customElement("eox-itemfilter-multiselect")
export class EOxItemFilterMultiselect extends LitElement {
  @property()
  filterObject: FilterObject;

  @property({ type: Boolean })
  unstyled = false;

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
          <eox-autocomplete
            multiple
            .items=${Object.keys(this.filterObject.state)
              .sort((a, b) => a.localeCompare(b))
              .map((i) => ({
                id: i,
                title: i.replace(/^./, i[0].toUpperCase()),
              }))}
            .selectedItems=${Object.keys(this.filterObject.state)
              .filter((i) => this.filterObject.state[i])
              .map((i) => ({
                id: i,
                title: i.replace(/^./, i[0].toUpperCase()),
              }))}
            .unstyled=${this.unstyled}
            @items-selected=${(evt: CustomEvent) => {
              Object.keys(this.filterObject.state).forEach((k) => {
                this.filterObject.state[k] = evt.detail
                  .map((i) => i.id)
                  .includes(k);
              });
              this.filterObject.dirty = true;
              this.dispatchEvent(new CustomEvent("filter"));
            }}
          >
          </eox-autocomplete>
        `,
        () => html`
          <eox-selectionlist
            multiple
            .items=${Object.keys(this.filterObject.state)
              .sort((a, b) => a.localeCompare(b))
              .map((i) => ({
                id: i,
                title: i.replace(/^./, i[0].toUpperCase()),
              }))}
            .selectedItems=${Object.keys(this.filterObject.state)
              .filter((i) => this.filterObject.state[i])
              .map((i) => ({
                id: i,
                title: i.replace(/^./, i[0].toUpperCase()),
              }))}
            .unstyled=${this.unstyled}
            @items-selected=${(evt: CustomEvent) => {
              Object.keys(this.filterObject.state).forEach((k) => {
                this.filterObject.state[k] = evt.detail
                  .map((i) => i.id)
                  .includes(k);
              });
              this.filterObject.dirty = true;
              this.dispatchEvent(new CustomEvent("filter"));
            }}
          ></eox-selectionlist>
        `
      )}
    `;
  }
}
