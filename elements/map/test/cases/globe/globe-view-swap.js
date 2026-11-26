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
 * Leaves globe mode, so the globe frees its WebGL contexts before the next
 * test; unmounting alone only pauses it.
 *
 * @param {string} selector
 */
const leaveGlobe = (selector) => {
  cy.get(selector).then(($el) => {
    $el[0].projection = "EPSG:3857";
  });
  cy.get(selector).should(($el) => expect($el[0].globeEnabled).to.equal(false));
};

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
  leaveGlobe("eox-map#a");
  leaveGlobe("eox-map#b");
};

/**
 * Tests that a view change, as from a synced 2D map, keeps the globe's tilt
 * and heading from the shared view and still looks at the view center.
 */
export const testGlobeViewTilt = () => {
  const [pitch, rotation] = [-Math.PI / 4, Math.PI / 6];
  cy.mount(html`<eox-map .layers=${osm} .projection=${"globe"}></eox-map>`);
  cy.get("eox-map").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map").then(($el) => {
    const view = $el[0].map.getView();
    // Regional zoom, so tilt and heading are measurable at the camera.
    view.setZoom(10);
    view.setCenter(fromLonLat([10, 50]));
    view.set("pitch", pitch);
    view.setRotation(rotation);
  });
  cy.get("eox-map").should(($el) => {
    const { planet } = /** @type {any} */ ($el[0]).globe;
    const { camera } = planet;
    expect(camera.getPitch()).to.be.closeTo(pitch, 0.05);
    // OL rotation is the negative og heading.
    expect(camera.getHeading()).to.be.closeTo(360 - 30, 1);
    const target = planet.ellipsoid.cartesianToLonLat(
      camera.getRayIntersectionEllipsoid(camera.width / 2, camera.height / 2),
    );
    expect(target.lon).to.be.closeTo(10, 1);
    expect(target.lat).to.be.closeTo(50, 1);
  });
};

/**
 * Tests that moving one of two synced globes, zoomed out and tilted, leaves
 * the other globe on the same view.
 */
export const testGlobeViewSyncPose = () => {
  const globeConfig = { useHighLOD: true };
  cy.mount(
    html`<eox-map
        id="a"
        .layers=${osm}
        .globeConfig=${globeConfig}
        .projection=${"globe"}
      ></eox-map>
      <eox-map
        id="b"
        .layers=${osm}
        .globeConfig=${globeConfig}
        .projection=${"globe"}
      ></eox-map>`,
  );
  cy.get("eox-map#a").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map#b").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map#b").then(($el) => {
    $el[0].sync = "#a";
  });
  cy.get("eox-map#a").then(($el) => {
    const view = $el[0].map.getView();
    // Zoomed out and tilted, where the curvature of the globe matters.
    view.setZoom(3);
    view.setCenter(fromLonLat([10, 50]));
    view.set("pitch", -0.5);
    view.setRotation(Math.PI / 6);
  });
  // A user interaction on globe A hands its view to globe B.
  cy.get("eox-map#a").shadow().find("#globe canvas").first().as("canvasA");
  cy.get("@canvasA").trigger("mousedown", { button: 0, which: 1 });
  cy.get("@canvasA").trigger("mouseup", { button: 0, which: 1 });
  cy.get("eox-map#b").should(($el) => {
    const a = /** @type {any} */ (document.querySelector("eox-map#a")).globe
      .planet.camera;
    const b = /** @type {any} */ ($el[0]).globe.planet.camera;
    expect(b.eye.distance(a.eye), "eye").to.be.lessThan(
      a.getLonLat().height * 0.01,
    );
    expect(b.getForward().dot(a.getForward()), "direction").to.be.closeTo(
      1,
      1e-4,
    );
  });
  leaveGlobe("eox-map#a");
  leaveGlobe("eox-map#b");
};

/**
 * Tests that leaving the globe returns a north-up 2D map, and that a tilt from
 * the globe does not carry over into the next globe.
 */
export const testGlobeExitView = () => {
  cy.mount(html`<eox-map .layers=${osm} .projection=${"globe"}></eox-map>`);
  cy.get("eox-map").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map").then(($el) => {
    const view = $el[0].map.getView();
    view.set("pitch", -0.5);
    view.setRotation(Math.PI / 6);
    $el[0].projection = "EPSG:3857";
  });
  cy.get("eox-map").should(($el) =>
    expect($el[0].globeEnabled).to.equal(false),
  );
  cy.get("eox-map").then(($el) => {
    expect($el[0].map.getView().getRotation()).to.equal(0);
    $el[0].projection = "globe";
  });
  cy.get("eox-map").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map").then(($el) => {
    $el[0].map.getView().setCenter(fromLonLat([10, 50]));
  });
  // Looking straight down, not tilted by the previous globe.
  cy.get("eox-map").should(($el) =>
    expect(
      /** @type {any} */ ($el[0]).globe.planet.camera.getPitch(),
    ).to.be.closeTo(-Math.PI / 2, 0.05),
  );
  leaveGlobe("eox-map");
};
