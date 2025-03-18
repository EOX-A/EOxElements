import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/hoverInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to check select interaction work after layers re-arranging
 */
const selectAfterReArrangingLayers = () => {
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  vectorLayerStyleJson.push({
    type: "Tile",
    properties: {
      id: "osm",
    },
    source: {
      type: "OSM",
    },
  });

  cy.mount(
    html`<eox-map .layers=${vectorLayerStyleJson}>
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`,
  ).as("eox-map");

  let selectCounter = 0;
  let featureSelectCounter = 0;
  const myPromise = new Promise(resolve => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];

    eoxMap.addEventListener("select", (evt) => {
      selectCounter++;
      // @ts-expect-error TODO
      if (evt.detail.feature) {
        featureSelectCounter++;
      }
      if (selectCounter === 3) {
        // moving the cursor to a feature, moving it off the feature, and onto the feature again
        resolve(featureSelectCounter);
      }
    });
    eoxMap.map.on("loadend", () => {
      /*const layers = eoxMap.map.getLayers();
      let first = layers.getArray()[0];
      layers.removeAt(0);
      layers.insertAt(1, first);
      first = layers.getArray()[0];
      layers.removeAt(0);
      layers.insertAt(1, first);*/
      simulateEvent(eoxMap.map, "pointermove", 120, -140); // a feature here
      simulateEvent(eoxMap.map, "pointermove", 0, -140); // no feature here
      simulateEvent(eoxMap.map, "pointermove", 120, -140); // a feature here
    });

    })
  });

  cy.wrap(myPromise).should('eq', 2);
};

export default selectAfterReArrangingLayers;
