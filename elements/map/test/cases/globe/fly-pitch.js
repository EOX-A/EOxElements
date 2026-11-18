import { html } from "lit";
import { flyGlobeToState } from "../../../src/plugins/globe/openglobus.js";

/**
 * Starts a globe flight and resolves once it has finished.
 *
 * @param {any} eoxMap
 * @param {object} options
 * @param {(camera: any) => void} [onHalfway] - Called halfway through the flight.
 */
const fly = (eoxMap, options, onHalfway) =>
  new Promise((resolve) => {
    const camera = eoxMap.globe.planet.camera;
    flyGlobeToState(eoxMap, options);
    if (onHalfway) {
      setTimeout(
        () => onHalfway(camera),
        /** @type {any} */ (options).duration / 2,
      );
    }
    const check = () =>
      camera.isFlying() ? requestAnimationFrame(check) : resolve(camera);
    requestAnimationFrame(check);
  });

/**
 * Tests that `pitch` set in the animation options is animated as part of the
 * globe flight (instead of jumping at the end), also when the center does not
 * change, and that flying without `pitch` returns to the straight down view.
 */
export const testGlobeFlyPitch = () => {
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      .center=${[16.36, 48.2]}
      .zoom=${8}
      .projection=${"globe"}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map").then(async ($el) => {
    const eoxMap = /** @type {any} */ ($el[0]);

    // establish a straight down view at the center
    const camera = await fly(eoxMap, { duration: 300 });
    const startPitch = camera.getPitch();
    const startEye = camera.eye.clone();
    const targetPitch = startPitch + 0.8;

    // same center, pitch set: must animate, not jump
    let halfwayPitch;
    await fly(eoxMap, { duration: 1000, pitch: targetPitch }, (c) => {
      halfwayPitch = c.getPitch();
    });
    expect(halfwayPitch).to.be.greaterThan(startPitch + 0.05);
    expect(halfwayPitch).to.be.lessThan(targetPitch - 0.05);
    expect(camera.getPitch()).to.be.closeTo(targetPitch, 1e-3);
    // camera stays in place, only the angle changes
    expect(camera.eye.distance(startEye)).to.be.lessThan(
      camera.getLonLat().height * 0.01,
    );

    // same center, no pitch: back to the straight down view
    await fly(eoxMap, { duration: 500 });
    expect(camera.getPitch()).to.be.closeTo(startPitch, 1e-3);
  });
};
