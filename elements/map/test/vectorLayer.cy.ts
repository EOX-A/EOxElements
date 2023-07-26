import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("Vector Layer", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a Vector Layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(vectorLayerStyleJson);
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
      expect(eoxMap.getLayerById("regions")).to.exist;
    });
  });
  it("correctly applies mapbox style", () => {
    cy.get("eox-map").should(($el) => {
      return new Cypress.Promise((resolve) => {
        const eoxMap = <EOxMap>$el[0];
        eoxMap.setLayers(vectorLayerStyleJson);
        const layers = eoxMap.map.getLayers().getArray();
        // wait for features to load
        //@ts-ignore
        layers[0].getSource().on("featuresloadend", () => {
          //@ts-ignore
          const feature = layers[0].getSource().getFeatures()[0];
          //@ts-ignore
          const styles = layers[0].getStyleFunction()(feature);
          // 2 styles expected, one for the stroke, one for the fill.
          expect(styles).to.have.length(2);
          resolve();
        });
      });
    });
  });
});
