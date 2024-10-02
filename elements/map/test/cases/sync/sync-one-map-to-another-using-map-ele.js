import { html } from "lit";

/**
 * Tests to syncs one map to another using `eox-map` element
 */
const syncOneMapToAnotherUsingMapEle = () => {
  const zoom = 7;
  const center = [10, 10];
  cy.mount(html`<eox-map id="a"></eox-map> <eox-map id="b"></eox-map>`);
  cy.get("eox-map#a").and(($el) => {
    const olMapView = $el[0].map.getView();
    olMapView.setZoom(zoom);
    olMapView.setCenter(center);
  });
  cy.get("eox-map#b").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.sync = document.querySelector("eox-map#a");
    const olMapView = eoxMap.map.getView();
    expect(olMapView.getZoom()).to.be.equal(zoom);
    expect(olMapView.getCenter()).to.deep.eq(center);
  });
};

export default syncOneMapToAnotherUsingMapEle;
