/**
 * Tests that a text filter with a pre-set state shows the value in its input
 * and filters the results accordingly.
 *
 * @param {string} value - The pre-set text filter value.
 * @param {number} totalItems - The number of unfiltered items.
 */
const textPreSetValueTest = (value, totalItems) => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("[data-cy='search']").should("have.value", value);
      cy.get("ul#results > li")
        .should("have.length.lessThan", totalItems)
        .and("contain.text", "White Asparagus");
    });
};

export default textPreSetValueTest;