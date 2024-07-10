const renderCheckboxTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-select")
        .shadow()
        .within(() => {
          cy.get('[type="checkbox"]:checked').should("have.length", 2);
        });
    });
};

export default renderCheckboxTest;
