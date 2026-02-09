import { TEST_SELECTORS } from "../../src/enums";

const { drawTools } = TEST_SELECTORS;

const measureTest = () => {
  cy.get(drawTools).then(($el) => {
    const eoxDrawTools = $el[0];
    eoxDrawTools.measure = true;
    const features = eoxDrawTools.drawLayer.getSource().getFeatures();
    if (features && features.length > 0) {
      expect(features[0].get("measure")).to.not.be.undefined;
    }
  });
};

export default measureTest;
