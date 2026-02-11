import { html } from "lit";

export default {
  args: {
    schema: {
      type: "object",
      format: "grid",
      properties: {
        name: { type: "string", title: "Name" },
        email: { type: "string", title: "Email" },
        phone: { type: "string", title: "Phone" },
        address: { type: "string", title: "Address" },
        country: { type: "string", title: "Country" },
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
