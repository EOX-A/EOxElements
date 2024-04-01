import { html } from "lit";
import "../main";
import vectorLayerStyleJson from "./hoverInteraction.json";
import { simulateEvent } from "./utils/events";
import ecoRegionsFixture from "./fixtures/ecoregions.json"

describe("select interaction with hover", () => {
  it("adds a select interaction", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
      req.reply(ecoRegionsFixture)
    });
    cy.mount(
      html`<eox-map .layers=${vectorLayerStyleJson}>
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      let selectCounter = 0;
      let featureSelectCounter = 0;
      eoxMap.addEventListener("select", (evt) => {
        selectCounter++;
        // @ts-ignore
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
  });
});
