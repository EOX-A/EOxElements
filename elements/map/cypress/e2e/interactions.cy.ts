describe("interactions", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("shows the coordinates of the clicked map", () => {
    cy.setMap("layer", {
      layer: {
        source: "osm",
        zIndex: 0,
      },
    });
    cy.setMap("layer", {
      layer: {
        source: "vector",
        zIndex: 1,
      },
    });
    window.addEventListener("message", (event) => {
      if (event.data.type === "event") {
        expect(event.data.click.coordinate).to.exist;
        expect(event.data.click.pixel).to.exist;
      }
    });
    cy.wait(0).then(() => {
      cy.get('[data-cy="map"] canvas').click(0, 0);
      cy.get('[data-cy="map"] canvas').click(300, 200);
      cy.get('[data-cy="map"] canvas').click(500, 100);
      cy.get('[data-cy="map"] canvas').click(700, 300);
      cy.get('[data-cy="map"] canvas').click(799, 399);
    });
  });
});
