import * as olLayers from "ol/layer";
import * as olSources from "ol/source";
import * as olFormats from "ol/format";
import { applyStyle } from "ol-mapbox-style";

type EoxLayer = {
  type: olLayers.Layer;
  properties?: Object;
  source?: { type: olSources.Source };
  layers?: Array<EoxLayer>;
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
      // @ts-ignore
      ...(layer.type === "Group" && {
        layers: layer.layers.reverse().map((l) => createLayer(l)),
      }),
    });
    if (olLayer.get("style")) {
      // existing layer source will not get overridden by "style" property
      // to allow vector layers without defined sources, create a dummy-geojson-source
      // if source does exist
      const style = olLayer.get("style");
      if (!style.sources) {
        style.sources = {};
      }
      const sourceName = style.layers[0].source;
      if (!style.sources[sourceName]) {
        style.sources[sourceName] = {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          },
        };
      }
      applyStyle(olLayer, style, sourceName);
    }
    return olLayer;
  }

  return layerArray.reverse().map((l) => createLayer(l));
};
