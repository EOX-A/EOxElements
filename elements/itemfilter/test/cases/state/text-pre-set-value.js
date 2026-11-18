/**
 * Tests that a text filter with a pre-set state shows the value in its input.
 *
 * @param {string} value - The pre-set text filter value.
 */
const textPreSetValueTest = (value) => {
  cy.get("eox-itemfilter")
    .shadow()
    .find("[data-cy='search']")
    .should("have.value", value);
};

export default textPreSetValueTest;
