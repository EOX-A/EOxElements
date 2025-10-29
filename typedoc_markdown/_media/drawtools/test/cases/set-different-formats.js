import { TEST_SELECTORS } from "../../src/enums";

const { drawTools } = TEST_SELECTORS;

/**
 * Test to verify the drawn features are emitted in different formats
 */
const setDifferentFormats = () => {
  const testFeatureFormat = () => {
    cy.get(drawTools).then(($el) => {
      $el[0].addEventListener("drawupdate", cy.stub().as("drawUpdateStub"));
      $el[0].setAttribute("format", "feature");
      $el[0].emitDrawnFeatures();
    });
    cy.get("@drawUpdateStub")
      .should("be.called")
      .its("lastCall.args.0.detail")
      .should("be.an", "array");
  };

  const testGeoJSONFormat = () => {
    cy.get(drawTools).then(($el) => {
      $el[0].addEventListener("drawupdate", cy.stub().as("drawUpdateStub"));
      $el[0].setAttribute("format", "geojson");
      $el[0].emitDrawnFeatures();
    });
    cy.get("@drawUpdateStub")
      .should("be.called")
      .its("lastCall.args.0.detail")
      .should("be.an", "object")
      .and((val) => {
        expect(val).to.have.property("type", "FeatureCollection");
        expect(val).to.have.property("features");
      });
  };

  const testWKTFormat = () => {
    cy.get(drawTools).then(($el) => {
      $el[0].addEventListener("drawupdate", cy.stub().as("drawUpdateStub"));
      $el[0].setAttribute("format", "wkt");
      $el[0].emitDrawnFeatures();
    });
    cy.get("@drawUpdateStub")
      .should("be.called")
      .its("lastCall.args.0.detail")
      .should("be.a", "string");
  };
  testFeatureFormat();
  testWKTFormat();
  testGeoJSONFormat();
};
export default setDifferentFormats;
