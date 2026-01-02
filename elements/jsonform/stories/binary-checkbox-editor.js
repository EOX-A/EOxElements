/**
 * Story for BinaryCheckboxEditor custom input
 */
import { html } from "lit";
import binaryCheckboxSchema from "./public/binaryCheckboxSchema.json";

export default {
  args: {
    schema: binaryCheckboxSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
