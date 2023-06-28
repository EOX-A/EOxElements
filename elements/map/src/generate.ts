import * as olLayers from "ol/layer";
import * as olSources from "ol/source";

export const generateLayers = (
  layerArray: Array<{
    type: olLayers.Layer;
    properties?: Object;
    source: { type: olSources.Source };
  }>
) => {
  if (!layerArray) {
    return [];
  }

  const layers: Array<olLayers.Layer> = [];

  layerArray.reverse().forEach((layer) => {
    // @ts-ignore
    const newLayer = olLayers[layer.type];
    // @ts-ignore
    const newSource = olSources[layer.source.type];
    if (!newLayer) {
      throw new Error(`Layer type ${layer.type} not supported!`);
    }
    if (!newSource) {
      throw new Error(`Source type ${layer.source.type} not supported!`);
    }
    layers.push(
      new newLayer({
        ...layer,
        source: new newSource({
          ...layer.source,
        }),
      })
    );
  });
  return layers;
};
