import "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import vectorLayerJson from "./vectorLayer.json";
import { simulateEvent } from "./utils/events";

describe("select interaction on click", () => {
  it("adds a select interaction to VectorTile layer", () => {
    return new Cypress.Promise((resolve) => {
      cy.mount(
        `<eox-map layers='${JSON.stringify(
          vectorTileLayerStyleJson
        )}'></eox-map>`
      ).as("eox-map");
      cy.get("eox-map").and(($el) => {
        const eoxMap = <EOxMap>$el[0];
        eoxMap.addEventListener("select", (evt) => {
          //@ts-ignore
          expect(evt.detail.feature).to.exist;
          resolve();
        });
        eoxMap
          .addSelect("countries", {
            id: "selectInteraction",
            condition: "click",
            idProperty: "formal_en",
            layer: {
              type: "VectorTile",
              properties: {
                id: "selectLayer",
              },
              source: {
                type: "VectorTile",
              },
              style: {
                "stroke-color": "white",
                "stroke-width": 3,
              },
            },
          })
          .then(() => {
            setTimeout(() => {
              simulateEvent(eoxMap.map, "click", 120, -140);
            }, 1000);
          });
      });
    });
  });
  it("adds a select interaction to Vector layer", () => {
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      eoxMap.addEventListener("select", (evt) => {
        //@ts-ignore
        expect(evt.detail.feature).to.exist;
      });

      eoxMap
        .addSelect("regions", {
          id: "selectInteraction",
          condition: "click",
          //@ts-ignore
          style: {
            "stroke-color": "white",
            "stroke-width": 3,
          },
        })
        .then(() => {
          setTimeout(() => {
            simulateEvent(eoxMap.map, "click", 120, -140);
          }, 1000);
        });
    });
  });
});
