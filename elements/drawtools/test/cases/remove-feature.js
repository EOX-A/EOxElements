import { TEST_SELECTORS } from "../../src/enums/index.js";
const { drawTools } = TEST_SELECTORS;

const removeFeatureTest = () => {
  cy.get(drawTools).then(($el) => {
    const eoxDrawTools = $el[0];

    // Mock features as simple objects
    const mockFeature1 = {
      getGeometry: () => ({ transform: () => {} }),
      clone: () => mockFeature1,
      setGeometry: () => {},
    };
    const mockFeature2 = {
      getGeometry: () => ({ transform: () => {} }),
      clone: () => mockFeature2,
      setGeometry: () => {},
    };
    const mockFeature3 = {
      getGeometry: () => ({ transform: () => {} }),
      clone: () => mockFeature3,
      setGeometry: () => {},
    };

    // Set drawn features
    eoxDrawTools.drawnFeatures = [mockFeature1, mockFeature2, mockFeature3];
    expect(eoxDrawTools.drawnFeatures.length).to.equal(3);

    // Test removeFeatureByIndex
    eoxDrawTools.removeFeatureByIndex(1);
    expect(eoxDrawTools.drawnFeatures.length).to.equal(2);
    expect(eoxDrawTools.drawnFeatures.includes(mockFeature2)).to.be.false;

    // Test removeFeature
    eoxDrawTools.removeFeature(mockFeature1);
    expect(eoxDrawTools.drawnFeatures.length).to.equal(1);
    expect(eoxDrawTools.drawnFeatures.includes(mockFeature1)).to.be.false;
    expect(eoxDrawTools.drawnFeatures[0]).to.equal(mockFeature3);
  });
};

export default removeFeatureTest;
