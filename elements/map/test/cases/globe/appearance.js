import { html } from "lit";
import { LonLat, Vec3 } from "@openglobus/og";
import { DEFAULT_STAR_FACES } from "../../../src/enums/index.js";

/**
 * Tests that space around the globe stays transparent by default, is covered
 * by the default star sky with `globeConfig.stars: true`, and that custom
 * cube faces replace it.
 */
export const testGlobeStars = () => {
  mountFarGlobe({});
  readSky().then((sky) =>
    expect(
      sky.filter(([, , , alpha]) => alpha !== 0),
      "drawn sky pixels",
    ).to.have.length(0),
  );

  // Any opaque image stands in for the star faces.
  const face = { fixture: "map/test/fixtures/tiles/osm/0/0/0.png" };
  cy.intercept(DEFAULT_STAR_FACES.px, face).as("defaultFace");
  cy.intercept("**/custom-stars/*.png", face).as("customFace");

  mountFarGlobe({ stars: true });
  cy.wait("@defaultFace");
  readSky().then((sky) => {
    expect(
      sky.filter(([, , , alpha]) => alpha !== 255),
      "see-through sky pixels",
    ).to.have.length(0);
  });

  mountFarGlobe({
    stars: Object.fromEntries(
      ["px", "nx", "py", "ny", "pz", "nz"].map((side) => [
        side,
        `/custom-stars/${side}.png`,
      ]),
    ),
  });
  cy.wait("@customFace");
};

/**
 * Tests that `globeConfig.atmosphere` turns the globe's atmosphere on at
 * creation and off when changed in globe mode.
 */
export const testGlobeAtmosphere = () => {
  mountFarGlobe({ atmosphere: true });
  // The glow is only a few pixels wide, so check og's public state instead.
  latestMap().should(
    ($el) =>
      expect(/** @type {any} */ ($el[0]).globe.planet.atmosphereEnabled).to.be
        .true,
  );
  latestMap().then(($el) => {
    /** @type {any} */ ($el[0]).globeConfig = { atmosphere: false };
  });
  latestMap().should(
    ($el) =>
      expect(/** @type {any} */ ($el[0]).globe.planet.atmosphereEnabled).to.be
        .false,
  );
};

/**
 * Mounts a globe seen from far away, so space surrounds it.
 *
 * @param {import("../../../src/types").GlobeConfig} globeConfig
 */
function mountFarGlobe(globeConfig) {
  cy.mount(
    html`<eox-map
      .projection=${"globe"}
      .globeConfig=${globeConfig}
    ></eox-map>`,
  );
  latestMap().should(
    ($el) => expect(/** @type {any} */ ($el[0]).globe).to.exist,
  );
  latestMap().then(($el) =>
    /** @type {any} */ ($el[0]).globe.planet.camera.setLonLat(
      new LonLat(0, 0, 3e7),
      new LonLat(0, 0, 0),
      Vec3.NORTH,
    ),
  );
}

/**
 * RGBA of the top tenth of the canvas, which looks into space.
 *
 * @returns {Cypress.Chainable<number[][]>}
 */
function readSky() {
  return readGlobePixels().then(({ width, height, data }) => {
    const rows = Math.ceil(height / 10);
    // readPixels starts at the bottom row.
    const start = (height - rows) * width * 4;
    return Array.from({ length: rows * width }, (_, i) =>
      Array.from(data.subarray(start + i * 4, start + i * 4 + 4)),
    );
  });
}

/**
 * Reads the globe canvas right after og's next frame; og doesn't keep the
 * drawing buffer, so it can't be read later.
 *
 * @returns {Cypress.Chainable<{ width: number, height: number, data: Uint8Array }>}
 */
function readGlobePixels() {
  return latestMap().then(
    ($el) =>
      new Promise((resolve) => {
        const { events, handler } = /** @type {any} */ ($el[0]).globe.renderer;
        const read = () => {
          events.off("postdraw", read);
          const { gl } = handler;
          const { width, height } = gl.canvas;
          const data = new Uint8Array(width * height * 4);
          gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
          resolve({ width, height, data });
        };
        events.on("postdraw", read);
      }),
  );
}

/**
 * The eox-map mounted last; every mount in a test adds another one.
 *
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
 */
function latestMap() {
  return cy.get("eox-map").last();
}
