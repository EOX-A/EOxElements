import { html } from "lit";
import {
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr";

/**
 * Tests that a time property the client set to `false` is not set up
 */
const skipTimePropertySetToFalse = (property) => {
  interceptGeoZarrStore();
  const otherProperty =
    property === "layerDatetime" ? "timeControlValues" : "layerDatetime";

  cy.mount(
    html`<eox-map
      .layers=${[geoZarrLayerDefinition({ [property]: false })]}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => {
    const layer = $el[0].getLayerById("cube");
    // proves that setup has read the time axis
    expect(layer.get(otherProperty), `${otherProperty} set up`).to.exist;
    expect(layer.get(property)).to.equal(false);
  });
};

export default skipTimePropertySetToFalse;
