import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/hoverInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to add select interaction in EOx Map
 */
const addSelectInteraction = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.mount(
    html`<eox-map .layers=${vectorLayerStyleJson}>
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    let selectCounter = 0;
    let featureSelectCounter = 0;
    eoxMap.addEventListener("select", (evt) => {
      selectCounter++;
      // @ts-expect error TODO
      if (evt.detail.feature) {
        featureSelectCounter++;
      }
      if (selectCounter === 3) {
        // moving the cursor to a feature, moving it off the feature, and onto the feature again
        expect(featureSelectCounter).to.be.equal(2);
      }
    });

    eoxMap.map.on("loadend", () => {
      simulateEvent(eoxMap.map, "pointermove", 120, -140); // a feature here
      simulateEvent(eoxMap.map, "pointermove", 0, -140); // no feature here
      simulateEvent(eoxMap.map, "pointermove", 120, -140); // a feature here
    });
  });
};

export default addSelectInteraction;
