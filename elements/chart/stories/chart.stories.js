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
      .opt=${args.opt}
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
 * Overview + detail (focus + context) chart with interactive zoom brush and individually draggable handles.
 *
 * This example demonstrates a dual-view time series chart:
 * - **Detail View (top)**: A detailed area chart showing the zoomed time range, with its x-axis domain dynamically bound to the overview brush selection.
 * - **Overview View (bottom)**: A compact summary timeline displaying the full dataset extent with a draggable zoom window.
 * - **Individually Draggable Handles**: The left and right handles can be dragged individually to adjust the zoom range boundaries from either side (`w-resize` / `e-resize` cursor, consistent with `eox-timecontrol`).
 * - **Panning & Redrawing**: The central shaded area can be dragged to pan the active window across time (`grab` cursor), and clicking/dragging on the overview background creates a new zoom window (`crosshair` cursor). Mouse wheel scrolling over the active window also zooms the range.
 * - **Dark Mode & EOxUI Theme Support**: Rendered via SVG (`opt: { renderer: "svg" }`) using EOxUI CSS custom properties (`--primary`, `--primary-container`, `--surface`, `--on-surface`, `--outline`) with fallbacks so the chart, handles, text, and axes dynamically respond to dark mode.
 *
 * Fully functional example:
 *
 * ```html
 * <eox-chart
 *   style="width: 100%; height: 450px;"
 *   .opt=${{ renderer: "svg" }}
 *   .spec=${{
 *     $schema: "https://vega.github.io/schema/vega/v5.json",
 *     description:
 *       "Overview + detail chart with individually draggable left and right zoom handles.",
 *     width: 640,
 *     height: 350,
 *     padding: 10,
 *     autosize: "pad",
 *     data: [
 *       {
 *         name: "sp500",
 *         url: "https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/sp500.csv",
 *         format: { type: "csv", parse: { price: "number", date: "date" } },
 *       },
 *     ],
 *     scales: [
 *       {
 *         name: "xOverview",
 *         type: "time",
 *         range: [0, 640],
 *         domain: { data: "sp500", field: "date" },
 *       },
 *     ],
 *     signals: [
 *       {
 *         name: "brush",
 *         value: [220, 440],
 *         on: [
 *           {
 *             events: "@overviewBg:pointerdown",
 *             update: "[clamp(x(), 0, 640), clamp(x(), 0, 640)]",
 *           },
 *           {
 *             events:
 *               "[@overviewBg:pointerdown, window:pointerup] > window:pointermove!",
 *             update:
 *               "[min(bgAnchor[0], clamp(x(), 0, 640)), max(bgAnchor[0], clamp(x(), 0, 640))]",
 *           },
 *           {
 *             events:
 *               "[@handleLeft:pointerdown, window:pointerup] > window:pointermove!",
 *             update: "[min(clamp(x(), 0, 640), brush[1] - 10), brush[1]]",
 *           },
 *           {
 *             events:
 *               "[@handleRight:pointerdown, window:pointerup] > window:pointermove!",
 *             update: "[brush[0], max(clamp(x(), 0, 640), brush[0] + 10)]",
 *           },
 *           {
 *             events: { signal: "panDelta" },
 *             update:
 *               "clampRange([panAnchor[0] + panDelta, panAnchor[1] + panDelta], 0, 640)",
 *           },
 *           {
 *             events: { signal: "zoomDelta" },
 *             update:
 *               "clampRange(zoomLinear(brush, zoomAnchor, zoomDelta), 0, 640)",
 *           },
 *         ],
 *       },
 *       {
 *         name: "bgAnchor",
 *         value: [0, 0],
 *         on: [
 *           {
 *             events: "@overviewBg:pointerdown",
 *             update: "[clamp(x(), 0, 640), clamp(x(), 0, 640)]",
 *           },
 *         ],
 *       },
 *       {
 *         name: "panAnchor",
 *         value: null,
 *         on: [{ events: "@brushBody:pointerdown", update: "slice(brush)" }],
 *       },
 *       {
 *         name: "panDownX",
 *         value: 0,
 *         on: [{ events: "@brushBody:pointerdown", update: "x()" }],
 *       },
 *       {
 *         name: "panDelta",
 *         value: 0,
 *         on: [
 *           {
 *             events:
 *               "[@brushBody:pointerdown, window:pointerup] > window:pointermove!",
 *             update: "x() - panDownX",
 *           },
 *         ],
 *       },
 *       {
 *         name: "zoomAnchor",
 *         value: 0,
 *         on: [{ events: "@brushBody:wheel", update: "x()" }],
 *       },
 *       {
 *         name: "zoomDelta",
 *         on: [
 *           {
 *             events: "@brushBody:wheel",
 *             consume: true,
 *             force: true,
 *             update: "pow(1.001, event.deltaY * pow(16, event.deltaMode))",
 *           },
 *         ],
 *       },
 *       {
 *         name: "detailDomain",
 *         init: 'invert("xOverview", [220, 440])',
 *         on: [
 *           {
 *             events: { signal: "brush" },
 *             update: 'span(brush) ? invert("xOverview", brush) : null',
 *           },
 *         ],
 *       },
 *     ],
 *     marks: [
 *       {
 *         type: "group",
 *         name: "detail",
 *         encode: {
 *           enter: {
 *             x: { value: 0 },
 *             y: { value: 0 },
 *             height: { value: 230 },
 *             width: { value: 640 },
 *           },
 *         },
 *         scales: [
 *           {
 *             name: "xDetail",
 *             type: "time",
 *             range: "width",
 *             domain: { data: "sp500", field: "date" },
 *             domainRaw: { signal: "detailDomain" },
 *           },
 *           {
 *             name: "yDetail",
 *             type: "linear",
 *             range: [230, 0],
 *             domain: { data: "sp500", field: "price" },
 *             nice: true,
 *             zero: true,
 *           },
 *         ],
 *         axes: [
 *           {
 *             orient: "bottom",
 *             scale: "xDetail",
 *             domainColor: "var(--outline, #74777f)",
 *             tickColor: "var(--outline, #74777f)",
 *             labelColor: "var(--on-surface, #1a1c1e)",
 *             titleColor: "var(--on-surface, #1a1c1e)",
 *           },
 *           {
 *             orient: "left",
 *             scale: "yDetail",
 *             title: "Price ($)",
 *             domainColor: "var(--outline, #74777f)",
 *             tickColor: "var(--outline, #74777f)",
 *             labelColor: "var(--on-surface, #1a1c1e)",
 *             titleColor: "var(--on-surface, #1a1c1e)",
 *             gridColor: "var(--outline-variant, #e0e2ec)",
 *           },
 *         ],
 *         marks: [
 *           {
 *             type: "group",
 *             encode: {
 *               enter: {
 *                 height: { field: { group: "height" } },
 *                 width: { field: { group: "width" } },
 *                 clip: { value: true },
 *               },
 *             },
 *             marks: [
 *               {
 *                 type: "area",
 *                 from: { data: "sp500" },
 *                 encode: {
 *                   update: {
 *                     x: { scale: "xDetail", field: "date" },
 *                     y: { scale: "yDetail", field: "price" },
 *                     y2: { scale: "yDetail", value: 0 },
 *                     fill: { value: "var(--primary, #004170)" },
 *                   },
 *                 },
 *               },
 *             ],
 *           },
 *         ],
 *       },
 *       {
 *         type: "group",
 *         name: "overview",
 *         encode: {
 *           enter: {
 *             x: { value: 0 },
 *             y: { value: 275 },
 *             height: { value: 70 },
 *             width: { value: 640 },
 *           },
 *         },
 *         scales: [
 *           {
 *             name: "yOverview",
 *             type: "linear",
 *             range: [70, 0],
 *             domain: { data: "sp500", field: "price" },
 *             nice: true,
 *             zero: true,
 *           },
 *         ],
 *         axes: [
 *           {
 *             orient: "bottom",
 *             scale: "xOverview",
 *             title: "Date",
 *             domainColor: "var(--outline, #74777f)",
 *             tickColor: "var(--outline, #74777f)",
 *             labelColor: "var(--on-surface, #1a1c1e)",
 *             titleColor: "var(--on-surface, #1a1c1e)",
 *           },
 *         ],
 *         marks: [
 *           {
 *             type: "rect",
 *             name: "overviewBg",
 *             encode: {
 *               enter: {
 *                 x: { value: 0 },
 *                 y: { value: 0 },
 *                 width: { field: { group: "width" } },
 *                 height: { field: { group: "height" } },
 *                 fill: { value: "transparent" },
 *                 cursor: { value: "crosshair" },
 *               },
 *             },
 *           },
 *           {
 *             type: "area",
 *             interactive: false,
 *             from: { data: "sp500" },
 *             encode: {
 *               update: {
 *                 x: { scale: "xOverview", field: "date" },
 *                 y: { scale: "yOverview", field: "price" },
 *                 y2: { scale: "yOverview", value: 0 },
 *                 fill: { value: "var(--primary-container, #94b8d7)" },
 *                 opacity: { value: 0.7 },
 *               },
 *             },
 *           },
 *           {
 *             type: "rect",
 *             name: "brushBody",
 *             encode: {
 *               enter: {
 *                 y: { value: 0 },
 *                 height: { field: { group: "height" } },
 *                 fill: { value: "var(--primary, #004170)" },
 *                 fillOpacity: { value: 0.2 },
 *                 cursor: { value: "grab" },
 *               },
 *               update: {
 *                 x: { signal: "brush[0]" },
 *                 x2: { signal: "brush[1]" },
 *               },
 *             },
 *           },
 *           {
 *             type: "rect",
 *             interactive: false,
 *             encode: {
 *               enter: {
 *                 y: { value: 0 },
 *                 height: { field: { group: "height" } },
 *                 width: { value: 3 },
 *                 fill: { value: "var(--primary, #004170)" },
 *               },
 *               update: {
 *                 x: { signal: "brush[0]" },
 *               },
 *             },
 *           },
 *           {
 *             type: "rect",
 *             interactive: false,
 *             encode: {
 *               enter: {
 *                 y: { value: 0 },
 *                 height: { field: { group: "height" } },
 *                 width: { value: 3 },
 *                 fill: { value: "var(--primary, #004170)" },
 *               },
 *               update: {
 *                 x: { signal: "brush[1] - 3" },
 *               },
 *             },
 *           },
 *           {
 *             type: "rect",
 *             name: "handleLeft",
 *             encode: {
 *               enter: {
 *                 y: { value: 21 },
 *                 width: { value: 10 },
 *                 height: { value: 28 },
 *                 cornerRadius: { value: 5 },
 *                 fill: { value: "var(--surface, #ffffff)" },
 *                 stroke: { value: "var(--primary, #004170)" },
 *                 strokeWidth: { value: 2 },
 *                 cursor: { value: "w-resize" },
 *               },
 *               update: {
 *                 x: { signal: "brush[0] - 5" },
 *               },
 *             },
 *           },
 *           {
 *             type: "rect",
 *             name: "handleRight",
 *             encode: {
 *               enter: {
 *                 y: { value: 21 },
 *                 width: { value: 10 },
 *                 height: { value: 28 },
 *                 cornerRadius: { value: 5 },
 *                 fill: { value: "var(--surface, #ffffff)" },
 *                 stroke: { value: "var(--primary, #004170)" },
 *                 strokeWidth: { value: 2 },
 *                 cursor: { value: "e-resize" },
 *               },
 *               update: {
 *                 x: { signal: "brush[1] - 5" },
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
