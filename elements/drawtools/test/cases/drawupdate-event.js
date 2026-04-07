import { TEST_SELECTORS } from "../../src/enums";

/**
 * Test to ensure drawupdate event is fired exactly once per 'addfeatures' map event.
 */
const drawUpdateEventTest = () => {
  cy.get(TEST_SELECTORS.drawTools).then(($el) => {
    const drawtools = $el[0];
    let count = 0;
    drawtools.addEventListener("drawupdate", () => count++);

    cy.get("mock-map").then(($mapEl) => {
      const map = $mapEl[0];

      map.dispatchEvent(new CustomEvent("addfeatures"));
    });

    // Wait for the async setTimeout in emitDrawnFeaturesMethod
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(50).then(() => {
      expect(count).to.eq(1, "should emit only once for one addfeatures event");

      cy.get("mock-map").then(($mapEl) => {
        $mapEl[0].dispatchEvent(new CustomEvent("addfeatures"));
      });
    });

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(50).then(() => {
      expect(count).to.eq(
        2,
        "should emit exactly twice for two addfeatures events",
      );
    });
  });
};

export default drawUpdateEventTest;
