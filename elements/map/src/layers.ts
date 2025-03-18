import type {
  OLAdvancedFormats,
  OLAdvancedLayers,
  OLAdvancedSources,
  OLBasicFormats,
  OLBasicLayers,
  OLBasicSources,
} from "./types";

export type OLSources = OLBasicSources & OLAdvancedSources;
export type OLLayers = OLBasicLayers & OLAdvancedLayers;
export type OLFormats = OLBasicFormats & OLAdvancedFormats;

export type EOxFormat<F extends keyof OLFormats> =
  | ({
      type: F;
    } & ConstructorParameters<OLFormats[F]>[0])
  | F;

type OlLayerOption<T extends keyof OLLayers> = T extends "Group"
  ? Omit<ConstructorParameters<OLLayers[T]>[0], "source" | "layers" | "properties"> & {
      layers: import("./types").EOxLayers;
    }
  : Omit<ConstructorParameters<OLLayers[T]>[0], "source">;

type OlSourceOption<S extends keyof OLSources> = ConstructorParameters<
  OLSources[S]
>[0];

export type EOxLayerType<
  T extends keyof OLLayers,
  S extends keyof OLSources,
  F extends keyof OLFormats = keyof OLFormats,
> = OlLayerOption<T> & {
  type: T;
  properties?: {
    id: string | number;
    [key: string]: any;
  };
  source?: {
    type: S;
  } & S extends "WMTS"
    ? OlSourceOption<S>
    : OlSourceOption<S> extends { format?: any }
      ? Omit<OlSourceOption<S>, "format"> & { format?: EOxFormat<F> }
      : OlSourceOption<S>;

  interactions?: T extends "Vector" | "VectorTile"
    ? Array<import("./types").EOxInteraction>
    : never;
};
// Removed individual layer type definitions

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
  | EOxLayerType<"Group", keyof OLSources>;
