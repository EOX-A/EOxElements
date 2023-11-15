import "../main";

describe("map syncing", () => {
  it("syncs one map to another", () => {
    const zoom = 7;
    const center = [10, 10];
    cy.mount(
      `<eox-map id="a"></eox-map>
      <eox-map id="b" sync="#a"></eox-map>`
    );
    cy.get("eox-map#a").and(($el) => {
      const olMapView = (<EOxMap>$el[0]).map.getView();
      olMapView.setZoom(zoom);
      olMapView.setCenter(center);
    });
    cy.get("eox-map#b").and(($el) => {
      const olMapView = (<EOxMap>$el[0]).map.getView();
      expect(olMapView.getZoom()).to.be.equal(zoom);
      expect(olMapView.getCenter()).to.deep.eq(center);
    });
  });
});
