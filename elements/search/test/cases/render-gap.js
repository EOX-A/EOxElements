import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { layoutElement } = TEST_SELECTORS;

/**
 * Test to verify if the layout-items component render correctly.
 */
const renderGap = () => {
  const testGap = 8;
  cy.mount(
    `   
    <eox-layout gap="${testGap}"> 
      <eox-layout-item x="0" y="0" w="1" h="1"></eox-layout-item>
      <eox-layout-item x="0" y="1" w="1" h="1"></eox-layout-item>
      <eox-layout-item x="0" y="2" w="1" h="1"></eox-layout-item>
    </eox-layout>
  `
  ).as(layoutElement);

  cy.get(layoutElement).and(($el) => {
    expect(getComputedStyle($el[0]).padding).to.eq(`${testGap}px`);
    expect(getComputedStyle($el[0]).gap).to.eq(`${testGap}px`);
  });
};

export default renderGap;
