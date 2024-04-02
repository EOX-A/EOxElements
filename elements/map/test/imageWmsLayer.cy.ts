import { html } from "lit";
import "../main";
import imageWmsLayerStyleJson from "./imageWmsLayer.json";

// fixme: imageWMS is identical to tileWMS
describe("layers", () => {
  it("loads a WMS Layer", () => {
    cy.intercept(/^.*geoserver.*$/, {
      fixture: "./map/test/fixtures/tiles/wms/wms0.png",
    });
    cy.mount(html`<eox-map .layers=${imageWmsLayerStyleJson}></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.map.getView().setZoom(0);
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
    });
  });
});
