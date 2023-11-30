import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { drawTools } = TEST_SELECTORS;

/**
 * Test to verify if the drawtools component loads successfully.
 */
const loadDrawToolsTest = () => {
  it("loads the drawtools", () => {
    // Find the drawTools element and access its shadow DOM
    cy.get(drawTools).shadow();
  });
};

export default loadDrawToolsTest;
