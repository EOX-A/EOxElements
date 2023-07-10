import { equals } from "ol/coordinate";
import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("center parsing", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });

  it("correctly parses web mercator and lonLat center coordinate systems", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(
        equals(eoxMap.map.getView().getCenter(), [1800000, 6150000]),
        "parse web mercator center"
      ).to.be.true;

      const lonLatMapElement = document.createElement("eox-map");
      lonLatMapElement.setAttribute("center", "[20, 20]");
      lonLatMapElement.setAttribute("zoom", "7");
      lonLatMapElement.classList.add("map");
      eoxMap.parentElement.appendChild(lonLatMapElement);
      expect(
        equals(
          (lonLatMapElement as EOxMap).map.getView().getCenter(),
          [2226389.8158654715, 2273030.926987689]
        ),
        "parse lon lat center"
      ).to.be.true;

      const noCenterMapElement = document.createElement("eox-map");
      noCenterMapElement.setAttribute("zoom", "7");
      noCenterMapElement.classList.add("map");
      eoxMap.parentElement.appendChild(noCenterMapElement);
      expect(
        equals(
          (noCenterMapElement as EOxMap).map.getView().getCenter(),
          [0, 0]
        ),
        "set center to [0, 0] if nothing is defined"
      ).to.be.true;
      eoxMap.parentElement.removeChild(lonLatMapElement);
      eoxMap.parentElement.removeChild(noCenterMapElement);
    });
  });
  it("set initial controls via web component attributes", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const controlsMapElement = document.createElement("eox-map") as EOxMap;
      controlsMapElement.setAttribute(
        "controls",
        '["Zoom", "Attribution", "FullScreen"]'
      );
      controlsMapElement.classList.add("map");
      controlsMapElement.style.position = "absolute";
      controlsMapElement.style.top = "0";
      eoxMap.parentElement.appendChild(controlsMapElement);
      controlsMapElement.setLayers(vectorLayerStyleJson);
      expect(
        controlsMapElement.map.getControls().getLength(),
        "set controls via webcomponent attributes"
      ).to.be.equal(3);
      controlsMapElement.removeControl("FullScreen");
      expect(
        controlsMapElement.map.getControls().getLength(),
        "can remove control by name"
      ).to.be.equal(2);
    });
  });
});
