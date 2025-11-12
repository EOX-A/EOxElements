import { html } from "lit";

/**
 * External URL component demonstrating the configuration options for eox-jsonform
 * It renders json-form based on external url
 */
const externalSchema = `${
  window.location.href.split("iframe.html")[0]
}/catalogSchema.json`;
const externalValue = `${
  window.location.href.split("iframe.html")[0]
}/catalogValue.json`;

export default {
  args: {
    schema: externalSchema,
    value: externalValue,
    ready: () => console.log("Schema loading finished, editor ready!"),
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      @ready=${args.ready}
    ></eox-jsonform>
  `,
};
