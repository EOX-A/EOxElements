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
  cy.mount(html`<eox-map .layers=${styleJson}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    eoxMap.addEventListener("select", (evt) => {
      expect(evt.detail.feature).to.exist;
    });
    eoxMap.map.on("loadend", () => {
      simulateEvent(eoxMap.map, "click", 120, -140);
    });
  });
};

export default addSelectInteractionVector;
