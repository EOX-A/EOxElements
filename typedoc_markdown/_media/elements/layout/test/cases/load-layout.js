import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { layoutElement } = TEST_SELECTORS;

/**
 * Test to verify if the layout component loads successfully.
 */
const loadLayoutTest = () => {
  // Mounting eox-layout element
  cy.mount(`<eox-layout></eox-layout>`).as(layoutElement);

  it("loads the layout", () => {
    // Find the layout element and access its shadow DOM
    cy.get(layoutElement).shadow();
  });
};

export default loadLayoutTest;
