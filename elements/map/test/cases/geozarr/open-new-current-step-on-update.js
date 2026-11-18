import { html } from "lit";
import GeoZarr from "ol/source/GeoZarr";
import {
  STORE_TIME,
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that an update with a different `currentStep` opens that slice
 */
const openNewCurrentStepOnUpdate = () => {
  interceptGeoZarrStore();
  let eoxMap;
  // the only way to see which slice the source shows
  cy.spy(GeoZarr.prototype, "updateDimensions").as("updateDimensions");

  cy.mount(
    html`<eox-map
      .layers=${[
        geoZarrLayerDefinition({
          layerDatetime: { currentStep: STORE_TIME[0] },
        }),
      ]}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map")
    .should(($el) => {
      const layer = $el[0].getLayerById("cube");
      expect(layer.get("layerDatetime")?.sliceMap).to.exist;
    })
    .then(($el) => {
      eoxMap = $el[0];
      // the user stepped, then the client asks for another date (same source)
      eoxMap.getLayerById("cube").get("layerDatetime").currentStep =
        STORE_TIME[2];
      eoxMap.addOrUpdateLayer(
        geoZarrLayerDefinition({
          layerDatetime: { currentStep: STORE_TIME[4] },
        }),
      );
    });

  cy.get("@updateDimensions").should((spy) => {
    const layer = eoxMap.getLayerById("cube");
    expect(spy.lastCall.thisValue, "same source").to.equal(layer.getSource());
    expect(spy.lastCall.args[0]).to.deep.equal({ time: 4 });
    expect(layer.get("layerDatetime").currentStep).to.equal(STORE_TIME[4]);
    expect(layer.get("layerDatetime").sliceMap).to.exist;
  });
};

export default openNewCurrentStepOnUpdate;
