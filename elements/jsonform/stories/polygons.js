/**
 * Drawtools component demonstrating the configuration options for eox-jsonform.
 * Allows the user to draw polygons on the map as an input
 */
import { html } from "lit";
import polygonsScheme from "./public/polygonSchema.json";

export default {
  args: {
    schema: polygonsScheme,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
