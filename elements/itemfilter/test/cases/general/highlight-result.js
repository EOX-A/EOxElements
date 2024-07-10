/**
 * Tests the highlighting functionality in the eox-itemfilter-results component.
 * It types a search query and checks if the expected text is highlighted.
 */
const highlightResultTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-cy='search']").type("white");
      cy.get("eox-itemfilter-results").within(() => {
        cy.get("mark.highlight").contains("White");
      });
    });
};

export default highlightResultTest;
