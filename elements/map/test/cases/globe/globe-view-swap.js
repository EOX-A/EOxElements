import { html } from "lit";
import { createStringXY } from "ol/coordinate.js";
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
 * Tests that after a user drags one of two synced globes, both show the same
 * place under the same screen point: tilted, and straight down on both sides
 * of the equator.
 */
export const testGlobeViewSyncPose = () => {
  const globeConfig = { useHighLOD: true };
  const controls = {
    MousePosition: {
      projection: "EPSG:4326",
      coordinateFormat: createStringXY(1),
    },
  };
  cy.mount(
    html`<eox-map
        id="a"
        .layers=${osm}
        .controls=${controls}
        .globeConfig=${globeConfig}
        .projection=${"globe"}
      ></eox-map>
      <eox-map
        id="b"
        .layers=${osm}
        .controls=${controls}
        .globeConfig=${globeConfig}
        .projection=${"globe"}
      ></eox-map>`,
  );
  cy.get("eox-map#a").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map#b").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map#b").then(($el) => {
    $el[0].sync = "#a";
  });

  [
    // Tilted and zoomed out, where the curvature of the globe matters.
    { lonLat: [10, 50], pitch: -0.5, rotation: Math.PI / 6 },
    { lonLat: [10, 60] },
    { lonLat: [10, -60] },
  ].forEach(({ lonLat, pitch, rotation = 0 }) => {
    cy.get("eox-map#a").then(($el) => {
      const view = $el[0].map.getView();
      view.setZoom(3);
      view.setCenter(fromLonLat(lonLat));
      view.set("pitch", pitch);
      view.setRotation(rotation);
    });
    dragGlobe("eox-map#a");
    waitUntilStill("eox-map#a");
    coordinateOnGlobe("eox-map#a").then((onA) =>
      coordinateOnGlobe("eox-map#b").then((onB) => {
        // Picking from the depth buffer is only accurate to about a degree.
        expect(onB[0], `longitude, from ${lonLat}`).to.be.closeTo(onA[0], 2);
        expect(onB[1], `latitude, from ${lonLat}`).to.be.closeTo(onA[1], 2);
      }),
    );
  });
  leaveGlobe("eox-map#a");
  leaveGlobe("eox-map#b");
};

/**
 * Drags a globe like a user, so its own navigation moves the camera.
 *
 * @param {string} selector
 */
const dragGlobe = (selector) =>
  globeCanvas(selector).then(($canvas) => {
    const [x, y] = [$canvas[0].clientWidth / 2, $canvas[0].clientHeight / 2];
    const options = { button: 0, which: 1, buttons: 1 };
    const view = /** @type {any} */ (
      document.querySelector(selector)
    ).map.getView();
    const before = view.getCenter().join();
    // og grabs the point under the cursor, picked while the mouse moves.
    globeCanvas(selector).trigger("mousemove", x - 10, y - 10);
    globeCanvas(selector).trigger("mousemove", x, y);
    globeCanvas(selector).trigger("mousedown", x, y, options);
    [10, 20, 30].forEach((step) =>
      globeCanvas(selector).trigger("mousemove", x + step, y + step, options),
    );
    globeCanvas(selector).trigger("mouseup", x + 30, y + 30, options);
    cy.get(selector).should(() =>
      expect(view.getCenter().join(), "the drag moved the map").not.to.equal(
        before,
      ),
    );
  });

/**
 * Waits until the map stops moving, as a globe keeps turning after a drag.
 *
 * @param {string} selector
 */
const waitUntilStill = (selector) => {
  /** @type {string} */
  let previous;
  cy.get(selector).should(($el) => {
    const center = $el[0].map.getView().getCenter().join();
    const still = center === previous;
    previous = center;
    expect(still, "map still").to.be.true;
  });
};

/**
 * The lon/lat the mouse position control shows for a point above the centre
 * of a globe.
 *
 * @param {string} selector
 * @returns {Cypress.Chainable<number[]>}
 */
const coordinateOnGlobe = (selector) =>
  globeCanvas(selector)
    .then(($canvas) => {
      const [width, height] = [$canvas[0].clientWidth, $canvas[0].clientHeight];
      // og ignores a move to the previous position and picks from the last frame.
      globeCanvas(selector).trigger("mousemove", width / 4, height / 2);
      globeCanvas(selector).trigger("mousemove", width / 2, height * 0.4);
    })
    .then(() =>
      cy
        .get(selector)
        .shadow()
        .find(".ol-mouse-position")
        .invoke("text")
        .should("match", /^-?\d/)
        .then((text) => text.split(",").map(Number)),
    );

/** @param {string} selector */
const globeCanvas = (selector) =>
  cy.get(selector).shadow().find("#globe canvas").first();

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
  });
  leaveGlobe("eox-map");
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
