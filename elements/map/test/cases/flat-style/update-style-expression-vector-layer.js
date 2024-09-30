import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/vectorLayer.json";

/**
 * Tests to correctly applies style expression
 */
const updateStyleExpressionVectorLayer = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  vectorLayerStyleJson[0].style = {
    "fill-color": ["string", ["get", "COLOR"], "#eee"],
    "stroke-color": "black",
    "stroke-width": 2,
  };
  cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    return new Cypress.Promise((resolve) => {
      // wait for features to load
      const eoxMap = $el[0];
      const layer = eoxMap.getLayerById("regions");
      const source = layer.getSource();
      source.on("featuresloadend", () => {
        const feature = source.getFeatures()[0];
        const styles = layer.getStyleFunction()(feature, 100);
        expect(styles).to.have.length(1);
        resolve();
      });
    });
  });
};

export default updateStyleExpressionVectorLayer;
