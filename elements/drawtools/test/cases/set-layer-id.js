import { TEST_SELECTORS } from "../../src/enums";
import { STORIES_VECTOR_LAYERS } from "../../src/enums";

const { drawTools, drawBtn } = TEST_SELECTORS;

/**
 * Test to verify the "layer-id" attribute in the drawtools element.
 */
const setLayerId = () => {
  const layerId = "regions";
  cy.get("mock-map").then(($el) => {
    cy.log($el[0]);
    $el[0].layers = STORIES_VECTOR_LAYERS;
  });

  cy.get(drawTools).then(($el) => {
    cy.log(drawTools.eoxMap);
    $el[0].setAttribute("layer-id", layerId);
  });

  cy.get(drawTools)
    .shadow()
    .within(() => {
      cy.get(drawBtn).trigger("mouseover");
      cy.get(drawBtn).should("have.css", "cursor", "pointer");
    });
};

export default setLayerId;
