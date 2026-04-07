import { TEST_SELECTORS } from "../../src/enums";

const { drawTools } = TEST_SELECTORS;

/**
 * Tests that removeFeatureByIndex removes the correct feature from the draw
 * layer source and emits a drawupdate event.
 */
const removeFeatureByIndexTest = () => {
  // Set up event listener stub
  cy.get(drawTools).then(($el) => {
    $el[0].addEventListener("drawupdate", cy.stub().as("drawUpdateStub"));
  });

  // The mock map starts with 2 features in the source.
  // Remove index 0 — the second feature should remain.
  cy.get(drawTools).then(($el) => {
    const source = $el[0].drawLayer.getSource();
    const featuresBefore = source.getFeatures();
    expect(featuresBefore).to.have.length(2);

    // Keep a reference to the second feature to verify it survives
    const secondFeature = featuresBefore[1];

    const result = $el[0].removeFeatureByIndex(0);
    expect(result).to.be.true;

    // Verify the correct feature was removed
    const featuresAfter = source.getFeatures();
    expect(featuresAfter).to.have.length(1);
    expect(featuresAfter[0]).to.equal(secondFeature);
  });

  // Wait for the setTimeout(0) in emitDrawnFeatures
  cy.wait(50);

  // Verify drawupdate was fired
  cy.get("@drawUpdateStub").should("be.called");

  // Test out-of-bounds returns false
  cy.get(drawTools).then(($el) => {
    expect($el[0].removeFeatureByIndex(-1)).to.be.false;
    expect($el[0].removeFeatureByIndex(999)).to.be.false;
  });
};

export default removeFeatureByIndexTest;
