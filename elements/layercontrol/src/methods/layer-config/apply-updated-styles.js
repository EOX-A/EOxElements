import { getGeoZarrBandRange, updateGeoZarrBand } from "../../helpers";

/**
 * @param {Record<string,number>} jsonformOutput
 * @param { import("ol/layer/Layer").default} layer
 * @param { import("../../components/layer-config").EOxLayerControlLayerConfig['layerConfig']} layerConfig
 * */
export default async function (jsonformOutput, layer, layerConfig) {
  // check whether the layer is Vector or Tile
  const isTile = "updateStyleVariables" in layer;
  const isVector = "setStyle" in layer;

  const styles = isTile
    ? /** @type {import('ol/layer/WebGLTile').default} */ (layer)["style_"]
    : layerConfig.style;
  const updatedValues = flattenObject(jsonformOutput);

  if (styles) {
    const styleVars = styles.variables || {};
    /** @type {Record<string,any>} */
    styles.variables = {
      ...styleVars,
      ...updatedValues,
    };
  }

  // check if it supports updating the variables using ol first
  if (isTile) {
    const selectedVar = jsonformOutput?.variable ?? jsonformOutput?.band;
    if (selectedVar !== undefined) {
      const lastVar = layer.get("_lastVariable");
      if (selectedVar !== lastVar) {
        const rangeResult = await updateGeoZarrBand(layer, String(selectedVar));

        const targetMin =
          rangeResult?.targetMin ??
          getGeoZarrBandRange(layer, String(selectedVar), layerConfig)
            .targetMin;
        const targetMax =
          rangeResult?.targetMax ??
          getGeoZarrBandRange(layer, String(selectedVar), layerConfig)
            .targetMax;

        const isAutofill =
          layerConfig?.autofill === true ||
          layerConfig?.schema?.autofill === true;
        const hasMinMaxStyle =
          isAutofill ||
          styles?.variables?.min !== undefined ||
          styles?.variables?.max !== undefined ||
          layerConfig?.schema?.properties?.min !== undefined ||
          layerConfig?.schema?.properties?.max !== undefined;

        if (hasMinMaxStyle) {
          if (jsonformOutput) {
            if ("min" in jsonformOutput) jsonformOutput.min = targetMin;
            if ("max" in jsonformOutput) jsonformOutput.max = targetMax;
          }
          updatedValues.min = targetMin;
          updatedValues.max = targetMax;
          if (styles?.variables) {
            styles.variables.min = targetMin;
            styles.variables.max = targetMax;
          }
        }
      }
    }

    // Check and update non-temporal GeoZarr dimensions if present
    const geozarrDims = layer.get("_geozarrDimensions");
    const source = /** @type {any} */ (
      layer.getSource ? layer.getSource() : null
    );
    if (
      source &&
      typeof source.updateDimensions === "function" &&
      geozarrDims
    ) {
      /** @type {Record<string, number>} */
      const dimUpdates = {};
      for (const dimName of Object.keys(geozarrDims)) {
        if (jsonformOutput[dimName] !== undefined) {
          dimUpdates[dimName] = Number(jsonformOutput[dimName]);
        }
      }
      if (Object.keys(dimUpdates).length > 0) {
        source.updateDimensions(dimUpdates);
      }
    }

    /** @type {import('ol/layer/WebGLTile').default} */ (
      layer
    ).updateStyleVariables(updatedValues);
  } else if (isVector && styles) {
    const updatedStyles = updateVectorLayerStyle(styles);
    /** @type {import('ol/layer/Vector').default} */ (layer).setStyle(
      updatedStyles,
    );
  }
}

/***
 * @param {Record<string,any>} obj
 **/
export const flattenObject = (obj) => {
  /**
   * the flattened object to be returned
   *  @type {Record<string,any>} */
  const flat = {};
  // loop through the keys of the object
  for (const key in obj) {
    // if the property is of type object
    if (typeof obj[key] == "object" && obj[key] !== null) {
      // flatten it recursively
      const flatObject = flattenObject(
        /** @type {Record<string,any>} */ (obj[key]),
      );
      // assign all of its values to the flat object to be returned
      for (const nestedKey in flatObject) {
        flat[nestedKey] = flatObject?.[nestedKey];
      }
    } else {
      // the property is of a primitive value
      // assign it to the object to be returned
      flat[key] = obj?.[key];
    }
  }
  return flat;
};

/**
 * updating the variables assigned in the layer style
 * from the `styles.variables` property
 * @param {Record<string,any>} styles
 * @returns
 */
export function updateVectorLayerStyle(styles) {
  // pass back flat style if contained in config
  let returnStyle = styles;
  // Check if variables are defined and need to be "burned in" first
  if ("variables" in styles) {
    // stringify all the styles to be able to search quickly
    let rawStyle = JSON.stringify(styles);
    // extract updated variables
    const { variables } = styles;
    // loop through the variables keys
    for (const key in variables) {
      // ol styles expects numbers to be assigned as typeof number
      if (typeof variables[key] === "number") {
        rawStyle = rawStyle.replaceAll(
          `["var","${key}"]`,
          String(variables[key]),
        );
      } else {
        // replace all styles variables set of the specific key with the variables value
        rawStyle = rawStyle.replaceAll(
          `["var","${key}"]`,
          `"${variables[key]}"`,
        );
      }
    }
    returnStyle = JSON.parse(rawStyle);
  }
  return returnStyle;
}
