import { html } from "lit";

export default {
  args: {
    schema: {
      type: "object",
      format: "grid-strict",
      properties: {
        a: {
          title: "a",
          type: "string",
          options: {
            grid_columns: 4,
          },
        },
        b: {
          title: "b",
          type: "string",
          options: {
            grid_columns: 4,
            grid_break: true,
          },
        },
        c: {
          title: "c",
          type: "string",
          options: {
            grid_columns: 6,
          },
        },
        d: {
          title: "d",
          type: "string",
          options: {
            grid_columns: 6,
          },
        },
      },
    },
  },
  render: (args) => html`
    <eox-jsonform
      .schema=${args.schema}
      .options=${args.options}
    ></eox-jsonform>
  `,
};
