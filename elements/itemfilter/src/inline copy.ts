import { LitElement, html, render } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import { when } from "lit/directives/when.js";
import "@vaadin/multi-select-combo-box";
import "./filters/multiselect";
import "./filters/range";
import "./filters/select";
import "./filters/spatial";
import "./filters/text";

@customElement("eox-itemfilter-inline-two")
export class EOxItemFilterInlineMode extends LitElement {
  @property()
  filters: { type: Array; attribute: false };

  currentFilter: null;

  render() {
    return html`
      <style></style>
      <vaadin-multi-select-combo-box
        .items=${Object.values(this.filters)}
        item-label-path="title"
        @selected-items-changed=${(evt) => {
          this.currentFilter = evt.detail.value[0];
          if (this.currentFilter) {
            this.filters.themes.title = "foobar";
            this.requestUpdate();
          }
        }}
      >
        <div slot="chip">hi</div>
      </vaadin-multi-select-combo-box>
      current: ${this.currentFilter}
      ${when(
        this.currentFilter,
        () => staticHTML`
          
          <eox-itemfilter-${unsafeStatic(this.currentFilter.type)}
            slot="filter"
            data-type="filter"
            .filterObject=${this.currentFilter}
            @filter="${() => {
              console.log("filter!");
              this.requestUpdate();
            }}"
            style="height: 400px; background: red; display: block"
          ></eox-itemfilter-${unsafeStatic(this.currentFilter.type)}>
        `
      )}
    `;
  }
}
