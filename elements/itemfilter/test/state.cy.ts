import "../src/main";
import testItems from "./testItems.json";

describe("Item Filter Config", () => {
  const state = {
    agriculture: true,
    health: true,
  };
  const customOrder = {
    health: 0,
    water: 1,
    air: 2,
    economy: 3,
    agriculture: 4,
  } as { [key: string]: number };
  const selectedResultIndex = 1;
  beforeEach(() => {
    cy.mount(`<eox-itemfilter></eox-itemfilter>`)
      .as("eox-itemfilter")
      .then(($el) => {
        const eoxItemFilter = <EOxItemFilter>$el[0];
        Object.assign(eoxItemFilter, {
          config: {
            titleProperty: "title",
            filterProperties: [
              {
                key: "themes",
                type: "multiselect",
                expanded: true,
                // @ts-ignore
                sort: (a, b) => customOrder[a] - customOrder[b],
                // @ts-ignore
                state,
              },
            ],
            aggregateResults: "themes",
          },
          items: testItems,
          selectedResult: testItems[selectedResultIndex],
        });
      });
  });

  it("should render the checkboxes as checked", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-select")
          .shadow()
          .within(() => {
            cy.get('[type="checkbox"]:checked').should("have.length", 2);
          });
      });
  });

  it("should only show the results of the pre-set filters", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-results").within(() => {
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
  });

  it("should render the pre-set result as checked", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-results").within(() => {
          cy.get("input[data-cy=result-radio]")
            .eq(selectedResultIndex)
            .should("be.checked");
          cy.get("input[data-cy=result-radio][checked]").should(
            "have.length",
            1
          );
        });
      });
  });

  it("should have a custom order", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-select")
          .shadow()
          .within(() => {
            Object.keys(customOrder).forEach((state) => {
              cy.get("ul [data-identifier]")
                .eq(customOrder[state])
                .invoke("attr", "data-identifier")
                .should("eq", state);
            });
          });
      });
  });
});
