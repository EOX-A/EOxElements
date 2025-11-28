/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Allows users to select point/points on a map as a form input
 */
import pointSchema from "./public/pointSchema.json";
import { html } from "lit";

export default {
  args: {
    schema: pointSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
