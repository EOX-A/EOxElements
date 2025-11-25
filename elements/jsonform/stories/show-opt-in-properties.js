/**
 * Demonstrating the configuration options for eox-jsonform
 * Shows opt-in properties editor
 */
import { html } from "lit";

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
          default: "I am optional but value is set at start",
        },
        baz: {
          type: "string",
        },
        qux: {
          type: "array",
          items: { type: "string" },
        },
      },
    },
    value: {
      bar: "Value set at start",
    },
    options: {
      show_opt_in: true,
    },
    change: (e) => console.info("New value:", e.detail),
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .options=${args.options}
      @change=${args.change}
    ></eox-jsonform>
    <div id="jsonform-data" style="margin-top: 20px;"></div>
  `,
};
