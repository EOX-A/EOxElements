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
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    eoxMap.addEventListener("drawend", (evt) => {
      //@ts-expect-error geojson is defined in drawend event
      const geojson = evt.detail.geojson;
      expect(geojson.properties.measure).to.be.greaterThan(0);
      const coordinates = geojson.geometry.coordinates[0];
      const isRectangle =
        coordinates[0][1] === coordinates[1][1] &&
        coordinates[1][0] === coordinates[2][0];
      expect(isRectangle, "create Box").to.be.true;
    });
    simulateEvent(eoxMap.map, "pointerdown", 50, 80);
    simulateEvent(eoxMap.map, "pointerup", 50, 80);

    simulateEvent(eoxMap.map, "pointerdown", -50, -50);
    simulateEvent(eoxMap.map, "pointerup", -50, -50);

    expect(
      eoxMap.interactions.drawInteraction_modify.getActive(),
      "consider modify active flag"
    ).to.be.equal(false);
    const newLayerJson = [drawInteractionLayerJson[0]];
    newLayerJson[0].interactions[0].options.modify = true;
    eoxMap.layers = newLayerJson;
    expect(
      eoxMap.interactions.drawInteraction_modify.getActive(),
      "reactively activate modify"
    ).to.be.equal(true);
  });
};

export default createBox;
