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

/**
 * Tests that a view change, as from a synced 2D map, keeps the globe's tilt
 * and heading from the shared view and still looks at the view center.
 */
export const testGlobeViewTilt = () => {
  const [pitch, rotation] = [-Math.PI / 4, Math.PI / 6];
  cy.mount(html`<eox-map .layers=${osm} .projection=${"globe"}></eox-map>`);
  cy.get("eox-map").should(($el) => expect($el[0].globe).to.exist);
  /** @type {number} */
  let flatAltitude;
  cy.get("eox-map").then(($el) => {
    const view = $el[0].map.getView();
    // Regional zoom, so tilt and heading are measurable at the camera.
    view.setZoom(10);
    view.setCenter(fromLonLat([10, 50]));
    flatAltitude = /** @type {any} */ ($el[0]).globe.planet.camera.getLonLat()
      .height;
    view.set("pitch", pitch);
    view.setRotation(rotation);
  });
  cy.get("eox-map").should(($el) => {
    const { planet } = /** @type {any} */ ($el[0]).globe;
    const { camera } = planet;
    expect(camera.getPitch()).to.be.closeTo(pitch, 0.05);
    // OL rotation is the negative og heading.
    expect(camera.getHeading()).to.be.closeTo(360 - 30, 1);
    // Tilting keeps the altitude of the same zoom, so synced globes don't drift in zoom.
    expect(camera.getLonLat().height).to.be.closeTo(
      flatAltitude,
      flatAltitude * 0.05,
    );
    const target = planet.ellipsoid.cartesianToLonLat(
      camera.getRayIntersectionEllipsoid(camera.width / 2, camera.height / 2),
    );
    expect(target.lon).to.be.closeTo(10, 1);
    expect(target.lat).to.be.closeTo(50, 1);
  });
};
