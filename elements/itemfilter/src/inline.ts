import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import { when } from "lit/directives/when.js";
import { resetFilter } from "./reset";
import "./filters/multiselect";
import "./filters/range";
import "./filters/select";
import "./filters/spatial";
import "./filters/text";
import "./chips";
import "./selectionlist";
import { button } from "../../../utils/styles/button";

@customElement("eox-itemfilter-inline")
export class EOxItemFilterInline extends LitElement {
  @property()
  idProperty = "id";

  @property()
  items = [];

  @property()
  titleProperty = "title";

  @property()
  unstyled = false;

  @state()
  inputText = "";

  @state()
  replaceInput = null;

  _handleKeyboard(key: string) {
    if (this.clientHeight === 0) {
      return;
    }
    // if (key === "Enter") {
    //   if (this.replaceInput) {
    //     const foundInput = this.renderRoot.querySelector("[data-filter]").renderRoot.querySelector("input")
    //     if (foundInput) {
    //       const ev = document.createEvent('Event');
    //       ev.initEvent('keypress');
    //       ev.which = ev.keyCode = 13;
    //       foundInput.dispatchEvent(ev);
    //     }
    //   }
    // }

    const inProgressItem = this.items.find((i) => i._inProgress);
    const textInProgress =
      inProgressItem.type === "text" && inProgressItem.dirty;
    if (
      ["Escape", "Space"].includes(key) ||
      (key == "Enter" && textInProgress)
    ) {
      if (inProgressItem) {
        delete inProgressItem._inProgress;
        this.requestUpdate();
        this.inputText = "";
        this.renderRoot.querySelector("input").value = "";
        this.renderRoot.querySelector("input").focus();
      }
      this.renderRoot
        .querySelector("[slot=content]")
        .classList.remove("hidden");
      return;
    }
  }

  _handleReset(items) {
    items.forEach((item) => {
      resetFilter(item);
      delete item._inProgress;
      delete item.stringifiedState;
    });
    this.renderRoot.querySelector("[slot=content]").classList.remove("hidden");
    this.requestUpdate();
    this.dispatchEvent(new CustomEvent("filter"));
  }

  _clickOutsideListener = null;

  connectedCallback() {
    super.connectedCallback();
    this._keyboardEventListener = this.getRootNode().addEventListener(
      "keydown",
      (event) => {
        if (["Enter", "Escape", "Space"].includes(event.code)) {
          this._handleKeyboard(event.code);
        }
      }
    );
    this._clickOutsideListener = window.addEventListener("click", () => {
      this.items.forEach((item) => {
        delete item._inProgress;
        // this.selectedItems = this.items.filter(i => i.dirty)
        // this.renderRoot.querySelector("eox-autocomplete").querySelector("eox-selectionlist").requestUpdate();
      });
      this.requestUpdate();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.getRootNode().removeEventListener(
      "keydown",
      this._keyboardEventListener
    );
    window.removeEventListener("click", this._clickOutsideListener);
  }

  render() {
    return html`
      <style>
        :host,
        .container {
          display: flex;
        }
        ${!this.unstyled
          ? html`
              ${button} :host { position: relative; } .container { width: 100%;
              position: relative; border: 1px solid #00417066; border-radius:
              4px; height: 24px; padding: 5px; flex: 1; justify-content:
              space-between; cursor: text; transition: all 0.2s ease-in-out;
              overflow-x: auto; } .container:hover { border: 1px solid #004170;
              } .input-container { display: flex; flex: 1; align-items: center;
              } input, input:focus { height: 100%; border: none; outline: none;
              } .button-container { display: flex; align-items: center;
              justify-content: center; position: absolute; right: 1px; top: 5px;
              height: calc(100% - 10px); width: 34px; background: white; }
              button.icon { color: #004170; height: 24px; font-size: large;
              width: unset; } .container::-webkit-scrollbar { height: 2px; }
              .container::-webkit-scrollbar-thumb { background: lightgrey;
              border-radius: 2px; } .hidden {height: 0; padding: 0; border:
              none;} .hidden:hover {border: none}
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
          ))?.focus();
        }}
      >
        <eox-itemfilter-chips
          .items=${this.items.filter(
            (i) => i._inProgress || i.stringifiedState
          )}
          .titleProperty=${this.titleProperty}
          .unstyled=${this.unstyled}
          @items-selected=${(evt) => {
            this.items.forEach((item) => {
              if (!evt.detail.find((i) => i.id === item.id)) {
                this._handleReset([item]);
              }
            });
          }}
          @click=${(evt: Event) => {
            evt.stopPropagation();
          }}
        ></eox-itemfilter-chips>
        <div class="input-container">
          <eox-dropdown .parent=${this} .unstyled=${this.unstyled}>
            <input
              id="inline-input"
              slot="trigger"
              type="text"
              placeholder="Type something..."
              @focus=${() => {
                this.inputText = "";
                this.requestUpdate();
              }}
              @input=${(event: Event) => {
                this.inputText = (event!
                  .target as HTMLInputElement)!.value.toLowerCase();
                if (this.replaceInput) {
                  const foundInput =
                    this.renderRoot
                      .querySelector("[data-filter]")
                      .renderRoot.querySelector("input") ||
                    this.renderRoot
                      .querySelector("[data-filter]")
                      .renderRoot.querySelector("eox-autocomplete")
                      .renderRoot.querySelector("input");
                  if (foundInput) {
                    foundInput.value = this.inputText;
                    foundInput.dispatchEvent(new Event("input"));
                  }
                }
              }}
            />
            <div slot="content">
              ${when(
                !this.items.find((i) => i._inProgress),
                () => html`
                  <eox-selectionlist
                    .filter=${this.inputText}
                    .idProperty=${this.idProperty}
                    .titleProperty=${this.titleProperty}
                    .items=${this.items.filter((f) => !f.stringifiedState)}
                    .multiple=${false}
                    .selectedItems=${this.items.filter(
                      (i) => i.stringifiedState
                    )}
                    .unstyled=${this.unstyled}
                    @click=${(evt: Event) => {
                      evt.stopPropagation();
                    }}
                    @items-highlighted=${(event: CustomEvent) => {
                      // this._handleHighlight(event.detail);
                    }}
                    @items-selected=${(evt: CustomEvent) => {
                      // this._handleSelect(event.detail);
                      const items = evt.detail;
                      if (items.length > 0) {
                        items[items.length - 1]._inProgress = true;
                        this.renderRoot.querySelector(
                          "input[slot=trigger]"
                        ).value = "";
                        this.inputText = "";
                        this.requestUpdate();
                      }

                      const inProgressItem = this.items.find(
                        (i) => i._inProgress
                      );
                      if (
                        (inProgressItem && inProgressItem.type === "text") ||
                        inProgressItem.type === "multiselect" ||
                        inProgressItem.type === "select"
                      ) {
                        this.replaceInput = true;
                      }

                      if (this.replaceInput) {
                        setTimeout(() => {
                          if (inProgressItem.type === "text") {
                            // const found = this.renderRoot
                            //     .querySelector("[data-filter]")
                            //     .renderRoot.querySelector("input");
                            // found.classList.add("hidden")
                            this.renderRoot
                              .querySelector("[slot=content]")
                              .classList.add("hidden");
                          } else if (
                            inProgressItem.type === "multiselect" ||
                            inProgressItem.type === "select"
                          ) {
                            const found = this.renderRoot
                              .querySelector("[data-filter]")
                              .renderRoot.querySelector("eox-autocomplete");
                            found.renderRoot.querySelector(
                              "eox-dropdown"
                            ).open = true;
                            found.renderRoot
                              .querySelector(".container")
                              .classList.add("hidden");
                          }
                          // else {
                          //   // if (this.renderRoot
                          //   //   .querySelector("[slot=content]").classList.contains("hidden)) {
                          //       // this.renderRoot
                          //       //   .querySelector("[slot=content]").classList.remove("hidden")
                          //     // } else {

                          //     // }
                          //   // this.renderRoot
                          //   //   .querySelector("[data-filter]")
                          //   //   .renderRoot.querySelector("eox-autocomplete").renderRoot
                          //   // .querySelector(".container")
                          //   // .classList.remove("hidden");
                          // }
                        });
                        this.renderRoot.querySelector("input").select();
                        this.renderRoot.querySelector("input").focus();
                      }
                    }}
                  >
                  </eox-selectionlist>
                `
              )}
              ${when(
                this.items.find((i) => i._inProgress),
                () => staticHTML`
            <eox-itemfilter-${unsafeStatic(
              this.items.find((i) => i._inProgress).type
            )}
              data-filter=${this.items.find((i) => i._inProgress).id}
              slot="dropdown"
              .filterObject=${this.items.find((i) => i._inProgress)}
              .unstyled=${this.unstyled}
              .inline=${true}
              @filter=${(evt) => {
                this.dispatchEvent(new CustomEvent("filter"));
                // const item = this.items.find((i) => i._inProgress);
                // if (!item.isDirty) { return }
                // item._inProgress = false;
                // item._complete = true;
                // // console.log(this.items);
                // // console.log('filter')
                // setTimeout(() => {
                //   item._combinedTitle = `${item[this.titleProperty]}: ${
                //     item.stringifiedState
                //   }`;
                // });
                // setTimeout(() => {
                // this.renderRoot.querySelector("eox-autocomplete").requestUpdate();
                // })
              }}
              @click=${(evt: Event) => {
                evt.stopPropagation();
              }}
            ></eox-itemfilter-${unsafeStatic(
              this.items.find((i) => i._inProgress).type
            )}>
  `
              )}
            </div>
          </eox-dropdown>
        </div>
      </div>
      ${when(
        this.items.filter((i) => i.stringifiedState || i._inProgress).length >
          0,
        () => html`
          <div class="button-container">
            <button
              class="icon"
              @click=${() => {
                this._handleReset(
                  this.items.filter((i) => i.stringifiedState || i._inProgress)
                );
              }}
            >
              ✕
            </button>
          </div>
        `
      )}
    `;
  }
}
