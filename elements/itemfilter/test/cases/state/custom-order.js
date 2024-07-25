/**
 * Tests the custom order of items within the eox-itemfilter-select component.
 * It verifies that the items are ordered according to the provided custom order.
 *
 * @param {Object} customOrder - An object representing the custom order, where keys are item states and values are their expected positions.
 */
const customOrderTest = (customOrder) => {
  cy.get("eox-itemfilter")
    .shadow()
    .within(() => {
      cy.get("eox-itemfilter-select")
        .shadow()
        .within(() => {
          Object.keys(customOrder).forEach((state) => {
            cy.get("ul [data-identifier]")
              .eq(customOrder[state])
              .invoke("attr", "data-identifier")
              .should("eq", state);
          });
        });
    });
};

export default customOrderTest;
