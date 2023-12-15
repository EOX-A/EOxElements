import { updateUrl } from "../../helpers";

/**
 * @param {{[key: string]: any}} data
 * @param {Function} tileUrlFunc
 * @param {import("../../components/layerConfig").EOxLayerControlLayerConfig} EOxLayerControlLayerConfig - Instance of EOxLayerControlLayer
 */
const dataChange = (data, tileUrlFunc, EOxLayerControlLayerConfig) => {
  let newTileUrlFunc = tileUrlFunc;

  // @ts-ignore
  if (EOxLayerControlLayerConfig.layer.getSource().getTileUrlFunction()) {
    if (!newTileUrlFunc)
      newTileUrlFunc = EOxLayerControlLayerConfig.layer
        .getSource()
        // @ts-ignore
        .getTileUrlFunction();

    EOxLayerControlLayerConfig.layer
      .getSource()
      // @ts-ignore
      .setTileUrlFunction((...args) =>
        updateUrl(newTileUrlFunc(...args), data)
      );

    // TODO dont be accessing protected methods!
    // @ts-ignore
    EOxLayerControlLayerConfig.layer.getSource().setKey(new Date());
  }

  return newTileUrlFunc;
};

export default dataChange;
