/**
 * Tests that text typed into the inline search box is forwarded to the text filter
 * flagged with `inlineSearch`, filtering the results live.
 */
const inlineSearchTest = () => {
  // Opening the inline popover can trigger a benign ResizeObserver loop error
  cy.on(
    "uncaught:exception",
    (err) => !err.message.includes("ResizeObserver loop"),
  );
  cy.get("eox-itemfilter").then(($el) => {
    Object.assign($el[0], {
      inlineMode: true,
      filterProperties: [
        {
          keys: ["title", "themes"],
          title: "Search",
          type: "text",
          inlineSearch: true,
        },
        { key: "themes" },
      ],
    });
  });

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("ul#results > li")
        .its("length")
        .then((totalResults) => {
          cy.get("eox-itemfilter-container")
            .shadow()
            .find("#eox-itemfilter-input-search")
            .type("asparagus");

          cy.get("ul#results > li")
            .should("have.length.lessThan", totalResults)
            .and("contain.text", "White Asparagus");
          cy.get("[data-cy='search']").should("have.value", "asparagus");
          cy.get('[data-details="title|themes"]')
            .parent()
            .should("not.have.css", "display", "none");
          cy.get("eox-itemfilter-container")
            .shadow()
            .find(".chip-title")
            .should("contain.text", "Search:")
            .and("contain.text", "asparagus");
        });
    });
};

export default inlineSearchTest;