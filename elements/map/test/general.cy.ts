import { equals } from "ol/coordinate";
import "../main"

describe("Map", () => {
  it("map should exist", () => {
    cy.mount(`<eox-map layers='[{"type":"Tile","source":{"type":"OSM"}}]'></eox-map>`).as("eox-map")
    cy.get("eox-map").and(($el) => {
      expect((<EOxMap>$el[0]).map).to.exist;
    });
  });

  it("should parse the initial zoom/center attributes correctly", () => {
    cy.mount(`<eox-map zoom="7" center="[1113194, 2273030]"></eox-map>`).as("eox-map")
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const zoom = eoxMap.map.getView().getZoom();
      const center = eoxMap.map.getView().getCenter();
      console.log(center)
      expect(JSON.parse(eoxMap.getAttribute("zoom"))).to.equal(zoom);
      expect(JSON.parse(eoxMap.getAttribute("center"))).to.deep.equal(center);
    });
  });

  it("correctly parses and guesses web mercator and lonLat center coordinate systems", () => {
    cy.mount(`<eox-map zoom="7" center="[20, 20]"></eox-map>`).as("eox-map")
    cy.get("eox-map").and(($el) => {
      expect(
        equals(
          (<EOxMap>$el[0]).map.getView().getCenter(),
          [2226389.8158654715, 2273030.926987689]
        ),
        "parse lon lat center"
      ).to.be.true;
    });
  });

  it("correctly initializes center as 0,0 if none provided", () => {
    cy.mount(`<eox-map zoom="7"></eox-map>`).as("eox-map")
    cy.get("eox-map").and(($el) => {
      const center = (<EOxMap>$el[0]).map.getView().getCenter();
      expect(
        center,
        "set center to [0, 0] if nothing is defined"
      ).to.deep.equal([0, 0]);
    });
  });
});
