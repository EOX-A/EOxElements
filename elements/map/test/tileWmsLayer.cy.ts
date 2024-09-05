import { html } from "lit";
import "../src-2/main";
import tileWmsLayerStyleJson from "./tileWmsLayer.json";

describe("layers", () => {
  it("loads a tiled WMS Layer", () => {
    cy.intercept(/^.*sentinel-hub.*$/, {
      fixture: "./map/test/fixtures/tiles/wms/wms0.png",
    });
    cy.mount(html`<eox-map .layers=${tileWmsLayerStyleJson}></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      const layers = (<EOxMap>$el[0]).map.getLayers().getArray();
      expect(layers).to.have.length(1);
      expect(layers[0].get("id")).to.be.equal("customId");
    });
  });
});
