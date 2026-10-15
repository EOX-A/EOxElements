/**
 * Tests that the inline search box only matches filter names while typing, that
 * pressing Enter adds the text to the text filter flagged with `inlineSearch`,
 * and that the resulting chip can be removed again.
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
          // Three keys produce a filter id containing "|"
          keys: ["title", "description", "themes"],
          title: "Search",
          type: "text",
          inlineSearch: true,
        },
        { key: "themes" },
      ],
    });
  });

  const searchSection = '[data-details="title|description|themes"]';
  const container = () => cy.get("eox-itemfilter-container").shadow();
  const inlineInput = () => container().find("#eox-itemfilter-input-search");
  const popoverOpen = (open) =>
    container()
      .find("[popover]")
      .should(($popover) =>
        expect($popover[0].matches(":popover-open")).to.equal(open),
      );

  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("ul#results > li")
        .its("length")
        .then((totalResults) => {
          // Typing only matches filter names
          inlineInput().type("asparagus");
          cy.get(searchSection).parent().should("have.css", "display", "none");
          cy.get(`${searchSection} [data-cy='search']`).should(
            "have.value",
            "",
          );
          container().find(".chip-title").should("not.exist");

          // Enter applies the text, clears the box and closes the dropdown
          inlineInput().type("{enter}");
          inlineInput().should("have.value", "");
          popoverOpen(false);
          cy.get("ul#results > li")
            .should("have.length.lessThan", totalResults)
            .and("contain.text", "White Asparagus");
          cy.get(`${searchSection} [data-cy='search']`).should(
            "have.value",
            "asparagus",
          );
          cy.get(searchSection)
            .parent()
            .should("not.have.css", "display", "none");
          container()
            .find(".chip-title")
            .should("contain.text", "Search:")
            .and("contain.text", "asparagus");

          // Typing again reopens the dropdown
          inlineInput().type("x");
          popoverOpen(true);
          inlineInput().clear();

          // Removing the chip resets the filter
          container().find(".chip-item-close").click({ force: true });
          container().find(".chip-title").should("not.exist");
          cy.get("ul#results > li").should("have.length", totalResults);

          // Each Enter adds to the text, even within the text filter debounce
          inlineInput().type("vessel{enter}cargo{enter}density{enter}", {
            delay: 0,
          });
          container()
            .find(".chip-title")
            .should("contain.text", "vessel cargo density");
          cy.get("ul#results")
            .should("contain.text", "Vessel Density (cargo)")
            .and("not.contain.text", "Vessel Density (all)")
            .and("not.contain.text", "Cargo Ships");
        });
    });
};

export default inlineSearchTest;
