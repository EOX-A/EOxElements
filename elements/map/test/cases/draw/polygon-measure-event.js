import { html } from "lit";
import drawInteractionLayerJson from "../../fixtures/drawInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to create polygon and measure with draw interaction in EOx Map
 */
const createPolygonMeasureEvent = () => {
  drawInteractionLayerJson[0].interactions[0].options.type = "Polygon";
  cy.mount(html`<eox-map .layers=${drawInteractionLayerJson}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.addEventListener("drawend", (evt) => {
      //@ts-expect-error geojson is defined on drawend event.
      expect(evt.detail.geojson.properties.measure).to.be.greaterThan(0);
    });

    // first point
    simulateEvent(eoxMap.map, "pointermove", 10, 20);
    simulateEvent(eoxMap.map, "pointerdown", 10, 20);
    simulateEvent(eoxMap.map, "pointerup", 10, 20);

    // second point
    simulateEvent(eoxMap.map, "pointermove", 30, 20);
    simulateEvent(eoxMap.map, "pointerdown", 30, 20);
    simulateEvent(eoxMap.map, "pointerup", 30, 20);

    // third point
    simulateEvent(eoxMap.map, "pointermove", 40, 10);
    simulateEvent(eoxMap.map, "pointerdown", 40, 10);
    simulateEvent(eoxMap.map, "pointerup", 40, 10);

    // finish on first point
    simulateEvent(eoxMap.map, "pointermove", 10, 20);
    simulateEvent(eoxMap.map, "pointerdown", 10, 20);
    simulateEvent(eoxMap.map, "pointerup", 10, 20);

    const drawLayer = eoxMap.getLayerById("drawLayer");
    const features = drawLayer.getSource().getFeatures();
    expect(features).to.have.length(1);
  });
};

export default createPolygonMeasureEvent;
