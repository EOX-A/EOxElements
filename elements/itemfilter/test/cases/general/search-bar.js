const searchBarTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-cy='search']").should("exist");
    });
};

export default searchBarTest;
