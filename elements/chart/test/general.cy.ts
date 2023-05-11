import { EOxChart } from "../src/main";

describe("Chart", () => {
  beforeEach(() => {
    cy.visit("/elements/chart/test/general.html");
  });

  it("should expose the chart object", () => {
    cy.get("eox-chart").should(($el) => {
      const eoxChart = <EOxChart>$el[0];
      expect(eoxChart.chart).to.exist;
    });
  });

  it("loads the chart", () => {
    cy.get("eox-chart").should(($el) => {
      const eoxChart = <EOxChart>$el[0];
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
