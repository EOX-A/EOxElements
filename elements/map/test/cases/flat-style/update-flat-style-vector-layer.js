import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/vectorLayer.json";

/**
 * Tests to correctly update flat style on Vector Layer
 */
const updateFlatStyleVectorLayer = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  vectorLayerStyleJson[0].style = {
    "fill-color": "yellow",
    "stroke-color": "black",
    "stroke-width": 2,
  };
  cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
    "eox-map",
  );

  const stylePromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const layer = $el[0].map.getLayers().getArray()[0];
      // wait for features to load
      layer.getSource().on("featuresloadend", () => {
        const feature = layer.getSource().getFeatures()[0];
        const styles = layer.getStyleFunction()(feature, 1);
        resolve(styles);
      });
    });
  });
  cy.wrap(stylePromise).then((styles) => {
    expect(styles).to.have.length(1);
  });
};

export default updateFlatStyleVectorLayer;
