import { html } from "lit";
import uniq from "lodash.uniq";
import flatMap from "lodash.flatmap";

function createFilterMethod(filterObject, tabIndex, EOxItemFilter) {
  const filterId = `filter-${filterObject.key}`.replace("|", "-");

  switch (filterObject.type) {
    case "text":
      return html`<itemfilter-text
        data-type="filter"
        slot="filter"
        id="${filterId}"
        .tabIndex=${tabIndex}
        .filterObject=${filterObject}
        .unstyled=${EOxItemFilter.unstyled}
        @filter=${() => EOxItemFilter.search()}
      ></itemfilter-text>`;
    case "multiselect":
    case "select":
      return html`
        <eox-selector
          data-type="filter"
          id="${filterId}"
          .filterObject=${filterObject}
          slot="filter"
          .suggestions="${uniq(flatMap(EOxItemFilter.items, filterObject.key))}"
          type="${filterObject.type}"
          .unstyled=${EOxItemFilter.unstyled}
          @filter=${() => EOxItemFilter.search()}
        ></eox-selector>
      `;
    case "range":
      return html`
        <itemfilter-range
          id="${filterId}"
          data-type="filter"
          .filterObject=${filterObject}
          slot="filter"
          .unstyled=${EOxItemFilter.unstyled}
          @filter=${() => EOxItemFilter.search()}
        ></itemfilter-range>
      `;
    case "spatial":
      return html`
        <itemfilter-spatial
          id="${filterId}"
          data-type="filter"
          .filterObject=${filterObject}
          slot="filter"
          @filter=${() => EOxItemFilter.search()}
        ></itemfilter-spatial>
      `;
    default:
      return html``;
  }
}

export default createFilterMethod;
