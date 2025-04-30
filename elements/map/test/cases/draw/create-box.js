import { html } from "lit";
import drawInteractionLayerJson from "../../fixtures/drawInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to create box with draw interaction in EOx Map
 */
const createBox = () => {
  drawInteractionLayerJson[0].interactions[0].options.type = "Box";
  drawInteractionLayerJson[0].interactions[0].options.modify = false;
  cy.mount(html`<eox-map .layers=${drawInteractionLayerJson}></eox-map>`).as(
    "eox-map",
  );

  const drawEndPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap.interactions.drawInteraction.on("drawend", (evt) => {
        //@ts-expect-error geojson is defined in drawend event
        const coordinates = evt.feature.getGeometry().getCoordinates()[0];
        const isRectangle =
          coordinates[0][1] === coordinates[1][1] &&
          coordinates[1][0] === coordinates[2][0];
        resolve({ isRectangle });
      });
      eoxMap.map.once("rendercomplete", () => {
        simulateEvent(eoxMap.map, "pointerdown", 50, 80);
        simulateEvent(eoxMap.map, "pointerup", 50, 80);

        simulateEvent(eoxMap.map, "pointerdown", -50, -50);
        simulateEvent(eoxMap.map, "pointerup", -50, -50);
      });
    });
  });
  cy.wrap(drawEndPromise).then((payload) => {
    expect(payload.isRectangle, "create Box").to.be.true;
  });
};

export default createBox;
