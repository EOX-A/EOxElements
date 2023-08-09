import "../main";
import imageWmsLayerStyleJson from "./imageWmsLayer.json";

// fixme: imageWMS is identical to tileWMS
describe("layers", () => {
  it("loads a WMS Layer", () => {
    cy.mount(`<eox-map layers='${JSON.stringify(imageWmsLayerStyleJson)}'></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(imageWmsLayerStyleJson);
      eoxMap.map.getView().setZoom(0);
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
    })
  });
});
