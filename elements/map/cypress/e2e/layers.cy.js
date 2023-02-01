describe("layers", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads an OSM layer", () => {
    cy.setMap("layer", {
      layer: {
        source: "osm",
      },
    });
    cy.wait(0).then(() => {
      cy.getMap().then((map) => {
        const osmLayer = map
          .getLayers()
          .getArray()
          .find((layer) => layer.get("id") === "osm");
        expect(osmLayer).to.exist;
      });
    });
  });
  it("allows to toggle layer visibility", () => {
    cy.setMap("layer", {
      layer: {
        source: "osm",
        visible: false,
      },
    });
    cy.wait(0).then(() => {
      cy.getMap().then((map) => {
        const osmLayer = map
          .getLayers()
          .getArray()
          .find((layer) => layer.get("id") === "osm");
        expect(osmLayer.getVisible()).to.be.false;
        cy.setMap("layer-visibility", {
          layer: {
            source: "osm",
            visible: true,
          },
        });
        cy.wait(0).then(() => {
          expect(osmLayer.getVisible()).to.be.true;
        });
      });
    });
  });
});
