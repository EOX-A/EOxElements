import { html } from "lit";
import drawInteractionLayerJson from "../../fixtures/drawInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to create correct geometry with draw interaction in EOx Map
 */
const createGeometry = () => {
  cy.mount(html`<eox-map .layers=${drawInteractionLayerJson}></eox-map>`).as(
    "eox-map",
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    simulateEvent(eoxMap.map, "pointerdown", 10, 20);
    simulateEvent(eoxMap.map, "pointerup", 10, 20);
    const drawLayer = eoxMap.getLayerById("drawLayer");
    const features = drawLayer.getSource().getFeatures();
    const geometry = features[0].getGeometry();
    expect(features).to.have.length(1);
    expect(geometry.getCoordinates().length).to.be.equal(2);
    const buffer = eoxMap.buffer(geometry.getExtent(), 100);
    expect(Array.isArray(buffer), "create buffer from point extent").to.be.true;
  });
};

export default createGeometry;
