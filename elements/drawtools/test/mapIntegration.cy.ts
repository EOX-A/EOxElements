describe("Drawtools", () => {
  beforeEach(() => {
    cy.visit("/elements/drawtools/test/mapIntegration.html");
  });

  it("loads the drawtools", () => {
    cy.get("eox-drawtools").should("exist");
  });
});
