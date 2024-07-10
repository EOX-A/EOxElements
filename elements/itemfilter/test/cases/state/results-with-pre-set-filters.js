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
