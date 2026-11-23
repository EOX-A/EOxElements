import { scene } from "@openglobus/og";
import { DEFAULT_STAR_FACES } from "../../enums/index.js";

/**
 * Creates a sky box from the default star map or custom cube faces.
 * Default star map: Solar System Scope, CC BY 4.0, projected onto cube faces.
 *
 * @see https://www.solarsystemscope.com/textures/
 * @param {true | import("../../types").GlobeStarFaces} stars - `globeConfig.stars`.
 * @returns {import("@openglobus/og").scene.SkyBox} The sky box for a new globe.
 */
export function createStarsSkyBox(stars) {
  return new scene.SkyBox(stars === true ? DEFAULT_STAR_FACES : stars);
}
