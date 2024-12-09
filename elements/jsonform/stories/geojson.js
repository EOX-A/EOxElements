/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Returns drawn features as GeoJSON
 */
import { html } from "lit";
import geojsonSchema from "./public/geojsonSchema.json";

const geoJson = {
  args: {
    schema: geojsonSchema,
    onChange: (e) => {
      console.log("value:", e.detail);
    },
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

export default geoJson;
