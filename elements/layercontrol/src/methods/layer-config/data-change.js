import { updateUrl } from "../../helpers";
import XYZ_ol from "ol/source/XYZ.js";

/**
 * This function 'dataChange' is designed to handle changes in data within a layer configuration.
 * And creates a new a tileUrlFunction
 *
 * @param {{[key: string]: any}} data - The updated data to be applied to the layer.
 * @param {Function} tileUrlFunc - The function generating the tile URL for the layer.
 * @param {import("../../components/layer-config").EOxLayerControlLayerConfig} EOxLayerControlLayerConfig - Instance of EOxLayerControlLayer.
 * @return {Function} - New function generating the tile URL for the layer.
 */
const dataChangeMethod = (data, tileUrlFunc, EOxLayerControlLayerConfig) => {
  let newTileUrlFunc = tileUrlFunc; // Placeholder for the updated tile URL function.

  // Checking if the layer's tile URL function exists.
  // If it does, set 'newTileUrlFunc' to the layer's tile URL function.
  // This step ensures the original tile URL function is preserved if 'tileUrlFunc' is not provided.
  const source =
    /** @type {import("ol/source").Source & { getTileUrlFunction: Function, setTileUrlFunction: Function, setKey: Function, updateParams: Function, _updatedUrl: string, getUrls: Function }} */ (
      EOxLayerControlLayerConfig.layer.getSource()
    );
    
  const removeProperties =
    EOxLayerControlLayerConfig.layerConfig.schema?.options?.removeProperties ??
    [];
  const updatedData = { ...data };
  removeProperties.forEach((prop) => delete updatedData[prop]);

  if (source.updateParams) {
    source.updateParams(updatedData);
  } else if (source.getTileUrlFunction && source.getTileUrlFunction()) {
    if (!newTileUrlFunc) {
      newTileUrlFunc = source.getTileUrlFunction();
    }

    // Store the updated URL synchronously so switching to the globe reflects the change
    if (source instanceof XYZ_ol) {
      source._updatedUrl = updateUrl(
        /** @type {XYZ_ol} */ (source).getUrls()[0],
        data,
      );
    }

    // Setting a new tile URL function for the layer's source by applying updated data to the existing function.
    source.setTileUrlFunction((...args) => {
      const url = new URL(newTileUrlFunc(...args));
      // Remove unwanted properties from query parameters
      removeProperties.forEach((prop) => url.searchParams.delete(prop));
      return updateUrl(url.href, data);
    });

    // TODO: It's not advisable to access protected methods directly.
    // Setting a new key for the layer source to trigger a refresh.
    source.setKey(new Date().toISOString());
  }

  const map = /** @type {import("../../../../map/src/main").EOxMap} */ (
    document.querySelector("eox-map")
  );
  if (map) {
    const globe = map.globe;
    if (globe) {
      const globusLayer = globe.planet.layers.filter(
        (l) => l.name == EOxLayerControlLayerConfig.layer.get("id"),
      )[0];
      if (globusLayer) {
        globusLayer.setUrl(updateUrl(globusLayer.url, data));
      }
      window.eoxMapGlobe.refresh();
    }
  }

  return newTileUrlFunc;
};

export default dataChangeMethod;