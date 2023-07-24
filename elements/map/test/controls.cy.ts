import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("webcomponent attribute parsing", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });

  it("set initial controls via webcomponent attributes", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const controlsMapElement = document.createElement("eox-map") as EOxMap;
      controlsMapElement.setAttribute(
        "controls",
        `{
          "Zoom": {},
          "Attribution": {},
          "FullScreen": {},
          "OverviewMap": {
            "layers":   [
              {
                "type": "Tile",
                "properties": {
                  "id": "customId"
                },
                "source": {
                  "type": "OSM"
                }
              }
            ]
          }
        }`
      );
      controlsMapElement.classList.add("map");
      controlsMapElement.style.position = "absolute";
      controlsMapElement.style.top = "0";
      eoxMap.parentElement.appendChild(controlsMapElement);
      controlsMapElement.setLayers(vectorLayerStyleJson);
      expect(
        controlsMapElement.map.getControls().getLength(),
        "set controls via webcomponent attributes"
      ).to.be.equal(4);
      controlsMapElement.removeControl("FullScreen");
      expect(
        controlsMapElement.map.getControls().getLength(),
        "can remove control by name"
      ).to.be.equal(3);
    });
  });
});
