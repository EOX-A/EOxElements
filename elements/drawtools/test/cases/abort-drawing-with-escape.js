import { TEST_SELECTORS } from "../../src/enums";
const { drawTools } = TEST_SELECTORS;

/**
 * Tests if drawing is aborted when the Escape key is pressed.
 */
const abortDrawingWithEscapeTest = () => {
  cy.get(drawTools).shadow().find('[data-cy="drawBtn"]').click();
  cy.get(drawTools).should(([$el]) => {
    expect($el.currentlyDrawing).to.be.true;
  });

  cy.document().trigger("keydown", { key: "Escape" });

  cy.get(drawTools).should(([$el]) => {
    expect($el.currentlyDrawing).to.be.false;
  });
};

export default abortDrawingWithEscapeTest;
