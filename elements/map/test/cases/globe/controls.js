import { html } from "lit";
import { LonLat, Vec2, Vec3 } from "@openglobus/og";
import ScaleLine from "ol/control/ScaleLine.js";
import MousePosition from "ol/control/MousePosition.js";
import { createStringXY } from "ol/coordinate.js";
import { fromLonLat } from "ol/proj.js";
import { getDistance } from "ol/sphere.js";

/**
 * Tests that a scale line, also one rendered outside eox-map, shows the ground
 * scale at the screen centre in 3D and hides when the centre looks into space.
 */
export const testGlobeScaleLine = () => {
  mountGlobeWithControl((target) => new ScaleLine({ target }));

  // Same camera height, same scale: the latitude must not distort it.
  [0, 60].forEach((lat) => {
    lookDown([16, lat], 1e6);
    cy.get("eox-map").should(($el) => {
      const eoxMap = /** @type {any} */ ($el[0]);
      const expected = groundMetresPerPixel(eoxMap);
      expect(Cypress.$(outsideTarget(eoxMap).querySelector(".ol-scale-line")))
        .to.be.visible;
      expect(scaleLineMetresPerPixel(outsideTarget(eoxMap))).to.be.closeTo(
        expected,
        expected * 0.02,
      );
    });
  });

  cy.get("eox-map").then(($el) => {
    const { camera, ellipsoid } = /** @type {any} */ ($el[0]).globe.planet;
    const eye = ellipsoid.lonLatToCartesian(new LonLat(0, 0, 1e7));
    camera.set(eye, new Vec3(eye.x * 2, eye.y * 2, eye.z * 2));
    camera.update();
  });
  cy.get("eox-map").should(
    ($el) =>
      expect(Cypress.$(outsideTarget($el[0]).querySelector(".ol-scale-line")))
        .not.to.be.visible,
  );
};

/**
 * Tests that a mouse position control, also one rendered outside eox-map,
 * shows the coordinate under the cursor in its own projection and format in
 * 3D, and its placeholder when the cursor leaves the globe.
 */
export const testGlobeMousePosition = () => {
  mountGlobeWithControl(
    (target) =>
      new MousePosition({
        target,
        projection: "EPSG:3857",
        coordinateFormat: createStringXY(0),
        placeholder: "none",
      }),
  );
  const [x, y] = fromLonLat([16.36, 48.2]);
  /** @param {string} position - Cypress trigger position on the globe canvas. */
  const moveTo = (position) =>
    cy
      .get("eox-map")
      .then(($el) =>
        cy.wrap(globeCanvas($el[0])).trigger("mousemove", position),
      );
  /** @param {(text: string) => void} assert */
  const expectText = (assert) =>
    cy
      .get("eox-map")
      .should(($el) => assert(outsideTarget($el[0]).textContent.trim()));
  /** At 100 km height a pixel covers well under 500 m. */
  const expectCentre = () =>
    expectText((text) => {
      const [actualX, actualY] = text.split(",").map(Number);
      expect(actualX).to.be.closeTo(x, 500);
      expect(actualY).to.be.closeTo(y, 500);
    });

  lookDown([16.36, 48.2], 1e5);
  moveTo("center");
  expectCentre();

  cy.get("eox-map").then(($el) =>
    cy.wrap(globeCanvas($el[0])).trigger("mouseleave"),
  );
  expectText((text) => expect(text).to.equal("none"));

  // From far away the canvas corner looks into space. og ignores a move to the
  // previous position, so re-enter somewhere else.
  cy.get("eox-map").then(($el) =>
    cy.wrap(globeCanvas($el[0])).trigger("mouseenter"),
  );
  moveTo("top");
  expectText((text) => expect(text).to.match(/^\d+, \d+$/));
  lookDown([16.36, 48.2], 3e7);
  moveTo("left");
  moveTo("topLeft");
  expectText((text) => expect(text).to.equal("none"));

  // Back in 2D, leaving the map clears the last globe coordinate.
  moveTo("center");
  expectText((text) => expect(text).to.match(/^\d+, \d+$/));
  cy.get("eox-map").then(($el) => {
    /** @type {any} */ ($el[0]).projection = "EPSG:3857";
  });
  cy.get("eox-map").should(
    ($el) => expect(/** @type {any} */ ($el[0]).globeEnabled).to.be.false,
  );
  cy.get("eox-map").then(($el) =>
    cy
      .wrap(/** @type {any} */ ($el[0]).map.getViewport())
      .trigger("pointerout"),
  );
  expectText((text) => expect(text).to.equal("none"));
};

/**
 * Mounts a globe with an OL control added through the OL map, rendered into a
 * target outside eox-map.
 *
 * @param {(target: HTMLElement) => import("ol/control/Control").default} createControl
 */
function mountGlobeWithControl(createControl) {
  // eox-map first: cypress-lit unmounts the first element with the mounted tag name.
  cy.mount(
    html`<eox-map .projection=${"globe"}></eox-map>
      <div class="outside"></div>`,
  );
  cy.get("eox-map").should(
    ($el) => expect(/** @type {any} */ ($el[0]).globe).to.exist,
  );
  cy.get("eox-map").then(($el) =>
    /** @type {any} */ ($el[0]).map.addControl(
      createControl(outsideTarget($el[0])),
    ),
  );
}

/**
 * The control target next to eox-map.
 *
 * @param {HTMLElement} eoxMap
 * @returns {HTMLElement}
 */
function outsideTarget(eoxMap) {
  return eoxMap.parentElement.querySelector(".outside");
}

/**
 * The canvas the globe is drawn on.
 *
 * @param {HTMLElement} eoxMap
 * @returns {HTMLCanvasElement}
 */
function globeCanvas(eoxMap) {
  return eoxMap.shadowRoot.querySelector("#globe canvas");
}

/**
 * Points the globe camera straight down at a place.
 *
 * @param {[number, number]} lonLat
 * @param {number} height - Camera height in metres.
 */
function lookDown([lon, lat], height) {
  cy.get("eox-map").then(($el) =>
    /** @type {any} */ ($el[0]).globe.planet.camera.setLonLat(
      new LonLat(lon, lat, height),
      new LonLat(lon, lat, 0),
      Vec3.NORTH,
    ),
  );
}

/**
 * Ground metres per CSS pixel at the canvas centre, measured between two
 * points og picks on the globe.
 *
 * @param {any} eoxMap
 * @returns {number}
 */
function groundMetresPerPixel(eoxMap) {
  const { planet } = eoxMap.globe;
  const canvas = globeCanvas(eoxMap);
  const [x, y] = [canvas.width / 2, canvas.height / 2];
  const [west, east] = [x - 50, x + 50].map((px) => {
    const { lon, lat } = planet.getLonLatFromPixelEllipsoid(new Vec2(px, y));
    return [lon, lat];
  });
  // 100 device pixels apart.
  return getDistance(west, east) / (100 / (canvas.width / canvas.clientWidth));
}

/**
 * Ground metres per CSS pixel shown by a scale line.
 *
 * @param {HTMLElement} target - The scale line's target.
 * @returns {number}
 */
function scaleLineMetresPerPixel(target) {
  const inner = /** @type {HTMLElement} */ (
    target.querySelector(".ol-scale-line-inner")
  );
  const [count, unit] = inner.textContent.trim().split(/\s+/);
  const metres = Number(count) * (unit === "km" ? 1000 : 1);
  return metres / inner.getBoundingClientRect().width;
}
