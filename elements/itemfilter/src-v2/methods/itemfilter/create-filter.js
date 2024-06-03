import { html } from "lit";
import uniq from "lodash.uniq";
import flatMap from "lodash.flatmap";

function createFilterMethod(filterObject, tabIndex, EOxItemFilter) {
  switch (filterObject.type) {
    case "text":
      return html`<itemfilter-text
        slot="filter"
        .tabIndex=${tabIndex}
        .filterObject=${filterObject}
        @filter=${() => EOxItemFilter.search()}
        .unstyled=${EOxItemFilter.unstyled}
      ></itemfilter-text>`;
    case "multiselect":
    case "select":
      const result = uniq(flatMap(EOxItemFilter.items, filterObject.key));
      return html`
        <eox-selector
          .filterObject=${filterObject}
          slot="filter"
          .suggestions="${result}"
          @filter=${() => EOxItemFilter.search()}
          type="${filterObject.type}"
          .unstyled=${EOxItemFilter.unstyled}
        ></eox-selector>
      `;
    default:
      return html``;
  }
}

export default createFilterMethod;
