import { html } from "lit";
import { LonLat, Vec3 } from "@openglobus/og";

/**
 * Tests that `lonLatExtent` returns a valid EPSG:4326 extent around the
 * camera target while the globe is on.
 *
 * @param {[number, number]} lonLat - Camera target.
 * @param {number} height - Camera height in meters.
 * @param {(extent: Array<number>, eoxMap: import("@eox/map").EOxMap) => void} [assertExtent] - Position specific checks.
 * @param {number} [eyeLatOffset] - Moves the camera south of the target by this many degrees to tilt it; 0 looks straight down.
 */
export const testGlobeLonLatExtent = (
  [lon, lat],
  height,
  assertExtent,
  eyeLatOffset = 0,
) => {
  cy.mount(
    html`<eox-map
      .layers=${[
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ]}
      .projection=${"globe"}
    ></eox-map>`,
  ).as("eox-map");

  cy.get("eox-map").should(($el) => expect($el[0].globe).to.exist);
  cy.get("eox-map").then(($el) => {
    /** @type {any} */ ($el[0]).globe.planet.camera.setLonLat(
      new LonLat(lon, lat - eyeLatOffset, height),
      new LonLat(lon, lat, 0),
      Vec3.NORTH,
    );
  });

  // setLonLat updates the camera synchronously; retries only cover the renderer setup
  cy.get("eox-map").should(($el) => {
    const eoxMap = /** @type {any} */ ($el[0]);
    const extent = eoxMap.lonLatExtent;
    const [minX, minY, maxX, maxY] = extent;
    // lons may exceed ±180 across the antimeridian, but never wrap
    expect(minX).to.be.lessThan(maxX);
    expect(maxX - minX).to.be.at.most(360);
    expect(minY).to.be.within(-90, maxY);
    expect(maxY).to.be.at.most(90);
    expect(lon).to.be.within(minX, maxX);
    expect(lat).to.be.within(minY, maxY);
    assertExtent?.(extent, eoxMap);
  });
};
