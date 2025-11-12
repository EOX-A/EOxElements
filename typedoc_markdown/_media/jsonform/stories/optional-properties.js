import { html } from "lit";

/**
 * Demonstrating the configuration options for eox-jsonform
 * Shows optional properties editor
 */

export default {
  args: {
    schema: {
      title: "Optional Properties Demo",
      type: "object",
      required: ["foo"],
      properties: {
        foo: {
          type: "string",
          default: "I am required!",
        },
        bar: {
          type: "string",
        },
        baz: {
          type: "string",
          default: "I am optional and hidden at startup!",
        },
      },
    },
    value: {
      bar: "I am optional and shown via the starting value!",
    },
    options: {
      disable_properties: false,
    },
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .options=${args.options}
    ></eox-jsonform>
  `,
};
