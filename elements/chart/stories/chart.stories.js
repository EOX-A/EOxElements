// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import { PrimaryStory, GeoDBStory, RequestChunkingStory } from "./index.js";

export default {
  title: "Elements/eox-chart",
  tags: ["autodocs"],
  component: "eox-chart",
  render: (args) => html`
    <eox-chart
      .spec=${args.spec}
      .requestChunking=${args.requestChunking}
      .noShadow=${args.noShadow}
      .unstyled=${args.unstyled}
      style="width:100%; height: 400px;"
    ></eox-chart>
  `,
};

/**
 * Basic chart example
 */
export const Primary = PrimaryStory;

/**
 * Retrieve and display data from geoDB endpoint
 */
export const GeoDB = GeoDBStory;

/**
 * Chunk requests and continuosly add data to chart
 */
export const RequestChunking = RequestChunkingStory;
