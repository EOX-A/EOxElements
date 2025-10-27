/**
 * Factory function to create a select event handler
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
import GeoJSON from 'ol/format/GeoJSON';


const createSelectHandler = (EoxDrawTool) => {
  /**
   * Copy the selected feature to the draw layer
   * and dispatches an event to add the feature to the map.
   *
   * @param {*} e
   */
  const selectHandler = (e) => {
    if (e?.detail.id !== "SelectLayerClickInteraction" || !e.detail.feature) {
      return;
    }
    // Vector tiles geometries do not have the getCoordinates method
    // only dispatch event if the feature has the getCoordinates method
    if (typeof e.detail.feature.getGeometry().getCoordinates !== "function") {
      // try to use the internal flatCoordinates_ and type_ to build a new feature
      const geom = e.detail.feature.getGeometry();
      const geojsonFormat = new GeoJSON();
      const featureGeoJSON = {
        type: "Feature",
        geometry: {
          type: geom.getType(),
          coordinates: geom.flatCoordinates_,
        },
        properties: e.detail.feature.getProperties(),
      };
      const newFeature = geojsonFormat.readFeature(featureGeoJSON);
      e.detail.feature = newFeature;
    }    
    EoxDrawTool.drawLayer.getSource().addFeature(e.detail.feature);
    EoxDrawTool.eoxMap.dispatchEvent(
      new CustomEvent("addfeatures", { detail: e.detail }),
    );
  };

  /**
   * Adds the selection event to the map
   **/
  const addSelectionEvent = () => {
    if (EoxDrawTool.layerId) {
      const hoverInteraction =
        EoxDrawTool.eoxMap.selectInteractions["SelectLayerHoverInteraction"];
      hoverInteraction?.setActive(true);
      EoxDrawTool.eoxMap.addEventListener("select", selectHandler);
    }
  };

  /**
   * Removes the selection event from the map and resets the selected features
   **/
  const removeSelectionEvent = () => {
    const hoverInteraction =
      EoxDrawTool.eoxMap.selectInteractions?.["SelectLayerHoverInteraction"];
    if (hoverInteraction) {
      hoverInteraction.selectedFids = [];
      hoverInteraction?.setActive(false);
    }
    EoxDrawTool.eoxMap.removeEventListener("select", selectHandler);
  };

  return { addSelectionEvent, removeSelectionEvent };
};

export default createSelectHandler;
