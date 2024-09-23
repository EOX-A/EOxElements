import {
  cancelAnimation,
  getCenterFromProperty,
  addScrollInteractions,
  coordinatesRoughlyEquals,
  removeDefaultScrollInteractions,
  getLayerById,
} from "../../helpers";
import { addOrUpdateControl } from "../../controls/controls";
import {
  get as getProjection,
  getPointResolution,
  transform as olTransform,
} from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import View from "ol/View";
import { getElement } from "../../../../../utils";

/**
 * @typedef {import("../../../types").EoxLayer} EoxLayer
 * @typedef {import("../../../types").ControlType} ControlType
 * @typedef {import("../../../types").ControlDictionary} ControlDictionary
 * @typedef {import("../../../types").SelectOptions} SelectOptions
 * @typedef {import("../../../types").ConfigObject} ConfigObject
 * @typedef {import("../../../types").ProjectionLike} ProjectionLike
 * */

/**
 * Sets the new center of the map if it differs from the current center.
 *
 * @param {Array<number>} center - The new center coordinates.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the current map view and projection.
 * @returns {Array<number>|undefined} - The new center coordinates or undefined if unchanged.
 */
export function setCenterMethod(center, EOxMap) {
  let newCenter = undefined;

  // Check if the new center is the same as the current center
  const centerIsSame =
    center?.length &&
    coordinatesRoughlyEquals(center, EOxMap.map.getView().getCenter());

  // Check if the new center is the same as the current center
  if (center && !centerIsSame) {
    if (!EOxMap.projection || EOxMap.projection === "EPSG:3857") {
      newCenter = getCenterFromProperty(center);
    } else newCenter = center;
  }

  // Return the new center or undefined if unchanged
  return newCenter;
}

/**
 * Adjusts the map view to fit the specified extent.
 *
 * @param {import("ol/extent").Extent} extent - The extent to fit the map view to.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the map view and animation options.
 * @returns {import("ol/extent").Extent} - The extent if valid, otherwise undefined.
 */
export function setZoomExtentMethod(extent, EOxMap) {
  // If the extent is not provided or is empty, exit the function
  if (!extent || !extent.length) return undefined;

  const view = EOxMap.map.getView();

  // Cancel any ongoing animations on the map view to ensure a smooth transition
  cancelAnimation(view);

  // Fit the map view to the extent asynchronously
  setTimeout(() => view.fit(extent, EOxMap.animationOptions), 0);

  // Return the extent that was fitted
  return extent;
}

/**
 * Adds or updates controls on the map, removing any outdated controls.
 *
 * @param {ControlDictionary} controls - New controls to set on the map.
 * @param {ControlDictionary} oldControls - Previously set controls on the map.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the control management functions.
 * @returns {ControlDictionary} - The new controls.
 */
export function setControlsMethod(controls, oldControls, EOxMap) {
  const newControls = /** @type {ControlDictionary} **/ controls;

  // Remove old controls not present in the new controls
  if (oldControls) {
    const oldControlTypes =
      /** @type {ControlType[]} **/ Object.keys(oldControls);
    const newControlTypes =
      /** @type {ControlType[]} **/ Object.keys(newControls);

    // Loop through each old control type
    for (let i = 0, ii = oldControlTypes.length; i < ii; i++) {
      const oldControlType = oldControlTypes[i];

      // If the old control type is not in the new controls, remove it
      if (!newControlTypes.includes(oldControlType))
        EOxMap.removeControl(oldControlType);
    }
  }

  // Add or update new controls
  if (newControls) {
    const keys = /** @type {ControlType[]} **/ Object.keys(controls);
    for (let i = 0, ii = keys.length; i < ii; i++) {
      const key = /** @type {ControlType} **/ keys[i];

      // Add or update the control using the helper function
      // @ts-expect-error - Error throwing even type is declared.
      addOrUpdateControl(EOxMap, oldControls, key, controls[key]);
    }
  }

  return newControls;
}

/**
 * Parse and reverse the layers array
 *
 * @param {Array<EoxLayer>} layers
 * @return {Array<EoxLayer>}
 * */
function parseLayer(layers) {
  return JSON.parse(JSON.stringify(layers)).reverse();
}

/**
 * Adds or updates layers on the map, removing any outdated layers.
 *
 * @param {Array<EoxLayer>} layers - New layers to set on the map.
 * @param {Array<EoxLayer>} oldLayers - Previously set layers on the map.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing layer management functions.
 * @returns {Array<EoxLayer>} - The new layers.
 */
export function setLayersMethod(layers, oldLayers, EOxMap) {
  // Deep copy the new layers array and reverse it to maintain correct layer stacking order
  const newLayers = parseLayer(layers);

  // Remove old layers not present in the new layers
  if (oldLayers) {
    oldLayers.forEach((l) => {
      // Check if the current old layer is not in the new layers list by its ID
      if (
        !l.properties?.id ||
        !newLayers.find(
          (newLayer) => newLayer.properties.id === l.properties.id
        )
      ) {
        // Retrieve the layer to be removed from the map
        const layerToBeRemoved = getLayerById(EOxMap, l.properties?.id);
        const jsonDefinition = layerToBeRemoved.get("_jsonDefinition");
        const intersections = jsonDefinition.interactions;

        // Remove any interactions associated with the layer
        intersections?.forEach(
          /** @param {{type: string, options: { id: string}}} interaction  **/ (
            interaction
          ) => {
            if (interaction.type === "select") {
              EOxMap.removeSelect(interaction.options.id);
            } else {
              EOxMap.removeInteraction(interaction.options.id);
            }
          }
        );

        // Remove the layer from the map
        EOxMap.map.removeLayer(layerToBeRemoved);
      }
    });
  }

  // Add or update new layers
  newLayers.forEach((l) => {
    EOxMap.addOrUpdateLayer(l);
  });

  // Sort layers by their IDs
  const sortedIds = newLayers.map((l) => l.properties?.id);
  EOxMap.map
    .getLayers()
    .getArray()
    .sort((layerA, layerB) => {
      return (
        sortedIds.indexOf(layerA.get("id")) -
        sortedIds.indexOf(layerB.get("id"))
      );
    });

  // Return the new layers object
  return newLayers;
}

/**
 * Enables or disables scroll interactions on the map.
 *
 * @param {boolean} preventScroll - Whether to prevent scroll interactions.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing scroll interaction management functions.
 * @returns {boolean} - The current scroll prevention state.
 */
export function setPreventScrollMethod(preventScroll, EOxMap) {
  if (preventScroll) {
    // Remove the default scroll interactions to prevent scrolling
    removeDefaultScrollInteractions(EOxMap.map);

    // Add custom scroll interactions with the prevent-scroll flag set to true
    addScrollInteractions(EOxMap.map, true);
  } else addScrollInteractions(EOxMap.map);

  // Return the current scroll prevention state
  return preventScroll;
}

/**
 * Sets the map's configuration options.
 *
 * @param {ConfigObject} config - Configuration object containing view, layers, controls, and other properties.
 * @param {import("../../main").EOxMap} EOxMap - The map object to configure.
 * @returns {ConfigObject} - The applied configuration.
 */
export function setConfigMethod(config, EOxMap) {
  // Update animation options if provided in the configuration
  if (config?.animationOptions !== undefined)
    EOxMap.animationOptions = config.animationOptions;

  // Set the map's projection, defaulting to 'EPSG:3857' if not specified
  EOxMap.projection = config?.view?.projection || "EPSG:3857";

  // Set the layers, controls, and other map properties from the configuration
  EOxMap.layers = config?.layers || [];
  EOxMap.controls = config?.controls || {};

  // Set the scroll prevention option if it has not been defined yet
  if (EOxMap.preventScroll === undefined)
    EOxMap.preventScroll = config?.preventScroll;

  // Set the zoom, center, and zoom extent of the map view
  EOxMap.zoom = config?.view?.zoom || 0;
  EOxMap.center = config?.view?.center || [0, 0];
  EOxMap.zoomExtent = config?.view?.zoomExtent;

  // Return the applied configuration
  return config;
}

/**
 * Sets a new projection for the map, transforming the view and adjusting related properties.
 *
 * @param {ProjectionLike} projection - The new projection code.
 * @param {ProjectionLike} oldProjection - The current projection code.
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the current view and layer management functions.
 * @returns {ProjectionLike} - The new projection code.
 */
export function setProjectionMethod(projection, oldProjection, EOxMap) {
  let newProj = oldProjection;

  const oldView = EOxMap.map.getView();

  // Check if the projection needs to be updated
  if (
    projection &&
    getProjection(projection) &&
    projection !== oldView.getProjection().getCode()
  ) {
    // Transform the map's center to the new projection
    const newCenter = olTransform(
      oldView.getCenter(),
      oldView.getProjection().getCode(),
      projection
    );

    // Calculate the new resolution in the new projection
    const newProjection = getProjection(projection);
    const oldResolution = oldView.getResolution();
    const oldMPU = oldView.getProjection().getMetersPerUnit();
    const newMPU = newProjection.getMetersPerUnit();
    const oldPointResolution =
      getPointResolution(
        oldView.getProjection(),
        1 / oldMPU,
        oldView.getCenter(),
        "m"
      ) * oldMPU;
    const newPointResolution =
      getPointResolution(newProjection, 1 / newMPU, newCenter, "m") * newMPU;

    const newResolution =
      (oldResolution * oldPointResolution) / newPointResolution;

    // Create a new view using the new projection and properties
    const newView = new View({
      zoom: oldView.getZoom(),
      center: newCenter,
      resolution: newResolution,
      rotation: oldView.getRotation(),
      projection,
    });

    // Transfer existing event listeners from the old view to the new view
    /** @type {Array<import("ol/View").ViewObjectEventTypes>} **/
    const eventTypes = [
      "change:center",
      "change:resolution",
      "change:rotation",
      "propertychange",
    ];
    eventTypes.forEach((eventType) => {
      const existingListeners = oldView.getListeners(eventType);
      if (existingListeners?.length) {
        for (let i = existingListeners.length - 1; i >= 0; i--) {
          const listener = /** @type {any} **/ existingListeners[i];

          // @ts-expect-error - Type '"propertychange"' is not assignable to type 'EventTypes'.
          oldView.un(eventType, listener);
          // @ts-expect-error - Type '"propertychange"' is not assignable to type 'EventTypes'.
          newView.on(eventType, listener);
        }
      }
    });

    // Set the new view on the map and refresh vector layers
    EOxMap.map.setView(newView);
    EOxMap.getFlatLayersArray(EOxMap.map.getLayers().getArray())
      .filter((l) => l instanceof VectorLayer)
      .forEach((l) => l.getSource().refresh());

    // Update the projection and center properties
    newProj = projection;
    EOxMap.center = newCenter;
  }

  // Return the new projection code
  return newProj;
}

/**
 * Synchronizes the map view with another map element.
 *
 * @param {string} sync - The ID of the map element to synchronize with.
 * @param {import("../../main").EOxMap} EOxMap - The map object to sync.
 * @returns {string} - The sync parameter.
 */
export function setSyncMethod(sync, EOxMap) {
  if (sync) {
    // Use a timeout to ensure the target map is ready before syncing views
    setTimeout(() => {
      const originElement =
        /** @type {import("../../main").EOxMap} **/ getElement(sync);
      const originMap =
        /** @type {import("../../main").EOxMap} **/ originElement
          ? originElement.map
          : null;

      // Set the view of the current map to match the view of the origin map
      if (originMap) EOxMap.map.setView(originMap.map.getView());
    });
  }

  return sync;
}
