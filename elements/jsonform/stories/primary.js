/**
 * Primary component demonstrating the configuration options for eox-jsonform
 * It renders basic input form based on json-form config
 */
import basicSchema from "./public/basicSchema.json";
import { html } from "lit";

export default {
  args: {
    schema: basicSchema,
    change: (e) => console.info("New value:", e.detail),
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema} @change=${args.change}></eox-jsonform>
  `,
};
