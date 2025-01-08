/**
 * Custom editor interface for eox-jsonform
 */
import { html } from "lit";
import CustomEditorExample from "../src/custom-inputs/example.js";

const customEditorInterfaces = {
  args: {
    schema: {
      properties: {
        test: {
          type: "boolean",
          format: "custom",
          title: "Custom Editor Field",
        },
      },
    },
    value: {
      test: false,
    },
    customEditorInterfaces: [
      {
        type: "boolean",
        format: "custom",
        func: CustomEditorExample,
      },
    ],
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .noShadow=${false}
      .unstyled=${args.unstyled}
      .customEditorInterfaces=${args.customEditorInterfaces}
      @change=${args.onChange}
    ></eox-jsonform>
  `,
};

export default customEditorInterfaces;
