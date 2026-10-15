/**
 * Tests that without `inlineSearch`, the inline search box only matches filter titles
 * and leaves the results unchanged.
 */
const inlineSearchTitleOnlyTest = () => {
  // Opening the inline popover can trigger a benign ResizeObserver loop error
  cy.on(
    "uncaught:exception",
    (err) => !err.message.includes("ResizeObserver loop"),
  );
  cy.get("eox-itemfilter").then(($el) => {
    $el[0].inlineMode = true;
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
          // Wait past the text filter debounce (500ms) so a late filter would show up
          cy.wait(600);
          cy.get("ul#results > li").should("have.length", totalResults);
          cy.get("[data-cy='search']").should("have.value", "");
        });
    });
};

export default inlineSearchTitleOnlyTest;