const OverviewZoom = {
  args: {
    style: "width: 100%; height: 450px;",
    spec: {
      $schema: "https://vega.github.io/schema/vega/v5.json",
      description:
        "Overview + detail chart with individually draggable left and right zoom handles.",
      width: 640,
      height: 350,
      padding: 10,
      autosize: "pad",

      data: [
        {
          name: "sp500",
          url: "https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/sp500.csv",
          format: { type: "csv", parse: { price: "number", date: "date" } },
        },
      ],

      scales: [
        {
          name: "xOverview",
          type: "time",
          range: [0, 640],
          domain: { data: "sp500", field: "date" },
        },
      ],

      signals: [
        {
          name: "brush",
          value: [220, 440],
          on: [
            {
              events: "@overviewBg:pointerdown",
              update: "[clamp(x(), 0, 640), clamp(x(), 0, 640)]",
            },
            {
              events:
                "[@overviewBg:pointerdown, window:pointerup] > window:pointermove!",
              update:
                "[min(bgAnchor[0], clamp(x(), 0, 640)), max(bgAnchor[0], clamp(x(), 0, 640))]",
            },
            {
              events:
                "[@handleLeft:pointerdown, window:pointerup] > window:pointermove!",
              update: "[min(clamp(x(), 0, 640), brush[1] - 10), brush[1]]",
            },
            {
              events:
                "[@handleRight:pointerdown, window:pointerup] > window:pointermove!",
              update: "[brush[0], max(clamp(x(), 0, 640), brush[0] + 10)]",
            },
            {
              events: { signal: "panDelta" },
              update:
                "clampRange([panAnchor[0] + panDelta, panAnchor[1] + panDelta], 0, 640)",
            },
            {
              events: { signal: "zoomDelta" },
              update:
                "clampRange(zoomLinear(brush, zoomAnchor, zoomDelta), 0, 640)",
            },
          ],
        },
        {
          name: "bgAnchor",
          value: [0, 0],
          on: [
            {
              events: "@overviewBg:pointerdown",
              update: "[clamp(x(), 0, 640), clamp(x(), 0, 640)]",
            },
          ],
        },
        {
          name: "panAnchor",
          value: null,
          on: [{ events: "@brushBody:pointerdown", update: "slice(brush)" }],
        },
        {
          name: "panDownX",
          value: 0,
          on: [{ events: "@brushBody:pointerdown", update: "x()" }],
        },
        {
          name: "panDelta",
          value: 0,
          on: [
            {
              events:
                "[@brushBody:pointerdown, window:pointerup] > window:pointermove!",
              update: "x() - panDownX",
            },
          ],
        },
        {
          name: "zoomAnchor",
          value: 0,
          on: [{ events: "@brushBody:wheel", update: "x()" }],
        },
        {
          name: "zoomDelta",
          on: [
            {
              events: "@brushBody:wheel",
              consume: true,
              force: true,
              update: "pow(1.001, event.deltaY * pow(16, event.deltaMode))",
            },
          ],
        },
        {
          name: "detailDomain",
          init: 'invert("xOverview", [220, 440])',
          on: [
            {
              events: { signal: "brush" },
              update: 'span(brush) ? invert("xOverview", brush) : null',
            },
          ],
        },
      ],

      marks: [
        {
          type: "group",
          name: "detail",
          encode: {
            enter: {
              x: { value: 0 },
              y: { value: 0 },
              height: { value: 230 },
              width: { value: 640 },
            },
          },
          scales: [
            {
              name: "xDetail",
              type: "time",
              range: "width",
              domain: { data: "sp500", field: "date" },
              domainRaw: { signal: "detailDomain" },
            },
            {
              name: "yDetail",
              type: "linear",
              range: [230, 0],
              domain: { data: "sp500", field: "price" },
              nice: true,
              zero: true,
            },
          ],
          axes: [
            { orient: "bottom", scale: "xDetail" },
            { orient: "left", scale: "yDetail", title: "Price ($)" },
          ],
          marks: [
            {
              type: "group",
              encode: {
                enter: {
                  height: { field: { group: "height" } },
                  width: { field: { group: "width" } },
                  clip: { value: true },
                },
              },
              marks: [
                {
                  type: "area",
                  from: { data: "sp500" },
                  encode: {
                    update: {
                      x: { scale: "xDetail", field: "date" },
                      y: { scale: "yDetail", field: "price" },
                      y2: { scale: "yDetail", value: 0 },
                      fill: { value: "#004170" },
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: "group",
          name: "overview",
          encode: {
            enter: {
              x: { value: 0 },
              y: { value: 275 },
              height: { value: 70 },
              width: { value: 640 },
            },
          },
          scales: [
            {
              name: "yOverview",
              type: "linear",
              range: [70, 0],
              domain: { data: "sp500", field: "price" },
              nice: true,
              zero: true,
            },
          ],
          axes: [{ orient: "bottom", scale: "xOverview", title: "Date" }],
          marks: [
            {
              type: "rect",
              name: "overviewBg",
              encode: {
                enter: {
                  x: { value: 0 },
                  y: { value: 0 },
                  width: { field: { group: "width" } },
                  height: { field: { group: "height" } },
                  fill: { value: "transparent" },
                  cursor: { value: "crosshair" },
                },
              },
            },
            {
              type: "area",
              interactive: false,
              from: { data: "sp500" },
              encode: {
                update: {
                  x: { scale: "xOverview", field: "date" },
                  y: { scale: "yOverview", field: "price" },
                  y2: { scale: "yOverview", value: 0 },
                  fill: { value: "#94b8d7" },
                  opacity: { value: 0.7 },
                },
              },
            },
            {
              type: "rect",
              name: "brushBody",
              encode: {
                enter: {
                  y: { value: 0 },
                  height: { field: { group: "height" } },
                  fill: { value: "#004170" },
                  fillOpacity: { value: 0.15 },
                  cursor: { value: "grab" },
                },
                update: {
                  x: { signal: "brush[0]" },
                  x2: { signal: "brush[1]" },
                },
              },
            },
            {
              type: "rect",
              interactive: false,
              encode: {
                enter: {
                  y: { value: 0 },
                  height: { field: { group: "height" } },
                  width: { value: 2 },
                  fill: { value: "#004170" },
                },
                update: {
                  x: { signal: "brush[0]" },
                },
              },
            },
            {
              type: "rect",
              interactive: false,
              encode: {
                enter: {
                  y: { value: 0 },
                  height: { field: { group: "height" } },
                  width: { value: 2 },
                  fill: { value: "#004170" },
                },
                update: {
                  x: { signal: "brush[1] - 2" },
                },
              },
            },
            {
              type: "rect",
              name: "handleLeft",
              encode: {
                enter: {
                  y: { value: 21 },
                  width: { value: 10 },
                  height: { value: 28 },
                  cornerRadius: { value: 5 },
                  fill: { value: "#ffffff" },
                  stroke: { value: "#004170" },
                  strokeWidth: { value: 2 },
                  cursor: { value: "ew-resize" },
                },
                update: {
                  x: { signal: "brush[0] - 5" },
                },
              },
            },
            {
              type: "rect",
              name: "handleRight",
              encode: {
                enter: {
                  y: { value: 21 },
                  width: { value: 10 },
                  height: { value: 28 },
                  cornerRadius: { value: 5 },
                  fill: { value: "#ffffff" },
                  stroke: { value: "#004170" },
                  strokeWidth: { value: 2 },
                  cursor: { value: "ew-resize" },
                },
                update: {
                  x: { signal: "brush[1] - 5" },
                },
              },
            },
          ],
        },
      ],
    },
  },
};

export default OverviewZoom;
