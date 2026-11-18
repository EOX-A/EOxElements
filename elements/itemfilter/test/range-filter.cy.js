import "../src/main";
import { rangeFilterTest } from "./cases/filters/";

describe("Item Filter Numeric Range", () => {
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

  it("should not mark the numeric range filter as dirty on initial load", () =>
    rangeFilterTest());
});
