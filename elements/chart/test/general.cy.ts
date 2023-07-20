import { EOxChart } from "../src";

describe("Chart", () => {
  it("loads the chart", () => {
    const eoxChart = new EOxChart();
    // @ts-ignore 
    cy.mount(eoxChart, `<eox-chart id="chart" class="chart"></eox-chart>`).as(
      "eox-chart"
    );
    cy.get("eox-chart").should(() => {
      const data = {
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: [1, 2, 3, 4],
          },
          {
            type: "line",
            label: "Line Dataset",
            data: [6, 6, 6, 6],
          },
        ],
        labels: ["January", "February", "March", "April"],
      };
      eoxChart.setData(data);
    });
  });
});
