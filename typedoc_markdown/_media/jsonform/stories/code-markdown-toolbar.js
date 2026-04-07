import { html } from "lit";
import codeMarkdownToolbarSchema from "./public/codeMarkdownToolbarSchema.json";
import codeMarkdownToolbarValue from "./public/codeMarkdownToolbarValue.json";

export const CodeMarkdownToolbar = {
  args: {
    schema: codeMarkdownToolbarSchema,
    value: codeMarkdownToolbarValue,
  },
  render: (args) => {
    return html`
      <eox-jsonform .schema=${args.schema} .value=${args.value}></eox-jsonform>
    `;
  },
};

export default CodeMarkdownToolbar;
