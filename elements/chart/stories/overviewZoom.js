const OverviewZoom = {
  args: {
    style: "width: 100%; height: 450px;",
    spec: {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description:
        "Overview + detail chart with an interactive mini-map timeline and prominent drag handles for zooming.",
      data: {
        url: "https://cdn.jsdelivr.net/npm/vega-datasets@v1.29.0/data/sp500.csv",
        format: { type: "csv", parse: { price: "number", date: "date" } },
      },
      vconcat: [
        {
          width: 640,
          height: 220,
          mark: {
            type: "area",
            color: "#004170",
            line: { color: "#002847", width: 1.5 },
          },
          encoding: {
            x: {
              field: "date",
              type: "temporal",
              scale: { domain: { param: "brush" } },
              axis: { title: "" },
            },
            y: {
              field: "price",
              type: "quantitative",
              axis: { title: "Price ($)" },
            },
          },
        },
        {
          width: 640,
          height: 70,
          layer: [
            {
              mark: {
                type: "area",
                color: "#94b8d7",
                opacity: 0.7,
              },
              params: [
                {
                  name: "brush",
                  select: {
                    type: "interval",
                    encodings: ["x"],
                    mark: {
                      fill: "#004170",
                      fillOpacity: 0.15,
                      stroke: "#004170",
                      strokeWidth: 1.5,
                      cursor: "ew-resize",
                    },
                  },
                  value: {
                    date: [{ year: 2004 }, { year: 2007 }],
                  },
                },
              ],
              encoding: {
                x: {
                  field: "date",
                  type: "temporal",
                  axis: { title: "Date" },
                },
                y: {
                  field: "price",
                  type: "quantitative",
                  axis: { tickCount: 3, grid: false, title: "" },
                },
              },
            },
            // Left handle boundary line
            {
              data: { values: [{}] },
              mark: {
                type: "rule",
                color: "#004170",
                size: 2,
              },
              encoding: {
                x: {
                  datum: { expr: "brush.date ? brush.date[0] : null" },
                  type: "temporal",
                },
                opacity: {
                  condition: {
                    test: "brush.date && isArray(brush.date) && brush.date[0] != null",
                    value: 1,
                  },
                  value: 0,
                },
              },
            },
            // Right handle boundary line
            {
              data: { values: [{}] },
              mark: {
                type: "rule",
                color: "#004170",
                size: 2,
              },
              encoding: {
                x: {
                  datum: { expr: "brush.date ? brush.date[1] : null" },
                  type: "temporal",
                },
                opacity: {
                  condition: {
                    test: "brush.date && isArray(brush.date) && brush.date[1] != null",
                    value: 1,
                  },
                  value: 0,
                },
              },
            },
            // Left handle grip pill
            {
              data: { values: [{}] },
              mark: {
                type: "point",
                y: 35,
                shape:
                  "M -0.5 -1.5 A 0.5 0.5 0 0 1 0.5 -1.5 L 0.5 1.5 A 0.5 0.5 0 0 1 -0.5 1.5 Z",
                filled: true,
                fill: "#ffffff",
                stroke: "#004170",
                strokeWidth: 2,
                size: 220,
              },
              encoding: {
                x: {
                  datum: { expr: "brush.date ? brush.date[0] : null" },
                  type: "temporal",
                },
                opacity: {
                  condition: {
                    test: "brush.date && isArray(brush.date) && brush.date[0] != null",
                    value: 1,
                  },
                  value: 0,
                },
              },
            },
            // Right handle grip pill
            {
              data: { values: [{}] },
              mark: {
                type: "point",
                y: 35,
                shape:
                  "M -0.5 -1.5 A 0.5 0.5 0 0 1 0.5 -1.5 L 0.5 1.5 A 0.5 0.5 0 0 1 -0.5 1.5 Z",
                filled: true,
                fill: "#ffffff",
                stroke: "#004170",
                strokeWidth: 2,
                size: 220,
              },
              encoding: {
                x: {
                  datum: { expr: "brush.date ? brush.date[1] : null" },
                  type: "temporal",
                },
                opacity: {
                  condition: {
                    test: "brush.date && isArray(brush.date) && brush.date[1] != null",
                    value: 1,
                  },
                  value: 0,
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
