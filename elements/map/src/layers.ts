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
  MapboxStyle: typeof import("./custom/layers/MapboxStyle.js").default;
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
  Cluster: typeof import("./custom/sources/Cluster").default;
};

export type OLSources = OLBasicSources & OLAdvancedSources;
export type OLLayers = OLBasicLayers & OLAdvancedLayers;
export type OLFormats = OLBasicFormats & OLAdvancedFormats;

export type EOxFormatType<F extends keyof OLFormats> =
  | F
  | ({
      type: F;
    } & ConstructorParameters<OLFormats[F]>[0]);

export type EOxFormat =
  | EOxFormatType<"EsriJSON">
  | EOxFormatType<"GeoJSON">
  | EOxFormatType<"GML">
  | EOxFormatType<"GPX">
  | EOxFormatType<"IGC">
  | EOxFormatType<"KML">
  | EOxFormatType<"MVT">
  | EOxFormatType<"OWS">
  | EOxFormatType<"TopoJSON">
  | EOxFormatType<"WFS">
  | EOxFormatType<"WKT">
  | EOxFormatType<"WMSCapabilities">
  | EOxFormatType<"WMSGetFeatureInfo">
  | EOxFormatType<"WMTSCapabilities">
  | EOxFormatType<"Polyline">
  | EOxFormatType<"IIIFInfo">
  | EOxFormatType<"WKB">;

type OlSourceOption<S extends keyof OLSources> = Omit<
  ConstructorParameters<OLSources[S]>[0],
  "map" | "layer"
>;

type OlLayerOption<T extends keyof OLLayers> = Omit<
  Omit<ConstructorParameters<OLLayers[T]>[0], "properties">,
  "source" | "layers" | "map"
>;

export type EoxSource<S extends keyof OLSources> = (S extends "WMTS"
  ? OlSourceOption<S>
  : OlSourceOption<S> extends { format?: any }
    ? Omit<OlSourceOption<S>, "format"> & { format?: EOxFormat }
    : OlSourceOption<S> extends { source?: any }
      ? Omit<OlSourceOption<S>, "source"> & {
          source?: EoxSource<keyof OLSources>;
        }
      : OlSourceOption<S>) & {
  type: S;
  projection?: import("ol/proj").ProjectionLike;
};

type SourceProperties<S extends keyof OLSources> = {
  source?: EoxSource<S>;
  sources?: EoxSource<S>[];
};

export type EOxLayerType<
  T extends keyof OLLayers,
  S extends keyof OLSources = never,
> = (OlLayerOption<T> extends { sources?: any }
  ? Omit<OlLayerOption<T>, "sources"> & { sources?: EoxSource<S>[] }
  : OlLayerOption<T>) & {
  type: T;
  zIndex?: number;
  visible?: boolean;
  opacity?: number;
  properties?: {
    id: string;
    [key: string]: any;
  };
  source?: EoxSource<S>;
  interactions?: T extends "Vector" | "VectorTile"
    ? Array<import("./types").EOxInteraction>
    : never;
} & (S extends keyof OLSources ? SourceProperties<S> : {});

export type EOxLayerTypeGroup = Omit<
  EOxLayerType<"Group", keyof OLSources>,
  "layers"
> & {
  layers: EoxLayer[];
};

export type EoxLayer =
  | EOxLayerType<"Vector", "Vector">
  | EOxLayerType<"Vector", "FlatGeoBuf">
  | EOxLayerType<"Vector", "Cluster">
  | EOxLayerType<"VectorTile", "VectorTile">
  | EOxLayerType<"WebGLTile", "GeoTIFF">
  | EOxLayerType<"Tile", "OSM">
  | EOxLayerType<"Tile", "WMTSCapabilities">
  | EOxLayerType<"Tile", "StadiaMaps">
  | EOxLayerType<"Tile", "WMTS">
  | EOxLayerType<"Tile", "XYZ">
  | EOxLayerType<"Tile", "TileJSON">
  | EOxLayerType<"Tile", "TileArcGISRest">
  | EOxLayerType<"Tile", "TileDebug">
  | EOxLayerType<"Tile", "TileImage">
  | EOxLayerType<"Tile", "TileWMS">
  | EOxLayerType<"Tile", "UrlTile">
  | EOxLayerType<"Tile", "BingMaps">
  | EOxLayerType<"Image", "Image">
  | EOxLayerType<"Image", "ImageCanvas">
  | EOxLayerType<"Image", "ImageStatic">
  | EOxLayerType<"Image", "ImageWMS">
  | EOxLayerType<"Image", "Raster">
  | EOxLayerType<"Image", "IIIF">
  | EOxLayerType<"STAC">
  | EOxLayerType<"MapboxStyle">
  | EOxLayerTypeGroup;
