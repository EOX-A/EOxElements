import _debounce from "lodash.debounce";

/**
 * Handles initial settings and event triggers upon the component's first update.
 *
 * @param {import("../../components/layerList").EOxLayerControlLayerList} EOxLayerControlLayerList
 */
const updateMethod = (EOxLayerControlLayerList) => {
  const { layers } = EOxLayerControlLayerList;

  const debHandleLayersChangeLength = _debounce(() => {
    EOxLayerControlLayerList.requestUpdate();
    EOxLayerControlLayerList.dispatchEvent(
      new CustomEvent("changed", { bubbles: true })
    );
  }, 50);

  const handleLayersChangeLength = () => debHandleLayersChangeLength();

  if (!layers) return;

  if (layers.hasListener("change:length"))
    layers?.un("change:length", handleLayersChangeLength);

  layers.on("change:length", handleLayersChangeLength);
};

export default updateMethod;
