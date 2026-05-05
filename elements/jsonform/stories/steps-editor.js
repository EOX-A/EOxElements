/**
 * Steps Editor story for eox-jsonform.
 *
 * Demonstrates a multi-step accordion wizard rendered via the `"format": "steps"` custom editor.
 * Each child property of the object becomes a step. Steps can depend on previous selections
 * (`options.dependsOn`), auto-complete when their dependency is met (`options.autoComplete`),
 * and use the standard `options.grid_columns` to control card grid sizing.
 *
 * The value produced is a plain object keyed by step id, e.g.:
 * `{ year: "2024", product: "cloudless-rgb", projection_format: "EPSG:4326/GeoTIFF", region: "Europe" }`
 *
 * When a step has more than 10 options (e.g. the region step), a `<select>` dropdown is rendered
 * instead of the card grid.
 */
import { html } from "lit";
import stepsSchema from "./public/stepsSchema.json";

export default {
  args: {
    schema: stepsSchema,
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema}></eox-jsonform>
  `,
};
