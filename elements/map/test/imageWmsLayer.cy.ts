import { EOxMap } from "../main";
import imageWmsLayerStyleJson from "./imageWmsLayer.json";

// fixme: imageWMS is identical to tileWMS
describe("layers", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a WMS Layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(imageWmsLayerStyleJson);
      eoxMap.map.getView().setZoom(0);
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
    });
  });
});
