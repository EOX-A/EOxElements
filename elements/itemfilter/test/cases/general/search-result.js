/**
 * Tests the search functionality in the eox-itemfilter component.
 * It types a search query and verifies that search results are displayed.
 */
const searchResultTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-cy='search']").type("white");
      cy.get("ul#results").children();
    });
};

export default searchResultTest;
