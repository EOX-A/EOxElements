// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import { PrimaryStory, DataValuesStory, GeoDBStory } from "./index.js";

export default {
  title: "Elements/eox-chart",
  tags: ["autodocs"],
  component: "eox-chart",
  render: (args) => html`
    <eox-chart
      .spec=${args.spec}
      .dataValues=${args.dataValues}
      .noShadow=${args.noShadow}
      .unstyled=${args.unstyled}
      @click.item=${(e) =>
        console.log("Chart clicked! Clicked item: ", e.detail.item)}
      style="width:100%; height: 400px;"
    ></eox-chart>
  `,
};

/**
 * Basic chart example
 */
export const Primary = PrimaryStory;

/**
 * Set the data values manually after chart initialization
 */
export const DataValues = DataValuesStory;

/**
 * Retrieve and display data from geoDB endpoint
 */
export const GeoDB = GeoDBStory;
