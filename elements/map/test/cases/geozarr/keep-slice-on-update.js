import { html } from "lit";
import GeoZarr from "ol/source/GeoZarr";
import {
  STORE_TIME,
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that an update with a new source keeps the slice the user stepped to
 */
const keepSliceOnUpdate = () => {
  interceptGeoZarrStore();
  let eoxMap;
  // the only way to see which slice the source shows
  cy.spy(GeoZarr.prototype, "updateDimensions").as("updateDimensions");

  cy.mount(html`<eox-map .layers=${[geoZarrLayerDefinition()]}></eox-map>`).as(
    "eox-map",
  );

  cy.get("eox-map")
    .should(($el) => {
      const layer = $el[0].getLayerById("cube");
      expect(layer.get("layerDatetime")?.sliceMap).to.exist;
    })
    .then(($el) => {
      eoxMap = $el[0];
      // the datetime tool steps by changing `currentStep` in place
      eoxMap.getLayerById("cube").get("layerDatetime").currentStep =
        STORE_TIME[2];
      // new bands, so the layer gets a new source
      eoxMap.addOrUpdateLayer(geoZarrLayerDefinition({}, ["vh"]));
    });

  cy.get("@updateDimensions").should((spy) => {
    const layer = eoxMap.getLayerById("cube");
    expect(spy.lastCall.thisValue, "new source").to.equal(layer.getSource());
    expect(spy.lastCall.args[0]).to.deep.equal({ time: 2 });
    expect(layer.get("layerDatetime").currentStep).to.equal(STORE_TIME[2]);
  });
};

export default keepSliceOnUpdate;
