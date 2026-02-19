// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import {
  PrimaryStory,
  VectorLayerStory,
  VectorTileLayerStory,
  WMSLayerStory,
  WMTSCapabilitiesLayerStory,
  WMTSTileGridStory,
  StaticImageLayerStory,
  STACLayerStory,
  MapboxStyleLayerStory,
  GeoTIFFLayerStory,
  GeoZarrLayerStory,
  GroupLayerStory,
  ControlsStory,
  GeolocationStory,
  StandardLoadingIndicatorStory,
  CustomFullScreenLoadingIndicatorStory,
  HoverSelectStory,
  ClickSelectStory,
  ClusterExplodeStory,
  TooltipStory,
  TooltipWithPropertyTransformStory,
  HighlightFeaturesAndAnimateStory,
  MapSyncStory,
  ABCompareStory,
  ConfigObjectStory,
  ProjectionStory,
  AnimationsStory,
  PreventScrollStory,
  FlatGeoBufStory,
  CustomTooltipStory,
  GetFeatureInfoTooltipStory,
  CoordinatesCustomTooltipsStory,
  HelperMethodsStory,
  GlobeStory,
} from "./index.js";

export default {
  title: "Elements/eox-map",
  tags: ["autodocs"],
  component: "eox-map",
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <style>
      #story--elements-eox-map--primary--primary-inner eox-map {
        height: 300px;
      }
    </style>
    <eox-map
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .projection=${args.projection}
      .zoom=${args.zoom}
      .useDefaultLOD=${args.useDefaultLOD}
    ></eox-map>
  `,
};

/**
 * Basic map rendered using `eox-map` configuration
 *
 * This renders a map centered on Austria (`lon` of `15`, and `lat` of `48`), with a `zoom` of `7`. The `layers` property allows creating one or multiple layers, in this case it is creating one layer of type `Tile` (analog to OpenLayers `Tile` layer), with a source of type `OSM`(analog to Openlayers `OSM` source).
 *
 * Note that `properties.id` has been set. It is strongly recommended to always set a `properties.id` so that `eox-map` can perform smart layer updates (in essence, checking if the layer type is compatible, then keep it and switch out the source, or replacing the entire layer if the id is the same, or discarding the layer if the id is not present any longer after a property update).
 *
 * The `properties` passed in this object are passed along to the OpenLayers layer, so they are available there via the `get("<property>")` syntax, e.g. `eoxMap.map.getLayers().getArray()[0].get("id")`. `eox-map` also offers a helper function to get a layer by id: `eoxMap.getLayerById("<id>")`; this helper function also works recursively, so it finds layers inside groups as well.
 *
 * Notice that the `eox-map` DOM element has a property `map` which stores a reference to the actual OpenLayers map instance, so one could do e.g. `eoxMap.map.getView().getCenter()`, and other native OpenLayers things.
 */
export const Primary = PrimaryStory;

/**
 * Instead of passing each property individually, one can also pass a `config` property:
 * Note two things here: when using the `config` property, then `center` and `zoom` are nested inside the `view` property. Secondly, this example includes `controls`: by passing `Zoom: {}` this enables the OpenLayers `Zoom` control, without any options (which could be passed inside the object).
* `config` supports the following properties:
*
* ```ts
* export type ConfigObject = {
*   controls: ControlDictionary;
*   layers: EoxLayers;
*   view: {
*     center: Array<number>;
*     zoom: number;
*     zoomExtent?: import("ol/extent").Extent;
*     projection?: ProjectionLike;
*     minZoom?: number;
*     maxZoom?: number;
*   };
*   preventScroll: boolean;
*   animationOptions?: EOxAnimationOptions;
* };
* ```
*
* ```ts
* export type ControlDictionary = {
*   Zoom?: ConstructorParameters<typeof import("ol/control/Zoom").default>[0];
*   ScaleLine?: ConstructorParameters<
*     typeof import("ol/control/ScaleLine").default
*   >[0];
*   Rotate?: ConstructorParameters<typeof import("ol/control/Rotate").default>[0];
*   FullScreen?: ConstructorParameters<
*     typeof import("ol/control/FullScreen").default
*   >[0];
*   ZoomSlider?: ConstructorParameters<
*     typeof import("ol/control/ZoomSlider").default
*   >[0];
*   Attribution?: ConstructorParameters<
*     typeof import("ol/control/Attribution").default
*   >[0];
*   OverviewMap?: Override<
*     ConstructorParameters<typeof import("ol/control/OverviewMap").default>[0],
*     { layers?: EoxLayer[] | AnyLayer[] }
*   >;
*   ZoomToExtent?: ConstructorParameters<
*     typeof import("ol/control/ZoomToExtent").default
*   >[0];
*   MousePosition?: ConstructorParameters<
*     typeof import("ol/control/MousePosition").default
*   >[0];
*   Geolocation?: ConstructorParameters<
*     typeof import("./controls/geo-location").default
*   >[0];
*   LoadingIndicator?: ConstructorParameters<
*     typeof import("./controls/loading-indicator").default
*   >[0];
* };
```

```ts
export type ProjectionLike = import("ol/proj").ProjectionLike;
```

```ts
export type EOxAnimationOptions = import("ol/View").AnimationOptions &
  import("ol/View").FitOptions;
```
 */
export const ConfigObject = ConfigObjectStory;

/**
 * Basic vector layer map rendered using `GeoJSON`
 * This example also shows how to pass multiple layers (two objects in the layers array).
 * Notice that no zoom or center are set; they default to center `[0, 0]` and `zoom`of `0`.
 */
export const VectorLayer = VectorLayerStory;

/**
 * Basic vector layer map rendered using `MVT` tiles
 */
export const VectorTileLayer = VectorTileLayerStory;

/**
 * Renders WMS layer using geo-server
 */
export const WMSLayer = WMSLayerStory;

/**
 * Renders `WMTSCapabilities` layer and fetches the provided capabilities url
 */
export const WMTSCapabilitiesLayer = WMTSCapabilitiesLayerStory;

/**
 * Renders `FlatGeoBuf` layer
 */
export const FlatGeoBuf = FlatGeoBufStory;

/**
 * Renders `WMTSCapabilities` layer and fetches the provided capabilities url
 */
export const WMTSTileGrid = WMTSTileGridStory;

/**
 * Renders a static image layer
 */
export const StaticImage = StaticImageLayerStory;

/**
 * Renders STAC Layer using STAC url json.
 */
export const STACLayer = STACLayerStory;

/**
 * Renders a Layer Composition using Mapbox Styles.
 *
 * A layer of type `MapboxStyle` can take any Mapbox-Style object or URL to an Mapbox-Style document.
 * The `mapboxStyle` property and the `applyOptions` property of the EOxLayer are mapped to `style`- and `options`-property of `apply` of `ol-mapbox-style` respectively.
 * (compare https://openlayers.org/ol-mapbox-style/functions/apply.html)
 */
export const MapboxStyleLayer = MapboxStyleLayerStory;

/**
 * Renders `GeoTIFF` layer as `WebGLTile`
 */
export const GeoTIFFLayer = GeoTIFFLayerStory;

/**
 * Renders `GeoZarr` layer as `WebGLTile`
 */
export const GeoZarrLayer = GeoZarrLayerStory;

/**
 * Renders `Group` layer which contains multiple layers in a group
 */
export const GroupLayer = GroupLayerStory;

/**
 * Renders different `Controls` for the `eox-map` using control config
 */
export const Controls = ControlsStory;

/**
 * Renders Geolocation Control in `eox-map`
 */
export const Geolocation = GeolocationStory;

/**
 * A simple, unobtrusive loading indicator in the bottom left that appears any time when the map is loading.
 */
export const StandardLoadingIndicator = StandardLoadingIndicatorStory;

/**
 * Loading Indicators can also be centered over the entire map by setting the option `type` to `'fullscreen'`, adapting the opacity is adviced when doing so.
 */
export const CustomFullScreenLoadingIndicator =
  CustomFullScreenLoadingIndicatorStory;

/**
 * Renders `eox-map` with `Hover` interaction
 */
export const HoverSelect = HoverSelectStory;

/**
 * Renders `eox-map` with `Click` interaction
 */
export const ClickSelect = ClickSelectStory;

/**
 * Renders `eox-map` with `Cluster-Explode` interaction
 */
export const ClusterExplode = ClusterExplodeStory;

/**
 * `eox-map` offers a built-in tooltip, which needs to be placed inside the default slot:
 * ```
 * <eox-map [...]>
 *   <eox-map-tooltip></eox-map-tooltip>
 * </eox-map>
 * ```
 * The tooltip feature supports Vector, VectorTile, WebGLTile, and (wms) Tile layers.
 * when hovering or clicking a feature, the tooltip will be updated with the feature properties.
 * This renders a list of all feature properties of the currently selected feature.
 * Note that if multiple interactions are registered (e.g. `pointermove` and `singleclick`),
 * the `pointermove` interaction will have higher priority for the tooltip.
 */
export const Tooltip = TooltipStory;

/** * The `eox-map` tooltip can also be used to display information about a feature in a (wms) Tile layers on click
 */
export const GetFeatureInfoTooltip = GetFeatureInfoTooltipStory;

/**
 * The rendering of feature properties inside the tooltip can be transformed
 * by passing a `propertyTransform` function to the tooltip element which applies to each property in the rendering loop:
 * ```
 * <eox-map [...]>
 *   <eox-map-tooltip
 *     .propertyTransform=${({key, value}, feature) => key.includes("COLOR") ? { key: key.toLowerCase(), value }}
 *   ></eox-map-tooltip>
 * </eox-map>
 * ```
 *
 * The first argument are `key` and `value` of the current feature property; this object needs to be
 * returned in order to render the property in the list.
 * Additionally, the entire feature is passed as a second argument, for cases of more advanced property
 * transformation in which needs access to the entire feature.
 */
export const TooltipWithPropertyTransform = TooltipWithPropertyTransformStory;

/**
 * Instead of the built-in `eox-map-tooltip`, it is possible to use any other (custom) element as tooltip by setting the `is` attribute:
 * ```
 * <eox-map [...]>
 *   <custom-element is="eox-map-tooltip"></custom-element>
 * </eox-map>
 * ```
 *
 * This custom tooltip is updated each time a feature is selected by setting its `feature` property; it can also be updated manually by e.g. hooking into the `@select` event.
 */
export const CustomTooltip = CustomTooltipStory;

/** * The `eox-map` tooltip can also be used to display information about a COG's pixel.
 * The tooltip will then display the bands values of the hovered/clicked feature.
 * The tooltip can also provide coordinates of the clicked/selected pixel, it will show it in WGS84 by default.
 * The coordinates can be transformed to any other projection by setting the `projection` property of the tooltip.
 * The displayed coordinates decimal places can be set via the `precision` property.
 */
export const CoordinatesCustomTooltips = CoordinatesCustomTooltipsStory;

/**
 * Select interactions offer a `highlightById` method, with which vector features can be programmatically selected via their id property.
 * It expects an array with a list of ids to be selected.
 * Optionally, passing a second argument allows to set the [`fitOptions`](https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions),
 * adding view animation to the selection.
 */
export const HighlightFeaturesAndAnimate = HighlightFeaturesAndAnimateStory;

/**
 * Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).
 */
export const MapSync = MapSyncStory;

/**
 * To compare two maps, wrap them in an `<eox-map-compare>` element and assign them to the slot `first` and `second`.
 * Also use the `sync` attribute so both move their view together.
 *
 * `eox-map-compare` also takes a `value` property (0 - 100) which determines the position of the comparison slider;
 * and an `enabled` attribute, which can be either `"first"` (only left map visible), `"second"` (only second map visible)
 * or `undefined` (default, both visible).
 *
 * In the Controls panel, try changing the `enabled` attribute to `"first"` or `"second"` and see how only one map is visible.
 */
export const ABCompare = ABCompareStory;

/**
 * The projection of the view can be changed via the `projection`-attribute/property.
 * Out-of-the-box the projections EPSG:3857 (default) and EPSG:4326 (geographic coordinates)
 * are included, additional projections can be used by registering them via the `registerProjection` or
 * `registerProjectionFromCode` helper functions beforehand.
 * In the Controls panel, try changing the projection from the default `EPSG:3857` to `EPSG:4326` and see
 * how the map instantly updates.
 */
export const Projection = ProjectionStory;

/**
 * changing the properties `zoom`, `center` or `zoomExtent` will trigger animations, if the
 * `animationOptions`-property is set.
 * animation options for `zoom` or `center`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~AnimationOptions
 * animation options for `zoomExtent`: https://openlayers.org/en/latest/apidoc/module-ol_View.html#~FitOptions
 * In the Controls panel, try changing the `zoom` or `center` properties and see how the map animates to the new view.
 */
export const Animations = AnimationsStory;

/**
 * By setting the `prevent-scroll` attribute or by setting `preventScroll` property to `true` (either on the element or within the config object),
 * the map doesnt mouse-scroll (on desktop) or drag-touch (on tab/mobile). Pressing the platform modifier key (ctrl/cmd) will enable scrolling.
 * Useful for maps embedded in scrollable websites.
 */
export const PreventScroll = PreventScrollStory;

/**
 * The `eox-map` offers a number of maprelated and map-unrelated helper methods. The map-related ones directly affect (or read from) the
 * map state, whereas the unrelated ones are general helper methods.
 *
 * In this story, an example for each helper method is shown - please refer to the console to read the outputs.
 */
export const HelperMethods = HelperMethodsStory;

/**
 * Basic Globe rendered using `projection: "globe"`, and OpenGlobus as globe renderer.
 * When the projection of the view can is set to "globe", the map will render as a 3D globe.
 * This example renders a globe centered on Austria, with 2 layers: an XYZ tile layer as base layer, and a GeoTiff layer on top.
 * The GeoTiff layer is rendered as a CanvasTiles layer in OpenGlobus, while the XYZ layer is rendered natively in the OpenGlobus.
 */
export const Globe = GlobeStory;
