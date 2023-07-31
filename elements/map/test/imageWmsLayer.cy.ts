import { EOxMap } from "../main";
import imageWmsLayerStyleJson from "./imageWmsLayer.json";

// fixme: imageWMS is identical to tileWMS
describe("layers", () => {
  it("loads a WMS Layer", () => {
    const eoxMap = new EOxMap();
    // @ts-ignore
    cy.mount(eoxMap).as("eox-map");
    eoxMap.setLayers(imageWmsLayerStyleJson);
    eoxMap.map.getView().setZoom(0);
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(1);
  });
});
