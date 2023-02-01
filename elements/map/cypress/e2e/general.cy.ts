describe("general", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads the map", () => {
    cy.get('[data-cy="map"]').should("exist");
  });
  it("exposes the map object to the window", () => {
    cy.window().its("map").should("exist");
  });
});
