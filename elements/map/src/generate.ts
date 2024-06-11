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

import { FlatStyleLike } from "ol/style/flat";
import { Collection } from "ol";
import { createXYZ } from "ol/tilegrid";
import { DrawOptions, addDraw } from "./draw";
import { EOxMap } from "../main";
import {
  EOxSelectInteraction,
  SelectLayer,
  SelectOptions,
  addSelect,
} from "./select";
import type Layer from "ol/layer/Base";

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
  | VectorLayer<import("ol/Feature").FeatureLike>
  | VectorTileLayer<import("ol/Feature").FeatureLike>;

export type AnyLayerWithSource =
  | import("ol/layer/BaseImage").default<
      import("ol/source/Image").default,
      import("ol/renderer/canvas/ImageLayer").default
    >
  | import("ol/layer/Tile").default<import("ol/source/Tile").default>
  | VectorOrVectorTileLayer;

/**
 * any realistic layer, image, tile, vector. has "setSource"
 */
export type AnyLayer = AnyLayerWithSource | import("ol/layer/Group").default;

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
  source?: { type: sourceType };
  layers?: Array<EoxLayer>;
  style?: FlatStyleLike;
  interactions?: Array<EOxInteraction>;
  zIndex?: number;
  renderMode?: "vector" | "vectorImage";
};

/**
 * creates an ol-layer from a given EoxLayer definition object
 * @param {EOxMap} EOxMap
 * @param {EoxLayer} layer
 * @param {boolean=} createInteractions
 * @returns {AnyLayer}
 */
export function createLayer(
  EOxMap: EOxMap,
  layer: EoxLayer,
  createInteractions: boolean = true
): AnyLayer {
  layer = JSON.parse(JSON.stringify(layer));

  const availableFormats = {
    ...basicOlFormats,
    ...window.eoxMapAdvancedOlFormats,
  };

  const availableLayers = {
    ...basicOlLayers,
    ...window.eoxMapAdvancedOlLayers,
  };

  const availableSources = {
    ...basicOlSources,
    ...window.eoxMapAdvancedOlSources,
  };

  const newLayer = availableLayers[layer.type];
  const newSource = availableSources[layer.source?.type];
  if (!newLayer) {
    if (!window.eoxMapAdvancedOlLayers) {
      throw new Error(
        `Layer type ${layer.type} not created! Forgot to import advanced layers & sources plugin from @eox/map/dist/eox-map-advanced-layers-and-sources.js?`
      );
    } else {
      throw new Error(`Layer type ${layer.type} not supported!`);
    }
  }
  if (layer.source && !newSource) {
    if (!window.eoxMapAdvancedOlSources) {
      throw new Error(
        `Source type ${layer.source.type} not created! Forgot to import advanced layers & sources plugin from @eox/map/dist/eox-map-advanced-layers-and-sources.js?`
      );
    } else {
      throw new Error(`Source type ${layer.source.type} not supported!`);
    }
  }

  const olLayer = new newLayer({
    ...layer,
    ...(layer.source && {
      source: new newSource({
        ...layer.source,
        // @ts-ignore
        ...(layer.source.format && {
          // @ts-ignore
          format: new availableFormats[layer.source.format](),
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
  }) as AnyLayer;

  olLayer.set("_jsonDefinition", layer, true);

  if (layer.type === "Group") {
    const groupLayers = layer.layers
      .reverse()
      .map((l) => createLayer(EOxMap, l));
    // set a reference to the parent group to each layer of the group
    groupLayers.forEach((l) => l.set("_group", olLayer, true));
    (olLayer as unknown as import("ol/layer/Group").default).setLayers(
      new Collection(groupLayers)
    );
  }

  if (layer.style) {
    (olLayer as VectorOrVectorTileLayer).setStyle(layer.style);
  }
  if (createInteractions && layer.interactions?.length) {
    for (let i = 0, ii = layer.interactions.length; i < ii; i++) {
      const interactionDefinition = layer.interactions[i];
      addInteraction(EOxMap, olLayer as SelectLayer, interactionDefinition);
    }
  }

  setSyncListeners(olLayer, layer);
  return olLayer;
}

/**
 * adds an interaction to a given layer
 * @param EOxMap
 * @param olLayer
 * @param interactionDefinition
 */
function addInteraction(
  EOxMap: EOxMap,
  olLayer: SelectLayer,
  interactionDefinition: EOxInteraction
) {
  if (interactionDefinition.type === "draw") {
    addDraw(
      EOxMap,
      olLayer as VectorLayer<import("ol/Feature").default>,
      interactionDefinition.options as DrawOptions
    );
  } else if (interactionDefinition.type === "select") {
    addSelect(EOxMap, olLayer, interactionDefinition.options as SelectOptions);
  }
}

/**
 * updates an existing layer
 * @param {EoxLayer} newLayerDefinition
 * @param {AnyLayer} existingLayer
 * @returns {existingLayer}
 */
export function updateLayer(
  EOxMap: EOxMap,
  newLayerDefinition: EoxLayer,
  existingLayer: AnyLayer
) {
  const existingJsonDefintion = existingLayer.get(
    "_jsonDefinition"
  ) as EoxLayer;

  // there are probably more cases that make the layers incompatible
  if (
    newLayerDefinition.type !== existingJsonDefintion.type ||
    newLayerDefinition.source?.type !== existingJsonDefintion.source?.type
  ) {
    throw new Error(`Layers are not compatible to be updated`);
  }

  // create a completely new layer to take new source/style/properties from, if changed
  // interactions are handled seperately
  const newLayer = createLayer(EOxMap, newLayerDefinition, false);

  if (
    JSON.stringify(newLayerDefinition.source) !==
    JSON.stringify(existingJsonDefintion.source)
  ) {
    (existingLayer as AnyLayerWithSource).setSource(
      //@ts-expect-error format is not defined on image layer. expect the sources to be of the same type.
      newLayer.getSource()
    );
  }

  if (
    ["Vector", "VectorTile"].includes(newLayerDefinition.type) &&
    JSON.stringify(newLayerDefinition.style) !==
      JSON.stringify(existingJsonDefintion.style)
  ) {
    (existingLayer as VectorLayer<import("ol/Feature").FeatureLike>).setStyle(
      (newLayer as VectorLayer<import("ol/Feature").FeatureLike>).getStyle()
    );
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
  if (
    JSON.stringify(newLayerDefinition.interactions) !==
    JSON.stringify(existingJsonDefintion.interactions)
  ) {
    existingJsonDefintion.interactions?.forEach((interactionDefinition) => {
      const correspondingNewInteraction = newLayerDefinition.interactions.find(
        (i) => i.type === interactionDefinition.type
      );
      if (!correspondingNewInteraction) {
        // remove all interactions that do not exist in the new layer definition
        EOxMap.removeInteraction(interactionDefinition.options.id);
      } else {
        // interaction exists, but has changed
        if (correspondingNewInteraction.type === "draw") {
          const olDrawInteraction = EOxMap.interactions[
            correspondingNewInteraction.options.id
          ] as import("ol/interaction").Draw;
          olDrawInteraction.setActive(
            correspondingNewInteraction.options.active
          );
          const olModifyInteraction = EOxMap.interactions[
            `${correspondingNewInteraction.options.id}_modify`
          ] as import("ol/interaction").Modify;
          olModifyInteraction.setActive(
            (correspondingNewInteraction.options as DrawOptions).modify
          );
        } else {
          const olSelectInteraction = EOxMap.selectInteractions[
            correspondingNewInteraction.options.id
          ] as EOxSelectInteraction;
          olSelectInteraction.setActive(
            correspondingNewInteraction.options.active
          );
        }
      }
    });
    // for each truly "new" interaction, add the corresponding interaction
    newLayerDefinition.interactions?.forEach((interactionDefinition) => {
      const correspondingExistingInteraction =
        existingJsonDefintion.interactions.find(
          (i) => i.type === interactionDefinition.type
        );
      if (!correspondingExistingInteraction) {
        addInteraction(
          EOxMap,
          existingLayer as SelectLayer,
          interactionDefinition
        );
      }
    });
  }

  if (newLayerDefinition.type === "Group") {
    const newLayerIds = newLayerDefinition.layers.map((l) => l.properties?.id);
    // remove all layers from the group that do not exist in the new layer definition
    const layerCollection = (
      existingLayer as unknown as import("ol/layer/Group").default
    ).getLayers();
    layerCollection.forEach((l: Layer) => {
      if (!newLayerIds.includes(l.get("id"))) {
        layerCollection.remove(l);
      }
    });

    // add or update all layers
    newLayerDefinition.layers.forEach((layerDefinitionInsideGroup) => {
      const newLayerId = layerDefinitionInsideGroup.properties.id;
      if (
        layerCollection
          .getArray()
          .map((l: Layer) => l.get("id"))
          .includes(newLayerId)
      ) {
        // layer already existed
        updateLayer(
          EOxMap,
          layerDefinitionInsideGroup,
          EOxMap.getLayerById(newLayerId)
        );
      } else {
        // new layer inside this group
        const newLayer = createLayer(EOxMap, layerDefinitionInsideGroup);
        layerCollection.push(newLayer);
      }
    });

    // after all layers were added/updated/deleted, rearrange them in the correct order
    layerCollection.getArray().sort((layerA: Layer, layerB: Layer) => {
      return (
        // change this order?  the reverse order, because we want the topmost layer to be on top
        newLayerIds.indexOf(layerA.get("id")) -
        newLayerIds.indexOf(layerB.get("id"))
      );
    });
    layerCollection.changed();
  }
  setSyncListeners(existingLayer, newLayerDefinition);
  existingLayer.set("_jsonDefinition", newLayerDefinition, true);
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
 * @param {Layer} olLayer
 * @param {EoxLayer} eoxLayer
 */
function setSyncListeners(olLayer: Layer, eoxLayer: EoxLayer) {
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
    if (e.key === "map") {
      // do not sync property when setting the "map" of the layer
      return;
    }
    //@ts-ignore
    eoxLayer.properties[e.key] = e.target.get(e.key);
  });
}
