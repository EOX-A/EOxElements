import { html } from "lit";
import {
  STORE_TIME,
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that the time properties the client did not set are filled from the store
 */
const fillTimePropertiesFromStore = () => {
  interceptGeoZarrStore();
  const storeDates = [...STORE_TIME].sort();

  cy.mount(html`<eox-map .layers=${[geoZarrLayerDefinition()]}></eox-map>`).as(
    "eox-map",
  );

  cy.get("eox-map").should(($el) => {
    const layer = $el[0].getLayerById("cube");
    expect(layer.get("layerDatetime")?.controlValues).to.deep.equal(storeDates);
    expect(layer.get("timeControlValues")).to.deep.equal(
      storeDates.map((date) => ({ date })),
    );
  });
};

export default fillTimePropertiesFromStore;
