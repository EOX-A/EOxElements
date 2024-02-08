import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { drawTools, controller, drawBtn } = TEST_SELECTORS;

/**
 * Clicks the draw button and verifies the 'drawing' state.
 */
const clickDrawBtnTest = () => {
  cy.get(drawTools)
    .shadow()
    .within(() => {
      cy.get(controller)
        .shadow()
        .within(() => {
          // Verify the initial state of the draw button
          cy.get(drawBtn).contains("draw");
          cy.get(drawBtn).should("not.contain", "drawing");

          // Click the draw button and verify the 'drawing' state
          cy.get(drawBtn).click();
          cy.get(drawBtn).contains("drawing");
        });
    });

  // TODO: Simulate drawing and add drawn features (not implemented in the current test)
};

export default clickDrawBtnTest;
