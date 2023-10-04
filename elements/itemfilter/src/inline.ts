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

  render() {
    return html`
      <style>
        :host {
          width: 100%;
        }
      </style>
      <eox-autocomplete
        idProperty="type"
        .multiStep=${true}
        multiple
        .items=${this.items}
        @click=${(evt: Event) => {
          evt.stopPropagation();
        }}
        @items-selected=${(evt) => {
          const inProgressItem = evt.detail.find((i) => i._inProgress);
          setTimeout(() => {
            this.requestUpdate();
            // console.log(this.renderRoot
            //   .querySelector(`eox-itemfilter-${inProgressItem.type}`))
            // this.renderRoot
            // .querySelector(`eox-itemfilter-${inProgressItem.type}`)
            // .setAttribute("slot", "dropdown");
          });
          //   this.items.forEach((item) => {
          //     if (
          //       !evt.detail.find(
          //         (i) => i[this.idProperty] === item[this.idProperty]
          //       )
          //     ) {
          //       resetFilter(item);
          //       delete item._inProgress;
          //       delete item._complete;
          //       delete item._combinedTitle;
          //     }
          //   });
          //   this.renderRoot.querySelector("eox-autocomplete").requestUpdate();
        }}
      >
        ${when(
          this.items.find((i) => i._inProgress),
          () => staticHTML`
        <eox-itemfilter-${unsafeStatic(
          this.items.find((i) => i._inProgress).type
        )}
          data-filter=${this.items.find((i) => i._inProgress)[this.idProperty]}
          slot="dropdown"
          embedded
          .filterObject=${this.items.find((i) => i._inProgress)}
          @filter=${(evt) => {
            // // this.dispatchEvent(new CustomEvent("filter"))
            // const item = this.items.find((i) => i._inProgress);
            // // if (!item.isDirty) { return }
            // // item._inProgress = false;
            // // item._complete = true;
            // // console.log(this.items);
            // // console.log('filter')
            // setTimeout(() => {
            //   item._combinedTitle = `${item[this.titleProperty]}: ${
            //     item.stringifiedState
            //   }`;
            // });
            this.requestUpdate();
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
