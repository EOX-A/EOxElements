import type {
  OLAdvancedFormats,
  OLAdvancedLayers,
  OLAdvancedSources,
  OLBasicFormats,
  OLBasicLayers,
  OLBasicSources,
  DeepOmit,
} from "./types";

export type OLSources = OLBasicSources & OLAdvancedSources;
export type OLLayers = OLBasicLayers & OLAdvancedLayers;
export type OLFormats = OLBasicFormats & OLAdvancedFormats;

export type EOxFormat<F extends keyof OLFormats> =
  | ({
      type: F;
    } & ConstructorParameters<OLFormats[F]>[0])
  | F;

type OlSourceOption<S extends keyof OLSources> = DeepOmit<
  ConstructorParameters<OLSources[S]>[0],
  "map"
>;

type OlLayerOption<T extends keyof OLLayers> = DeepOmit<
  Omit<ConstructorParameters<OLLayers[T]>[0], "properties">,
  "source" | "layers" | "map"
>;

type EoxSource<
  S extends keyof OLSources,
  F extends keyof OLFormats = keyof OLFormats,
> = (S extends "WMTS"
  ? OlSourceOption<S>
  : OlSourceOption<S> extends { format?: any }
    ? Omit<OlSourceOption<S>, "format"> & { format?: EOxFormat<F> }
    : OlSourceOption<S> extends { source?: any }
      ? Omit<OlSourceOption<S>, "source"> & {
          source?: EoxSource<keyof OLSources, keyof OLFormats>;
        }
      : OlSourceOption<S>) & { type: S };

export type EOxLayerType<
  T extends keyof OLLayers,
  S extends keyof OLSources,
  F extends keyof OLFormats = keyof OLFormats,
> = DeepOmit<
  (T extends "Group"
    ? OlLayerOption<T> & {
        layers: import("./types").EoxLayers;
      }
    : OlLayerOption<T> extends { sources?: any }
      ? Omit<OlLayerOption<T>, "sources"> & { sources?: EoxSource<S, F>[] }
      : OlLayerOption<T>) & {
    type: T;
    properties?: {
      id: string;
      [key: string]: any;
    };
    source?: EoxSource<S, F>;
    interactions?: T extends "Vector" | "VectorTile"
      ? Array<import("./types").EOxInteraction>
      : never;
  },
  `${string}_`
>;

export type EoxLayer =
  // | EOxLayerType<"Vector", keyof OLSources>
  | EOxLayerType<"Vector", "Vector">
  | EOxLayerType<"Vector", "FlatGeoBuf">
  | EOxLayerType<"Vector", "Cluster">
  // | EOxLayerType<"VectorTile", keyof OLSources>
  | EOxLayerType<"VectorTile", "VectorTile">
  // | EOxLayerType<"WebGLTile", keyof OLSources>
  | EOxLayerType<"WebGLTile", "GeoTIFF">
  // | EOxLayerType<"Tile", keyof OLSources>
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
  // | EOxLayerType<"Image", keyof OLSources>
  | EOxLayerType<"Image", "Image">
  | EOxLayerType<"Image", "ImageCanvas">
  | EOxLayerType<"Image", "ImageStatic">
  | EOxLayerType<"Image", "ImageWMS">
  | EOxLayerType<"Image", "Raster">
  | EOxLayerType<"Image", "IIIF">
  | EOxLayerType<"Group", keyof OLSources>;

export const layer = {
  type: "Vector",
  source: {
    type: "Cluster",
  },
} as EoxLayer;
