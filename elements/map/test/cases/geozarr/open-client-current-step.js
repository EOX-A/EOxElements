import { html } from "lit";
import GeoZarr from "ol/source/GeoZarr";
import {
  STORE_TIME,
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that a layer opens at the slice of the `currentStep` the client passed
 */
const openClientCurrentStep = () => {
  interceptGeoZarrStore();
  // the only way to see which slice the source shows
  cy.spy(GeoZarr.prototype, "updateDimensions").as("updateDimensions");

  cy.mount(
    html`<eox-map
      .layers=${[
        geoZarrLayerDefinition({
          layerDatetime: { currentStep: STORE_TIME[5] },
        }),
      ]}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => {
    const layerDatetime = $el[0].getLayerById("cube").get("layerDatetime");
    expect(layerDatetime.controlValues).to.deep.equal([...STORE_TIME].sort());
    expect(layerDatetime.sliceMap?.[STORE_TIME[5]]).to.equal(5);
  });
  cy.get("@updateDimensions").should("have.been.calledWith", { time: 5 });
};

export default openClientCurrentStep;
