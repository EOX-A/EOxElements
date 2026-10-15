/**
 * Tests that a text filter with a pre-set state shows its value in the inline mode chip.
 *
 * @param {string} title - The text filter title.
 * @param {string} value - The pre-set text filter value.
 */
const textPreSetChipTest = (title, value) => {
  cy.get("eox-itemfilter").then(($el) => {
    $el[0].inlineMode = true;
  });
  cy.get("eox-itemfilter")
    .shadow()
    .find("eox-itemfilter-container")
    .shadow()
    .find(".chip-title")
    .should("contain.text", `${title}:`)
    .and("contain.text", value);
};

export default textPreSetChipTest;