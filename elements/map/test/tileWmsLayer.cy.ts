import { EOxMap } from "../main";
import tileWmsLayerStyleJson from "./tileWmsLayer.json";

describe("layers", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a tiled WMS Layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(tileWmsLayerStyleJson);

      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
      expect(layers[0].get("id")).to.be.equal("customId");
    });
  });
});
