/**
 * Tests the `filterKeys` options within the `filterObject`.
 * It verifies that the `filterKeys` override the normally rendered filter keys.
 *
 * @param {Array} filterKeys - An array including the custom filter keys.
 */
const filterKeysTest = (filterKeys) => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-select")
        .shadow()
        .within(($el) => {
          const identifiers = $el[0].querySelectorAll("li[data-identifier");
          expect(identifiers.length).to.eq(filterKeys.length);
          expect(identifiers[0].dataset.identifier).to.eq(filterKeys[0]);
        });
    });
};

export default filterKeysTest;
