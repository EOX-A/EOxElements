import { updateUrl } from "../../helpers";

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
  // @ts-ignore
  if (EOxLayerControlLayerConfig.layer.getSource().getTileUrlFunction()) {
    if (!newTileUrlFunc) {
      newTileUrlFunc = EOxLayerControlLayerConfig.layer
        .getSource()
        // @ts-ignore
        .getTileUrlFunction();
    }

    // Setting a new tile URL function for the layer's source by applying updated data to the existing function.
    EOxLayerControlLayerConfig.layer
      .getSource()
      // @ts-ignore
      .setTileUrlFunction((...args) =>
        updateUrl(newTileUrlFunc(...args), data)
      );

    // TODO: It's not advisable to access protected methods directly.
    // Setting a new key for the layer source to trigger a refresh.
    // @ts-ignore
    EOxLayerControlLayerConfig.layer.getSource().setKey(new Date());
  }

  return newTileUrlFunc;
};

export default dataChangeMethod;
