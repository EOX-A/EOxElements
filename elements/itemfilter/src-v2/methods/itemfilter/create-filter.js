import { html } from "lit";
import uniq from "lodash.uniq";
import flatMap from "lodash.flatmap";
import { map } from "lit/directives/map.js";

function createFilterMethod(filterObject, tabIndex, EOxItemFilter) {
  switch (filterObject.type) {
    case "text":
      return html`<itemfilter-text
        slot="filter"
        .tabIndex=${tabIndex}
        .filterObject=${filterObject}
        @filter=${() => EOxItemFilter.search()}
      ></itemfilter-text>`;
    case "multiselect":
      const result = uniq(flatMap(EOxItemFilter.items, filterObject.key));
      return html`
        <ul class="multiselect" slot="filter">
          ${map(
            result,
            (item) => html`
              <li data-identifier="${item.toLowerCase()}" data-title="${item}">
                <label>
                  <input type="checkbox" tabindex=${tabIndex} />
                  <span class="title">${item}</span>
                </label>
              </li>
            `,
          )}
        </ul>
      `;
    default:
      return html``;
  }
}

export default createFilterMethod;
