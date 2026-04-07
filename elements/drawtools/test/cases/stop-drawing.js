import { TEST_SELECTORS } from "../../src/enums";

const { drawTools, controller, drawBtn } = TEST_SELECTORS;

/**
 * Tests that stopDrawing() deactivates the draw interaction
 * without discarding existing features.
 */
const stopDrawingTest = () => {
  cy.get(drawTools)
    .shadow()
    .within(() => {
      cy.get(controller).within(() => {
        // Start drawing
        cy.get(drawBtn).click();
        cy.get(drawBtn).should("have.attr", "disabled", "disabled");
      });
    });

  // Verify currently drawing, then call stopDrawing
  cy.get(drawTools).should(($el) => {
    expect($el[0].currentlyDrawing).to.be.true;
  });

  // Record feature count before stopping
  let featureCountBefore;
  cy.get(drawTools).then(($el) => {
    featureCountBefore = $el[0].drawLayer.getSource().getFeatures().length;
    $el[0].stopDrawing();
  });

  // Verify drawing stopped AND features preserved
  cy.get(drawTools).should(($el) => {
    expect($el[0].currentlyDrawing).to.be.false;
    const featuresAfter = $el[0].drawLayer.getSource().getFeatures();
    expect(featuresAfter.length).to.equal(featureCountBefore);
  });
};

export default stopDrawingTest;
