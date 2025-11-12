/**
 * Catalog component demonstrating the configuration options for eox-jsonform
 * It renders unstyled input form based on basic json-form config
 */
import { html } from "lit";
import catalogSchema from "./public/catalogSchema.json";
import catalogValue from "./public/catalogValue.json";

export default {
  args: {
    schema: catalogSchema,
    value: catalogValue,
    unstyled: true,
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      ?unstyled=${args.unstyled}
    ></eox-jsonform>
  `,
};
