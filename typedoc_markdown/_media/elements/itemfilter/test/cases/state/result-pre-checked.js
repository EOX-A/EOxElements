/**
 * Tests that the specified result is pre-checked in the eox-itemfilter-results component.
 * It verifies that the result at the specified index is selected and that only one result is selected.
 *
 * @param {number} selectedResultIndex - The index of the result that should be pre-checked.
 */
const resultPreCheckedTest = (selectedResultIndex) => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-results").within(() => {
        cy.get(".details-results li")
          .eq(selectedResultIndex)
          .should("have.class", "highlighted");
        cy.get(".details-results li.highlighted").should("have.length", 1);
      });
    });
};

export default resultPreCheckedTest;
