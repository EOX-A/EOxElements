import { html } from "lit";
import vectorLayerJson from "../../fixtures/vectorLayer.json";
import vectorTileLayerJson from "../../fixtures/vectorTilesLayer.json";

/**
 * Tests to remove interaction
 */
const removeSelectInteraction = () => {
  const styleJson = JSON.parse(JSON.stringify(vectorTileLayerJson));
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
    expect(eoxMap.selectInteractions.selectInteraction).to.exist;
    eoxMap.layers = vectorLayerJson;
    expect(eoxMap.selectInteractions.selectInteraction).to.not.exist;
  });
};

export default removeSelectInteraction;
