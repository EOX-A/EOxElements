/**
 * Drawtools component demonstrating the configuration options for eox-jsonform
 * Allows users to select a bounding box on a map as a form input
 */
import { html } from "lit";
import boundingBoxSchema from "./public/boundingBoxSchema.json";

export default {
  args: {
    schema: boundingBoxSchema,
    value: {
      bboxes: [
        [
          -121.18245390972663, -21.7418944691672, -95.32104259376986,
          4.8061029879211645,
        ],
        [
          -96.92307692307692, -7.09472345835983, -79.07183725365543,
          13.731722822631909,
        ],
      ],
      bbox: [],
      bboxes2: [],
    },
  },
  render: (args) => html`
    <eox-jsonform .schema=${args.schema} .value=${args.value}></eox-jsonform>
  `,
};
