import { JSONEditor } from "@json-editor/json-editor/dist/jsoneditor.js";
import { MinMaxEditor } from "./minmax";
const inputs = [
  {
    type: "object",
    format: "minmax",
    func: MinMaxEditor,
  },
];

/**
 * Add custom input fields to @json-editor
 * @param {{[key: string]: any}} startVals
 */
export const addCustomInputs = (startVals) => {
  inputs.map(({ type, format, func }) => {
    JSONEditor.defaults["startVals"] = startVals;
    JSONEditor.defaults.editors[format] = func;
    JSONEditor.defaults.resolvers.unshift((schema) => {
      if (schema.type === type && schema.format === format) return format;
    });
  });
};

export default addCustomInputs;
