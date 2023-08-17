import * as olLayers from "ol/layer";
import * as olSources from "ol/source";
import * as olFormats from "ol/format";
import { applyStyle } from "ol-mapbox-style";
import { FlatStyleLike } from "ol/style/flat";
import mapboxgl, { AnySourceData } from "mapbox-gl";

export type EoxLayer = {
  type: olLayers.Layer;
  id: string;
  properties?: Object;
  source?: { type: olSources.Source };
  layers?: Array<EoxLayer>;
  style?: mapboxgl.Style | FlatStyleLike;
};

export function createLayer(layer: EoxLayer, group?: string): olLayers.Layer {
  // @ts-ignore
  const newLayer = olLayers[layer.type];
  // @ts-ignore
  const newSource = olSources[layer.source?.type];
  if (!newLayer) {
    throw new Error(`Layer type ${layer.type} not supported!`);
  }
  if (layer.source && !newSource) {
    throw new Error(`Source type ${layer.source.type} not supported!`);
  }

  const olLayer = new newLayer({
    ...layer,
    group,
    ...(layer.source && {
      source: new newSource({
        ...layer.source,
        // @ts-ignore
        ...(layer.source.format && {
          // @ts-ignore
          format: new olFormats[layer.source.format](),
        }),
      }),
    }),
    style: undefined, // override layer style, apply style after
    // @ts-ignore
    ...(layer.type === "Group" && {
      layers: layer.layers.reverse().map((l) => createLayer(l, layer.id)),
    }),
  });

  if (layer.style) {
    if ("version" in layer.style) {
      const mapboxStyle: mapboxgl.Style = layer.style;
      // existing layer source will not get overridden by "style" property
      // to allow vector layers without defined sources, create a dummy-geojson-source
      // if source does exist
      if (!mapboxStyle.sources) {
        mapboxStyle.sources = {};
      }
      // @ts-ignore
      const sourceName = layer.properties.id;
      if (!mapboxStyle.sources[sourceName]) {
        const dummy =
          //@ts-ignore
          layer.source.type === "VectorTile"
            ? {
                type: "vector",
              }
            : {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  //@ts-ignore
                  features: [],
                },
              };
        mapboxStyle.sources[sourceName] = dummy as AnySourceData;
      }
      olLayer.set(
        "sourcePromise",
        applyStyle(olLayer, mapboxStyle, sourceName, {
          updateSource: false,
        })
      );
    } else {
      olLayer.setStyle(layer.style);
      olLayer.set("sourcePromise", Promise.resolve());
    }
  }
  return olLayer;
}

export const generateLayers = (layerArray: Array<EoxLayer>) => {
  if (!layerArray) {
    return [];
  }

  return layerArray.reverse().map((l) => createLayer(l));
};
