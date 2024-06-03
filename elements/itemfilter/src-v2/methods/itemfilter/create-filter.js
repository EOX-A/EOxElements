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
        .unstyled=${EOxItemFilter.unstyled}
        @filter=${() => EOxItemFilter.search()}
      ></itemfilter-text>`;
    case "multiselect":
    case "select":
      const result = uniq(flatMap(EOxItemFilter.items, filterObject.key));
      return html`
        <eox-selector
          .filterObject=${filterObject}
          slot="filter"
          .suggestions="${result}"
          type="${filterObject.type}"
          .unstyled=${EOxItemFilter.unstyled}
          @filter=${() => EOxItemFilter.search()}
        ></eox-selector>
      `;
    case "range":
      return html`
        <itemfilter-range
          .filterObject=${filterObject}
          slot="filter"
          .unstyled=${EOxItemFilter.unstyled}
          @filter=${() => EOxItemFilter.search()}
        ></itemfilter-range>
      `;
    default:
      return html``;
  }
}

export default createFilterMethod;
