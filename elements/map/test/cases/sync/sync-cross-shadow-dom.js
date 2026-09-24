import { html } from "lit";

class ShadowHostSyncTest extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = `<eox-map id="shadow-map"></eox-map>`;
    }
  }
}
if (!customElements.get("shadow-host-sync-test")) {
  customElements.define("shadow-host-sync-test", ShadowHostSyncTest);
}

/**
 * Tests syncing a map across shadow DOM boundaries using global registry
 */
const syncCrossShadowDom = () => {
  const zoom = 7;
  const center = [10, 10];
  cy.mount(html`
    <shadow-host-sync-test></shadow-host-sync-test>
    <eox-map id="sync-map" sync="#shadow-map"></eox-map>
  `);
  cy.get("shadow-host-sync-test")
    .shadow()
    .find("eox-map#shadow-map")
    .and(($el) => {
      const olMapView = $el[0].map.getView();
      olMapView.setZoom(zoom);
      olMapView.setCenter(center);
    });
  cy.get("eox-map#sync-map").and(($el) => {
    const olMapView = $el[0].map.getView();
    expect(olMapView.getZoom()).to.be.equal(zoom);
    expect(olMapView.getCenter()).to.deep.eq(center);
  });
};

export default syncCrossShadowDom;
