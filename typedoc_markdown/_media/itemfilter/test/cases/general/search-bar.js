/**
 * Tests the existence of the search bar in the eox-itemfilter component.
 */
const searchBarTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-cy='search']").should("exist");
    });
};

export default searchBarTest;
