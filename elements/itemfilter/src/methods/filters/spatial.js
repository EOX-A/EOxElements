import { getMapLayers, resetFilter } from "../../helpers/index.js";

/**
 * Resets the spatial filter to its default state and updates the component.
 *
 * @param {Object} EOxItemFilterSpatial - The EOxItemFilterSpatial component instance.
 */
export function resetSpatialMethod(EOxItemFilterSpatial) {
  resetFilter(EOxItemFilterSpatial.filterObject);

  const spatialFilter = EOxItemFilterSpatial.renderRoot.querySelector(
    "itemfilter-spatial-filter"
  );
  spatialFilter.reset();
  EOxItemFilterSpatial.requestUpdate();
}

/**
 * Resets the spatial filter map and re-initializes it.
 *
 * @param {Object} EOxItemFilterSpatial - The EOxItemFilterSpatial component instance.
 */
export function resetSpatialFilterMethod(EOxItemFilterSpatial) {
  EOxItemFilterSpatial.renderRoot.querySelector("#eox-map").innerHTML = "";
  setupSpatialMethod(EOxItemFilterSpatial);
}

/**
 * Handles the click event for spatial mode buttons and updates the filter state.
 *
 * @param {string} mode - The selected spatial mode.
 * @param {Object} EOxItemFilterSpatial - The EOxItemFilterSpatial component instance.
 */
export function handleClickSpatialMethod(mode, EOxItemFilterSpatial) {
  EOxItemFilterSpatial.filterObject.state.mode = mode;
  const event = new CustomEvent("filter", {
    detail: {
      [EOxItemFilterSpatial.filterObject.key]: {},
    },
  });
  EOxItemFilterSpatial.dispatchEvent(event);
}

/**
 * Sets up the spatial filter map and its interactions.
 *
 * @param {Object} that - The EOxItemFilterSpatial component instance.
 */
export function setupSpatialMethod(that) {
  const parentEOxMap = that.renderRoot.querySelector("#eox-map");
  if (parentEOxMap.innerHTML === "")
    parentEOxMap.innerHTML = `<eox-map part="map" style="height: 400px"></eox-map>`; // Initialize the map element if it is not already initialized

  // Create the feature URL if geometry is provided
  const url = that.geometry && createFeatureUrl(that.geometry);
  const mapLayers = getMapLayers(that.geometry, url);

  that.eoxMap = that.renderRoot.querySelector("eox-map");

  // Set up the map layers and interactions after a short delay
  setTimeout(() => {
    that.eoxMap.layers = mapLayers;

    // Function to update the geometry filter
    const updateGeometryFilter = (feature) => {
      const event = new CustomEvent("filter", {
        detail: {
          geometry: {
            type: "Polygon",
            coordinates: feature
              .getGeometry()
              .clone()
              .transform("EPSG:3857", "EPSG:4326")
              .getCoordinates(),
          },
        },
      });
      that.dispatchEvent(event);
    };

    // Set up draw end interaction
    that.eoxMap.interactions["drawInteraction"].on("drawend", (e) => {
      updateGeometryFilter(e.feature);
      that.eoxMap.removeInteraction("drawInteraction");
    });

    // Set up modify end interaction
    that.eoxMap.interactions["drawInteraction_modify"].on("modifyend", (e) => {
      updateGeometryFilter(e.features.getArray()[0]);
    });
  }, 1000);
}

/**
 * Creates a URL for a GeoJSON feature collection from the given geometry.
 *
 * @param {Object} geometry - The geometry to include in the feature collection.
 * @returns {string} The URL for the GeoJSON feature collection.
 */
function createFeatureUrl(geometry) {
  const featureString = encodeURIComponent(
    JSON.stringify({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: null,
          geometry,
        },
      ],
    })
  );
  return `data:text/json,${featureString}`;
}
