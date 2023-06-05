import { EOxItemFilter } from "../src/main";
import testItems from "./testItems.json";

describe("Item Filter", () => {
  beforeEach(() => {
    cy.visit("/elements/itemfilter/test/styledResults.html");
  });

  it("loads the itemfilter", () => {
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      EOxItemFilter.config = {
        titleProperty: "title",
        filterProperties: ["themes", "code"],
        enableSearch: true,
        inlineMode: true,
      };
      EOxItemFilter.apply(testItems);
    });
  });
});
