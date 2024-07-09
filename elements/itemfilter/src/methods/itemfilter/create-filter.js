import { html } from "lit";
import uniq from "lodash.uniq";
import flatMap from "lodash.flatmap";

function createFilterMethod(filterObject, tabIndex, EOxItemFilter) {
  const filterId = `filter-${filterObject.key}`.replace("|", "-");

  switch (filterObject.type) {
    case "text":
      return html`<eox-itemfilter-text
        data-type="filter"
        slot="filter"
        id="${filterId}"
        .tabIndex=${tabIndex}
        .filterObject=${filterObject}
        .unstyled=${EOxItemFilter.unstyled}
        @filter=${() => EOxItemFilter.search()}
      ></eox-itemfilter-text>`;
    case "multiselect":
    case "select":
      return html`
        <eox-itemfilter-select
          .inlineMode=${EOxItemFilter.config.inlineMode || false}
          data-type="filter"
          id="${filterId}"
          .tabIndex=${tabIndex}
          .filterObject=${filterObject}
          slot="filter"
          .suggestions="${uniq(flatMap(EOxItemFilter.items, filterObject.key))}"
          type="${filterObject.type}"
          .unstyled=${EOxItemFilter.unstyled}
          @filter=${() => EOxItemFilter.search()}
        ></eox-itemfilter-select>
      `;
    case "range":
      return html`
        <eox-itemfilter-range
          id="${filterId}"
          data-type="filter"
          .tabIndex=${tabIndex}
          .filterObject=${filterObject}
          slot="filter"
          .unstyled=${EOxItemFilter.unstyled}
          @filter=${() => EOxItemFilter.search()}
        ></eox-itemfilter-range>
      `;
    case "spatial":
      return html`
        <eox-itemfilter-spatial
          id="${filterId}"
          data-type="filter"
          .tabIndex=${tabIndex}
          .filterObject=${filterObject}
          slot="filter"
          @filter=${() => EOxItemFilter.search()}
        ></eox-itemfilter-spatial>
      `;
    default:
      return html``;
  }
}

export default createFilterMethod;
