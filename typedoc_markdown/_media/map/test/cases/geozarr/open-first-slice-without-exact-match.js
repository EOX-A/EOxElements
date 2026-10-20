import { html } from "lit";
import GeoZarr from "ol/source/GeoZarr";
import {
  STORE_TIME,
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that a `currentStep` without an exact match in the store opens the first slice
 */
const openFirstSliceWithoutExactMatch = () => {
  interceptGeoZarrStore();
  // the only way to see which slice the source shows
  cy.spy(GeoZarr.prototype, "updateDimensions").as("updateDimensions");

  cy.mount(
    html`<eox-map
      .layers=${[
        geoZarrLayerDefinition({
          // same day as a store date, but not the exact time
          layerDatetime: { currentStep: "2026-07-11T00:00:00.000Z" },
        }),
      ]}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => {
    const layerDatetime = $el[0].getLayerById("cube").get("layerDatetime");
    // the earliest store date
    expect(layerDatetime.currentStep).to.equal(STORE_TIME[1]);
  });
  cy.get("@updateDimensions").should("have.been.calledWith", { time: 1 });
};

export default openFirstSliceWithoutExactMatch;
