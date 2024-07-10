/**
 * Tests that the specified result is pre-checked in the eox-itemfilter-results component.
 * It verifies that the radio button at the specified index is checked and that only one radio button is checked.
 *
 * @param {number} selectedResultIndex - The index of the result that should be pre-checked.
 */
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
