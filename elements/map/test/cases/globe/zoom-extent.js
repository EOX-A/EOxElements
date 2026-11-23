import { html } from "lit";
import { fromLonLat } from "ol/proj.js";

/**
 * Asserts the camera has landed near the given lon/lat.
 *
 * @param {[number, number]} lonLat
 * @param {number} tolerance - Allowed offset in degrees.
 */
const expectCameraAt = ([lon, lat], tolerance) =>
  cy.get("eox-map").should(($el) => {
    const camera = /** @type {any} */ ($el[0]).globe.planet.camera;
    expect(camera.isFlying()).to.be.false;
    const position = camera.getLonLat();
    expect(position.lon).to.be.closeTo(lon, tolerance);
    expect(position.lat).to.be.closeTo(lat, tolerance);
  });

/**
 * Tests that `zoomExtent` and a later `center`/`zoom` change fly the globe to
 * their targets, and that map view changes still move the camera afterwards.
 */
export const testGlobeZoomExtent = () => {
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      .projection=${"globe"}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => expect($el[0].globe).to.exist);
  // Austria, in the EPSG:3857 view projection
  cy.get("eox-map").then(($el) => {
    $el[0].zoomExtent = [1060000, 5830000, 1910000, 6280000];
  });
  expectCameraAt([13.5, 47.5], 4);

  cy.get("eox-map").then(($el) => {
    $el[0].zoom = 4;
    $el[0].center = [-60, -15];
  });
  expectCameraAt([-60, -15], 2);

  // Once the flights ended, map view changes move the camera again.
  cy.get("eox-map").then(($el) => {
    $el[0].map.getView().setCenter(fromLonLat([10, 50]));
  });
  expectCameraAt([10, 50], 1);

  // As does a fit like highlightById's.
  cy.get("eox-map").then(($el) => {
    $el[0].map.getView().fit([1060000, 5830000, 1910000, 6280000]);
  });
  expectCameraAt([13.5, 47.5], 4);
};
