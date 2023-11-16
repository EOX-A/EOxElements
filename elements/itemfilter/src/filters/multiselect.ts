import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { resetFilter } from "../reset";
import "../autocomplete";
import "../selectionlist";

@customElement("eox-itemfilter-multiselect")
export class EOxItemFilterMultiselect extends LitElement {
  @property()
  filterObject: FilterObject;

  @property({ type: Boolean })
  inline = false;

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
    resetFilter(this.filterObject);
    this.requestUpdate();
  }

  // skip shadow root creation
  createRenderRoot() {
    return this;
  }

  _getItems(): FilterObject[] {
    return Object.keys(this.filterObject.state)
      .sort((a, b) => a.localeCompare(b))
      .map((i) => ({
        id: i,
        title: i.replace(/^./, i[0].toUpperCase()),
      }));
  }

  _getSelectedItems(): FilterObject[] {
    return Object.keys(this.filterObject.state)
      .filter((i) => this.filterObject.state[i])
      .map((i) => ({
        id: i,
        title: i.replace(/^./, i[0].toUpperCase()),
      }));
  }

  _handleSelected(selectedItems: FilterObject[]) {
    Object.keys(this.filterObject.state).forEach((k) => {
      this.filterObject.state[k] = selectedItems.map((i) => i.id).includes(k);
    });
    this.filterObject.stringifiedState = Object.keys(this.filterObject.state)
      .filter((k) => this.filterObject.state[k])
      .join(", ");
    this.filterObject.dirty = true;
    this.dispatchEvent(new CustomEvent("filter"));
  }

  render() {
    return when(
      this.filterObject,
      () => html`
        ${when(
          this.inline || Object.keys(this.filterObject.state).length > 10,
          () => html`
            <eox-autocomplete
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${(evt: CustomEvent) =>
                this._handleSelected(<FilterObject[]>evt.detail)}
            >
            </eox-autocomplete>
          `,
          () => html`
            <eox-selectionlist
              multiple
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${(evt: CustomEvent) =>
                this._handleSelected(evt.detail)}
            ></eox-selectionlist>
          `
        )}
      `
    );
  }
}
