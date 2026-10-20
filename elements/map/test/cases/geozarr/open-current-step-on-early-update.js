import { html } from "lit";
import GeoZarr from "ol/source/GeoZarr";
import {
  STORE_TIME,
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that an update with new bands before the time setup has finished still opens the client `currentStep`
 */
const openCurrentStepOnEarlyUpdate = () => {
  interceptGeoZarrStore();
  let eoxMap;
  // the only way to see which slice the source shows
  cy.spy(GeoZarr.prototype, "updateDimensions").as("updateDimensions");
  const properties = { layerDatetime: { currentStep: STORE_TIME[2] } };

  cy.mount(
    html`<eox-map .layers=${[geoZarrLayerDefinition(properties)]}></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map")
    .should(($el) => {
      expect($el[0].getLayerById("cube")).to.exist;
    })
    .then(($el) => {
      eoxMap = $el[0];
      // no slice index is known yet
      expect(eoxMap.getLayerById("cube").get("layerDatetime").sliceMap).to.not
        .exist;
      eoxMap.addOrUpdateLayer(geoZarrLayerDefinition(properties, ["vh"]));
    });

  cy.get("@updateDimensions").should((spy) => {
    const layer = eoxMap.getLayerById("cube");
    const calls = spy
      .getCalls()
      .filter((call) => call.thisValue === layer.getSource());
    expect(calls.map((call) => call.args[0])).to.deep.include({ time: 2 });
    expect(layer.get("layerDatetime").currentStep).to.equal(STORE_TIME[2]);
  });
};

export default openCurrentStepOnEarlyUpdate;
