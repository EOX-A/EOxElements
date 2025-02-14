/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Returns drawn features as WKT
 */
import { html } from "lit";
import wktSchema from "./public/wktSchema.json";

const wkt = {
  args: {
    schema: wktSchema,
    onChange: (e) => console.info("New value:", e.detail),
  },
  render: (args) => html`
    <p>Refer to the console for the returned values</p>
    <eox-jsonform
      .schema=${args.schema}
      .value=${args.value}
      .noShadow=${false}
      .unstyled=${args.unstyled}
      @change=${args.onChange}
    ></eox-jsonform>
  `,
};

export default wkt;
