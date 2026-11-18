/**
 * Story demonstrating `anyOf` / `oneOf` branching with `keep_oneof_values: false`,
 * minmax sliders, dynamic watchers, and string templates.
 */
import { html } from "lit";
import branchingSchema from "./public/branchingSchema.json";

export default {
  args: {
    schema: branchingSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
