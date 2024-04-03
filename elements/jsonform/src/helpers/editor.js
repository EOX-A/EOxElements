import { JSONEditor } from "@json-editor/json-editor/src/core.js";
import addCustomInputs from "../custom-inputs";

export const createEditor = (element) => {
  addCustomInputs(element.value || {});

  const formEle = element.renderRoot.querySelector("form");

  return new JSONEditor(formEle, {
    schema: element.schema,
    ...(element.value ? { startval: element.value } : {}),
    theme: "html",
    ajax: true,
    ...element.options,
  });
};
