import "../src/main";
import { dateRangeFilterTest } from "./cases/filters/";

describe("Item Filter Date Range", () => {
  beforeEach(() => {
    cy.mount(`<eox-itemfilter></eox-itemfilter>`)
      .as("eox-itemfilter")
      .then(($el) => {
        const eoxItemFilter = $el[0];
        Object.assign(eoxItemFilter, {
          titleProperty: "title",
        });
      });
  });

  it("should filter items using the date range picker", () =>
    dateRangeFilterTest());
});
