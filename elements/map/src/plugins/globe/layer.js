import { CanvasTiles } from "@openglobus/og";
/**
 *
 */
export const refreshGlobe = (globe) => {
  if (globe) {
    globe.planet.layers.forEach((l) => {
      if (l instanceof CanvasTiles) {
        l.abortLoading();
        // Force redraw of all tiles by temporarily setting animated flag
        l.animated = true;
        setTimeout(() => (l.animated = false), 200);
      }
    });
  }
};
