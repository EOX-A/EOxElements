import { TEST_SELECTORS } from "../../src/enums";

const { drawTools } = TEST_SELECTORS;

/**
 * Tests that suppressEvents prevents drawupdate event emission
 * during programmatic feature changes.
 */
const suppressEventsTest = () => {
  // Set up event listener stub
  cy.get(drawTools).then(($el) => {
    $el[0].addEventListener("drawupdate", cy.stub().as("drawUpdateStub"));
  });

  // Enable suppressEvents, then trigger emitDrawnFeatures
  cy.get(drawTools).then(($el) => {
    $el[0].suppressEvents = true;
    $el[0].emitDrawnFeatures();
  });

  // Wait for the setTimeout(0) in emitDrawnFeatures to complete
  cy.wait(50);

  // Verify drawupdate was NOT fired
  cy.get("@drawUpdateStub").should("not.be.called");

  // Disable suppressEvents and trigger again
  cy.get(drawTools).then(($el) => {
    $el[0].suppressEvents = false;
    $el[0].emitDrawnFeatures();
  });

  // Wait for the setTimeout(0) again
  cy.wait(50);

  // Verify drawupdate was fired this time
  cy.get("@drawUpdateStub").should("be.calledOnce");
};

export default suppressEventsTest;
