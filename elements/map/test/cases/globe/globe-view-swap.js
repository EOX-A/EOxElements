import { html } from "lit";
import { fromLonLat } from "ol/proj.js";

const osm = [
  { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
];

/**
 * Asserts the globe camera of a map is above the given lon/lat.
 *
 * @param {string} selector
 * @param {[number, number]} lonLat
 */
const expectCameraAt = (selector, [lon, lat]) =>
  cy.get(selector).should(($el) => {
    const position = /** @type {any} */ (
      $el[0]
    ).globe.planet.camera.getLonLat();
    expect(position.lon).to.be.closeTo(lon, 1);
    expect(position.lat).to.be.closeTo(lat, 1);
  });

/**
 * Tests that globe maps synced after their globes exist share the view: the
 * second globe follows the swapped-in view and later changes move both cameras.
 */
export const testGlobeViewSwap = () => {
  cy.mount(
    html`<eox-map id="a" .layers=${osm} .projection=${"globe"}></eox-map>
      <eox-map id="b" .layers=${osm} .projection=${"globe"}></eox-map>`,
  );
  cy.get("eox-map#a").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map#b").should(($el) => expect($el[0].globe).to.exist);

  cy.get("eox-map#a").then(($el) => {
    $el[0].map.getView().setCenter(fromLonLat([10, 50]));
  });
  cy.get("eox-map#b").then(($el) => {
    $el[0].sync = "#a";
  });
  cy.get("eox-map#b").should(($el) =>
    expect($el[0].map.getView()).to.equal(
      /** @type {any} */ (document.querySelector("eox-map#a")).map.getView(),
    ),
  );
  expectCameraAt("eox-map#b", [10, 50]);

  cy.get("eox-map#a").then(($el) => {
    $el[0].map.getView().setCenter(fromLonLat([-60, -15]));
  });
  expectCameraAt("eox-map#a", [-60, -15]);
  expectCameraAt("eox-map#b", [-60, -15]);
};
