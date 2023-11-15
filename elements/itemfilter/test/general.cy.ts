import { within } from "../src/filters/spatial";
import "../src/main";
import "./_mockMap";
import testItems from "./testItems.json";

describe("Item Filter Config", () => {
  beforeEach(() => {
    cy.mount(
      `<eox-itemfilter>
      <h4 slot="filterstitle">Filter</h4>
      <h4 slot="resultstitle">Results</h4>
    </eox-itemfilter>`
    )
      .as("eox-itemfilter")
      .then(($el) => {
        const eoxItemFilter = <EOxItemFilter>$el[0];
        eoxItemFilter.config = {
          titleProperty: "title",
          filterProperties: [
            {
              keys: ["title", "themes"],
              title: "Search",
              type: "text",
              expanded: true,
            },
            { key: "themes", expanded: true },
          ],
          aggregateResults: "themes",
          enableHighlighting: true,
        };
        eoxItemFilter.apply(testItems);
      });
  });

  it("should have a search bar", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='search']").should("exist");
      });
  });

  it("should filter results based on search string", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='search']").type("white");
        cy.get("ul#results").children();
      });
  });

  it("should highlight results", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='search']").type("white");
        cy.get("mark.highlight").contains("White");
      });
  });

  it("should disable highlight", () => {
    cy.get("eox-itemfilter").should(($el) => {
      (<EOxItemFilter>$el[0]).config.enableHighlighting = false;
    });
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("[data-cy='search']").type("white");
        cy.get("mark.highlight").should("not.exist");
      });
  });

  // it("should not have a search bar", () => {
  //   cy.get("eox-itemfilter").should(($el) => {
  //     (<EOxItemFilter>$el[0]).config = {
  //       titleProperty: "title",
  //       filterProperties: [{ key: "themes", type: "multiselect", title: "foobar" }],
  //     };
  //     EOxItemFilter.apply(testItems);
  //   });
  //   cy.get("eox-itemfilter")
  //     .shadow()
  //     .find("input[type='text']")
  //     .should("not.exist");
  // });

  it("should allow multiple filters", () => {
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-selectionlist").shadow();
        within(() => {
          cy.get('[type="checkbox"]').first().check();
          cy.get('[type="checkbox"]').eq(1).check();
          cy.get('[type="checkbox"]').first().check();
          cy.get('[type="checkbox"]').first().should("be.checked");
          cy.get('[type="checkbox"]').eq(1).check();
          cy.get('[type="checkbox"]').eq(1).should("be.checked");
        });
      });
  });

  // it("should allow only one filter", () => {
  //   cy.get("eox-itemfilter").should(($el) => {
  //     const EOxItemFilter = <EOxItemFilter>$el[0];
  //     // have to replace the entire config, otherwise exclusiveFilters = true doesn't work
  //     EOxItemFilter.config = {
  //       titleProperty: "title",
  //       filterProperties: [{ key: "themes", exclusive: true }],
  //       aggregateResults: "themes",
  //       enableHighlighting: true,
  //     };
  //     EOxItemFilter.apply(testItems);
  //   });
  //   cy.get("eox-itemfilter")
  //     .shadow()
  //     .within(() => {
  //       cy.get(".details-filter").click();
  //       cy.get('[type="radio"]').first().check();
  //       cy.get('[type="radio"]').eq(1).check();
  //       cy.get('[type="radio"]').first().should("not.be.checked");
  //     });
  // });

  // it("should clear all filters", () => {
  //   cy.get("eox-itemfilter")
  //     .shadow()
  //     .within(() => {
  //       cy.get("[data-cy='search']").type("city");
  //       cy.get(".details-filter").click()
  //         .find('[type="checkbox"]')
  //         .then(($value) => {
  //           [...Array($value.length)].map((_, i) => {
  //             cy.get('[type="checkbox"]').eq(i).check();
  //           });
  //         });
  //       cy.get("[data-cy='filter-reset']").click();
  //       cy.get("[data-cy='search']").should("have.value", "");
  //       cy.get(".details-filter")
  //         .find('[type="checkbox"]')
  //         .then(($value) => {
  //           [...Array($value.length)].map((_, i) => {
  //             cy.get('[type="checkbox"]').eq(i).should("not.be.checked");
  //           });
  //         });
  //     });
  // });

  it("should allow only one accordion of each type to be open at a time if configured", () => {
    cy.get("eox-itemfilter").then(($el) => {
      (<EOxItemFilter>$el[0]).config.expandMultipleFilters = false;
      (<EOxItemFilter>$el[0]).config.expandMultipleResults = false;
    });

    const checkExclusiveOpen = (selector: string, isSubcomponent = false) => {
      cy.get("eox-itemfilter")
        .shadow()
        .within(() => {
          cy.get(selector).then((accordions) => {
            for (let i = 0; i < accordions.length; i++) {
              const accordionToClick = isSubcomponent
                ? cy
                    .get(selector)
                    .eq(i)
                    .find("eox-itemfilter-expandcontainer")
                    .shadow()
                    .find("details")
                : cy.get(selector).eq(i).find("details");

              accordionToClick.click({ multiple: true, force: true });
              accordionToClick.should("have.attr", "open");

              // Check that all other accordions are closed
              for (let j = 0; j < accordions.length; j++) {
                if (i !== j) {
                  const accordionToCheck = isSubcomponent
                    ? cy
                        .get(selector)
                        .eq(j)
                        .find("eox-itemfilter-expandcontainer")
                        .shadow()
                        .find("details")
                    : cy.get(selector).eq(j).find("details");

                  accordionToCheck.should("not.have.attr", "open");
                }
              }
            }
          });
        });
    };

    checkExclusiveOpen("ul#filters", true);
    checkExclusiveOpen("ul#results");
  });

  it("should show the map when spatial filter is enabled", () => {
    cy.get("eox-itemfilter").and(($el) => {
      const eoxItemFilter = <EOxItemFilter>$el[0];
      eoxItemFilter.config = {
        titleProperty: "title",
        filterProperties: [
          {
            key: "geometry",
            type: "spatial",
            expanded: true,
          },
        ],
      };
      eoxItemFilter.apply(testItems);
    });
    cy.get("eox-itemfilter")
      .shadow()
      .within(() => {
        cy.get("eox-itemfilter-spatial")
          .get("eox-itemfilter-spatial-filter")
          .shadow()
          .within(() => {
            cy.get("eox-map").should("exist");
            cy.get("eox-map")
              .shadow()
              .within(() => {
                cy.get("canvas").should("exist");
              });
          });
      });
  });
});
