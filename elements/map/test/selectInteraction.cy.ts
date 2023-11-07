import "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import vectorLayerJson from "./vectorLayer.json";
import { simulateEvent } from "./utils/events";
import { EoxLayer } from "../src/generate";

describe("select interaction on click", () => {
  it("adds a select interaction to VectorTile layer", () => {
    cy.intercept(/^.*geoserver.*$/, {
      fixture: "/tiles/mapbox-streets-v6/14/8937/5679.vector.pbf,null",
      encoding: "binary",
    });
    return new Cypress.Promise((resolve) => {
      const styleJson = vectorTileLayerStyleJson as Array<EoxLayer>;
      styleJson[0].interactions = [
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
      cy.mount(`<eox-map layers='${JSON.stringify(styleJson)}'></eox-map>`).as(
        "eox-map"
      );
      cy.get("eox-map").and(($el) => {
        const eoxMap = <EOxMap>$el[0];
        eoxMap.addEventListener("select", (evt) => {
          // @ts-ignore
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
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    const styleJson = vectorLayerJson as Array<EoxLayer>;
    styleJson[0].interactions = [
      {
        type: "select",
        //@ts-ignore
        options: {
          id: "selectInteraction",
          condition: "click",
          style: {
            "stroke-color": "white",
            "stroke-width": 3,
          },
        },
      },
    ];
    cy.mount(`<eox-map layers='${JSON.stringify(styleJson)}'></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      eoxMap.addEventListener("select", (evt) => {
        // @ts-ignore
        expect(evt.detail.feature).to.exist;
      });
      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "click", 120, -140);
      });
    });
  });
});
