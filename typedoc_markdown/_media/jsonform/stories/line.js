/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Allows users to draw a line/lines on a map as a form input
 */
import { html } from "lit";
import lineSchema from "./public/lineSchema.json";

export default {
  args: {
    schema: lineSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
