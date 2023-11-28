import * as olLayers from "ol/layer";
import * as olSources from "ol/source";
import * as olFormats from "ol/format";
import STAC from "ol-stac";
import { FlatStyleLike } from "ol/style/flat";
import { Collection } from "ol";
import { createXYZ } from "ol/tilegrid";
import { DrawOptions, addDraw } from "./draw";
import { EOxMap } from "../main";
import { SelectOptions, addSelect } from "./select";
import { register } from "ol/proj/proj4.js";
import proj4 from "proj4";

register(proj4); // required to support source reprojection

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

export type EOxInteraction = {
  type: "draw" | "select";
  options: DrawOptions | SelectOptions;
};

export type EoxLayer = {
  type: layerType;
  properties: object & {
    id: string;
  };
  minZoom?: number;
  maxZoom?: number;
  minResolution?: number;
  maxResolution?: number;
  opacity?: number;
  visible?: boolean;
  source?: { type: sourceType };
  layers?: Array<EoxLayer>;
  style?: FlatStyleLike;
  interactions?: Array<EOxInteraction>;
};

/**
 * creates an ol-layer from a given EoxLayer definition object
 * @param {EOxMap} EOxMap
 * @param {EoxLayer} layer
 * @returns {olLayers.Layer}
 */
export function createLayer(EOxMap: EOxMap, layer: EoxLayer): olLayers.Layer {
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
    const groupLayers = layer.layers
      .reverse()
      .map((l) => createLayer(EOxMap, l));
    // set a reference to the parent group to each layer of the group
    groupLayers.forEach((l) => l.set("_group", olLayer, true));
    olLayer.setLayers(new Collection(groupLayers));
  }

  if (layer.style) {
    olLayer.setStyle(layer.style);
  }
  olLayer.set("_jsonDefinition", layer, true);
  setSyncListeners(olLayer, layer);
  if (layer.interactions?.length) {
    for (let i = 0, ii = layer.interactions.length; i < ii; i++) {
      const interactionDefinition = layer.interactions[i];
      if (interactionDefinition.type === "draw") {
        addDraw(EOxMap, olLayer, interactionDefinition.options as DrawOptions);
      } else if (interactionDefinition.type === "select") {
        addSelect(
          EOxMap,
          olLayer,
          interactionDefinition.options as SelectOptions
        );
      }
    }
  }
  return olLayer;
}

/**
 * updates an existing layer
 * @param {EoxLayer} newLayerDefinition
 * @param {olLayers.Layer} existingLayer
 * @returns {existingLayer}
 */
export function updateLayer(
  EOxMap: EOxMap,
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
  const newLayer = createLayer(EOxMap, newLayerDefinition);

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
    // @ts-ignore
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

  if (newLayerDefinition.type === "Group") {
    const newLayerIds = newLayerDefinition.layers.map((l) => l.properties.id);
    // remove all layers from the group that do not exist in the new layer definition
    //@ts-ignore
    const layerCollection = existingLayer.getLayers();
    layerCollection.forEach((l: olLayers.Layer) => {
      if (!newLayerIds.includes(l.get("id"))) {
        layerCollection.remove(l);
      }
    });

    // after all layers were added/updated/deleted, rearrange them in the correct order
    layerCollection
      .getArray()
      .sort((layerA: olLayers.Layer, layerB: olLayers.Layer) => {
        return (
          // change this order?  the reverse order, because we want the topmost layer to be on top
          newLayerIds.indexOf(layerA.get("id")) -
          newLayerIds.indexOf(layerB.get("id"))
        );
      });
    layerCollection.changed();
  }
  return existingLayer;
}

export const generateLayers = (EOxMap: EOxMap, layerArray: Array<EoxLayer>) => {
  if (!layerArray) {
    return [];
  }

  return [...layerArray].reverse().map((l) => createLayer(EOxMap, l));
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
    // @ts-ignore
    eoxLayer.properties[e.key] = e.target.get(e.key);
  });
}
