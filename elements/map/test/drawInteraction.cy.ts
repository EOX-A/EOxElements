import VectorLayer from "ol/layer/Vector";
import "../main";
import vectorLayerStyleJson from "./drawInteraction.json";
import { simulateEvent } from "./utils/events";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";

describe("draw interaction", () => {
  beforeEach(() => {
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      (<EOxMap>$el[0]).addDraw("drawLayer", {
        id: "drawInteraction",
        type: "Point",
      });
    });
  });
  it("adds a draw interaction", () => {
    cy.get("eox-map").and(($el) => {
      // get the interaction via the source key
      const drawInteraction = (<EOxMap>$el[0]).interactions["drawInteraction"];
      expect(drawInteraction).to.exist;
      expect(drawInteraction.getActive()).to.equal(true);
    });
  });

  it("creates correct geometry", () => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      simulateEvent(eoxMap.map, "pointerdown", 10, 20);
      simulateEvent(eoxMap.map, "pointerup", 10, 20);
      const drawLayer = eoxMap.getLayerById("drawLayer");
      const features = drawLayer.getSource().getFeatures();
      const geometry = features[0].getGeometry() as Point;
      expect(features).to.have.length(1);
      expect(geometry.getCoordinates().length).to.be.equal(2);
    });
  });

  it("remove interaction", () => {
    cy.get("eox-map").and(($el) => {
      (<EOxMap>$el[0]).removeInteraction("drawInteraction");
    });
  });

  it("creates line and measure event", () => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.removeInteraction("drawInteraction");
      eoxMap.addDraw("drawLayer", {
        id: "drawInteraction",
        type: "LineString",
      });

      eoxMap.addEventListener("drawend", (evt) => {
        //@ts-ignore
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

      // finish on second point
      simulateEvent(eoxMap.map, "pointerdown", 30, 20);
      simulateEvent(eoxMap.map, "pointerup", 30, 20);

      const drawLayer = eoxMap.getLayerById(
        "drawLayer"
      ) as VectorLayer<VectorSource>;
      const features = drawLayer.getSource().getFeatures();
      expect(features).to.have.length(1);
    });
  });

  it("creates polygon and measure event", () => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.removeInteraction("drawInteraction");
      eoxMap.addDraw("drawLayer", {
        id: "drawInteraction",
        type: "Polygon",
        style: {
          "fill-color": "yellow",
          "stroke-color": "black",
          "stroke-width": 4,
        },
      });

      eoxMap.addEventListener("drawend", (evt) => {
        //@ts-ignore
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

      const drawLayer = eoxMap.getLayerById(
        "drawLayer"
      ) as VectorLayer<VectorSource>;
      const features = drawLayer.getSource().getFeatures();
      expect(features).to.have.length(1);
    });
  });
});
