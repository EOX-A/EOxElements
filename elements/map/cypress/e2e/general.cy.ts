describe("general", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.spy(win, "postMessage").as("postMessage");
      },
    });
  });
  it("loads the map", () => {
    cy.get('[data-cy="map"]').should("exist");
  });
  it("exposes the map object to the window", () => {
    cy.window().its("map").should("exist");
  });
  it("emits a map-load event", () => {
    cy.get("@postMessage")
      .should("have.been.calledOnce")
      .its("lastCall")
      .should("have.been.calledWith", { "map-event": { type: "loadend" } });
  });
});
