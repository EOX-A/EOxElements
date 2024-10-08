import { html } from "lit";

/**
 * Tests to syncs one map to another
 */
const syncOneMapToAnother = () => {
  const zoom = 7;
  const center = [10, 10];
  cy.mount(
    html`<eox-map id="a"></eox-map> <eox-map id="b" sync="#a"></eox-map>`,
  );
  cy.get("eox-map#a").and(($el) => {
    const olMapView = $el[0].map.getView();
    olMapView.setZoom(zoom);
    olMapView.setCenter(center);
  });
  cy.get("eox-map#b").and(($el) => {
    const olMapView = $el[0].map.getView();
    expect(olMapView.getZoom()).to.be.equal(zoom);
    expect(olMapView.getCenter()).to.deep.eq(center);
  });
};

export default syncOneMapToAnother;
