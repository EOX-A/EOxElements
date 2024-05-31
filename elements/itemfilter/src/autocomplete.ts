import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import "./dropdown";
import "./chips";
import { button } from "../../../utils/styles/button";
import { EOxDropdown } from "./dropdown";
import { EOxItemFilterMultiselect } from "./filters/multiselect";
import { EOxSelectionlist } from "./selectionlist";
import { EOxItemFilterChips } from "./chips";

@customElement("eox-autocomplete")
export class EOxAutocomplete extends LitElement {
  @property()
  idProperty = "id";

  @property()
  items: FilterObject[] = [];

  @property()
  titleProperty = "title";

  @property()
  itemTitleProperty = this.titleProperty;

  @property({ type: Boolean })
  multiple = false;

  @property({ type: Boolean })
  unstyled = false;

  @property({ type: Boolean })
  multiStep = false;

  @state()
  public inputText = "";

  @state()
  selectedItems: FilterObject[] = [];

  _handleKeyboard(key: string) {
    if (this.clientHeight === 0) {
      return;
    }
    if (key === "Escape") {
      // If nothing is selected yet, first clear the input,
      // then on second escape blur the input
      if (this.selectedItems.length < 1 || this.multiple) {
        if (this.renderRoot.querySelector("input").value !== "") {
          this.renderRoot.querySelector("input").value = "";
        } else {
          (<EOxDropdown>this.renderRoot.querySelector("eox-dropdown")).open =
            false;
        }
        return;
      }
      if (!this.multiple) {
        // In single-select mode, check if the currently displayed text matches
        // the selected item or not. Useful if the user "browses" the list but
        // wants to abort; resets input to the currently selected item
        if (
          this.renderRoot.querySelector("input").value !==
          this.selectedItems[0][<keyof FilterObject>this.titleProperty]
        ) {
          this.renderRoot.querySelector("input").value = this.selectedItems[0][
            <keyof FilterObject>this.titleProperty
          ] as string;
        } else {
          (<EOxDropdown>this.renderRoot.querySelector("eox-dropdown")).open =
            false;
        }
      }
      return;
    }

    if (key === "ArrowDown" || key === "ArrowUp") {
      (<EOxDropdown>this.renderRoot.querySelector("eox-dropdown")).open = true;
      if ((<EOxItemFilterMultiselect | undefined>this.parentElement)?.inline) {
        (<EOxSelectionlist>(
          this.renderRoot.querySelector("eox-selectionlist")
        ))._handleKeyboard(key);
      }
    }

    this.renderRoot.querySelector("input").select();
    if ((<EOxItemFilterMultiselect | undefined>this.parentElement)?.inline) {
      if (!["ArrowUp", "ArrowDown"].includes(key)) {
        (<HTMLInputElement>(
          this.parentElement.parentElement?.parentElement?.querySelector(
            "#inline-input",
          )
        )).focus();
      }
    }
  }

  _handleHighlight(items: FilterObject[]) {
    if (!items[0]._inProgress) {
      this.renderRoot.querySelector("input").value =
        <string>items[0][<keyof FilterObject>this.titleProperty] || "";
      this.renderRoot.querySelector("input").select();
    }
  }

  _handleSelect(items: FilterObject[]) {
    // TODO
    if (items.length > 0 && this.multiStep) {
      items.forEach((i) => {
        if (!this.selectedItems.includes(i)) {
          i._inProgress = true;
        }
      });
    }
    this.selectedItems = items;
    if (items.length > 0) {
      if (this.multiple) {
        this.renderRoot.querySelector("input").value = "";
        this.renderRoot.querySelector("input").focus();
      } else {
        this.renderRoot.querySelector("input").value = items[0][
          <keyof FilterObject>this.titleProperty
        ] as string;

        // in multi-step items, when the item is still in progress,
        // keep the dropdown open
        if (!items[0]._inProgress) {
          (<EOxDropdown>this.renderRoot.querySelector("eox-dropdown")).open =
            false;
        }
      }
    } else {
      this.renderRoot.querySelector("input").select();
      this.renderRoot.querySelector("input").focus();
    }
    this._dispatchEvent();
    this.requestUpdate();
    (<EOxItemFilterChips>(
      this.renderRoot.querySelector("eox-itemfilter-chips")
    ))?.requestUpdate();
  }

  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("items-selected", {
        detail: this.selectedItems,
      }),
    );
  }

  _keyboardEventListener = ((event: KeyboardEvent) => {
    const { code } = <KeyboardEvent>event;
    if (
      [
        "ArrowUp",
        "ArrowDown",
        // "ArrowLeft",
        // "ArrowRight",
        "Escape",
        "Backspace",
      ].includes(code)
    ) {
      this._handleKeyboard(code);
    }
  }) as EventListener;

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.getRootNode().removeEventListener(
      "keydown",
      this._keyboardEventListener,
    );
  }

  firstUpdated() {
    this.getRootNode().addEventListener("keydown", this._keyboardEventListener);
    // }
  }

  updated(updatedProperties: Map<PropertyKey, unknown>) {
    if (updatedProperties.has("selectedItems")) {
      this._handleSelect(this.selectedItems);
    }
  }

  render() {
    return html`
      <style>
        :host,
        .container {
          display: flex;
        }
        #dropdown {
          display: none;
        }
        ${!this.unstyled
          ? html`
              ${button} :host { position: relative; } .container { width: 100%;
              position: relative; border: 1px solid #00417066; border-radius:
              4px; height: 24px; padding: 5px; flex: 1; justify-content:
              space-between; cursor: text; overflow-x: auto; } .container:hover
              { border: 1px solid #004170; } .input-container { display: flex;
              flex: 1; align-items: center; } input, input:focus { height: 100%;
              border: none; outline: none; } .button-container { display: flex;
              align-items: center; justify-content: center; position: absolute;
              right: 1px; top: 5px; height: calc(100% - 10px); width: 34px;
              background: white; } button.icon { color: #004170; height: 24px;
              font-size: large; width: unset; } .container::-webkit-scrollbar {
              height: 2px; } .container::-webkit-scrollbar-thumb { background:
              lightgrey; border-radius: 2px;} .hidden {height: 1px; padding: 0;
              border: none;} .hidden:hover {border: none} .hidden input {
              opacity: 0% }
            `
          : nothing}
      </style>
      <div
        class="container"
        part="container"
        @click=${(evt: Event) => {
          evt.stopPropagation();
          (<HTMLInputElement>(
            this.renderRoot.querySelector("input[type=text]")
          )).focus();
        }}
      >
        ${when(
          this.multiple,
          () => html`
            <eox-itemfilter-chips
              .items=${this.selectedItems}
              .titleProperty=${this.titleProperty}
              .unstyled=${this.unstyled}
            ></eox-itemfilter-chips>
          `,
        )}
        <div class="input-container">
          <eox-dropdown
            .parent=${this.parentNode.parentNode as Element}
            .unstyled=${this.unstyled}
          >
            <input
              slot="trigger"
              type="text"
              @focus=${() => {
                this.inputText = "";
                this.requestUpdate();
              }}
              @input=${(event: Event) => {
                this.inputText = (event!
                  .target as HTMLInputElement)!.value.toLowerCase();
              }}
            />
            ${when(
              this.items.length > 0,
              () => html`
                <eox-selectionlist
                  slot="content"
                  .filter=${this.inputText}
                  .idProperty=${this.idProperty}
                  .titleProperty=${this.titleProperty}
                  .items=${this.items
                    .filter((f) =>
                      this.multiStep ? !f.stringifiedState : true,
                    )
                    .filter((f) =>
                      this.inputText
                        ? (<string>f[<keyof FilterObject>this.titleProperty])
                            .toLowerCase()
                            .includes(this.inputText.toLowerCase())
                        : true,
                    )}
                  .multiple=${this.multiStep ? true : this.multiple}
                  .disableKeyboardEvents=${this.multiStep}
                  .selectedItems=${this.multiStep
                    ? this.selectedItems.filter((i) => i.stringifiedState)
                    : this.selectedItems}
                  .unstyled=${this.unstyled}
                  @items-highlighted=${(event: CustomEvent) => {
                    this._handleHighlight(event.detail);
                  }}
                  @items-selected=${(event: CustomEvent) => {
                    this._handleSelect(event.detail);
                  }}
                >
                </eox-selectionlist>
              `,
            )}
          </eox-dropdown>
        </div>
      </div>
      ${when(
        this.selectedItems.length > 0,
        () => html`
          <div class="button-container">
            <button
              class="icon"
              @click=${() => {
                this._handleSelect([]);
              }}
            >
              ✕
            </button>
          </div>
        `,
      )}
    `;
  }
}
