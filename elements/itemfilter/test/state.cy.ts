import "../src/main";
import testItems from "./testItems.json";

describe("Item Filter Config", () => {
  const state = {
    agriculture: true,
    health: true,
  };
  const selectedResultIndex = 1;
  beforeEach(() => {
    cy.mount(`<eox-itemfilter></eox-itemfilter>`)
      .as("eox-itemfilter")
      .then(($el) => {
        const eoxItemFilter = <EOxItemFilter>$el[0];
        eoxItemFilter.config = {
          titleProperty: "title",
          filterProperties: [
            {
              key: "themes",
              type: "multiselect",
              expanded: true,
              state,
            },
          ],
          aggregateResults: "themes",
        };
        eoxItemFilter.apply(testItems);
        eoxItemFilter.selectedResult = testItems[selectedResultIndex];
      });
  });

  it("should render the checkboxes as checked", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("input[data-cy=multiselect-checkbox][checked]").should(
          "have.length",
          2
        );
      });
  });

  it("should only show the results of the pre-set filters", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        Object.keys(state).forEach((key) => {
          cy.get(".details-results > summary > .title").should(
            "contain.text",
            key
          );
          cy.get(".details-results > summary > .title").should(
            "contain.text",
            key
          );
        });
        cy.get(".details-results > summary > .title").should(
          "have.length",
          Object.keys(state).length
        );
      });
  });

  it("should render the pre-set result as checked", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("input[data-cy=result-radio]")
          .eq(selectedResultIndex)
          .should("be.checked");
        cy.get("input[data-cy=result-radio][checked]").should("have.length", 1);
      });
  });
});
