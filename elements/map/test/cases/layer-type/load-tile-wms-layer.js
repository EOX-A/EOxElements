import { html } from "lit";
import tileWmsLayerStyleJson from "../../fixtures/tileWmsLayer.json";

/**
 * Tests to load Tile WMS Layer
 */
const loadTileWmsLayer = () => {
  cy.intercept(/^.*sentinel-hub.*$/, {
    fixture: "./map/test/fixtures/tiles/wms/wms0.png",
  });
  cy.mount(html`<eox-map .layers=${tileWmsLayerStyleJson}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    const layers = $el[0].map.getLayers().getArray();
    expect(layers).to.have.length(1);
    expect(layers[0].get("id")).to.be.equal("customId");
  });
};

export default loadTileWmsLayer;
