import * as olLayers from "ol/layer";
import * as olSources from "ol/source";
import * as olFormats from "ol/format";
import * as olStyles from "ol/style";
import { Feature } from "ol";

export const generateLayers = (
  layerArray: Array<{
    type: olLayers.Layer;
    source: { type: olSources.Source };
  }>
) => {
  if (!layerArray) {
    return [];
  }

  const layers: Array<olLayers.Layer> = [];

  const parseStyle = (style: any) => {
    if (!style.function) {
      // normal style, doesn't need parsing
      return style;
    }
    // trying to parse a style function in the format "(feature) => feature.get('COLOR')"
    const parsedStyle = (feature: Feature) =>
      Object.entries(style.function).reduce((acc, [property, options]) => {
        const parsedOptions = {};
        Object.entries(options).forEach(([key, value]) => {
          if (value.startsWith("(feature")) {
            var fn = eval(
              `(function(feature) { return ${value.replace(
                "(feature) => ",
                ""
              )} })`
            );
            // @ts-ignore
            parsedOptions[key] = fn(feature);
          } else {
            // @ts-ignore
            parsedOptions[key] = value;
          }
        });
        // @ts-ignore
        acc[property] = new olStyles[options.type]({
          ...parsedOptions,
        });
        return acc;
      }, {});
    return (feature: Feature) => new olStyles.Style(parsedStyle(feature));
  };

  layerArray.reverse().forEach((layer) => {
    layers.push(
      // @ts-ignore
      new olLayers[layer.type]({
        ...layer,
        // @ts-ignore
        source: new olSources[layer.source.type]({
          ...layer.source,
          // @ts-ignore
          ...(layer.source.format && {
            // @ts-ignore
            format: new olFormats[layer.source.format](),
          }),
        }),
        // @ts-ignore
        ...(layer.style && { style: parseStyle(layer.style) }),
      })
    );
  });
  return layers;
};
