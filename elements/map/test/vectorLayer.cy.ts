import "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
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
  it("correctly applies flat style", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    // @ts-ignore
    vectorLayerStyleJson[0].style = {
      "fill-color": "yellow",
      "stroke-color": "black",
      "stroke-width": 2,
    };
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      return new Cypress.Promise((resolve) => {
        const layers = (<EOxMap>$el[0]).map.getLayers().getArray();
        // wait for features to load
        // @ts-ignore
        layers[0].getSource().on("featuresloadend", () => {
          // @ts-ignore
          const feature = layers[0].getSource().getFeatures()[0];
          // @ts-ignore
          const styles = layers[0].getStyleFunction()(feature);
          expect(styles).to.have.length(1);
          resolve();
        });
      });
    });
  });
  it("correctly applies style expression", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    vectorLayerStyleJson[0].style = {
      // @ts-ignore
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
      "stroke-color": "black",
      "stroke-width": 2,
    };
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      return new Cypress.Promise((resolve) => {
        // wait for features to load
        const eoxMap = <EOxMap>$el[0];
        const layer = eoxMap.getLayerById(
          "regions"
        ) as import("ol/layer").Vector<import("ol/source").Vector>;
        layer.getSource().on("featuresloadend", () => {
          const feature = layer.getSource().getFeatures()[0];
          const styles = layer.getStyleFunction()(feature, 100);
          expect(styles).to.have.length(1);
          resolve();
        });
      });
    });
  });
});
