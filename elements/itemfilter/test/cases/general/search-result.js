const searchResultTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-cy='search']").type("white");
      cy.get("ul#results").children();
    });
};

export default searchResultTest;
