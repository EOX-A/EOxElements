import { EOxItemFilter } from "../src/main";
import testItems from "./testItems.json";

describe("Item Filter", () => {
  beforeEach(() => {
    cy.visit("/elements/itemfilter/test/general.html");
  });

  it("loads the itemfilter", () => {
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      EOxItemFilter.config = {
        titleProperty: "title",
        filterProperties: [{ key: "themes" }],
        aggregateResults: "themes",
        enableSearch: true,
      };
      EOxItemFilter.apply(testItems);
    });
    cy.viewport(800, 700);
    cy.wait(2000);
    cy.viewport(600, 700);
    cy.wait(2000);
    cy.viewport(400, 700);
    cy.wait(2000);
    cy.viewport(800, 400);
    cy.wait(2000);
    cy.viewport(600, 400);
    cy.wait(2000);
    cy.viewport(400, 400);
    cy.wait(2000);
  });
});
