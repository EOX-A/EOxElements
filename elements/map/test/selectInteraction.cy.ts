import { html } from "lit";
import "../main";
import vectorTileLayerJson from "./vectorTilesLayer.json";
import vectorLayerJson from "./vectorLayer.json";
import { simulateEvent } from "./utils/events";
import { EOxInteraction, EoxLayer } from "../src/generate";
import ecoRegionsFixture from "./fixtures/ecoregions.json";

const vectorTileInteraction = [
  {
    type: "select",
    options: {
      id: "selectInteraction",
      condition: "click",
      layer: {
        type: "VectorTile",
        properties: {
          id: "selectLayer",
        },
        source: {
          type: "VectorTile",
        },
        style: {
          "stroke-color": "chartreuse",
          "stroke-width": 5,
        },
      },
    },
  },
];

describe("select interaction on click", () => {
  it("adds a select interaction to VectorTile layer", () => {
    cy.intercept(/^.*geoserver.*$/, {
      fixture:
        "./map/test/fixtures/tiles/mapbox-streets-v6/14/8937/5679.vector.pbf,null",
      encoding: "binary",
    });
    return new Cypress.Promise((resolve) => {
      const layerJson = JSON.parse(
        JSON.stringify(vectorTileLayerJson)
      ) as Array<EoxLayer>;
      layerJson[0].interactions =
        vectorTileInteraction as Array<EOxInteraction>;
      cy.mount(html`<eox-map .layers=${layerJson}></eox-map>`).as("eox-map");
      cy.get("eox-map").and(($el) => {
        const eoxMap = <EOxMap>$el[0];
        eoxMap.addEventListener("select", (evt: CustomEventInit) => {
          expect(evt.detail.feature).to.exist;
          resolve();
        });
        eoxMap.map.on("loadend", () => {
          simulateEvent(eoxMap.map, "click", 65, 13);
        });
      });
    });
  });

  it("adds a select interaction to Vector layer", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    const styleJson = JSON.parse(
      JSON.stringify(vectorLayerJson)
    ) as Array<EoxLayer>;
    styleJson[0].minZoom = 3;
    styleJson[0].interactions = [
      {
        type: "select",
        options: {
          id: "selectInteraction",
          condition: "click",
          style: {
            "stroke-color": "white",
            "stroke-width": 3,
          },
        } as import("../src/select").SelectOptions,
      },
    ];
    cy.mount(html`<eox-map .layers=${styleJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      eoxMap.addEventListener("select", (evt: CustomEventInit) => {
        expect(evt.detail.feature).to.exist;
      });
      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "click", 120, -140);
      });
    });
  });

  it("programmatically highlight by IDs (VectorLayer)", () => {
    return new Cypress.Promise((resolve) => {
      cy.intercept(
        "https://openlayers.org/data/vector/ecoregions.json",
        (req) => {
          req.reply(ecoRegionsFixture);
        }
      );
      const styleJson = JSON.parse(
        JSON.stringify(vectorLayerJson)
      ) as Array<EoxLayer>;
      styleJson[0].interactions = [
        {
          type: "select",
          options: {
            id: "selectInteraction",
            condition: "click",
            style: {
              "stroke-color": "white",
              "stroke-width": 3,
            },
          } as import("../src/select").SelectOptions,
        },
      ];
      cy.mount(
        html`<eox-map .center=${[0, 0]} .layers=${styleJson}></eox-map>`
      ).as("eox-map");

      cy.get("eox-map").and(($el) => {
        const eoxMap = <EOxMap>$el[0];
        eoxMap.map.on("loadend", () => {
          //on loadend, programmatically select a few features...
          eoxMap.selectInteractions.selectInteraction.highlightById(
            [710, 717, 828],
            {
              duration: 400,
              padding: [50, 50, 50, 50],
            }
          );
          // ..and expect the map to animate to them
          setTimeout(() => {
            const center = eoxMap.map.getView().getCenter();
            expect(center, "animates to selected features").to.not.deep.equal([
              0, 0,
            ]);
            resolve();
          }, 200);
        });
      });
    });
  });

  it.only("programmatically highlight by IDs (VectorTileLayer)", () => {
    const layerJson = JSON.parse(
      JSON.stringify(vectorTileLayerJson)
    ) as Array<EoxLayer>;
    layerJson[0].interactions = vectorTileInteraction as Array<EOxInteraction>;
    return new Cypress.Promise((resolve) => {
      cy.intercept(/^.*geoserver.*$/, {
        fixture:
          "./map/test/fixtures/tiles/mapbox-streets-v6/14/8937/5679.vector.pbf,null",
        encoding: "binary",
      });
      layerJson[0].interactions =
        vectorTileInteraction as Array<EOxInteraction>;
      cy.mount(
        html`<eox-map .center=${[0, 0]} .layers=${layerJson}></eox-map>`
      ).as("eox-map");

      cy.get("eox-map").and(($el) => {
        const eoxMap = <EOxMap>$el[0];
        eoxMap.map.on("loadend", () => {
          //on loadend, programmatically select a few features...
          eoxMap.selectInteractions.selectInteraction.highlightById([889], {
            duration: 400,
            padding: [50, 50, 50, 50],
          });
          // ..and expect the map to animate to them
          setTimeout(() => {
            const center = eoxMap.map.getView().getCenter();
            expect(center, "animates to selected features").to.not.deep.equal([
              0, 0,
            ]);
            resolve();
          }, 200);
        });
      });
    });
  });

  it("remove interaction", () => {
    const styleJson = JSON.parse(
      JSON.stringify(vectorTileLayerJson)
    ) as Array<EoxLayer>;
    styleJson[0].interactions = [
      {
        type: "select",
        options: {
          id: "selectInteraction",
          condition: "click",
          style: {
            "stroke-color": "white",
            "stroke-width": 3,
          },
        } as import("../src/select").SelectOptions,
      },
    ];
    cy.mount(html`<eox-map .layers=${styleJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(eoxMap.selectInteractions.selectInteraction).to.exist;
      eoxMap.layers = vectorLayerJson as Array<EoxLayer>;
      expect(eoxMap.selectInteractions.selectInteraction).to.not.exist;
    });
  });
});
