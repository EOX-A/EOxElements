import * as olLayers from "ol/layer";
import * as olSources from "ol/source";
import * as olFormats from "ol/format";

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
    return new newLayer({
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
  }

  return layerArray.reverse().map((l) => createLayer(l));
};
