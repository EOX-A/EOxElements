/**
 * Collection component demonstrating the configuration options for eox-jsonform
 * It renders input form based on json-form config and STAC collection config
 */
import { html } from "lit";
import collectionSchema from "./public/collectionSchema.json";
import collectionValue from "./public/collectionValue.json";

export default {
  args: {
    schema: collectionSchema,
    value: collectionValue,
    options: {
      disable_edit_json: false,
      disable_properties: false,
    },
    propertiesToggle: true,
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .options=${args.options}
      .propertiesToggle=${args.propertiesToggle}
    ></eox-jsonform>
  `,
};
