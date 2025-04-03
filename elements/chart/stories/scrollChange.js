import { html } from "lit";

const ScrollChange = {
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
        y: { field: "b", type: "quantitative", scale: { domain: [0, 100] } },
        // color: {
        //   field: "b",
        //   legend: null,
        // },
        color: {
          condition: {
            test: "datum['b'] > 60",
            value: "red",
          },
          field: "b",
          legend: null,
        },
      },
    },
    // dataValues: {
    //   myData: [
    //     { a: "A", b: 28 },
    //     { a: "B", b: 55 },
    //     { a: "C", b: 43 },
    //     { a: "D", b: 91 },
    //     { a: "E", b: 81 },
    //     { a: "F", b: 53 },
    //     { a: "G", b: 19 },
    //     { a: "H", b: 87 },
    //     { a: "I", b: 52 },
    //   ],
    // },
  },
  render: (args) => html`
    <div class="scroll-container" style="width: 100%; height: 500vh">
      <eox-chart
        .spec=${args.spec}
        .dataValues=${args.dataValues}
        .noShadow=${args.noShadow}
        .unstyled=${args.unstyled}
        style="width:100%; height: 400px; position: fixed; top: 0;"
      ></eox-chart>
    </div>
    <script>
      const myData = [
        { a: "A", b: 0 },
        { a: "B", b: 0 },
        { a: "C", b: 0 },
        { a: "D", b: 0 },
        { a: "E", b: 0 },
        { a: "F", b: 0 },
        { a: "G", b: 0 },
        { a: "H", b: 0 },
        { a: "I", b: 0 },
      ];
      window.addEventListener("scroll", () => {
        const percent =
          (window.scrollY /
            document.querySelector(".scroll-container").clientHeight) *
          100;
        document.querySelector("eox-chart").dataValues = {
          myData: [
            { a: "A", b: percent * 0.1 },
            { a: "B", b: percent * 0.4 },
            { a: "C", b: percent * 0.5 },
            { a: "D", b: percent },
            { a: "E", b: percent * 0.33 },
            { a: "F", b: percent * 0.8 },
            { a: "G", b: percent * 0.3 },
            { a: "H", b: percent * 0.9 },
            { a: "I", b: percent * 0.6 },
          ],
        };
      });
      document.querySelector("eox-chart").dataValues = {
        myData,
      };
    </script>
  `,
};
export default ScrollChange;
