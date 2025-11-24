/**
 * Story for ButtonsEditor custom input
 */
import { html } from "lit";
import buttonsSchema from "./public/buttonsSchema.json";

export default {
  args: {
    schema: buttonsSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
