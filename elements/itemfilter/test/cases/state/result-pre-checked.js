const resultPreCheckedTest = (selectedResultIndex) => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-results").within(() => {
        cy.get("input[data-cy=result-radio]")
          .eq(selectedResultIndex)
          .should("be.checked");
        cy.get("input[data-cy=result-radio][checked]").should("have.length", 1);
      });
    });
};

export default resultPreCheckedTest;
