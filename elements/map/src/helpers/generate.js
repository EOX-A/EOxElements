import GeoJSON from "ol/format/GeoJSON.js";
import MVT from "ol/format/MVT.js";
import Group from "ol/layer/Group.js";
import Image from "ol/layer/Image.js";
import TileLayer from "ol/layer/Tile.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorTileLayer from "ol/layer/VectorTile.js";
import ImageWMS from "ol/source/ImageWMS.js";
import OSM from "ol/source/OSM.js";
import TileSource from "ol/source/Tile.js";
import TileWMS from "ol/source/TileWMS.js";
import VectorSource from "ol/source/Vector.js";
import VectorTileSource from "ol/source/VectorTile.js";
import WMTS from "ol/source/WMTS.js";
import XYZ from "ol/source/XYZ.js";
import Collection from "ol/Collection.js";
import { addDraw, addSelect, addClusterExplode, generateTileGrid } from "./";
import { get as getProjection } from "ol/proj";

/**
 * @typedef {import("../main").EOxMap} EOxMap
 * @typedef {import("../types").AnyLayer} AnyLayer
 * @typedef {import("../layers").EoxLayer} EoxLayer
 * @typedef {import("../types").SelectLayer} SelectLayer
 * @typedef {import("../types").EOxInteraction} EOxInteraction
 * @typedef {import("../types").DrawOptions} DrawOptions
 * @typedef {import("../types").SelectOptions} SelectOptions
 * @typedef {import("../types").AnyLayerWithSource} AnyLayerWithSource
 * @typedef {import("../types").VectorOrVectorTileLayer} VectorOrVectorTileLayer
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
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 * @param {EoxLayer} layer - The layer definition.
 * @param {boolean} [createInteractions=true] - Whether to create interactions for the layer (default: true).
 * @returns {AnyLayer} - The created OpenLayers layer.
 * @throws Will throw an error if the specified layer or source type is not supported.
 */
export function createLayer(EOxMap, layer, createInteractions = true) {
  layer = JSON.parse(JSON.stringify(layer));

  const availableLayers = {
    ...window.eoxMapAdvancedOlLayers,
    ...basicOlLayers,
  };

  // Get the layer and source constructors based on the provided layer definition
  /** @type {new (options?: any) => AnyLayer} */
  const newLayer = availableLayers[layer.type];

  // Throw an error if the specified layer type or source type is not supported
  if (!newLayer) {
    throw new Error(`Layer type ${layer.type} not supported!`);
  }

  // Create the OpenLayers layer with the specified options
  const olLayer = new newLayer({
    ...layer,
    ...(layer.type !== "MapboxStyle" &&
      layer.source && {
        source: createOlSourceFromDefinition(layer.source),
      }),
    ...(layer.type === "Group" && { layers: [] }), // Initialize an empty layer collection for group layers
    ...layer.properties,
    style: undefined, // Reset the style; it will be applied later if specified
  });

  olLayer.set("_jsonDefinition", layer, true);
  // Handle group layers by recursively creating their sublayers
  if (layer.type === "Group") {
    const groupLayers = layer.layers.map((l) => createLayer(EOxMap, l));
    groupLayers.forEach((l) => l.set("_group", olLayer, true));
    /** @type {import("ol/layer/Group").default} **/ (olLayer).setLayers(
      new Collection(groupLayers),
    );
  }

  if ("style" in layer) {
    /** @type {VectorOrVectorTileLayer} **/ (olLayer).setStyle(
      /** @type {import("../layers").EOxLayerType<"Vector","Vector">} **/ (
        layer
      ).style,
    );
  }

  // Add interactions (e.g., draw, select) to the layer if requested
  if (createInteractions && layer.interactions?.length) {
    for (let i = 0; i < layer.interactions.length; i++) {
      const interactionDefinition = layer.interactions[i];
      addInteraction(
        EOxMap,
        /** @type {SelectLayer} **/ (olLayer),
        interactionDefinition,
      );
    }
  }

  // Add interactions (e.g., draw, select) to the layer if requested
  setSyncListeners(olLayer, layer);
  return olLayer;
}

/**
 *
 * @param {import("../layers").EoxSource<any>} eoxSource
 */
function createOlSourceFromDefinition(eoxSource) {
  const availableSources = {
    ...window.eoxMapAdvancedOlSources,
    ...basicOlSources,
  };

  /** @type {new (options?: any) => InstanceType<typeof availableSources[keyof typeof availableSources]>} */

  const NewSource = availableSources[eoxSource.type];
  if (eoxSource && !NewSource) {
    throw new Error(`Source type ${eoxSource.type} not supported!`);
  }

  // Merge available formats, layers, and sources from global scope (if any) with basic ones
  const availableFormats = {
    ...window.eoxMapAdvancedOlFormats,
    ...basicOlFormats,
  };

  const tileGrid = generateTileGrid(eoxSource);

  return new NewSource({
    ...eoxSource,
    ...("format" in eoxSource &&
      eoxSource.type !== "WMTS" && {
        // Set the format (e.g., GeoJSON, MVT) for the source
        format: new availableFormats[
          typeof eoxSource.format === "object"
            ? eoxSource.format.type
            : eoxSource.format
        ]({
          ...(typeof eoxSource.format === "object" && {
            ...eoxSource.format,
          }),
        }),
      }),
    // cluster layers can have their own (sub) source
    ...("source" in eoxSource && {
      source: createOlSourceFromDefinition(
        /** @type {import("../layers").EoxSource<any>} */ (eoxSource.source),
      ),
    }),
    // Set the format (e.g., GeoJSON, MVT) for the source
    ...("tileGrid" in eoxSource && { tileGrid }),
    // Set the projection, converting it using OpenLayers' `getProjection` method
    ...("projection" in eoxSource && {
      projection: getProjection(eoxSource.projection),
    }),
  });
}

/**
 * Adds an interaction (e.g., draw, select) to a given layer.
 *
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 * @param {SelectLayer} olLayer - The OpenLayers layer.
 * @param {EOxInteraction} interactionDefinition - The interaction definition.
 */
function addInteraction(EOxMap, olLayer, interactionDefinition) {
  // Add draw or select interactions based on the interaction type
  if (interactionDefinition.type === "draw")
    addDraw(
      EOxMap,
      /** @type {import("ol/layer/Vector").default} **/ (olLayer),
      /** @type {DrawOptions} **/ (interactionDefinition.options),
    );
  else if (interactionDefinition.type === "select")
    addSelect(
      EOxMap,
      olLayer,
      /** @type {SelectOptions} **/ (interactionDefinition.options),
    );
  else if (interactionDefinition.type === "clusterExplode")
    addClusterExplode(
      EOxMap,
      /** @type {import("ol/layer/Vector").default<import("ol/source/Cluster").default>} */ (
        olLayer
      ),
      /** @type {import("../types").ClusterExplodeOptions} */ (
        interactionDefinition.options
      ),
    );
}

/**
 * Updates an existing layer with a new definition.
 *
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 * @param {EoxLayer} newLayerDefinition - The new layer definition.
 * @param {import("ol/layer/Base").default} existingLayer - The existing layer to be updated.
 * @returns {import("ol/layer/Base").default} - The updated layer.
 *
 * @throws Will throw an error if the new layer is not compatible with the existing one.
 */
export function updateLayer(EOxMap, newLayerDefinition, existingLayer) {
  const existingJsonDefinition =
    /** @type {EoxLayer} **/ existingLayer.get("_jsonDefinition");

  // Check if the new layer is compatible with the existing one
  if (
    newLayerDefinition.type !== existingJsonDefinition.type ||
    (newLayerDefinition.type !== "MapboxStyle" &&
      newLayerDefinition.source?.type !== existingJsonDefinition.source?.type)
  ) {
    throw new Error(`Layers are not compatible to be updated`);
  }

  // Create a new layer to update properties, source, and interactions if needed
  const newLayer = createLayer(EOxMap, newLayerDefinition, false);

  // Update source if different
  if (
    newLayerDefinition.type !== "MapboxStyle" &&
    JSON.stringify(newLayerDefinition.source) !==
      JSON.stringify(existingJsonDefinition.source)
  ) {
    /** @type {import("ol/layer").Vector<import("ol/source").Vector>} **/ (
      /** @type {any} **/ existingLayer
    ).setSource(
      /** @type {import("ol/layer").Vector<import("ol/source").Vector>} **/ (
        /** @type {any} **/ newLayer
      ).getSource(),
    );
  }

  // update entire layer if MapboxStyle has changed
  if (
    newLayerDefinition.type === "MapboxStyle" &&
    JSON.stringify(newLayerDefinition.properties.mapboxStyle) !==
      JSON.stringify(existingJsonDefinition.properties.mapboxStyle)
  ) {
    /** @type {import("../custom/layers/MapboxStyle").default} */ (
      existingLayer
    )
      .getLayers()
      .clear();
    //@ts-expect-error MapboxStyle-Layers can update via `applyMapboxStyle`
    existingLayer.applyMapboxStyle(
      newLayerDefinition.properties.mapboxStyle,
      newLayerDefinition.properties.applyOptions,
    );
  }

  // Update style if different
  if (
    ["Vector", "VectorTile"].includes(newLayerDefinition.type) &&
    JSON.stringify(
      /** @type {import("../layers.ts").EOxLayerType<"Vector"|"VectorTile",any>} */ (
        newLayerDefinition
      ).style,
    ) !== JSON.stringify(existingJsonDefinition.style)
  ) {
    // @ts-expect-error TODO
    existingLayer.setStyle(newLayer.getStyle());
  }

  // Update properties if different
  if (
    JSON.stringify(newLayerDefinition.properties) !==
    JSON.stringify(existingJsonDefinition.properties)
  ) {
    existingLayer.setProperties(newLayerDefinition.properties);
  }

  // Update visibility and opacity if different
  if (newLayerDefinition.visible !== existingJsonDefinition.visible) {
    existingLayer.setVisible(newLayerDefinition.visible);
  }
  if (
    newLayerDefinition.opacity &&
    newLayerDefinition.opacity !== existingJsonDefinition.opacity
  ) {
    existingLayer.setOpacity(newLayerDefinition.opacity);
  }

  // Update interactions if different
  if (
    JSON.stringify(newLayerDefinition.interactions) !==
    JSON.stringify(existingJsonDefinition.interactions)
  ) {
    existingJsonDefinition.interactions?.forEach(
      /** @param {EOxInteraction} interactionDefinition **/ (
        interactionDefinition,
      ) => {
        const correspondingNewInteraction =
          newLayerDefinition.interactions.find(
            (i) =>
              i.type === interactionDefinition.type &&
              i.options?.id === interactionDefinition.options?.id,
          );

        if (!correspondingNewInteraction) {
          // Remove interactions that don't exist in the new definition
          if (interactionDefinition.type === "select") {
            EOxMap.removeSelect(interactionDefinition.options.id);
          } else {
            EOxMap.removeInteraction(interactionDefinition.options.id);
          }
        } else {
          // Update existing interaction if it has changed
          if (correspondingNewInteraction.type === "draw") {
            const olDrawInteraction =
              EOxMap.interactions[correspondingNewInteraction.options.id];
            olDrawInteraction.setActive(
              correspondingNewInteraction.options.active,
            );

            const olModifyInteraction =
              EOxMap.interactions[
                `${correspondingNewInteraction.options.id}_modify`
              ];
            olModifyInteraction.setActive(
              correspondingNewInteraction.options.modify,
            );
          } else {
            const interaction =
              EOxMap.selectInteractions[
                correspondingNewInteraction.options.id
              ] || EOxMap.interactions[correspondingNewInteraction.options.id];
            interaction.setActive(correspondingNewInteraction.options.active);
          }
        }
      },
    );

    // Add new interactions
    newLayerDefinition.interactions?.forEach((interactionDefinition) => {
      const correspondingExistingInteraction =
        existingJsonDefinition.interactions.find(
          /** @param {EOxInteraction} i **/
          (i) =>
            i.type === interactionDefinition.type &&
            i.options?.id === interactionDefinition.options?.id,
        );

      if (!correspondingExistingInteraction) {
        addInteraction(
          EOxMap,
          /** @type {SelectLayer} **/ (/** @type {any} **/ existingLayer),
          interactionDefinition,
        );
      }
    });
  }

  // Update group layers if the layer is a group
  if (newLayerDefinition.type === "Group") {
    const newLayerIds = newLayerDefinition.layers.map((l) => l.properties?.id);
    // @ts-expect-error TODO
    const layerCollection = existingLayer.getLayers();

    // Create a shallow copy of the layers to avoid modifying the collection while iterating
    const layerArray = layerCollection.getArray().slice();

    // Remove layers that do not exist in the new definition
    layerArray.forEach((/** @type {import("ol/layer/Base").default}  **/ l) => {
      if (!newLayerIds.includes(l.get("id"))) {
        layerCollection.remove(l);
      }
    });

    // Add or update layers in the group
    newLayerDefinition.layers.forEach((layerDefinitionInsideGroup) => {
      const newLayerId = layerDefinitionInsideGroup.properties.id;
      if (
        layerCollection
          .getArray()
          .map((/** @type {import("ol/layer/Base").default}  **/ l) =>
            l.get("id"),
          )
          .includes(newLayerId)
      ) {
        // Layer already exists, update it
        updateLayer(
          EOxMap,
          layerDefinitionInsideGroup,
          EOxMap.getLayerById(newLayerId),
        );
      } else {
        // New layer, add it to the group
        const newLayer = createLayer(EOxMap, layerDefinitionInsideGroup);
        layerCollection.push(newLayer);
      }
    });

    const sortNewLayerIds = newLayerIds;
    layerCollection
      .getArray()
      .sort(
        (
          /** @type {import("ol/layer/Base").default} **/ layerA,
          /** @type {import("ol/layer/Base").default} **/ layerB,
        ) => {
          return (
            sortNewLayerIds.indexOf(layerA.get("id")) -
            sortNewLayerIds.indexOf(layerB.get("id"))
          );
        },
      );

    layerCollection.changed();
  }

  // Synchronize properties
  setSyncListeners(existingLayer, newLayerDefinition);
  existingLayer.set("_jsonDefinition", newLayerDefinition, true);

  return existingLayer;
}

/**
 * Generates layers for the map from an array of layer definitions.
 *
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 * @param {Array<EoxLayer>} layerArray - Array of layer definitions.
 * @returns {Array<AnyLayer>} - An array of created layers.
 */
export const generateLayers = (EOxMap, layerArray) => {
  if (!layerArray) return [];

  return [...layerArray].map((l) => createLayer(EOxMap, l));
};

/**
 * Set listeners to keep the state of the layer in sync with the input JSON definition.
 *
 * @param {AnyLayer} olLayer - The OpenLayers layer.
 * @param {EoxLayer} eoxLayer - The EoxLayer definition.
 */
function setSyncListeners(olLayer, eoxLayer) {
  // Sync opacity changes to the layer definition
  olLayer.on("change:opacity", () => {
    eoxLayer.opacity = olLayer.getOpacity();
  });

  // Sync visibility changes to the layer definition
  olLayer.on("change:visible", () => {
    eoxLayer.visible = olLayer.getVisible();
  });

  // Sync zIndex changes to the layer definition
  olLayer.on("change:zIndex", () => {
    eoxLayer.zIndex = olLayer.getZIndex();
  });

  // Sync other property changes to the layer definition
  olLayer.on("propertychange", (e) => {
    if (e.key === "map") return;

    eoxLayer.properties[e.key] = e.target.get(e.key);
  });
}
