export const TEST_SELECTORS = {
  chart: "eox-chart",
  vegaContainer: "#vis",
  vegaCanvas: "canvas",
};

export const TEST_VALUES = {
  chartHeight: 300,
  chartSpec: {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "A simple bar chart with embedded data.",
    data: {
      values: [
        { a: "A", b: 28 },
        { a: "B", b: 55 },
        { a: "C", b: 43 },
        { a: "D", b: 91 },
        { a: "E", b: 81 },
        { a: "F", b: 53 },
        { a: "G", b: 19 },
        { a: "H", b: 87 },
        { a: "I", b: 52 },
      ],
    },
    mark: { type: "bar", tooltip: true, fill: "#004170" },
    encoding: {
      x: { field: "a", type: "ordinal" },
      y: { field: "b", type: "quantitative" },
    },
  },
};
