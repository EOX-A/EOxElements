import * as olLayers from "ol/layer";
import * as olSources from "ol/source";
import * as olFormats from "ol/format";
import { applyStyle } from "ol-mapbox-style";
import { FlatStyleLike } from "ol/style/flat";
import mapboxgl from "mapbox-gl";

type EoxLayer = {
  type: olLayers.Layer;
  properties?: Object;
  source?: { type: olSources.Source };
  layers?: Array<EoxLayer>;
  style?: mapboxgl.Style | FlatStyleLike;
};

export const generateLayers = (layerArray: Array<EoxLayer>) => {
  if (!layerArray) {
    return [];
  }

  function createLayer(layer: EoxLayer): olLayers.Layer {
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
        layers: layer.layers.reverse().map((l) => createLayer(l)),
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
          mapboxStyle.sources[sourceName] = {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [],
            },
          };
        }
        applyStyle(olLayer, mapboxStyle, sourceName);
      } else {
        olLayer.setStyle(layer.style);
      }
    }
    return olLayer;
  }

  return layerArray.reverse().map((l) => createLayer(l));
};
