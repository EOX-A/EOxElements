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
      cy.get(controller).within(() => {
        // Verify the initial state of the draw button
        cy.get(drawBtn).should("not.have.attr", "disabled");

        // Click the draw button and verify the 'drawing' state
        cy.get(drawBtn).click();
        cy.get(drawBtn).should("have.attr", "disabled", "disabled");
      });
    });

  // TODO: Simulate drawing and add drawn features (not implemented in the current test)
};

export default clickDrawBtnTest;
