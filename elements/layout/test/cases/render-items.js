import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { layoutElement, layoutItemElement } = TEST_SELECTORS;

/**
 * Test to verify if the number of layout-items component render correctly.
 */
const renderItemsTest = () => {
  cy.mount(
    `   
    <eox-layout> 
      <eox-layout-item></eox-layout-item>
      <eox-layout-item></eox-layout-item>
      <eox-layout-item></eox-layout-item>
    </eox-layout>
  `
  ).as(layoutElement);

  cy.get(layoutItemElement).should("have.length", 3);
  // Find the layout element and access its shadow DOM
  cy.get(layoutElement)
    .shadow()
    .within(() => {
      cy.get("slot").and(($el) => {
        expect($el[0].assignedElements().length).to.eq(3);
      });
    });
};

export default renderItemsTest;
