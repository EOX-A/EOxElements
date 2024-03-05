import "@eox/map/dist/eox-map-advanced-layers-and-sources.js";
import "@eox/map";
import "@eox/jsonform";
import "../src/main";
import {
  ExclusiveLayersStory,
  ExpandedLayersStory,
  HiddenLayersStory,
  LayerConfigStory,
  OptionalLayersStory,
  PrimaryStory,
  ToolsStory,
  addExternalLayerStory,
  layerZoomStateStory,
  unstyledStory,
} from ".";

export default {
  title: "Elements/eox-layercontrol",
  tags: ["autodocs"],
  component: "eox-layercontrol",
  parameters: {
    componentSubtitle: "Manage and configure OpenLayers map layers",
    layout: "centered",
  },
};

/**
 * Basic layercontrol setup.
 */
export const Primary = PrimaryStory;

/**
 * By adding the `layerControlExclusive` property to map layers,
 * only one of them at a time can be visualized.
 */
export const ExclusiveLayers = ExclusiveLayersStory;

/**
 * By adding the `layerControlOptional` property to map layers,
 * they are not initially rendered in the layer list, but in a
 * selection interface. They can be added to the layer list manually.
 * Removing a layer puts it back into the optional list.
 */
export const OptionalLayers = OptionalLayersStory;

/**
 * By adding the `layerControlExpand` property to map layers,
 * they render in the layer control as opened.
 */
export const ExpandedLayers = ExpandedLayersStory;

/**
 * The layer control accepts a "tools" array, which enable
 * extra functionalities for layers
 */
export const Tools = ToolsStory;

/**
 * The "config" tool reads settings passed via the "layerConfig" property,
 * e.g. rendering a from from a provided JSON schema that allows updating the
 * source url parameters.
 * Needs import of `@eox/jsonform` in order to work.
 */
export const LayerConfig = LayerConfigStory;

/**
 * By adding the `layerControlHide` property to map layers,
 * they aren't displayed in the layer control at all (but may
 * be still rendered on the map).
 */
export const HiddenLayers = HiddenLayersStory;

/**
 * Defining the configuration for adding an external layer like WMS/XYZ or import JSON.
 */
export const AddExternalLayer = addExternalLayerStory;

/**
 * Zoom layer state based on `minZoom` and `maxZoom`.
 * The color change state only visible when `showLayerZoomState` is set inside layer properties.
 */
export const LayerZoomState = layerZoomStateStory;

/**
 * Unstyled version of the Element
 */
export const Unstyled = unstyledStory;
