import { html } from "lit";
import GeoZarr from "ol/source/GeoZarr";
import {
  STORE_TIME,
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that an update with new bands opens the new source at the slice the user stepped to,
 * without requesting the first slice or switching slices afterwards
 */
const keepSliceOnUpdate = () => {
  interceptGeoZarrStore();
  let eoxMap;
  let steppedDatetime;
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
      steppedDatetime = eoxMap.getLayerById("cube").get("layerDatetime");
      // the datetime tool steps by changing `currentStep` in place
      steppedDatetime.currentStep = STORE_TIME[2];
      // new bands, so the layer gets a new source
      eoxMap.addOrUpdateLayer(geoZarrLayerDefinition({}, ["vh"]));
    });

  // the time setup has run again on the new source
  cy.get("eox-map").should(() => {
    const layer = eoxMap.getLayerById("cube");
    expect(layer.get("layerDatetime")).to.not.equal(steppedDatetime);
    expect(layer.get("layerDatetime").currentStep).to.equal(STORE_TIME[2]);
  });

  cy.get("@bandShards.all").should((requests) => {
    const urls = requests.map(({ request }) => request.url);
    expect(urls.some((url) => url.endsWith("/vh/c/2/0/0"))).to.be.true;
    expect(urls.some((url) => url.endsWith("/vh/c/0/0/0"))).to.be.false;
  });

  // a second switch to the same slice would load it again
  cy.get("@updateDimensions").then((spy) => {
    const source = eoxMap.getLayerById("cube").getSource();
    const calls = spy.getCalls().filter((call) => call.thisValue === source);
    expect(calls.map((call) => call.args[0])).to.deep.equal([{ time: 2 }]);
  });
};

export default keepSliceOnUpdate;
