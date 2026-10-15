/**
 * Tests that without `inlineSearch`, Enter in the inline search box does not
 * apply the text to any filter.
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
      cy.get("eox-itemfilter-container")
        .shadow()
        .find("#eox-itemfilter-input-search")
        .type("asparagus{enter}");
      cy.get("eox-itemfilter-container")
        .shadow()
        .find("#eox-itemfilter-input-search")
        .should("have.value", "asparagus");
      cy.get("[data-cy='search']").should("have.value", "");
    });
};

export default inlineSearchTitleOnlyTest;
