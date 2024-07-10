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
