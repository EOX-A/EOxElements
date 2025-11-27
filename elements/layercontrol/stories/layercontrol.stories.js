import {
  ExclusiveLayersStory,
  ExpandedLayersStory,
  HiddenLayersStory,
  LayerConfigStory,
  LayerStylesConfigStory,
  unstyledStory,
  OptionalLayersStory,
  PrimaryStory,
  ToolsStory,
  addExternalLayerStory,
  layerDatetimeStory,
  layerZoomStateStory,
  toolsAsListStory,
  layerLegendStory,
  layerColorStory,
} from ".";

export default {
  title: "Elements/eox-layercontrol",
  tags: ["autodocs"],
  component: "eox-layercontrol",
  parameters: {
    componentSubtitle: "Manage and configure OpenLayers map layers",
    layout: "centered",
  },
  argTypes: {
    tools: {
      control: { type: "multi-select" },
      options: ["info", "opacity", "datetime", "config", "remove", "sort"],
    },
  },
};

/**
 * Basic usage of eox-layercontrol. It shows that also with a `for` attribute,
 * it automatically connects to the first `eox-map` it finds in the DOM.
 */
export const Primary = PrimaryStory;

/**
 * Demonstrates mutually exclusive layers. By setting the `layerControlExclusive` property on map layers, only one layer can be visualized at a time. Useful for toggling between base layers or other exclusive datasets. The example shows two layers, only one of which can be active at a time.
 */
export const ExclusiveLayers = ExclusiveLayersStory;

/**
 * Demonstrates optional layers. By setting the `layerControlOptional` property, layers are initially hidden from the main layer list and appear in a selection interface. Users can add optional layers to the list manually, and removing a layer returns it to the optional pool. This is useful for large datasets or overlays that should not clutter the main view.
 */
export const OptionalLayers = OptionalLayersStory;

/**
 * Shows how to pre-expand layers in the control. By setting the `layerControlExpand` property, the corresponding layer dropdown is opened by default, making its details and tools immediately visible. This is useful for highlighting important layers or groups.
 */
export const ExpandedLayers = ExpandedLayersStory;

/**
 * Demonstrates the use of layer tools. The layer control accepts a `tools` array, enabling extra functionalities such as info, opacity, datetime, config, remove, and sort. This example shows how to configure and display these tools for each layer.
 * In the Controls panel, try toggling different combinations of tools to see how the layer control adapts.
 */
export const Tools = ToolsStory;

/**
 * Shows the config tool in action. The "config" tool reads settings from the `layerConfig` property and renders a form based on a provided JSON schema, allowing users to update source URL parameters and other settings. Requires the `@eox/jsonform` package for form rendering.
 */
export const LayerConfig = LayerConfigStory;

/**
 * Demonstrates layer style configuration. The "styles" tool allows users to modify layer appearance, such as color and opacity, using a dedicated interface. Useful for customizing the look and feel of map layers interactively.
 */
export const LayerStylesConfig = LayerStylesConfigStory;

/**
 * Shows how to modify layer time properties. By adding the "datetime" tool, users can interact with time-based layers, adjusting the current step, available values, and playback controls. The `layerDatetime` property passes configuration options to the time control.
 */
export const LayerDateTime = layerDatetimeStory;

/**
 * Demonstrates dynamic color legends for layers. The "legend" tool reads configuration from the `layerLegend` property and creates a color legend based on value ranges and domains. Supports partial configuration of the color-legend-element. Useful for visualizing data ranges and categories.
 */
export const LayerLegend = layerLegendStory;

/**
 * Shows how to hide layers from the control. By setting the `layerControlHide` property, layers are excluded from the layer control UI but may still be rendered on the map. Useful for background or technical layers that should not be user-managed.
 */
export const HiddenLayers = HiddenLayersStory;

/**
 * Demonstrates adding external layers. The control can be configured to allow users to add WMS, XYZ, or import JSON layers dynamically. This example shows the interface for external layer addition and integration.
 */
export const AddExternalLayer = addExternalLayerStory;

/**
 * Shows zoom-based layer state. Layers can be configured with `minZoom` and `maxZoom` properties, and the control will indicate their visibility state based on the current map zoom. The color change state is visible when `showLayerZoomState` is enabled.
 */
export const LayerZoomState = layerZoomStateStory;

/**
 * Shows tools rendered as a list instead of tabs. By enabling the `toolsAsList` property, the tools section is displayed as a vertical list, which can be useful for compact or mobile layouts.
 */
export const ToolsAsList = toolsAsListStory;

/**
 * Demonstrates color swatches for layers. Shows how to define and display custom colors for layers, useful for thematic mapping and visual differentiation of datasets.
 */
export const ColoredLayers = layerColorStory;

/**
 * Demonstrates the unstyled version of the element. By setting the `unstyled` property, the layer control is rendered without default styles, allowing for custom styling and integration into different design systems.
 */
export const Unstyled = unstyledStory;
