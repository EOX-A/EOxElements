describe("layers", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("animates the view", () => {
    const testZoom = 10;
    const testCenter = [1820000, 6140000];
    cy.setMap("layer", {
      layer: {
        source: "osm",
      },
    });
    cy.setMap("view", { zoom: testZoom, center: testCenter, duration: 300 });
    cy.wait(500).then(() => {
      cy.getMap().then((map) => {
        expect(map.getView().getZoom()).to.equal(testZoom);
        expect(map.getView().getCenter()).to.deep.equal(testCenter);
      });
    });
  });
});
