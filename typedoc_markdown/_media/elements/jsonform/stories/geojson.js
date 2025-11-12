/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Returns drawn features as GeoJSON
 */
import { html } from "lit";
import geojsonSchema from "./public/geojsonSchema.json";

export default {
  args: {
    schema: geojsonSchema,
    change: (e) => console.info("New value:", e.detail),
  },
  render: (args) => html`
    <p>Refer to the console for the returned values</p>
    <eox-jsonform .schema=${args.schema} @change=${args.change}></eox-jsonform>
  `,
};
