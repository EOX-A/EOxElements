import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { resetFilter } from "../reset";
import "../autocomplete";
import "../selectionlist";

@customElement("eox-itemfilter-select")
export class EOxItemFilterSelect extends LitElement {
  @property()
  filterObject: SelectFilterObject;

  @property({ type: Boolean })
  inline = false;

  @property({ type: Boolean })
  unstyled = false;

  public reset() {
    this.renderRoot
      .querySelectorAll("input[type='radio']")
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

  _getItems(): Item[] {
    return Object.keys(this.filterObject.state)
      .sort((a, b) => {
        if ("sort" in this.filterObject) {
          return this.filterObject.sort(a, b);
        } else {
          return a.localeCompare(b);
        }
      })
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

  _handleSelected(evt: CustomEvent) {
    Object.keys(this.filterObject.state).forEach((k) => {
      this.filterObject.state[k] = (<FilterObject[]>evt.detail)
        .map((i) => i.id)
        .includes(k);
    });
    this.filterObject.stringifiedState = Object.keys(
      this.filterObject.state
    ).filter((k) => this.filterObject.state[k])[0];
    if (this.filterObject.stringifiedState?.length > 0) {
      this.filterObject.dirty = true;
    }
    this.dispatchEvent(new CustomEvent("filter"));
  }

  render() {
    return when(
      this.filterObject,
      () => html`
        ${when(
          this.inline || Object.keys(this.filterObject.state).length > 1,
          () => html`
            <eox-autocomplete
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${(evt: CustomEvent) => this._handleSelected(evt)}
            >
            </eox-autocomplete>
          `,
          () => html`
            <eox-selectionlist
              .items=${this._getItems()}
              .selectedItems=${this._getSelectedItems()}
              .unstyled=${this.unstyled}
              @items-selected=${(evt: CustomEvent) => this._handleSelected(evt)}
            ></eox-selectionlist>
          `
        )}
      `
    );
  }
}
