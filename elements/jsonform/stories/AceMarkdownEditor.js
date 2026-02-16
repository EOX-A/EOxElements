import { html } from "lit";
import aceMarkdownSchema from "./public/aceMarkdownSchema.json";
import aceMarkdownValue from "./public/aceMarkdownValue.json";

export const AceMarkdownEditor = {
  args: {
    schema: aceMarkdownSchema,
    value: aceMarkdownValue,
  },
  render: (args) => {
    return html`
      <eox-jsonform
        .schema=${args.schema}
        .value=${args.value}
      ></eox-jsonform>
    `;
  },
};

export default AceMarkdownEditor;
