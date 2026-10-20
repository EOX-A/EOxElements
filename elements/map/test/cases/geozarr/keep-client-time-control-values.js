import { html } from "lit";
import {
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that `timeControlValues` set by the client are kept as given
 */
const keepClientTimeControlValues = () => {
  interceptGeoZarrStore();
  const clientValues = [{ date: "2026-06-25T00:00:00.000Z" }];

  cy.mount(
    html`<eox-map
      .layers=${[geoZarrLayerDefinition({ timeControlValues: clientValues })]}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => {
    const layer = $el[0].getLayerById("cube");
    // proves that setup has read the time axis
    expect(layer.get("layerDatetime")?.controlValues, "layerDatetime set up").to
      .exist;
    expect(layer.get("timeControlValues")).to.deep.equal(clientValues);
  });
};

export default keepClientTimeControlValues;
