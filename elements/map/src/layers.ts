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

type OlSourceOption<S extends keyof OLSources> = ConstructorParameters<
  OLSources[S]
>[0];
type EoxSource<
  S extends keyof OLSources,
  F extends keyof OLFormats = keyof OLFormats,
> = (S extends "WMTS"
  ? OlSourceOption<S>
  : OlSourceOption<S> extends { format?: any }
    ? Omit<OlSourceOption<S>, "format"> & { format?: EOxFormat<F> }
    : OlSourceOption<S>) & { type: S };

export type EOxLayerType<
  T extends keyof OLLayers,
  S extends keyof OLSources,
  F extends keyof OLFormats = keyof OLFormats,
> = (T extends "Group"
  ? Omit<
      ConstructorParameters<OLLayers[T]>[0],
      "source" | "layers" | "properties"
    > & {
      layers: import("./types").EoxLayers;
    }
  : Omit<ConstructorParameters<OLLayers[T]>[0], "source">) & {
  type: T;
  properties?: {
    id: string;
    [key: string]: any;
  };
  source?: EoxSource<S, F>;

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
