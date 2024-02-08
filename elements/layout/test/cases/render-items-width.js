import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { layoutElement } = TEST_SELECTORS;

/**
 * Test to verify if the layout-items component render correctly.
 */
const renderItemsWidthTest = () => {
  cy.mount(
    `   
    <eox-layout> 
      <eox-layout-item x="0" y="0" w="1" h="1"></eox-layout-item>
      <eox-layout-item x="0" y="1" w="2" h="1"></eox-layout-item>
      <eox-layout-item x="0" y="2" w="3" h="1"></eox-layout-item>
    </eox-layout>
  `
  ).as(layoutElement);

  cy.get(layoutElement)
    .shadow()
    .within(() => {
      cy.get("slot").and(($el) => {
        const items = $el[0].assignedElements();
        expect(
          getComputedStyle(items[0]).gridColumn.includes("/ span 1")
        ).to.eq(true);
        expect(
          getComputedStyle(items[1]).gridColumn.includes("/ span 2")
        ).to.eq(true);
        expect(
          getComputedStyle(items[2]).gridColumn.includes("/ span 3")
        ).to.eq(true);
      });
    });
};

export default renderItemsWidthTest;
