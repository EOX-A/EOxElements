import { html } from "lit";
import "../main";
import vectorLayerStyleJson from "./hoverInteraction.json";
import { simulateEvent } from "./utils/events";
import ecoRegionsFixture from "./fixtures/ecoregions.json";

describe("select interaction with hover", () => {
  it("adds a select interaction", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
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

  it("working selection after re-arranging layers", () => {
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    (vectorLayerStyleJson as Array<import("../src/generate").EoxLayer>).push({
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
        const layers = eoxMap.map.getLayers();
        let first = layers.getArray()[0];
        layers.removeAt(0);
        layers.insertAt(1, first);
        first = layers.getArray()[0];
        layers.removeAt(0);
        layers.insertAt(1, first);
        simulateEvent(eoxMap.map, "pointermove", 120, -140); // a feature here
        simulateEvent(eoxMap.map, "pointermove", 0, -140); // no feature here
        simulateEvent(eoxMap.map, "pointermove", 120, -140); // a feature here
      });
    });
  });
});
