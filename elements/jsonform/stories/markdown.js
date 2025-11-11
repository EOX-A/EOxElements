/**
 * Markdown component demonstrating the configuration options for eox-jsonform
 * It renders markdown editor based on easyMDE config JSON
 */
import { html } from "lit";
import markdownSchema from "./public/markdownSchema.json";
import markdownValue from "./public/markdownValue.json";

export default {
  args: {
    schema: markdownSchema,
    value: markdownValue,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema} .value=${args.value}></eox-jsonform>
  `,
};
