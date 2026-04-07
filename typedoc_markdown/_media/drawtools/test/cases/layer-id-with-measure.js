import { TEST_SELECTORS } from "../../src/enums";
import { STORIES_VECTOR_LAYERS } from "../../src/enums";

const { drawTools } = TEST_SELECTORS;

const layerIdWithMeasure = () => {
  const layerId = "regions";
  cy.get("mock-map").then(($el) => {
    $el[0].layers = STORIES_VECTOR_LAYERS;
  });

  cy.get(drawTools).then(($el) => {
    $el[0].measure = true;
    $el[0].setAttribute("layer-id", layerId);
  });

  cy.get("mock-map").then(($el) => {
    const eoxMap = $el[0];

    // Test that the layerId and measure setup finishes successfully
    // without throwing uncaught errors on load.
    expect(eoxMap).to.not.be.undefined;
  });
};
export default layerIdWithMeasure;
