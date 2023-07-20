describe("Layer Switcher", () => {
  beforeEach(() => {
    cy.visit("/cypress/e2e/agri.html");
  });

  it("loads the layerswitcher", () => {
    cy.get("eox-map").should("exist");
    cy.get("eox-layercontrol").should("exist");
    cy.get("eox-drawtools").should("exist");
  });
});
