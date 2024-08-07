import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import { MinMaxEditor } from "./minmax";

// Define custom input types
const inputs = [
  {
    type: "object",
    format: "minmax",
    func: MinMaxEditor,
  },
];

/**
 * Add custom input fields to @json-editor
 *
 * @param {{[key: string]: any}} startVals - Initial values for the custom inputs
 */
export const addCustomInputs = (startVals) => {
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
