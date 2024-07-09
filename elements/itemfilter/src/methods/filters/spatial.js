import { getMapLayers, resetFilter } from "../../helpers/index.js";

export function resetSpatialMethod(EOxItemFilterSpatial) {
  resetFilter(EOxItemFilterSpatial.filterObject);

  const spatialFilter = EOxItemFilterSpatial.renderRoot.querySelector(
    "itemfilter-spatial-filter"
  );
  spatialFilter.reset();
  EOxItemFilterSpatial.requestUpdate();
}

export function resetSpatialFilterMethod(EOxItemFilterSpatial) {
  EOxItemFilterSpatial.renderRoot.querySelector("#eox-map").innerHTML = "";
  setupSpatialMethod(EOxItemFilterSpatial);
}

export function handleClickSpatialMethod(mode, EOxItemFilterSpatial) {
  EOxItemFilterSpatial.filterObject.state.mode = mode;
  const event = new CustomEvent("filter", {
    detail: {
      [EOxItemFilterSpatial.filterObject.key]: {},
    },
  });
  EOxItemFilterSpatial.dispatchEvent(event);
}

export function setupSpatialMethod(that) {
  const parentEOxMap = that.renderRoot.querySelector("#eox-map");
  if (parentEOxMap.innerHTML === "")
    parentEOxMap.innerHTML = `<eox-map part="map" style="height: 400px"></eox-map>`;

  const url = that.geometry && createFeatureUrl(that.geometry);
  const mapLayers = getMapLayers(that.geometry, url);

  that.eoxMap = that.renderRoot.querySelector("eox-map");
  setTimeout(() => {
    that.eoxMap.layers = mapLayers;
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
    that.eoxMap.interactions["drawInteraction"].on("drawend", (e) => {
      updateGeometryFilter(e.feature);
      that.eoxMap.removeInteraction("drawInteraction");
    });
    that.eoxMap.interactions["drawInteraction_modify"].on("modifyend", (e) => {
      updateGeometryFilter(e.features.getArray()[0]);
    });
  }, 1000);
}

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
