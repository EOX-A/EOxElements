import ScaleLine from "ol/control/ScaleLine.js";
import MousePosition from "ol/control/MousePosition.js";
import { fromLonLat, get as getProjection, transform } from "ol/proj.js";

/**
 * Keeps the OL scale lines and mouse positions of a map working on its globe,
 * where the OL map is hidden and renders no frames.
 *
 * @param {import("../../main").EOxMap} EOxMap - The map instance.
 * @param {import("@openglobus/og").Globe} globe - Its globe.
 */
export function mountGlobeControls(EOxMap, globe) {
  const { planet } = globe;
  // OL hides scale lines on each of its empty frames, so redraw them after every globe frame.
  planet.renderer.events.on("postdraw", () => {
    const scaleLines = getControlsOfType(EOxMap, ScaleLine);
    if (scaleLines.length) renderScaleLines(scaleLines, globe);
  });
  planet.renderer.events.on("mousemove", (event) => {
    const controls = getControlsOfType(EOxMap, MousePosition);
    // Picking reads the GPU depth buffer, so only pick when something shows it.
    if (controls.length)
      showMousePosition(
        controls,
        EOxMap,
        planet.getLonLatFromPixelTerrain(event),
      );
  });
  planet.renderer.events.on("mouseleave", () =>
    showMousePosition(getControlsOfType(EOxMap, MousePosition), EOxMap),
  );
}

/**
 * Renders scale lines for the ground scale at the globe's screen centre.
 *
 * @param {ScaleLine[]} scaleLines - The map's scale lines.
 * @param {import("@openglobus/og").Globe} globe - The globe.
 */
function renderScaleLines(scaleLines, globe) {
  const viewState = getGlobeViewState(globe);
  // A missing frame state hides the scale line, as OL does when it has no view.
  const mapEvent = /** @type {import("ol/MapEvent").default} */ (
    /** @type {unknown} */ ({ frameState: viewState && { viewState } })
  );
  scaleLines.forEach((scaleLine) => scaleLine.render(mapEvent));
}

/**
 * The OL view state matching the globe at the screen centre.
 *
 * @param {import("@openglobus/og").Globe} globe - The globe.
 * @returns {import("ol/View").State | null} Null when the screen centre looks into space.
 */
function getGlobeViewState(globe) {
  const { planet } = globe;
  const { camera, renderer } = planet;
  const centre = planet.getCartesianFromPixelEllipsoid(
    renderer.handler.getCenter(),
  );
  if (!centre) return null;
  const { lon, lat } = planet.ellipsoid.cartesianToLonLat(centre);
  const metresPerPixel =
    (2 *
      camera.eye.distance(centre) *
      Math.tan((camera.viewAngle * Math.PI) / 360)) /
    renderer.handler.canvas.clientHeight;
  return /** @type {import("ol/View").State} */ ({
    center: fromLonLat([lon, lat]),
    projection: getProjection("EPSG:3857"),
    // EPSG:3857 stretches by 1 / cos(lat); OL's scale line undoes that.
    resolution: metresPerPixel / Math.cos((lat * Math.PI) / 180),
  });
}

/**
 * Shows a globe coordinate in mouse position controls.
 *
 * @param {MousePosition[]} controls - The map's mouse position controls.
 * @param {import("../../main").EOxMap} EOxMap - The map instance.
 * @param {import("@openglobus/og").LonLat} [lonLat] - The coordinate; none shows the placeholder.
 */
function showMousePosition(controls, EOxMap, lonLat) {
  controls.forEach((control) => {
    if (!lonLat) {
      // @ts-expect-error protected; shows the placeholder as when the pointer leaves the 2D map
      control.handleMouseOut();
      return;
    }
    const projection =
      control.getProjection() ?? EOxMap.map.getView().getProjection();
    const coordinate = transform(
      [lonLat.lon, lonLat.lat],
      "EPSG:4326",
      projection,
    );
    const html =
      control.getCoordinateFormat()?.(coordinate) ?? coordinate.toString();
    // @ts-expect-error protected; OL only writes it from its own pointer events
    control.element.innerHTML = html;
    // @ts-expect-error private; keeps OL's cache in step, or its next 2D update is skipped
    control.renderedHTML_ = html;
  });
}

/**
 * The map's controls of one type.
 *
 * @template T
 * @param {import("../../main").EOxMap} EOxMap - The map instance.
 * @param {new (...args: any[]) => T} type - The control class.
 * @returns {T[]} The controls of that type.
 */
function getControlsOfType(EOxMap, type) {
  return /** @type {T[]} */ (
    EOxMap.map
      .getControls()
      .getArray()
      .filter((control) => control instanceof type)
  );
}
