/**
 * Tests the behavior of the checkboxes within the eox-itemfilter-select component,
 * ensuring that checkboxes can be toggled correctly.
 */
const spatialFilterTest = () => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-select")
        .within(() => {
          cy.get('[type="checkbox"]').first().check({ force: true });
          cy.get('[type="checkbox"]').eq(1).check({ force: true });
          cy.get('[type="checkbox"]').first().check({ force: true });
          cy.get('[type="checkbox"]').first().should("be.checked");
          cy.get('[type="checkbox"]').eq(1).check({ force: true });
          cy.get('[type="checkbox"]').eq(1).should("be.checked");
        });
    });
};

export default spatialFilterTest;
