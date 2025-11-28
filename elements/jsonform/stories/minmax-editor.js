/**
 * Story for MinMaxEditor custom input
 */
import { html } from "lit";
import minmaxSchema from "./public/minmaxSchema.json";

export default {
  args: {
    schema: minmaxSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
