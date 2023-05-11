import { EOxMap } from "../main";
import mapboxStyleJson from "./layers.json";

describe("layers", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a set of layers from a JSON", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(mapboxStyleJson);
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(mapboxStyleJson.length);
      mapboxStyleJson.forEach((mapboxStyleJson) => {
        const existingLayer = layers.find(
          (layer) => layer.get("title") === mapboxStyleJson.title
        );
        expect(existingLayer).to.exist;
      });
    });
  });
});
