import VectorLayer from "ol/layer/Vector";
import WebGLTileLayer from "ol/layer/WebGLTile";

/**
 * @param {Record<string,number>} jsonformOutput
 * @param { import("ol/layer/Layer").default} layer
 * @param { import("../../components/layer-config").EOxLayerControlLayerConfig['layerConfig']} layerConfig
 * */
export default function (jsonformOutput, layer, layerConfig) {
  // check whether the layer is Vector or Tile
  const isTile =
    layer.get("type") === "WebGLTile" || layer instanceof WebGLTileLayer;
  const isVector =
    layer.get("type") === "Vector" || layer instanceof VectorLayer;

  const styles = isTile
    ? /** @type {import('ol/layer/WebGLTile').default} */ (layer)["style_"]
    : layerConfig.style;
  let styleVars = styles?.variables;
  if (styleVars) {
    const updatedValues = flattenObject(jsonformOutput);
    /** @type {Record<string,any>} */
    styles.variables = {
      ...styleVars,
      ...updatedValues,
    };

    if (isVector) {
      const updatedStyles = updateVectorLayerStyle(styles);
      /** @type {import('ol/layer/Vector').default} */ (layer).setStyle(
        updatedStyles
      );
    } else if (isTile) {
      /** @type {import('ol/layer/WebGLTile').default} */ (
        layer
      ).updateStyleVariables(updatedValues);
    }
  }
}

/***
 * @param {Record<string,any>} obj
 **/
const flattenObject = (obj) => {
  /**
   * the flattened object to be returned
   *  @type {Record<string,number>} */
  const falt = {};
  // loop through the keys of the object
  for (const key in obj) {
    // if the property is of type object
    if (typeof obj[key] == "object" && obj[key] !== null) {
      // flatten it recursively
      const flatObject = flattenObject(
        /** @type {Record<string,any>} */ (obj[key])
      );
      // assign all of its values to the flat object to be returned
      for (const nestedKey in flatObject) {
        falt[nestedKey] = flatObject?.[nestedKey];
      }
    } else {
      // the property is of a primitive value
      // assign it to the object to be returned
      falt[key] = obj?.[key];
    }
  }
  return falt;
};
/**
 * updating the variables assigned in the layer style
 * from the `styles.variables` property
 * @param {Record<string,any>} styles
 * @returns
 */
function updateVectorLayerStyle(styles) {
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
        //@ts-expect-error expects a string param and got a numbed
        rawStyle = rawStyle.replaceAll(`["var","${key}"]`, variables[key]);
      } else {
        // replace all styles variables set of the specific key with the variables value
        rawStyle = rawStyle.replaceAll(
          `["var","${key}"]`,
          `"${variables[key]}"`
        );
      }
    }
    returnStyle = JSON.parse(rawStyle);
  }
  return returnStyle;
}
