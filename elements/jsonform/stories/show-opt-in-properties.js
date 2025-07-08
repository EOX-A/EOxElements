/**
 * Demonstrating the configuration options for eox-jsonform
 * Shows opt-in properties editor
 */
import { html } from "lit";

const ShowOptInProperties = {
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
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .options=${args.options}
      .noShadow=${args.noShadow}
      .unstyled=${args.unstyled}
      @change=${args.onChange}
      @ready=${args.onReady}
      @submit=${args.onSubmit}
    ></eox-jsonform>
    <div id="jsonform-data" style="margin-top: 20px;"></div>
  `,
  play: async ({ canvasElement }) => {
    canvasElement.querySelector("eox-jsonform").editor.on("change", () => {
      document.querySelector("#jsonform-data").innerHTML = JSON.stringify(
        canvasElement.querySelector("eox-jsonform").value,
        null,
        2,
      );
    });
  },
};
export default ShowOptInProperties;
