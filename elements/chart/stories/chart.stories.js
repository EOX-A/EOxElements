// Global import of eox-elements in .storybook/preview.js!
import { html } from "lit";
import {
  PrimaryStory,
  DataValuesStory,
  GeoDBStory,
  Base64EncodedStory,
  OverviewZoomStory,
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

/**
 * Overview + detail (focus + context) chart with interactive zoom brush and prominent drag handles.
 *
 * This example demonstrates a dual-view time series chart using vertical concatenation (`vconcat`):
 * - **Detail View (top)**: A large detailed area chart showing the zoomed time range, with its x-axis domain dynamically bound to the overview brush parameter (`"scale": {"domain": {"param": "brush"}}`).
 * - **Overview View (bottom)**: A compact summary timeline displaying the full dataset extent with an interval selection (`brush`) allowing users to click and drag to pan or select time ranges.
 * - **Visible Drag Handles**: Obvious handle visualizers are added at the boundaries of the interval selection using layered `rule` marks and pill-shaped `point` grip tabs bound to `brush.date[0]` and `brush.date[1]`, with conditional opacity so they appear cleanly whenever an active selection exists.
 *
 * Fully functional example:
 *
 * ```html
 * <eox-chart
 *   style="width: 100%; height: 450px;"
 *   .spec=${{
 *     $schema: "https://vega.github.io/schema/vega-lite/v5.json",
 *     data: {
 *       url: "https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/sp500.csv",
 *       format: { type: "csv", parse: { price: "number", date: "date" } },
 *     },
 *     vconcat: [
 *       {
 *         width: 640,
 *         height: 220,
 *         mark: {
 *           type: "area",
 *           color: "#004170",
 *           line: { color: "#002847", width: 1.5 },
 *         },
 *         encoding: {
 *           x: {
 *             field: "date",
 *             type: "temporal",
 *             scale: { domain: { param: "brush" } },
 *             axis: { title: "" },
 *           },
 *           y: {
 *             field: "price",
 *             type: "quantitative",
 *             axis: { title: "Price ($)" },
 *           },
 *         },
 *       },
 *       {
 *         width: 640,
 *         height: 70,
 *         layer: [
 *           {
 *             mark: {
 *               type: "area",
 *               color: "#94b8d7",
 *               opacity: 0.7,
 *             },
 *             params: [
 *               {
 *                 name: "brush",
 *                 select: {
 *                   type: "interval",
 *                   encodings: ["x"],
 *                   mark: {
 *                     fill: "#004170",
 *                     fillOpacity: 0.15,
 *                     stroke: "#004170",
 *                     strokeWidth: 1.5,
 *                     cursor: "ew-resize",
 *                   },
 *                 },
 *                 value: {
 *                   date: [{ year: 2004 }, { year: 2007 }],
 *                 },
 *               },
 *             ],
 *             encoding: {
 *               x: {
 *                 field: "date",
 *                 type: "temporal",
 *                 axis: { title: "Date" },
 *               },
 *               y: {
 *                 field: "price",
 *                 type: "quantitative",
 *                 axis: { tickCount: 3, grid: false, title: "" },
 *               },
 *             },
 *           },
 *           {
 *             data: { values: [{}] },
 *             mark: { type: "rule", color: "#004170", size: 2 },
 *             encoding: {
 *               x: {
 *                 datum: { expr: "brush.date ? brush.date[0] : null" },
 *                 type: "temporal",
 *               },
 *               opacity: {
 *                 condition: {
 *                   test: "brush.date && isArray(brush.date) && brush.date[0] != null",
 *                   value: 1,
 *                 },
 *                 value: 0,
 *               },
 *             },
 *           },
 *           {
 *             data: { values: [{}] },
 *             mark: { type: "rule", color: "#004170", size: 2 },
 *             encoding: {
 *               x: {
 *                 datum: { expr: "brush.date ? brush.date[1] : null" },
 *                 type: "temporal",
 *               },
 *               opacity: {
 *                 condition: {
 *                   test: "brush.date && isArray(brush.date) && brush.date[1] != null",
 *                   value: 1,
 *                 },
 *                 value: 0,
 *               },
 *             },
 *           },
 *           {
 *             data: { values: [{}] },
 *             mark: {
 *               type: "point",
 *               y: 35,
 *               shape:
 *                 "M -0.5 -1.5 A 0.5 0.5 0 0 1 0.5 -1.5 L 0.5 1.5 A 0.5 0.5 0 0 1 -0.5 1.5 Z",
 *               filled: true,
 *               fill: "#ffffff",
 *               stroke: "#004170",
 *               strokeWidth: 2,
 *               size: 220,
 *             },
 *             encoding: {
 *               x: {
 *                 datum: { expr: "brush.date ? brush.date[0] : null" },
 *                 type: "temporal",
 *               },
 *               opacity: {
 *                 condition: {
 *                   test: "brush.date && isArray(brush.date) && brush.date[0] != null",
 *                   value: 1,
 *                 },
 *                 value: 0,
 *               },
 *             },
 *           },
 *           {
 *             data: { values: [{}] },
 *             mark: {
 *               type: "point",
 *               y: 35,
 *               shape:
 *                 "M -0.5 -1.5 A 0.5 0.5 0 0 1 0.5 -1.5 L 0.5 1.5 A 0.5 0.5 0 0 1 -0.5 1.5 Z",
 *               filled: true,
 *               fill: "#ffffff",
 *               stroke: "#004170",
 *               strokeWidth: 2,
 *               size: 220,
 *             },
 *             encoding: {
 *               x: {
 *                 datum: { expr: "brush.date ? brush.date[1] : null" },
 *                 type: "temporal",
 *               },
 *               opacity: {
 *                 condition: {
 *                   test: "brush.date && isArray(brush.date) && brush.date[1] != null",
 *                   value: 1,
 *                 },
 *                 value: 0,
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   }}
 * ></eox-chart>
 * ```
 */
export const OverviewZoom = OverviewZoomStory;
