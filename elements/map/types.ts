export type DrawOptions = Omit<
  import("ol/interaction/Draw").Options,
  "type"
> & {
  id: string | number;
  type: "Point" | "LineString" | "Polygon" | "Circle" | "Box";
  modify?: boolean;
  active?: boolean;
  geometryFunction?: import("ol/interaction/Draw").GeometryFunction;
};

export type layerType =
  | "Group"
  | "Heatmap"
  | "Image"
  | "Layer"
  | "Tile"
  | "Vector"
  | "VectorImage"
  | "VectorTile";

export type sourceType =
  | "BingMaps"
  | "Cluster"
  | "GeoTIFF"
  | "IIIF"
  | "Image"
  | "ImageCanvas"
  | "ImageStatic"
  | "ImageWMS"
  | "OSM"
  | "Raster"
  | "StadiaMaps"
  | "Tile"
  | "TileArcGISRest"
  | "TileDebug"
  | "TileImage"
  | "TileJSON"
  | "TileWMS"
  | "UrlTile"
  | "Vector"
  | "VectorTile"
  | "WMTS"
  | "XYZ"
  | "WMTSCapabilities";

export type VectorOrVectorTileLayer =
  | import("ol/layer").Vector
  | import("ol/layer").VectorTile;

export type AnyLayerWithSource =
  | import("ol/layer/Base").default
  | import("ol/layer/BaseImage").default<
      import("ol/source/Image").default,
      import("ol/renderer/canvas/ImageLayer").default
    >
  | import("ol/layer/Tile").default<import("ol/source/Tile").default>
  | VectorOrVectorTileLayer;

export type AnyLayer = AnyLayerWithSource | import("ol/layer/Group").default;

export type formatWithOptions = {
  type: string;
  dataProjection?: string;
  featureProjection?: string;
};

export type EOxInteraction = {
  type: "draw" | "select";
  options: DrawOptions | SelectOptions;
};

export type EoxLayer = {
  type: layerType;
  properties?: object & {
    id: string;
  };
  minZoom?: number;
  maxZoom?: number;
  minResolution?: number;
  maxResolution?: number;
  opacity?: number;
  visible?: boolean;
  source?: {
    type: sourceType;
    format?: string | formatWithOptions;
    tileGrid?: object;
    projection?: import("ol/proj").ProjectionLike;
  };
  layers?: Array<EoxLayer>;
  style?: import("ol/style/flat").FlatStyleLike;
  interactions?: Array<EOxInteraction>;
  zIndex?: number;
  renderMode?: "vector" | "vectorImage";
};

export type SelectLayer =
  | import("ol/layer/VectorTile").default
  | import("ol/layer/Vector").default;

export type SelectOptions = Omit<
  import("ol/interaction/Select").Options,
  "condition"
> & {
  id: string | number;
  idProperty?: string;
  condition: "click" | "pointermove";
  layer?: EoxLayer;
  style?: import("ol/style/flat.js").FlatStyleLike;
  overlay?: import("ol/Overlay").Options;
  active?: boolean;
  panIn?: boolean;
  modify?: boolean;
  type?: string;
  geometryFunction?: import("ol/interaction/Draw").GeometryFunction;
};

export type ControlOptions = import("ol/control/Control").Options;

export type GeolocationOptions = import("ol/control/Control").Options & {
  /**
   * @property {import("ol/style/flat.js").FlatStyleLike} style style definition of the position feature.
   */
  style?: import("ol/style/flat.js").FlatStyleLike;
  /**
   * @property {boolean} centerWhenReady will pan the view to the user-location on the first position update.
   */
  centerWhenReady?: boolean;
  /**
   * @property {boolean} highAccuracy enables high accuracy of geolocator. Required for tracking the heading.
   */
  highAccuracy?: boolean;
  /**
   * @property {boolean} trackAccuracy tracks accuracy and displays it as a circle underneath the position feature.
   */
  trackAccuracy?: boolean;
  /**
   * @property {boolean} trackHeading tracks heading and sets it as 'heading'-property on the position feature.
   * "highAccuracy" must be set in order to track heading.
   */
  trackHeading?: boolean;
  /**
   * @property {string} buttonIcon image src of control element icon
   */
  buttonIcon?: string;
};

export type LoadingIndicatorType = "small" | "fullscreen";

export type LoadingIndicatorOptions = import("ol/control/Control").Options & {
  /**
   * @property {string} spinnerSvg svg to be used as spinner icon
   */
  spinnerSvg?: string;
  /**
   * @property {Number} opacity opacity, defaults to 1
   */
  opacity?: number;
  /**
   * @property {LoadingIndicatorType} type type of appearance. Small button style of fullscreen style. Defaults to button style.
   */
  type?: LoadingIndicatorType;
};

export type ControlType =
  | "Attribution"
  | "FullScreen"
  | "MousePosition"
  | "OverviewMap"
  | "Rotate"
  | "ScaleLine"
  | "ZoomSlider"
  | "ZoomToExtent"
  | "Zoom"
  | "Geolocation"
  | "LoadingIndicator";

export type ControlDictionary = {
  [key in ControlType]?: object;
};

export type AttributionLike =
  | import("ol/source/Source").AttributionLike
  | string
  | Array<string>;
export type ProjectionLike = import("ol/proj").ProjectionLike;

export type WMTSCapabilitiesOptions = {
  url: string;
  layer: string;
  attributions?: import("ol/source/Source").AttributionLike;
  attributionsCollapsible?: boolean;
  cacheSize?: number;
  crossOrigin?: null | string;
  interpolate?: boolean;
  projection?: import("ol/proj").ProjectionLike;
  transition?: number;
  key?: string;
  tilePixelRatio?: number;
  zDirection?: number;
  wrapX?: boolean;
  dimensions: object;
  version: string;
};

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

export type EOxAnimationOptions = import("ol/View").AnimationOptions &
  import("ol/View").FitOptions;

export type ConfigObject = {
  controls: ControlDictionary;
  layers: Array<EoxLayer>;
  view: {
    center: Array<number>;
    zoom: number;
    zoomExtent?: import("ol/extent").Extent;
    projection?: ProjectionLike;
  };
  preventScroll: boolean;
  animationOptions?: EOxAnimationOptions;
};
