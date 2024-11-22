import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { MinMaxEditor } from "./minmax";
import { SpatialEditor, spatialValidator } from "./spatial";

// Define custom input types
const inputs = [
  {
    type: "object",
    format: "minmax",
    func: MinMaxEditor,
  },
  {
    type: "spatial",
    format: "bounding-boxes",
    func: SpatialEditor,
  },
  {
    type: "spatial",
    format: "bounding-box",
    func: SpatialEditor,
  },
  {
    type: "spatial",
    format: "polygons",
    func: SpatialEditor,
  },
  {
    type: "spatial",
    format: "polygon",
    func: SpatialEditor,
  },
  {
    type: "spatial",
    format: "feature",
    func: SpatialEditor,
  },
  {
    type: "spatial",
    format: "features",
    func: SpatialEditor,
  },
];

/**
 * Add custom input fields to @json-editor
 *
 * @param {{[key: string]: any}} startVals - Initial values for the custom inputs
 */
export const addCustomInputs = (startVals) => {
  // Add custom validators for spatial inputs
  JSONEditor.defaults["custom_validators"].push(spatialValidator);

  // Iterate over each custom input definition
  inputs.map(({ type, format, func }) => {
    JSONEditor.defaults["startVals"] = startVals;
    JSONEditor.defaults.editors[format] = func;

    // Add a resolver to determine which format to use based on the schema
    JSONEditor.defaults.resolvers.unshift((schema) => {
      if (schema.type === type && schema.format === format) return format;
    });
  });
};

export default addCustomInputs;
