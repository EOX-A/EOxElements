export type OLBasicFormats = {
  GeoJSON: typeof import("ol/format/GeoJSON").default;
  MVT: typeof import("ol/format/MVT").default;
};

export type OLAdvancedFormats = {
  EsriJSON: typeof import("ol/format/EsriJSON").default;
  GML: typeof import("ol/format/GML").default;
  GPX: typeof import("ol/format/GPX").default;
  IGC: typeof import("ol/format/IGC").default;
  IIIFInfo: typeof import("ol/format/IIIFInfo").default;
  KML: typeof import("ol/format/KML").default;
  OWS: typeof import("ol/format/OWS").default;
  Polyline: typeof import("ol/format/Polyline").default;
  TopoJSON: typeof import("ol/format/TopoJSON").default;
  WFS: typeof import("ol/format/WFS").default;
  WKB: typeof import("ol/format/WKB").default;
  WKT: typeof import("ol/format/WKT").default;
  WMSCapabilities: typeof import("ol/format/WMSCapabilities").default;
  WMSGetFeatureInfo: typeof import("ol/format/WMSGetFeatureInfo").default;
  WMTSCapabilities: typeof import("ol/format/WMTSCapabilities").default;
};

export type OLBasicLayers = {
  Group: typeof import("ol/layer/Group").default;
  Image: typeof import("ol/layer/Image").default;
  Tile: typeof import("ol/layer/Tile").default;
  Vector: typeof import("ol/layer/Vector").default;
  VectorTile: typeof import("ol/layer/VectorTile").default;
};

export type OLAdvancedLayers = {
  Graticule: typeof import("ol/layer/Graticule").default;
  Heatmap: typeof import("ol/layer/Heatmap").default;
  Layer: typeof import("ol/layer/Layer").default;
  VectorImage: typeof import("ol/layer/VectorImage").default;
  WebGLPoints: typeof import("ol/layer/WebGLPoints").default;
  WebGLTile: typeof import("ol/layer/WebGLTile").default;
  WebGLVector: typeof import("ol/layer/WebGLVector").default;
  STAC: typeof import("ol-stac").default;
};

export type OLBasicSources = {
  ImageWMS: typeof import("ol/source/ImageWMS").default;
  OSM: typeof import("ol/source/OSM").default;
  Tile: typeof import("ol/source/Tile").default;
  TileWMS: typeof import("ol/source/TileWMS").default;
  Vector: typeof import("ol/source/Vector").default;
  VectorTile: typeof import("ol/source/VectorTile").default;
  WMTS: typeof import("ol/source/WMTS").default;
  XYZ: typeof import("ol/source/XYZ").default;
};

export type OLAdvancedSources = {
  BingMaps: typeof import("ol/source/BingMaps").default;
  CartoDB: typeof import("ol/source/CartoDB").default;
  Cluster: typeof import("ol/source/Cluster").default;
  DataTile: typeof import("ol/source/DataTile").default;
  GeoTIFF: typeof import("ol/source/GeoTIFF").default;
  Google: typeof import("ol/source/Google").default;
  IIIF: typeof import("ol/source/IIIF").default;
  Image: typeof import("ol/source/Image").default;
  ImageArcGISRest: typeof import("ol/source/ImageArcGISRest").default;
  ImageCanvas: typeof import("ol/source/ImageCanvas").default;
  ImageMapGuide: typeof import("ol/source/ImageMapGuide").default;
  ImageStatic: typeof import("ol/source/ImageStatic").default;
  ImageTile: typeof import("ol/source/ImageTile").default;
  OGCMapTile: typeof import("ol/source/OGCMapTile").default;
  OGCVectorTile: typeof import("ol/source/OGCVectorTile").default;
  Raster: typeof import("ol/source/Raster").default;
  Source: typeof import("ol/source/Source").default;
  StadiaMaps: typeof import("ol/source/StadiaMaps").default;
  TileArcGISRest: typeof import("ol/source/TileArcGISRest").default;
  TileDebug: typeof import("ol/source/TileDebug").default;
  TileImage: typeof import("ol/source/TileImage").default;
  TileJSON: typeof import("ol/source/TileJSON").default;
  UrlTile: typeof import("ol/source/UrlTile").default;
  UTFGrid: typeof import("ol/source/UTFGrid").default;
  Zoomify: typeof import("ol/source/Zoomify").default;
  WMTSCapabilities: typeof import("./custom/sources/WMTSCapabilities").default;
  FlatGeoBuf: typeof import("./custom/sources/FlatGeoBuf").default;
};

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

export type layerType = keyof OLBasicLayers | keyof OLAdvancedLayers;
export type sourceType = keyof OLBasicSources | keyof OLAdvancedSources;

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

export type EOxInteraction = {
  active?: boolean;
  type: "draw" | "select";
  options: DrawOptions | SelectOptions | { [key: string]: any };
};

export type EoxLayer = import("./layers").EoxLayer;
export type EoxLayers = import("./layers").EoxLayer[];

export type SelectLayer =
  | InstanceType<typeof import("ol/layer/VectorTile").default>
  | InstanceType<typeof import("ol/layer/Vector").default>;

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
  /**
   * @property {boolean} [tooltip = true] if true, will display a tooltip when hovering over a feature.
   */
  tooltip?: boolean;
  active?: boolean;
  panIn?: boolean;
  modify?: boolean;
  type?: string;
  geometryFunction?: import("ol/interaction/Draw").GeometryFunction;
  cursor?: "string";
  atPixelOptions?: import("ol/Map").AtPixelOptions;
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

export type ControlType = keyof ControlDictionary;

type Override<T, V> = Omit<T, keyof V> & V;

export type ControlDictionary = {
  Zoom?: ConstructorParameters<typeof import("ol/control/Zoom").default>[0];
  ScaleLine?: ConstructorParameters<
    typeof import("ol/control/ScaleLine").default
  >[0];
  Rotate?: ConstructorParameters<typeof import("ol/control/Rotate").default>[0];
  FullScreen?: ConstructorParameters<
    typeof import("ol/control/FullScreen").default
  >[0];
  ZoomSlider?: ConstructorParameters<
    typeof import("ol/control/ZoomSlider").default
  >[0];
  Attribution?: ConstructorParameters<
    typeof import("ol/control/Attribution").default
  >[0];
  OverviewMap?: Override<
    ConstructorParameters<typeof import("ol/control/OverviewMap").default>[0],
    { layers?: EoxLayer[] | AnyLayer[] }
  >;
  ZoomToExtent?: ConstructorParameters<
    typeof import("ol/control/ZoomToExtent").default
  >[0];
  MousePosition?: ConstructorParameters<
    typeof import("ol/control/MousePosition").default
  >[0];
  Geolocation?: ConstructorParameters<
    typeof import("./controls/geo-location").default
  >[0];
  LoadingIndicator?: ConstructorParameters<
    typeof import("./controls/loading-indicator").default
  >[0];
};

export type AttributionLike =
  | import("ol/source/Source").AttributionLike
  | string
  | Array<string>;
export type ProjectionLike = import("ol/proj").ProjectionLike;

export type FlatGeoBufOptions = {
  url: string;
  attributions?: import("ol/source/Source").AttributionLike;
  wrapX?: boolean;
};

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
  layers: EoxLayers;
  view: {
    center: Array<number>;
    zoom: number;
    zoomExtent?: import("ol/extent").Extent;
    projection?: ProjectionLike;
  };
  preventScroll: boolean;
  animationOptions?: EOxAnimationOptions;
};

declare global {
  interface Window {
    eoxMapAdvancedOlFormats: OLAdvancedFormats;
    eoxMapAdvancedOlLayers: OLAdvancedLayers;
    eoxMapAdvancedOlSources: OLAdvancedSources;
  }
}
