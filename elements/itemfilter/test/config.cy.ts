import { EOxItemFilter } from "../src/main";
import testItems from "./testItems.json";

describe("Item Filter Config", () => {
  beforeEach(() => {
    cy.visit("/elements/itemfilter/test/general.html");
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      // default config
      EOxItemFilter.config = {
        titleProperty: "title",
        filterProperties: ["themes"],
        aggregateResults: "themes",
        enableSearch: true,
        enableHighlighting: true,
        fuseConfig: {
            keys: ["title", "description", "themes"],
        },
        // onSelect: (item: any) => {
        //   console.log(item);
        // },
        // matchAllWhenEmpty: true,
        // exclusiveFilters: true,
      };
      EOxItemFilter.apply(testItems);
    });
  });

  it("should have a search bar", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .find("input")
      .should('not.have.css', 'display', 'none')
  });

  it("should filter results based on search string", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='search']").type("white");
        cy.get("ul#results").children()
      })
  });

  it("should highlight results", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='search']").type("white");
        cy.get("mark.highlight").contains("White")
      })
  });

  it("should disable highlight", () => {
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      EOxItemFilter.config.enableHighlighting = false;
    });
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='search']").type("white");
        cy.get("mark.highlight").should("not.exist")
      })
  });

  it("should not have a search bar", () => {
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      // have to replace the entire config, otherwise enableSearch = false doesn't work
      EOxItemFilter.config = {
        titleProperty: "title",
        filterProperties: ["themes"],
        aggregateResults: "themes",
        enableSearch: false,
        enableHighlighting: true,
        fuseConfig: {
            keys: ["title", "description", "themes"],
        },
        // onSelect: (item: any) => {
        //   console.log(item);
        // },
        // matchAllWhenEmpty: true,
        // exclusiveFilters: true,
      };
      EOxItemFilter.apply(testItems);
    });
    cy.get("eox-itemfilter")
      .shadow()
      .find("input")
      .should('have.css', 'display', 'none')
  });

  it("should allow multiple filters", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='expand-button']").click()
        cy.get('[type="checkbox"]').first().check()
        cy.get('[type="checkbox"]').eq(1).check()
        cy.get('[type="checkbox"]').first().check().should('be.checked');
        cy.get('[type="checkbox"]').eq(1).check().should('be.checked');
      })
  })

  it("should allow only one filter", () => {
    cy.get("eox-itemfilter").should(($el) => {
      const EOxItemFilter = <EOxItemFilter>$el[0];
      // have to replace the entire config, otherwise exclusiveFilters = true doesn't work
      EOxItemFilter.config = {
        titleProperty: "title",
        filterProperties: ["themes"],
        aggregateResults: "themes",
        enableSearch: false,
        enableHighlighting: true,
        fuseConfig: {
            keys: ["title", "description", "themes"],
        },
        // onSelect: (item: any) => {
        //   console.log(item);
        // },
        // matchAllWhenEmpty: true,
        exclusiveFilters: true,
      };
      EOxItemFilter.apply(testItems);
    });
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='expand-button']").click()
        cy.get('[type="radio"]').first().check()
        cy.get('[type="radio"]').eq(1).check()
        cy.get('[type="radio"]').first().should('not.be.checked');
      })
  })
});