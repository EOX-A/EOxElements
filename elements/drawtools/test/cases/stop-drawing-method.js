import { TEST_SELECTORS } from "../../src/enums";
const { drawTools } = TEST_SELECTORS;

/**
 * Tests if drawing is stopped when the stopDrawing method is called.
 */
const stopDrawingMethodTest = () => {
  cy.get(drawTools).shadow().find('[data-cy="drawBtn"]').click();
  cy.get(drawTools).should(([$el]) => {
    expect($el.currentlyDrawing).to.be.true;
  });

  cy.get(drawTools).then(([$el]) => {
    $el.stopDrawing();
  });

  cy.get(drawTools).should(([$el]) => {
    expect($el.currentlyDrawing).to.be.false;
  });
};

export default stopDrawingMethodTest;
