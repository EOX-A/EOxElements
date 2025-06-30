import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { tourElement } = TEST_SELECTORS;

/**
 * Test to verify if the tour component loads successfully.
 */
const loadLayoutTest = () => {
  // Mounting eox-tour element
  cy.mount(`<eox-tour></eox-tour>`).as(tourElement);

  it("loads the tour", () => {
    // Find the layout element and access its shadow DOM
    cy.get(tourElement).shadow();
  });
};

export default loadLayoutTest;
