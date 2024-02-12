import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { drawTools, controller, drawBtn, discardBtn } = TEST_SELECTORS;

/**
 * Clicks the discard button and verifies if drawn features are cleared.
 */
const clickDiscardBtnTest = () => {
  cy.get(drawTools)
    .shadow()
    .within(() => {
      cy.get(controller)
        .shadow()
        .within(() => {
          // Click the draw button and verify if it is in the 'drawing' state
          cy.get(drawBtn).click();
          cy.get(drawBtn).contains("drawing");

          // Click the discard button and verify if the 'drawing' state is removed
          cy.get(discardBtn).click();
          cy.get(drawBtn).should("not.contain", "drawing");
        });
    });

  // Verify if drawn features array is empty after discarding
  cy.get(drawTools).should(($el) => {
    expect($el[0].drawnFeatures).to.have.length(0);
  });
};

export default clickDiscardBtnTest;
