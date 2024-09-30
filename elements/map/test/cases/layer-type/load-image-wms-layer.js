import { html } from "lit";
import imageWmsLayerStyleJson from "../../fixtures/imageWmsLayer.json";

/**
 * Tests to load Image WMS Layer
 */
const loadImageWmsLayer = () => {
  cy.intercept(/^.*geoserver.*$/, {
    fixture: "./map/test/fixtures/tiles/wms/wms0.png",
  });
  cy.mount(html`<eox-map .layers=${imageWmsLayerStyleJson}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.map.getView().setZoom(0);
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(1);
  });
};

export default loadImageWmsLayer;
