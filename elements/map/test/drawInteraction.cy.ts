import VectorLayer from "ol/layer/Vector";
import { EOxMap } from "../main";
import vectorLayerStyleJson from "./drawInteraction.json";
import { simulateEvent } from "./utils/events";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";


describe("draw interaction", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(vectorLayerStyleJson);
      eoxMap.addDraw('draw_point', {
        id: 'drawInteraction',
        type: 'Point',
      });
    })
  });
  it("adds a draw interaction", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      // get the interaction via the source key
      const drawInteraction = eoxMap.interactions['drawInteraction']
      expect(drawInteraction).to.exist; 
      expect(drawInteraction.getActive()).to.equal(true)
    });
  });

  it("creates correct geometry", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      console.log(eoxMap);
      simulateEvent(eoxMap.map, 'pointerdown', 10, 20);
      simulateEvent(eoxMap.map, 'pointerup', 10, 20);
      const drawLayer = eoxMap.map.getLayers().getArray()[1] as VectorLayer<VectorSource>;
      const features = drawLayer.getSource().getFeatures();
      const geometry = features[0].getGeometry() as Point;
      expect(geometry.getCoordinates().length).to.be.equal(2);
    });
  });

  it("remove interaction", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.map.removeInteraction(eoxMap.interactions['drawInteraction'])
    });
  });
});

