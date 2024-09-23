import { animateToStateMethod } from "./";

/**
 * Sets up the initial state of the map and handles its first update, including setting the center,
 * zoom extent, and dispatching events when the map is loaded and mounted.
 *
 * @param {import("ol/extent").Extent} zoomExtent - Optional extent to fit the map view to a specific area.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the map instance, center, animation options, and other properties.
 */
export default function firstUpdatedMethod(zoomExtent, EOxMap) {
  // Set the center of the map once the target changes
  EOxMap.map.once("change:target", (e) => {
    e.target.getView().setCenter(EOxMap.center);
  });

  // Set the target element for the map rendering
  EOxMap.map.setTarget(EOxMap.renderRoot.querySelector("div"));

  // Fit the map view to the specified extent if provided; otherwise, animate to the default state
  if (zoomExtent) EOxMap.map.getView().fit(zoomExtent, EOxMap.animationOptions);
  else animateToStateMethod(EOxMap);

  // Listen for the "loadend" event and dispatch a custom "loadend" event when the map has finished loading
  EOxMap.map.on("loadend", () => {
    EOxMap.dispatchEvent(new CustomEvent("loadend", { detail: EOxMap.map }));
  });

  // Dispatch a custom "mapmounted" event to indicate that the map has been successfully mounted
  EOxMap.dispatchEvent(new CustomEvent("mapmounted", { detail: EOxMap.map }));
}
