import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { drawTools, list, deleteFeatureBtn } = TEST_SELECTORS;

const testFeatures = [
  {
    getId: () => "0",
    get: () => null,
  },
  {
    getId: () => "1",
    get: () => null,
  },
];

/**
 * Clicks the draw button and verifies the 'drawing' state.
 */
const featureListTest = () => {
  cy.get(drawTools).and(($el) => {
    $el[0].drawnFeatures = testFeatures;
  });

  cy.get(drawTools)
    .shadow()
    .within(() => {
      cy.get(list).within(() => {
        // Verify the list renders to features
        cy.get("li").should("have.length", testFeatures.length);

        // Click the delete feature button and verify the list only shows one feature
        cy.get(deleteFeatureBtn).first().click();
        cy.get("li").should("have.length", testFeatures.length - 1);
      });
    });
};

export default featureListTest;
