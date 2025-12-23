// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import {
  PrimaryStory,
  DataValuesStory,
  GeoDBStory,
  Base64EncodedStory,
} from "./index.js";

export default {
  title: "Elements/eox-chart",
  tags: ["autodocs"],
  component: "eox-chart",
  args: {
    style: "width:100%; height: 400px;",
  },
  render: (args) => html`
    <eox-chart
      .spec=${args.spec}
      .specbase64=${args.specbase64}
      .dataValues=${args.dataValues}
      .noShadow=${args.noShadow}
      .unstyled=${args.unstyled}
      .style=${args.style}
      @pointermove:item=${args["pointermove:item"]}
      @click:item=${args["click:item"]}
    ></eox-chart>
  `,
};

/**
 * Basic chart example. It sets a simple Vega-Lite spec including data values
 * as the `spec` property of eox-chart and renders a bar chart. In this example, the `pointermove:item`
 * and `click:item` events of `eox-chart` are console logged.
 */
export const Primary = PrimaryStory;

/**
 * Set the data values manually after chart initialization: this example demonstrates
 * how data can be set independently of the `spec`. This is handy if the `spec` should
 * stay the same, while the data updates at a later point. For this to work,
 * the `spec` needs to include a named data source inside `data.name`, in this case set to "myData", and inside the
 * passed `dataValues` property there needs to be a key also called "myData". Thus, the
 * data values of `dataValues.myData` are applied to the chart independently of the `spec`.
 */
export const DataValues = DataValuesStory;

/**
 * Retrieve and display data from geoDB endpoint. This example shows a Vega-Lite spec
 * that fetches data from a live endpoint and renders it as a line chart.
 */
export const GeoDB = GeoDBStory;

/**
 * Passing Vega specification as base64 encoded string. This example shows use case where spec
 * contains both single quote and double quote which can not be passed as HTML attribute.
 * EOxChart exports util function `base64EncodeSpec` so that parent application can create the base64 encoded spec.
 */
export const Base64EncodedSpec = Base64EncodedStory;
