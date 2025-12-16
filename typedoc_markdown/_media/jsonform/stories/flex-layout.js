/**
 * Story demonstrating the flex layout configuration for eox-jsonform.
 * Displays the map and form controls side-by-side.
 */
import { html } from "lit";
import flexLayoutSchema from "./public/flexLayoutSchema.json";

export default {
  args: {
    schema: flexLayoutSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
