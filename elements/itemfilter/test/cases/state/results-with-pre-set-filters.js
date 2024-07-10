/**
 * Tests that the results in the eox-itemfilter-results component are correctly displayed
 * based on the pre-set filters provided in the state.
 *
 * @param {Object} state - An object representing the pre-set filters, where keys are filter names.
 */
const resultsWithPreSetFiltersTest = (state) => {
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
};

export default resultsWithPreSetFiltersTest;
