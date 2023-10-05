import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import { when } from "lit/directives/when.js";
import { resetFilter } from "./reset";
import "./filters/multiselect";
import "./filters/range";
import "./filters/select";
import "./filters/spatial";
import "./filters/text";
import "./autocomplete";
import "./selectionlist";

@customElement("eox-itemfilter-inline")
export class EOxItemFilterInline extends LitElement {
  @property()
  items = [];

  @property()
  unstyled = false;

  _clickOutsideListener = null;
  connectedCallback() {
    super.connectedCallback();
    this._clickOutsideListener = window.addEventListener("click", () => {
      this.items.forEach(item => {
        delete item._inProgress;
        // this.selectedItems = this.items.filter(i => i.dirty)
        this.requestUpdate();
        // this.renderRoot.querySelector("eox-autocomplete").querySelector("eox-selectionlist").requestUpdate();
      })
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("click", this._clickOutsideListener)
  }

  render() {
    return html`
      <style>
        :host {
          width: 100%;
        }
      </style>
      <eox-autocomplete
        idProperty="id"
        .multiStep=${true}
        multiple
        .items=${this.items}
        .unstyled=${this.unstyled}
        @click=${(evt: Event) => {
          evt.stopPropagation();
        }}
        @items-selected=${(evt) => {
          // const inProgressItem = evt.detail.find((i) => i._inProgress);
          this.items.forEach((item) => {
            if (
              !evt.detail.find(
                (i) => i.id === item.id
              )
            ) {
              resetFilter(item);
              delete item._inProgress;
              delete item._complete;
            }
          });
          this.dispatchEvent(new CustomEvent("filter"))
          setTimeout(() => {
            this.requestUpdate();
            // console.log(this.renderRoot
            //   .querySelector(`eox-itemfilter-${inProgressItem.type}`))
            // this.renderRoot
            // .querySelector(`eox-itemfilter-${inProgressItem.type}`)
            // .setAttribute("slot", "dropdown");
            this.renderRoot.querySelector("eox-autocomplete").requestUpdate();
          });
            // this.dispatchEvent()
        }}
      >
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
          @filter=${(evt) => {
            this.dispatchEvent(new CustomEvent("filter"))
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
              this.renderRoot.querySelector("eox-autocomplete").requestUpdate();
            // })
          }}
        ></eox-itemfilter-${unsafeStatic(
          this.items.find((i) => i._inProgress).type
        )}>
      `
        )}
      </eox-autocomplete>
    `;
  }
}
