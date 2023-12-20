import { LitElement, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";

@customElement("eox-selectionlist")
export class EOxSelectionlist extends LitElement {
  @property()
  filter = "";

  @property()
  idProperty: string = "id";

  @property()
  items: FilterObject[] = [];

  @property()
  titleProperty = "title";

  @property({ type: Boolean })
  multiple = false;

  @property()
  selectedItems: FilterObject[] = [];

  @property({ type: Boolean })
  unstyled = false;

  @property({ type: Boolean })
  noShadow = false;

  @state()
  _currentHighlight: FilterObject = null;

  _handleKeyboard(key: string) {
    if (this.clientHeight === 0) {
      return;
    }
    const currentlyHighlighted = this.renderRoot.querySelector(
      "li.highlighted"
    ) as HTMLLIElement;
    if (key === "Escape") {
      if (this._currentHighlight) {
        this._currentHighlight = null;
      }
      return;
    }
    if (key === "Enter") {
      if (currentlyHighlighted) {
        const currentItem = this.items.find(
          (f) =>
            f[<keyof FilterObject>this.idProperty] ===
            currentlyHighlighted.dataset.identifier
        ) as FilterObject;
        this._handleSelect(currentItem);
        this.requestUpdate();
      }
      return;
    }
    const listItems = this.renderRoot.querySelectorAll("li");
    let currentIndex = -1;
    if (currentlyHighlighted) {
      delete (<HTMLElement>currentlyHighlighted).dataset.highlighted;
      currentIndex = Array.from(listItems).indexOf(currentlyHighlighted);
    }
    if (key === "ArrowDown") {
      currentIndex++;
      if (currentIndex > listItems.length - 1) {
        currentIndex = 0;
      }
    }
    if (key === "ArrowUp") {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = listItems.length - 1;
      }
    }
    const currentListItem = Array.from(listItems)[currentIndex];
    if (currentListItem) {
      this._currentHighlight = this.items.find(
        (f) =>
          f[<keyof FilterObject>this.idProperty] ===
          currentListItem.dataset.identifier
      );
    }
    this.dispatchEvent(
      new CustomEvent("items-highlighted", { detail: [this._currentHighlight] })
    );
  }

  _handleSelect(item: FilterObject) {
    if (item) {
      if (this.multiple) {
        // In multiple mode, selecting the same item again removes it from the selectedItem list
        const selected = this.selectedItems.find(
          (i) =>
            i[<keyof FilterObject>this.idProperty] ===
            item[<keyof FilterObject>this.idProperty]
        );
        if (selected) {
          this.selectedItems.splice(this.selectedItems.indexOf(selected), 1);
        } else {
          this.selectedItems.push(item);
        }
      } else {
        this.selectedItems = [item];
      }
    } else {
      this.selectedItems = [];
      this._currentHighlight = null;
    }
    this._dispatchEvent();
  }

  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("items-selected", { detail: this.selectedItems })
    );
  }

  _keyboardEventListener = ((event: KeyboardEvent) => {
    if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(event.code)) {
      this._handleKeyboard(event.code);
    }
  }) as EventListener;

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.getRootNode().removeEventListener(
      "keydown",
      this._keyboardEventListener
    );
  }

  firstUpdated() {
    this.getRootNode().addEventListener("keydown", this._keyboardEventListener);
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("filter")) {
      if (this.filter.length > 0) {
        setTimeout(() => {
          const firstItem = this.renderRoot.querySelectorAll("li")[0];
          if (firstItem) {
            this._currentHighlight = this.items.find(
              (f) =>
                f[<keyof FilterObject>this.idProperty] ===
                firstItem.dataset.identifier
            );
          }
        });
      } else {
        this._currentHighlight = null;
      }
    }
  }

  protected createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    return html`
      <style>
        ${style}
        :host {
          height: auto;
        }
        ul {
          width: 100%;
        }
        li.highlighted {
          background: lightgrey;
        }
        ${!this.unstyled && styleEOX}
      </style>
      <ul>
        ${repeat(
          this.items.filter((item) =>
            this.filter
              ? (<string>item[<keyof FilterObject>this.titleProperty])
                  .toLowerCase()
                  .includes(this.filter.toLowerCase())
              : true
          ),
          (item) => item[<keyof FilterObject>this.idProperty],
          (item) => html`
            <li
              class=${this._currentHighlight === item
                ? "highlighted"
                : (nothing as undefined)}
              data-identifier=${item[
                <keyof FilterObject>this.idProperty
              ] as string}
              data-title=${item[
                <keyof FilterObject>this.titleProperty
              ] as string}
              @mouseenter=${() => {
                this._currentHighlight = item;
              }}
              @mouseleave=${() => {
                this._currentHighlight = null;
              }}
            >
              <label>
                <input
                  type="${this.multiple ? "checkbox" : "radio"}"
                  .checked=${!!this.selectedItems.find(
                    (i) =>
                      i[<keyof FilterObject>this.idProperty] ===
                      item[<keyof FilterObject>this.idProperty]
                  ) || (nothing as null)}
                  @change=${() => this._handleSelect(item)}
                />
                <span class="title"
                  >${item[<keyof FilterObject>this.titleProperty]}</span
                >
              </label>
            </li>
          `
        )}
      </ul>
    `;
  }
}
