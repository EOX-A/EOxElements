import { EOxItemFilter } from "../src/main";
import testItems from "./testItems.json";

describe("Item Filter", () => {
  beforeEach(() => {
    cy.visit("/elements/itemfilter/test/general.html");
  });

  it("loads the itemfilter", () => {
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      EOxItemFilter.style.height = "100px";
      EOxItemFilter.style.border = "1px solid grey";
      EOxItemFilter.config = {
        titleProperty: "title",
        filterProperties: ["themes", "code"],
        enableSearch: true,
        showResults: false,
        inlineMode: true,
      };
      EOxItemFilter.apply(testItems);
    });
  });
});
