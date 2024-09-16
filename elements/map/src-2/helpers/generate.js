import { GeoJSON, MVT } from "ol/format";
import {
  Group,
  Image,
  Tile as TileLayer,
  Vector as VectorLayer,
  VectorTile as VectorTileLayer,
} from "ol/layer";
import {
  ImageWMS,
  OSM,
  Tile as TileSource,
  TileWMS,
  Vector as VectorSource,
  VectorTile as VectorTileSource,
  WMTS,
  XYZ,
} from "ol/source";
import { Collection } from "ol";
import { addDraw, addSelect, generateTileGrid } from "./";
import { get as getProjection } from "ol/proj";

/**
 * @typedef {import("../../types").AnyLayer} AnyLayer
 * @typedef {import("../../types").EoxLayer} EoxLayer
 * @typedef {import("../../types").SelectLayer} SelectLayer
 * */

/**
 * Creates an ol-layer from a given EoxLayer definition object.
 *
 * @param {EOxMap} EOxMap
 * @param {EoxLayer} layer
 * @param {boolean} [createInteractions=true]
 * @returns {AnyLayer}
 */

const basicOlFormats = {
  GeoJSON,
  MVT,
};

const basicOlLayers = {
  Group,
  Image,
  Tile: TileLayer,
  Vector: VectorLayer,
  VectorTile: VectorTileLayer,
};

const basicOlSources = {
  ImageWMS,
  OSM,
  Tile: TileSource,
  TileWMS,
  Vector: VectorSource,
  VectorTile: VectorTileSource,
  WMTS,
  XYZ,
};

/**
 * Creates an OpenLayers layer from a given EoxLayer definition object.
 *
 * @param {EOxMap} EOxMap - The map instance.
 * @param {EoxLayer} layer - The layer definition.
 * @param {boolean=} createInteractions - Whether to create interactions for the layer.
 * @returns {AnyLayer} - The created OpenLayers layer.
 */
export function createLayer(EOxMap, layer, createInteractions = true) {
  layer = JSON.parse(JSON.stringify(layer));

  const availableFormats = {
    ...window.eoxMapAdvancedOlFormats,
    ...basicOlFormats,
  };

  const availableLayers = {
    ...window.eoxMapAdvancedOlLayers,
    ...basicOlLayers,
  };

  const availableSources = {
    ...window.eoxMapAdvancedOlSources,
    ...basicOlSources,
  };

  const newLayer = availableLayers[layer.type];
  const newSource = availableSources[layer.source?.type];

  if (!newLayer) {
    throw new Error(`Layer type ${layer.type} not supported!`);
  }

  if (layer.source && !newSource) {
    throw new Error(`Source type ${layer.source.type} not supported!`);
  }

  const tileGrid = generateTileGrid(layer);

  const olLayer = new newLayer({
    ...layer,
    ...(layer.source && {
      source: new newSource({
        ...layer.source,
        ...(layer.source.format &&
          layer.source.type !== "WMTS" && {
            format: new availableFormats[
              typeof layer.source.format === "object"
                ? layer.source.format.type
                : layer.source.format
            ]({
              ...(typeof layer.source.format === "object" && {
                ...layer.source.format,
              }),
            }),
          }),
        ...(layer.source.tileGrid && { tileGrid }),
        ...(layer.source.projection && {
          projection: getProjection(layer.source.projection),
        }),
      }),
    }),
    ...(layer.type === "Group" && { layers: [] }),
    ...layer.properties,
    style: undefined, // override layer style, apply style after
  });

  olLayer.set("_jsonDefinition", layer, true);

  if (layer.type === "Group") {
    const groupLayers = layer.layers
      .reverse()
      .map((l) => createLayer(EOxMap, l));
    groupLayers.forEach((l) => l.set("_group", olLayer, true));
    olLayer.setLayers(new Collection(groupLayers));
  }

  if (layer.style) {
    olLayer.setStyle(layer.style);
  }

  if (createInteractions && layer.interactions?.length) {
    for (let i = 0; i < layer.interactions.length; i++) {
      const interactionDefinition = layer.interactions[i];
      addInteraction(EOxMap, olLayer, interactionDefinition);
    }
  }

  setSyncListeners(olLayer, layer);
  return olLayer;
}

/**
 * Adds an interaction to a given layer.
 *
 * @param {EOxMap} EOxMap - The map instance.
 * @param {AnyLayer} olLayer - The OpenLayers layer.
 * @param {EOxInteraction} interactionDefinition - The interaction definition.
 */
function addInteraction(EOxMap, olLayer, interactionDefinition) {
  if (interactionDefinition.type === "draw") {
    addDraw(EOxMap, olLayer, interactionDefinition.options);
  } else if (interactionDefinition.type === "select") {
    addSelect(EOxMap, olLayer, interactionDefinition.options);
  }
}

/**
 * Updates an existing layer with a new definition.
 *
 * @param {EOxMap} EOxMap - The map instance.
 * @param {EoxLayer} newLayerDefinition - The new layer definition.
 * @param {AnyLayer} existingLayer - The existing layer to be updated.
 * @returns {AnyLayer} - The updated layer.
 */
export function updateLayer(EOxMap, newLayerDefinition, existingLayer) {
  const existingJsonDefinition = existingLayer.get("_jsonDefinition");

  if (
    newLayerDefinition.type !== existingJsonDefinition.type ||
    newLayerDefinition.source?.type !== existingJsonDefinition.source?.type
  ) {
    throw new Error("Layers are not compatible to be updated");
  }

  const newLayer = createLayer(EOxMap, newLayerDefinition, false);

  if (
    JSON.stringify(newLayerDefinition.source) !==
    JSON.stringify(existingJsonDefinition.source)
  ) {
    existingLayer.setSource(newLayer.getSource());
  }

  if (
    ["Vector", "VectorTile"].includes(newLayerDefinition.type) &&
    JSON.stringify(newLayerDefinition.style) !==
      JSON.stringify(existingJsonDefinition.style)
  ) {
    existingLayer.setStyle(newLayer.getStyle());
  }

  if (
    JSON.stringify(newLayerDefinition.properties) !==
    JSON.stringify(existingJsonDefinition.properties)
  ) {
    existingLayer.setProperties(newLayerDefinition.properties);
  }

  if (newLayerDefinition.visible !== existingJsonDefinition.visible) {
    existingLayer.setVisible(newLayerDefinition.visible);
  }
  if (newLayerDefinition.opacity !== existingJsonDefinition.opacity) {
    existingLayer.setOpacity(newLayerDefinition.opacity);
  }

  setSyncListeners(existingLayer, newLayerDefinition);
  existingLayer.set("_jsonDefinition", newLayerDefinition, true);
  return existingLayer;
}

/**
 * Generates layers for the map from an array of layer definitions.
 *
 * @param {EOxMap} EOxMap - The map instance.
 * @param {Array<EoxLayer>} layerArray - Array of layer definitions.
 * @returns {Array} - An array of created layers.
 */
export const generateLayers = (EOxMap, layerArray) => {
  if (!layerArray) {
    return [];
  }
  return [...layerArray].reverse().map((l) => createLayer(EOxMap, l));
};

/**
 * Set listeners to keep the state of the layer in sync with the input JSON definition.
 *
 * @param {AnyLayer} olLayer - The OpenLayers layer.
 * @param {EoxLayer} eoxLayer - The EoxLayer definition.
 */
function setSyncListeners(olLayer, eoxLayer) {
  olLayer.on("change:opacity", () => {
    eoxLayer.opacity = olLayer.getOpacity();
  });
  olLayer.on("change:visible", () => {
    eoxLayer.visible = olLayer.getVisible();
  });
  olLayer.on("change:zIndex", () => {
    eoxLayer.zIndex = olLayer.getZIndex();
  });
  olLayer.on("propertychange", (e) => {
    if (e.key === "map") return;
    eoxLayer.properties[e.key] = e.target.get(e.key);
  });
}
