describe("Layer Switcher", () => {
  beforeEach(() => {
    cy.visit("/cypress/e2e/agri.html");
  });

  it("draws on the map", () => {
    cy.get("eox-drawtools")
      .shadow()
      .within(() => {
        cy.get("[data-cy='drawBtn']").click();
      });
    cy.get("eox-map")
      .shadow()
      .within(() => {
        cy.get("canvas").click(20, 20);
        cy.get("canvas").click(20, 50);
        cy.get("canvas").click(100, 50);
        cy.get("canvas").click(100, 20);
        cy.get("canvas").click(20, 20);
      });
    cy.get("eox-map").should(($el) => {
      const eoxMap = $el[0];
      const drawLayer = eoxMap.getLayerById("draw");
      const features = drawLayer.getSource().getFeatures();
      const geometry = features[0].getGeometry();
      console.log(geometry.getCoordinates());
      expect(features).to.have.length(1);
      expect(geometry.getCoordinates()[0].length).to.be.equal(5);
    });
  });
});
