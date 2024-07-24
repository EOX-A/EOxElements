/**
 * Tests the behavior of the eox-itemfilter-select component to ensure multiple checkboxes can be toggled correctly.
 */
const multipleResultTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-select")
        .shadow()
        .within(() => {
          cy.get('[type="checkbox"]').first().check();
          cy.get('[type="checkbox"]').eq(1).check();
          cy.get('[type="checkbox"]').first().check();
          cy.get('[type="checkbox"]').first().should("be.checked");
          cy.get('[type="checkbox"]').eq(1).check();
          cy.get('[type="checkbox"]').eq(1).should("be.checked");
        });
    });
};

export default multipleResultTest;
