import "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
      expect(eoxMap.getLayerById("regions")).to.exist;
    });
  });
  it("correctly applies mapbox style", () => {
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      return new Cypress.Promise((resolve) => {
        const layers = (<EOxMap>$el[0]).map.getLayers().getArray();
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
  it("correctly applies flat style", () => {
    vectorLayerStyleJson[0].style = {
      // @ts-ignore
      "fill-color": "yellow",
      "stroke-color": "black",
      "stroke-width": 4,
    };
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      return new Cypress.Promise((resolve) => {
        const layers = (<EOxMap>$el[0]).map.getLayers().getArray();
        // wait for features to load
        //@ts-ignore
        layers[0].getSource().on("featuresloadend", () => {
          //@ts-ignore
          const feature = layers[0].getSource().getFeatures()[0];
          //@ts-ignore
          const styles = layers[0].getStyleFunction()(feature);
          expect(styles).to.have.length(1);
          resolve();
        });
      });
    });
  });
});
