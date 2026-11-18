import { html } from "lit";
import GeoZarr from "ol/source/GeoZarr";
import {
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that an update which changes no time property and keeps the source does not repeat the time setup
 */
const skipSetupOnUnrelatedUpdate = () => {
  interceptGeoZarrStore();
  // the time setup calls `source.ready()` synchronously when it starts
  cy.spy(GeoZarr.prototype, "ready").as("ready");

  cy.mount(html`<eox-map .layers=${[geoZarrLayerDefinition()]}></eox-map>`).as(
    "eox-map",
  );

  cy.get("eox-map")
    .should(($el) => {
      const layer = $el[0].getLayerById("cube");
      expect(layer.get("layerDatetime")?.sliceMap).to.exist;
    })
    .then(($el) => {
      cy.get("@ready").then((spy) => {
        spy.resetHistory();
        $el[0].addOrUpdateLayer(geoZarrLayerDefinition({ title: "Cube" }));
        expect(spy).to.not.have.been.called;
      });
    });
};

export default skipSetupOnUnrelatedUpdate;
