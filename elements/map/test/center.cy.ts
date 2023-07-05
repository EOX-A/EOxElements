import { equals } from "ol/coordinate";
import { EOxMap } from "../main";

describe("center parsing", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });

  it("correctly parses web different center coordinate systems", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(
        equals(eoxMap.map.getView().getCenter(), [1800000, 6150000]),
        "parse web mercator center"
      ).to.be.true;

      const lonLatwMapElement = document.createElement("eox-map");
      lonLatwMapElement.setAttribute("center", "[20, 20]");
      lonLatwMapElement.setAttribute("zoom", "7");
      lonLatwMapElement.classList.add("map");
      eoxMap.parentElement.appendChild(lonLatwMapElement);
      expect(
        equals(
          (lonLatwMapElement as EOxMap).map.getView().getCenter(),
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
    });
  });
});
