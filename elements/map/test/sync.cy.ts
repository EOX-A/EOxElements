import { html } from "lit";
import "../main";

describe("map syncing", () => {
  it("syncs one map to another", () => {
    const zoom = 7;
    const center = [10, 10];
    cy.mount(
      html`<eox-map id="a"></eox-map> <eox-map id="b" sync="#a"></eox-map>`
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
  it("supports passing an eox-map to the sync property", () => {
    const zoom = 7;
    const center = [10, 10];
    cy.mount(html`<eox-map id="a"></eox-map> <eox-map id="b"></eox-map>`);
    cy.get("eox-map#a").and(($el) => {
      const olMapView = (<EOxMap>$el[0]).map.getView();
      olMapView.setZoom(zoom);
      olMapView.setCenter(center);
    });
    cy.get("eox-map#b").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.sync = <EOxMap>document.querySelector("eox-map#a");
      const olMapView = eoxMap.map.getView();
      expect(olMapView.getZoom()).to.be.equal(zoom);
      expect(olMapView.getCenter()).to.deep.eq(center);
    });
  });
});
