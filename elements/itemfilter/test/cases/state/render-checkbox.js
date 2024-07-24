/**
 * Tests the rendering of checkboxes within the eox-itemfilter-select component.
 * It verifies that the expected number of checkboxes are checked.
 */
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
