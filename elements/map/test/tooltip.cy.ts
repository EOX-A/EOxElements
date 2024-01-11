import { html } from "lit";
import "../main";
import vectorLayerStyleJson from "./hoverInteraction.json";
import { simulateEvent } from "./utils/events";
import { EoxLayer } from "../src/generate";

describe("tooltip", () => {
  it("displays a tooltip on hover", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    cy.mount(
      html`<eox-map .layers=${vectorLayerStyleJson}>
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "pointermove", 120, -140);
      });
    });
    cy.get("eox-map")
      .shadow()
      .within(() => {
        console.log("here");
        cy.get("eox-map-tooltip").should("exist");
        cy.get("eox-map-tooltip").and(($el) => {
          console.log($el[0]);
        });
        cy.get("eox-map-tooltip")
          .shadow()
          .within(() => {
            cy.get("ul").should("exist");
            cy.get("ul").children().should("have.length", 9);
          });
      });
  });

  it.only("displays a tooltip on hover when multiple layers are initialized and only one visible", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    const multiplelayersJson = [...vectorLayerStyleJson] as EoxLayer[];
    const secondLayer = structuredClone(vectorLayerStyleJson[0]) as EoxLayer;
    multiplelayersJson.unshift(secondLayer);
    secondLayer.properties.id = "regions2";
    secondLayer.interactions[0].options.id = "selectInteraction2";
    // @ts-ignore
    secondLayer.interactions[0].options.layer.properties.id = "selectLayer2";
    secondLayer.visible = false;
    console.log(multiplelayersJson);
    cy.mount(
      html`<eox-map .layers=${multiplelayersJson}>
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "pointermove", 120, -140);
      });
    });

    // first check if the tooltip on the first rendered layer works
    cy.get("eox-map")
      .shadow()
      .within(() => {
        cy.get("eox-map-tooltip").should("exist");
        cy.get("#_eoxTooltip_selectInteraction")
          .shadow()
          .within(() => {
            cy.get("ul").should("exist");
            cy.get("ul").children().should("have.length", 9);
          });
      });

    // hide first rendered layer and show second layer
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.map.getLayers().getArray()[0].setVisible(false);
      eoxMap.map.getLayers().getArray()[1].setVisible(true);
      setTimeout(() => {
        simulateEvent(eoxMap.map, "pointermove", 120, -141);
      }, 1000)
    });


    // check if the tooltip on the second rendered layer works
    cy.get("eox-map")
      .shadow()
      .within(() => {
        cy.get("eox-map-tooltip").should("exist");
        cy.get("#_eoxTooltip_selectInteraction2")
          .shadow()
          .within(() => {
            cy.get("ul").should("exist");
            cy.get("ul").children().should("have.length", 9);
          });
      });
  });
});
