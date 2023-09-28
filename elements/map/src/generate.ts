import * as olLayers from "ol/layer";
import * as olSources from "ol/source";
import * as olFormats from "ol/format";
import STAC from "ol-stac";
import { FlatStyleLike } from "ol/style/flat";
import { Collection } from "ol";
import { createXYZ } from "ol/tilegrid";

const availableLayers = {
  ...olLayers,
  STAC,
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
  | "XYZ";

const availableSources = {
  ...olSources,
};

export type EoxLayer = {
  type: layerType;
  properties: object & {
    id: string;
  };
  opacity?: number;
  visible?: boolean;
  source?: { type: sourceType };
  layers?: Array<EoxLayer>;
  style?: FlatStyleLike;
};

export function createLayer(layer: EoxLayer): olLayers.Layer {
  const newLayer = availableLayers[layer.type];
  const newSource = availableSources[layer.source?.type];
  if (!newLayer) {
    throw new Error(`Layer type ${layer.type} not supported!`);
  }
  if (layer.source && !newSource) {
    throw new Error(`Source type ${layer.source.type} not supported!`);
  }

  //@ts-ignore
  const olLayer = new newLayer({
    ...layer,
    ...(layer.source && {
      //@ts-ignore
      source: new newSource({
        ...layer.source,
        // @ts-ignore
        ...(layer.source.format && {
          // @ts-ignore
          format: new olFormats[layer.source.format](),
        }),
        // @ts-ignore
        ...(layer.source.tileGrid && {
          tileGrid: createXYZ({
            // @ts-ignore
            ...layer.source.tileGrid,
          }),
        }),
      }),
    }),
    ...(layer.type === "Group" && {
      layers: [],
    }),
    ...layer.properties,
    style: undefined, // override layer style, apply style after
  });

  if (layer.type === "Group") {
    const groupLayers = layer.layers.reverse().map((l) => createLayer(l));
    // set a reference to the parent group to each layer of the group
    groupLayers.forEach((l) => l.set("_group", olLayer, true));
    olLayer.setLayers(new Collection(groupLayers));
  }

  if (layer.style) {
    olLayer.setStyle(layer.style);
  }
  olLayer.set("_jsonDefinition", layer, true);
  setSyncListeners(olLayer, layer);
  return olLayer;
}

export function updateLayer(
  newLayerDefinition: EoxLayer,
  existingLayer: olLayers.Layer
) {
  const existingJsonDefintion = existingLayer.get("_jsonDefinition");

  // there are probably more cases that make the layers incompatible
  if (
    newLayerDefinition.type !== existingJsonDefintion.type ||
    newLayerDefinition.source?.type !== existingJsonDefintion.source?.type
  ) {
    throw new Error(`Layers are not compatible to be updated`);
  }
  const newLayer = createLayer(newLayerDefinition);

  if (
    JSON.stringify(newLayerDefinition.source) !==
    JSON.stringify(existingJsonDefintion.source)
  ) {
    existingLayer.setSource(newLayer.getSource());
  }

  if (
    ["Vector", "VectorTile"].includes(newLayerDefinition.type) &&
    JSON.stringify(newLayerDefinition.style) !==
      JSON.stringify(existingJsonDefintion.style)
  ) {
    //@ts-ignore
    existingLayer.setStyle(newLayer.getStyle());
  }

  if (
    JSON.stringify(newLayerDefinition.properties) !==
    JSON.stringify(existingJsonDefintion.properties)
  ) {
    existingLayer.setProperties(newLayerDefinition.properties);
  }

  if (newLayerDefinition.visible !== existingJsonDefintion.visible) {
    existingLayer.setVisible(newLayerDefinition.visible);
  }
  if (newLayerDefinition.opacity !== existingJsonDefintion.opacity) {
    existingLayer.setOpacity(newLayerDefinition.opacity);
  }
  setSyncListeners(existingLayer, newLayerDefinition);
  return existingLayer;
}

export const generateLayers = (layerArray: Array<EoxLayer>) => {
  if (!layerArray) {
    return [];
  }

  return layerArray.reverse().map((l) => createLayer(l));
};

/**
 * set listeners to keep state of layer in sync with input json
 * @param {olLayers.Layer} olLayer
 * @param {EoxLayer} eoxLayer
 */
function setSyncListeners(olLayer: olLayers.Layer, eoxLayer: EoxLayer) {
  olLayer.on("change:opacity", () => {
    eoxLayer.opacity = olLayer.getOpacity();
  });
  olLayer.on("change:visible", () => {
    eoxLayer.visible = olLayer.getVisible();
  });
  olLayer.on("change:zIndex", () => {
    // TO DO
  });
  olLayer.on("propertychange", (e) => {
    if (e.key === "map") {
      // do not sync property when setting the "map" of the layer
      return;
    }
    //@ts-ignore
    eoxLayer.properties[e.key] = e.target.get(e.key);
  });
}
