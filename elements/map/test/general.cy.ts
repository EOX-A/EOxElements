import { EOxMap } from "../main";

describe("Map", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });

  it("sends loadend event", () => {
    cy.document().then((doc) => {
      const eoxMap = doc.querySelector("eox-map");
      eoxMap.addEventListener("loadend", cy.stub().as("loadend"));
    });
    cy.get("@loadend").should("have.been.calledOnce");
  });

  it("should have one map layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(eoxMap.map.getLayers().getArray()).to.have.lengthOf(1);
    });
  });

  it("should parse the initial zoom/center attributes correctly", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const zoom = eoxMap.map.getView().getZoom();
      const center = eoxMap.map.getView().getCenter();
      expect(JSON.parse(eoxMap.getAttribute("zoom"))).to.equal(zoom);
      expect(JSON.parse(eoxMap.getAttribute("center"))).to.deep.equal(center);
    });
  });

  it("should have an attribution li", () => {
    cy.get("eox-map")
      .shadow()
      .find("li")
      .should("contain.text", "© OpenStreetMap contributors.");
  });
});
