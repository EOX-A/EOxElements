const DataValues = {
  args: {
    spec: {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description:
        "A simple bar chart with data passed from external property.",
      data: {
        name: "myData",
      },
      mark: { type: "bar", tooltip: true },
      encoding: {
        x: { field: "a", type: "ordinal" },
        y: { field: "b", type: "quantitative" },
        // color: { field: "b", type: "quantitative" },
        color: {
          condition: { test: "datum[b] > 40", value: "red" },
          value: "black",
        },
      },
    },
    dataValues: {
      myData: [
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
  },
};
export default DataValues;
