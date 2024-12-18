import { html } from "lit";
import { simulateEvent } from "../../utils/events";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerJson from "../../fixtures/vectorLayer.json";

/**
 * Tests to adds a select interaction to Vector layer
 */
const addSelectInteractionVector = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  const styleJson = JSON.parse(JSON.stringify(vectorLayerJson));
  styleJson[0].minZoom = 3;

  cy.mount(html`<eox-map .zoom=${4} .layers=${styleJson}></eox-map>`).as(
    "eox-map",
  );

  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    eoxMap.map.on("loadend", () => {
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
          },
        },
      ];
      eoxMap.layers = styleJson;
      eoxMap.addEventListener("select", (evt) => {
        expect(evt.detail.feature, "adds interaction after update").to.exist;
        expect(
          eoxMap.map.getTargetElement().style.cursor,
          "changes cursor to pointer",
        ).to.be.equal("pointer");
      });
      simulateEvent(eoxMap.map, "pointermove", 120, -140);
      simulateEvent(eoxMap.map, "click", 120, -140);
    });
  });
};

export default addSelectInteractionVector;
